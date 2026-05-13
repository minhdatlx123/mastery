1. Tổng quan cơ bản về SQL và Cơ sở dữ liệu (Database)
Khái niệm cơ bản: SQL (Structured Query Language) là ngôn ngữ dùng để tạo, truy xuất, cập nhật và xóa dữ liệu
.
Phân loại Cơ sở dữ liệu: CSDL Quan hệ (Relational) lưu dữ liệu dưới dạng bảng, hàng và cột (giống Excel); CSDL Phi quan hệ (Non-relational) lưu dưới định dạng JSON, cặp khóa-giá trị, v.v.
.
Hệ quản trị CSDL (DBMS): Cần phần mềm như MySQL Workbench để viết và chạy các câu lệnh SQL
.
2. Thao tác với Cơ sở dữ liệu (Database)
Khởi tạo & Quản lý: Lệnh CREATE DATABASE tạo thư mục chứa dữ liệu
. Sử dụng USE để chọn cơ sở dữ liệu làm việc hiện tại
. Lệnh DROP DATABASE để xóa toàn bộ
.
Tùy chỉnh (Alter): Lệnh ALTER DATABASE có thể dùng để thiết lập CSDL sang chế độ READ ONLY (chỉ đọc), ngăn chặn mọi sửa đổi trái phép
.
3. Quản lý Bảng (Table) và Kiểu Dữ Liệu
Tạo bảng (CREATE TABLE): Bảng chứa hàng và cột. Mỗi cột cần được xác định kiểu dữ liệu như INT (số nguyên), VARCHAR (chuỗi văn bản giới hạn số ký tự), DECIMAL (số thập phân, ví dụ lưu tiền tệ), DATE (ngày) hoặc DATETIME (ngày giờ)
.
Thao tác với bảng: Lệnh RENAME TABLE dùng đổi tên bảng
. Lệnh DROP TABLE dùng xóa bảng
.
Thay đổi cấu trúc bảng (ALTER TABLE): Có thể thêm cột (ADD), đổi tên cột (RENAME COLUMN), thay đổi kiểu dữ liệu (MODIFY COLUMN), xóa cột (DROP COLUMN), hoặc dời vị trí cột bằng từ khóa FIRST và AFTER
.
4. Thao tác Dữ Liệu (DML - Data Manipulation Language)
Thêm dữ liệu (INSERT INTO): Nhập giá trị theo thứ tự vào các cột cụ thể. Có thể thêm một dòng, nhiều dòng cùng lúc, hoặc bỏ qua một vài cột (chỉ thêm dữ liệu vào cột được chỉ định)
.
Truy vấn dữ liệu (SELECT): Dùng * để lấy mọi cột hoặc chỉ định tên các cột cụ thể. Dùng mệnh đề WHERE để lọc dữ liệu theo điều kiện (ví dụ: =, >, <=, !=, IS NULL, IS NOT NULL)
.
Cập nhật dữ liệu (UPDATE): Đổi giá trị của một hoặc nhiều cột. Lưu ý quan trọng: Luôn đi kèm mệnh đề WHERE, nếu không toàn bộ dữ liệu trong bảng sẽ bị thay đổi
.
Xóa dữ liệu (DELETE): Dùng để xóa các hàng thỏa mãn điều kiện WHERE. Nếu quên WHERE, toàn bộ dữ liệu sẽ biến mất
.
5. Quản lý Giao Dịch (Transactions)
AUTO COMMIT: MySQL mặc định tự động lưu thay đổi. Nếu tắt chế độ này, thao tác sẽ được đưa vào bộ đệm
.
COMMIT & ROLLBACK: Khi tắt AUTO COMMIT, bạn phải dùng COMMIT để lưu thủ công tạo một "savepoint". Nếu có lỗi (như vô tình xóa sai dữ liệu), lệnh ROLLBACK sẽ khôi phục lại dữ liệu ở savepoint gần nhất
.
6. Thời gian & Ngày tháng
Cung cấp các hàm có sẵn lấy thời gian thực như CURRENT_DATE() (Ngày hiện tại), CURRENT_TIME() (Giờ hiện tại), và NOW() (Kết hợp cả Ngày và Giờ)
.
7. Các Ràng Buộc Dữ Liệu (Constraints)
UNIQUE: Đảm bảo mọi giá trị nhập vào một cột đều phải khác biệt, không được trùng lặp
.
NOT NULL: Ép buộc cột phải luôn có giá trị, không được để trống (null)
.
CHECK: Giới hạn dữ liệu nhập vào phải thỏa mãn điều kiện logic cụ thể (ví dụ: lương >= 10)
.
DEFAULT: Tự động điền một giá trị mặc định (như 0 hoặc NOW()) nếu người dùng không nhập gì cả
.
PRIMARY KEY (Khóa chính): Số định danh độc nhất cho mỗi hàng (bao gồm tính chất của cả UNIQUE và NOT NULL). Mỗi bảng chỉ có một khóa chính duy nhất
.
AUTO INCREMENT: Cấu hình cho Khóa chính tự động tăng giá trị thêm 1 (hoặc bắt đầu từ một số cụ thể) với mỗi bản ghi mới thêm vào
.
FOREIGN KEY (Khóa ngoại): Khóa chính của bảng này được mang sang bảng khác để tạo lập liên kết (Relationships)
.
ON DELETE: Khi xóa dữ liệu ở bảng cha, Khóa ngoại cung cấp 2 chế độ: ON DELETE SET NULL (đổi giá trị con thành rỗng) hoặc ON DELETE CASCADE (tự động xóa toàn bộ hàng dữ liệu con liên kết)
.
8. Kết Nối Các Bảng (Joins)
INNER JOIN: Kết hợp hàng từ 2 bảng, chỉ lấy những dữ liệu có giá trị đối chiếu (khóa) khớp nhau
.
LEFT JOIN: Lấy TOÀN BỘ dữ liệu của bảng bên Trái, nếu bảng Phải không có dữ liệu khớp thì điền null
.
RIGHT JOIN: Tương tự, lấy toàn bộ dữ liệu bảng bên Phải kèm theo dữ liệu khớp từ bảng bên Trái
.
SELF JOIN: Kết hợp một bảng với một bản sao của chính nó (đặt tên Alias khác nhau). Thường dùng để hiển thị dữ liệu phân cấp (Ví dụ: Danh sách nhân viên báo cáo cho người quản lý nào trong cùng một bảng)
.
9. Hàm (Functions) & Phân tích cơ bản
Sử dụng các hàm tích hợp sẵn như COUNT (đếm số hàng), MAX (giá trị lớn nhất), MIN (nhỏ nhất), AVG (trung bình), và SUM (tính tổng)
.
Hàm CONCAT dùng để nối các cột văn bản lại với nhau (ví dụ: Nối Họ và Tên)
.
Dùng từ khóa AS để đặt tên Bí danh (Alias) cho các cột được tính toán cho dễ đọc
.
10. Toán Tử Logic (Logical Operators) & Mẫu Tìm Kiếm (Wildcards)
AND (Thỏa mãn tất cả điều kiện), OR (Chỉ cần thỏa mãn 1 điều kiện), NOT (Đảo ngược điều kiện)
.
BETWEEN: Kiểm tra giá trị nằm trong một khoảng nhất định (rất hữu ích cho ngày tháng)
.
IN: Kiểm tra giá trị có nằm trong tập hợp các số/chữ nhất định hay không
.
Ký tự đại diện (Wildcards) với LIKE: Ký hiệu % thay thế cho một hoặc nhiều ký tự bất kỳ. Ký hiệu _ thay thế cho ĐÚNG MỘT ký tự bất kỳ. Cực kỳ hiệu quả khi tìm kiếm dữ liệu chứa từ khóa
.
11. Trình Bày & Lọc Dữ Liệu Nâng Cao
ORDER BY: Sắp xếp các cột theo thứ tự Tăng dần (ASC) hoặc Giảm dần (DESC). Có thể sắp xếp dựa trên nhiều cột tuần tự
.
LIMIT & OFFSET: Giới hạn số lượng hàng trả về. Sử dụng biến OFFSET để hỗ trợ phân trang (Pagination) trên website
.
UNION & UNION ALL: Gom kết quả từ nhiều câu lệnh SELECT (cần có cùng số lượng cột). Mặc định UNION sẽ loại bỏ dòng trùng lặp, còn UNION ALL giữ lại toàn bộ dữ liệu
.
12. Nhóm Dữ Liệu (Group By)
GROUP BY: Nhóm các hàng có chung giá trị (thường kết hợp với SUM, COUNT...). Lưu ý: Phải dùng mệnh đề HAVING để lọc điều kiện cho các nhóm này thay vì dùng mệnh đề WHERE
.
WITH ROLLUP: Tính năng mở rộng của Group By giúp chèn thêm một hàng ở dưới cùng để hiển thị "Tổng cộng" (Grand Total)
.
13. Tối Ưu, Lưu Trữ & Tự Động Hóa Nâng Cao
Views (Bảng Ảo): Là một đối tượng như bảng bình thường nhưng được tạo từ một truy vấn ảo. Giúp giấu dữ liệu gốc nhạy cảm, không phải lập lại code và dữ liệu View luôn tự cập nhật khi bảng gốc thay đổi
.
Indexes (Chỉ mục - B-Tree): Tạo chỉ mục cho các cột thường xuyên được tìm kiếm. Ưu điểm: Tốc độ truy vấn (SELECT) nhanh hơn rất nhiều khi dữ liệu lớn. Nhược điểm: Tốc độ Cập nhật (UPDATE, INSERT) sẽ bị chậm lại
.
Subqueries (Truy vấn lồng): Cú pháp đưa một câu lệnh SELECT làm đầu vào cho một câu lệnh SELECT bên ngoài (đặt trong dấu ngoặc đơn), dùng cho các thao tác xử lý cần nhiều bước tính toán
.
Stored Procedures (Thủ tục lưu trữ): Lưu trữ một đoạn mã SQL phức tạp vào database để có thể tái sử dụng dễ dàng bằng lệnh CALL. Cho phép truyền tham số truyền vào bằng từ khóa IN. Yêu cầu dùng biến DELIMITER (như $$) để đóng gói khối code tạm thời
.
Triggers (Trình kích hoạt): Đây là mã SQL tự động kích hoạt khi có tác động (INSERT, UPDATE, DELETE) thực thi trên một bảng. Cung cấp các nhãn thời gian BEFORE (Trước) hoặc AFTER (Sau). Người dùng kết hợp các toán tử tham chiếu NEW. (Dữ liệu mới sắp nạp) và OLD. (Dữ liệu cũ sắp bị xóa/đổi) để tạo ra các logic tự động hóa (Ví dụ: Lưu vết log, tự đồng bộ tổng chi phí khi thay lương của 1 nhân viên)
.