/* Astra AI Tutor Web App - Fixed Core Engine & Router */

const appState = {
  activeView: 'dashboard',
  currentTopicId: 1,
  activeTopicSubtab: 'theory',
  topicSlidePages: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 },
  topicMastery: JSON.parse(localStorage.getItem('astra_tut_mastery') || '{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0}'),
  topicAnswers: JSON.parse(localStorage.getItem('astra_tut_topic_ans') || '{}'),
  solverCurrentStep: 1,
  socraticHintLevel: 1,
  masterExamAnswers: {},
  masterExamSubmitted: false
};

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  renderSkillTree();
  updateReadinessGauge();
  
  // Pre-render Topic 1 and Master Exam so all DOM elements are populated immediately!
  loadTopicDetail(1);
  renderMasterExam(0);
});

// SPA Navigation Router
function initNavigation() {
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = el.dataset.nav;
      navigateTo(targetView);
    });
  });
}

function navigateTo(viewId, params = {}) {
  appState.activeView = viewId;

  // Update Bottom Nav Active
  document.querySelectorAll('.bottom-nav-item').forEach(item => {
    if (item.dataset.nav === viewId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Hide all view sections
  document.querySelectorAll('.app-view').forEach(view => {
    if (view.id === `view-${viewId}`) {
      view.classList.remove('hidden');
    } else {
      view.classList.add('hidden');
    }
  });

  if (viewId === 'topic-detail') {
    const tId = params.topicId || appState.currentTopicId || 1;
    loadTopicDetail(tId);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Update Overall Readiness Gauge %
function updateReadinessGauge() {
  const scores = Object.values(appState.topicMastery);
  const avg = Math.round(scores.reduce((a, b) => a + b, 0) / 9);

  const gaugePercent = document.getElementById('overall-readiness-val');
  const gaugeBar = document.getElementById('overall-readiness-bar');
  const dashPercent = document.getElementById('dash-prep-progress');

  if (gaugePercent) gaugePercent.innerText = `${avg}%`;
  if (gaugeBar) gaugeBar.style.width = `${avg}%`;
  if (dashPercent) dashPercent.innerText = `${avg}% Sẵn sàng`;
}

// Render Skill Tree Nodes
function renderSkillTree() {
  for (let i = 1; i <= 9; i++) {
    const score = appState.topicMastery[i] || 0;
    const scoreBadge = document.getElementById(`tree-node-score-${i}`);
    const bar = document.getElementById(`tree-node-bar-${i}`);

    if (scoreBadge) scoreBadge.innerText = `${score}%`;
    if (bar) bar.style.width = `${score}%`;
  }
}

// Load Specific Topic Workspace
function loadTopicDetail(topicId) {
  appState.currentTopicId = topicId;

  const topicTitles = {
    1: "Chủ Đề 1: Tổng Quan Về Internet Và Cấu Trúc Mạng",
    2: "Chủ Đề 2: Chuyển Mạch Gói, Độ Trễ Và Hiệu Suất Mạng",
    3: "Chủ Đề 3: Mô Hình Phân Lớp Và Bảo Mật Mạng",
    4: "Chủ Đề 4: Kiến Trúc Và Dịch Vụ Tầng Ứng Dụng",
    5: "Chủ Đề 5: Các Giao Thức Ứng Dụng Mạng Web, Email, DNS",
    6: "Chủ Đề 6: Mạng Ngang Hàng P2P Và Lập Trình Socket",
    7: "Chủ Đề 7: Nguyên Lý Truyền Dữ Liệu Tin Cậy RDT",
    8: "Chủ Đề 8: Giao Thức UDP Và Giao Thức TCP Chi Tiết",
    9: "Chủ Đề 9: Cơ Chế Điều Khiển Tắc Nghẽn Trong TCP"
  };

  const titleEl = document.getElementById('topic-detail-title');
  if (titleEl) titleEl.innerText = topicTitles[topicId] || `Chủ Đề ${topicId}`;

  // Hide all topic panes, show active one
  document.querySelectorAll('.topic-content-pane').forEach(pane => {
    if (parseInt(pane.dataset.topic) === topicId) {
      pane.classList.remove('hidden');
    } else {
      pane.classList.add('hidden');
    }
  });

  // Render Slide Deck for Theory
  const currentPage = appState.topicSlidePages[topicId] || 0;
  renderTopicSlide(topicId, currentPage);

  // Reset Subtab to Theory
  switchTopicSubtab('theory');
  renderTopicQuiz(topicId);
}

function switchTopicSubtab(subtabId) {
  appState.activeTopicSubtab = subtabId;

  const currentPane = document.querySelector(`.topic-content-pane[data-topic="${appState.currentTopicId}"]`);
  if (!currentPane) return;

  currentPane.querySelectorAll('.topic-tab-btn').forEach(btn => {
    if (btn.dataset.subtab === subtabId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  currentPane.querySelectorAll('.topic-subtab-pane').forEach(pane => {
    if (pane.dataset.subtab === subtabId) {
      pane.classList.remove('hidden');
    } else {
      pane.classList.add('hidden');
    }
  });
}

// -------------------------------------------------------------
// SLIDE DECK STEPPER ENGINE (MULTI-PAGE LESSON NAVIGATION)
// -------------------------------------------------------------
function renderTopicSlide(topicId, pageIndex) {
  if (typeof topicLessonsData === 'undefined') {
    console.error("topicLessonsData is missing!");
    return;
  }

  const slides = topicLessonsData[topicId];
  if (!slides || slides.length === 0) return;

  if (pageIndex < 0) pageIndex = 0;
  if (pageIndex >= slides.length) pageIndex = slides.length - 1;

  appState.topicSlidePages[topicId] = pageIndex;
  const slide = slides[pageIndex];

  const currentPane = document.querySelector(`.topic-content-pane[data-topic="${topicId}"]`);
  if (!currentPane) return;

  const deckContainer = currentPane.querySelector('.slide-deck-card');
  if (!deckContainer) return;

  const totalPages = slides.length;
  const progressPercent = Math.round(((pageIndex + 1) / totalPages) * 100);

  deckContainer.innerHTML = `
    <!-- Slide Header -->
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-800 pb-3">
      <div class="flex items-center gap-2">
        <span class="bg-blue-950 text-blue-300 border border-blue-500/40 text-xs font-bold px-2.5 py-0.5 rounded-full">
          Trang ${pageIndex + 1} / ${totalPages}
        </span>
        <h4 class="font-bold text-slate-100 text-sm">${slide.title}</h4>
      </div>

      <!-- Slide Page Jump Dropdown -->
      <select onchange="jumpToSlide(${topicId}, this.value)" class="bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-slate-300 focus:outline-none cursor-pointer">
        ${slides.map((s, i) => `<option value="${i}" ${i === pageIndex ? 'selected' : ''}>Trang ${i + 1}: ${s.title.split(':')[1] || s.title}</option>`).join('')}
      </select>
    </div>

    <!-- Slide Progress Bar -->
    <div class="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden my-3 border border-slate-800">
      <div class="bg-gradient-to-r from-blue-500 to-emerald-400 h-full transition-all duration-300" style="width: ${progressPercent}%"></div>
    </div>

    <!-- Slide Content HTML Body -->
    <div class="slide-page-content min-h-[200px] py-2">
      ${slide.html}
    </div>

    <!-- Slide Stepper Nav Controls -->
    <div class="flex justify-between items-center border-t border-slate-800 pt-4 mt-4">
      <button onclick="prevTopicSlide(${topicId})" ${pageIndex === 0 ? 'disabled' : ''} class="bg-slate-900 hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none text-slate-200 border border-slate-700 font-bold text-xs px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer">
        <span>◀</span> <span>Trang Trước</span>
      </button>

      <div class="text-[11px] text-slate-400 font-medium">
        Bấm nút tiếp tục để học các trang slide kế tiếp
      </div>

      <button onclick="nextTopicSlide(${topicId})" ${pageIndex === totalPages - 1 ? 'disabled' : ''} class="bg-blue-600 hover:bg-blue-500 disabled:opacity-30 disabled:pointer-events-none text-white font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-md shadow-blue-600/30 flex items-center gap-1.5 cursor-pointer">
        <span>Trang Tiếp Theo</span> <span>▶</span>
      </button>
    </div>
  `;
}

function nextTopicSlide(topicId) {
  const current = appState.topicSlidePages[topicId] || 0;
  renderTopicSlide(topicId, current + 1);
}

function prevTopicSlide(topicId) {
  const current = appState.topicSlidePages[topicId] || 0;
  renderTopicSlide(topicId, current - 1);
}

function jumpToSlide(topicId, pageIndex) {
  renderTopicSlide(topicId, parseInt(pageIndex));
}

// -------------------------------------------------------------
// TOPIC QUIZ RENDERER & EVALUATOR
// -------------------------------------------------------------
function renderTopicQuiz(topicId) {
  const container = document.getElementById(`topic-${topicId}-quiz-container`);
  if (!container) return;
  if (typeof masterQuestionBank === 'undefined') return;

  const questions = masterQuestionBank.filter(q => q.topicId === topicId);
  if (questions.length === 0) return;

  let html = '';
  questions.forEach((q, idx) => {
    html += `
      <div id="t${topicId}-q${idx}-card" data-correct="${q.ans}" class="bg-slate-900/90 border border-slate-800 p-4 rounded-xl space-y-3">
        <h5 class="font-bold text-slate-100 text-sm">Câu ${idx + 1}: ${q.q}</h5>
        <div class="space-y-2 text-xs">
          ${q.opts.map((opt, oIdx) => `
            <div onclick="selectTopicQuizOpt(${topicId}, ${idx}, ${oIdx})" id="t${topicId}-q${idx}-opt-${oIdx}" class="topic-quiz-opt p-3 rounded-lg border border-slate-800 bg-slate-950 flex items-center gap-3">
              <span class="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-400 text-[11px]">${String.fromCharCode(65 + oIdx)}</span>
              <span>${opt}</span>
            </div>
          `).join('')}
        </div>
        <div id="t${topicId}-q${idx}-exp" class="hidden p-3 bg-slate-950 rounded-lg border border-blue-500/30 text-xs text-slate-300">
          💡 <strong>Giải thích:</strong> ${q.exp}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function selectTopicQuizOpt(topicId, qIdx, oIdx) {
  if (!appState.topicAnswers[topicId]) appState.topicAnswers[topicId] = {};
  appState.topicAnswers[topicId][qIdx] = oIdx;
  localStorage.setItem('astra_tut_topic_ans', JSON.stringify(appState.topicAnswers));

  const questions = masterQuestionBank.filter(q => q.topicId === topicId);
  questions[qIdx].opts.forEach((_, i) => {
    const el = document.getElementById(`t${topicId}-q${qIdx}-opt-${i}`);
    if (i === oIdx) el?.classList.add('selected');
    else el?.classList.remove('selected');
  });
}

function submitTopicQuiz(topicId) {
  const questions = masterQuestionBank.filter(q => q.topicId === topicId);
  const answers = appState.topicAnswers[topicId] || {};
  let correct = 0;

  questions.forEach((q, idx) => {
    const userAns = answers[idx];
    const expDiv = document.getElementById(`t${topicId}-q${idx}-exp`);
    if (expDiv) expDiv.classList.remove('hidden');

    q.opts.forEach((_, i) => {
      const optEl = document.getElementById(`t${topicId}-q${idx}-opt-${i}`);
      optEl?.classList.remove('selected');
      if (i === q.ans) optEl?.classList.add('correct');
      else if (i === userAns && userAns !== q.ans) optEl?.classList.add('incorrect');
    });

    if (userAns === q.ans) correct++;
  });

  const score = Math.round((correct / questions.length) * 100);
  appState.topicMastery[topicId] = score;
  localStorage.setItem('astra_tut_mastery', JSON.stringify(appState.topicMastery));

  renderSkillTree();
  updateReadinessGauge();

  const scoreDiv = document.getElementById(`t${topicId}-quiz-score`);
  if (scoreDiv) {
    scoreDiv.classList.remove('hidden');
    scoreDiv.innerHTML = `
      <div class="p-3 bg-slate-900 border border-emerald-500/40 rounded-xl text-xs flex justify-between items-center">
        <span>Kết quả Trắc nghiệm Chủ đề ${topicId}: <strong class="text-emerald-400 text-sm ml-1">${correct}/${questions.length} câu đúng (${score}%)</strong></span>
        <span class="text-emerald-300 font-bold">Đã cập nhật mức thành thạo!</span>
      </div>
    `;
  }
}

// -------------------------------------------------------------
// MASTER EXAM ENGINE
// -------------------------------------------------------------
function renderMasterExam(chFilter = 0) {
  const container = document.getElementById('master-exam-questions-list');
  if (!container || typeof masterQuestionBank === 'undefined') return;

  let questions = masterQuestionBank;
  if (chFilter > 0) {
    questions = masterQuestionBank.filter(q => q.ch === chFilter);
  }

  const countBadge = document.getElementById('master-exam-count');
  if (countBadge) countBadge.innerText = `${questions.length} Câu Hỏi`;

  let html = '';
  questions.forEach((q, idx) => {
    html += `
      <div id="me-q${q.id}-card" data-correct="${q.ans}" class="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-3">
        <div class="flex justify-between items-center">
          <span class="font-bold text-slate-100 text-sm">Câu ${idx + 1}: ${q.q}</span>
          <span class="badge-ch${q.ch} text-[10px] px-2 py-0.5 rounded font-bold">Chương ${q.ch}</span>
        </div>

        <div class="space-y-2 text-xs">
          ${q.opts.map((opt, oIdx) => `
            <div onclick="selectMasterExamOpt(${q.id}, ${oIdx})" id="me-q${q.id}-opt-${oIdx}" class="quiz-option p-3 rounded-lg border border-slate-800 bg-slate-950 flex items-center gap-3">
              <span class="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-400 text-[11px]">${String.fromCharCode(65 + oIdx)}</span>
              <span>${opt}</span>
            </div>
          `).join('')}
        </div>

        <div id="me-q${q.id}-exp" class="hidden p-3 bg-slate-950 rounded-lg border border-blue-500/30 text-xs text-slate-300">
          💡 <strong>Giải thích:</strong> ${q.exp}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function selectMasterExamOpt(qId, oIdx) {
  if (appState.masterExamSubmitted) return;
  appState.masterExamAnswers[qId] = oIdx;

  const q = masterQuestionBank.find(x => x.id === qId);
  q.opts.forEach((_, i) => {
    const el = document.getElementById(`me-q${qId}-opt-${i}`);
    if (i === oIdx) el?.classList.add('selected');
    else el?.classList.remove('selected');
  });
}

function submitMasterExam() {
  appState.masterExamSubmitted = true;
  let correct = 0;

  masterQuestionBank.forEach(q => {
    const userAns = appState.masterExamAnswers[q.id];
    const expDiv = document.getElementById(`me-q${q.id}-exp`);
    if (expDiv) expDiv.classList.remove('hidden');

    q.opts.forEach((_, i) => {
      const optEl = document.getElementById(`me-q${q.id}-opt-${i}`);
      optEl?.classList.remove('selected');
      if (i === q.ans) optEl?.classList.add('correct');
      else if (i === userAns && userAns !== q.ans) optEl?.classList.add('incorrect');
    });

    if (userAns === q.ans) correct++;
  });

  const total = masterQuestionBank.length;
  const score = Math.round((correct / total) * 100);

  const resDiv = document.getElementById('master-exam-score-banner');
  if (resDiv) {
    resDiv.classList.remove('hidden');
    resDiv.innerHTML = `
      <div class="glass-card p-6 border-emerald-500/40 text-center space-y-2">
        <h3 class="text-2xl font-black text-emerald-400">KẾT QUẢ ĐỀ THI TỔNG HỢP: ${correct} / ${total} CÂU ĐÚNG (${score}%)</h3>
        <p class="text-xs text-slate-300">
          ${score >= 80 ? '🎉 Xuất sắc! Bạn đã sẵn sàng đạt điểm A môn Mạng máy tính!' : '💪 Bạn cần rà soát lại các chủ đề bị sai để củng cố kiến thức!'}
        </p>
      </div>
    `;
  }
}

function filterMasterExam(ch) {
  renderMasterExam(ch);
}

// Paywall Modal
function openPaywallModal() {
  const modal = document.getElementById('paywall-modal');
  if (modal) modal.classList.remove('hidden');
}

function closePaywallModal() {
  const modal = document.getElementById('paywall-modal');
  if (modal) modal.classList.add('hidden');
}
