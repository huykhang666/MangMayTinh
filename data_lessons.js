/* Astra AI Tutor - Slide Deck Lessons Data (50+ Full Slide Pages for 9 Topics) */

var topicLessonsData = {
  // ==========================================
  // TOPIC 1: TỔNG QUAN VỀ INTERNET VÀ CẤU TRÚC MẠNG
  // ==========================================
  1: [
    {
      title: "Trang 1/7: Khái Niệm Internet - Góc Nhìn Thiết Bị (Nuts & Bolts)",
      html: `
        <div class="space-y-3">
          <p class="text-slate-300">Theo giáo trình Kurose & Ross, dưới góc nhìn thành phần phần cứng (Nuts & bolts view), Internet là một hệ thống mạng máy tính toàn cầu kết nối hàng tỷ thiết bị:</p>
          <ul class="space-y-2 text-xs list-disc list-inside text-slate-300">
            <li><strong class="text-blue-400">Hosts / End Systems (Hệ thống đầu cuối):</strong> Các thiết bị máy tính chạy các chương trình ứng dụng (PC, Smartphone, Web Server, Smart TV, thiết bị IoT...).</li>
            <li><strong class="text-emerald-400">Communication Links (Liên kết truyền thông):</strong> Các dây dẫn hoặc môi trường vô tuyến kết nối các hosts (Cáp quang, Cáp đồng xoắn đôi, Cáp đồng trục, Sóng Radio). Mỗi liên kết có tốc độ truyền tải gọi là <em>Băng thông (Bandwidth / Transmission Rate)</em>.</li>
            <li><strong class="text-purple-400">Packet Switches (Thiết bị chuyển mạch gói):</strong> Thiết bị nhận gói tin trên một link đầu vào và chuyển tiếp sang link đầu ra thích hợp. Hai loại tiêu biểu là <strong>Router (Bộ định tuyến)</strong> và <strong>Switch (Bộ chuyển mạch)</strong>.</li>
            <li><strong class="text-amber-400">ISPs (Nhà cung cấp dịch vụ Internet):</strong> Mạng lưới các nhà mạng (như Viettel, VNPT, FPT, AT&T) kết nối các hệ thống đầu cuối lại với nhau.</li>
          </ul>
          <div class="p-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-400">
            📌 <strong>Chuẩn Internet:</strong> Các quy chuẩn hoạt động được định nghĩa trong các tài liệu <strong>RFC (Request for Comments)</strong> quản lý bởi tổ chức <strong>IETF (Internet Engineering Task Force)</strong>.
          </div>
        </div>
      `
    },
    {
      title: "Trang 2/7: Khái Niệm Internet - Góc Nhìn Dịch Vụ (Service View)",
      html: `
        <div class="space-y-3">
          <p class="text-slate-300">Dưới góc nhìn người phát triển ứng dụng (Service view), Internet được coi là một cơ sở hạ tầng cung cấp dịch vụ cho các ứng dụng phân tán:</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div class="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-1">
              <h5 class="font-bold text-emerald-400 text-sm">Hạ tầng dịch vụ cho Ứng dụng</h5>
              <p class="text-slate-300">Cung cấp phương tiện để các ứng dụng chạy trên các hệ thống đầu cuối (Web, Email, Streaming Video, Game online, P2P, E-commerce) có thể trao đổi dữ liệu với nhau.</p>
            </div>
            <div class="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-1">
              <h5 class="font-bold text-blue-400 text-sm">Cung cấp Socket API (Giao diện lập trình)</h5>
              <p class="text-slate-300">Cung cấp giao diện Socket (cái móc/hooks) cho phép các chương trình viết trên máy tính gửi và nhận dữ liệu "kết nối" vào hạ tầng Internet.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "Trang 3/7: Định Nghĩa Giao Thức Mạng (Protocol) - ĐIỂM THI BẮT BUỘC",
      html: `
        <div class="space-y-3">
          <div class="formula-highlight p-4 rounded-xl space-y-2">
            <h5 class="font-bold text-yellow-400 text-sm">⚠️ ĐỊNH NGHĨA CHUẨN GIAO THỨC (PROTOCOL):</h5>
            <p class="text-xs text-slate-100 italic leading-relaxed">
              "Giao thức định nghĩa <strong class="text-yellow-300">định dạng (format)</strong>, <strong class="text-yellow-300">thứ tự (order)</strong> của các thông điệp được gửi và nhận giữa các thực thể mạng, cùng các <strong class="text-yellow-300">hành động (actions)</strong> được thực hiện khi truyền/nhận thông điệp hoặc khi có sự kiện xảy ra."
            </p>
          </div>
          <div class="bg-slate-900 p-3.5 rounded-xl border border-slate-800 text-xs space-y-2">
            <h6 class="font-bold text-blue-300">Ví dụ so sánh luồng giao thức:</h6>
            <p>• <strong>Giao thức con người:</strong> Người A chào "Xin chào!" $\to$ Người B trả lời "Xin chào!" $\to$ A hỏi "Mấy giờ rồi?" $\to$ B đáp "2:00 giờ".</p>
            <p>• <strong>Giao thức mạng máy tính (TCP/HTTP):</strong> Client gửi <code>TCP SYN</code> $\to$ Server trả lời <code>TCP SYN-ACK</code> $\to$ Client gửi <code>HTTP GET</code> $\to$ Server gửi lại file dữ liệu <code>HTTP 200 OK</code>.</p>
          </div>
        </div>
      `
    },
    {
      title: "Trang 4/7: Mạng Truy Cập Khu Dân Cư - Công Nghệ DSL",
      html: `
        <div class="space-y-3 text-xs">
          <h5 class="font-bold text-amber-400 text-sm">DSL (Digital Subscriber Line) - Đường dây thuê bao kỹ thuật số</h5>
          <p class="text-slate-300">DSL sử dụng hạ tầng <strong>đường dây điện thoại bằng đồng sẵn có</strong> từ hộ gia đình đến bộ tổng đài <strong>DSLAM</strong> tại văn phòng trung tâm của công ty điện thoại.</p>
          <div class="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-1.5">
            <p>• <strong>Cơ chế ghép kênh FDM:</strong> Tín hiệu thoại và dữ liệu Internet được truyền ở các dải tần số khác nhau trên cùng một cặp dây đồng. Thiết bị <em>DSL Splitter</em> tại nhà tách riêng dải tần thoại (vào máy điện thoại) và dải tần data (vào DSL Modem).</p>
            <p>• <strong>Tốc độ bất đồng bộ:</strong> Tốc độ tải xuống (Download &lt; 24 Mbps) lớn hơn nhiều so với tốc độ tải lên (Upload &lt; 2.5 Mbps).</p>
            <p>• <strong>Đặc điểm quan trọng:</strong> DSL là dạng <strong>TRUY CẬP DÀNH RIÊNG (Dedicated Access)</strong> vì mỗi nhà có một đường dây riêng chạy thẳng tới DSLAM.</p>
          </div>
        </div>
      `
    },
    {
      title: "Trang 5/7: Mạng Truy Cập Cáp HFC & Enterprise Ethernet",
      html: `
        <div class="space-y-3 text-xs">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-1">
              <h5 class="font-bold text-cyan-400 text-sm">Mạng Cáp HFC (Hybrid Fiber Coax)</h5>
              <p class="text-slate-300">Sử dụng kết hợp cáp quang và cáp đồng trục truyền hình. Có thiết bị <strong>CMTS</strong> tại Cable Headend.</p>
              <p class="text-slate-300 font-semibold text-red-400">⚠️ Khác với DSL, HFC là TRUY CẬP CHIA SẺ (Shared Access). Nhiều hộ gia đình chung nhau 1 tuyến cáp, nên khi nhiều nhà cùng dùng sẽ bị giảm tốc độ.</p>
            </div>
            <div class="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-1">
              <h5 class="font-bold text-purple-400 text-sm">Enterprise Ethernet (Mạng doanh nghiệp)</h5>
              <p class="text-slate-300">Sử dụng các thiết bị Ethernet Switch kết nối trực tiếp các máy tính trong công ty, trường đại học tới Router biên.</p>
              <p class="text-slate-300">Tốc độ phổ biến: 10 Mbps, 100 Mbps, 1 Gbps, 10 Gbps.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "Trang 6/7: Phân Loại Phương Tiện Truyền Dẫn Vật Lý",
      html: `
        <div class="space-y-3 text-xs">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-1.5">
              <h5 class="font-bold text-blue-400 text-sm">Guided Media (Phương tiện có hướng)</h5>
              <p>Tín hiệu lan truyền trên vật thể rắn:</p>
              <ul class="list-disc list-inside space-y-1 text-slate-300">
                <li><strong>Twisted Pair (TP):</strong> Cặp dây xoắn đồng. Cat 5 (100M/1G), Cat 6 (10G).</li>
                <li><strong>Coaxial Cable:</strong> Cáp đồng trục 2 lõi đồng tâm (dùng trong HFC).</li>
                <li><strong>Fiber Optic (Cáp quang):</strong> Sợi thủy tinh truyền xung ánh sáng. Tốc độ cao (10s-100s Gbps), tỷ lệ lỗi cực thấp, <em>không bị nhiễu điện từ</em>.</li>
              </ul>
            </div>
            <div class="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-1.5">
              <h5 class="font-bold text-emerald-400 text-sm">Unguided Media (Phương tiện vô hướng)</h5>
              <p>Tín hiệu sóng radio lan truyền tự do trong bức xạ điện từ:</p>
              <ul class="list-disc list-inside space-y-1 text-slate-300">
                <li><strong>Terrestrial Microwave:</strong> Vi sóng mặt đất (đến 45 Mbps).</li>
                <li><strong>WiFi (802.11):</strong> Mạng LAN không dây (11/54 Mbps).</li>
                <li><strong>Cellular:</strong> 3G/4G/LTE/5G mạng di động.</li>
                <li><strong>Satellite (Vệ tinh):</strong> Truyền xa nhưng độ trễ lớn (~270 ms).</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "Trang 7/7: Mạng Lõi (Network Core) & Cấu Trúc Phân Cấp ISP",
      html: `
        <div class="space-y-3 text-xs">
          <h5 class="font-bold text-purple-400 text-sm">Cấu Trúc Phân Cấp Internet (Network of Networks)</h5>
          <p class="text-slate-300">Để hàng triệu ISP kết nối với nhau mà không bị bùng nổ số liên kết $O(N^2)$, Internet tổ chức theo cấu trúc phân cấp:</p>
          <div class="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-1.5">
            <p>• <strong>Tier-1 ISPs:</strong> Các nhà mạng thương mại toàn cầu (Sprint, AT&T, Level 3) sở hữu hạ tầng đường trục (Backbone) phủ sóng toàn thế giới.</p>
            <p>• <strong>IXP (Internet Exchange Point):</strong> Điểm trao đổi Internet cho phép các ISP peering (kết nối trực tiếp) với nhau.</p>
            <p>• <strong>Content Provider Networks:</strong> Mạng nội dung của Google, Microsoft tự xây dựng đường truyền riêng nối Data Center thẳng tới các IXP/Regional ISP để bỏ qua Tier-1 ISP.</p>
          </div>
        </div>
      `
    }
  ],

  // ==========================================
  // TOPIC 2: CHUYỂN MẠCH GÓI, ĐỘ TRỄ VÀ HIỆU SUẤT MẠNG
  // ==========================================
  2: [
    {
      title: "Trang 1/6: Cơ Chế Lưu & Chuyển Tiếp (Store-and-Forward)",
      html: `
        <div class="space-y-3 text-xs">
          <p class="text-slate-300 text-sm">Trong Chuyển mạch gói, gói tin có độ dài $L$ bits được gửi qua liên kết băng thông $R$ bps. Router áp dụng cơ chế <strong>Store-and-Forward</strong>:</p>
          <div class="formula-highlight p-4 rounded-xl text-center space-y-1">
            <p class="text-base font-extrabold text-white">Router phải nhận đủ TOÀN BỘ L bits của gói tin trước khi có thể bắt đầu truyền bit đầu tiên của gói tin đó lên liên kết tiếp theo.</p>
            <p class="text-cyan-300 font-mono text-xs mt-1">Trễ 1-hop: d_trans = L / R &nbsp;&nbsp;|&nbsp;&nbsp; Trễ N-hops: d_total = N * (L / R)</p>
          </div>
        </div>
      `
    },
    {
      title: "Trang 2/6: Bốn Nguồn Gây Độ Trễ Tại Nút (Nodal Delay)",
      html: `
        <div class="space-y-3 text-xs">
          <div class="formula-highlight p-4 rounded-xl text-center">
            <p class="text-lg font-black text-white">d<sub>nodal</sub> = d<sub>proc</sub> + d<sub>queue</sub> + d<sub>trans</sub> + d<sub>prop</sub></p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="bg-slate-900 p-3 rounded-lg border border-slate-800">
              <strong class="text-amber-400">1. d_proc (Processing Delay):</strong> Trễ xử lý kiểm tra bit lỗi, đọc địa chỉ đích trong header (&lt; ms).
            </div>
            <div class="bg-slate-900 p-3 rounded-lg border border-slate-800">
              <strong class="text-red-400">2. d_queue (Queuing Delay):</strong> Trễ xếp hàng nằm chờ trong bộ đệm router. Phụ thuộc độ tắc nghẽn.
            </div>
            <div class="bg-slate-900 p-3 rounded-lg border border-slate-800">
              <strong class="text-cyan-400">3. d_trans = L / R:</strong> Trễ truyền tải đẩy gói tin lên dây.
            </div>
            <div class="bg-slate-900 p-3 rounded-lg border border-slate-800">
              <strong class="text-emerald-400">4. d_prop = d / s:</strong> Trễ lan truyền tín hiệu di chuyển trên môi trường vật lý.
            </div>
          </div>
        </div>
      `
    },
    {
      title: "Trang 3/6: Phân Biệt Chi Tiết d_trans vs d_prop (Ví dụ Đoàn Xe)",
      html: `
        <div class="space-y-3 text-xs">
          <div class="bg-slate-900 p-4 rounded-xl border border-blue-500/30 space-y-2">
            <h5 class="font-bold text-blue-300 text-sm">💡 Ví dụ hình tượng Đoàn Xe (Car Caravan Analogy):</h5>
            <p>Giả sử đoàn 10 xe (gói 10 bits) đi qua trạm thu phí cách nhau 100 km (đường truyền):</p>
            <p>• <strong>Trễ truyền tải (d_trans):</strong> Thời gian trạm thu phí xử lý cho từng xe qua trạm (thời gian đẩy bits lên dây).</p>
            <p>• <strong>Trễ lan truyền (d_prop):</strong> Thời gian xe ô tô di chuyển trên 100 km đường cao tốc tới trạm tiếp theo (thời gian sóng điện từ lan truyền trên cáp).</p>
          </div>
        </div>
      `
    },
    {
      title: "Trang 4/6: Cường Độ Lưu Thông (Traffic Intensity) & Mất Gói",
      html: `
        <div class="space-y-3 text-xs">
          <div class="formula-highlight p-3.5 rounded-xl text-center">
            <p class="text-sm font-bold text-purple-300">Cường độ lưu thông: I = (L * a) / R</p>
            <p class="text-[11px] text-slate-400 mt-0.5">(với a là tốc độ gói tin đến trung bình packets/sec)</p>
          </div>
          <ul class="space-y-1.5 list-disc list-inside text-slate-300">
            <li>$I \approx 0$: Trễ xếp hàng rất nhỏ.</li>
            <li>$I \to 1$: Trễ xếp hàng tăng cực nhanh.</li>
            <li>$I \ge 1.0$: Tốc độ dữ liệu tới lớn hơn năng lực phục vụ $\to$ **Tràn bộ đệm (Buffer Overflow) $\to$ MẤT GÓI (Packet Loss)**.</li>
          </ul>
        </div>
      `
    },
    {
      title: "Trang 5/6: Thông Lượng & Liên Kết Nút Cổ Chai (Bottleneck Link)",
      html: `
        <div class="space-y-3 text-xs">
          <p class="text-slate-300"><strong>Thông lượng (Throughput)</strong> là tốc độ truyền dữ liệu thực tế giữa nguồn và đích (bits/sec). Thông lượng bị giới hạn bởi liên kết yếu nhất trên hành trình (Bottleneck Link):</p>
          <div class="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center font-mono text-emerald-400 font-bold">
            Throughput = min( R_1, R_2, ..., R_n, R_backbone / N )
          </div>
        </div>
      `
    },
    {
      title: "Trang 6/6: Tóm Tắt & Công Thức Cần Nhớ Làm Bài Tập",
      html: `
        <div class="space-y-2 text-xs">
          <div class="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
            <p class="font-bold text-amber-400">Bảng tóm tắt công thức trọng tâm:</p>
            <p>• Trễ truyền: $d_{\text{trans}} = L / R$ (L: bits, R: bps)</p>
            <p>• Trễ lan truyền: $d_{\text{prop}} = d / s$ (d: m, s: m/s)</p>
            <p>• Tổng trễ nút: $d_{\text{nodal}} = d_{\text{proc}} + d_{\text{queue}} + d_{\text{trans}} + d_{\text{prop}}$</p>
            <p>• Thông lượng: $R_{\text{bottleneck}} = \min(R_s, R_c)$</p>
          </div>
        </div>
      `
    }
  ],

  // ==========================================
  // TOPIC 3: MÔ HÌNH PHÂN LỚP VÀ BẢO MẬT MẠNG
  // ==========================================
  3: [
    {
      title: "Trang 1/6: Tại Sao Phải Phân Lớp Kiến Trúc Mạng?",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <p>Mạng máy tính là một hệ thống cực kỳ phức tạp gồm phần cứng, phần mềm, thiết bị định tuyến, ứng dụng. Việc phân lớp đem lại 2 lợi ích cốt lõi:</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
              <h5 class="font-bold text-blue-400">1. Cấu trúc rõ ràng</h5>
              <p class="mt-1">Cho phép xác định rõ mối quan hệ và chức năng của từng mảnh trong hệ thống phức tạp.</p>
            </div>
            <div class="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
              <h5 class="font-bold text-emerald-400">2. Mô-đun hóa (Modularity)</h5>
              <p class="mt-1">Dễ dàng bảo trì và nâng cấp. Thay đổi dịch vụ ở một tầng là trong suốt (không ảnh hưởng) tới các tầng khác.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "Trang 2/6: Mô Hình Internet 5 Tầng & Đơn Vị Dữ Liệu PDU",
      html: `
        <div class="space-y-2 text-xs">
          <table class="w-full text-left border-collapse border border-slate-800">
            <tr class="bg-slate-900 text-blue-300 font-bold border-b border-slate-800">
              <td class="p-2 border-r border-slate-800">Tầng (Layer)</td>
              <td class="p-2 border-r border-slate-800">Tên PDU</td>
              <td class="p-2">Giao thức / Chức năng chính</td>
            </tr>
            <tr class="border-b border-slate-800">
              <td class="p-2 font-bold text-purple-300 border-r border-slate-800">5. Application</td>
              <td class="p-2 font-bold text-purple-400 border-r border-slate-800">Message</td>
              <td class="p-2">HTTP, SMTP, FTP, DNS (Truyền nhận dữ liệu ứng dụng)</td>
            </tr>
            <tr class="border-b border-slate-800">
              <td class="p-2 font-bold text-blue-300 border-r border-slate-800">4. Transport</td>
              <td class="p-2 font-bold text-blue-400 border-r border-slate-800">Segment</td>
              <td class="p-2">TCP, UDP (Truyền dữ liệu giữa các tiến trình process-to-process)</td>
            </tr>
            <tr class="border-b border-slate-800">
              <td class="p-2 font-bold text-cyan-300 border-r border-slate-800">3. Network</td>
              <td class="p-2 font-bold text-cyan-400 border-r border-slate-800">Datagram</td>
              <td class="p-2">IP, Routing protocols (Định tuyến gói tin từ nguồn tới đích)</td>
            </tr>
            <tr class="border-b border-slate-800">
              <td class="p-2 font-bold text-emerald-300 border-r border-slate-800">2. Data Link</td>
              <td class="p-2 font-bold text-emerald-400 border-r border-slate-800">Frame</td>
              <td class="p-2">Ethernet, WiFi 802.11 (Chuyển dữ liệu giữa các nút lân cận)</td>
            </tr>
            <tr>
              <td class="p-2 font-bold text-amber-300 border-r border-slate-800">1. Physical</td>
              <td class="p-2 font-bold text-amber-400 border-r border-slate-800">Bit</td>
              <td class="p-2">Truyền các bit thô trên phương tiện vật lý</td>
            </tr>
          </table>
        </div>
      `
    },
    {
      title: "Trang 3/6: Mô Hình Tham Chiếu OSI 7 Tầng",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <p>Mô hình OSI có thêm 2 tầng nằm giữa Application và Transport:</p>
          <div class="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-2">
            <p>• <strong>Presentation (Tầng Trình diễn):</strong> Mã hóa, nén dữ liệu, quy ước định dạng dữ liệu chuyên biệt.</p>
            <p>• <strong>Session (Tầng Phiên):</strong> Đồng bộ hóa, thiết lập/duy trì phiên trao đổi và phục hồi lỗi.</p>
            <p class="text-amber-400">💡 <em>Lưu ý thi:</em> Mô hình Internet 5 tầng thiếu 2 tầng này. Nếu ứng dụng cần, nhà phát triển phải **tự cài đặt ngay trong Tầng Ứng dụng**.</p>
          </div>
        </div>
      `
    },
    {
      title: "Trang 4/6: Quá Trình Đóng Gói (Encapsulation)",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <p>Tại bên gửi, dữ liệu đi xuống từng tầng được đóng gói thêm Header ($H_t, H_n, H_l$). Tại bên nhận, dữ liệu được giải đóng gói (Decapsulation) theo chiều ngược lại.</p>
          <div class="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <p>• Router kiểm tra đến <strong>Tầng 3 (Network - IP Header)</strong>.</p>
            <p>• Switch kiểm tra đến <strong>Tầng 2 (Data Link - Frame Header)</strong>.</p>
          </div>
        </div>
      `
    },
    {
      title: "Trang 5/6: An Ninh Mạng - Mã Độc & DoS/DDoS",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="bg-slate-900 p-3.5 rounded-xl border border-red-500/30">
              <h5 class="font-bold text-red-400">Virus vs Worm</h5>
              <p class="mt-1"><strong>Virus:</strong> Cần con người tương tác/kích hoạt (mở email/file).</p>
              <p><strong>Worm:</strong> Tự động quét và lây lan qua lỗ hổng mạng mà <em>không cần hành động người dùng</em>.</p>
            </div>
            <div class="bg-slate-900 p-3.5 rounded-xl border border-red-500/30">
              <h5 class="font-bold text-red-400">DoS / DDoS</h5>
              <p class="mt-1">Làm cạn kiệt tài nguyên máy chủ/băng thông bằng lượng lớn truy cập giả mạo từ mạng Botnet (các máy zombie bị chiếm đoạt).</p>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "Trang 6/6: Packet Sniffing, IP Spoofing & Lịch Sử Internet",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <p>• <strong>Packet Sniffing:</strong> Đọc lén các gói tin trên môi trường chia sẻ (Ethernet, WiFi công cộng) bằng phần mềm như Wireshark.</p>
          <p>• <strong>IP Spoofing:</strong> Gửi gói tin mang địa chỉ IP nguồn giả mạo.</p>
          <div class="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
            <strong class="text-blue-400">Mốc lịch sử quan trọng:</strong>
            <p>1961 (Kleinrock - Lý thuyết hàng đợi) $\to$ 1969 (Nút ARPAnet đầu tiên) $\to$ 1974 (TCP/IP Cerf & Kahn) $\to$ 1983 (Triển khai chính thức TCP/IP & DNS) $\to$ 1990s (Tim Berners-Lee tạo WWW HTML/HTTP).</p>
          </div>
        </div>
      `
    }
  ],

  // ==========================================
  // TOPIC 4: KIẾN TRÚC VÀ DỊCH VỤ TẦNG ỨNG DỤNG
  // ==========================================
  4: [
    {
      title: "Trang 1/6: Tạo Ứng Dụng Mạng & Môi Trường Hoạt Động",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <p>Khi tạo một ứng dụng mạng, chúng ta viết chương trình chạy trên các <strong>hệ thống đầu cuối (Hosts)</strong> khác nhau truyền thông qua mạng.</p>
          <div class="p-3 bg-slate-900 rounded-xl border border-slate-800 font-semibold text-emerald-400">
            💡 Các thiết bị trong lõi mạng (Routers, Switches) KHÔNG chạy các chương trình ứng dụng của người dùng. Sự phức tạp được đẩy ra mạng biên!
          </div>
        </div>
      `
    },
    {
      title: "Trang 2/6: Mô Hình Kiến Trúc Client-Server vs P2P",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
              <h5 class="font-bold text-blue-400">Client-Server</h5>
              <p>Server luôn bật 24/7, IP cố định, đặt trong Data Center. Client kết nối không liên tục, IP thay đổi và không giao tiếp trực tiếp với client khác.</p>
            </div>
            <div class="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
              <h5 class="font-bold text-emerald-400">Peer-to-Peer (P2P)</h5>
              <p>Không có server trung tâm. Các máy cuối (peers) giao tiếp trực tiếp, vừa yêu cầu vừa cung cấp dịch vụ $\to$ <strong>Tính tự mở rộng (Self-scalability)</strong>.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "Trang 3/6: Tiến Trình Liên Lạc (Processes) & Khái Niệm Socket",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <p>• Trong cùng 1 máy: 2 tiến trình giao tiếp qua cơ chế <em>Inter-process communication</em> của HĐH.</p>
          <p>• Giữa các máy khác nhau: Tiến trình giao tiếp bằng cách trao đổi các <strong>Message (Thông điệp)</strong> qua <strong>Socket</strong>.</p>
          <div class="formula-highlight p-3.5 rounded-xl">
            <strong>Socket API:</strong> Được coi như "cánh cửa" giữa tiến trình tầng Ứng dụng và hạ tầng tầng Vận chuyển bên dưới.
          </div>
        </div>
      `
    },
    {
      title: "Trang 4/6: Định Danh Tiến Trình (Process Identifier)",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <div class="formula-highlight p-3.5 rounded-xl text-center">
            <p class="text-sm font-bold text-yellow-400">Process Identifier = Địa chỉ IP (32-bit) + Số hiệu cổng (Port Number 16-bit)</p>
          </div>
          <p>Ví dụ số cổng chuẩn: Web Server (Port 80), Mail Server (Port 25), SSH (Port 22), DNS (Port 53).</p>
        </div>
      `
    },
    {
      title: "Trang 5/6: Các Yêu Cầu Dịch Vụ Của Ứng Dụng",
      html: `
        <div class="space-y-2 text-xs text-slate-300">
          <p>1. <strong>Toàn vẹn dữ liệu (Data Integrity):</strong> Web, File transfer yêu cầu 100% tin cậy; Audio/Video chịu được mất mát một số gói.</p>
          <p>2. <strong>Định thì (Timing/Delay):</strong> Điện thoại Internet, Game trực tuyến yêu cầu trễ thấp.</p>
          <p>3. <strong>Thông lượng (Throughput):</strong> Đa phương tiện yêu cầu thông lượng tối thiểu; ứng dụng mềm dẻo dùng bất kỳ thông lượng nào.</p>
          <p>4. <strong>An ninh (Security):</strong> Mã hóa, chứng thực.</p>
        </div>
      `
    },
    {
      title: "Trang 6/6: So Sánh Mô Hình Dịch Vụ TCP vs UDP",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="bg-slate-900 p-3.5 rounded-xl border border-blue-500/30">
              <h5 class="font-bold text-blue-400">TCP Service</h5>
              <p>Reliable, Connection-oriented (Bắt tay 3 bước), Flow control, Congestion control. Dùng cho Web, Email, FTP.</p>
            </div>
            <div class="bg-slate-900 p-3.5 rounded-xl border border-emerald-500/30">
              <h5 class="font-bold text-emerald-400">UDP Service</h5>
              <p>Unreliable, Connectionless (No handshake), No flow/congestion control. Nhanh, dùng cho Streaming, VoIP, DNS.</p>
            </div>
          </div>
        </div>
      `
    }
  ],

  // ==========================================
  // TOPIC 5: CÁC GIAO THỨC ỨNG DỤNG MẠNG WEB, EMAIL, DNS
  // ==========================================
  5: [
    {
      title: "Trang 1/7: Web & Giao Thức HTTP Overview",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <p>Trang web bao gồm các đối tượng (objects: HTML file, JPEG image, Audio...). URL dạng <code>www.school.edu/someDept/pic.gif</code>.</p>
          <p><strong>HTTP (HyperText Transfer Protocol):</strong> Chạy trên port 80 dùng TCP, là giao thức <strong>không lưu trạng thái (Stateless)</strong>.</p>
        </div>
      `
    },
    {
      title: "Trang 2/7: Non-persistent vs Persistent HTTP",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <p>• <strong>Non-persistent HTTP (HTTP/1.0):</strong> Tối đa 1 đối tượng qua 1 kết nối TCP rồi đóng. Tải 1 trang tốn <strong>2 RTT + Time_transfer</strong> cho từng file đối tượng!</p>
          <p>• <strong>Persistent HTTP (HTTP/1.1):</strong> Giữ kết nối TCP mở để gửi liên tiếp nhiều đối tượng. Chỉ tốn 1 RTT ban đầu + 1 RTT cho các file sau.</p>
        </div>
      `
    },
    {
      title: "Trang 3/7: Cấu Trúc Thông Điệp HTTP Request & Response",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <p>• <strong>HTTP Request:</strong> Lệnh (<code>GET</code>, <code>POST</code>, <code>HEAD</code>, <code>PUT</code>, <code>DELETE</code>), Headers, Entity body. Kết thúc dòng bằng <code>\\r\\n</code>.</p>
          <p>• <strong>HTTP Response Status Codes:</strong> <code>200 OK</code>, <code>301 Moved Permanently</code>, <code>400 Bad Request</code>, <code>404 Not Found</code>, <code>505 HTTP Version Not Supported</code>.</p>
        </div>
      `
    },
    {
      title: "Trang 4/7: Cookies & Quản Lý Trạng Thái Người Dùng",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <div class="p-3.5 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
            <strong class="text-amber-400">4 Thành phần Cookie:</strong>
            <ol class="list-decimal list-inside space-y-0.5">
              <li>Header <code>Set-Cookie:</code> trong HTTP Response.</li>
              <li>Header <code>Cookie:</code> trong HTTP Request kế tiếp.</li>
              <li>File Cookie lưu trên máy người dùng do trình duyệt quản lý.</li>
              <li>Cơ sở dữ liệu backend tại trang Web.</li>
            </ol>
          </div>
        </div>
      `
    },
    {
      title: "Trang 5/7: Web Cache / Proxy Server & Conditional GET",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <p>Web Cache lưu bản sao đối tượng để thỏa mãn request của client mà không cần tới Server gốc, giúp giảm thời gian chờ và lưu lượng trên access link.</p>
          <p><strong>Conditional GET:</strong> Dùng Header <code>If-modified-since: <date></code>. Nếu file ở server gốc chưa đổi, trả về <code>304 Not Modified</code> không gửi lại dữ liệu.</p>
        </div>
      `
    },
    {
      title: "Trang 6/7: Giao Thức Truyền File FTP & Email (SMTP, POP3, IMAP)",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <p>• <strong>FTP:</strong> Port 21 (Control Out-of-band) và Port 20 (Data).</p>
          <p>• <strong>SMTP:</strong> Port 25, PUSH protocol, truyền thư giữa Mail Server bằng mã ASCII 7-bit.</p>
          <p>• <strong>POP3 vs IMAP:</strong> POP3 (Port 110 PULL, download-and-delete/keep); IMAP (Port 143 PULL, lưu thư & đồng bộ thư mục trên server).</p>
        </div>
      `
    },
    {
      title: "Trang 7/7: Hệ Thống Tên Miền DNS (Domain Name System)",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <p>Cơ sở dữ liệu phân tán, phân cấp dịch Hostname $\leftrightarrow$ IP. Cấu trúc gồm: Root DNS, TLD DNS, Authoritative DNS & Local DNS.</p>
          <div class="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
            <strong class="text-emerald-400">DNS Resource Records (RR): <code>(name, value, type, ttl)</code></strong>
            <p>• Type A: Hostname $\to$ IP | Type NS: Domain $\to$ Authoritative DNS | Type CNAME: Alias $\to$ Real Name | Type MX: Domain $\to$ Mail Server.</p>
          </div>
        </div>
      `
    }
  ],

  // ==========================================
  // TOPIC 6: MẠNG NGANG HÀNG P2P VÀ LẬP TRÌNH SOCKET
  // ==========================================
  6: [
    {
      title: "Trang 1/6: Mạng P2P Thuần Túy & Tính Tự Mở Rộng",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <p>Không có server trung tâm hoạt động 24/7. Các peers truyền thông trực tiếp, vừa là client vừa là server $\to$ Năng lực phục vụ tăng đồng thời với số người dùng.</p>
        </div>
      `
    },
    {
      title: "Trang 2/6: So Sánh Thời Gian Phân Phối File F Đến N Máy",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <div class="formula-highlight p-4 rounded-xl text-center space-y-1 font-mono">
            <p>Client-Server: D_cs >= max( N*F/us, F/dmin )  [Tăng tuyến tính O(N)]</p>
            <p class="text-emerald-400">P2P: D_p2p >= max( F/us, F/dmin, N*F/(us + sum(ui)) )  [Tự mở rộng quy mô]</p>
          </div>
        </div>
      `
    },
    {
      title: "Trang 3/6: BitTorrent & Thuật Toán Tit-for-Tat",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <p>File chia thành khối (chunks 256KB). Tracker theo dõi peers. Lấy khối: Rarest first. Gửi khối: <strong>Tit-for-Tat</strong>.</p>
          <p>• Alice gửi khối cho **Top 4 peers** upload nhanh nhất cho cô ấy (đánh giá lại mỗi 10s).</p>
          <p>• Mỗi 30s: Chọn ngẫu nhiên 1 peer mới để gửi (Optimistically unchoke).</p>
        </div>
      `
    },
    {
      title: "Trang 4/6: Bảng Băm Phân Tán (Distributed Hash Table - DHT)",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <p>DHT phân phối các cặp (key, value) qua hàng triệu peers. Trong Circular DHT, mỗi peer chỉ biết kế nhiệm (immediate successor) và tiền nhiệm. Thêm Shortcuts giúp truy vấn đạt $O(\\log N)$.</p>
        </div>
      `
    },
    {
      title: "Trang 5/6: Lập Trình Socket UDP Với Python",
      html: `
        <div class="space-y-2 text-xs font-mono">
          <p class="text-emerald-400 font-bold">UDP Client & Server Python Snippet:</p>
          <pre class="bg-slate-900 p-3 rounded-xl border border-slate-800 text-[11px] overflow-x-auto text-slate-300">
# UDP Client
from socket import *
clientSocket = socket(AF_INET, SOCK_DGRAM)
clientSocket.sendto(message.encode(), ('server_ip', 12000))
modifiedMsg, serverAddr = clientSocket.recvfrom(2048)
clientSocket.close()
          </pre>
        </div>
      `
    },
    {
      title: "Trang 6/6: Lập Trình Socket TCP Với Python",
      html: `
        <div class="space-y-2 text-xs font-mono">
          <p class="text-blue-400 font-bold">TCP Client & Server Python Snippet:</p>
          <pre class="bg-slate-900 p-3 rounded-xl border border-slate-800 text-[11px] overflow-x-auto text-slate-300">
# TCP Server
from socket import *
serverSocket = socket(AF_INET, SOCK_STREAM)
serverSocket.bind(('', 12000))
serverSocket.listen(1)
while True:
  connectionSocket, addr = serverSocket.accept()
  data = connectionSocket.recv(1024)
  connectionSocket.send(data.upper())
  connectionSocket.close()
          </pre>
        </div>
      `
    }
  ],

  // ==========================================
  // TOPIC 7: NGUYÊN LÝ TRUYỀN DỮ LIỆU TIN CẬY (RDT)
  // ==========================================
  7: [
    {
      title: "Trang 1/7: Khái Niệm Truyền Dữ Liệu Tin Cậy (rdt over udt)",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <p>Xây dựng kênh tin cậy (rdt) dựa trên kênh không tin cậy bên dưới (udt). Sử dụng Finite State Machines (FSM) mô tả trạng thái bên gửi và bên nhận.</p>
        </div>
      `
    },
    {
      title: "Trang 2/7: Tiến Hóa rdt 1.0 $\\to$ rdt 2.0 (Phát hiện bit lỗi)",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <p>• <strong>rdt 1.0:</strong> Kênh hoàn hảo không bit lỗi, không mất gói.</p>
          <p>• <strong>rdt 2.0:</strong> Kênh có bit lỗi. Cơ chế: Checksum phát hiện lỗi, ACK/NAK phản hồi, truyền lại khi NAK. <em>Lỗ hổng: ACK/NAK bị hỏng!</em></p>
        </div>
      `
    },
    {
      title: "Trang 3/7: Tiến Hóa rdt 2.1 $\\to$ rdt 2.2 (Sequence Numbers & NAK-Free)",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <p>• <strong>rdt 2.1:</strong> Thêm <strong>Số thứ tự (Sequence Number 0, 1)</strong> vào gói tin để hủy gói trùng lặp khi ACK/NAK bị hỏng.</p>
          <p>• <strong>rdt 2.2:</strong> Loại bỏ NAK. Bên nhận chỉ gửi \<code>ACK(seq#)\</code> cho gói nhận tốt cuối cùng. ACK trùng = NAK.</p>
        </div>
      `
    },
    {
      title: "Trang 4/7: Giao Thức rdt 3.0 (Xử lý Bit Lỗi VÀ Mất Gói)",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <div class="formula-highlight p-4 rounded-xl space-y-1">
            <strong class="text-yellow-400">Cơ chế rdt 3.0:</strong>
            <p>Bổ sung **Countdown Timer** tại bên gửi. Nếu hết thời gian Timeout mà chưa nhận ACK $\\to$ Bên gửi truyền lại gói tin.</p>
          </div>
        </div>
      `
    },
    {
      title: "Trang 5/7: Hiệu Suất rdt 3.0 Stop-and-Wait & Nhu Cầu Pipelining",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <p>Hiệu suất Stop-and-Wait: $U_{\\text{sender}} = \\frac{L/R}{\\text{RTT} + L/R}$. Khi RTT lớn, $U_{\\text{sender}}$ cực kỳ lãng phí (ví dụ 0.00027) $\\to$ Cần giao thức **Pipelined** cho phép gửi nhiều gói $N$ khi chưa chờ ACK.</p>
        </div>
      `
    },
    {
      title: "Trang 6/7: Giao Thức Pipelined Go-Back-N (GBN)",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <p>• Cửa sổ bên gửi $N$. Dùng <strong>Cumulative ACK(n)</strong> (xác nhận tất cả gói up to n).</p>
          <p>• 1 Timer duy nhất cho gói chưa ACK sớm nhất. Timeout $n \\to$ Truyền lại TẤT CẢ các gói từ $n$ trong cửa sổ.</p>
          <p class="text-red-400">• Bên nhận: Hủy bỏ (Discard) tất cả các gói đến không đúng thứ tự (out-of-order).</p>
        </div>
      `
    },
    {
      title: "Trang 7/7: Giao Thức Pipelined Selective Repeat (SR)",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <p>• Dùng <strong>Individual ACK</strong> cho từng gói. Bên nhận đệm (Buffer) các gói out-of-order.</p>
          <p>• 1 Timer riêng cho MỖI gói. Timeout gói nào $\\to$ Chỉ truyền lại DUY NHẤT gói đó.</p>
          <p class="text-amber-400">• Điều kiện tránh lỗi trùng: Kích thước cửa sổ $N \\le \\frac{1}{2} \\text{SeqSpace}$.</p>
        </div>
      `
    }
  ],

  // ==========================================
  // TOPIC 8: GIAO THỨC UDP VÀ GIAO THỨC TCP
  // ==========================================
  8: [
    {
      title: "Trang 1/7: Giao Thức UDP (RFC 768) Overview",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <p>UDP là giao thức bare-bones, connectionless, không bắt tay. Dịch vụ Best-effort có thể mất gói hoặc sai thứ tự.</p>
        </div>
      `
    },
    {
      title: "Trang 2/7: Cấu Trúc Header UDP (8 Bytes) & Checksum",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <p>Header UDP chỉ 8 Bytes (Source Port, Dest Port, Length, Checksum).</p>
          <p><strong>Internet Checksum:</strong> Cộng bù 1 của tổng các từ 16-bit. Bit nhớ cao nhất cộng quay lại kết quả. Nhận lấy phép bù 1.</p>
        </div>
      `
    },
    {
      title: "Trang 3/7: Giao Thức TCP (RFC 793) Overview",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <p>Point-to-point, tin cậy, in-order byte stream, Full duplex, MSS (Maximum Segment Size), Connection-oriented, Flow control & Congestion control.</p>
        </div>
      `
    },
    {
      title: "Trang 4/7: Cấu Trúc Header TCP (Tối thiểu 20 Bytes)",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <p>Header TCP 20 Bytes: Source Port, Dest Port, Sequence Number (byte-based), Ack Number, Head Len, Flags (SYN, ACK, FIN, RST, PSH, URG), \<code>rwnd\</code> (Receive Window), Checksum.</p>
        </div>
      `
    },
    {
      title: "Trang 5/7: Ước Lượng RTT & TimeoutInterval Của TCP",
      html: `
        <div class="space-y-3 text-xs text-slate-300 font-mono">
          <p>EstimatedRTT = (1 - 0.125) * EstimatedRTT + 0.125 * SampleRTT</p>
          <p>DevRTT = (1 - 0.25) * DevRTT + 0.25 * |SampleRTT - EstimatedRTT|</p>
          <p class="text-amber-400 font-bold">TimeoutInterval = EstimatedRTT + 4 * DevRTT</p>
        </div>
      `
    },
    {
      title: "Trang 6/7: Cơ Chế Fast Retransmit (Truyền Lại Nhanh)",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <p>Khi bên gửi nhận <strong>3 Duplicate ACKs</strong> (tổng cộng 4 ACK giống nhau cho 1 gói), bên gửi kết luận gói tiếp theo bị mất và <strong>truyền lại ngay lập tức</strong> mà không chờ Timeout!</p>
        </div>
      `
    },
    {
      title: "Trang 7/7: TCP Connection Management (3-Way Handshake & 4-Way Teardown)",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <p>• <strong>3-Way Handshake:</strong> SYN(x) $\\to$ SYNACK(y, ack=x+1) $\\to$ ACK(ack=y+1).</p>
          <p>• <strong>4-Way Teardown:</strong> FIN(x) $\\to$ ACK(x+1) $\\to$ FIN(y) $\\to$ ACK(y+1) (kèm trạng thái TIME_WAIT 2*MSL).</p>
        </div>
      `
    }
  ],

  // ==========================================
  // TOPIC 9: CƠ CHẾ ĐIỀU KHIỂN TẮC NGHẼN TRONG TCP
  // ==========================================
  9: [
    {
      title: "Trang 1/7: Khái Niệm Tắc Nghẽn & Phân Biệt Flow Control vs Congestion Control",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <p>• <strong>Flow Control (Điều khiển luồng):</strong> Bên nhận kiểm soát bên gửi qua $rwnd$ không làm tràn đệm bên nhận.</p>
          <p>• <strong>Congestion Control (Điều khiển tắc nghẽn):</strong> Bên gửi tự điều tiết qua $cwnd$ không làm quá tải hạ tầng mạng lõi.</p>
        </div>
      `
    },
    {
      title: "Trang 2/7: Nguyên Nhân & Hệ Quả Của Tắc Nghẽn Mạng",
      html: `
        <div class="space-y-2 text-xs text-slate-300">
          <p>1. <em>Bộ đệm vô hạn:</em> Trễ tăng tiến tới vô hạn khi rate đến tiệm cận R/2.</p>
          <p>2. <em>Bộ đệm hữu hạn + truyền lại:</em> Giảm Goodput do truyền lại gói trùng.</p>
          <p>3. <em>Mạng multi-hop:</em> Gói bị hủy ở router sau làm lãng phí băng thông ở các hop trước đó.</p>
        </div>
      `
    },
    {
      title: "Trang 3/7: Các Phương Pháp Tiếp Cận Congestion Control",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <p>• <strong>End-to-End Congestion Control (TCP):</strong> Hệ thống đầu cuối tự suy ra tắc nghẽn dựa trên mất gói / trễ mà không cần mạng phản hồi.</p>
          <p>• <strong>Network-Assisted:</strong> Router phản hồi trực tiếp (Bit ECN trong IP/TCP, Cell RM trong ATM ABR).</p>
        </div>
      `
    },
    {
      title: "Trang 4/7: Thuật Toán AIMD (Additive Increase Multiplicative Decrease)",
      html: `
        <div class="space-y-3 text-xs text-slate-300 font-mono">
          <p>• Additive Increase: Tăng cwnd thêm +1 MSS sau MỖI RTT trong Congestion Avoidance.</p>
          <p>• Multiplicative Decrease: Giảm cwnd xuống một nửa (cwnd/2) khi phát hiện mất gói.</p>
        </div>
      `
    },
    {
      title: "Trang 5/7: Giai Đoạn Slow Start & Chuyển Qua Congestion Avoidance",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <p>Ban đầu $cwnd = 1 \\text{ MSS}$. Tăng gấp đôi $cwnd$ mỗi RTT (tăng CẤP SỐ NHÂN). Khi $cwnd \\ge ssthresh$, chuyển sang Congestion Avoidance (tăng CẤP SỐ CỘNG +1 MSS/RTT).</p>
        </div>
      `
    },
    {
      title: "Trang 6/7: Phân Biệt Phản Ứng Mất Gói: TCP Tahoe vs TCP Reno",
      html: `
        <div class="space-y-3 text-xs text-slate-300">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="bg-slate-900 p-3.5 rounded-xl border border-red-500/30">
              <h6 class="font-bold text-red-400">TCP Tahoe</h6>
              <p>Dù Timeout hay 3 Dup ACKs, Tahoe LUÔN LUÔN thiết lập $ssthresh = cwnd/2$, $cwnd = 1 \\text{ MSS}$ và về Slow Start.</p>
            </div>
            <div class="bg-slate-900 p-3.5 rounded-xl border border-emerald-500/30">
              <h6 class="font-bold text-emerald-400">TCP Reno</h6>
              <p>Timeout: Về 1 MSS như Tahoe.<br>3 Dup ACKs: $ssthresh = cwnd/2$, $cwnd = ssthresh + 3 \\text{ MSS}$ $\\to$ Chuyển sang **Fast Recovery** (tăng tuyến tính từ cwnd/2).</p>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "Trang 7/7: TCP Throughput & TCP Fairness",
      html: `
        <div class="space-y-3 text-xs text-slate-300 font-mono">
          <p>• Average TCP Throughput = 0.75 * W / RTT (với W là window size khi mất gói).</p>
          <p>• TCP Fairness: K kết nối TCP chia sẻ link R nhận trung bình R/K băng thông nhờ đồ thị tiệm cận AIMD.</p>
        </div>
      `
    }
  ]
};
