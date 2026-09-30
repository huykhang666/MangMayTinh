const fs = require('fs');

let script = fs.readFileSync('script.js', 'utf8');

const newMttScript = `
/* ========================================================= */
/* MTT PDF EXAM ENGINE (148 QUESTIONS BANK WITH DIAGRAMS)  */
/* ========================================================= */
let mttExamCurrentFilter = 0;
let mttExamSearchQuery = '';
let mttExamUserAnswers = {};
let mttExamSubmitted = false;
let mttExamIsShuffled = false;
let mttExamInstantAnswer = false;
let mttExamAllExplanationsVisible = false;
let mttActiveQuestionsOrder = [];

function renderMttExam(chFilter = 0, searchQuery = '') {
  mttExamCurrentFilter = chFilter;
  mttExamSearchQuery = searchQuery.trim().toLowerCase();

  const container = document.getElementById('mtt-exam-questions-list');
  const countBadge = document.getElementById('mtt-exam-count');
  if (!container) return;

  if (typeof mttPdfQuestions === 'undefined') {
    container.innerHTML = \`<div class="p-6 text-center text-slate-500 font-medium">Đang tải ngân hàng 148 câu trắc nghiệm MTT...</div>\`;
    return;
  }

  let questions = [...mttPdfQuestions];

  // Filter by chapter or images
  if (chFilter === 'img') {
    questions = questions.filter(q => q.images && q.images.length > 0);
  } else if (chFilter > 0) {
    questions = questions.filter(q => q.ch === chFilter);
  }

  // Filter by search query
  if (mttExamSearchQuery) {
    questions = questions.filter(q => {
      const matchQ = q.q.toLowerCase().includes(mttExamSearchQuery);
      const matchOpts = q.opts.some(o => o.toLowerCase().includes(mttExamSearchQuery));
      return matchQ || matchOpts;
    });
  }

  // Apply Shuffle if enabled
  if (mttExamIsShuffled) {
    questions = shuffleArray(questions);
  }

  mttActiveQuestionsOrder = questions;

  if (countBadge) countBadge.innerText = \`\${questions.length} Câu Hỏi\`;

  if (questions.length === 0) {
    container.innerHTML = \`<div class="p-8 text-center text-slate-500 font-medium">Không tìm thấy câu hỏi nào phù hợp với bộ lọc.</div>\`;
    renderMttPalette([]);
    return;
  }

  container.innerHTML = questions.map((q, idx) => {
    const userAns = mttExamUserAnswers[q.id];
    const isSubmitted = mttExamSubmitted;
    const hasUserAns = userAns !== undefined && (Array.isArray(userAns) ? userAns.length > 0 : true);
    const isInstant = mttExamInstantAnswer && hasUserAns;
    const showExp = isSubmitted || isInstant || mttExamAllExplanationsVisible;
    
    // Format images if present
    let imagesHtml = '';
    if (q.images && q.images.length > 0) {
      imagesHtml = q.images.map(img => \`
        <div class="my-3.5 p-3 bg-slate-100 border border-slate-300 rounded-xl text-center shadow-inner">
          <img src="mtt_images/\${img}" class="max-h-80 mx-auto rounded-lg shadow-md border border-slate-300 object-contain" alt="Sơ đồ minh họa câu \${q.id}" />
          <p class="text-[11px] text-slate-600 mt-2 font-semibold">📷 Sơ đồ / hình ảnh minh họa đi kèm (Câu \${q.id})</p>
        </div>
      \`).join('');
    }

    return \`
      <div id="mtt-q\${q.id}-card" class="bg-slate-50 p-5 md:p-6 rounded-2xl border border-slate-200 space-y-4 shadow-sm scroll-mt-24 transition-all">
        <div class="flex justify-between items-start gap-3">
          <span class="quiz-question-title font-extrabold text-slate-900 text-base md:text-lg leading-relaxed">Câu \${q.id}: \${q.q}</span>
          <span class="badge-ch\${q.ch} text-[10px] px-2.5 py-1 rounded font-bold shrink-0">Chương \${q.ch}</span>
        </div>

        \${imagesHtml}

        <div class="space-y-2.5">
          \${q.opts.map((opt, oIdx) => {
            const isSelected = Array.isArray(userAns) ? userAns.includes(oIdx) : userAns === oIdx;
            let optClass = 'quiz-option p-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 flex items-center gap-3 font-medium text-slate-800 text-sm md:text-base transition-all shadow-sm cursor-pointer';
            
            if (isSubmitted || isInstant) {
              const isCorrectOpt = Array.isArray(q.ansList) && q.ansList.length > 0 ? q.ansList.includes(oIdx) : q.ans === oIdx;
              if (isCorrectOpt) {
                optClass = 'quiz-option p-3.5 rounded-xl border-2 border-emerald-500 bg-emerald-50 text-emerald-950 font-bold flex items-center gap-3 text-sm md:text-base shadow-sm';
              } else if (isSelected && !isCorrectOpt) {
                optClass = 'quiz-option p-3.5 rounded-xl border-2 border-rose-500 bg-rose-50 text-rose-950 flex items-center gap-3 text-sm md:text-base shadow-sm';
              }
            } else if (isSelected) {
              optClass = 'quiz-option p-3.5 rounded-xl border-2 border-blue-600 bg-blue-50 text-blue-900 font-bold flex items-center gap-3 text-sm md:text-base shadow-sm';
            }

            return \`
              <div onclick="selectMttExamOpt(\${q.id}, \${oIdx})" id="mtt-q\${q.id}-opt-\${oIdx}" class="\${optClass}">
                <span class="w-6 h-6 rounded-full \${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-800'} flex items-center justify-center font-extrabold text-xs shrink-0">\${String.fromCharCode(65 + oIdx)}</span>
                <span>\${opt}</span>
              </div>
            \`;
          }).join('')}
        </div>

        <div id="mtt-q\${q.id}-exp" class="\${showExp ? 'block' : 'hidden'} p-4 bg-blue-50 rounded-xl border border-blue-200 text-sm md:text-base text-slate-900 leading-relaxed font-medium shadow-sm">
          💡 <strong>Đáp án & Giải thích:</strong> \${q.exp}
        </div>
      </div>
    \`;
  }).join('');

  renderMttPalette(questions);
  triggerMathRender();
}

function renderMttPalette(questions) {
  const paletteContainer = document.getElementById('mtt-question-palette');
  const paletteStats = document.getElementById('mtt-palette-stats');
  const answeredEl = document.getElementById('mtt-answered-count');
  const unansweredEl = document.getElementById('mtt-unanswered-count');

  if (!paletteContainer) return;

  let answeredCount = 0;

  paletteContainer.innerHTML = questions.map((q) => {
    const userAns = mttExamUserAnswers[q.id];
    const hasAns = userAns !== undefined && (Array.isArray(userAns) ? userAns.length > 0 : true);
    if (hasAns) answeredCount++;

    let boxClass = 'w-full aspect-square rounded-lg border flex items-center justify-center font-bold text-[11px] transition-all cursor-pointer shadow-xs ';

    if (mttExamSubmitted || (mttExamInstantAnswer && hasAns)) {
      let isCorrect = false;
      if (Array.isArray(q.ansList) && q.ansList.length > 0) {
        if (Array.isArray(userAns)) {
          isCorrect = q.ansList.length === userAns.length && q.ansList.every(v => userAns.includes(v));
        } else {
          isCorrect = q.ansList.length === 1 && q.ansList[0] === userAns;
        }
      } else {
        isCorrect = userAns === q.ans;
      }

      if (hasAns) {
        if (isCorrect) {
          boxClass += 'bg-emerald-600 text-white border-emerald-700 font-extrabold shadow-sm';
        } else {
          boxClass += 'bg-rose-600 text-white border-rose-700 font-extrabold shadow-sm';
        }
      } else {
        boxClass += 'bg-slate-100 text-slate-500 border-slate-300 opacity-60';
      }
    } else if (hasAns) {
      boxClass += 'bg-blue-600 text-white border-blue-700 font-black shadow-sm';
    } else {
      boxClass += 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300';
    }

    return \`
      <button onclick="scrollToMttQuestion(\${q.id})" id="mtt-palette-box-\${q.id}" class="\${boxClass}" title="Câu \${q.id}: \${hasAns ? 'Đã chọn' : 'Chưa chọn'}">
        \${q.id}
      </button>
    \`;
  }).join('');

  const unansweredCount = questions.length - answeredCount;
  if (paletteStats) paletteStats.innerText = \`\${answeredCount}/\${questions.length}\`;
  if (answeredEl) answeredEl.innerText = answeredCount;
  if (unansweredEl) unansweredEl.innerText = unansweredCount;
}

function scrollToMttQuestion(qId) {
  const card = document.getElementById(\`mtt-q\${qId}-card\`);
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    card.classList.add('ring-4', 'ring-blue-500/50');
    setTimeout(() => {
      card.classList.remove('ring-4', 'ring-blue-500/50');
    }, 1500);
  }
}

function selectMttExamOpt(qId, oIdx) {
  const q = mttPdfQuestions.find(item => item.id === qId);
  if (!q) return;

  const isMulti = q.ansList && q.ansList.length > 1;

  if (isMulti) {
    if (!Array.isArray(mttExamUserAnswers[qId])) {
      mttExamUserAnswers[qId] = [];
    }
    const idx = mttExamUserAnswers[qId].indexOf(oIdx);
    if (idx > -1) {
      mttExamUserAnswers[qId].splice(idx, 1);
    } else {
      mttExamUserAnswers[qId].push(oIdx);
    }
  } else {
    mttExamUserAnswers[qId] = oIdx;
  }

  // If Instant Answer Mode is enabled, re-render question list immediately
  if (mttExamInstantAnswer || mttExamSubmitted) {
    renderMttExam(mttExamCurrentFilter, mttExamSearchQuery);
    return;
  }

  // Update options UI for this question card
  q.opts.forEach((_, i) => {
    const el = document.getElementById(\`mtt-q\${qId}-opt-\${i}\`);
    if (el) {
      const isSelected = isMulti 
        ? (mttExamUserAnswers[qId] || []).includes(i)
        : mttExamUserAnswers[qId] === i;
      
      if (isSelected) {
        el.className = 'quiz-option p-3.5 rounded-xl border-2 border-blue-600 bg-blue-50 text-blue-900 font-bold flex items-center gap-3 text-sm md:text-base transition-all shadow-sm cursor-pointer';
      } else {
        el.className = 'quiz-option p-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 flex items-center gap-3 font-medium text-slate-800 text-sm md:text-base transition-all shadow-sm cursor-pointer';
      }
    }
  });

  // Update Palette Grid status
  renderMttPalette(mttActiveQuestionsOrder);
}

function toggleMttShuffle() {
  mttExamIsShuffled = !mttExamIsShuffled;
  const btn = document.getElementById('mtt-btn-shuffle');
  const txt = document.getElementById('mtt-shuffle-text');

  if (mttExamIsShuffled) {
    if (btn) btn.className = 'bg-purple-600 text-white font-bold px-3.5 py-2 rounded-xl transition-all shadow-md flex items-center gap-1.5 cursor-pointer';
    if (txt) txt.innerText = 'Đã Tráo Đổi (Tắt)';
  } else {
    if (btn) btn.className = 'bg-white hover:bg-slate-200 text-slate-800 border border-slate-300 font-bold px-3.5 py-2 rounded-xl transition-all shadow-xs flex items-center gap-1.5 cursor-pointer';
    if (txt) txt.innerText = 'Tráo Đổi Câu Hỏi';
  }

  renderMttExam(mttExamCurrentFilter, mttExamSearchQuery);
}

function toggleMttInstantAnswer() {
  mttExamInstantAnswer = !mttExamInstantAnswer;
  const statusEl = document.getElementById('mtt-instant-ans-status');
  const btn = document.getElementById('mtt-btn-instant-ans');

  if (mttExamInstantAnswer) {
    if (statusEl) { statusEl.innerText = 'BẬT'; statusEl.className = 'text-emerald-600 font-extrabold'; }
    if (btn) btn.className = 'bg-amber-100 text-amber-900 border-2 border-amber-500 font-bold px-3.5 py-2 rounded-xl transition-all shadow-sm flex items-center gap-1.5 cursor-pointer';
  } else {
    if (statusEl) { statusEl.innerText = 'TẮT'; statusEl.className = 'text-slate-500 font-bold'; }
    if (btn) btn.className = 'bg-white hover:bg-slate-200 text-slate-800 border border-slate-300 font-bold px-3.5 py-2 rounded-xl transition-all shadow-xs flex items-center gap-1.5 cursor-pointer';
  }

  renderMttExam(mttExamCurrentFilter, mttExamSearchQuery);
}

function toggleAllMttExplanations() {
  mttExamAllExplanationsVisible = !mttExamAllExplanationsVisible;
  renderMttExam(mttExamCurrentFilter, mttExamSearchQuery);
}

function shuffleArray(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
`;

// Replace MTT code section in script.js
const startMarker = '/* ========================================================= */\n/* MTT PDF EXAM ENGINE (148 QUESTIONS BANK WITH DIAGRAMS)  */\n/* ========================================================= */';
const pos = script.indexOf(startMarker);
if (pos !== -1) {
  script = script.substring(0, pos) + newMttScript;
} else {
  script += '\n' + newMttScript;
}

fs.writeFileSync('script.js', script, 'utf8');
console.log('Successfully updated script.js with Shuffle, Instant Answer, and Palette Navigation!');
