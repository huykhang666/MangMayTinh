const fs = require('fs');
const content = fs.readFileSync('data_mtt_pdf.js', 'utf8');
const vm = require('vm');
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(content, sandbox);
const qs = sandbox.mttPdfQuestions;

// User specs map
const updates = {
  22: { ansList: [3], exp: 'DNS record bao gồm các dạng A, NS, CNAME, MX. Mỗi dạng gồm name, value, type, ttl. Loại A: name=hostname, value=IP. Do đó tất cả đều đúng.' },
  23: { ansList: [0, 3, 4], exp: 'Sử dụng webmail cần HTTP (để truy cập web browser), DNS (phân giải tên miền) và SMTP (để chuyển gửi mail giữa các mail server).' },
  24: { ansList: [1, 3], exp: 'Trong hệ thống DNS: Mỗi IP có thể ánh xạ tới nhiều tên miền và quá trình tìm kiếm thông tin tên miền được thực hiện từ gốc (Root) tới các nút nhánh.' },
  25: { ansList: [3], exp: 'Giao thức IMAP (Internet Message Access Protocol) cho phép client lấy đồng thời tiêu đề và thân email từ server và quản lý thư trên máy chủ.' },
  26: { ansList: [3], exp: 'Đáp án D là lựa chọn đúng.' },
  27: { ansList: [3], exp: 'Đáp án D là lựa chọn đúng.' },
  28: { ansList: [1], exp: 'Đáp án B là lựa chọn đúng.' },
  29: { ansList: [2, 4], exp: 'Đáp án C và E là các đáp án đúng.' },
  30: { ansList: [1, 2], exp: 'Đáp án B và C là các đáp án đúng.' },
  32: { ansList: [2], exp: 'Đáp án C là lựa chọn đúng.' },
  33: { ansList: [2], exp: 'Đáp án C là lựa chọn đúng.' },
  34: { ansList: [3], exp: 'Cổng dành riêng cho dịch vụ hệ thống thường trong khoảng từ 0 đến 1023 (tổng 1024 cổng).' },
  35: { ansList: [0, 1, 2], exp: 'Đáp án A, B, C là các lựa chọn đúng.' },
  36: { ansList: [0, 1, 2], exp: 'Đáp án A, B, C là các lựa chọn đúng.' },
  37: { ansList: [0, 2], exp: 'Đáp án A và C là các đáp án đúng.' },
  39: { ansList: [1], exp: 'Đáp án B là lựa chọn đúng.' },
  40: { ansList: [1], exp: 'Đáp án B là lựa chọn đúng.' },
  41: { ansList: [1], exp: 'Phương thức POST trong HTTP dùng để gửi dữ liệu biểu mẫu từ client lên server.' },
  42: { ansList: [0], exp: 'Checksum 16-bit: 10101100 01010001 + 01001001 11001100 = 11110101 00011101. Lấy bù 1 thu được 00001001 11100010 (Đáp án A).' },
  43: { ansList: [3], images: ['page_8_img_1_Image42.jpg'], exp: 'Đây là trường hợp Mất gói (Packet loss) của rdt 3.0.' },
  44: { ansList: [3], exp: 'Đáp án D là lựa chọn đúng.' },
  45: { ansList: [0], images: ['page_9_img_1_Image52.jpg'], exp: 'Trong Selective Repeat, sau khi timeout gói nào thì phía gửi chỉ phát lại duy nhất gói bị timeout đó (Chỉ gửi lại pkt2).' },
  46: { ansList: [4], exp: 'Đáp án E là lựa chọn đúng.' },
  48: { ansList: [2], images: ['page_10_img_1_Image55.jpg'], exp: 'Giai đoạn Slow Start bắt đầu tại các lượt gửi 10 và 23 (khi cwnd rớt về 1 sau timeout).' },
  49: { ansList: [2], exp: 'Đoạn biểu diễn giai đoạn tránh tắc nghẽn (Congestion Avoidance): 6-9, 14-18 và 19-22.' },
  50: { ansList: [0, 3], exp: 'Phía gửi xảy ra time-out tại các lượt gửi A và D.' },
  51: { ansList: [1, 2], exp: 'Đáp án B và C là các đáp án đúng.' },
  52: { ansList: [1], exp: 'Đáp án B là lựa chọn đúng.' },
  53: { ansList: [2], exp: 'Đáp án C là lựa chọn đúng.' },
  54: { ansList: [0, 2], exp: 'Đáp án A và C là các đáp án đúng.' },
  55: { ansList: [1, 2], exp: 'Đáp án B và C là các đáp án đúng.' },
  56: { ansList: [2], exp: 'Cặp SAI: HTTP chạy trên nền TCP (port 80), không phải UDP.' },
  57: { ansList: [3], exp: 'Cổng dành riêng (Well-known ports) từ 0 đến 1023, gồm 1024 cổng (Đáp án D).' },
  58: { ansList: [1], exp: 'RDT 3.0 sử dụng timer (bộ đếm thời gian). Khi hết hạn timer (timeout) phía gửi sẽ tự động phát lại gói tin.' },
  59: { ansList: [3], exp: 'Kỹ thuật Pipelined cho phép bên gửi truyền nhiều gói tin liên tiếp mà không cần chờ ACK cho từng gói.' },
  60: { ansList: [3], exp: 'Go-Back-N phát lại từ gói bị mất trở đi: nếu pkt2 bị mất thì phía gửi phát lại từ pkt2, pkt3, pkt4, pkt5.' },
  61: { ansList: [2], exp: 'Kích thước đoạn dữ liệu tối đa của TCP là MSS (Maximum Segment Size).' },
  62: { ansList: [3], exp: 'Số thứ tự khởi tạo ISN (Initial Sequence Number) do hệ điều hành sinh ra bằng thuật toán ngẫu nhiên, không cố định.' },
  63: { ansList: [3], exp: 'Seq = 40 (lấy theo ACK nhận được), ACK = 50 + 30 = 80.' },
  64: { ansList: [2], exp: 'Gói SYN/ACK ở bước 2 của quá trình bắt tay 3 bước có cờ ACK=1 và SYN=1.' },
  65: { ansList: [1], exp: 'Kích thước dữ liệu trong segment = 110 - 90 = 20 bytes.' },
  66: { ansList: [1], exp: 'ACK = 200 có nghĩa bên nhận đã nhận đủ các byte đến 199 và mong đợi byte 200 tiếp theo.' },
  67: { ansList: [2], exp: 'ACK = Seq + Length = 92 + 8 = 100.' },
  68: { ansList: [0], exp: 'Dùng trung bình mũ nhiều mẫu gần nhất (EstimatedRTT) để ước lượng RTT mượt mà.' },
  69: { ansList: [1], exp: 'EstimatedRTT1 = 90. Mẫu 2 = 110. EstimatedRTT2 = 0.8 * 90 + 0.2 * 110 = 72 + 22 = 94 msec.' },
  70: { ansList: [1], exp: 'Timeout sớm: Bên gửi phát lại Seq=92 trong khi ACK=100 và 120 đang trên đường truyền về.' },
  71: { ansList: [1], exp: 'Khi xảy ra timeout, bên gửi phát lại gói bị timeout.' },
  72: { ansList: [1], exp: 'Gói SYN có Seq = ISN và cờ SYN = 1.' },
  73: { ansList: [1], exp: 'Header UDP gồm 4 trường (8 bytes): Source Port, Dest Port, Length, Checksum.' },
  74: { ansList: [0], exp: 'Trường Length trong UDP header chỉ độ dài toàn bộ UDP segment (gồm cả header + dữ liệu).' },
  75: { ansList: [0], exp: 'Checksum 16-bit thu được kết quả 00001001 11100010.' },
  76: { ansList: [1], exp: 'Sequence number của TCP là số thứ tự của byte đầu tiên trong trường dữ liệu của segment.' },
  77: { ansList: [2], exp: 'Sáu cờ TCP cổ điển gồm: SYN, ACK, PSH, RST, FIN, URG.' },
  78: { ansList: [3], exp: 'Segment thứ 2 có Seq = 121 + 580 = 701.' },
  79: { ansList: [2], exp: 'Do hai segment cuối bị mất nên bên nhận chỉ nhận đúng thứ tự đến byte 1280, liên tục gửi ACK = 1281 (121 + 2*580).' },
  80: { ansList: [2], exp: 'Tổng số sự kiện trong FSM rdt2.0 là 17.' },
  81: { ansList: [2], exp: 'rdt 2.2: FSM bên gửi chỉ dùng ACK với số thứ tự 0/1, không dùng NAK.' },
  82: { ansList: [2], exp: 'Ở bước 2 (SYN/ACK), trường ACK number có giá trị x + 1.' },
  83: { ansList: [3], exp: 'ACK number là số thứ tự byte kế tiếp mà bên nhận đang mong đợi.' },
  84: { ansList: [0], exp: 'Flags = 0x002 chỉ có cờ SYN = 1, ACK number = 0 (Gói yêu cầu kết nối SYN).' },
  85: { ansList: [3], exp: 'Flags = 0x012 có cả cờ SYN và ACK = 1 (Gói SYN/ACK).' },
  86: { ansList: [1], exp: 'Flags = 0x12 đại diện cho gói SYN/ACK.' },
  87: { ansList: [2], exp: 'Sau gói SYN/ACK, bên khởi tạo gửi gói ACK để hoàn tất bắt tay 3 bước.' },
  88: { ansList: [1], exp: 'SYN/ACK có ACK number = ISN + 1 = 8221823 => ISN = 8221822.' },
  89: { ansList: [2], exp: 'ACK = Seq của SYN/ACK + 1 = 1109645 + 1 = 1109646.' },
  90: { ansList: [1], exp: 'Giá trị Window (rwnd) = 8760 dùng cho điều khiển luồng (Flow control).' },
  91: { ansList: [0], exp: 'Chuyển mạch kênh thiết lập đường truyền vật lý riêng biệt.' },
  92: { ansList: [0], exp: 'Trùng với câu 91: Chuyển mạch kênh thiết lập đường truyền vật lý riêng biệt.' },
  93: { ansList: [2], exp: 'Cả A và B đều đúng cho kiến trúc Client/Server.' },
  94: { ansList: [1], exp: 'Mạng điểm-điểm nối từng cặp node theo hình học xác định.' },
  95: { ansList: [0], exp: 'Tổng thời gian truyền file = 400M/1000M + 400M/75M + 400M/30M + 400M/100M ≈ 23.07 s.' },
  96: { ansList: [2], exp: 'HTTP/1.1 mặc định kết nối bền vững. URL đầy đủ: www-net.cs.umass.edu/docs/index.html.' },
  97: { ansList: [2], exp: 'Seq gói 2 = 120 + 1000 = 1120.' },
  98: { ansList: [0], exp: 'Telnet cho phép đăng nhập và điều khiển máy tính từ xa.' },
  99: { ansList: [3], exp: 'ACK = 100 có nghĩa mong nhận dữ liệu bắt đầu từ byte 100.' },
  100: { ansList: [3], exp: 'Gói đầu tiên của quá trình bắt tay 3 bước có cờ SYN = 1.' },
  101: { ansList: [0], exp: 'Lượt t = 26.' },
  102: { ansList: [1], exp: 'Timeout xảy ra tại cwnd = 26 nên ssthresh mới = 26 / 2 = 13.' },
  103: { ansList: [3], exp: 'Tất cả đều đúng: Slow start xảy ra ở các lượt 1-4, 23-26, 29-31 (cwnd tăng gấp đôi).' },
  104: { ansList: [1], exp: 'Cộng dồn segment: lượt 5 gửi segment thứ 20.' },
  105: { ansList: [3], exp: 'Lượt t = 10.' },
  106: { ansList: [0], exp: 'Timeout tại cwnd = 16 (lượt 35) nên ssthresh = 16 / 2 = 8.' },
  107: { ansList: [3], exp: 'Gói yêu cầu kết nối đầu tiên có ACK = 0, SYN = 1.' },
  108: { ansList: [1], exp: 'Bản ghi NS chỉ định tên miền alpha.com được phân giải bởi máy chủ tên miền tương ứng.' },
  109: { ansList: [0], exp: 'Phát biểu SAI là A (Content-Length là 8347 chứ không phải 8327).' },
  110: { ansList: [3], exp: 'FTP dùng port 21 cho kết nối điều khiển và port 20 cho truyền dữ liệu.' },
  111: { ansList: [0], exp: 'Selective Repeat chỉ gửi lại duy nhất gói bị mất (Chỉ gửi lại pkt2).' },
  112: { ansList: [0], exp: 'Có 2 phát biểu đúng là (1) và (3).' },
  113: { ansList: [2], exp: 'Khi đối tượng không thay đổi, HTTP server trả về mã 304 Not Modified.' },
  114: { ansList: [3], exp: 'Cửa sổ gửi = min(RWnd, CWnd).' },
  115: { ansList: [1], exp: 'Vòng 5 đến 10 là giai đoạn Tránh tắc nghẽn (Congestion Avoidance).' },
  116: { ansList: [2], exp: 'Slow start dừng khi cwnd đạt 8 => ssthresh = 8.' },
  117: { ansList: [1], exp: 'Tại vòng 27, cwnd giảm từ 31 xuống khoảng 18.5 (tắc nghẽn).' },
  118: { ansList: [1], exp: 'cwnd rơi thẳng về 1 là dấu hiệu xảy ra Timeout.' },
  119: { ansList: [2], exp: '100 trang * 24 dòng * 80 ký tự * 8 bit = 1,536,000 bps = 1.536 Mbps.' },
  120: { ansList: [0], exp: 'Slow start: nhận mỗi ACK tăng cwnd lên 1 MSS. Sau 2 ACK: 4000 + 2*2000 = 8000 bytes.' },
  121: { ansList: [2], exp: 'Gói SYN segment có Seq = ISN và SYN = 1.' },
  122: { ansList: [0], exp: 'Truy vấn đệ quy (Recursive query) đẩy trách nhiệm phân giải tên miền cho server được hỏi.' },
  123: { ansList: [0], exp: 'Truy vấn đệ quy.' },
  124: { ansList: [3], exp: 'Tấn công từ chối dịch vụ phân tán DDoS.' },
  125: { ansList: [0], exp: 'Bên nhận nhận lại gói seq 0 trùng lặp nên gửi lại ACK (do bên gửi chưa nhận được ACK0 trước đó).' },
  126: { ansList: [1], exp: 'SYN bit của gói đầu tiên bằng 1.' },
  127: { ansList: [3], exp: 'Non-persistent: 1 trang cơ sở + 10 ảnh = 11 đối tượng * 2 RTT = 22 RTT.' },
  128: { ansList: [2], exp: 'Ứng dụng Audio/Video thời gian thực đòi hỏi băng thông và độ trễ tối thiểu.' },
  129: { ansList: [3], exp: 'Seq = 40, ACK = 80.' },
  130: { ansList: [1], exp: 'Trường ACK ở bước 2 là x + 1.' },
  131: { ansList: [0], exp: 'Web caches (Proxy) giúp giảm tải cho server.' },
  132: { ansList: [1], exp: 'Throughput = min(Rs, Rc, R/4) = min(20, 60, 50) = 20 Mbps.' },
  133: { ansList: [3], exp: 'Thời gian đáp ứng trung bình = 0.5 * 0.5s + 0.5 * 2s = 1.25 s.' },
  134: { ansList: [1], exp: 'Thứ tự lệnh SMTP: HELO, MAIL FROM, RCPT TO, DATA, QUIT.' },
  135: { ansList: [1], exp: 'Phương thức GET gửi dữ liệu biểu mẫu trên thanh địa chỉ URL.' },
  136: { ansList: [1], exp: 'Giai đoạn Slow Start: Round 1-6 và 23-26.' },
  137: { ansList: [2], exp: 'Giai đoạn Congestion Avoidance: Round 6-16 và 17-22.' },
  138: { ansList: [2], exp: 'Sau round 16, cwnd giảm một nửa do phát hiện 3 ACK trùng.' },
  139: { ansList: [0], exp: 'cwnd rơi về 1 sau round 22 do Timeout.' },
  140: { ansList: [3], exp: 'Tại cwnd = 42 xảy ra 3 ACK trùng => ssthresh = 42 / 2 = 21.' },
  141: { ansList: [1], exp: 'Cộng dồn segment: segment 70 nằm ở round 7.' },
  142: { ansList: [0], exp: 'TCP Reno bổ sung tính năng Fast Recovery so với TCP Tahoe.' },
  143: { ansList: [3], exp: 'cwnd = 4000 < ssthresh 8000 nên đang ở slow start. Sau 8 ACK, cwnd = 8000, ssthresh giữ 8000.' },
  144: { ansList: [1], exp: 'Non-persistent: 2 RTT cho HTML + 2 RTT cho 3 ảnh tải song song = 4 RTT.' },
  145: { ansList: [2], exp: 'DevRTT = 5.93, EstimatedRTT = 125.14 => Timeout = 125.14 + 4*5.93 = 148.85 ms.' },
  146: { ansList: [2], exp: 'Vị trí 3 chứa Datagram (Header Hn), thuộc tầng Network.' },
  147: { ansList: [0], exp: 'Cổng đích của gói B gửi về P1 là cổng của P1 (6465).' },
  148: { ansList: [2], exp: 'Go-Back-N dùng ACK tích lũy: ACK(4) xác nhận gói 1-4, bên gửi trượt cửa sổ và phát tiếp 5, 6, 7, 8, 9.' }
};

let count = 0;
qs.forEach(q => {
  if (updates[q.id]) {
    const u = updates[q.id];
    q.ansList = u.ansList;
    q.ans = u.ansList[0];
    if (u.exp) q.exp = u.exp;
    if (u.images) q.images = u.images;
    count++;
  }
});

console.log('Updated ' + count + ' questions.');

const updatedJs = 'const mttPdfQuestions = ' + JSON.stringify(qs, null, 2) + ';\n\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = mttPdfQuestions;\n}\n';
fs.writeFileSync('data_mtt_pdf.js', updatedJs, 'utf8');
console.log('Successfully wrote data_mtt_pdf.js');
