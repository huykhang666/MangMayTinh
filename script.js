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

    // Clean up slide title to avoid duplicate "Trang X/Y:" prefix text overlap
    const cleanTitle = slide.title.replace(/^Trang\s+\d+\/\d+:\s*/i, '');

    deckContainer.innerHTML = `
      <!-- Slide Header -->
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-200 pb-3">
        <div class="flex items-center gap-2.5">
          <span class="bg-blue-100 text-blue-700 border border-blue-300 text-xs font-extrabold px-3 py-1 rounded-full shadow-sm">
            Trang ${pageIndex + 1} / ${totalPages}
          </span>
          <h4 class="font-bold text-slate-900 text-sm md:text-base leading-snug">${cleanTitle}</h4>
        </div>

        <!-- Slide Page Jump Dropdown -->
        <select onchange="jumpToSlide(${topicId}, this.value)" class="bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-800 focus:outline-none cursor-pointer transition-all shadow-sm">
          ${slides.map((s, i) => {
            const titleClean = s.title.replace(/^Trang\s+\d+\/\d+:\s*/i, '');
            return `<option value="${i}" ${i === pageIndex ? 'selected' : ''}>Trang ${i + 1}: ${titleClean}</option>`;
          }).join('')}
        </select>
      </div>

      <!-- Slide Progress Bar -->
      <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden my-3.5 border border-slate-200">
        <div class="bg-gradient-to-r from-blue-600 to-emerald-600 h-full transition-all duration-300" style="width: ${progressPercent}%"></div>
      </div>

      <!-- Slide Content HTML Body -->
      <div class="slide-page-content min-h-[200px] py-2 text-slate-900">
        ${slide.html}
      </div>

      <!-- Slide Stepper Nav Controls -->
      <div class="flex justify-between items-center border-t border-slate-200 pt-4 mt-4">
        <button onclick="prevTopicSlide(${topicId})" ${pageIndex === 0 ? 'disabled' : ''} class="bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:pointer-events-none text-slate-800 border border-slate-300 font-bold text-xs px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-sm">
          <span>◀</span> <span>Trang Trước</span>
        </button>

        <div class="text-xs text-slate-600 font-semibold hidden sm:block">
          Bấm nút tiếp tục để học các trang slide kế tiếp
        </div>

        <button onclick="nextTopicSlide(${topicId})" ${pageIndex === totalPages - 1 ? 'disabled' : ''} class="bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:pointer-events-none text-white font-bold text-xs px-4.5 py-2.5 rounded-xl transition-all shadow-sm shadow-blue-500/20 flex items-center gap-1.5 cursor-pointer">
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
      <div id="t${topicId}-q${idx}-card" data-correct="${q.ans}" class="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-4 shadow-sm">
        <h5 class="quiz-question-title font-extrabold text-slate-900 text-base md:text-lg leading-relaxed">Câu ${idx + 1}: ${q.q}</h5>
        <div class="space-y-2 text-xs">
          ${q.opts.map((opt, oIdx) => `
            <div onclick="selectTopicQuizOpt(${topicId}, ${idx}, ${oIdx})" id="t${topicId}-q${idx}-opt-${oIdx}" class="topic-quiz-opt p-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 flex items-center gap-3 font-medium text-slate-800 text-sm md:text-base transition-all shadow-sm">
              <span class="w-6 h-6 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center font-extrabold text-xs shrink-0">${String.fromCharCode(65 + oIdx)}</span>
              <span>${opt}</span>
            </div>
          `).join('')}
        </div>
        <div id="t${topicId}-q${idx}-exp" class="hidden p-4 bg-blue-50 rounded-xl border border-blue-200 text-sm md:text-base text-slate-900 leading-relaxed font-medium shadow-sm">
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
      <div class="p-4 bg-emerald-50 border border-emerald-300 rounded-2xl text-sm font-bold text-emerald-900 flex justify-between items-center shadow-sm">
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
      <div id="me-q${q.id}-card" data-correct="${q.ans}" class="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4 shadow-sm">
        <div class="flex justify-between items-center">
          <span class="quiz-question-title font-extrabold text-slate-900 text-base md:text-lg leading-relaxed">Câu ${idx + 1}: ${q.q}</span>
          <span class="badge-ch${q.ch} text-[10px] px-2 py-0.5 rounded font-bold">Chương ${q.ch}</span>
        </div>

        <div class="space-y-2 text-xs">
          ${q.opts.map((opt, oIdx) => `
            <div onclick="selectMasterExamOpt(${q.id}, ${oIdx})" id="me-q${q.id}-opt-${oIdx}" class="quiz-option p-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 flex items-center gap-3 font-medium text-slate-800 text-sm md:text-base transition-all shadow-sm">
              <span class="w-6 h-6 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center font-extrabold text-xs shrink-0">${String.fromCharCode(65 + oIdx)}</span>
              <span>${opt}</span>
            </div>
          `).join('')}
        </div>

        <div id="me-q${q.id}-exp" class="hidden p-4 bg-blue-50 rounded-xl border border-blue-200 text-sm md:text-base text-slate-900 leading-relaxed font-medium shadow-sm">
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


// =============================================================
// INTERACTIVE DEMO HANDLERS FOR LESSON SLIDES
// =============================================================

// Demo 1: Nodal Delay Live Calculator
function updateLiveDelayDemo() {
  const lEl = document.getElementById('demo-l-slider');
  const rEl = document.getElementById('demo-r-slider');
  const dEl = document.getElementById('demo-d-slider');

  if (!lEl || !rEl || !dEl) return;

  const L = parseInt(lEl.value); // Bytes
  const R = parseInt(rEl.value); // Mbps
  const d = parseInt(dEl.value); // km
  const s = 200000; // km/sec propagation speed in copper/fiber

  document.getElementById('demo-l-val').innerText = L.toLocaleString() + ' Bytes';
  document.getElementById('demo-r-val').innerText = R + ' Mbps';
  document.getElementById('demo-d-val').innerText = d.toLocaleString() + ' km';

  // d_trans = (L * 8 bits) / (R * 10^6 bps) in ms
  const d_trans = ((L * 8) / (R * 1000000)) * 1000;
  // d_prop = d / s in ms
  const d_prop = (d / s) * 1000;
  const d_nodal = d_trans + d_prop;

  document.getElementById('res-dtrans').innerText = d_trans.toFixed(3) + ' ms';
  document.getElementById('res-dprop').innerText = d_prop.toFixed(3) + ' ms';
  document.getElementById('res-dnodal').innerText = d_nodal.toFixed(3) + ' ms';
}

// Demo 2: DNS Name Resolver Simulator
function runDnsDemoSimulation() {
  const select = document.getElementById('dns-demo-select');
  const out = document.getElementById('dns-demo-output');
  if (!select || !out) return;

  const domain = select.value;
  let steps = [];

  if (domain === 'google.com') {
    steps = [
      '🔍 [Step 1] Client gửi truy vấn UDP port 53 tới Local DNS Server (8.8.8.8)...',
      '🌐 [Step 2] Local DNS kiểm tra Cache: MISS -> Hỏi Root DNS Server (198.41.0.4)...',
      '📌 [Step 3] Root DNS Server trả lời địa chỉ TLD DNS Server quản lý đuôi .com (192.5.6.30)...',
      '🏢 [Step 4] Local DNS truy vấn TLD DNS Server (.com) -> Nhận về Authoritative DNS (ns1.google.com)...',
      '✅ [Step 5] Authoritative DNS trả về kết quả A Record: 142.250.198.46',
      '🎉 SUCCESS: Tên miền www.google.com được phân giải thành IP: 142.250.198.46 (TTL: 300s)'
    ];
  } else if (domain === 'hust.edu.vn') {
    steps = [
      '🔍 [Step 1] Client gửi truy vấn tới Local DNS Server (VNPT/Viettel DNS)...',
      '🌐 [Step 2] Local DNS hỏi Root DNS Server -> Nhận chỉ dẫn tới TLD DNS Server (.vn)...',
      '🏛️ [Step 3] Local DNS hỏi TLD DNS Server (.vn) -> Nhận chỉ dẫn TLD DNS Server (.edu.vn)...',
      '🎓 [Step 4] Hỏi Authoritative DNS HUST (dns.hust.edu.vn)...',
      '✅ [Step 5] Authoritative DNS trả về IP: 202.191.56.12',
      '🎉 SUCCESS: Tên miền study.hust.edu.vn phân giải thành công IP: 202.191.56.12'
    ];
  } else {
    steps = [
      '🔍 [Step 1] Client truy vấn Local DNS Server...',
      '🌐 [Step 2] Local DNS hỏi Root DNS -> TLD DNS (.vn) -> Nhận NS Record của chinhphu.vn...',
      '✅ [Step 3] Authoritative DNS trả về IP: 113.160.225.10',
      '🎉 SUCCESS: Tên miền chinhphu.vn phân giải thành IP: 113.160.225.10'
    ];
  }

  out.innerHTML = '';
  steps.forEach((st, idx) => {
    setTimeout(() => {
      out.innerHTML += `<p class="${idx === steps.length - 1 ? 'text-emerald-400 font-bold' : 'text-slate-300'}">${st}</p>`;
    }, idx * 400);
  });
}

// Demo 3: TCP 3-Way Handshake Step Animator
let tcpHsState = 0;
function stepTcpHandshake(step) {
  const log = document.getElementById('tcp-hs-log');
  const btn1 = document.getElementById('btn-hs-1');
  const btn2 = document.getElementById('btn-hs-2');
  const btn3 = document.getElementById('btn-hs-3');
  if (!log) return;

  if (step === 1) {
    tcpHsState = 1;
    log.innerHTML = `
      <p class="text-blue-400 font-bold">➡️ Client $\to$ Server: [SYN, seq = 100]</p>
      <p class="text-slate-400">Client tạo số thứ tự ban đầu seq = 100. Trạng thái Client: [SYN_SENT]. Server: [LISTEN].</p>
    `;
    if (btn1) { btn1.disabled = true; btn1.classList.add('opacity-50'); }
    if (btn2) { btn2.disabled = false; btn2.classList.remove('opacity-50', 'bg-slate-800'); btn2.classList.add('bg-amber-600', 'hover:bg-amber-500', 'text-white'); }
  } else if (step === 2) {
    tcpHsState = 2;
    log.innerHTML += `
      <p class="text-amber-400 font-bold mt-2">⬅️ Server $\to$ Client: [SYN-ACK, seq = 300, ack = 101]</p>
      <p class="text-slate-400">Server xác nhận byte 100 (ack = 101) và cấp số thứ tự seq = 300. Trạng thái Server: [SYN_RCVD].</p>
    `;
    if (btn2) { btn2.disabled = true; btn2.classList.add('opacity-50'); }
    if (btn3) { btn3.disabled = false; btn3.classList.remove('opacity-50', 'bg-slate-800'); btn3.classList.add('bg-emerald-600', 'hover:bg-emerald-500', 'text-white'); }
  } else if (step === 3) {
    tcpHsState = 3;
    log.innerHTML += `
      <p class="text-emerald-400 font-bold mt-2">➡️ Client $\to$ Server: [ACK, seq = 101, ack = 301]</p>
      <p class="text-emerald-300 font-bold">🎉 KẾT NỐI ĐÃ DỰNG THÀNH CÔNG! Trạng thái cả 2 phía: [ESTABLISHED].</p>
    `;
    if (btn3) { btn3.disabled = true; btn3.classList.add('opacity-50'); }
  }
}

// Demo 4: TCP Congestion Window Simulator
let currentTcpMode = 'reno';
function setTcpMode(mode) {
  currentTcpMode = mode;
  const btnReno = document.getElementById('btn-mode-reno');
  const btnTahoe = document.getElementById('btn-mode-tahoe');

  if (mode === 'reno') {
    if (btnReno) { btnReno.className = 'bg-emerald-600 text-white px-3 py-1.5 rounded-lg font-bold'; }
    if (btnTahoe) { btnTahoe.className = 'bg-slate-800 text-slate-400 px-3 py-1.5 rounded-lg font-bold'; }
  } else {
    if (btnTahoe) { btnTahoe.className = 'bg-rose-600 text-white px-3 py-1.5 rounded-lg font-bold'; }
    if (btnReno) { btnReno.className = 'bg-slate-800 text-slate-400 px-3 py-1.5 rounded-lg font-bold'; }
  }

  renderCongestionDemo();
}

function renderCongestionDemo() {
  const container = document.getElementById('cwnd-rows-container');
  if (!container) return;

  const isReno = currentTcpMode === 'reno';
  const data = [
    { rtt: 1, state: 'Slow Start', cwnd: 1 },
    { rtt: 2, state: 'Slow Start', cwnd: 2 },
    { rtt: 3, state: 'Slow Start', cwnd: 4 },
    { rtt: 4, state: 'Slow Start', cwnd: 8 },
    { rtt: 5, state: 'Congestion Avoidance', cwnd: 9 },
    { rtt: 6, state: 'Congestion Avoidance', cwnd: 10 },
    { rtt: 7, state: 'Congestion Avoidance', cwnd: 11 },
    { rtt: 8, state: '⚠️ MẤT GÓI (3 Dup ACK)', cwnd: 12, loss: true },
    { rtt: 9, state: isReno ? 'Fast Recovery (Reno)' : 'Slow Start (Tahoe)', cwnd: isReno ? 6 : 1, drop: true },
    { rtt: 10, state: isReno ? 'Congestion Avoidance' : 'Slow Start', cwnd: isReno ? 7 : 2 },
    { rtt: 11, state: isReno ? 'Congestion Avoidance' : 'Slow Start', cwnd: isReno ? 8 : 4 }
  ];

  container.innerHTML = data.map(d => `
    <div class="flex justify-between items-center p-1.5 rounded ${d.loss ? 'bg-rose-950/80 border border-rose-500/50 text-rose-300' : d.drop ? 'bg-amber-950/80 border border-amber-500/50 text-amber-300' : 'bg-slate-900 text-slate-200'}">
      <span>RTT ${d.rtt}</span>
      <span class="font-bold">${d.state}</span>
      <span class="font-mono text-emerald-400 font-bold">${d.cwnd} MSS</span>
    </div>
  `).join('');
}

// Hook renderCongestionDemo into slide change listener
const originalRenderTopicSlide = renderTopicSlide;
renderTopicSlide = function(topicId, pageIndex) {
  originalRenderTopicSlide(topicId, pageIndex);
  setTimeout(() => {
    updateLiveDelayDemo();
    renderCongestionDemo();
  }, 100);
};
