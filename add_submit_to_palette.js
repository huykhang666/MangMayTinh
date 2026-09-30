const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const sideCardContent = `
          <!-- Right Sticky Question Palette Grid Navigator -->
          <div class="lg:col-span-1 lg:sticky lg:top-20 space-y-4 z-20">
            <div class="bg-white p-4 rounded-2xl border border-slate-300 space-y-3.5 shadow-lg">
              <div class="flex justify-between items-center border-b border-slate-200 pb-2.5">
                <h4 class="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
                  <span>📋</span> <span>Bảng Tiến Độ</span>
                </h4>
                <span id="mtt-palette-stats" class="text-[11px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-300">0/148</span>
              </div>

              <!-- Prominent Submit Button inside Sticky Palette Card -->
              <button onclick="submitMttExam()" class="w-full bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-black text-xs md:text-sm py-3 px-4 rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer border border-emerald-500">
                <span>📝</span> <span>NỘP BÀI & CHẤM ĐIỂM</span>
              </button>

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
              <div id="mtt-question-palette" class="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-5 gap-1.5 max-h-[340px] overflow-y-auto p-1 custom-scrollbar">
                <!-- Boxes generated dynamically by script.js -->
              </div>
            </div>
          </div>
`;

html = html.replace(/<!-- Right Sticky Question Palette Grid Navigator -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, sideCardContent + '\n        </div>');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully added Submit Button inside the Sticky Bảng Tiến Độ Side Palette!');
