/* Astra AI Tutor Data Bank - Chapters 1, 2, 3 (174+ Master Questions Bank) */

var masterQuestionBank = [
  {
    "id": 1,
    "ch": 1,
    "topicId": 1,
    "q": "Giao thức mạng (Protocol) định nghĩa những yếu tố cốt lõi nào sau đây?",
    "opts": [
      "Địa chỉ IP và cổng mặc định của máy chủ",
      "Định dạng, thứ tự thông điệp truyền/nhận và các hành động được thực hiện",
      "Băng thông tối đa và tốc độ truyền dẫn",
      "Thuật toán mã hóa RSA 2048-bit"
    ],
    "ans": 1,
    "exp": "Theo định nghĩa Kurose & Ross: Giao thức định nghĩa định dạng (format), thứ tự (order) và hành động (actions) khi truyền/nhận thông điệp."
  },
  {
    "id": 2,
    "ch": 1,
    "topicId": 1,
    "q": "Thiết bị nào sau đây hoạt động ở góc nhìn 'Nuts and bolts' của Internet như một thiết bị chuyển mạch gói (Packet Switch)?",
    "opts": [
      "Web Server và Mail Server",
      "Router và Switch",
      "Cáp quang và Cáp đồng",
      "Trình duyệt Firefox và Chrome"
    ],
    "ans": 1,
    "exp": "Packet switches gồm Router (tầng Mạng) và Switch (tầng Liên kết dữ liệu)."
  },
  {
    "id": 3,
    "ch": 1,
    "topicId": 1,
    "q": "Các chuẩn Internet (Internet Standards) được công bố trong các tài liệu nào sau đây?",
    "opts": [
      "IEEE 802.3",
      "ISO 9001",
      "RFC (Request for Comments) do IETF quản lý",
      "W3C HTML5"
    ],
    "ans": 2,
    "exp": "Chuẩn Internet do IETF phát triển và phát hành dưới dạng các tài liệu RFC."
  },
  {
    "id": 4,
    "ch": 1,
    "topicId": 1,
    "q": "Góc nhìn Dịch vụ (Service view) của Internet cung cấp cái gì cho các ứng dụng?",
    "opts": [
      "Giao diện lập trình ứng dụng Socket API",
      "Cáp đồng trục chất lượng cao",
      "Địa chỉ MAC cố định",
      "Bộ vi xử lý tốc độ cao"
    ],
    "ans": 0,
    "exp": "Góc nhìn dịch vụ coi Internet cung cấp hạ tầng và Socket API cho phép các ứng dụng truyền nhận dữ liệu."
  },
  {
    "id": 5,
    "ch": 1,
    "topicId": 1,
    "q": "Mạng truy cập DSL (Digital Subscriber Line) sử dụng hạ tầng truyền dẫn nào sẵn có?",
    "opts": [
      "Mạng cáp truyền hình đồng trục",
      "Đường dây điện thoại sẵn có",
      "Sóng vệ tinh tầm thấp",
      "Cáp quang FTTH"
    ],
    "ans": 1,
    "exp": "DSL tận dụng đường dây điện thoại bằng đồng sẵn có và dùng kỹ thuật FDM phân chia tần số thoại & data."
  },
  {
    "id": 6,
    "ch": 1,
    "topicId": 1,
    "q": "Tại sao công nghệ mạng cáp HFC (Hybrid Fiber Coax) lại được gọi là truy cập chia sẻ (Shared Access)?",
    "opts": [
      "Vì nhiều hộ gia đình chung nhau 1 đường dây cáp đến CMTS tại Cable Headend",
      "Vì DSL chia sẻ với mạng điện thoại",
      "Vì router sử dụng chung cổng 80",
      "Vì WiFi phát sóng cho nhiều người"
    ],
    "ans": 0,
    "exp": "HFC chia sẻ môi trường truyền dẫn giữa các nhà lân cận cùng kết nối tới Cable Headend."
  },
  {
    "id": 7,
    "ch": 1,
    "topicId": 1,
    "q": "Tốc độ đường truyền của mạng truy cập doanh nghiệp Ethernet phổ biến hiện nay là bao nhiêu?",
    "opts": [
      "10 Kbps đến 100 Kbps",
      "10 Mbps, 100 Mbps, 1 Gbps, 10 Gbps",
      "1 Tbps đến 10 Tbps",
      "Chỉ cố định ở 54 Mbps"
    ],
    "ans": 1,
    "exp": "Ethernet doanh nghiệp phổ biến với các chuẩn tốc độ 10M, 100M, 1G, 10G bps."
  },
  {
    "id": 8,
    "ch": 1,
    "topicId": 1,
    "q": "Đặc điểm nào sau đây KHÔNG đúng đối với phương tiện truyền dẫn cáp quang (Fiber Optic)?",
    "opts": [
      "Dẫn xung ánh sáng qua sợi thủy tinh",
      "Tỷ lệ lỗi bit cực thấp",
      "Rất dễ bị nhiễu điện từ từ các thiết bị xung quanh",
      "Tốc độ truyền cực cao (10s-100s Gbps)"
    ],
    "ans": 2,
    "exp": "Cáp quang truyền bằng xung ánh sáng nên KHÔNG bị nhiễu điện từ."
  },
  {
    "id": 9,
    "ch": 1,
    "topicId": 1,
    "q": "Phương tiện truyền dẫn không dây nào sau đây chịu độ trễ di chuyển rất lớn (~270 ms)?",
    "opts": [
      "Vi sóng mặt đất (Terrestrial Microwave)",
      "WiFi 802.11",
      "Vệ tinh (Satellite)",
      "Cáp xoắn đôi Cat 6"
    ],
    "ans": 2,
    "exp": "Truyền dẫn vệ tinh qua khoảng cách lớn ngoài không gian gây độ trễ khoảng 270 ms."
  },
  {
    "id": 10,
    "ch": 1,
    "topicId": 1,
    "q": "Cấu trúc ISP phân cấp lớp 1 (Tier-1 ISP) có vai trò gì trong kiến trúc Internet?",
    "opts": [
      "Cung cấp mạng LAN cho hộ gia đình",
      "Sở hữu hạ tầng đường trục (Backbone) thương mại phủ sóng toàn cầu",
      "Chỉ quản lý các tên miền .com",
      "Chạy ứng dụng Web Server"
    ],
    "ans": 1,
    "exp": "Tier-1 ISPs (như Sprint, AT&T, Level 3) sở hữu hạ tầng đường trục quốc tế bao trùm toàn thế giới."
  },
  {
    "id": 11,
    "ch": 1,
    "topicId": 2,
    "q": "Cơ chế Store-and-Forward trong chuyển mạch gói yêu cầu điều gì tại mỗi Router?",
    "opts": [
      "Router truyền từng bit ngay khi nhận được",
      "Router phải nhận đủ toàn bộ L bits của gói tin trước khi phát bit đầu tiên lên link tiếp theo",
      "Router lưu gói tin trong 1 giờ rồi mới phát",
      "Router không cần đệm dữ liệu"
    ],
    "ans": 1,
    "exp": "Store-and-Forward bắt buộc router nhận hoàn chỉnh gói L bits mới bắt đầu phát sang link kế tiếp."
  },
  {
    "id": 12,
    "ch": 1,
    "topicId": 2,
    "q": "Công thức tính Trễ truyền tải (Transmission Delay - d_trans) của gói tin L bits trên link tốc độ R bps là:",
    "opts": [
      "d_trans = d / s",
      "d_trans = L / R",
      "d_trans = R / L",
      "d_trans = (L * a) / R"
    ],
    "ans": 1,
    "exp": "d_trans = L / R. Trong khi d_prop = d / s là trễ lan truyền."
  },
  {
    "id": 13,
    "ch": 1,
    "topicId": 2,
    "q": "Công thức tính Trễ lan truyền (Propagation Delay - d_prop) của tín hiệu đi khoảng cách d với vận tốc sóng s là:",
    "opts": [
      "d_prop = L / R",
      "d_prop = d / s",
      "d_prop = s / d",
      "d_prop = d * s"
    ],
    "ans": 1,
    "exp": "d_prop = d / s (với s là vận tốc tín hiệu trong môi trường ~2x10^8 m/s)."
  },
  {
    "id": 14,
    "ch": 1,
    "topicId": 2,
    "q": "Trễ xử lý tại nút (d_proc) bao gồm các công việc nào sau đây?",
    "opts": [
      "Kiểm tra lỗi bit header và xác định cổng xuất ra",
      "Đợi dữ liệu trong hàng đệm",
      "Đẩy các bit lên dây cáp",
      "Truyền tín hiệu qua cáp quang"
    ],
    "ans": 0,
    "exp": "d_proc là thời gian router kiểm tra bit lỗi header và tra bảng định tuyến để tìm cổng ra."
  },
  {
    "id": 15,
    "ch": 1,
    "topicId": 2,
    "q": "Cường độ lưu thông (Traffic Intensity) được tính bằng công thức I = (L * a) / R. Khi I > 1.0 thì:",
    "opts": [
      "Trễ xếp hàng tiến về 0",
      "Hàng đợi đầy, xảy ra tràn bộ đệm dẫn đến Mất gói (Packet Loss)",
      "Tốc độ mạng tăng gấp đôi",
      "Router tự động đóng cổng"
    ],
    "ans": 1,
    "exp": "Khi I >= 1.0, tốc độ dữ liệu tới vượt quá khả năng phát của link, gây tràn đệm và mất gói."
  },
  {
    "id": 16,
    "ch": 1,
    "topicId": 2,
    "q": "Chương trình tiện ích nào dùng để đo độ trễ từ nguồn tới từng router trên hành trình tới đích?",
    "opts": [
      "Ping",
      "Traceroute (hoặc tracert)",
      "Netstat",
      "Ipconfig"
    ],
    "ans": 1,
    "exp": "Traceroute gửi 3 gói tin probes tới từng router dọc hành trình để đo độ trễ thực tế."
  },
  {
    "id": 17,
    "ch": 1,
    "topicId": 2,
    "q": "Khái niệm 'Bottleneck Link' (Liên kết nút cổ chai) trên hành trình truyền dữ liệu có nghĩa là gì?",
    "opts": [
      "Đường liên kết có chiều dài ngắn nhất",
      "Đường liên kết có băng thông thấp nhất khống chế thông lượng end-to-end",
      "Đường liên kết dùng cáp quang",
      "Đường liên kết nối với máy chủ"
    ],
    "ans": 1,
    "exp": "Bottleneck link là liên kết có băng thông nhỏ nhất trên tuyến, giới hạn thông lượng toàn mạng."
  },
  {
    "id": 18,
    "ch": 1,
    "topicId": 2,
    "q": "Kỹ thuật ghép kênh FDM (Frequency Division Multiplexing) chia sẻ đường truyền bằng cách nào?",
    "opts": [
      "Chia thời gian thành các khe luân phiên",
      "Chia dải tần số thành các dải tần nhỏ chạy song song",
      "Gộp tất cả gói tin thành 1 gói lớn",
      "Mã hóa dữ liệu bằng RSA"
    ],
    "ans": 1,
    "exp": "FDM chia băng thông tần số thành nhiều kênh tần số nhỏ hoạt động liên tục."
  },
  {
    "id": 19,
    "ch": 1,
    "topicId": 2,
    "q": "Kỹ thuật ghép kênh TDM (Time Division Multiplexing) chia sẻ đường truyền bằng cách nào?",
    "opts": [
      "Chia thời gian thành các khung/khe (time slots) luân phiên chiếm toàn bộ dải tần",
      "Chia dải tần số",
      "Gửi dữ liệu qua vệ tinh",
      "Tự động điều tiết theo dung lượng đệm"
    ],
    "ans": 0,
    "exp": "TDM chia thời gian thành các time slots, mỗi kết nối luân phiên chiếm toàn bộ dải tần."
  },
  {
    "id": 20,
    "ch": 1,
    "topicId": 2,
    "q": "So với Chuyển mạch kênh, Chuyển mạch gói có ưu điểm nổi bật nào đối với lưu lượng đột biến (Bursty data)?",
    "opts": [
      "Chia sẻ tài nguyên hiệu quả theo nhu cầu (Statistical Multiplexing), phục vụ nhiều người dùng hơn",
      "Đảm bảo độ trễ 0 ms",
      "Không bao giờ xảy ra mất gói",
      "Không cần địa chỉ IP"
    ],
    "ans": 0,
    "exp": "Chuyển mạch gói tối ưu cho Bursty data nhờ chia sẻ tài nguyên linh hoạt theo yêu cầu."
  },
  {
    "id": 21,
    "ch": 1,
    "topicId": 3,
    "q": "Mô hình chồng giao thức Internet tiêu chuẩn gồm mấy tầng?",
    "opts": [
      "3 tầng",
      "4 tầng",
      "5 tầng",
      "7 tầng"
    ],
    "ans": 2,
    "exp": "Internet gồm 5 tầng: Application, Transport, Network, Data Link, Physical."
  },
  {
    "id": 22,
    "ch": 1,
    "topicId": 3,
    "q": "Mô hình tham chiếu OSI chuẩn gồm mấy tầng và thêm 2 tầng nào so với mô hình Internet 5 tầng?",
    "opts": [
      "7 tầng; thêm Presentation (Trình diễn) và Session (Phiên)",
      "6 tầng; thêm Security và Transport",
      "7 tầng; thêm Router và Switch",
      "5 tầng; giống hệt Internet"
    ],
    "ans": 0,
    "exp": "OSI có 7 tầng, thêm Presentation và Session nằm giữa Application và Transport."
  },
  {
    "id": 23,
    "ch": 1,
    "topicId": 3,
    "q": "Đơn vị dữ liệu (PDU) tại tầng Network (Mạng) gọi là gì?",
    "opts": [
      "Message",
      "Segment",
      "Datagram (hoặc Packet)",
      "Frame"
    ],
    "ans": 2,
    "exp": "App: Message -> Transport: Segment -> Network: Datagram -> Data Link: Frame -> Physical: Bit."
  },
  {
    "id": 24,
    "ch": 1,
    "topicId": 3,
    "q": "Đơn vị dữ liệu (PDU) tại tầng Data Link (Liên kết dữ liệu) gọi là gì?",
    "opts": [
      "Message",
      "Segment",
      "Datagram",
      "Frame"
    ],
    "ans": 3,
    "exp": "PDU tầng Data Link là Frame (Khung)."
  },
  {
    "id": 25,
    "ch": 1,
    "topicId": 3,
    "q": "Quá trình gắn thêm Header khi dữ liệu di chuyển từ tầng trên xuống tầng dưới ở máy gửi gọi là gì?",
    "opts": [
      "Giải đóng gói (Decapsulation)",
      "Đóng gói (Encapsulation)",
      "Định tuyến (Routing)",
      "Ghép kênh (Multiplexing)"
    ],
    "ans": 1,
    "exp": "Encapsulation là quá trình đóng gói thêm thông tin điều khiển Header qua từng tầng."
  },
  {
    "id": 26,
    "ch": 1,
    "topicId": 3,
    "q": "Một Router thông thường trong mạng lõi xử lý dữ liệu lên tới tầng nào trong mô hình 5 tầng?",
    "opts": [
      "Tầng 1 (Physical)",
      "Tầng 2 (Data Link)",
      "Tầng 3 (Network)",
      "Tầng 5 (Application)"
    ],
    "ans": 2,
    "exp": "Router xử lý đến Tầng 3 (Network - IP Datagram). Switch xử lý đến Tầng 2 (Data Link - Frame)."
  },
  {
    "id": 27,
    "ch": 1,
    "topicId": 3,
    "q": "Sự khác biệt căn bản giữa Virus và Worm là gì?",
    "opts": [
      "Virus lây qua mạng không dây, Worm lây qua cáp quang",
      "Virus cần sự tương tác/hành động của người dùng để lây lan, Worm tự động lây lan qua lỗ hổng mạng",
      "Worm không phải mã độc",
      "Virus không thể xóa file"
    ],
    "ans": 1,
    "exp": "Virus cần hành động của người dùng (mở file/email), Worm tự động lây qua lỗ hổng mạng."
  },
  {
    "id": 28,
    "ch": 1,
    "topicId": 3,
    "q": "Tấn công Từ chối dịch vụ phân tán (DDoS) sử dụng mạng lưới nào để làm ngập máy chủ mục tiêu?",
    "opts": [
      "Mạng cáp quang FTTH",
      "Mạng Botnet gồm các máy tính nhiễm mã độc",
      "Hệ thống máy chủ DNS gốc",
      "Mạng LAN doanh nghiệp"
    ],
    "ans": 1,
    "exp": "DDoS điều khiển mạng Botnet (các zombie tính nhiễm mã độc) gửi lượng lớn yêu cầu giả mạo."
  },
  {
    "id": 29,
    "ch": 1,
    "topicId": 3,
    "q": "Hình thức đọc lén các gói tin chạy qua phương tiện truyền quảng bá (Ethernet chia sẻ, WiFi) gọi là gì?",
    "opts": [
      "IP Spoofing",
      "Packet Sniffing",
      "DNS Poisoning",
      "SYN Flooding"
    ],
    "ans": 1,
    "exp": "Packet Sniffing đọc lén các gói tin trên môi trường mạng chia sẻ (công cụ Wireshark)."
  },
  {
    "id": 30,
    "ch": 1,
    "topicId": 3,
    "q": "Kỹ thuật IP Spoofing là gì?",
    "opts": [
      "Gửi gói tin với địa chỉ IP nguồn giả mạo",
      "Đóng gói gói tin vào Frame",
      "Dịch tên miền ra địa chỉ IP",
      "Tăng tốc độ mạng"
    ],
    "ans": 0,
    "exp": "IP Spoofing là việc tạo và gửi gói tin chứa IP nguồn giả."
  },
  {
    "id": 31,
    "ch": 2,
    "topicId": 4,
    "q": "Đặc điểm nào sau đây KHÔNG đúng đối với máy chủ (Server) trong kiến trúc Client-Server?",
    "opts": [
      "Luôn luôn hoạt động 24/7",
      "Có địa chỉ IP cố định",
      "Không giao tiếp với máy khách",
      "Thường đặt trong Data Center để mở rộng quy mô"
    ],
    "ans": 2,
    "exp": "Server sinh ra để giao tiếp và trả lời yêu cầu từ các Client."
  },
  {
    "id": 32,
    "ch": 2,
    "topicId": 4,
    "q": "Ưu điểm nổi bật nhất của kiến trúc P2P (Peer-to-Peer) là gì?",
    "opts": [
      "Không cần mã hóa dữ liệu",
      "Tính tự mở rộng quy mô (Self-scalability)",
      "Địa chỉ IP không bao giờ đổi",
      "Tốc độ luôn cố định 1 Gbps"
    ],
    "ans": 1,
    "exp": "P2P tự mở rộng quy mô vì thêm peer mới đồng nghĩa với thêm năng lực phục vụ."
  },
  {
    "id": 33,
    "ch": 2,
    "topicId": 4,
    "q": "Thông tin định danh duy nhất để gửi thông điệp tới 1 tiến trình ứng dụng cụ thể trên Host gồm:",
    "opts": [
      "Chỉ cần Địa chỉ IP",
      "Chỉ cần Số hiệu cổng (Port Number)",
      "Địa chỉ IP (32-bit) + Số hiệu cổng (Port Number 16-bit)",
      "Địa chỉ MAC + Địa chỉ IP"
    ],
    "ans": 2,
    "exp": "Process Identifier = IP Address + Port Number."
  },
  {
    "id": 34,
    "ch": 2,
    "topicId": 4,
    "q": "Số hiệu cổng mặc định của dịch vụ Web (HTTP) và Mail (SMTP) lần lượt là:",
    "opts": [
      "80 và 25",
      "21 và 110",
      "443 và 53",
      "8080 và 22"
    ],
    "ans": 0,
    "exp": "HTTP chạy mặc định cổng 80, SMTP cổng 25."
  },
  {
    "id": 35,
    "ch": 2,
    "topicId": 4,
    "q": "Ứng dụng nào sau đây yêu cầu độ tin cậy dữ liệu 100% (Data Integrity)?",
    "opts": [
      "Truyền tập tin (FTP) và Web",
      "Thoại VoIP",
      "Hội thảo Video thời gian thực",
      "Game trực tuyến"
    ],
    "ans": 0,
    "exp": "Truyền file và Web đòi hỏi chính xác 100% dữ liệu, không chấp nhận mất mát bit."
  },
  {
    "id": 36,
    "ch": 2,
    "topicId": 4,
    "q": "Giao thức vận chuyển TCP cung cấp các đặc tính nào sau đây cho tầng Ứng dụng?",
    "opts": [
      "Truyền tin cậy, Hướng kết nối, Điều khiển luồng, Điều khiển tắc nghẽn",
      "Truyền không tin cậy, Phi kết nối",
      "Bảo đảm độ trễ tối thiểu",
      "Bảo đảm băng thông cố định"
    ],
    "ans": 0,
    "exp": "TCP là reliable, connection-oriented, flow control & congestion control."
  },
  {
    "id": 37,
    "ch": 2,
    "topicId": 4,
    "q": "Giao thức UDP được lựa chọn cho các ứng dụng Streaming Video vì:",
    "opts": [
      "UDP bắt tay 3 bước rất nhanh",
      "UDP không có điều khiển tắc nghẽn/bắt tay, truyền nhanh và chấp nhận mất mát một số dữ liệu nhỏ",
      "UDP đảm bảo tuyệt đối không mất gói",
      "UDP tự động mã hóa SSL"
    ],
    "ans": 1,
    "exp": "Streaming nhạy cảm về thời gian, chấp nhận mất mát nhỏ nên chọn UDP để không bị gián đoạn do retransmission."
  },
  {
    "id": 38,
    "ch": 2,
    "topicId": 5,
    "q": "Giao thức HTTP được gọi là giao thức không lưu trạng thái (Stateless) vì:",
    "opts": [
      "HTTP không dùng bộ nhớ RAM",
      "Server không lưu giữ thông tin về các yêu cầu trước đó của máy khách",
      "Client tự động xóa Cookie",
      "HTTP chạy trên UDP"
    ],
    "ans": 1,
    "exp": "HTTP Stateless vì Server xử lý từng request độc lập và không nhớ lịch sử request trước."
  },
  {
    "id": 39,
    "ch": 2,
    "topicId": 5,
    "q": "Trong HTTP/1.0 (Non-persistent HTTP), tổng thời gian để tải 1 trang Web chứa 1 file HTML và 10 hình ảnh (truyền nối tiếp) là bao nhiêu?",
    "opts": [
      "1 RTT + Time_transfer",
      "2 RTT + Time_transfer",
      "22 RTT + Tổng Time_transfer",
      "11 RTT + Time_transfer"
    ],
    "ans": 2,
    "exp": "Mỗi đối tượng tốn 2 RTT (1 RTT bắt tay TCP + 1 RTT lấy data). 11 đối tượng * 2 RTT = 22 RTT."
  },
  {
    "id": 40,
    "ch": 2,
    "topicId": 5,
    "q": "Giao thức HTTP/1.1 (Persistent HTTP) tiết kiệm thời gian hơn Non-persistent HTTP vì:",
    "opts": [
      "Không cần tải file HTML",
      "Nhiều đối tượng có thể được gửi qua cùng 1 kết nối TCP đã mở, chỉ tốn 1 RTT cho kết nối ban đầu",
      "Dùng UDP thay cho TCP",
      "Nén file nhỏ lại 100 lần"
    ],
    "ans": 1,
    "exp": "Persistent HTTP giữ kết nối TCP mở để tải nhiều object liên tiếp."
  },
  {
    "id": 41,
    "ch": 2,
    "topicId": 5,
    "q": "Thành phần nào sau đây KHÔNG thuộc cấu trúc 4 thành phần của Cookie?",
    "opts": [
      "Header Set-Cookie: trong HTTP Response",
      "Header Cookie: trong HTTP Request",
      "File Cookie trên máy người dùng",
      "Địa chỉ MAC của Card mạng"
    ],
    "ans": 3,
    "exp": "Cookie gồm: Set-Cookie header, Cookie header, Cookie file trên client và Backend Database."
  },
  {
    "id": 42,
    "ch": 2,
    "topicId": 5,
    "q": "Mục đích chính của Web Cache (Proxy Server) là gì?",
    "opts": [
      "Tăng mật khẩu bảo vệ trang web",
      "Thỏa mãn yêu cầu của máy khách mà không cần liên lạc với máy chủ gốc, giảm thời gian đáp ứng và lưu lượng đường truy cập",
      "Thay đổi giao diện trang web",
      "Tạo địa chỉ IP giả"
    ],
    "ans": 1,
    "exp": "Web Cache lưu bản sao đối tượng để trả lời nhanh cho client, giảm tải đường truyền và server gốc."
  },
  {
    "id": 43,
    "ch": 2,
    "topicId": 5,
    "q": "Lệnh Conditional GET sử dụng Header nào để kiểm tra đối tượng trong Cache có bị thay đổi ở Server gốc hay không?",
    "opts": [
      "If-Modified-Since: <date>",
      "Keep-Alive",
      "Content-Length",
      "User-Agent"
    ],
    "ans": 0,
    "exp": "Conditional GET dùng `If-Modified-Since: <date>`. Nếu chưa đổi, Server trả `304 Not Modified`."
  },
  {
    "id": 44,
    "ch": 2,
    "topicId": 5,
    "q": "Giao thức FTP mở mấy kết nối TCP riêng biệt và kết nối điều khiển chạy trên cổng nào?",
    "opts": [
      "1 kết nối TCP cổng 80",
      "2 kết nối TCP riêng biệt; kết nối điều khiển (Control) chạy trên cổng 21",
      "3 kết nối UDP cổng 20",
      "2 kết nối UDP cổng 25"
    ],
    "ans": 1,
    "exp": "FTP dùng 2 kết nối TCP: Cổng 21 cho Control (out-of-band), cổng 20 cho Data."
  },
  {
    "id": 45,
    "ch": 2,
    "topicId": 5,
    "q": "Giao thức SMTP dùng để làm gì trong hệ thống Thư điện tử?",
    "opts": [
      "Tải thư từ Mail Server về máy khách",
      "Gửi/truyền thư từ Client đến Mail Server hoặc giữa các Mail Server với nhau",
      "Đọc thư trên Web",
      "Xóa thư trên Server"
    ],
    "ans": 1,
    "exp": "SMTP là giao thức PUSH dùng để gửi/chuyển giao thư."
  },
  {
    "id": 46,
    "ch": 2,
    "topicId": 5,
    "q": "Khác biệt chính giữa giao thức truy cập thư POP3 và IMAP là gì?",
    "opts": [
      "POP3 chạy trên UDP, IMAP chạy trên TCP",
      "POP3 tải thư về máy và không lưu trạng thái phiên làm việc trên server; IMAP lưu giữ tất cả thư và trạng thái thư mục đồng bộ trên server",
      "IMAP chỉ gửi thư, POP3 chỉ nhận thư",
      "Không có khác biệt"
    ],
    "ans": 1,
    "exp": "IMAP quản lý thư mục và trạng thái đồng bộ trực tiếp trên Server; POP3 không lưu trạng thái."
  },
  {
    "id": 47,
    "ch": 2,
    "topicId": 5,
    "q": "Bản ghi DNS loại A (Resource Record Type=A) chứa thông tin ánh xạ nào?",
    "opts": [
      "Domain -> Authoritative DNS Server",
      "Alias Name -> Real Name",
      "Hostname -> Địa chỉ IP 32-bit",
      "Domain -> Mail Server"
    ],
    "ans": 2,
    "exp": "Type A ánh xạ Hostname sang IP 32-bit."
  },
  {
    "id": 48,
    "ch": 2,
    "topicId": 5,
    "q": "Bản ghi DNS loại CNAME chứa thông tin ánh xạ nào?",
    "opts": [
      "Hostname -> IP",
      "Bí danh (Alias Name) -> Tên thực (Canonical Name)",
      "Domain -> Mail Server",
      "Domain -> IP"
    ],
    "ans": 1,
    "exp": "Type CNAME ánh xạ tên bí danh sang tên thực."
  },
  {
    "id": 49,
    "ch": 2,
    "topicId": 5,
    "q": "Trong cơ chế phân giải tên miền DNS, sự khác biệt giữa Truy vấn tuần tự (Iterative) và Đệ quy (Recursive) là gì?",
    "opts": [
      "Truy vấn tuần tự đắt tiền hơn",
      "Trong Iterative, server được hỏi trả về IP của DNS server cấp tiếp theo để client tự đi hỏi tiếp; trong Recursive, server gánh trách nhiệm hỏi tiếp thay client",
      "Recursive không cần Root Server",
      "Iterative chạy trên TCP"
    ],
    "ans": 1,
    "exp": "Iterative: 'Tôi không biết, hãy hỏi server này'. Recursive: Server đi hỏi hộ đến khi ra kết quả."
  },
  {
    "id": 50,
    "ch": 2,
    "topicId": 6,
    "q": "Trong BitTorrent, các tập tin được chia nhỏ thành các khối có kích thước tiêu chuẩn là bao nhiêu?",
    "opts": [
      "64 KB",
      "256 KB",
      "1 MB",
      "4 MB"
    ],
    "ans": 1,
    "exp": "BitTorrent chia file thành các chunks 256 KB."
  },
  {
    "id": 51,
    "ch": 3,
    "topicId": 7,
    "q": "Tầng Vận chuyển (Transport Layer) cung cấp loại truyền thông nào?",
    "opts": [
      "Truyền thông vật lý giữa 2 dây dẫn",
      "Truyền thông logic giữa các tiến trình ứng dụng (Process-to-Process)",
      "Truyền thông giữa 2 router lân cận",
      "Truyền thông giữa 2 nhà mạng ISP"
    ],
    "ans": 1,
    "exp": "Transport layer cung cấp Logical communication giữa các tiến trình (Processes)."
  },
  {
    "id": 32,
    "ch": 3,
    "topicId": 7,
    "q": "Cơ chế Demultiplexing phi kết nối của UDP dựa vào thông tin nào để chuyển segment đến đúng Socket?",
    "opts": [
      "Bộ 4: IP nguồn, Port nguồn, IP đích, Port đích",
      "Bộ 2: IP đích và Port đích",
      "Chỉ dựa vào IP nguồn",
      "Dựa vào cờ SYN"
    ],
    "ans": 1,
    "exp": "UDP demux chỉ dựa vào IP đích và Port đích. Các gói chung Port đích sẽ vào chung 1 UDP socket."
  },
  {
    "id": 53,
    "ch": 3,
    "topicId": 7,
    "q": "Cơ chế Demultiplexing hướng kết nối của TCP dựa vào thông tin nào để chuyển segment đến đúng Socket?",
    "opts": [
      "Chỉ cần Port đích",
      "Bộ 4 yếu tố: IP nguồn, Port nguồn, IP đích, Port đích",
      "Chỉ cần IP nguồn",
      "Địa chỉ MAC"
    ],
    "ans": 1,
    "exp": "TCP demux bắt buộc dùng đủ bộ 4 (Source IP, Source Port, Dest IP, Dest Port)."
  },
  {
    "id": 54,
    "ch": 3,
    "topicId": 7,
    "q": "Kích thước Header tiêu chuẩn tối giản của giao thức UDP là bao nhiêu Bytes?",
    "opts": [
      "8 Bytes",
      "20 Bytes",
      "32 Bytes",
      "64 Bytes"
    ],
    "ans": 0,
    "exp": "UDP Header chỉ 8 Bytes (4 trường 16-bit: Source Port, Dest Port, Length, Checksum)."
  },
  {
    "id": 55,
    "ch": 3,
    "topicId": 7,
    "q": "Trong giao thức rdt 2.0, cơ chế nào được bổ sung để phát hiện BIT LỖI?",
    "opts": [
      "Timer đếm lùi",
      "Checksum và thông điệp phản hồi ACK/NAK",
      "Số thứ tự 32-bit",
      "Cửa sổ trượt"
    ],
    "ans": 1,
    "exp": "rdt 2.0 thêm Checksum để phát hiện lỗi bit và ACK/NAK để phản hồi."
  },
  {
    "id": 56,
    "ch": 3,
    "topicId": 7,
    "q": "Lỗ hổng nghiêm trọng của rdt 2.0 là gì và rdt 2.1 đã khắc phục bằng cách nào?",
    "opts": [
      "ACK/NAK bị hỏng; rdt 2.1 thêm Số thứ tự (Sequence Number 0, 1) vào gói tin",
      "Mất gói; rdt 2.1 thêm Timer",
      "Tắc nghẽn; rdt 2.1 thêm AIMD",
      "Không hỗ trợ UDP"
    ],
    "ans": 0,
    "exp": "rdt 2.0 bị lỗi nếu ACK/NAK hỏng. rdt 2.1 khắc phục bằng thêm Seq # (0, 1) để nhận diện gói trùng."
  },
  {
    "id": 57,
    "ch": 3,
    "topicId": 7,
    "q": "Giao thức rdt 2.2 cải tiến rdt 2.1 bằng cách loại bỏ thông điệp nào?",
    "opts": [
      "Loại bỏ ACK",
      "Loại bỏ NAK (chỉ dùng ACK kèm số thứ tự gói tin vừa nhận tốt)",
      "Loại bỏ Checksum",
      "Loại bỏ Sequence Number"
    ],
    "ans": 1,
    "exp": "rdt 2.2 là NAK-free protocol, chỉ dùng ACK(seq#)."
  },
  {
    "id": 58,
    "ch": 3,
    "topicId": 7,
    "q": "Giao thức rdt 3.0 giải quyết vấn đề MẤT GÓI (Packet Loss) bằng cơ chế nào?",
    "opts": [
      "Tăng kích thước gói tin",
      "Bộ đếm thời gian (Countdown Timer) tại bên gửi - Timeout sẽ truyền lại",
      "Dùng ghép kênh FDM",
      "Gửi 10 bản sao cùng lúc"
    ],
    "ans": 1,
    "exp": "rdt 3.0 dùng Countdown Timer để phát hiện mất gói khi timeout."
  },
  {
    "id": 59,
    "ch": 3,
    "topicId": 7,
    "q": "Hiệu suất đường truyền của giao thức rdt 3.0 Stop-and-Wait (U_sender) được tính bằng công thức:",
    "opts": [
      "U_sender = (L/R) / (RTT + L/R)",
      "U_sender = RTT / (L/R)",
      "U_sender = d / s",
      "U_sender = 100%"
    ],
    "ans": 0,
    "exp": "U_sender = (L/R) / (RTT + L/R). Stop-and-Wait cho hiệu suất cực kỳ thấp khi RTT lớn."
  },
  {
    "id": 60,
    "ch": 3,
    "topicId": 7,
    "q": "Giao thức Go-Back-N (GBN) xử lý các gói tin đến không đúng thứ tự (out-of-order) tại bên nhận như thế nào?",
    "opts": [
      "Lưu vào bộ đệm bên nhận",
      "Hủy bỏ (Discard) và gửi lại ACK tích lũy cho gói đúng thứ tự cao nhất",
      "Tự động sửa lỗi",
      "Gửi thông báo NAK"
    ],
    "ans": 1,
    "exp": "GBN bên nhận HỦY gói out-of-order và chỉ gửi lại ACK cho gói in-order cao nhất."
  },
  {
    "id": 61,
    "ch": 3,
    "topicId": 7,
    "q": "Giao thức Selective Repeat (SR) khác GBN ở điểm căn bản nào khi xử lý gói out-of-order?",
    "opts": [
      "SR hủy toàn bộ gói tin",
      "SR đệm (Buffer) các gói out-of-order và gửi ACK riêng biệt (Individual ACK) cho từng gói",
      "SR chỉ dùng 1 timer",
      "SR không sử dụng cửa sổ"
    ],
    "ans": 1,
    "exp": "SR có đệm bên nhận và gửi Individual ACK cho từng gói."
  },
  {
    "id": 62,
    "ch": 3,
    "topicId": 7,
    "q": "Điều kiện bắt buộc về kích thước cửa sổ N đối với giao thức Selective Repeat (SR) để tránh lỗi nhận nhầm gói trùng là:",
    "opts": [
      "N <= 1",
      "N <= 1/2 kích thước không gian số thứ tự (Sequence Number Space)",
      "N = 100",
      "N không giới hạn"
    ],
    "ans": 1,
    "exp": "Với SR, Window size N <= 1/2 Seq_Num_Space."
  },
  {
    "id": 63,
    "ch": 3,
    "topicId": 8,
    "q": "Header TCP có kích thước tối thiểu là bao nhiêu Bytes?",
    "opts": [
      "8 Bytes",
      "12 Bytes",
      "20 Bytes",
      "40 Bytes"
    ],
    "ans": 2,
    "exp": "TCP Header tối thiểu 20 Bytes."
  },
  {
    "id": 64,
    "ch": 3,
    "topicId": 8,
    "q": "Số thứ tự Sequence Number trong Header TCP được đếm theo đơn vị nào?",
    "opts": [
      "Số thứ tự gói tin (Packet count)",
      "Số thứ tự của Byte dữ liệu đầu tiên trong Segment",
      "Số hiệu cổng Port",
      "Số giây RTT"
    ],
    "ans": 1,
    "exp": "TCP Seq # được đếm theo Byte index trong luồng dữ liệu."
  },
  {
    "id": 65,
    "ch": 3,
    "topicId": 8,
    "q": "Cờ ACK trong Header TCP mang ý nghĩa gì đối với trường Acknowledgment Number?",
    "opts": [
      "Chỉ ra dữ liệu bị lỗi",
      "Chỉ ra trường Ack Number có giá trị hợp lệ và là số Byte tiếp theo mong chờ từ đối phương",
      "Yêu cầu đóng kết nối",
      "Bật tính năng mã hóa"
    ],
    "ans": 1,
    "exp": "Cờ ACK=1 báo hiệu trường AckNum chứa số byte tiếp theo mong đợi."
  },
  {
    "id": 66,
    "ch": 3,
    "topicId": 8,
    "q": "Trường Receive Window (rwnd) trong Header TCP dùng để làm gì?",
    "opts": [
      "Điều khiển tắc nghẽn mạng",
      "Thông báo dung lượng bộ đệm còn trống tại bên nhận để thực hiện Điều khiển luồng (Flow Control)",
      "Chỉ số gói tin bị mất",
      "Mã hóa mật khẩu"
    ],
    "ans": 1,
    "exp": "rwnd truyền thông tin bộ đệm nhận còn trống cho bên gửi để thực hiện Flow Control."
  },
  {
    "id": 67,
    "ch": 3,
    "topicId": 8,
    "q": "Công thức tính EstimatedRTT trung bình trượt mũ trong TCP là:",
    "opts": [
      "EstimatedRTT = (1-α)*EstimatedRTT + α*SampleRTT (với α = 0.125)",
      "EstimatedRTT = SampleRTT / 2",
      "EstimatedRTT = RTT * 4",
      "EstimatedRTT = DevRTT + 10"
    ],
    "ans": 0,
    "exp": "EstimatedRTT = 0.875*EstimatedRTT + 0.125*SampleRTT."
  },
  {
    "id": 68,
    "ch": 3,
    "topicId": 8,
    "q": "Công thức tính khoảng thời gian TimeoutInterval chuẩn của TCP là:",
    "opts": [
      "TimeoutInterval = SampleRTT",
      "TimeoutInterval = EstimatedRTT + 4 * DevRTT",
      "TimeoutInterval = DevRTT * 2",
      "TimeoutInterval = 2 * RTT"
    ],
    "ans": 1,
    "exp": "TimeoutInterval = EstimatedRTT + 4 * DevRTT."
  },
  {
    "id": 69,
    "ch": 3,
    "topicId": 8,
    "q": "Cơ chế TCP Fast Retransmit được kích hoạt khi bên gửi nhận được:",
    "opts": [
      "1 ACK duy nhất",
      "3 Duplicate ACKs (tổng 4 ACK trùng)",
      "Lệnh FIN",
      "Lệnh RST"
    ],
    "ans": 1,
    "exp": "Nhận 3 Dup ACKs kích hoạt Fast Retransmit ngay lập tức."
  },
  {
    "id": 70,
    "ch": 3,
    "topicId": 8,
    "q": "Trong quá trình đóng kết nối TCP (4-way teardown), cờ nào được sử dụng?",
    "opts": [
      "SYN",
      "FIN",
      "RST",
      "URG"
    ],
    "ans": 1,
    "exp": "Đóng kết nối dùng cờ FIN=1 từ mỗi bên."
  },
  {
    "id": 71,
    "ch": 3,
    "topicId": 9,
    "q": "Sự khác biệt chính giữa Điều khiển luồng (Flow Control) và Điều khiển tắc nghẽn (Congestion Control) trong TCP là:",
    "opts": [
      "Flow control kiểm soát bên gửi không làm tràn bộ đệm bên nhận (qua rwnd); Congestion control kiểm soát bên gửi không làm quá tải mạng lõi (qua cwnd)",
      "Flow control dành cho UDP, Congestion control dành cho TCP",
      "Không có khác biệt",
      "Flow control điều chỉnh IP, Congestion control điều chỉnh MAC"
    ],
    "ans": 0,
    "exp": "Flow Control bảo vệ bộ đệm bên nhận (rwnd); Congestion Control bảo vệ hạ tầng mạng lõi (cwnd)."
  },
  {
    "id": 72,
    "ch": 3,
    "topicId": 9,
    "q": "Thuật toán AIMD (Additive Increase Multiplicative Decrease) điều chỉnh cửa sổ cwnd như thế nào?",
    "opts": [
      "Tăng cwnd gấp đôi mỗi RTT, giảm cwnd đi 1",
      "Tăng cwnd thêm 1 MSS mỗi RTT trong Congestion Avoidance, giảm cwnd một nửa (cwnd/2) khi phát hiện mất gói",
      "Giảm cwnd theo cấp số cộng, tăng theo cấp số nhân",
      "Giữ cwnd cố định 64 KB"
    ],
    "ans": 1,
    "exp": "AIMD = Additive Increase (+1 MSS/RTT) & Multiplicative Decrease (giảm nửa khi mất gói)."
  },
  {
    "id": 73,
    "ch": 3,
    "topicId": 9,
    "q": "Trong giai đoạn Slow Start của TCP, cửa sổ cwnd tăng như thế nào?",
    "opts": [
      "Tăng tuyến tính +1 MSS mỗi RTT",
      "Tăng gấp đôi cwnd sau mỗi RTT (tăng theo CẤP SỐ NHÂN)",
      "Không tăng",
      "Tăng ngẫu nhiên"
    ],
    "ans": 1,
    "exp": "Slow Start tăng cwnd gấp đôi mỗi RTT (tăng 1 MSS cho từng ACK nhận được)."
  },
  {
    "id": 74,
    "ch": 3,
    "topicId": 9,
    "q": "TCP chuyển từ giai đoạn Slow Start sang Congestion Avoidance khi nào?",
    "opts": [
      "Khi cwnd đạt đến ngưỡng ssthresh",
      "Khi bị Timeout",
      "Khi nhận cờ FIN",
      "Ngay từ khi khởi tạo kết nối"
    ],
    "ans": 0,
    "exp": "Khi cwnd >= ssthresh, TCP chuyển sang Congestion Avoidance."
  },
  {
    "id": 75,
    "ch": 3,
    "topicId": 9,
    "q": "Khi xảy ra sự kiện MẤT GÓI do TIMEOUT, cả TCP Tahoe và TCP Reno đều xử lý như thế nào?",
    "opts": [
      "Giữ nguyên cwnd",
      "Thiết lập ssthresh = cwnd / 2, đặt cwnd = 1 MSS và trở lại Slow Start",
      "Tăng cwnd gấp đôi",
      "Chuyển sang Fast Recovery"
    ],
    "ans": 1,
    "exp": "Khi Timeout, cả Tahoe và Reno đều reset cwnd = 1 MSS và ssthresh = cwnd/2."
  },
  {
    "id": 76,
    "ch": 3,
    "topicId": 9,
    "q": "Khi xảy ra 3 DUPLICATE ACKs, TCP Reno khác TCP Tahoe ở điểm nào?",
    "opts": [
      "Reno giảm cwnd về 1 MSS, Tahoe vào Fast Recovery",
      "Tahoe giảm cwnd về 1 MSS; Reno đặt ssthresh = cwnd/2, cwnd = ssthresh + 3 MSS và vào Fast Recovery",
      "Reno hủy kết nối",
      "Tahoe không làm gì"
    ],
    "ans": 1,
    "exp": "Reno thông minh hơn Tahoe khi có 3 Dup ACKs: giữ cwnd ~ cwnd/2 và vào Fast Recovery."
  },
  {
    "id": 77,
    "ch": 3,
    "topicId": 9,
    "q": "Thông lượng trung bình của kết nối TCP (Average TCP Throughput) được ước lượng bằng công thức nào theo window size W khi mất gói?",
    "opts": [
      "Throughput = 0.75 * W / RTT",
      "Throughput = W * RTT",
      "Throughput = W / 2",
      "Throughput = 100 Mbps"
    ],
    "ans": 0,
    "exp": "Average TCP throughput ≈ (0.75 * W) / RTT bytes/sec."
  },
  {
    "id": 78,
    "ch": 3,
    "topicId": 9,
    "q": "Tính công bằng (Fairness) của TCP đảm bảo rằng nếu K kết nối TCP cùng chia sẻ liên kết nút cổ chai R, mỗi kết nối sẽ nhận được thông lượng trung bình là:",
    "opts": [
      "R",
      "R / K",
      "K / R",
      "0"
    ],
    "ans": 1,
    "exp": "TCP AIMD giúp chia sẻ băng thông công bằng R / K cho K kết nối."
  },
  {
    "id": 79,
    "ch": 3,
    "topicId": 9,
    "q": "Nếu một ứng dụng mở N kết nối TCP song song qua 1 link tốc độ R cùng với 1 ứng dụng mở 1 kết nối TCP, ứng dụng mở N kết nối sẽ chiếm bao nhiêu băng thông?",
    "opts": [
      "R / (N+1)",
      "N * R / (N+1)",
      "R / 2",
      "1 Mbps"
    ],
    "ans": 1,
    "exp": "Mỗi TCP session nhận R/(N+1), nên N session nhận N*R/(N+1) băng thông."
  },
  {
    "id": 80,
    "ch": 3,
    "topicId": 9,
    "q": "Các ứng dụng đa phương tiện dùng UDP thường né tránh cơ chế điều khiển tắc nghẽn của TCP vì:",
    "opts": [
      "UDP an toàn hơn",
      "Không muốn tốc độ truyền bị TCP giảm một nửa khi mạng bị tắc nghẽn",
      "UDP có độ trễ 0 ms",
      "UDP mã hóa tốt hơn"
    ],
    "ans": 1,
    "exp": "UDP không có congestion control nên không bị giảm tốc độ khi mạng nghẽn."
  },
  {
    "id": 81,
    "ch": 1,
    "topicId": 1,
    "q": "Mạng máy tính là",
    "opts": [
      "Các máy tính kết nối với nhau qua hệ thống cáp để trao đổi thông tin",
      "Các máy tính trao đổi thông tin với nhau theo tập giao thức mạng",
      "Các máy tính kết nối qua môi trường truyền tin và trao đổi thông tin theo một kiến trúc mạng xác định",
      "Các máy tính kết nối với nhau chia sẻ nguồn thông tin chung"
    ],
    "ans": 2,
    "exp": "Đáp án đúng theo ngân hàng câu hỏi VN Doc / PTIT: C. Kết nối qua môi trường truyền tin và trao đổi theo kiến trúc xác định."
  },
  {
    "id": 82,
    "ch": 1,
    "topicId": 1,
    "q": "Mạng máy tính là",
    "opts": [
      "Các thiết bị xử lý thông tin kết nối với nhau bằng đường truyền vật lý để trao đổi thông tin",
      "Các máy tính kết nối qua môi trường truyền tin để trao đổi thông tin với nhau",
      "Các máy tính trao đổi thông tin với nhau theo tập giao thức tương ứng",
      "Các thiết bị xử lý thông tin kết nối qua môi trường truyền tin để trao đổi thông tin với nhau"
    ],
    "ans": 1,
    "exp": "Đáp án đúng B."
  },
  {
    "id": 83,
    "ch": 1,
    "topicId": 1,
    "q": "Lợi ích của mạng máy tính mang lại là",
    "opts": [
      "Tăng khả năng phát hiện và chống thâm nhập mạng bất hợp pháp",
      "Rút ngắn thời gian trao đổi thông tin",
      "Giúp bảo vệ thông tin tại các nút mạng tốt hơn",
      "Tạo nhiều cơ hội thuận lợi cho công việc, kinh doanh,…"
    ],
    "ans": 3,
    "exp": "Đáp án đúng D."
  },
  {
    "id": 84,
    "ch": 1,
    "topicId": 2,
    "q": "Lợi ích của mạng máy tính mang lại là",
    "opts": [
      "Giúp cho các mạng không tương thích trao đổi thông tin với nhau",
      "Cho phép chọn lựa các loại máy tính của các hãng khác nhau để kết nối mạng",
      "Tăng tốc xử lý thông tin",
      "Chia sẻ thông lượng một cách hợp lý"
    ],
    "ans": 2,
    "exp": "Đáp án đúng C."
  },
  {
    "id": 85,
    "ch": 1,
    "topicId": 1,
    "q": "Lợi ích của mạng máy tính mang lại là",
    "opts": [
      "Người sử dụng có khả năng chọn lựa các loại thiết bị của nhiều hãng khác nhau",
      "Tăng hiệu quả khai thác, xử lý thông tin và độ tin cậy của hệ thống",
      "Dễ dàng trong công tác thiết kế, xây dựng và cài đặt các mạng máy tính",
      "Cho phép sử dụng các đường truyền một cách hợp lý"
    ],
    "ans": 1,
    "exp": "Đáp án đúng B."
  },
  {
    "id": 86,
    "ch": 1,
    "topicId": 1,
    "q": "Phát biểu nào sau đây là sai khi nói về lợi ích của mạng máy tính?",
    "opts": [
      "Giúp người sử dụng tiếp cận được nhiều hình thức giải trí hơn như xem phim, game online,…",
      "Cho phép chia sẻ tài nguyên giúp tiết kiệm kinh phí và quản lý tốt hơn",
      "Cho phép người sử dụng trao đổi thông tin một cách nhanh chóng và hiệu quả",
      "Tạo nhiều cơ hội thuận lợi cho việc học tập, hội thảo, kinh doanh,…"
    ],
    "ans": 0,
    "exp": "Đáp án A phát biểu chưa phản ánh lợi ích kỹ thuật cốt lõi của mạng máy tính trong giáo trình."
  },
  {
    "id": 87,
    "ch": 1,
    "topicId": 2,
    "q": "Phát biểu nào dưới đây là sai khi nói về các thành phần của mạng máy tính?",
    "opts": [
      "Các thiết bị đầu cuối như máy tính, máy in, điện thoại di động,… kết nối với nhau để tạo thành mạng",
      "Phương tiện truyền thông để chuyển đổi tín hiệu và truyền thông tin đi",
      "Các thiết bị kết nối mạng như vỉ mạng (NIC), bộ chuyển mạch (Switch), bộ định tuyến (Router),…",
      "Giao thức truyền thông qui định cách trao đổi thông tin giữa các thiết bị gửi và nhận trong mạng"
    ],
    "ans": 1,
    "exp": "Đáp án đúng B."
  },
  {
    "id": 88,
    "ch": 1,
    "topicId": 2,
    "q": "Các thông số đặc trưng của đường truyền là",
    "opts": [
      "Giải thông, độ nhiễu điện từ, độ suy hao, thông lượng",
      "Thông lượng, độ nhiễu điện từ, độ suy hao và lưu lượng",
      "Độ nhiễu điện từ, độ suy hao, thông lượng và từ trường",
      "Độ suy hao, độ nhiễu điện từ, thông lượng và kích thước"
    ],
    "ans": 0,
    "exp": "Đáp án A: Giải thông (Bandwidth), độ nhiễu, độ suy hao, thông lượng (Throughput)."
  },
  {
    "id": 89,
    "ch": 1,
    "topicId": 2,
    "q": "Các thông số đặc trưng của đường truyền là",
    "opts": [
      "Thông lượng, độ nhiễu điện từ, độ suy hao và lưu lượng",
      "Độ nhiễu điện từ, độ suy hao và giải thông",
      "Độ suy hao, thông lượng và từ trường",
      "Độ suy hao, độ nhiễu điện từ, thông lượng và kích thước"
    ],
    "ans": 1,
    "exp": "Đáp án B."
  },
  {
    "id": 90,
    "ch": 1,
    "topicId": 2,
    "q": "Các thông số đặc trưng của đường truyền là",
    "opts": [
      "Thông lượng, độ nhiễu điện từ, độ suy hao và lưu lượng",
      "Độ nhiễu điện từ, độ suy hao thông lượng và kích thước",
      "Độ suy hao, thông lượng và giải thông",
      "Độ suy hao, độ nhiễu điện từ và độ trễ truyền đẫn"
    ],
    "ans": 2,
    "exp": "Đáp án C."
  },
  {
    "id": 91,
    "ch": 1,
    "topicId": 2,
    "q": "Thông lượng (throughput) của đường truyền vật lý là",
    "opts": [
      "Độ suy yếu của tín hiệu trên đường truyền",
      "Tần số mà nó có thể đáp ứng được",
      "Tốc độ truyền dữ liệu trên đường truyền đó, tính bằng bps",
      "Tốc độ truyền dữ liệu trên đường truyền đó, tính bằng Mbps"
    ],
    "ans": 2,
    "exp": "Đáp án C: Tốc độ truyền dữ liệu thực tế tính bằng bps."
  },
  {
    "id": 92,
    "ch": 1,
    "topicId": 2,
    "q": "Thông lượng (throughput) của đường truyền vật lý là",
    "opts": [
      "Độ suy yếu của tín hiệu trên đường truyền, tính bằng m/s",
      "Tốc độ truyền dữ liệu trên đường truyền đó, tính bằng baud",
      "Phạm vi tần số mà nó có thể đáp ứng được",
      "Tốc độ truyền dữ liệu trên đường truyền đó, tính bằng Mbps"
    ],
    "ans": 1,
    "exp": "Đáp án B."
  },
  {
    "id": 93,
    "ch": 1,
    "topicId": 2,
    "q": "Chọn ví dụ tương ứng với thông lượng (throughput) của đường truyền vật lý",
    "opts": [
      "Tốc độ tối đa mà các xe có thể chạy được",
      "Số loại xe chạy được trên con đường",
      "Độ rộng của con đường",
      "Số lượng xe chạy trên con đường"
    ],
    "ans": 0,
    "exp": "Đáp án A."
  },
  {
    "id": 94,
    "ch": 1,
    "topicId": 1,
    "q": "Giải thông (bandwidth) của đường truyền vật lý là",
    "opts": [
      "Độ suy yếu của tín hiệu trên đường truyền",
      "Tốc độ truyền dữ liệu trên đường truyền đó, tính bằng Mbps",
      "Tốc độ truyền dữ liệu trên đường truyền đó, tính bằng bps",
      "Phạm vi tần số mà nó có thể đáp ứng được"
    ],
    "ans": 3,
    "exp": "Đáp án D: Phạm vi tần số mà đường truyền có thể đáp ứng."
  },
  {
    "id": 95,
    "ch": 1,
    "topicId": 1,
    "q": "Giải thông (bandwidth) của đường truyền vật lý là",
    "opts": [
      "Phạm vi tần số mà nó có thể đáp ứng được",
      "Tốc độ truyền dữ liệu trên đường truyền đó, tính bằng baud",
      "Tốc độ truyền dữ liệu trên đường truyền đó, tính bằng bps",
      "Tần số truyền tín hiệu trên đường truyền, tính bằng Hz"
    ],
    "ans": 0,
    "exp": "Đáp án A."
  },
  {
    "id": 96,
    "ch": 1,
    "topicId": 1,
    "q": "Chọn ví dụ tương ứng với giải thông (bandwidth) của đường truyền vật lý",
    "opts": [
      "Tốc độ tối đa mà các xe có thể chạy được",
      "Số loại xe chạy được trên con đường",
      "Độ rộng của con đường",
      "Số lượng xe chạy trên con đường"
    ],
    "ans": 2,
    "exp": "Đáp án C: Độ rộng của con đường tương ứng với giải thông (bề rộng dải tần)."
  },
  {
    "id": 97,
    "ch": 1,
    "topicId": 1,
    "q": "Chọn giao thức sử dụng cho mạng cáp quang học",
    "opts": [
      "CDDI",
      "SONET",
      "X25",
      "FDDI"
    ],
    "ans": 3,
    "exp": "Đáp án D: FDDI (Fiber Distributed Data Interface)."
  },
  {
    "id": 98,
    "ch": 1,
    "topicId": 1,
    "q": "Khẳng định nào không đúng đối với cáp quang học?",
    "opts": [
      "Không bị nhiễu",
      "Không bị nghe trộm",
      "Không bị suy hao tín hiệu",
      "Chỉ truyền được tín hiệu quang"
    ],
    "ans": 2,
    "exp": "Đáp án C: Cáp quang vẫn bị suy hao tín hiệu (dù rất thấp) khi truyền đi xa."
  },
  {
    "id": 99,
    "ch": 1,
    "topicId": 1,
    "q": "Bps và baud",
    "opts": [
      "Là hai đơn vị đo hoàn toàn khác nhau",
      "Là hai đơn vị đo có thể giống nhau, cũng có thể khác nhau",
      "Là hai đơn vị đo hoàn toàn giống nhau khi đo cùng một loại tín hiệu",
      "baud chỉ dùng để đo tín hiệu điện tử"
    ],
    "ans": 1,
    "exp": "Đáp án B."
  },
  {
    "id": 100,
    "ch": 1,
    "topicId": 1,
    "q": "Bps và baud",
    "opts": [
      "Là hai đơn vị đo hoàn toàn khác nhau",
      "Là hai đơn vị đo hoàn toàn giống nhau",
      "Là hai đơn vị đo giống nhau khi đo dữ liệu nhị phân",
      "baud không phải đơn vị đo thông tin"
    ],
    "ans": 2,
    "exp": "Đáp án C: Bps và baud bằng nhau khi mỗi tín hiệu truyền 1 bit nhị phân."
  },
  {
    "id": 101,
    "ch": 1,
    "topicId": 1,
    "q": "Khẳng định nào đúng khi nói về ưu điểm của truyền số so với truyền analog?",
    "opts": [
      "Tốc độ truyền cao hơn",
      "Giảm được lỗi do suy giảm và nhiễu trên đường truyền gây ra",
      "Thiết bị dùng chung cho cả thoại, số liệu, hình ảnh, âm nhạc",
      "Tất cả đều đúng"
    ],
    "ans": 3,
    "exp": "Đáp án D: Tất cả các ưu điểm trên đều đúng."
  },
  {
    "id": 102,
    "ch": 1,
    "topicId": 1,
    "q": "Khẳng định nào đúng khi nói về ưu điểm của truyền số so với truyền analog?",
    "opts": [
      "Độ tin cậy cao vì chỉ có 2 giá trị 0 và 1",
      "Giảm được lỗi do suy giảm và nhiễu trên đường truyền gây ra",
      "Giá rẻ hơn nhờ giá máy tính và vi mạch ngày càng rẻ",
      "Tất cả đều đúng"
    ],
    "ans": 3,
    "exp": "Đáp án D."
  },
  {
    "id": 103,
    "ch": 1,
    "topicId": 1,
    "q": "Khẳng định nào đúng khi nói về ưu điểm của truyền số so với truyền analog?",
    "opts": [
      "Được người dùng ưu chuộng hơn",
      "Tốc độ truyền nhanh hơn",
      "Thiết bị số nhiều và dễ mua hơn",
      "Truyền được trên nhiều loại đường truyền khác nhau"
    ],
    "ans": 1,
    "exp": "Đáp án B."
  },
  {
    "id": 104,
    "ch": 1,
    "topicId": 1,
    "q": "Khẳng định nào đúng khi nói về ưu điểm của truyền số so với truyền analog?",
    "opts": [
      "Phần mềm xử lý đơn giản hơn",
      "Sử dụng nhiều tần số hơn",
      "Thiết bị truyền số dùng chung cho cả điện thoại, số liệu, âm nhạc, v.v…",
      "Dễ chọn lựa thiết bị hơn"
    ],
    "ans": 2,
    "exp": "Đáp án C."
  },
  {
    "id": 105,
    "ch": 1,
    "topicId": 2,
    "q": "Cấu hình mạng (Topology) được hiểu là",
    "opts": [
      "Các qui ước truyền thông trên mạng",
      "Sơ đồ kết nối vật lý các máy tính trong mạng",
      "Cách kết nối các thiết bị vật lý trong mạng",
      "Các phần mềm điều khiển mạng"
    ],
    "ans": 1,
    "exp": "Đáp án B: Topology là sơ đồ hình học kết nối các máy tính trong mạng."
  },
  {
    "id": 106,
    "ch": 1,
    "topicId": 2,
    "q": "Khẳng định nào sau đây nói về cấu trúc vật lý của mạng?",
    "opts": [
      "Giao thức mạng (Protocol)",
      "Cấu hình mạng (Topology)",
      "Phương tiện truyền",
      "Các dịch vụ mạng"
    ],
    "ans": 1,
    "exp": "Đáp án B: Topology phản ánh cấu trúc vật lý."
  },
  {
    "id": 107,
    "ch": 1,
    "topicId": 1,
    "q": "Mạng thông tin nào sau đây sử dụng cấu hình theo kiểu điểm-điểm (Point-to-Point)?",
    "opts": [
      "Mạng Vina Phone",
      "Mạng Mobi Phone",
      "Mạng điện thoại nội hạt",
      "Mạng truyền hình"
    ],
    "ans": 2,
    "exp": "Đáp án C: Mạng điện thoại nội hạt nối trực tiếp từ tổng đài đến hộ gia đình."
  },
  {
    "id": 108,
    "ch": 1,
    "topicId": 2,
    "q": "Mạng kiểu điểm-điểm gọi là mạng",
    "opts": [
      "Lưu và gửi tiếp (Store - and - Forward)",
      "Chuyển mạch gói",
      "Chuyển tiếp khung",
      "Chuyển mạch kênh"
    ],
    "ans": 0,
    "exp": "Đáp án A: Mạng điểm-điểm còn gọi là mạng lưu và chuyển tiếp (Store-and-Forward)."
  },
  {
    "id": 109,
    "ch": 1,
    "topicId": 1,
    "q": "Cấu hình nào có đặc điểm 'các nút sử dụng chung một đường truyền vật lý'?",
    "opts": [
      "Tree",
      "Loop",
      "Ring",
      "Complete"
    ],
    "ans": 2,
    "exp": "Đáp án C: Ring / Bus."
  },
  {
    "id": 110,
    "ch": 1,
    "topicId": 1,
    "q": "Cấu hình nào có đặc điểm 'các nút sử dụng chung một đường truyền vật lý'?",
    "opts": [
      "Tree",
      "Loop",
      "Star",
      "Bus"
    ],
    "ans": 3,
    "exp": "Đáp án D: Bus Topology các nút chung một tuyến cáp duy nhất."
  },
  {
    "id": 111,
    "ch": 1,
    "topicId": 1,
    "q": "Giao thức mạng (protocol) được hiểu là",
    "opts": [
      "Các qui ước truyền thông trên mạng",
      "Sơ đồ kết nối vật lý các máy tính trong mạng",
      "Các phần mềm điều khiển mạng",
      "Cách kết nối các thiết bị vật lý trong mạng"
    ],
    "ans": 0,
    "exp": "Đáp án A: Các qui ước truyền thông qui định việc trao đổi dữ liệu."
  },
  {
    "id": 112,
    "ch": 1,
    "topicId": 1,
    "q": "Để các máy tính trong mạng giao tiếp được với nhau, cần có điều kiện gì?",
    "opts": [
      "Các máy tính chỉ cần tuân thủ một qui tắc truyền thông nào đó",
      "Các máy tính chỉ cần kết nối vật lý với nhau",
      "Các máy tính phải kết nối vật lý với nhau và tuân thủ các qui tắc truyền thông thống nhất",
      "Các máy tính phải kết nối vật lý với nhau và tuân thủ các qui tắc truyền thông bất kỳ"
    ],
    "ans": 2,
    "exp": "Đáp án C: Phải kết nối vật lý VÀ tuân thủ qui tắc truyền thông thống nhất (giao thức)."
  },
  {
    "id": 113,
    "ch": 1,
    "topicId": 1,
    "q": "Dựa trên khoảng cách địa lý ta có các mạng sau:",
    "opts": [
      "MAN, LAN, VAN, GAN",
      "LAN, WAN, MAN, SAN/PAN",
      "WAN, LAN, VAN, GAN",
      "Tất cả đều sai"
    ],
    "ans": 1,
    "exp": "Đáp án B: Phân loại theo phạm vi địa lý: LAN, MAN, WAN."
  },
  {
    "id": 114,
    "ch": 1,
    "topicId": 1,
    "q": "Trong các ví dụ nêu ra sau đây, hãy xác định ví dụ mô tả đúng về mạng WAN:",
    "opts": [
      "Các máy tính của các nhà ga lớn trong nước như ga Hà Nội, ga Đà Nẵng, ga Sài Gòn,… kết nối với nhau để dùng chung dữ liệu",
      "Các máy tính của các nước trên thế giới kết nối vào phòng CHAT để tán gẫu với nhau",
      "Các máy tính ở các phòng của một trường học kết nối với nhau để dùng chung dữ liệu, máy in,…",
      "Tất cả đều sai"
    ],
    "ans": 0,
    "exp": "Đáp án A: Mạng nối các chi nhánh toàn quốc thuộc diện diện rộng WAN."
  },
  {
    "id": 115,
    "ch": 1,
    "topicId": 1,
    "q": "Trong các ví dụ nêu ra sau đây, hãy xác định ví dụ mô tả đúng về mạng LAN:",
    "opts": [
      "Các máy tính của các nhà ga lớn trong nước kết nối với nhau",
      "Hai máy tính và một máy in kết nối vào một Printer Switch Box trong tiệm photocopy",
      "Hai máy tính của hai nhà cạnh nhau kết nối Internet để dùng chung dữ liệu",
      "Tất cả đều sai"
    ],
    "ans": 1,
    "exp": "Đáp án B: Mạng quy mô nhỏ cục bộ."
  },
  {
    "id": 116,
    "ch": 1,
    "topicId": 2,
    "q": "Dựa trên kỹ thuật chuyển mạch ta có các mạng sau:",
    "opts": [
      "Chuyển mạch kênh, chuyển mạch thông báo, chuyển mạch tập trung",
      "Chuyển mạch kênh, chuyển mạch gói, chuyển mạch thông báo",
      "Chuyển mạch phân tán, chuyển mạch kênh, chuyển mạch tập trung",
      "Chuyển mạch tập trung, chuyển mạch gói, chuyển mạch thông báo"
    ],
    "ans": 1,
    "exp": "Đáp án B: 3 kỹ thuật chuyển mạch chính: Kênh (Circuit), Gói (Packet), Thông báo (Message)."
  },
  {
    "id": 117,
    "ch": 1,
    "topicId": 2,
    "q": "Đối với mạng chuyển mạch kênh thì",
    "opts": [
      "Hiệu suất sử dụng đường truyền cao",
      "Thời gian truyền qua mạng nhanh",
      "Tiêu tốn thời gian cho việc thiết lập kênh cố định giữa hai thực thể",
      "Các nút mạng có thể xử lý toàn bộ gói tin trong bộ nhớ"
    ],
    "ans": 2,
    "exp": "Đáp án C: Phải tốn thời gian thiết lập kênh truyền cố định trước khi bắt đầu gửi dữ liệu."
  },
  {
    "id": 118,
    "ch": 1,
    "topicId": 2,
    "q": "Đối với mạng chuyển mạch thông báo thì",
    "opts": [
      "Hiệu suất cao hơn mạng chuyển mạch gói",
      "Mỗi nút mạng có thể lưu trữ thông báo cho tới khi kênh truyền rỗi mới chuyển thông báo đi",
      "Kích thước của thông báo cố định 512 bytes",
      "Thông báo có thể gửi đi bằng nhiều đường khác nhau"
    ],
    "ans": 1,
    "exp": "Đáp án B: Áp dụng cơ chế lưu và gửi tiếp (Store-and-Forward) cho cả thông báo."
  },
  {
    "id": 119,
    "ch": 1,
    "topicId": 2,
    "q": "Đối với mạng chuyển mạch gói thì",
    "opts": [
      "Hiệu suất cao hơn mạng chuyển mạch thông báo",
      "Có nhiều ưu điểm, không có nhược điểm đáng kể",
      "Các gói có kích thước thay đổi nhưng phải là luỹ thừa của cơ số 2",
      "Cần bộ nhớ đệm để lưu trữ tạm thời các gói"
    ],
    "ans": 0,
    "exp": "Đáp án A: Hiệu suất linh hoạt cao hơn nhờ chia nhỏ gói tin."
  },
  {
    "id": 120,
    "ch": 1,
    "topicId": 2,
    "q": "Mạng dịch vụ tích hợp số (ISDN) là sự kết hợp của các kỹ thuật:",
    "opts": [
      "Chuyển mạch kênh, chuyển mạch gói và chuyển mạch thông báo",
      "Chuyển mạch kênh và chuyển mạch thông báo",
      "Chuyển mạch gói và chuyển mạch thông báo",
      "Chuyển mạch kênh và chuyển mạch gói"
    ],
    "ans": 3,
    "exp": "Đáp án D: Kết hợp chuyển mạch kênh và chuyển mạch gói."
  },
  {
    "id": 121,
    "ch": 1,
    "topicId": 1,
    "q": "Đối với mạng tập trung thì",
    "opts": [
      "Các chương trình điều khiển mạng nằm trên các máy chủ và máy khách",
      "Các chương trình điều khiển mạng nằm trên các máy chủ",
      "Các chương trình điều khiển mạng nằm trên máy khách",
      "Các chương trình điều khiển mạng nằm trên một máy chủ"
    ],
    "ans": 1,
    "exp": "Đáp án B: Chương trình quản lý điều khiển tập trung tại máy chủ Server."
  },
  {
    "id": 122,
    "ch": 1,
    "topicId": 3,
    "q": "Đối với mạng phân tán thì câu nào sau đây là sai?",
    "opts": [
      "Các máy có thể cung cấp tài nguyên của mình cho các máy khác",
      "Chế độ bảo mật kém",
      "Các máy có thể sử dụng tài nguyên của các máy khác trong mạng",
      "Xây dựng và bảo trì phức tạp"
    ],
    "ans": 0,
    "exp": "Đáp án A."
  },
  {
    "id": 123,
    "ch": 1,
    "topicId": 3,
    "q": "Chọn đáp án KHÔNG PHẢI đặc trưng của mạng khách/chủ (Client/Server):",
    "opts": [
      "Các tài nguyên được quản lý và chia sẻ một cách có tổ chức",
      "Phần lớn tài nguyên quan trọng tập trung tại các Server",
      "Tính an toàn và độ bảo mật cao",
      "Thích hợp với qui mô nhỏ"
    ],
    "ans": 3,
    "exp": "Đáp án D: Mạng Client/Server thích hợp với quy mô lớn, không chỉ quy mô nhỏ."
  },
  {
    "id": 124,
    "ch": 1,
    "topicId": 1,
    "q": "Chọn đáp án KHÔNG PHẢI đặc trưng của mạng ngang hàng (Peer-to-Peer):",
    "opts": [
      "Chi phí lắp đặt thấp và dễ sử dụng",
      "Các máy có vai trò như một Server",
      "Cần có Server chuyên dụng và người quản trị chuyên nghiệp để quản lý tài nguyên",
      "Các máy có vai trò như nhau và người sử dụng tự quản lý tài nguyên của mình"
    ],
    "ans": 2,
    "exp": "Đáp án C: Mạng P2P KHÔNG cần Server chuyên dụng hay quản trị viên tập trung."
  },
  {
    "id": 125,
    "ch": 1,
    "topicId": 1,
    "q": "Mạng nào có các máy vừa làm máy khách vừa làm máy phục vụ?",
    "opts": [
      "Peer to Peer",
      "Client / Server",
      "LAN",
      "Ethernet"
    ],
    "ans": 0,
    "exp": "Đáp án A: Mạng ngang hàng P2P (Peer-to-Peer)."
  },
  {
    "id": 126,
    "ch": 1,
    "topicId": 1,
    "q": "Xác định phát biểu đúng về máy Chủ (Server):",
    "opts": [
      "Quản lý và cung cấp tài nguyên cho các tài khoản trong máy",
      "Sử dụng tài nguyên do máy khác cung cấp",
      "Yêu cầu máy khác cung cấp tài nguyên cho mình",
      "Quản lý và điều khiển các tài khoản trong mạng"
    ],
    "ans": 3,
    "exp": "Đáp án D: Quản lý và điều khiển tài nguyên/tài khoản chung trong mạng."
  },
  {
    "id": 127,
    "ch": 1,
    "topicId": 1,
    "q": "Xác định phát biểu đúng về máy Khách (Client):",
    "opts": [
      "Quản lý và cung cấp tài nguyên cho các máy trong mạng",
      "Sử dụng các dịch vụ thông tin trong mạng",
      "Đáp ứng các yêu cầu của các máy khác trong mạng",
      "Phải có cấu hình mạnh, lưu trữ được nhiều thông tin"
    ],
    "ans": 1,
    "exp": "Đáp án B: Máy khách gửi yêu cầu và sử dụng các dịch vụ do máy chủ cung cấp."
  },
  {
    "id": 128,
    "ch": 1,
    "topicId": 3,
    "q": "Chọn phát biểu KHÔNG ĐÚNG với ý nghĩa của kiến trúc phân tầng:",
    "opts": [
      "Dễ dàng trong công tác thiết kế, xây dựng và cài đặt các mạng máy tính",
      "Số lượng, tên gọi và chức năng của mỗi tầng sẽ được người thiết kế mạng máy tính cụ thể quy định",
      "Mỗi tầng được xây dựng trên cơ sở tầng kế liền trước đó. Như vậy, tầng dưới được hiểu là tầng cung cấp các dịch vụ cho tầng trên",
      "Giao thức, vấn đề kỹ thuật và công nghệ cho mỗi tầng được triển khai theo trình tự từ dưới lên"
    ],
    "ans": 3,
    "exp": "Đáp án D."
  },
  {
    "id": 129,
    "ch": 1,
    "topicId": 3,
    "q": "Chọn phát biểu KHÔNG ĐÚNG với mô hình OSI:",
    "opts": [
      "Giải quyết được vấn đề không tương thích giữa các mạng",
      "Tất cả các mạng ngày nay đều áp dụng mô hình này",
      "Là khung chuẩn về kiến trúc mạng làm căn cứ cho các nhà nghiên cứu và thiết kế mạng",
      "Giúp người sử dụng có thể chọn lựa các loại thiết bị của nhiều hãng khác nhau"
    ],
    "ans": 1,
    "exp": "Đáp án B: Thực tế hầu hết các mạng ngày nay dùng mô hình TCP/IP, OSI là mô hình tham chiếu lý thuyết."
  },
  {
    "id": 130,
    "ch": 1,
    "topicId": 3,
    "q": "Chọn phát biểu KHÔNG ĐÚNG với các nguyên tắc chủ yếu để xây dựng mô hình OSI:",
    "opts": [
      "Mô tả dịch vụ tầng càng đơn giản càng tốt",
      "Giới hạn số lượng tầng ở mức cần thiết",
      "Khi hiệu chỉnh chức năng hay giao thức của một tầng, các tầng khác không bị ảnh hưởng theo",
      "Có thể gộp các tầng con thành một tầng nhưng không được huỷ bỏ các tầng con"
    ],
    "ans": 3,
    "exp": "Đáp án D."
  },
  {
    "id": 131,
    "ch": 1,
    "topicId": 3,
    "q": "Trong mô hình OSI, tầng 1 là tầng:",
    "opts": [
      "Physical (Vật lý)",
      "Session (Phiên)",
      "Data Link (Liên kết dữ liệu)",
      "Network Access"
    ],
    "ans": 0,
    "exp": "Đáp án A: Tầng 1 là Physical."
  },
  {
    "id": 132,
    "ch": 1,
    "topicId": 3,
    "q": "Trong mô hình OSI, tầng 2 là tầng:",
    "opts": [
      "Transport",
      "Session",
      "Data Link",
      "Network"
    ],
    "ans": 2,
    "exp": "Đáp án C: Tầng 2 là Data Link."
  },
  {
    "id": 133,
    "ch": 1,
    "topicId": 3,
    "q": "Trong mô hình OSI, tầng 3 là tầng:",
    "opts": [
      "Transport",
      "Internet",
      "Session",
      "Network"
    ],
    "ans": 3,
    "exp": "Đáp án D: Tầng 3 là Network."
  },
  {
    "id": 134,
    "ch": 1,
    "topicId": 3,
    "q": "Trong mô hình OSI, tầng 4 là tầng:",
    "opts": [
      "Transport",
      "Session",
      "Data Link",
      "Network"
    ],
    "ans": 0,
    "exp": "Đáp án A: Tầng 4 là Transport."
  },
  {
    "id": 135,
    "ch": 1,
    "topicId": 3,
    "q": "Trong mô hình OSI, tầng 5 là tầng:",
    "opts": [
      "Transport",
      "Session",
      "Presentation",
      "Network"
    ],
    "ans": 1,
    "exp": "Đáp án B: Tầng 5 là Session."
  },
  {
    "id": 136,
    "ch": 1,
    "topicId": 3,
    "q": "Trong mô hình OSI, tầng 6 là tầng:",
    "opts": [
      "Transport",
      "Session",
      "Presentation",
      "Network"
    ],
    "ans": 2,
    "exp": "Đáp án C: Tầng 6 là Presentation."
  },
  {
    "id": 137,
    "ch": 1,
    "topicId": 3,
    "q": "Trong mô hình OSI, tầng 7 là tầng:",
    "opts": [
      "Transport",
      "Application",
      "Presentation",
      "Physical"
    ],
    "ans": 1,
    "exp": "Đáp án B: Tầng 7 là Application."
  },
  {
    "id": 138,
    "ch": 1,
    "topicId": 3,
    "q": "Chức năng của tầng Vật lý trong mô hình OSI là:",
    "opts": [
      "Giải quyết các vấn đề liên quan đến đường truyền như định tuyến, kiểm soát luồng",
      "Truyền các dòng bit có cấu trúc qua hệ thống đường truyền",
      "Nối, duy trì, ngắt các liên kết vật lý",
      "Tất cả đều đúng"
    ],
    "ans": 2,
    "exp": "Đáp án C: Nối, duy trì và ngắt các liên kết vật lý."
  },
  {
    "id": 139,
    "ch": 1,
    "topicId": 3,
    "q": "Chọn phát biểu KHÔNG ĐÚNG với tầng Vật lý trong mô hình OSI:",
    "opts": [
      "Dữ liệu không có phần Header chứa thông tin điều khiển",
      "Đóng gói và truyền các Frame nhị phân qua đường truyền",
      "Không có đơn vị dữ liệu cho tầng vật lý",
      "Cung cấp các phương tiện điện, cơ, chức năng, thủ tục để giải quyết các vấn đề liên quan"
    ],
    "ans": 1,
    "exp": "Đáp án B: Đóng gói Frame là chức năng của tầng Data Link (tầng 2), không phải tầng Physical."
  },
  {
    "id": 140,
    "ch": 1,
    "topicId": 3,
    "q": "Cung cấp các phương tiện để truyền thông tin qua liên kết vật lý đảm bảo tin cậy là chức năng của tầng nào?",
    "opts": [
      "Network",
      "Transport",
      "Session",
      "Data Link"
    ],
    "ans": 3,
    "exp": "Đáp án D: Tầng Data Link (Liên kết dữ liệu)."
  },
  {
    "id": 141,
    "ch": 1,
    "topicId": 3,
    "q": "Tầng nào trong mô hình OSI chuyển luồng bit thành Frame?",
    "opts": [
      "Session",
      "Presentation",
      "Data Link",
      "Network"
    ],
    "ans": 2,
    "exp": "Đáp án C: Tầng Data Link."
  },
  {
    "id": 142,
    "ch": 1,
    "topicId": 3,
    "q": "Tầng nào trong mô hình OSI chuyển packet thành Frame?",
    "opts": [
      "Tầng phiên",
      "Tầng mạng",
      "Tầng giao vận",
      "Tầng liên kết dữ liệu"
    ],
    "ans": 3,
    "exp": "Đáp án D: Tầng Data Link đóng gói packet/datagram từ tầng Mạng thành Frame."
  },
  {
    "id": 143,
    "ch": 1,
    "topicId": 3,
    "q": "Chọn đường (Routing), kiểm soát luồng dữ liệu là chức năng chính của tầng nào?",
    "opts": [
      "Transport",
      "Session",
      "Data Link",
      "Network"
    ],
    "ans": 3,
    "exp": "Đáp án D: Tầng Network (Mạng)."
  },
  {
    "id": 144,
    "ch": 1,
    "topicId": 3,
    "q": "Chuyển tiếp thông tin và cắt/hợp dữ liệu (Fragmentation & Reassembly) là chức năng của tầng nào?",
    "opts": [
      "Transport",
      "Network",
      "Data Link",
      "Physical"
    ],
    "ans": 1,
    "exp": "Đáp án B: Tầng Network."
  },
  {
    "id": 145,
    "ch": 1,
    "topicId": 3,
    "q": "Chức năng cốt lõi của tầng Giao vận (Transport) là:",
    "opts": [
      "Đảm bảo các yêu cầu truyền dữ liệu qua các phương tiện vật lý",
      "Mã hoá dữ liệu để bảo mật thông tin trên đường truyền",
      "Thực hiện việc truyền dữ liệu từ nút đến nút (end-to-end tin cậy)",
      "Nén dữ liệu để việc truyền qua mạng nhanh hơn"
    ],
    "ans": 2,
    "exp": "Đáp án C: Truyền dữ liệu end-to-end giữa 2 tiến trình ứng dụng."
  },
  {
    "id": 146,
    "ch": 1,
    "topicId": 3,
    "q": "Cung cấp các dịch vụ truyền dữ liệu 'trong suốt' đối với các tầng trên là chức năng của tầng nào?",
    "opts": [
      "Transport",
      "Physical",
      "Session",
      "Presentation"
    ],
    "ans": 0,
    "exp": "Đáp án A: Tầng Transport."
  },
  {
    "id": 147,
    "ch": 1,
    "topicId": 3,
    "q": "Tầng nào dưới đây thiết lập, duy trì, huỷ bỏ 'các giao dịch' (Session) giữa các thực thể đầu cuối?",
    "opts": [
      "Tầng phiên (Session)",
      "Tầng liên kết dữ liệu",
      "Tầng mạng",
      "Tầng vật lý"
    ],
    "ans": 0,
    "exp": "Đáp án A: Tầng Session (Tầng phiên)."
  },
  {
    "id": 148,
    "ch": 1,
    "topicId": 3,
    "q": "Điều khiển các cuộc liên lạc (Dialog Control) là chức năng của tầng nào?",
    "opts": [
      "Presentation",
      "Transport",
      "Session",
      "Data Link"
    ],
    "ans": 2,
    "exp": "Đáp án C: Tầng Session."
  },
  {
    "id": 149,
    "ch": 1,
    "topicId": 3,
    "q": "Tầng nào trong mô hình OSI thực hiện nén và mã hoá dữ liệu?",
    "opts": [
      "Network",
      "Presentation",
      "Session",
      "Transport"
    ],
    "ans": 1,
    "exp": "Đáp án B: Tầng Presentation (Trình diễn) thực hiện nén, giải nén, mã hóa và định dạng dữ liệu."
  },
  {
    "id": 150,
    "ch": 1,
    "topicId": 3,
    "q": "Chức năng của tầng Trình diễn (Presentation) là chuyển đổi:",
    "opts": [
      "Dữ liệu tầng ứng dụng thành các Frame",
      "Khuôn dạng của gói tin phù hợp với các tầng kế trên và dưới",
      "Các phiên truyền thông giữa các thực thể",
      "Dữ liệu người sử dụng thành dữ liệu chuẩn chung của mạng"
    ],
    "ans": 3,
    "exp": "Đáp án D: Chuyển đổi cú pháp/định dạng dữ liệu người dùng thành khuôn dạng chung."
  },
  {
    "id": 151,
    "ch": 1,
    "topicId": 3,
    "q": "Tầng nào xác định giao diện giữa người sử dụng và môi trường OSI?",
    "opts": [
      "Physical",
      "Data Link",
      "Presentation",
      "Application"
    ],
    "ans": 3,
    "exp": "Đáp án D: Tầng Application (Ứng dụng)."
  },
  {
    "id": 152,
    "ch": 1,
    "topicId": 3,
    "q": "Tầng nào cung cấp các dịch vụ thông tin phân tán?",
    "opts": [
      "Tầng giao vận",
      "Tầng ứng dụng",
      "Tầng trình bày",
      "Tầng phiên"
    ],
    "ans": 1,
    "exp": "Đáp án B: Tầng Application."
  },
  {
    "id": 153,
    "ch": 1,
    "topicId": 3,
    "q": "Mô hình OSI theo quan điểm hệ thống gửi/nhận:",
    "opts": [
      "Dữ liệu khi xuống đến tầng N-1 sẽ được thêm phần thông tin điều khiển của tầng N-1",
      "Ở hệ thống nhận, khi qua mỗi tầng, phần thông tin điều khiển tương ứng sẽ được phân tích và cắt bỏ trước khi chuyển lên tầng trên",
      "Không có sự thêm vào và bớt đi thông tin",
      "Ở hệ thống gửi, dữ liệu khi đi qua các tầng sẽ được chia thành các gói nhỏ hơn"
    ],
    "ans": 1,
    "exp": "Đáp án B: Quá trình giải đóng gói (Decapsulation) tại bên nhận."
  },
  {
    "id": 154,
    "ch": 1,
    "topicId": 3,
    "q": "Mô hình OSI theo quan điểm hệ thống:",
    "opts": [
      "Toàn bộ dữ liệu tầng trên sẽ trở thành một đơn vị dữ liệu của tầng dưới",
      "Phần thông tin điều khiển của mỗi tầng sẽ được thêm vào cuối đơn vị dữ liệu",
      "Sau khi xử lý, tầng dưới sẽ chuyển toàn bộ dữ liệu lên tầng trên",
      "Sau khi xử lý, tầng trên sẽ chuyển đơn vị dữ liệu của mình xuống tầng dưới"
    ],
    "ans": 0,
    "exp": "Đáp án A: Quá trình Encapsulation coi PDU tầng trên là Payload của tầng dưới."
  },
  {
    "id": 155,
    "ch": 1,
    "topicId": 3,
    "q": "Khi dữ liệu được chuyển từ tầng trên xuống tầng dưới kề nó, gói dữ liệu được bổ sung thêm thông tin điều khiển trong phần:",
    "opts": [
      "Địa chỉ",
      "Option",
      "Vùng kiểm soát lỗi",
      "Header"
    ],
    "ans": 3,
    "exp": "Đáp án D: Bổ sung thêm thông tin trong phần Header."
  },
  {
    "id": 156,
    "ch": 1,
    "topicId": 1,
    "q": "Hàm Confirm được sử dụng để xác nhận hoàn tất một chức năng đã được gọi từ trước bởi hàm nguyên thủy:",
    "opts": [
      "Connect",
      "Indication",
      "Response",
      "Request"
    ],
    "ans": 3,
    "exp": "Đáp án D: Confirm xác nhận cho yêu cầu Request ban đầu."
  },
  {
    "id": 157,
    "ch": 1,
    "topicId": 1,
    "q": "Hàm Response được sử dụng để trả lời một chức năng đã được gọi từ trước bởi hàm nguyên thủy:",
    "opts": [
      "Connect",
      "Indication",
      "Confirm",
      "Request"
    ],
    "ans": 1,
    "exp": "Đáp án B: Response trả lời cho chỉ thị Indication từ tầng dưới."
  },
  {
    "id": 158,
    "ch": 1,
    "topicId": 1,
    "q": "Chọn phát biểu đúng với phương thức hoạt động có liên kết (Connection-Oriented):",
    "opts": [
      "Độ tin cậy cao nhưng cài đặt khá phức tạp",
      "Độ tin cậy cao và cài đặt đơn giản",
      "Nhờ độ tin cậy cao nên quá trình truyền rất đơn giản",
      "Không cần thiết lập liên kết vật lý"
    ],
    "ans": 0,
    "exp": "Đáp án A: Có liên kết đảm bảo độ tin cậy cao nhưng cần thủ tục bắt tay & duy trì trạng thái phức tạp."
  },
  {
    "id": 159,
    "ch": 1,
    "topicId": 1,
    "q": "Chọn phát biểu đúng với phương thức hoạt động không có liên kết (Connectionless):",
    "opts": [
      "Độ tin cậy thấp nhưng cài đặt khá phức tạp",
      "Các gói dữ liệu được truyền độc lập theo nhiều đường khác nhau",
      "Quá trình truyền được quản lý và kiểm soát chặt chẽ",
      "Quá trình tiếp nhận các gói ở hệ thống đích đơn giản"
    ],
    "ans": 1,
    "exp": "Đáp án B: Không liên kết gửi từng gói độc lập (Datagram)."
  },
  {
    "id": 160,
    "ch": 1,
    "topicId": 3,
    "q": "Với phương thức hoạt động có liên kết thì sẽ có bao nhiêu thủ tục chính để xây dựng các dịch vụ và giao thức chuẩn theo kiểu OSI?",
    "opts": [
      "12",
      "16",
      "4",
      "3"
    ],
    "ans": 0,
    "exp": "Đáp án A: 12 thủ tục chính."
  },
  {
    "id": 161,
    "ch": 1,
    "topicId": 3,
    "q": "Với phương thức hoạt động không có liên kết thì sẽ có bao nhiêu thủ tục chính để xây dựng các dịch vụ và giao thức chuẩn theo kiểu OSI?",
    "opts": [
      "12",
      "16",
      "3",
      "4"
    ],
    "ans": 3,
    "exp": "Đáp án D: 4 thủ tục."
  },
  {
    "id": 162,
    "ch": 1,
    "topicId": 3,
    "q": "Trong mô hình OSI, khi trao đổi thông tin thì 2 tầng kề nhau sẽ sử dụng các hàm dịch vụ nguyên thuỷ như sau:",
    "opts": [
      "Tầng N+1 của A gửi hàm Request cho tầng N của A",
      "Tầng N của A gửi hàm Indication cho tầng N của B",
      "Tầng N của B gửi hàm Response cho tầng N của A",
      "Tầng N+1 của B gửi hàm Confirm cho tầng N của B"
    ],
    "ans": 0,
    "exp": "Đáp án A."
  },
  {
    "id": 163,
    "ch": 1,
    "topicId": 3,
    "q": "Chọn quy trình hợp lý trong quá trình chuyển đổi dữ liệu (Encapsulation):",
    "opts": [
      "Data ➔ Frame ➔ Segment ➔ Packet ➔ Bit",
      "Data ➔ Packet ➔ Segment ➔ Frame ➔ Bit",
      "Data ➔ Segment ➔ Packet ➔ Frame ➔ Bit",
      "Data ➔ Segment ➔ Frame ➔ Packet ➔ Bit"
    ],
    "ans": 2,
    "exp": "Đáp án C: Data (App) ➔ Segment (Transport) ➔ Packet/Datagram (Network) ➔ Frame (Data Link) ➔ Bit (Physical)."
  },
  {
    "id": 164,
    "ch": 1,
    "topicId": 3,
    "q": "Chọn quy trình hợp lý trong quá trình giải đóng gói dữ liệu (Decapsulation):",
    "opts": [
      "Bit ➔ Frame ➔ Packet ➔ Segment ➔ Data",
      "Bit ➔ Segment ➔ Packet ➔ Frame ➔ Data",
      "Bit ➔ Frame ➔ Segment ➔ Packet ➔ Data",
      "Bit ➔ Segment ➔ Frame ➔ Packet ➔ Data"
    ],
    "ans": 0,
    "exp": "Đáp án A: Bit ➔ Frame ➔ Packet ➔ Segment ➔ Data."
  },
  {
    "id": 165,
    "ch": 1,
    "topicId": 3,
    "q": "Mục đích của việc chuẩn hoá mạng máy tính là:",
    "opts": [
      "Mở rộng khả năng trao đổi thông tin giữa các mạng khác nhau",
      "Các giao thức và kỹ thuật của mỗi tầng có thể nghiên cứu và triển khai độc lập",
      "Mỗi tầng được xây dựng dựa trên cơ sở tầng kế liền trước đó",
      "A và C đều đúng"
    ],
    "ans": 0,
    "exp": "Đáp án A: Chuẩn hóa giúp kết nối liên mạng giữa các thiết bị khác nhà sản xuất."
  },
  {
    "id": 166,
    "ch": 1,
    "topicId": 1,
    "q": "Chọn phát biểu KHÔNG PHẢI là tên gọi của tổ chức chuẩn hoá quốc tế:",
    "opts": [
      "ISO",
      "CCITT",
      "ANSIC",
      "IEEE"
    ],
    "ans": 2,
    "exp": "Đáp án C: ANSIC là tên bộ chuẩn ngôn ngữ C, không phải tên tổ chức chuẩn hóa mạng."
  },
  {
    "id": 167,
    "ch": 1,
    "topicId": 1,
    "q": "Card mạng (NIC - Network Interface Card) là thiết bị:",
    "opts": [
      "Kết nối các mạng với nhau",
      "Cung cấp khả năng truyền thông giữa các máy tính trên mạng",
      "Được xác định bởi địa chỉ vật lý 16 byte",
      "Cung cấp khả năng tương thích với các loại đường truyền"
    ],
    "ans": 1,
    "exp": "Đáp án B: Cung cấp giao diện vật lý kết nối máy tính vào môi trường truyền dẫn."
  },
  {
    "id": 168,
    "ch": 1,
    "topicId": 3,
    "q": "Để kết nối các mạng (subnet/LAN) lại với nhau ở tầng Mạng ta sử dụng thiết bị:",
    "opts": [
      "Router",
      "NIC",
      "Multiplexer",
      "Switch"
    ],
    "ans": 0,
    "exp": "Đáp án A: Router kết nối các mạng khác nhau."
  },
  {
    "id": 169,
    "ch": 1,
    "topicId": 3,
    "q": "Để mở rộng kết nối các đoạn mạng ở tầng Liên kết dữ liệu ta sử dụng:",
    "opts": [
      "Repeater",
      "Transducer",
      "Bridge (hoặc Switch)",
      "Hub"
    ],
    "ans": 2,
    "exp": "Đáp án C: Bridge / Switch hoạt động ở tầng 2 (Data Link)."
  },
  {
    "id": 170,
    "ch": 1,
    "topicId": 3,
    "q": "Các mạng sử dụng giao thức khác nhau ở tầng ứng dụng có thể kết nối và giao tiếp nhờ thiết bị:",
    "opts": [
      "Router / Gateway",
      "Repeater",
      "Socket",
      "Hub"
    ],
    "ans": 0,
    "exp": "Đáp án A: Router / Gateway thực hiện chuyển đổi giao thức."
  },
  {
    "id": 171,
    "ch": 1,
    "topicId": 1,
    "q": "Mạng hình RING (Vòng) sử dụng thiết bị/đầu nối nào?",
    "opts": [
      "Router",
      "Repeater",
      "T-Connector",
      "Terminator"
    ],
    "ans": 1,
    "exp": "Đáp án B: Repeater tại mỗi nút để khuếch đại tín hiệu chuyển tiếp trên vòng."
  },
  {
    "id": 172,
    "ch": 1,
    "topicId": 1,
    "q": "Mạng hình BUS (Tuyến cáp chung) sử dụng thiết bị/đầu nối nào?",
    "opts": [
      "Router",
      "Repeater",
      "T-Connector & Terminator",
      "Switch"
    ],
    "ans": 2,
    "exp": "Đáp án C: T-Connector và Terminator ở 2 đầu cáp đồng trục."
  },
  {
    "id": 173,
    "ch": 1,
    "topicId": 1,
    "q": "Mạng hình STAR (Ngôi sao) sử dụng thiết bị trung tâm nào?",
    "opts": [
      "Router",
      "Bridge",
      "T-Connector",
      "Switch / Hub"
    ],
    "ans": 3,
    "exp": "Đáp án D: Switch hoặc Hub làm thiết bị kết nối trung tâm."
  },
  {
    "id": 174,
    "ch": 1,
    "topicId": 1,
    "q": "Chọn phát biểu đúng với thiết bị Modem:",
    "opts": [
      "Có chức năng chuyển đổi tín hiệu số sang analog và ngược lại (Modulate/Demodulate)",
      "Là thiết bị liên mạng",
      "Cho phép sử dụng điện thoại và Internet cùng lúc qua đường truyền",
      "Tất cả A, B và C đều đúng"
    ],
    "ans": 3,
    "exp": "Đáp án D: Modem thực hiện tất cả các chức năng trên."
  }
];
