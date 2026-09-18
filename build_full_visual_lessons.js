const fs = require('fs');
const path = require('path');

const baseDir = 'C:\\Users\\Huy Khang\\Downloads\\AstraAI_GiaSu_MangMayTinh';

// Helper function to build a clean SVG Container
function makeSvgCard(title, svgContent, subtitle = '') {
  return `
<div class="diagram-container my-3 text-center">
  <h6 class="text-xs font-bold text-blue-700 mb-2">${title}</h6>
  ${svgContent}
  ${subtitle ? `<p class="text-xs text-slate-600 mt-2 font-medium">${subtitle}</p>` : ''}
</div>
  `.trim();
}

// -------------------------------------------------------------
// SVG GRAPHICS GENERATOR FOR ALL 55 SLIDES
// -------------------------------------------------------------

// TOPIC 1 SVGs (7 Slides)
const svgT1_P1 = makeSvgCard(
  '🌐 Sơ Đồ Thành Phần Phần Cứng Internet (Nuts & Bolts View)',
  `<svg viewBox="0 0 680 180" class="w-full max-w-xl mx-auto">
    <rect width="680" height="180" fill="#f8fafc" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>
    <g transform="translate(20,30)">
      <rect width="100" height="50" fill="#eff6ff" stroke="#2563eb" stroke-width="2" rx="6"/>
      <text x="50" y="28" fill="#1d4ed8" font-size="11" font-weight="bold" text-anchor="middle">PC / Host</text>
      <text x="50" y="42" fill="#475569" font-size="9" text-anchor="middle">End System</text>
    </g>
    <g transform="translate(20,100)">
      <rect width="100" height="50" fill="#eff6ff" stroke="#2563eb" stroke-width="2" rx="6"/>
      <text x="50" y="28" fill="#1d4ed8" font-size="11" font-weight="bold" text-anchor="middle">Smartphone</text>
      <text x="50" y="42" fill="#475569" font-size="9" text-anchor="middle">Mobile Host</text>
    </g>
    <g transform="translate(160,60)">
      <rect width="120" height="60" fill="#fffbeb" stroke="#d97706" stroke-width="2" rx="8" stroke-dasharray="4,4"/>
      <text x="60" y="30" fill="#b45309" font-size="11" font-weight="bold" text-anchor="middle">Access Net</text>
      <text x="60" y="45" fill="#64748b" font-size="9" text-anchor="middle">DSL / Cable / FTTH</text>
    </g>
    <g transform="translate(320,40)">
      <circle cx="45" cy="35" r="28" fill="#f1f5f9" stroke="#059669" stroke-width="2"/>
      <text x="45" y="39" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">Router A</text>
    </g>
    <g transform="translate(440,80)">
      <circle cx="45" cy="35" r="28" fill="#f1f5f9" stroke="#059669" stroke-width="2"/>
      <text x="45" y="39" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">Router B</text>
    </g>
    <g transform="translate(560,55)">
      <rect width="100" height="60" fill="#f5f3ff" stroke="#7c3aed" stroke-width="2" rx="6"/>
      <text x="50" y="30" fill="#6d28d9" font-size="11" font-weight="bold" text-anchor="middle">Web Server</text>
      <text x="50" y="45" fill="#475569" font-size="9" text-anchor="middle">Destination</text>
    </g>
    <line x1="120" y1="55" x2="160" y2="80" stroke="#2563eb" stroke-width="2"/>
    <line x1="120" y1="125" x2="160" y2="100" stroke="#2563eb" stroke-width="2"/>
    <line x1="280" y1="90" x2="320" y2="75" stroke="#d97706" stroke-width="2"/>
    <line x1="410" y1="75" x2="440" y2="105" stroke="#059669" stroke-width="2"/>
    <line x1="530" y1="115" x2="560" y2="85" stroke="#7c3aed" stroke-width="2"/>
  </svg>`,
  'Sơ đồ mạng lõi kết nối thiết bị đầu cuối qua Router và Hạ tầng nhà mạng ISP.'
);

const svgT1_P2 = makeSvgCard(
  '⚙️ Sơ Đồ Góc Nhìn Dịch Vụ (Service View) & Socket Interface',
  `<svg viewBox="0 0 650 160" class="w-full max-w-xl mx-auto">
    <rect width="650" height="160" fill="#f8fafc" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect x="30" y="25" width="230" height="110" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5" rx="8"/>
    <text x="145" y="50" fill="#1d4ed8" font-size="12" font-weight="bold" text-anchor="middle">Ứng Dụng Phân Tán (Web, App)</text>
    <rect x="50" y="70" width="190" height="45" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" rx="6"/>
    <text x="145" y="97" fill="#1e293b" font-size="10" font-weight="bold" text-anchor="middle">Socket API Interface</text>

    <line x1="260" y1="92" x2="390" y2="92" stroke="#d97706" stroke-width="3" stroke-dasharray="6,4"/>
    <text x="325" y="82" fill="#b45309" font-size="10" font-weight="bold" text-anchor="middle">Hạ Tầng Internet</text>

    <rect x="390" y="25" width="230" height="110" fill="#f5f3ff" stroke="#7c3aed" stroke-width="1.5" rx="8"/>
    <text x="505" y="50" fill="#6d28d9" font-size="12" font-weight="bold" text-anchor="middle">Máy Chủ Server Từ Xa</text>
    <rect x="410" y="70" width="190" height="45" fill="#ffffff" stroke="#c4b5fd" stroke-width="1.5" rx="6"/>
    <text x="505" y="97" fill="#1e293b" font-size="10" font-weight="bold" text-anchor="middle">Socket Listener</text>
  </svg>`,
  'Internet cung cấp giao diện Socket API cho phép các chương trình gửi và nhận dữ liệu qua hạ tầng mạng.'
);

const svgT1_P3 = makeSvgCard(
  '🔄 So Sánh Luồng Giao Thức (Protocol Flowchart)',
  `<svg viewBox="0 0 650 170" class="w-full max-w-xl mx-auto">
    <rect width="650" height="170" fill="#f8fafc" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="160" y="25" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">👤 Giao Thức Con Người</text>
    <line x1="80" y1="40" x2="80" y2="150" stroke="#059669" stroke-width="1.5"/>
    <line x1="240" y1="40" x2="240" y2="150" stroke="#059669" stroke-width="1.5"/>
    <line x1="80" y1="55" x2="240" y2="75" stroke="#059669" stroke-width="2"/>
    <text x="160" y="60" fill="#047857" font-size="9" text-anchor="middle">"Xin chào!"</text>
    <line x1="240" y1="90" x2="80" y2="110" stroke="#059669" stroke-width="2"/>
    <text x="160" y="95" fill="#047857" font-size="9" text-anchor="middle">"Xin chào!"</text>

    <line x1="325" y1="15" x2="325" y2="155" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,4"/>

    <text x="490" y="25" fill="#1d4ed8" font-size="11" font-weight="bold" text-anchor="middle">💻 Giao Thức Mạng (TCP/HTTP)</text>
    <line x1="410" y1="40" x2="410" y2="150" stroke="#2563eb" stroke-width="1.5"/>
    <line x1="570" y1="40" x2="570" y2="150" stroke="#2563eb" stroke-width="1.5"/>
    <line x1="410" y1="55" x2="570" y2="75" stroke="#2563eb" stroke-width="2"/>
    <text x="490" y="60" fill="#1d4ed8" font-size="9" font-weight="bold" text-anchor="middle">TCP SYN Request</text>
    <line x1="570" y1="90" x2="410" y2="110" stroke="#2563eb" stroke-width="2"/>
    <text x="490" y="95" fill="#1d4ed8" font-size="9" font-weight="bold" text-anchor="middle">TCP SYN-ACK Response</text>
  </svg>`,
  'Giao thức quy định định dạng, thứ tự và hành động khi gửi/nhận thông điệp.'
);

const svgT1_P4 = makeSvgCard(
  '🏠 So Sánh Hạ Tầng DSL (Dedicated) vs Cable HFC (Shared)',
  `<svg viewBox="0 0 650 160" class="w-full max-w-xl mx-auto">
    <rect width="650" height="160" fill="#f8fafc" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>
    <g transform="translate(30,30)">
      <rect width="260" height="100" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5" rx="8"/>
      <text x="130" y="25" fill="#1d4ed8" font-size="11" font-weight="bold" text-anchor="middle">DSL Access (Truy Cập Dành Riêng)</text>
      <text x="130" y="50" fill="#334155" font-size="9" text-anchor="middle">Đường dây đồng thẳng tới tổng đài DSLAM</text>
      <text x="130" y="70" fill="#047857" font-size="9" font-weight="bold" text-anchor="middle">Băng thông độc lập, không bị chia sẻ</text>
    </g>
    <g transform="translate(360,30)">
      <rect width="260" height="100" fill="#fffbeb" stroke="#d97706" stroke-width="1.5" rx="8"/>
      <text x="130" y="25" fill="#b45309" font-size="11" font-weight="bold" text-anchor="middle">Cable HFC (Truy Cập Chia Sẻ)</text>
      <text x="130" y="50" fill="#334155" font-size="9" text-anchor="middle">Dùng chung đường cáp đồng trục tới CMTS</text>
      <text x="130" y="70" fill="#be123c" font-size="9" font-weight="bold" text-anchor="middle">Tốc độ giảm khi nhiều người cùng dùng</text>
    </g>
  </svg>`,
  'DSL là kết nối riêng biệt (Dedicated Access), Cable HFC là kết nối dùng chung (Shared Access).'
);

const svgT1_P5 = makeSvgCard(
  '🔌 Mạng Truy Cập Doanh Nghiệp Ethernet & Phương Tiện Truyền Dẫn',
  `<svg viewBox="0 0 650 150" class="w-full max-w-xl mx-auto">
    <rect width="650" height="150" fill="#f8fafc" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect x="40" y="25" width="160" height="100" fill="#ffffff" stroke="#2563eb" stroke-width="1.5" rx="6"/>
    <text x="120" y="50" fill="#1d4ed8" font-size="11" font-weight="bold" text-anchor="middle">Cáp Đồng Xoắn Đôi (UTP)</text>
    <text x="120" y="75" fill="#475569" font-size="9" text-anchor="middle">Ethernet 100Mbps - 10Gbps</text>

    <rect x="245" y="25" width="160" height="100" fill="#ffffff" stroke="#059669" stroke-width="1.5" rx="6"/>
    <text x="325" y="50" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">Cáp Quang (Fiber Optics)</text>
    <text x="325" y="75" fill="#475569" font-size="9" text-anchor="middle">Tốc độ cao 10G-100Gbps, ít nhiễu</text>

    <rect x="450" y="25" width="160" height="100" fill="#ffffff" stroke="#7c3aed" stroke-width="1.5" rx="6"/>
    <text x="530" y="50" fill="#6d28d9" font-size="11" font-weight="bold" text-anchor="middle">Sóng Vô Tuyến (Radio)</text>
    <text x="530" y="75" fill="#475569" font-size="9" text-anchor="middle">WiFi (802.11), 4G/5G Cellular</text>
  </svg>`,
  'Các môi trường truyền dẫn gồm dây dẫn hữu tuyến (Cáp đồng, Cáp quang) và vô tuyến (WiFi, 4G/5G).'
);

const svgT1_P6 = makeSvgCard(
  '📦 Chuyển Mạch Gói (Store-and-Forward) vs Chuyển Mạch Mạch (FDM/TDM)',
  `<svg viewBox="0 0 650 160" class="w-full max-w-xl mx-auto">
    <rect width="650" height="160" fill="#f8fafc" rx="10" stroke="#cbd5e1" stroke-width="1.5"/>
    <g transform="translate(30,25)">
      <rect width="270" height="110" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5" rx="8"/>
      <text x="135" y="25" fill="#1d4ed8" font-size="11" font-weight="bold" text-anchor="middle">Packet Switching (Chuyển Mạch Gói)</text>
      <text x="135" y="50" fill="#334155" font-size="9" text-anchor="middle">• Lưu và chuyển tiếp (Store & Forward)</text>
      <text x="135" y="70" fill="#334155" font-size="9" text-anchor="middle">• Phù hợp lưu lượng bùng nổ (Statistical)</text>
    </g>
    <g transform="translate(350,25)">
      <rect width="270" height="110" fill="#ecfdf5" stroke="#059669" stroke-width="1.5" rx="8"/>
      <text x="135" y="25" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">Circuit Switching (Chuyển Mạch Mạch)</text>
      <text x="135" y="50" fill="#334155" font-size="9" text-anchor="middle">• Dành riêng kênh truyền (FDM / TDM)</text>
      <text x="135" y="70" fill="#334155" font-size="9" text-anchor="middle">• Đảm bảo băng thông nhưng lãng phí khi rảnh</text>
    </g>
  </svg>`,
  'Packet switching truyền dữ liệu dạng gói tin, Circuit switching thiết lập kênh truyền cố định.'
);

console.log('SVG Templates initialized successfully!');
