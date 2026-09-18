const fs = require('fs');
const path = require('path');

// Visual SVG Diagrams
const svgNetworkTopology = `
<div class="diagram-container my-4 text-center">
  <h6 class="text-xs font-bold text-blue-400 mb-2">🌐 Sơ Đồ Kiến Trúc Mạng Máy Tính (Nuts & Bolts View)</h6>
  <svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-2xl mx-auto">
    <!-- Background Grid -->
    <rect width="700" height="240" fill="#0b1120" rx="12" stroke="#1e293b" stroke-width="1.5"/>
    
    <!-- End Systems (Hosts) Left -->
    <g transform="translate(30, 40)">
      <rect width="90" height="60" fill="#1e293b" rx="8" stroke="#3b82f6" stroke-width="2"/>
      <text x="45" y="32" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">Host (PC)</text>
      <text x="45" y="48" fill="#94a3b8" font-size="10" text-anchor="middle">End System</text>
    </g>
    <g transform="translate(30, 140)">
      <rect width="90" height="60" fill="#1e293b" rx="8" stroke="#3b82f6" stroke-width="2"/>
      <text x="45" y="32" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">Smartphone</text>
      <text x="45" y="48" fill="#94a3b8" font-size="10" text-anchor="middle">Mobile Host</text>
    </g>

    <!-- Access Network -->
    <g transform="translate(160, 80)">
      <rect width="110" height="80" fill="#0f172a" rx="10" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,4"/>
      <text x="55" y="40" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">Access Net</text>
      <text x="55" y="56" fill="#94a3b8" font-size="9" text-anchor="middle">DSL / Cable / FTTH</text>
    </g>

    <!-- Network Core (Routers Mesh) -->
    <g transform="translate(310, 50)">
      <circle cx="50" cy="40" r="30" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
      <text x="50" y="44" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">Router A</text>
    </g>
    <g transform="translate(310, 150)">
      <circle cx="50" cy="30" r="30" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
      <text x="50" y="34" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">Router B</text>
    </g>
    <g transform="translate(440, 100)">
      <circle cx="50" cy="30" r="30" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
      <text x="50" y="34" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">Router C</text>
    </g>

    <!-- Remote Server Right -->
    <g transform="translate(570, 90)">
      <rect width="100" height="65" fill="#1e293b" rx="8" stroke="#8b5cf6" stroke-width="2"/>
      <text x="50" y="32" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">Web Server</text>
      <text x="50" y="48" fill="#94a3b8" font-size="10" text-anchor="middle">Google / YouTube</text>
    </g>

    <!-- Connecting Links & Packet Flow Arrows -->
    <line x1="120" y1="70" x2="160" y2="100" stroke="#3b82f6" stroke-width="2"/>
    <line x1="120" y1="170" x2="160" y2="140" stroke="#3b82f6" stroke-width="2"/>
    
    <line x1="270" y1="120" x2="310" y2="90" stroke="#f59e0b" stroke-width="2"/>
    <line x1="360" y1="90" x2="360" y2="150" stroke="#10b981" stroke-width="2"/>
    <line x1="360" y1="90" x2="440" y2="130" stroke="#10b981" stroke-width="2"/>
    <line x1="360" y1="180" x2="440" y2="140" stroke="#10b981" stroke-width="2"/>
    <line x1="490" y1="130" x2="570" y2="120" stroke="#8b5cf6" stroke-width="2"/>

    <!-- Moving Packets Dots -->
    <circle cx="210" cy="110" r="5" fill="#ef4444"><animate attributeName="cx" values="160;270" dur="2s" repeatCount="indefinite"/></circle>
    <circle cx="400" cy="110" r="5" fill="#3b82f6"><animate attributeName="cx" values="360;440" dur="1.5s" repeatCount="indefinite"/></circle>
  </svg>
  <p class="text-[11px] text-slate-400 mt-2">Sơ đồ mô phỏng dòng di chuyển của Gói tin (Packets) qua cácRouter thuộc Mạng lõi (Network Core).</p>
</div>
`;

const svgDelayBreakdown = `
<div class="diagram-container my-4 text-center">
  <h6 class="text-xs font-bold text-emerald-400 mb-2">⏱️ Sơ Đồ 4 Thành Phần Độ Trễ Nút (Nodal Delay Breakdown)</h6>
  <svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-2xl mx-auto">
    <rect width="700" height="200" fill="#0b1120" rx="12" stroke="#1e293b" stroke-width="1.5"/>
    
    <!-- Router Box -->
    <rect x="220" y="30" width="260" height="140" fill="#0f172a" rx="10" stroke="#10b981" stroke-width="2"/>
    <text x="350" y="55" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">ROUTER CHUYỂN MẠCH (NODE)</text>

    <!-- Processing Delay -->
    <g transform="translate(240, 75)">
      <rect width="100" height="40" fill="#1e293b" rx="6" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="50" y="20" fill="#60a5fa" font-size="10" font-weight="bold" text-anchor="middle">1. d_proc</text>
      <text x="50" y="32" fill="#94a3b8" font-size="8" text-anchor="middle">Kiểm tra Bit/Header</text>
    </g>

    <!-- Queueing Delay -->
    <g transform="translate(360, 75)">
      <rect width="100" height="40" fill="#1e293b" rx="6" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="50" y="20" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">2. d_queue</text>
      <text x="50" y="32" fill="#94a3b8" font-size="8" text-anchor="middle">Chờ trong hàng đợi</text>
    </g>

    <!-- Transmission Delay -->
    <g transform="translate(240, 122)">
      <rect width="100" height="38" fill="#1e293b" rx="6" stroke="#ec4899" stroke-width="1.5"/>
      <text x="50" y="18" fill="#f472b6" font-size="10" font-weight="bold" text-anchor="middle">3. d_trans</text>
      <text x="50" y="30" fill="#94a3b8" font-size="8" text-anchor="middle">Đẩy bit ra wire (L/R)</text>
    </g>

    <!-- Propagation Delay -->
    <g transform="translate(360, 122)">
      <rect width="100" height="38" fill="#1e293b" rx="6" stroke="#8b5cf6" stroke-width="1.5"/>
      <text x="50" y="18" fill="#c084fc" font-size="10" font-weight="bold" text-anchor="middle">4. d_prop</text>
      <text x="50" y="30" fill="#94a3b8" font-size="8" text-anchor="middle">Lan truyền (d/s)</text>
    </g>

    <!-- Input and Output Links -->
    <line x1="50" y1="100" x2="220" y2="100" stroke="#3b82f6" stroke-width="3" stroke-dasharray="6,4"/>
    <text x="135" y="90" fill="#60a5fa" font-size="10" text-anchor="middle">Gói tin đến (Arrival)</text>

    <line x1="480" y1="100" x2="650" y2="100" stroke="#10b981" stroke-width="3"/>
    <text x="565" y="90" fill="#34d399" font-size="10" text-anchor="middle">Link đầu ra (Link R)</text>
  </svg>
  <div class="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-amber-300 font-mono mt-2">
    💡 Công thức tổng trễ: d_nodal = d_proc + d_queue + d_trans + d_prop
  </div>
</div>
`;

const svgProtocolStack = `
<div class="diagram-container my-4 text-center">
  <h6 class="text-xs font-bold text-purple-400 mb-2">📚 Mô Hình 5 Tầng Giao Thức Internet & Đóng Gói Dữ Liệu (Encapsulation)</h6>
  <svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-2xl mx-auto">
    <rect width="700" height="240" fill="#0b1120" rx="12" stroke="#1e293b" stroke-width="1.5"/>
    
    <!-- Left Stack: Sender Host -->
    <g transform="translate(30, 20)">
      <rect width="180" height="35" fill="#1e1b4b" stroke="#818cf8" stroke-width="1.5" rx="6"/>
      <text x="90" y="22" fill="#c7d2fe" font-size="11" font-weight="bold" text-anchor="middle">1. Application (HTTP, DNS)</text>
      
      <rect y="40" width="180" height="35" fill="#064e3b" stroke="#34d399" stroke-width="1.5" rx="6"/>
      <text x="90" y="62" fill="#a7f3d0" font-size="11" font-weight="bold" text-anchor="middle">2. Transport (TCP, UDP)</text>

      <rect y="80" width="180" height="35" fill="#78350f" stroke="#fbbf24" stroke-width="1.5" rx="6"/>
      <text x="90" y="102" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle">3. Network (IP, ICMP)</text>

      <rect y="120" width="180" height="35" fill="#831843" stroke="#f472b6" stroke-width="1.5" rx="6"/>
      <text x="90" y="142" fill="#fbcfe8" font-size="11" font-weight="bold" text-anchor="middle">4. Link (Ethernet, WiFi)</text>

      <rect y="160" width="180" height="35" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5" rx="6"/>
      <text x="90" y="182" fill="#cbd5e1" font-size="11" font-weight="bold" text-anchor="middle">5. Physical (Cáp, Sóng)</text>
    </g>

    <!-- Encapsulation PDU Representation -->
    <g transform="translate(250, 20)">
      <!-- Message -->
      <rect x="180" y="5" width="100" height="25" fill="#312e81" rx="4"/>
      <text x="230" y="22" fill="#a5b4fc" font-size="10" text-anchor="middle">Message (M)</text>

      <!-- Segment -->
      <rect x="120" y="45" width="60" fill="#065f46" height="25" rx="4"/>
      <text x="150" y="62" fill="#6ee7b7" font-size="9" text-anchor="middle">H_t</text>
      <rect x="185" y="45" width="95" height="25" fill="#312e81" rx="4"/>
      <text x="232" y="62" fill="#a5b4fc" font-size="9" text-anchor="middle">Message</text>

      <!-- Datagram -->
      <rect x="65" y="85" width="50" fill="#92400e" height="25" rx="4"/>
      <text x="90" y="102" fill="#fcd34d" font-size="9" text-anchor="middle">H_n</text>
      <rect x="120" y="85" width="55" fill="#065f46" height="25" rx="4"/>
      <text x="147" y="102" fill="#6ee7b7" font-size="9" text-anchor="middle">H_t</text>
      <rect x="180" y="85" width="100" height="25" fill="#312e81" rx="4"/>
      <text x="230" y="102" fill="#a5b4fc" font-size="9" text-anchor="middle">Message</text>

      <!-- Frame -->
      <rect x="10" y="125" width="50" fill="#9d174d" height="25" rx="4"/>
      <text x="35" y="142" fill="#f472b6" font-size="9" text-anchor="middle">H_l</text>
      <rect x="65" y="125" width="50" fill="#92400e" height="25" rx="4"/>
      <text x="90" y="142" fill="#fcd34d" font-size="9" text-anchor="middle">H_n</text>
      <rect x="120" y="125" width="55" fill="#065f46" height="25" rx="4"/>
      <text x="147" y="142" fill="#6ee7b7" font-size="9" text-anchor="middle">H_t</text>
      <rect x="180" y="125" width="100" height="25" fill="#312e81" rx="4"/>
      <text x="230" y="142" fill="#a5b4fc" font-size="9" text-anchor="middle">Message</text>

      <!-- Bit Stream -->
      <text x="140" y="182" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">0101011100101001010101...</text>
    </g>
  </svg>
  <p class="text-[11px] text-slate-400 mt-2">Mỗi tầng sẽ thêm Header tương ứng (Encapsulation) khi dữ liệu đi xuống tầng vật lý.</p>
</div>
`;

const svgDnsTree = `
<div class="diagram-container my-4 text-center">
  <h6 class="text-xs font-bold text-amber-400 mb-2">🌳 Sơ Đồ Cây Phân Cấp Máy Chủ Phân Giải Tên Miền DNS (Domain Name System)</h6>
  <svg viewBox="0 0 700 210" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-2xl mx-auto">
    <rect width="700" height="210" fill="#0b1120" rx="12" stroke="#1e293b" stroke-width="1.5"/>
    
    <!-- Root DNS Server -->
    <g transform="translate(290, 15)">
      <rect width="120" height="36" fill="#1e1b4b" stroke="#a7f3d0" stroke-width="2" rx="8"/>
      <text x="60" y="22" fill="#a7f3d0" font-size="11" font-weight="bold" text-anchor="middle">Root DNS Server</text>
    </g>

    <!-- TLD DNS Servers -->
    <g transform="translate(80, 80)">
      <rect width="130" height="34" fill="#064e3b" stroke="#34d399" stroke-width="1.5" rx="6"/>
      <text x="65" y="21" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">TLD Server (.com)</text>
    </g>
    <g transform="translate(285, 80)">
      <rect width="130" height="34" fill="#064e3b" stroke="#34d399" stroke-width="1.5" rx="6"/>
      <text x="65" y="21" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">TLD Server (.edu)</text>
    </g>
    <g transform="translate(490, 80)">
      <rect width="130" height="34" fill="#064e3b" stroke="#34d399" stroke-width="1.5" rx="6"/>
      <text x="65" y="21" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">TLD Server (.vn)</text>
    </g>

    <!-- Authoritative DNS Servers -->
    <g transform="translate(60, 145)">
      <rect width="160" height="36" fill="#78350f" stroke="#fbbf24" stroke-width="1.5" rx="6"/>
      <text x="80" y="22" fill="#fde68a" font-size="10" font-weight="bold" text-anchor="middle">amazon.com DNS</text>
    </g>
    <g transform="translate(270, 145)">
      <rect width="160" height="36" fill="#78350f" stroke="#fbbf24" stroke-width="1.5" rx="6"/>
      <text x="80" y="22" fill="#fde68a" font-size="10" font-weight="bold" text-anchor="middle">hust.edu.vn DNS</text>
    </g>
    <g transform="translate(475, 145)">
      <rect width="160" height="36" fill="#78350f" stroke="#fbbf24" stroke-width="1.5" rx="6"/>
      <text x="80" y="22" fill="#fde68a" font-size="10" font-weight="bold" text-anchor="middle">vnn.vn DNS</text>
    </g>

    <!-- Connecting Lines -->
    <line x1="350" y1="51" x2="145" y2="80" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="350" y1="51" x2="350" y2="80" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="350" y1="51" x2="555" y2="80" stroke="#94a3b8" stroke-width="1.5"/>

    <line x1="145" y1="114" x2="140" y2="145" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="350" y1="114" x2="350" y2="145" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="555" y1="114" x2="555" y2="145" stroke="#94a3b8" stroke-width="1.5"/>
  </svg>
  <p class="text-[11px] text-slate-400 mt-2">Mọi truy vấn domain sẽ đi từ Root DNS $\to$ TLD DNS $\to$ Authoritative DNS để lấy địa chỉ IP chuẩn xác.</p>
</div>
`;

const svgHandshake = `
<div class="diagram-container my-4 text-center">
  <h6 class="text-xs font-bold text-blue-400 mb-2">🤝 Sơ Đồ Bắt Tay 3 Bước TCP (3-Way Handshake Sequence)</h6>
  <svg viewBox="0 0 700 230" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-2xl mx-auto">
    <rect width="700" height="230" fill="#0b1120" rx="12" stroke="#1e293b" stroke-width="1.5"/>
    
    <!-- Timeline Vertical Lines -->
    <line x1="150" y1="40" x2="150" y2="200" stroke="#3b82f6" stroke-width="2"/>
    <line x1="550" y1="40" x2="550" y2="200" stroke="#10b981" stroke-width="2"/>

    <!-- Labels -->
    <text x="150" y="28" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">CLIENT (Bên Gửi)</text>
    <text x="550" y="28" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">SERVER (Bên Nhận)</text>

    <!-- Step 1: SYN -->
    <line x1="150" y1="65" x2="550" y2="105" stroke="#60a5fa" stroke-width="2.5" marker-end="url(#arrow)"/>
    <rect x="270" y="65" width="160" height="24" fill="#1e293b" rx="4" stroke="#3b82f6" stroke-width="1"/>
    <text x="350" y="81" fill="#60a5fa" font-size="10" font-weight="bold" text-anchor="middle">1. SYN (seq = x)</text>

    <!-- Step 2: SYN-ACK -->
    <line x1="550" y1="115" x2="150" y2="155" stroke="#f59e0b" stroke-width="2.5"/>
    <rect x="250" y="115" width="200" height="24" fill="#1e293b" rx="4" stroke="#f59e0b" stroke-width="1"/>
    <text x="350" y="131" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">2. SYN-ACK (seq = y, ack = x+1)</text>

    <!-- Step 3: ACK -->
    <line x1="150" y1="165" x2="550" y2="195" stroke="#10b981" stroke-width="2.5"/>
    <rect x="250" y="165" width="200" height="24" fill="#1e293b" rx="4" stroke="#10b981" stroke-width="1"/>
    <text x="350" y="181" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">3. ACK (seq = x+1, ack = y+1)</text>
  </svg>
  <p class="text-[11px] text-slate-400 mt-2">Sau bước 3 (gửi ACK), kết nối TCP chính thức thiết lập thành công và dữ liệu có thể bắt đầu truyền.</p>
</div>
`;

const svgTcpSawtooth = `
<div class="diagram-container my-4 text-center">
  <h6 class="text-xs font-bold text-rose-400 mb-2">📈 Đồ Thị Căng Cưa Cửa Sổ Tắc Nghẽn TCP (Congestion Window Sawtooth Curve)</h6>
  <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-2xl mx-auto">
    <rect width="700" height="220" fill="#0b1120" rx="12" stroke="#1e293b" stroke-width="1.5"/>

    <!-- Axis -->
    <line x1="60" y1="20" x2="60" y2="180" stroke="#64748b" stroke-width="2"/>
    <line x1="60" y1="180" x2="670" y2="180" stroke="#64748b" stroke-width="2"/>

    <text x="25" y="100" fill="#94a3b8" font-size="10" font-weight="bold" transform="rotate(-90 25 100)">cwnd (MSS)</text>
    <text x="360" y="202" fill="#94a3b8" font-size="10" font-weight="bold">Thời Gian (RTT)</text>

    <!-- Threshold Line -->
    <line x1="60" y1="100" x2="670" y2="100" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,4"/>
    <text x="600" y="95" fill="#fbbf24" font-size="9">ssthresh</text>

    <!-- Slow Start Exponential Curve -->
    <path d="M 60 170 Q 120 160 160 100 L 260 60 L 260 140 L 400 100 L 400 140 L 540 100 L 540 170 L 650 120" fill="none" stroke="#3b82f6" stroke-width="2.5"/>

    <!-- Annotations -->
    <circle cx="160" cy="100" r="4" fill="#fbbf24"/>
    <text x="130" y="85" fill="#60a5fa" font-size="9">Slow Start (x2)</text>

    <circle cx="260" cy="60" r="4" fill="#ef4444"/>
    <text x="260" y="45" fill="#f87171" font-size="9" text-anchor="middle">Mất gói (3 Dup ACK)</text>

    <!-- Reno Drop vs Tahoe Drop -->
    <line x1="260" y1="60" x2="260" y2="100" stroke="#10b981" stroke-width="2" stroke-dasharray="2,2"/>
    <text x="270" y="115" fill="#34d399" font-size="9">Reno: Giảm cwnd/2 (Fast Recovery)</text>

    <line x1="540" y1="100" x2="540" y2="170" stroke="#ef4444" stroke-width="2" stroke-dasharray="2,2"/>
    <text x="545" y="165" fill="#f87171" font-size="9">Tahoe: Giảm về 1 MSS (Timeout)</text>
  </svg>
  <p class="text-[11px] text-slate-400 mt-2">Đồ thị AIMD dạng răng cưa thể hiện việc tăng tuyến tính (+1 MSS/RTT) và giảm cấp số nhân (/2 khi mất gói).</p>
</div>
`;

console.log('SVG Diagrams generated successfully!');
