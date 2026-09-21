const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Huy Khang\\Downloads\\AstraAI_GiaSu_MangMayTinh';
const backupDir = 'C:\\Users\\Huy Khang\\Downloads\\MangMayTinh_OnThi_Chuong123';
const previewPath = 'C:\\Users\\Huy Khang\\.gemini\\antigravity\\brain\\ea9be719-5068-4638-83b5-74d75d718bee\\astra_ai_tutor_preview.html';

// 1. Copy files to backup folder
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

const filesToCopy = ['data_questions.js', 'data_lessons.js', 'script.js', 'style.css', 'index.html'];
for (const file of filesToCopy) {
  const src = path.join(srcDir, file);
  const dest = path.join(backupDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log('Copied ' + file + ' to backup folder');
  }
}

// 2. Generate standalone preview HTML
let html = fs.readFileSync(path.join(srcDir, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(srcDir, 'style.css'), 'utf8');
const lessons = fs.readFileSync(path.join(srcDir, 'data_lessons.js'), 'utf8');
const questions = fs.readFileSync(path.join(srcDir, 'data_questions.js'), 'utf8');
const script = fs.readFileSync(path.join(srcDir, 'script.js'), 'utf8');

html = html.replace('<link rel="stylesheet" href="style.css">', '<style>\n' + css + '\n</style>');
html = html.replace(
  '<script src="data_lessons.js"></script>\n  <script src="data_questions.js"></script>\n  <script src="script.js"></script>',
  '<script>\n' + lessons + '\n</script>\n<script>\n' + questions + '\n</script>\n<script>\n' + script + '\n</script>'
);

fs.writeFileSync(previewPath, html, 'utf8');
console.log('Generated standalone preview HTML at ' + previewPath);
