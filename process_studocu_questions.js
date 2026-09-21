const fs = require('fs');
const path = require('path');

const baseDir = 'C:\\Users\\Huy Khang\\Downloads\\AstraAI_GiaSu_MangMayTinh';

// Raw text of all 95 questions extracted from Studocu PDF
const rawQuestionsData = [
  {
    q: "Mạng máy tính là",
    opts: [
      "Các máy tính kết nối với nhau qua hệ thống cáp để trao đổi thông tin",
      "Các máy tính trao đổi thông tin với nhau theo tập giao thức mạng",
      "Các máy tính kết nối qua môi trường truyền tin và trao đổi thông tin theo một kiến trúc mạng xác định",
      "Các máy tính kết nối với nhau chia sẻ nguồn thông tin chung"
    ],
    ans: 2,
    exp: "Đáp án đúng theo ngân hàng câu hỏi VN Doc / PTIT: C. Kết nối qua môi trường truyền tin và trao đổi theo kiến trúc xác định."
  },
  {
    q: "Mạng máy tính là",
    opts: [
      "Các thiết bị xử lý thông tin kết nối với nhau bằng đường truyền vật lý để trao đổi thông tin",
      "Các máy tính kết nối qua môi trường truyền tin để trao đổi thông tin với nhau",
      "Các máy tính trao đổi thông tin với nhau theo tập giao thức tương ứng",
      "Các thiết bị xử lý thông tin kết nối qua môi trường truyền tin để trao đổi thông tin với nhau"
    ],
    ans: 1,
    exp: "Đáp án đúng B."
  },
  {
    q: "Lợi ích của mạng máy tính mang lại là",
    opts: [
      "Tăng khả năng phát hiện và chống thâm nhập mạng bất hợp pháp",
      "Rút ngắn thời gian trao đổi thông tin",
      "Giúp bảo vệ thông tin tại các nút mạng tốt hơn",
      "Tạo nhiều cơ hội thuận lợi cho công việc, kinh doanh,…"
    ],
    ans: 3,
    exp: "Đáp án đúng D."
  },
  {
    q: "Lợi ích của mạng máy tính mang lại là",
    opts: [
      "Giúp cho các mạng không tương thích trao đổi thông tin với nhau",
      "Cho phép chọn lựa các loại máy tính của các hãng khác nhau để kết nối mạng",
      "Tăng tốc xử lý thông tin",
      "Chia sẻ thông lượng một cách hợp lý"
    ],
    ans: 2,
    exp: "Đáp án đúng C."
  },
  {
    q: "Lợi ích của mạng máy tính mang lại là",
    opts: [
      "Người sử dụng có khả năng chọn lựa các loại thiết bị của nhiều hãng khác nhau",
      "Tăng hiệu quả khai thác, xử lý thông tin và độ tin cậy của hệ thống",
      "Dễ dàng trong công tác thiết kế, xây dựng và cài đặt các mạng máy tính",
      "Cho phép sử dụng các đường truyền một cách hợp lý"
    ],
    ans: 1,
    exp: "Đáp án đúng B."
  },
  {
    q: "Phát biểu nào sau đây là sai khi nói về lợi ích của mạng máy tính?",
    opts: [
      "Giúp người sử dụng tiếp cận được nhiều hình thức giải trí hơn như xem phim, game online,…",
      "Cho phép chia sẻ tài nguyên giúp tiết kiệm kinh phí và quản lý tốt hơn",
      "Cho phép người sử dụng trao đổi thông tin một cách nhanh chóng và hiệu quả",
      "Tạo nhiều cơ hội thuận lợi cho việc học tập, hội thảo, kinh doanh,…"
    ],
    ans: 0,
    exp: "Đáp án A phát biểu chưa phản ánh lợi ích kỹ thuật cốt lõi của mạng máy tính trong giáo trình."
  },
  {
    q: "Phát biểu nào dưới đây là sai khi nói về các thành phần của mạng máy tính?",
    opts: [
      "Các thiết bị đầu cuối như máy tính, máy in, điện thoại di động,… kết nối với nhau để tạo thành mạng",
      "Phương tiện truyền thông để chuyển đổi tín hiệu và truyền thông tin đi",
      "Các thiết bị kết nối mạng như vỉ mạng (NIC), bộ chuyển mạch (Switch), bộ định tuyến (Router),…",
      "Giao thức truyền thông qui định cách trao đổi thông tin giữa các thiết bị gửi và nhận trong mạng"
    ],
    ans: 1,
    exp: "Đáp án đúng B."
  },
  {
    q: "Các thông số đặc trưng của đường truyền là",
    opts: [
      "Giải thông, độ nhiễu điện từ, độ suy hao, thông lượng",
      "Thông lượng, độ nhiễu điện từ, độ suy hao và lưu lượng",
      "Độ nhiễu điện từ, độ suy hao, thông lượng và từ trường",
      "Độ suy hao, độ nhiễu điện từ, thông lượng và kích thước"
    ],
    ans: 0,
    exp: "Đáp án A: Giải thông (Bandwidth), độ nhiễu, độ suy hao, thông lượng (Throughput)."
  },
  {
    q: "Các thông số đặc trưng của đường truyền là",
    opts: [
      "Thông lượng, độ nhiễu điện từ, độ suy hao và lưu lượng",
      "Độ nhiễu điện từ, độ suy hao và giải thông",
      "Độ suy hao, thông lượng và từ trường",
      "Độ suy hao, độ nhiễu điện từ, thông lượng và kích thước"
    ],
    ans: 1,
    exp: "Đáp án B."
  },
  {
    q: "Các thông số đặc trưng của đường truyền là",
    opts: [
      "Thông lượng, độ nhiễu điện từ, độ suy hao và lưu lượng",
      "Độ nhiễu điện từ, độ suy hao thông lượng và kích thước",
      "Độ suy hao, thông lượng và giải thông",
      "Độ suy hao, độ nhiễu điện từ và độ trễ truyền đẫn"
    ],
    ans: 2,
    exp: "Đáp án C."
  },
  {
    q: "Thông lượng (throughput) của đường truyền vật lý là",
    opts: [
      "Độ suy yếu của tín hiệu trên đường truyền",
      "Tần số mà nó có thể đáp ứng được",
      "Tốc độ truyền dữ liệu trên đường truyền đó, tính bằng bps",
      "Tốc độ truyền dữ liệu trên đường truyền đó, tính bằng Mbps"
    ],
    ans: 2,
    exp: "Đáp án C: Tốc độ truyền dữ liệu thực tế tính bằng bps."
  },
  {
    q: "Thông lượng (throughput) của đường truyền vật lý là",
    opts: [
      "Độ suy yếu của tín hiệu trên đường truyền, tính bằng m/s",
      "Tốc độ truyền dữ liệu trên đường truyền đó, tính bằng baud",
      "Phạm vi tần số mà nó có thể đáp ứng được",
      "Tốc độ truyền dữ liệu trên đường truyền đó, tính bằng Mbps"
    ],
    ans: 1,
    exp: "Đáp án B."
  },
  {
    q: "Chọn ví dụ tương ứng với thông lượng (throughput) của đường truyền vật lý",
    opts: [
      "Tốc độ tối đa mà các xe có thể chạy được",
      "Số loại xe chạy được trên con đường",
      "Độ rộng của con đường",
      "Số lượng xe chạy trên con đường"
    ],
    ans: 0,
    exp: "Đáp án A."
  },
  {
    q: "Giải thông (bandwidth) của đường truyền vật lý là",
    opts: [
      "Độ suy yếu của tín hiệu trên đường truyền",
      "Tốc độ truyền dữ liệu trên đường truyền đó, tính bằng Mbps",
      "Tốc độ truyền dữ liệu trên đường truyền đó, tính bằng bps",
      "Phạm vi tần số mà nó có thể đáp ứng được"
    ],
    ans: 3,
    exp: "Đáp án D: Phạm vi tần số mà đường truyền có thể đáp ứng."
  },
  {
    q: "Giải thông (bandwidth) của đường truyền vật lý là",
    opts: [
      "Phạm vi tần số mà nó có thể đáp ứng được",
      "Tốc độ truyền dữ liệu trên đường truyền đó, tính bằng baud",
      "Tốc độ truyền dữ liệu trên đường truyền đó, tính bằng bps",
      "Tần số truyền tín hiệu trên đường truyền, tính bằng Hz"
    ],
    ans: 0,
    exp: "Đáp án A."
  },
  {
    q: "Chọn ví dụ tương ứng với giải thông (bandwidth) của đường truyền vật lý",
    opts: [
      "Tốc độ tối đa mà các xe có thể chạy được",
      "Số loại xe chạy được trên con đường",
      "Độ rộng của con đường",
      "Số lượng xe chạy trên con đường"
    ],
    ans: 2,
    exp: "Đáp án C: Độ rộng của con đường tương ứng với giải thông (bề rộng dải tần)."
  },
  {
    q: "Chọn giao thức sử dụng cho mạng cáp quang học",
    opts: [
      "CDDI",
      "SONET",
      "X25",
      "FDDI"
    ],
    ans: 3,
    exp: "Đáp án D: FDDI (Fiber Distributed Data Interface)."
  },
  {
    q: "Khẳng định nào không đúng đối với cáp quang học?",
    opts: [
      "Không bị nhiễu",
      "Không bị nghe trộm",
      "Không bị suy hao tín hiệu",
      "Chỉ truyền được tín hiệu quang"
    ],
    ans: 2,
    exp: "Đáp án C: Cáp quang vẫn bị suy hao tín hiệu (dù rất thấp) khi truyền đi xa."
  },
  {
    q: "Bps và baud",
    opts: [
      "Là hai đơn vị đo hoàn toàn khác nhau",
      "Là hai đơn vị đo có thể giống nhau, cũng có thể khác nhau",
      "Là hai đơn vị đo hoàn toàn giống nhau khi đo cùng một loại tín hiệu",
      "baud chỉ dùng để đo tín hiệu điện tử"
    ],
    ans: 1,
    exp: "Đáp án B."
  },
  {
    q: "Bps và baud",
    opts: [
      "Là hai đơn vị đo hoàn toàn khác nhau",
      "Là hai đơn vị đo hoàn toàn giống nhau",
      "Là hai đơn vị đo giống nhau khi đo dữ liệu nhị phân",
      "baud không phải đơn vị đo thông tin"
    ],
    ans: 2,
    exp: "Đáp án C: Bps và baud bằng nhau khi mỗi tín hiệu truyền 1 bit nhị phân."
  },
  {
    q: "Khẳng định nào đúng khi nói về ưu điểm của truyền số so với truyền analog?",
    opts: [
      "Tốc độ truyền cao hơn",
      "Giảm được lỗi do suy giảm và nhiễu trên đường truyền gây ra",
      "Thiết bị dùng chung cho cả thoại, số liệu, hình ảnh, âm nhạc",
      "Tất cả đều đúng"
    ],
    ans: 3,
    exp: "Đáp án D: Tất cả các ưu điểm trên đều đúng."
  },
  {
    q: "Khẳng định nào đúng khi nói về ưu điểm của truyền số so với truyền analog?",
    opts: [
      "Độ tin cậy cao vì chỉ có 2 giá trị 0 và 1",
      "Giảm được lỗi do suy giảm và nhiễu trên đường truyền gây ra",
      "Giá rẻ hơn nhờ giá máy tính và vi mạch ngày càng rẻ",
      "Tất cả đều đúng"
    ],
    ans: 3,
    exp: "Đáp án D."
  },
  {
    q: "Khẳng định nào đúng khi nói về ưu điểm của truyền số so với truyền analog?",
    opts: [
      "Được người dùng ưu chuộng hơn",
      "Tốc độ truyền nhanh hơn",
      "Thiết bị số nhiều và dễ mua hơn",
      "Truyền được trên nhiều loại đường truyền khác nhau"
    ],
    ans: 1,
    exp: "Đáp án B."
  },
  {
    q: "Khẳng định nào đúng khi nói về ưu điểm của truyền số so với truyền analog?",
    opts: [
      "Phần mềm xử lý đơn giản hơn",
      "Sử dụng nhiều tần số hơn",
      "Thiết bị truyền số dùng chung cho cả điện thoại, số liệu, âm nhạc, v.v…",
      "Dễ chọn lựa thiết bị hơn"
    ],
    ans: 2,
    exp: "Đáp án C."
  },
  {
    q: "Cấu hình mạng (Topology) được hiểu là",
    opts: [
      "Các qui ước truyền thông trên mạng",
      "Sơ đồ kết nối vật lý các máy tính trong mạng",
      "Cách kết nối các thiết bị vật lý trong mạng",
      "Các phần mềm điều khiển mạng"
    ],
    ans: 1,
    exp: "Đáp án B: Topology là sơ đồ hình học kết nối các máy tính trong mạng."
  },
  {
    q: "Khẳng định nào sau đây nói về cấu trúc vật lý của mạng?",
    opts: [
      "Giao thức mạng (Protocol)",
      "Cấu hình mạng (Topology)",
      "Phương tiện truyền",
      "Các dịch vụ mạng"
    ],
    ans: 1,
    exp: "Đáp án B: Topology phản ánh cấu trúc vật lý."
  },
  {
    q: "Mạng thông tin nào sau đây sử dụng cấu hình theo kiểu điểm-điểm (Point-to-Point)?",
    opts: [
      "Mạng Vina Phone",
      "Mạng Mobi Phone",
      "Mạng điện thoại nội hạt",
      "Mạng truyền hình"
    ],
    ans: 2,
    exp: "Đáp án C: Mạng điện thoại nội hạt nối trực tiếp từ tổng đài đến hộ gia đình."
  },
  {
    q: "Mạng kiểu điểm-điểm gọi là mạng",
    opts: [
      "Lưu và gửi tiếp (Store - and - Forward)",
      "Chuyển mạch gói",
      "Chuyển tiếp khung",
      "Chuyển mạch kênh"
    ],
    ans: 0,
    exp: "Đáp án A: Mạng điểm-điểm còn gọi là mạng lưu và chuyển tiếp (Store-and-Forward)."
  },
  {
    q: "Cấu hình nào có đặc điểm 'các nút sử dụng chung một đường truyền vật lý'?",
    opts: [
      "Tree",
      "Loop",
      "Ring",
      "Complete"
    ],
    ans: 2,
    exp: "Đáp án C: Ring / Bus."
  },
  {
    q: "Cấu hình nào có đặc điểm 'các nút sử dụng chung một đường truyền vật lý'?",
    opts: [
      "Tree",
      "Loop",
      "Star",
      "Bus"
    ],
    ans: 3,
    exp: "Đáp án D: Bus Topology các nút chung một tuyến cáp duy nhất."
  },
  {
    q: "Giao thức mạng (protocol) được hiểu là",
    opts: [
      "Các qui ước truyền thông trên mạng",
      "Sơ đồ kết nối vật lý các máy tính trong mạng",
      "Các phần mềm điều khiển mạng",
      "Cách kết nối các thiết bị vật lý trong mạng"
    ],
    ans: 0,
    exp: "Đáp án A: Các qui ước truyền thông qui định việc trao đổi dữ liệu."
  },
  {
    q: "Để các máy tính trong mạng giao tiếp được với nhau, cần có điều kiện gì?",
    opts: [
      "Các máy tính chỉ cần tuân thủ một qui tắc truyền thông nào đó",
      "Các máy tính chỉ cần kết nối vật lý với nhau",
      "Các máy tính phải kết nối vật lý với nhau và tuân thủ các qui tắc truyền thông thống nhất",
      "Các máy tính phải kết nối vật lý với nhau và tuân thủ các qui tắc truyền thông bất kỳ"
    ],
    ans: 2,
    exp: "Đáp án C: Phải kết nối vật lý VÀ tuân thủ qui tắc truyền thông thống nhất (giao thức)."
  },
  {
    q: "Dựa trên khoảng cách địa lý ta có các mạng sau:",
    opts: [
      "MAN, LAN, VAN, GAN",
      "LAN, WAN, MAN, SAN/PAN",
      "WAN, LAN, VAN, GAN",
      "Tất cả đều sai"
    ],
    ans: 1,
    exp: "Đáp án B: Phân loại theo phạm vi địa lý: LAN, MAN, WAN."
  },
  {
    q: "Trong các ví dụ nêu ra sau đây, hãy xác định ví dụ mô tả đúng về mạng WAN:",
    opts: [
      "Các máy tính của các nhà ga lớn trong nước như ga Hà Nội, ga Đà Nẵng, ga Sài Gòn,… kết nối với nhau để dùng chung dữ liệu",
      "Các máy tính của các nước trên thế giới kết nối vào phòng CHAT để tán gẫu với nhau",
      "Các máy tính ở các phòng của một trường học kết nối với nhau để dùng chung dữ liệu, máy in,…",
      "Tất cả đều sai"
    ],
    ans: 0,
    exp: "Đáp án A: Mạng nối các chi nhánh toàn quốc thuộc diện diện rộng WAN."
  },
  {
    q: "Trong các ví dụ nêu ra sau đây, hãy xác định ví dụ mô tả đúng về mạng LAN:",
    opts: [
      "Các máy tính của các nhà ga lớn trong nước kết nối với nhau",
      "Hai máy tính và một máy in kết nối vào một Printer Switch Box trong tiệm photocopy",
      "Hai máy tính của hai nhà cạnh nhau kết nối Internet để dùng chung dữ liệu",
      "Tất cả đều sai"
    ],
    ans: 1,
    exp: "Đáp án B: Mạng quy mô nhỏ cục bộ."
  },
  {
    q: "Dựa trên kỹ thuật chuyển mạch ta có các mạng sau:",
    opts: [
      "Chuyển mạch kênh, chuyển mạch thông báo, chuyển mạch tập trung",
      "Chuyển mạch kênh, chuyển mạch gói, chuyển mạch thông báo",
      "Chuyển mạch phân tán, chuyển mạch kênh, chuyển mạch tập trung",
      "Chuyển mạch tập trung, chuyển mạch gói, chuyển mạch thông báo"
    ],
    ans: 1,
    exp: "Đáp án B: 3 kỹ thuật chuyển mạch chính: Kênh (Circuit), Gói (Packet), Thông báo (Message)."
  },
  {
    q: "Đối với mạng chuyển mạch kênh thì",
    opts: [
      "Hiệu suất sử dụng đường truyền cao",
      "Thời gian truyền qua mạng nhanh",
      "Tiêu tốn thời gian cho việc thiết lập kênh cố định giữa hai thực thể",
      "Các nút mạng có thể xử lý toàn bộ gói tin trong bộ nhớ"
    ],
    ans: 2,
    exp: "Đáp án C: Phải tốn thời gian thiết lập kênh truyền cố định trước khi bắt đầu gửi dữ liệu."
  },
  {
    q: "Đối với mạng chuyển mạch thông báo thì",
    opts: [
      "Hiệu suất cao hơn mạng chuyển mạch gói",
      "Mỗi nút mạng có thể lưu trữ thông báo cho tới khi kênh truyền rỗi mới chuyển thông báo đi",
      "Kích thước của thông báo cố định 512 bytes",
      "Thông báo có thể gửi đi bằng nhiều đường khác nhau"
    ],
    ans: 1,
    exp: "Đáp án B: Áp dụng cơ chế lưu và gửi tiếp (Store-and-Forward) cho cả thông báo."
  },
  {
    q: "Đối với mạng chuyển mạch gói thì",
    opts: [
      "Hiệu suất cao hơn mạng chuyển mạch thông báo",
      "Có nhiều ưu điểm, không có nhược điểm đáng kể",
      "Các gói có kích thước thay đổi nhưng phải là luỹ thừa của cơ số 2",
      "Cần bộ nhớ đệm để lưu trữ tạm thời các gói"
    ],
    ans: 0,
    exp: "Đáp án A: Hiệu suất linh hoạt cao hơn nhờ chia nhỏ gói tin."
  },
  {
    q: "Mạng dịch vụ tích hợp số (ISDN) là sự kết hợp của các kỹ thuật:",
    opts: [
      "Chuyển mạch kênh, chuyển mạch gói và chuyển mạch thông báo",
      "Chuyển mạch kênh và chuyển mạch thông báo",
      "Chuyển mạch gói và chuyển mạch thông báo",
      "Chuyển mạch kênh và chuyển mạch gói"
    ],
    ans: 3,
    exp: "Đáp án D: Kết hợp chuyển mạch kênh và chuyển mạch gói."
  },
  {
    q: "Đối với mạng tập trung thì",
    opts: [
      "Các chương trình điều khiển mạng nằm trên các máy chủ và máy khách",
      "Các chương trình điều khiển mạng nằm trên các máy chủ",
      "Các chương trình điều khiển mạng nằm trên máy khách",
      "Các chương trình điều khiển mạng nằm trên một máy chủ"
    ],
    ans: 1,
    exp: "Đáp án B: Chương trình quản lý điều khiển tập trung tại máy chủ Server."
  },
  {
    q: "Đối với mạng phân tán thì câu nào sau đây là sai?",
    opts: [
      "Các máy có thể cung cấp tài nguyên của mình cho các máy khác",
      "Chế độ bảo mật kém",
      "Các máy có thể sử dụng tài nguyên của các máy khác trong mạng",
      "Xây dựng và bảo trì phức tạp"
    ],
    ans: 0,
    exp: "Đáp án A."
  },
  {
    q: "Chọn đáp án KHÔNG PHẢI đặc trưng của mạng khách/chủ (Client/Server):",
    opts: [
      "Các tài nguyên được quản lý và chia sẻ một cách có tổ chức",
      "Phần lớn tài nguyên quan trọng tập trung tại các Server",
      "Tính an toàn và độ bảo mật cao",
      "Thích hợp với qui mô nhỏ"
    ],
    ans: 3,
    exp: "Đáp án D: Mạng Client/Server thích hợp với quy mô lớn, không chỉ quy mô nhỏ."
  },
  {
    q: "Chọn đáp án KHÔNG PHẢI đặc trưng của mạng ngang hàng (Peer-to-Peer):",
    opts: [
      "Chi phí lắp đặt thấp và dễ sử dụng",
      "Các máy có vai trò như một Server",
      "Cần có Server chuyên dụng và người quản trị chuyên nghiệp để quản lý tài nguyên",
      "Các máy có vai trò như nhau và người sử dụng tự quản lý tài nguyên của mình"
    ],
    ans: 2,
    exp: "Đáp án C: Mạng P2P KHÔNG cần Server chuyên dụng hay quản trị viên tập trung."
  },
  {
    q: "Mạng nào có các máy vừa làm máy khách vừa làm máy phục vụ?",
    opts: [
      "Peer to Peer",
      "Client / Server",
      "LAN",
      "Ethernet"
    ],
    ans: 0,
    exp: "Đáp án A: Mạng ngang hàng P2P (Peer-to-Peer)."
  },
  {
    q: "Xác định phát biểu đúng về máy Chủ (Server):",
    opts: [
      "Quản lý và cung cấp tài nguyên cho các tài khoản trong máy",
      "Sử dụng tài nguyên do máy khác cung cấp",
      "Yêu cầu máy khác cung cấp tài nguyên cho mình",
      "Quản lý và điều khiển các tài khoản trong mạng"
    ],
    ans: 3,
    exp: "Đáp án D: Quản lý và điều khiển tài nguyên/tài khoản chung trong mạng."
  },
  {
    q: "Xác định phát biểu đúng về máy Khách (Client):",
    opts: [
      "Quản lý và cung cấp tài nguyên cho các máy trong mạng",
      "Sử dụng các dịch vụ thông tin trong mạng",
      "Đáp ứng các yêu cầu của các máy khác trong mạng",
      "Phải có cấu hình mạnh, lưu trữ được nhiều thông tin"
    ],
    ans: 1,
    exp: "Đáp án B: Máy khách gửi yêu cầu và sử dụng các dịch vụ do máy chủ cung cấp."
  },
  {
    q: "Chọn phát biểu KHÔNG ĐÚNG với ý nghĩa của kiến trúc phân tầng:",
    opts: [
      "Dễ dàng trong công tác thiết kế, xây dựng và cài đặt các mạng máy tính",
      "Số lượng, tên gọi và chức năng của mỗi tầng sẽ được người thiết kế mạng máy tính cụ thể quy định",
      "Mỗi tầng được xây dựng trên cơ sở tầng kế liền trước đó. Như vậy, tầng dưới được hiểu là tầng cung cấp các dịch vụ cho tầng trên",
      "Giao thức, vấn đề kỹ thuật và công nghệ cho mỗi tầng được triển khai theo trình tự từ dưới lên"
    ],
    ans: 3,
    exp: "Đáp án D."
  },
  {
    q: "Chọn phát biểu KHÔNG ĐÚNG với mô hình OSI:",
    opts: [
      "Giải quyết được vấn đề không tương thích giữa các mạng",
      "Tất cả các mạng ngày nay đều áp dụng mô hình này",
      "Là khung chuẩn về kiến trúc mạng làm căn cứ cho các nhà nghiên cứu và thiết kế mạng",
      "Giúp người sử dụng có thể chọn lựa các loại thiết bị của nhiều hãng khác nhau"
    ],
    ans: 1,
    exp: "Đáp án B: Thực tế hầu hết các mạng ngày nay dùng mô hình TCP/IP, OSI là mô hình tham chiếu lý thuyết."
  },
  {
    q: "Chọn phát biểu KHÔNG ĐÚNG với các nguyên tắc chủ yếu để xây dựng mô hình OSI:",
    opts: [
      "Mô tả dịch vụ tầng càng đơn giản càng tốt",
      "Giới hạn số lượng tầng ở mức cần thiết",
      "Khi hiệu chỉnh chức năng hay giao thức của một tầng, các tầng khác không bị ảnh hưởng theo",
      "Có thể gộp các tầng con thành một tầng nhưng không được huỷ bỏ các tầng con"
    ],
    ans: 3,
    exp: "Đáp án D."
  },
  {
    q: "Trong mô hình OSI, tầng 1 là tầng:",
    opts: [
      "Physical (Vật lý)",
      "Session (Phiên)",
      "Data Link (Liên kết dữ liệu)",
      "Network Access"
    ],
    ans: 0,
    exp: "Đáp án A: Tầng 1 là Physical."
  },
  {
    q: "Trong mô hình OSI, tầng 2 là tầng:",
    opts: [
      "Transport",
      "Session",
      "Data Link",
      "Network"
    ],
    ans: 2,
    exp: "Đáp án C: Tầng 2 là Data Link."
  },
  {
    q: "Trong mô hình OSI, tầng 3 là tầng:",
    opts: [
      "Transport",
      "Internet",
      "Session",
      "Network"
    ],
    ans: 3,
    exp: "Đáp án D: Tầng 3 là Network."
  },
  {
    q: "Trong mô hình OSI, tầng 4 là tầng:",
    opts: [
      "Transport",
      "Session",
      "Data Link",
      "Network"
    ],
    ans: 0,
    exp: "Đáp án A: Tầng 4 là Transport."
  },
  {
    q: "Trong mô hình OSI, tầng 5 là tầng:",
    opts: [
      "Transport",
      "Session",
      "Presentation",
      "Network"
    ],
    ans: 1,
    exp: "Đáp án B: Tầng 5 là Session."
  },
  {
    q: "Trong mô hình OSI, tầng 6 là tầng:",
    opts: [
      "Transport",
      "Session",
      "Presentation",
      "Network"
    ],
    ans: 2,
    exp: "Đáp án C: Tầng 6 là Presentation."
  },
  {
    q: "Trong mô hình OSI, tầng 7 là tầng:",
    opts: [
      "Transport",
      "Application",
      "Presentation",
      "Physical"
    ],
    ans: 1,
    exp: "Đáp án B: Tầng 7 là Application."
  },
  {
    q: "Chức năng của tầng Vật lý trong mô hình OSI là:",
    opts: [
      "Giải quyết các vấn đề liên quan đến đường truyền như định tuyến, kiểm soát luồng",
      "Truyền các dòng bit có cấu trúc qua hệ thống đường truyền",
      "Nối, duy trì, ngắt các liên kết vật lý",
      "Tất cả đều đúng"
    ],
    ans: 2,
    exp: "Đáp án C: Nối, duy trì và ngắt các liên kết vật lý."
  },
  {
    q: "Chọn phát biểu KHÔNG ĐÚNG với tầng Vật lý trong mô hình OSI:",
    opts: [
      "Dữ liệu không có phần Header chứa thông tin điều khiển",
      "Đóng gói và truyền các Frame nhị phân qua đường truyền",
      "Không có đơn vị dữ liệu cho tầng vật lý",
      "Cung cấp các phương tiện điện, cơ, chức năng, thủ tục để giải quyết các vấn đề liên quan"
    ],
    ans: 1,
    exp: "Đáp án B: Đóng gói Frame là chức năng của tầng Data Link (tầng 2), không phải tầng Physical."
  },
  {
    q: "Cung cấp các phương tiện để truyền thông tin qua liên kết vật lý đảm bảo tin cậy là chức năng của tầng nào?",
    opts: [
      "Network",
      "Transport",
      "Session",
      "Data Link"
    ],
    ans: 3,
    exp: "Đáp án D: Tầng Data Link (Liên kết dữ liệu)."
  },
  {
    q: "Tầng nào trong mô hình OSI chuyển luồng bit thành Frame?",
    opts: [
      "Session",
      "Presentation",
      "Data Link",
      "Network"
    ],
    ans: 2,
    exp: "Đáp án C: Tầng Data Link."
  },
  {
    q: "Tầng nào trong mô hình OSI chuyển packet thành Frame?",
    opts: [
      "Tầng phiên",
      "Tầng mạng",
      "Tầng giao vận",
      "Tầng liên kết dữ liệu"
    ],
    ans: 3,
    exp: "Đáp án D: Tầng Data Link đóng gói packet/datagram từ tầng Mạng thành Frame."
  },
  {
    q: "Chọn đường (Routing), kiểm soát luồng dữ liệu là chức năng chính của tầng nào?",
    opts: [
      "Transport",
      "Session",
      "Data Link",
      "Network"
    ],
    ans: 3,
    exp: "Đáp án D: Tầng Network (Mạng)."
  },
  {
    q: "Chuyển tiếp thông tin và cắt/hợp dữ liệu (Fragmentation & Reassembly) là chức năng của tầng nào?",
    opts: [
      "Transport",
      "Network",
      "Data Link",
      "Physical"
    ],
    ans: 1,
    exp: "Đáp án B: Tầng Network."
  },
  {
    q: "Chức năng cốt lõi của tầng Giao vận (Transport) là:",
    opts: [
      "Đảm bảo các yêu cầu truyền dữ liệu qua các phương tiện vật lý",
      "Mã hoá dữ liệu để bảo mật thông tin trên đường truyền",
      "Thực hiện việc truyền dữ liệu từ nút đến nút (end-to-end tin cậy)",
      "Nén dữ liệu để việc truyền qua mạng nhanh hơn"
    ],
    ans: 2,
    exp: "Đáp án C: Truyền dữ liệu end-to-end giữa 2 tiến trình ứng dụng."
  },
  {
    q: "Cung cấp các dịch vụ truyền dữ liệu 'trong suốt' đối với các tầng trên là chức năng của tầng nào?",
    opts: [
      "Transport",
      "Physical",
      "Session",
      "Presentation"
    ],
    ans: 0,
    exp: "Đáp án A: Tầng Transport."
  },
  {
    q: "Tầng nào dưới đây thiết lập, duy trì, huỷ bỏ 'các giao dịch' (Session) giữa các thực thể đầu cuối?",
    opts: [
      "Tầng phiên (Session)",
      "Tầng liên kết dữ liệu",
      "Tầng mạng",
      "Tầng vật lý"
    ],
    ans: 0,
    exp: "Đáp án A: Tầng Session (Tầng phiên)."
  },
  {
    q: "Điều khiển các cuộc liên lạc (Dialog Control) là chức năng của tầng nào?",
    opts: [
      "Presentation",
      "Transport",
      "Session",
      "Data Link"
    ],
    ans: 2,
    exp: "Đáp án C: Tầng Session."
  },
  {
    q: "Tầng nào trong mô hình OSI thực hiện nén và mã hoá dữ liệu?",
    opts: [
      "Network",
      "Presentation",
      "Session",
      "Transport"
    ],
    ans: 1,
    exp: "Đáp án B: Tầng Presentation (Trình diễn) thực hiện nén, giải nén, mã hóa và định dạng dữ liệu."
  },
  {
    q: "Chức năng của tầng Trình diễn (Presentation) là chuyển đổi:",
    opts: [
      "Dữ liệu tầng ứng dụng thành các Frame",
      "Khuôn dạng của gói tin phù hợp với các tầng kế trên và dưới",
      "Các phiên truyền thông giữa các thực thể",
      "Dữ liệu người sử dụng thành dữ liệu chuẩn chung của mạng"
    ],
    ans: 3,
    exp: "Đáp án D: Chuyển đổi cú pháp/định dạng dữ liệu người dùng thành khuôn dạng chung."
  },
  {
    q: "Tầng nào xác định giao diện giữa người sử dụng và môi trường OSI?",
    opts: [
      "Physical",
      "Data Link",
      "Presentation",
      "Application"
    ],
    ans: 3,
    exp: "Đáp án D: Tầng Application (Ứng dụng)."
  },
  {
    q: "Tầng nào cung cấp các dịch vụ thông tin phân tán?",
    opts: [
      "Tầng giao vận",
      "Tầng ứng dụng",
      "Tầng trình bày",
      "Tầng phiên"
    ],
    ans: 1,
    exp: "Đáp án B: Tầng Application."
  },
  {
    q: "Mô hình OSI theo quan điểm hệ thống gửi/nhận:",
    opts: [
      "Dữ liệu khi xuống đến tầng N-1 sẽ được thêm phần thông tin điều khiển của tầng N-1",
      "Ở hệ thống nhận, khi qua mỗi tầng, phần thông tin điều khiển tương ứng sẽ được phân tích và cắt bỏ trước khi chuyển lên tầng trên",
      "Không có sự thêm vào và bớt đi thông tin",
      "Ở hệ thống gửi, dữ liệu khi đi qua các tầng sẽ được chia thành các gói nhỏ hơn"
    ],
    ans: 1,
    exp: "Đáp án B: Quá trình giải đóng gói (Decapsulation) tại bên nhận."
  },
  {
    q: "Mô hình OSI theo quan điểm hệ thống:",
    opts: [
      "Toàn bộ dữ liệu tầng trên sẽ trở thành một đơn vị dữ liệu của tầng dưới",
      "Phần thông tin điều khiển của mỗi tầng sẽ được thêm vào cuối đơn vị dữ liệu",
      "Sau khi xử lý, tầng dưới sẽ chuyển toàn bộ dữ liệu lên tầng trên",
      "Sau khi xử lý, tầng trên sẽ chuyển đơn vị dữ liệu của mình xuống tầng dưới"
    ],
    ans: 0,
    exp: "Đáp án A: Quá trình Encapsulation coi PDU tầng trên là Payload của tầng dưới."
  },
  {
    q: "Khi dữ liệu được chuyển từ tầng trên xuống tầng dưới kề nó, gói dữ liệu được bổ sung thêm thông tin điều khiển trong phần:",
    opts: [
      "Địa chỉ",
      "Option",
      "Vùng kiểm soát lỗi",
      "Header"
    ],
    ans: 3,
    exp: "Đáp án D: Bổ sung thêm thông tin trong phần Header."
  },
  {
    q: "Hàm Confirm được sử dụng để xác nhận hoàn tất một chức năng đã được gọi từ trước bởi hàm nguyên thủy:",
    opts: [
      "Connect",
      "Indication",
      "Response",
      "Request"
    ],
    ans: 3,
    exp: "Đáp án D: Confirm xác nhận cho yêu cầu Request ban đầu."
  },
  {
    q: "Hàm Response được sử dụng để trả lời một chức năng đã được gọi từ trước bởi hàm nguyên thủy:",
    opts: [
      "Connect",
      "Indication",
      "Confirm",
      "Request"
    ],
    ans: 1,
    exp: "Đáp án B: Response trả lời cho chỉ thị Indication từ tầng dưới."
  },
  {
    q: "Chọn phát biểu đúng với phương thức hoạt động có liên kết (Connection-Oriented):",
    opts: [
      "Độ tin cậy cao nhưng cài đặt khá phức tạp",
      "Độ tin cậy cao và cài đặt đơn giản",
      "Nhờ độ tin cậy cao nên quá trình truyền rất đơn giản",
      "Không cần thiết lập liên kết vật lý"
    ],
    ans: 0,
    exp: "Đáp án A: Có liên kết đảm bảo độ tin cậy cao nhưng cần thủ tục bắt tay & duy trì trạng thái phức tạp."
  },
  {
    q: "Chọn phát biểu đúng với phương thức hoạt động không có liên kết (Connectionless):",
    opts: [
      "Độ tin cậy thấp nhưng cài đặt khá phức tạp",
      "Các gói dữ liệu được truyền độc lập theo nhiều đường khác nhau",
      "Quá trình truyền được quản lý và kiểm soát chặt chẽ",
      "Quá trình tiếp nhận các gói ở hệ thống đích đơn giản"
    ],
    ans: 1,
    exp: "Đáp án B: Không liên kết gửi từng gói độc lập (Datagram)."
  },
  {
    q: "Với phương thức hoạt động có liên kết thì sẽ có bao nhiêu thủ tục chính để xây dựng các dịch vụ và giao thức chuẩn theo kiểu OSI?",
    opts: [
      "12",
      "16",
      "4",
      "3"
    ],
    ans: 0,
    exp: "Đáp án A: 12 thủ tục chính."
  },
  {
    q: "Với phương thức hoạt động không có liên kết thì sẽ có bao nhiêu thủ tục chính để xây dựng các dịch vụ và giao thức chuẩn theo kiểu OSI?",
    opts: [
      "12",
      "16",
      "3",
      "4"
    ],
    ans: 3,
    exp: "Đáp án D: 4 thủ tục."
  },
  {
    q: "Trong mô hình OSI, khi trao đổi thông tin thì 2 tầng kề nhau sẽ sử dụng các hàm dịch vụ nguyên thuỷ như sau:",
    opts: [
      "Tầng N+1 của A gửi hàm Request cho tầng N của A",
      "Tầng N của A gửi hàm Indication cho tầng N của B",
      "Tầng N của B gửi hàm Response cho tầng N của A",
      "Tầng N+1 của B gửi hàm Confirm cho tầng N của B"
    ],
    ans: 0,
    exp: "Đáp án A."
  },
  {
    q: "Chọn quy trình hợp lý trong quá trình chuyển đổi dữ liệu (Encapsulation):",
    opts: [
      "Data ➔ Frame ➔ Segment ➔ Packet ➔ Bit",
      "Data ➔ Packet ➔ Segment ➔ Frame ➔ Bit",
      "Data ➔ Segment ➔ Packet ➔ Frame ➔ Bit",
      "Data ➔ Segment ➔ Frame ➔ Packet ➔ Bit"
    ],
    ans: 2,
    exp: "Đáp án C: Data (App) ➔ Segment (Transport) ➔ Packet/Datagram (Network) ➔ Frame (Data Link) ➔ Bit (Physical)."
  },
  {
    q: "Chọn quy trình hợp lý trong quá trình giải đóng gói dữ liệu (Decapsulation):",
    opts: [
      "Bit ➔ Frame ➔ Packet ➔ Segment ➔ Data",
      "Bit ➔ Segment ➔ Packet ➔ Frame ➔ Data",
      "Bit ➔ Frame ➔ Segment ➔ Packet ➔ Data",
      "Bit ➔ Segment ➔ Frame ➔ Packet ➔ Data"
    ],
    ans: 0,
    exp: "Đáp án A: Bit ➔ Frame ➔ Packet ➔ Segment ➔ Data."
  },
  {
    q: "Mục đích của việc chuẩn hoá mạng máy tính là:",
    opts: [
      "Mở rộng khả năng trao đổi thông tin giữa các mạng khác nhau",
      "Các giao thức và kỹ thuật của mỗi tầng có thể nghiên cứu và triển khai độc lập",
      "Mỗi tầng được xây dựng dựa trên cơ sở tầng kế liền trước đó",
      "A và C đều đúng"
    ],
    ans: 0,
    exp: "Đáp án A: Chuẩn hóa giúp kết nối liên mạng giữa các thiết bị khác nhà sản xuất."
  },
  {
    q: "Chọn phát biểu KHÔNG PHẢI là tên gọi của tổ chức chuẩn hoá quốc tế:",
    opts: [
      "ISO",
      "CCITT",
      "ANSIC",
      "IEEE"
    ],
    ans: 2,
    exp: "Đáp án C: ANSIC là tên bộ chuẩn ngôn ngữ C, không phải tên tổ chức chuẩn hóa mạng."
  },
  {
    q: "Card mạng (NIC - Network Interface Card) là thiết bị:",
    opts: [
      "Kết nối các mạng với nhau",
      "Cung cấp khả năng truyền thông giữa các máy tính trên mạng",
      "Được xác định bởi địa chỉ vật lý 16 byte",
      "Cung cấp khả năng tương thích với các loại đường truyền"
    ],
    ans: 1,
    exp: "Đáp án B: Cung cấp giao diện vật lý kết nối máy tính vào môi trường truyền dẫn."
  },
  {
    q: "Để kết nối các mạng (subnet/LAN) lại với nhau ở tầng Mạng ta sử dụng thiết bị:",
    opts: [
      "Router",
      "NIC",
      "Multiplexer",
      "Switch"
    ],
    ans: 0,
    exp: "Đáp án A: Router kết nối các mạng khác nhau."
  },
  {
    q: "Để mở rộng kết nối các đoạn mạng ở tầng Liên kết dữ liệu ta sử dụng:",
    opts: [
      "Repeater",
      "Transducer",
      "Bridge (hoặc Switch)",
      "Hub"
    ],
    ans: 2,
    exp: "Đáp án C: Bridge / Switch hoạt động ở tầng 2 (Data Link)."
  },
  {
    q: "Các mạng sử dụng giao thức khác nhau ở tầng ứng dụng có thể kết nối và giao tiếp nhờ thiết bị:",
    opts: [
      "Router / Gateway",
      "Repeater",
      "Socket",
      "Hub"
    ],
    ans: 0,
    exp: "Đáp án A: Router / Gateway thực hiện chuyển đổi giao thức."
  },
  {
    q: "Mạng hình RING (Vòng) sử dụng thiết bị/đầu nối nào?",
    opts: [
      "Router",
      "Repeater",
      "T-Connector",
      "Terminator"
    ],
    ans: 1,
    exp: "Đáp án B: Repeater tại mỗi nút để khuếch đại tín hiệu chuyển tiếp trên vòng."
  },
  {
    q: "Mạng hình BUS (Tuyến cáp chung) sử dụng thiết bị/đầu nối nào?",
    opts: [
      "Router",
      "Repeater",
      "T-Connector & Terminator",
      "Switch"
    ],
    ans: 2,
    exp: "Đáp án C: T-Connector và Terminator ở 2 đầu cáp đồng trục."
  },
  {
    q: "Mạng hình STAR (Ngôi sao) sử dụng thiết bị trung tâm nào?",
    opts: [
      "Router",
      "Bridge",
      "T-Connector",
      "Switch / Hub"
    ],
    ans: 3,
    exp: "Đáp án D: Switch hoặc Hub làm thiết bị kết nối trung tâm."
  },
  {
    q: "Chọn phát biểu đúng với thiết bị Modem:",
    opts: [
      "Có chức năng chuyển đổi tín hiệu số sang analog và ngược lại (Modulate/Demodulate)",
      "Là thiết bị liên mạng",
      "Cho phép sử dụng điện thoại và Internet cùng lúc qua đường truyền",
      "Tất cả A, B và C đều đúng"
    ],
    ans: 3,
    exp: "Đáp án D: Modem thực hiện tất cả các chức năng trên."
  }
];

// Append questions into masterQuestionBank in data_questions.js
const questionsPath = path.join(baseDir, 'data_questions.js');
let code = fs.readFileSync(questionsPath, 'utf8');

// Parse current masterQuestionBank
const vm = require('vm');
const ctx = vm.createContext({ masterQuestionBank: [] });
eval(code);

let currentQuestions = masterQuestionBank;
let maxId = Math.max(...currentQuestions.map(q => q.id), 0);

console.log('Current total questions count before merge:', currentQuestions.length);
console.log('Current max ID:', maxId);

// Add new questions from Studocu PDF into Chapter 1 (TopicId 1, 2, or 3 based on content)
let addedCount = 0;
rawQuestionsData.forEach((qData, index) => {
  maxId++;
  let topicId = 1;
  const text = (qData.q + ' ' + qData.opts.join(' ')).toLowerCase();
  if (text.includes('thông lượng') || text.includes('delay') || text.includes('d_trans') || text.includes('d_prop') || text.includes('chuyển mạch') || text.includes('topology')) {
    topicId = 2;
  } else if (text.includes('osi') || text.includes('tầng') || text.includes('header') || text.includes('frame') || text.includes('packet') || text.includes('mã độc') || text.includes('bảo mật')) {
    topicId = 3;
  }

  currentQuestions.push({
    id: maxId,
    ch: 1,
    topicId: topicId,
    q: qData.q,
    opts: qData.opts,
    ans: qData.ans,
    exp: qData.exp
  });
  addedCount++;
});

console.log(`Successfully merged ${addedCount} new questions from Studocu PDF into Chapter 1!`);
console.log('New total questions count:', currentQuestions.length);

// Re-serialize data_questions.js
const updatedCode = `/* Astra AI Tutor Data Bank - Chapters 1, 2, 3 (${currentQuestions.length}+ Master Questions Bank) */\n\nvar masterQuestionBank = ${JSON.stringify(currentQuestions, null, 2)};\n`;
fs.writeFileSync(questionsPath, updatedCode);

console.log('Successfully updated data_questions.js!');
