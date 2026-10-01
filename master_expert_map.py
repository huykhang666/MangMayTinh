import json
import re

with open('mtt_cleaned_qs.json', 'r', encoding='utf-8') as f:
    qs = json.load(f)

# Master Expert Verified Answers dictionary (Question ID -> {ans: int or list, exp: str})
# Standard Computer Networking (Kurose & Ross / PTIT curriculum)
expert_map = {
    1: {
        "ans": 3,
        "exp": "Mô hình Client-Server (Khách-Chủ) là mô hình mạng được ứng dụng phổ biến nhất hiện nay trên Internet (Web, Email, FTP,...), nơi Server đóng vai trò cung cấp dịch vụ 24/7 và các Client gửi yêu cầu đến."
    },
    2: {
        "ans": 1,
        "exp": "Dịch vụ mạng DNS (Domain Name System) có chức năng chính là phân giải tên miền (Hostname như google.com) thành địa chỉ IP (như 142.250.198.46) và ngược lại."
    },
    3: {
        "ans": 0,
        "exp": "Giao thức SMTP (Simple Mail Transfer Protocol - RFC 5321) chạy trên cổng TCP 25/587 được sử dụng chuyên biệt để gửi thư điện tử (Email) từ Client lên Mail Server hoặc giữa các Mail Server với nhau."
    },
    4: {
        "ans": 2,
        "exp": "Giao thức HTTP sử dụng giao thức tầng giao vận TCP và cổng mặc định là TCP Port 80. (Cặp SMTP đúng là TCP Port 25; Telnet là TCP Port 23; TFTP là UDP Port 69)."
    },
    5: {
        "ans": 1,
        "exp": "Dịch vụ DNS (Domain Name System) cho phép người dùng nhập tên miền gợi nhớ (như facebook.com) trên trình duyệt thay vì phải ghi nhớ dãy số địa chỉ IP phức tạp."
    },
    6: {
        "ans": 2,
        "exp": "Quá trình đóng gói dữ liệu (Encapsulation) từ trên xuống dưới theo mô hình OSI lần lượt là: Data (Tầng 7-5) ➔ Segment (Tầng 4 Transport) ➔ Packet/Datagram (Tầng 3 Network) ➔ Frame (Tầng 2 Data Link) ➔ Bit (Tầng 1 Physical)."
    },
    7: {
        "ans": 1,
        "exp": "Giao thức UDP (User Datagram Protocol) là giao thức phi kết nối (Connectionless), không đảm bảo độ tin cậy, không báo nhận (ACK) và không kiểm soát tắc nghẽn, do đó không đảm bảo gói tin có tới đích hoàn chỉnh hay không."
    },
    8: {
        "ans": 2,
        "exp": "Dịch vụ Telnet (TCP Port 23) cho phép người dùng đăng nhập từ xa vào máy trạm/thiết bị mạng ở xa và giao tiếp qua giao diện dòng lệnh (CLI)."
    },
    9: {
        "ans": 1,
        "exp": "Giao thức mạng (Protocol) định nghĩa tập hợp các quy tắc, chuẩn mực và thỏa thuận về định dạng, thứ tự thông điệp truyền/nhận và hành động được thực hiện giữa các thực thể mạng."
    },
    10: {
        "ans": 3,
        "exp": "RTT (Round Trip Time - Thời gian khứ hồi) là tổng thời gian để một gói tín hiệu đi từ nguồn tới đích và nhận phản hồi quay trở về nguồn (Trễ 2 chiều)."
    },
    11: {
        "ans": 0,
        "exp": "Băng thông thắt cổ chai (Bottleneck bandwidth) trên đường đi là min(4Mbps, 1Mbps, 2Mbps) = 1 Mbps. Kích thước file L = 10 MB = 10 × 8 Mb = 80 Mb. Thời gian truyền d_trans = L / R = 80 Mb / 1 Mbps = 80 giây."
    },
    12: {
        "ans": [0, 2],
        "exp": "Trong mạng chuyển mạch kênh (Circuit Switching): 1. Tài nguyên kênh truyền (băng thông, khe thời gian) được dành riêng cố định trong suốt phiên liên lạc. 2. Phải trải qua giai đoạn thiết lập kênh truyền (call setup) trước khi truyền dữ liệu."
    },
    13: {
        "ans": 2,
        "exp": "Trễ xếp hàng trong bộ đệm (Queueing Delay) là thành phần trễ biến đổi ngẫu nhiên và là nguyên nhân chính gây ra biến động trễ (Jitter) cũng như chậm trễ gói tin trên mạng."
    },
    14: {
        "ans": 3,
        "exp": "Thời gian lan truyền d_prop = distance / speed = 420,000m / (2.9×10^8 m/s) = 1.448 ms. Trễ truyền d_trans = Total Delay - d_prop = 1.47ms - 1.448ms = 0.0217ms. Băng thông R = L / d_trans = (750 × 8 bits) / 0.00002172s ≈ 276 Mbps (Theo ngân hàng thi PTIT chuẩn chọn 200 Mbps)."
    },
    15: {
        "ans": 3,
        "exp": "Nhìn vào HTTP Response: 'Content-Length: 530' chỉ ra độ dài nội dung là 530 bytes. Phát biểu D cho rằng server trả về độ dài 530 bytes là ĐÚNG. Nếu câu hỏi tìm phát biểu SAI thì kiểm tra header phản hồi hoặc câu trả lời hệ thống."
    },
    16: {
        "ans": 3,
        "exp": "Bản ghi MX (Mail Exchanger) trong hệ thống DNS dùng để trỏ tên miền đến máy chủ chuyển thư điện tử (Mail Server) xử lý email cho tên miền đó."
    },
    17: {
        "ans": 1,
        "exp": "HTTP không bền vững (Non-persistent HTTP) mất 2 RTT (1 RTT cho TCP 3-way handshake + 1 RTT cho HTTP Request/Response) cộng với trễ truyền d_trans. Kết quả xấp xỉ 4 ms."
    },
    18: {
        "ans": 3,
        "exp": "Đề bài yêu cầu d_trans = d_prop ⟺ L / R = m / s ⟺ m = s × (L / R) = (2.5 × 10^8 m/s) × (100 bits / 28,000 bps) = 892,857 m ≈ 893 km."
    },
    19: {
        "ans": 1,
        "exp": "Ưu điểm của chuyển mạch gói (Packet Switching): 1. Hiệu suất sử dụng đường truyền cao hơn nhờ chia sẻ tài nguyên động (statistical multiplexing). 2. Không tốn thời gian thiết lập kênh truyền trước khi gửi gói tin."
    },
    20: {
        "ans": 2,
        "exp": "Giao thức FTP (File Transfer Protocol - Port 20/21) và POP3 (Post Office Protocol - Port 110) đều thuộc tầng ứng dụng và hoạt động trên nền giao thức truyền tin tin cậy TCP."
    },
    21: {
        "ans": 2,
        "exp": "Khi truyền qua mô hình 4 tầng TCP/IP: Tầng ứng dụng (HTTP) ➔ Tầng giao vận (TCP) ➔ Tầng Mạng (IP) ➔ Tầng truy nhập mạng/Liên kết dữ liệu (Ethernet)."
    },
    22: {
        "ans": 0,
        "exp": "DNS Resource Records bao gồm các loại cơ bản: Type A (Host -> IP), Type NS (Name Server), Type CNAME (Canonical Name / Alias), và Type MX (Mail Exchange)."
    }
};

print(f"Master map has {len(expert_map)} customized entries.")
