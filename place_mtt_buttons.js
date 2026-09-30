const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Add Header Navbar Button
const navButtonHtml = `
      <button data-nav="mtt-exam" class="bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-all shadow-md shadow-purple-600/20 flex items-center gap-1.5 cursor-pointer">
        <span>📘</span> <span>Đề MTT PDF (148 Câu)</span>
      </button>
      <button data-nav="master-exam" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-all shadow-md shadow-emerald-600/20 flex items-center gap-1.5 cursor-pointer">
        <span>📝</span> <span class="hidden md:inline">Đề Tổng Hợp (80+ Câu)</span>
      </button>
`;

html = html.replace('<!-- Right Header Actions -->\n    <div class="flex items-center gap-3">', '<!-- Right Header Actions -->\n    <div class="flex items-center gap-3">\n' + navButtonHtml);

// 2. Add Hero Banner Button
const heroBannerButtons = `
        <div class="flex flex-wrap gap-3 z-10">
          <button data-nav="skill-tree" class="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2">
            <span>🌳</span> <span>Mở Cây Kỹ Năng 9 Chủ Đề</span>
          </button>
          <button data-nav="mtt-exam" class="bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-lg shadow-purple-600/30 flex items-center gap-2">
            <span>📘</span> <span>Đề Thi MTT PDF (148 Câu Có Hình)</span>
          </button>
          <button data-nav="master-exam" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-lg shadow-emerald-600/30 flex items-center gap-2">
            <span>📝</span> <span>Đề Thi Tổng Hợp 80+ Câu</span>
          </button>
        </div>
`;

html = html.replace(/<div class="flex flex-wrap gap-3 z-10">[\s\S]*?<\/div>\s*<\/div>\n    <\/section>/, heroBannerButtons + '      </div>\n    </section>');

// 3. Update description text
html = html.replace('Học lý thuyết chi tiết theo từng trang Slide (Next/Prev) + Bài tập mẫu + 80+ câu trắc nghiệm thi tổng hợp.', 'Học lý thuyết theo Slide + Bài tập mẫu + 148 câu trắc nghiệm MTT PDF (có hình ảnh) + 80+ câu thi tổng hợp.');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully updated index.html with prominent MTT PDF buttons!');
