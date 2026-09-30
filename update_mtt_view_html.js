const fs = require('fs');

// 1. Update VIEW 8 in index.html
let html = fs.readFileSync('index.html', 'utf8');

const newView8Html = `
    <!-- ========================================================= -->
    <!-- VIEW 8: MTT PDF EXAM BANK (148 QUESTIONS WITH PALETTE) -->
    <!-- ========================================================= -->
    <section id="view-mtt-exam" class="app-view space-y-6 hidden">
      <div class="glass-card p-5 md:p-8 space-y-6">
        <!-- Header Title & Filter Tabs -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-200 pb-4">
          <div>
            <span class="text-xs font-bold text-purple-700 uppercase tracking-wider bg-purple-100 px-2.5 py-1 rounded-md border border-purple-300">Tài Liệu Đề Thi MTT PDF</span>
            <h3 class="text-xl md:text-2xl font-black text-slate-900 mt-1.5">📘 Ngân Hàng Câu Hỏi Trắc Nghiệm MTT (148 Câu C1, C2, C3)</h3>
            <p class="text-xs text-slate-600 mt-1">Trích xuất từ "trắc nghiệm MTT (C1,C2,C3) - Đap an.pdf" kèm đáp án chính xác, hình ảnh sơ đồ & bảng tiến độ.</p>
          </div>

          <div class="flex flex-wrap gap-2 text-xs">
            <button onclick="filterMttExam(0)" class="bg-slate-800 text-white px-3 py-1.5 rounded-lg font-bold shadow-sm">Tất Cả 148 Câu</button>
            <button onclick="filterMttExam(1)" class="badge-ch1 px-3 py-1.5 rounded-lg font-bold">Chương 1</button>
            <button onclick="filterMttExam(2)" class="badge-ch2 px-3 py-1.5 rounded-lg font-bold">Chương 2</button>
            <button onclick="filterMttExam(3)" class="badge-ch3 px-3 py-1.5 rounded-lg font-bold">Chương 3</button>
            <button onclick="filterMttExam('img')" class="bg-indigo-600 text-white px-3 py-1.5 rounded-lg font-bold">📷 Có Sơ Đồ/Hình</button>
          </div>
        </div>

        <!-- Search Bar & Controls Toolbar -->
        <div class="space-y-3">
          <div class="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 text-xs">
            <div class="relative flex-1 max-w-lg">
              <input type="text" id="mtt-search-input" onkeyup="searchMttExam(this.value)" placeholder="🔍 Tìm kiếm câu hỏi MTT (ví dụ: RTT, DNS, TCP Reno, Go-Back-N...)" class="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm" />
            </div>
            <div class="flex items-center justify-between sm:justify-end gap-2 text-xs">
              <span class="text-slate-600 font-medium">Số lượng: <strong id="mtt-exam-count" class="text-blue-600 font-black">148 Câu</strong></span>
            </div>
          </div>

          <!-- Mode Toggles Toolbar -->
          <div class="flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-100 rounded-2xl border border-slate-200 text-xs">
            <div class="flex flex-wrap items-center gap-2">
              <!-- Shuffle Button -->
              <button id="mtt-btn-shuffle" onclick="toggleMttShuffle()" class="bg-white hover:bg-slate-200 text-slate-800 border border-slate-300 font-bold px-3.5 py-2 rounded-xl transition-all shadow-xs flex items-center gap-1.5 cursor-pointer">
                <span>🔀</span> <span id="mtt-shuffle-text">Tráo Đổi Câu Hỏi</span>
              </button>

              <!-- Instant Reveal Answer Toggle Button -->
              <button id="mtt-btn-instant-ans" onclick="toggleMttInstantAnswer()" class="bg-white hover:bg-slate-200 text-slate-800 border border-slate-300 font-bold px-3.5 py-2 rounded-xl transition-all shadow-xs flex items-center gap-1.5 cursor-pointer">
                <span>👁️</span> <span>Xem Đáp Án Ngay: <strong id="mtt-instant-ans-status" class="text-slate-500">TẮT</strong></span>
              </button>

              <!-- Toggle All Answers Button -->
              <button onclick="toggleAllMttExplanations()" class="bg-white hover:bg-slate-200 text-slate-800 border border-slate-300 font-bold px-3.5 py-2 rounded-xl transition-all shadow-xs flex items-center gap-1.5 cursor-pointer">
                <span>💡</span> <span>Hiện/Ẩn Đáp Án Mọi Câu</span>
              </button>
            </div>

            <div class="flex items-center gap-2">
              <button onclick="submitMttExam()" class="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-5 py-2 rounded-xl shadow-md shadow-emerald-600/30 transition-all flex items-center gap-1.5 cursor-pointer">
                <span>📝</span> <span>Nộp Bài & Chấm Điểm</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Main Layout Grid: Questions Column + Side Palette Column -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          <!-- Left Main Questions Column -->
          <div class="lg:col-span-3 space-y-6">
            <div id="mtt-exam-score-banner" class="hidden"></div>
            <div id="mtt-exam-questions-list" class="space-y-6"></div>
          </div>

          <!-- Right Sticky Question Palette Grid Navigator -->
          <div class="lg:col-span-1 lg:sticky lg:top-20 space-y-4 z-20">
            <div class="bg-white p-4 rounded-2xl border border-slate-300 space-y-3.5 shadow-lg">
              <div class="flex justify-between items-center border-b border-slate-200 pb-2.5">
                <h4 class="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
                  <span>📋</span> <span>Bảng Tiến Độ</span>
                </h4>
                <span id="mtt-palette-stats" class="text-[11px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-300">0/148</span>
              </div>

              <!-- Stats Progress Counters -->
              <div class="grid grid-cols-2 gap-2 text-[11px] font-semibold text-center">
                <div class="p-2 rounded-xl bg-blue-50 text-blue-900 border border-blue-200">
                  <span class="block text-sm font-black" id="mtt-answered-count">0</span>
                  <span>Đã chọn</span>
                </div>
                <div class="p-2 rounded-xl bg-slate-100 text-slate-700 border border-slate-200">
                  <span class="block text-sm font-black" id="mtt-unanswered-count">148</span>
                  <span>Chưa chọn</span>
                </div>
              </div>

              <!-- Color Legend -->
              <div class="flex flex-wrap gap-2 text-[10px] text-slate-600 border-t border-b border-slate-100 py-2">
                <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-slate-200 inline-block border"></span> Chưa chọn</span>
                <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-blue-600 inline-block"></span> Đã chọn</span>
                <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-emerald-600 inline-block"></span> Đúng</span>
                <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-rose-600 inline-block"></span> Sai</span>
              </div>

              <!-- Question Grid Palette Boxes (1..148) -->
              <div id="mtt-question-palette" class="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-5 gap-1.5 max-h-[380px] overflow-y-auto p-1 custom-scrollbar">
                <!-- Boxes generated dynamically by script.js -->
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
`;

html = html.replace(/<!-- ========================================================= -->\s*<!-- VIEW 8: MTT PDF EXAM BANK \(148 QUESTIONS\) -->[\s\S]*?<\/section>/, newView8Html);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully updated VIEW 8 in index.html with Palette & Toolbar!');
