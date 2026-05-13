1. Nhóm bài tập Lọc, Phân nhóm và Tổng hợp cơ bản (GROUP BY, HAVING) Đây là nhóm bài tập kiểm tra xem bạn có hiểu cách tính toán theo nhóm và điều kiện lọc trên nhóm hay không.
Tính tổng/trung bình theo nhóm: Tìm mức lương trung bình của từng phòng ban, và chỉ xuất ra những phòng ban có mức lương trung bình lớn hơn 20 triệu
.
So sánh với số liệu tổng thể: Tìm những nhân viên có mức lương cao hơn mức lương trung bình của toàn bộ công ty (Bài này yêu cầu dùng Subquery để tính trung bình công ty trước, rồi làm điều kiện WHERE)
.
Đếm số lượng thực tế: Đếm số lượng khách hàng mua hàng nhiều hơn 5 lần, hoặc số lượng người dùng có ít nhất 1 lượt bình luận trong 30 ngày qua
.
2. Nhóm bài tập xử lý kết nối dữ liệu và Anti-JOIN Nhóm này đánh giá khả năng xử lý các tập hợp dữ liệu lồng nhau, nhận diện đúng phép JOIN cần sử dụng.
Khách hàng chưa từng tương tác: Tìm những khách hàng chưa từng đặt bất kỳ đơn hàng nào
. (Mẹo giải: Dùng LEFT JOIN với bảng đơn hàng và tìm các điều kiện WHERE order_id IS NULL hoặc dùng NOT EXISTS
).
Giao của 2 tập hợp (Intersection): Lấy danh sách người dùng đã thực hiện ĐỒNG THỜI hai hành động (Ví dụ: Khách hàng vừa gửi yêu cầu 'Vay mua nhà' VÀ 'Vay đi học')
. Rất nhiều ứng viên sai lầm khi dùng toán tử OR hoặc hàm IN thông thường. Cách giải chuẩn là dùng INTERSECT giữa 2 câu query, hoặc dùng GROUP BY kết hợp HAVING COUNT(DISTINCT type) = 2
.
Loại trừ (Exclusion): Phân tích hiệu quả chiến dịch: Tìm những khách hàng có mua hàng ở những ngày sau đó, nhưng loại trừ những người chỉ mua đúng những món đồ giống hệt ngày đầu tiên
.
3. Nhóm bài tập sử dụng Window Functions (Hàm cửa sổ) - Xuất hiện 90% trong phỏng vấn Data Nếu bạn ứng tuyển Data Analyst hoặc Data Engineer, chắc chắn sẽ có câu hỏi về Window Functions (RANK(), DENSE_RANK(), ROW_NUMBER(), LEAD(), LAG()).
Tìm mức lương cao thứ 2: Viết câu lệnh truy vấn để lấy mức lương cao thứ hai trong công ty (Thường dùng DENSE_RANK())
.
Top N theo nhóm (Top-per-group): Tìm 3 khách hàng có tổng chi tiêu cao nhất mỗi ngày hoặc Top 3 sản phẩm có doanh thu cao nhất trong mỗi danh mục
. (Mẹo giải: Phải dùng RANK() thay vì ROW_NUMBER() để không bỏ sót những người hoặc sản phẩm có doanh thu bằng nhau)
.
Tính doanh thu cộng dồn (Running Total) & Trung bình trượt (Moving Average): Tính tổng doanh thu cộng dồn của cửa hàng qua từng ngày, hoặc tính trung bình trượt doanh thu trong 3 ngày hoặc 7 ngày gần nhất
. (Sử dụng cấu trúc SUM(amount) OVER (ORDER BY date) hoặc ROWS 3 PRECEDING
).
4. Nhóm bài tập Phân tích Dữ liệu Chuỗi thời gian (Time-series) & Session
Tính thời lượng Session: Cho một bảng log hệ thống chứa các sự kiện page_load (tải trang) và page_exit (thoát trang). Hãy tính thời lượng truy cập trung bình mỗi ngày của mỗi người dùng bằng cách lấy page_load muộn nhất trừ đi page_exit sớm nhất trong cùng một ngày
.
So sánh hiện tại và lịch sử: Cho một bảng chứa đánh giá các bộ phim của các diễn viên. Hãy tính sự chênh lệch giữa điểm đánh giá của bộ phim mới nhất so với trung bình điểm của tất cả các bộ phim trước đó
. (Mẹo giải: Dùng ROW_NUMBER() OVER (ORDER BY release_date DESC) để gắn nhãn 1 cho phim mới nhất, các phim nhãn > 1 là phim lịch sử, sau đó tính toán và JOIN lại)
.
5. Nhóm bài tập biến đổi Cấu trúc dữ liệu & Pivot
Lập biểu đồ phân phối (Histogram): Lập bảng phân phối số lượng bình luận trong tháng 1/2020. Đầu ra cần hiển thị: Có bao nhiêu người dùng viết 1 bình luận, bao nhiêu người viết 2 bình luận...
. (Mẹo giải: Bạn phải gom nhóm 2 lần – bước 1 là đếm số bình luận trên từng ID, bước 2 là đếm số lượng ID trên từng mức bình luận)
.
Xoay dữ liệu (Pivot): Chuyển đổi dữ liệu từ dạng Hàng ngang (Rows) sang dạng Cột (Columns) sử dụng câu lệnh CASE WHEN hoặc tính năng Pivot có sẵn của SQL
.
💡 Các "bẫy" bạn cần lưu ý khi viết code trong lúc phỏng vấn:
Dùng sai Aggregation và Window Functions: Nhớ rằng các hàm SUM(), MAX() kết hợp GROUP BY sẽ gộp và làm giảm số dòng, trong khi Window Function (OVER()) sẽ giữ nguyên số lượng dòng và thêm một cột tính toán mới
.
Sử dụng DISTINCT để sửa lỗi nhân bản dữ liệu: Khi kết quả ra bị lặp dòng (duplicate), các ứng viên non kinh nghiệm thường dùng DISTINCT như một "băng keo cá nhân" để che giấu. Giám khảo sẽ đánh giá cao nếu bạn kiểm tra lại khoá JOIN (join keys) để giải quyết tận gốc nguyên nhân gây lặp dòng
.
Lọc sai thứ tự: Hãy nhớ rõ thứ tự thực thi của SQL, mệnh đề WHERE lọc trước khi gom nhóm, và HAVING dùng để lọc sau khi đã gom nhóm. Bạn không thể dùng cột ảo của SELECT (Alias) cho WHERE được
.