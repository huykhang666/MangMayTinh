const fs = require('fs');

// 1. Update index.html button to BẬT by default
let html = fs.readFileSync('index.html', 'utf8');

const oldButtonHtml = `<button id="mtt-btn-instant-ans" onclick="toggleMttInstantAnswer()" class="bg-white hover:bg-slate-200 text-slate-800 border border-slate-300 font-bold px-3.5 py-2 rounded-xl transition-all shadow-xs flex items-center gap-1.5 cursor-pointer">
                <span>👁️</span> <span>Xem Đáp Án Ngay: <strong id="mtt-instant-ans-status" class="text-slate-500">TẮT</strong></span>
              </button>`;

const newButtonHtml = `<button id="mtt-btn-instant-ans" onclick="toggleMttInstantAnswer()" class="bg-amber-100 text-amber-900 border-2 border-amber-500 font-bold px-3.5 py-2 rounded-xl transition-all shadow-sm flex items-center gap-1.5 cursor-pointer">
                <span>👁️</span> <span>Xem Đáp Án Ngay: <strong id="mtt-instant-ans-status" class="text-emerald-700 font-black">BẬT</strong></span>
              </button>`;

html = html.replace(oldButtonHtml, newButtonHtml);
fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully updated index.html button to BẬT by default!');

// 2. Update script.js to set mttExamInstantAnswer = true by default
let script = fs.readFileSync('script.js', 'utf8');

script = script.replace('let mttExamInstantAnswer = false;', 'let mttExamInstantAnswer = true;');

// Enhance option rendering with Check/Cross icons in renderMttExam
const oldOptRender = `            if (isSubmitted || isInstant) {
              const isCorrectOpt = Array.isArray(q.ansList) && q.ansList.length > 0 ? q.ansList.includes(oIdx) : q.ans === oIdx;
              if (isCorrectOpt) {
                optClass = 'quiz-option p-3.5 rounded-xl border-2 border-emerald-500 bg-emerald-50 text-emerald-950 font-bold flex items-center gap-3 text-sm md:text-base shadow-sm';
              } else if (isSelected && !isCorrectOpt) {
                optClass = 'quiz-option p-3.5 rounded-xl border-2 border-rose-500 bg-rose-50 text-rose-950 flex items-center gap-3 text-sm md:text-base shadow-sm';
              }
            }`;

const newOptRender = `            let iconHtml = \`<span class="w-6 h-6 rounded-full \${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-800'} flex items-center justify-center font-extrabold text-xs shrink-0">\${String.fromCharCode(65 + oIdx)}</span>\`;

            if (isSubmitted || isInstant) {
              const isCorrectOpt = Array.isArray(q.ansList) && q.ansList.length > 0 ? q.ansList.includes(oIdx) : q.ans === oIdx;
              if (isCorrectOpt) {
                optClass = 'quiz-option p-3.5 rounded-xl border-2 border-emerald-500 bg-emerald-50 text-emerald-950 font-bold flex items-center justify-between gap-3 text-sm md:text-base shadow-sm';
                iconHtml = \`<div class="flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black text-xs shrink-0">✓</span></div>\`;
              } else if (isSelected && !isCorrectOpt) {
                optClass = 'quiz-option p-3.5 rounded-xl border-2 border-rose-500 bg-rose-50 text-rose-950 font-bold flex items-center justify-between gap-3 text-sm md:text-base shadow-sm';
                iconHtml = \`<div class="flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center font-black text-xs shrink-0">✕</span></div>\`;
              }
            }`;

script = script.replace(oldOptRender, newOptRender);

fs.writeFileSync('script.js', script, 'utf8');
console.log('Successfully updated script.js with default Instant Answer mode & Check/Cross icons!');
