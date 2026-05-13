import type { CourseModule } from '../types';

export const courseData: CourseModule[] = [
  // --- BEGINNER MODULES ---
  {
    id: 1, level: "beginner", title: "1. Kiến thức nền tảng (Database)",
    sections: [
      { type: 'heading', content: 'Tổng quan về Cơ sở dữ liệu và SQL' },
      { type: 'text', content: 'SQL (Structured Query Language) là ngôn ngữ lập trình tiêu chuẩn toàn cầu, được thiết kế đặc biệt để quản lý, lưu trữ và thao tác với dữ liệu trong Hệ quản trị cơ sở dữ liệu quan hệ (RDBMS - Relational Database Management System).' },
      { type: 'diagram', diagramType: 'database', title: 'Mô hình Hệ quản trị Cơ sở dữ liệu Quan hệ (RDBMS)' },
      { type: 'subheading', content: 'Bản chất của CSDL Quan hệ' },
      { type: 'text', content: 'Khác với các hệ thống NoSQL (như MongoDB lưu dữ liệu dạng JSON), cơ sở dữ liệu quan hệ như MySQL, PostgreSQL, SQL Server lưu trữ dữ liệu dưới dạng các bảng (Tables) hai chiều. Mỗi bảng bao gồm Hàng (Rows/Records - đại diện cho một bản ghi) và Cột (Columns/Fields - đại diện cho các thuộc tính của bản ghi).' },
      { type: 'subheading', content: 'Mô hình C.R.U.D cốt lõi' },
      { type: 'note', content: 'Bất kỳ ứng dụng hay phần mềm nào trên thế giới (Facebook, Shopee, App Ngân hàng) đều xoay quanh 4 thao tác dữ liệu cốt lõi gọi là C.R.U.D:\n\n• Create (Tạo mới): Lệnh INSERT.\n• Retrieve (Truy xuất): Lệnh SELECT (Đọc dữ liệu).\n• Update (Cập nhật): Lệnh UPDATE.\n• Delete (Xóa bỏ): Lệnh DELETE.' },
      { type: 'practice', instruction: 'Hệ thống DBMS giả lập này đang chạy ngầm nhiều Database. Hãy chạy lệnh dưới đây để hiển thị danh sách chúng:', query: 'SHOW DATABASES;' }
    ],
    quiz: [
      { question: "Mô hình Cơ sở dữ liệu nào lưu trữ dữ liệu dưới dạng Bảng (Table) có Hàng và Cột chặt chẽ?", options: ["Cơ sở dữ liệu Phi quan hệ (NoSQL)", "Cơ sở dữ liệu Quan hệ (Relational Database)", "Cơ sở dữ liệu Đồ thị (Graph DB)"], answer: 1 },
      { question: "Chữ 'R' trong khái niệm CRUD đại diện cho thao tác nào?", options: ["Remove (Xóa)", "Retrieve / Read (Truy xuất / Đọc)", "Refresh (Làm mới)"], answer: 1 }
    ]
  },
  {
    id: 2, level: "beginner", title: "2. Quản lý Cấu trúc (DDL)",
    sections: [
      { type: 'heading', content: 'Ngôn ngữ Định nghĩa Dữ liệu (DDL)' },
      { type: 'text', content: 'DDL (Data Definition Language) bao gồm các lệnh dùng để định nghĩa hoặc thay đổi "BỘ KHUNG" (Schema) của cơ sở dữ liệu. Nó không tương tác với dữ liệu chi tiết bên trong bảng, mà thao tác với chính bản thân Database hoặc Bảng đó.' },
      { type: 'diagram', diagramType: 'ddl', title: 'Luồng hoạt động của nhóm lệnh cấu trúc DDL' },
      { type: 'subheading', content: 'Các kiểu dữ liệu (Data Types) nền tảng' },
      { type: 'text', content: 'Mỗi cột trong bảng SQL bắt buộc phải được khai báo một kiểu dữ liệu cụ thể. Việc này giúp tối ưu bộ nhớ và tránh lỗi logic (Ví dụ: Không thể đem chữ cái đi tính tổng).' },
      { type: 'note', content: 'Các kiểu dữ liệu phổ biến nhất:\n1. INT: Số nguyên (dùng cho ID, số lượng).\n2. DECIMAL(M, D): Số thập phân chính xác cao. Dùng cho Tiền tệ. Ví dụ DECIMAL(10,2) lưu tối đa 10 chữ số, trong đó có 2 chữ số sau dấu phẩy.\n3. VARCHAR(n): Chuỗi văn bản có độ dài linh hoạt tối đa n ký tự (Dùng cho Tên, Email).\n4. DATE / DATETIME: Lưu trữ ngày tháng và thời gian.' },
      { type: 'practice', instruction: 'Thử tạo một cấu trúc bảng nhân viên (employees) với các kiểu dữ liệu chuẩn:', query: 'CREATE TABLE employees (\n  emp_id INT,\n  first_name VARCHAR(50),\n  hourly_pay DECIMAL(5,2)\n);' },
      { type: 'subheading', content: 'ALTER và DROP' },
      { type: 'text', content: 'Lệnh ALTER TABLE dùng để sửa đổi cấu trúc bảng đang tồn tại (Thêm cột, Xóa cột, Đổi kiểu dữ liệu). Lệnh DROP TABLE sẽ "xóa sổ" hoàn toàn bảng đó khỏi Database (Cực kỳ nguy hiểm).' }
    ],
    quiz: [
      { question: "Nhóm lệnh nào sau đây KHÔNG dùng để thao tác với bộ khung (Schema) dữ liệu?", options: ["CREATE", "ALTER", "UPDATE"], answer: 2 },
      { question: "Kiểu dữ liệu nào được khuyến nghị để lưu trữ Tiền tệ (nhằm tránh sai số thập phân)?", options: ["FLOAT", "VARCHAR", "DECIMAL"], answer: 2 },
      { question: "Lệnh nào dùng để XÓA hoàn toàn một bảng khỏi Database (cả cấu trúc lẫn dữ liệu)?", options: ["DELETE TABLE", "REMOVE TABLE", "DROP TABLE"], answer: 2 }
    ]
  },
  {
    id: 3, level: "beginner", title: "3. Thao tác với Dữ liệu (DML)",
    sections: [
      { type: 'heading', content: 'Ngôn ngữ Thao tác Dữ liệu (DML)' },
      { type: 'text', content: 'Khác với DDL, DML (Data Manipulation Language) là nhóm lệnh dùng để làm việc trực tiếp với dữ liệu THỰC TẾ (các bản ghi/hàng) nằm bên trong các bảng. Đây chính là nhóm lệnh mà bạn sẽ sử dụng 90% thời gian khi làm việc.' },
      { type: 'diagram', diagramType: 'dml', title: 'Hoạt động của các lệnh DML trên dòng dữ liệu' },
      { type: 'subheading', content: 'Cú pháp Thêm và Lấy Dữ Liệu' },
      { type: 'text', content: 'Lệnh INSERT INTO cho phép chèn một hoặc nhiều dòng cùng lúc. Khi chèn nhiều dòng, chỉ cần phân cách các cụm giá trị (values) bằng dấu phẩy, giúp hệ thống tăng tốc độ xử lý so với chèn từng dòng lẻ tẻ.' },
      { type: 'practice', instruction: 'Thực hành chèn 2 nhân viên mới vào bảng employees cùng lúc:', query: "INSERT INTO employees (emp_id, first_name, hourly_pay) \nVALUES \n(1, 'Eugene', 25.50),\n(2, 'Squidward', 15.00);" },
      { type: 'subheading', content: 'Rủi ro của UPDATE và DELETE' },
      { type: 'text', content: 'Mệnh đề WHERE đóng vai trò như một màng lọc. Nếu bạn chạy câu lệnh UPDATE hoặc DELETE mà QUÊN ghi điều kiện WHERE, hệ thống sẽ mặc định bạn muốn áp dụng hành động đó cho TOÀN BỘ dữ liệu trong bảng.' },
      { type: 'note', content: '🔥 Cảnh báo Thảm Họa Thực Tế:\nCâu lệnh `DELETE FROM employees;` sẽ xóa sạch nhân sự của cả công ty. \nĐể an toàn, luôn viết mệnh đề WHERE trước (VD: `WHERE emp_id = 5`), sau đó mới viết lệnh thao tác lên trên.' },
      { type: 'practice', instruction: 'Cập nhật lại mức lương cho đúng một nhân viên có ID = 1:', query: "UPDATE employees \nSET hourly_pay = 30.00 \nWHERE emp_id = 1;" }
    ],
    quiz: [
      { question: "Điều tồi tệ gì sẽ xảy ra nếu bạn chạy lệnh: `UPDATE users SET status = 'banned';` ?", options: ["Hệ thống báo lỗi cú pháp do thiếu WHERE", "Chỉ user đầu tiên trong bảng bị khóa", "Tất cả user trong toàn bộ hệ thống đều bị khóa tài khoản"], answer: 2 },
      { question: "Lệnh nào dùng để chèn nhiều dòng dữ liệu cùng lúc vào bảng?", options: ["ADD INTO ... VALUES", "INSERT INTO ... VALUES (row1), (row2)", "PUSH INTO ... VALUES"], answer: 1 },
      { question: "Dùng ký tự gì trong SELECT để lấy TẤT CẢ các cột của bảng?", options: ["ALL", "@", "*"], answer: 2 }
    ]
  },
  {
    id: 4, level: "beginner", title: "4. Ràng buộc (Constraints) & Khóa",
    sections: [
      { type: 'heading', content: 'Thiết lập Luật lệ cho Dữ liệu' },
      { type: 'text', content: 'Một cơ sở dữ liệu nếu không có "luật lệ" sẽ nhanh chóng trở thành bãi rác thông tin (Ví dụ: Tuổi bị nhập là số âm, số điện thoại bị trùng lặp). Ràng buộc (Constraints) là hàng rào bảo vệ tính TOÀN VẸN của dữ liệu.' },
      { type: 'subheading', content: 'Các loại Ràng buộc Phổ biến' },
      { type: 'text', content: '• NOT NULL: Bắt buộc người dùng phải nhập dữ liệu vào cột này.\n• UNIQUE: Đảm bảo mọi giá trị trong cột đều là duy nhất (Ví dụ: Email, CCCD).\n• DEFAULT: Tự động gán một giá trị cho trước nếu người dùng để trống.\n• CHECK: Giới hạn điều kiện logic (Ví dụ: `CHECK (age >= 18)`).' },
      { type: 'diagram', diagramType: 'keys', title: 'Mối quan hệ kiến trúc giữa Khóa Chính (PK) và Khóa Ngoại (FK)' },
      { type: 'subheading', content: 'Khóa Chính (Primary Key) & Khóa Ngoại (Foreign Key)' },
      { type: 'note', content: '🔑 PRIMARY KEY (Khóa chính): Là "Căn cước công dân" của mỗi dòng. Nó tự động kế thừa đặc tính của NOT NULL và UNIQUE. Không có 2 dòng nào được trùng Khóa chính.\n\n🔗 FOREIGN KEY (Khóa ngoại): Là linh hồn của CSDL Quan hệ. Nó tạo một sợi dây liên kết từ bảng này sang Khóa chính của bảng khác. Việc này ngăn chặn "dữ liệu mồ côi" (Ví dụ: Không thể chèn điểm cho một ID Sinh viên không tồn tại trong bảng Sinh viên).' },
      { type: 'practice', instruction: 'Sử dụng lệnh ALTER để biến cột emp_id thành Khóa chính của bảng:', query: "ALTER TABLE employees \nADD PRIMARY KEY (emp_id);" }
    ],
    quiz: [
      { question: "Ràng buộc (Constraint) nào giúp đảm bảo rằng cột 'Số Điện Thoại' không bao giờ bị người dùng nhập trùng lặp?", options: ["CHECK", "NOT NULL", "UNIQUE"], answer: 2 },
      { question: "Primary Key (Khóa chính) về bản chất là sự kết hợp của 2 ràng buộc nào?", options: ["NOT NULL và UNIQUE", "UNIQUE và DEFAULT", "NOT NULL và CHECK"], answer: 0 },
      { question: "Khi xóa dữ liệu ở bảng cha, chế độ ON DELETE CASCADE sẽ làm gì với bảng con?", options: ["Đặt giá trị khóa ngoại thành NULL", "Tự động xóa toàn bộ dòng liên kết ở bảng con", "Báo lỗi và không cho xóa"], answer: 1 }
    ]
  },
  {
    id: 5, level: "beginner", title: "5. Kết hợp bảng (JOINS)",
    sections: [
      { type: 'heading', content: 'Nghệ thuật khâu nối Dữ liệu (JOIN)' },
      { type: 'text', content: 'Trong thực tế quy chuẩn thiết kế Database (Normalization), dữ liệu luôn được chia nhỏ ra nhiều bảng chuyên biệt để tránh dư thừa (VD: Bảng Khách_Hàng riêng, Bảng Đơn_Hàng riêng). Để tạo ra một báo cáo tổng hợp đầy đủ thông tin, ta phải dùng JOIN để "khâu" chúng lại dựa trên các Khóa.' },
      { type: 'diagram', diagramType: 'joins', title: 'Cơ chế hoạt động của INNER JOIN' },
      { type: 'subheading', content: 'Phân biệt các loại JOIN (Biểu đồ Venn)' },
      { type: 'note', content: 'Quy tắc tưởng tượng (Bảng A bên Trái, Bảng B bên Phải):\n• INNER JOIN: Chỉ lấy phần "Giao nhau". Dữ liệu bắt buộc phải khớp/tồn tại ở CẢ HAI bảng mới được hiển thị.\n• LEFT JOIN: Lấy toàn bộ vòng tròn Trái. Dữ liệu bên Phải nếu có khớp thì hiển thị, nếu không có thì trả về NULL.\n• RIGHT JOIN: Ngược lại với Left Join.\n• CROSS JOIN: Phép nhân chéo toán học (Mọi dòng bảng A ghép với mọi dòng bảng B). Thường làm treo hệ thống nếu bảng lớn!' },
      { type: 'practice', instruction: 'Khâu bảng học sinh (students) và bảng điểm (grades) để xem ai được mấy điểm (INNER JOIN):', query: "SELECT students.name, grades.grade \nFROM students \nINNER JOIN grades \nON students.id = grades.student_id;" }
    ],
    quiz: [
      { question: "Nếu bạn muốn xuất báo cáo danh sách TẤT CẢ Nhân Viên công ty, kèm theo Tên Phòng Ban (nếu người đó đã được phân phòng). Kể cả người mới chưa có phòng cũng phải hiển thị. Bạn dùng JOIN nào?", options: ["INNER JOIN", "LEFT JOIN", "CROSS JOIN"], answer: 1 },
      { question: "CROSS JOIN giữa bảng A (3 dòng) và bảng B (4 dòng) sẽ tạo ra bao nhiêu dòng kết quả?", options: ["7 dòng", "12 dòng", "3 dòng"], answer: 1 },
      { question: "SELF JOIN là gì?", options: ["Kết hợp một bảng với chính nó bằng 2 Alias khác nhau", "JOIN tự động không cần mệnh đề ON", "JOIN 2 bảng có cùng tên cột"], answer: 0 }
    ]
  },
  {
    id: 6, level: "beginner", title: "6. Hàm Tổng hợp & Gom Nhóm",
    sections: [
      { type: 'heading', content: 'Phân tích Data với Aggregate & GROUP BY' },
      { type: 'text', content: 'Khi Database có hàng triệu dòng, sếp của bạn không muốn xem từng dòng. Họ muốn xem các con số báo cáo tổng quan: "Tổng doanh thu tháng này là bao nhiêu?", "Mỗi chi nhánh có mấy người?". Đó là lúc ta dùng Hàm Tổng hợp.' },
      { type: 'subheading', content: 'Các Hàm Aggregate cơ bản' },
      { type: 'text', content: 'Bao gồm `COUNT()` để đếm, `SUM()` để tính tổng, `AVG()` để lấy trung bình cộng, `MAX()` và `MIN()` để tìm chóp đỉnh.' },
      { type: 'diagram', diagramType: 'groupby', title: 'Cơ chế Tách Nhóm và Tính Toán của GROUP BY' },
      { type: 'subheading', content: 'Gom Nhóm với GROUP BY và Bẫy HAVING' },
      { type: 'text', content: 'Lệnh `GROUP BY` sẽ bốc tất cả các dòng có chung một giá trị (VD: Cùng Mã Chi Nhánh) ném vào một cái "hộp" (Nhóm). Sau đó các Hàm Aggregate sẽ tính toán ra 1 con số duy nhất cho mỗi cái hộp đó.' },
      { type: 'note', content: '🔥 Phân biệt WHERE và HAVING (Kiến thức hay hỏi phỏng vấn):\n- WHERE: Dùng để lọc dữ liệu ở từng dòng chi tiết TRƯỚC KHI đem đi gom nhóm.\n- HAVING: Dùng để lọc dữ liệu của các NHÓM SAU KHI đã chạy GROUP BY (Vì lúc này WHERE không còn tác dụng với các kết quả đã bị tổng hợp).' },
      { type: 'practice', instruction: 'Tính tổng số nhân viên (COUNT) của từng phòng ban (GROUP BY):', query: "SELECT dept_id, COUNT(*) as total_emp \nFROM employees \nGROUP BY dept_id;" }
    ],
    quiz: [
      { question: "Mệnh đề nào BẮT BUỘC phải dùng nếu bạn muốn lọc kết quả: 'Chỉ hiển thị những Phòng ban có tổng số lượng nhân viên > 10 người'?", options: ["WHERE total_emp > 10", "HAVING total_emp > 10", "FILTER total_emp > 10"], answer: 1 },
      { question: "Hàm AVG() xử lý giá trị NULL như thế nào?", options: ["Tính NULL = 0", "Bỏ qua các dòng NULL", "Báo lỗi nếu có NULL"], answer: 1 },
      { question: "COUNT(*) vs COUNT(column_name) khác nhau thế nào?", options: ["Giống nhau hoàn toàn", "COUNT(*) đếm tất cả dòng, COUNT(column) bỏ qua NULL", "COUNT(column) chạy nhanh hơn"], answer: 1 }
    ]
  },
  {
    id: 7, level: "beginner", title: "7. Các mệnh đề bổ trợ (Logic & Sort)",
    sections: [
      { type: 'heading', content: 'Tinh chỉnh Output cho UI/UX' },
      { type: 'text', content: 'Dữ liệu thô từ Database nếu đẩy thẳng lên Website sẽ rất lộn xộn. Bạn cần phải sắp xếp thứ tự, cắt nhỏ trang (phân trang) và hỗ trợ tìm kiếm mờ.' },
      { type: 'subheading', content: 'Sắp xếp (ORDER BY) và Phân trang (LIMIT)' },
      { type: 'note', content: '• ORDER BY: Sắp xếp theo một cột. Dùng `ASC` cho tăng dần (A-Z) và `DESC` cho giảm dần (Z-A).\n• LIMIT n OFFSET m: Lấy đúng n bản ghi, và bỏ qua m bản ghi đầu tiên. Đây chính là logic cốt lõi đằng sau mọi nút "Next Page 2, 3, 4" trên các website thương mại điện tử.' },
      { type: 'practice', instruction: 'Ví dụ kinh điển: Lấy ra 3 nhân viên có mức lương CAO NHẤT (Sắp xếp giảm dần + Giới hạn 3 người):', query: "SELECT * FROM employees \nORDER BY hourly_pay DESC \nLIMIT 3;" },
      { type: 'subheading', content: 'Tìm kiếm chuỗi bằng LIKE' },
      { type: 'text', content: 'Sử dụng toán tử LIKE kết hợp Wildcards (Ký tự đại diện) để làm chức năng thanh Search. \nKý tự `%` đại diện cho vô số ký tự bất kỳ. Ký tự `_` đại diện cho ĐÚNG 1 ký tự.' },
      { type: 'practice', instruction: 'Tìm kiếm tất cả nhân viên có tên bắt đầu bằng chữ "S":', query: "SELECT * FROM employees \nWHERE first_name LIKE 'S%';" }
    ],
    quiz: [
      { question: "Nếu User đang ở Trang 2 (mỗi trang hiện 10 sản phẩm), câu lệnh SQL nào xử lý logic phân trang này đúng nhất?", options: ["LIMIT 20", "LIMIT 10 OFFSET 10", "OFFSET 2 LIMIT 10"], answer: 1 },
      { question: "Toán tử BETWEEN 10 AND 20 tương đương với điều kiện nào?", options: ["> 10 AND < 20", ">= 10 AND <= 20", ">= 10 AND < 20"], answer: 1 },
      { question: "ORDER BY salary DESC, name ASC sẽ sắp xếp thế nào?", options: ["Lương giảm dần; cùng lương thì tên A-Z", "Lương tăng dần; tên Z-A", "Chỉ sắp theo lương, bỏ qua tên"], answer: 0 }
    ]
  },

  // --- ADVANCED MODULES ---
  {
    id: 8, level: "advanced", title: "8. Subqueries & CTEs (WITH)",
    sections: [
      { type: 'heading', content: 'Truy vấn lồng và Bảng tạm CTE' },
      { type: 'text', content: 'Subquery (Truy vấn con) là việc bạn viết một câu SELECT nằm lọt thỏm bên trong một câu lệnh SQL khác. Nó rất tuyệt vời để tính toán các con số so sánh động (Dynamic values).' },
      { type: 'practice', instruction: 'Tìm những nhân viên có lương CAO HƠN mức lương trung bình công ty (Subquery nằm trong WHERE):', query: "SELECT first_name, hourly_pay \nFROM employees \nWHERE hourly_pay > (\n   SELECT AVG(hourly_pay) FROM employees\n);" },
      { type: 'subheading', content: 'Vấn đề Spaghetti Code và Giải pháp CTE' },
      { type: 'text', content: 'Khi logic nghiệp vụ phức tạp, bạn có thể phải lồng 3-4 Subqueries vào nhau. Mã nguồn lúc đó sẽ có hình chữ V (lõm sâu vào trong), được giới lập trình gọi là Code rác (Spaghetti Code) do không thể đọc và debug nổi.' },
      { type: 'diagram', diagramType: 'cte', title: 'Mô hình làm sạch code với CTE (Mệnh đề WITH)' },
      { type: 'note', content: '💡 CTE (Common Table Expressions) bằng mệnh đề WITH giải quyết triệt để vấn đề này:\nBạn định nghĩa các Subquery thành các "Bảng Tạm" có tên rõ ràng ngay tại đầu file code. Luồng đọc code sẽ đi tuần tự từ trên xuống dưới. Các bảng tạm này có thể được tái sử dụng nhiều lần trong luồng chạy.' },
      { type: 'practice', instruction: 'Viết lại logic tìm người lương trên Trung Bình một cách chuyên nghiệp với CTE:', query: "WITH AvgSalary AS (\n  SELECT AVG(hourly_pay) as avg_pay FROM employees\n)\nSELECT e.first_name, e.hourly_pay \nFROM employees e, AvgSalary a \nWHERE e.hourly_pay > a.avg_pay;" }
    ],
    quiz: [
      { question: "Điểm vượt trội nhất của CTE (WITH) so với Subquery thông thường là gì?", options: ["Tăng tốc độ xử lý nhanh gấp hàng chục lần do lưu vào RAM vật lý", "Giúp code SQL trở nên phẳng, tuần tự, dễ debug và có thể tái sử dụng bảng tạm", "Có khả năng gọi API ra bên ngoài internet"], answer: 1 },
      { question: "Subquery có thể đặt ở những vị trí nào trong câu SQL?", options: ["Chỉ trong WHERE", "Trong WHERE, FROM, hoặc SELECT", "Chỉ trong FROM"], answer: 1 },
      { question: "CTE (WITH) có thể tái sử dụng bao nhiêu lần trong cùng một câu query?", options: ["Chỉ 1 lần", "Nhiều lần không giới hạn", "Tối đa 3 lần"], answer: 1 }
    ]
  },
  {
    id: 9, level: "advanced", title: "9. Hàm Cửa Sổ (Window Functions)",
    sections: [
      { type: 'heading', content: 'Window Functions: Chìa khóa Data Analysis' },
      { type: 'text', content: 'Window Functions (Hàm Cửa Sổ) là một tính năng cao cấp của SQL (ra mắt chuẩn năm 2003). Đây là câu hỏi phỏng vấn thường xuyên nhất ở vị trí Data Analyst / Data Engineer.' },
      { type: 'subheading', content: 'Vượt qua giới hạn của GROUP BY' },
      { type: 'text', content: 'Lệnh GROUP BY có một nhược điểm chí mạng: Nó gom nhiều dòng lại thành 1 dòng tóm tắt, khiến bạn BỊ MẤT đi các dòng chi tiết gốc. Window Function cho phép bạn trượt một "Khung Cửa Sổ" lên các dòng để tính toán (như tính xếp hạng, tổng lũy kế) mà VẪN GIỮ NGUYÊN các dòng chi tiết hiển thị đầy đủ.' },
      { type: 'diagram', diagramType: 'window', title: 'Minh họa cách Frame (Khung) trượt qua các phân vùng' },
      { type: 'note', content: 'Các Hàm Cửa Sổ "Ăn tiền" nhất:\n• Cú pháp lõi: `Hàm_Tính() OVER (PARTITION BY cột_chia_nhóm ORDER BY cột_sắp_xếp)`\n• ROW_NUMBER(): Đánh số thứ tự 1,2,3,4 bất chấp trùng lặp.\n• RANK(): Xếp hạng. Nếu có 2 người bằng điểm ở hạng 1, người tiếp theo sẽ là hạng 3 (Bỏ nhảy số: 1,1,3,4).\n• DENSE_RANK(): Xếp hạng sít sao. Người tiếp theo vẫn là hạng 2 (1,1,2,3).\n• LAG() / LEAD(): Soi dữ liệu của dòng LIỀN TRƯỚC / LIỀN SAU dòng hiện tại.' },
      { type: 'practice', instruction: 'Xếp hạng nhân viên theo mức lương cao xuống thấp bằng RANK() OVER:', query: "SELECT \n  first_name, \n  hourly_pay, \n  RANK() OVER(ORDER BY hourly_pay DESC) as rank_luong \nFROM employees;" }
    ],
    quiz: [
      { question: "Trong cuộc thi Sales, Top 2 người dẫn đầu có doanh thu BẰNG NHAU. Nếu bạn dùng hàm DENSE_RANK(), người thứ 3 sẽ được đánh số hạng mấy?", options: ["Hạng 2", "Hạng 3", "Báo lỗi hệ thống"], answer: 0 },
      { question: "Window Function khác GROUP BY ở điểm quan trọng nhất nào?", options: ["Window Function chạy nhanh hơn GROUP BY", "Window Function giữ nguyên tất cả dòng chi tiết, không gộp dòng", "Window Function không cần ORDER BY"], answer: 1 },
      { question: "Hàm LAG(salary, 1) OVER (ORDER BY hire_date) trả về giá trị gì?", options: ["Lương của dòng tiếp theo", "Lương của dòng liền TRƯỚC theo thứ tự hire_date", "Lương trung bình"], answer: 1 }
    ]
  },
  {
    id: 10, level: "advanced", title: "10. Tối ưu hóa (Indexes & Views)",
    sections: [
      { type: 'heading', content: 'Performance Tuning & Bảo mật' },
      { type: 'text', content: 'Khi công ty phát triển, bảng Database của bạn có thể phình to lên 50 triệu dòng. Lúc này một câu lệnh `SELECT ... WHERE tên = "Nguyễn Văn A"` thông thường sẽ mất đến vài phút để quét toàn bộ bảng (Table Scan). Người dùng sẽ bỏ đi.' },
      { type: 'diagram', diagramType: 'index', title: 'Cấu trúc tìm kiếm Cây B-Tree của Index' },
      { type: 'subheading', content: 'Chỉ mục (INDEX) - Con dao hai lưỡi' },
      { type: 'text', content: 'Chỉ mục trong SQL hoạt động giống như trang "Mục lục" nằm ở cuối một cuốn sách dày. Thay vì phải lật từng trang, MySQL sử dụng thuật toán cây B-Tree để nhảy thẳng đến vị trí dữ liệu. Tốc độ tìm kiếm giảm từ độ phức tạp O(N) xuống mức lý tưởng O(log N) — Nhanh gấp hàng nghìn lần.' },
      { type: 'note', content: '⚠️ LỖI CHẾT NGƯỜI CỦA JUNIOR:\nĐừng bao giờ đánh Index cho TẤT CẢ các cột. Khi bạn INSERT, UPDATE, hoặc DELETE một dòng, cơ sở dữ liệu phải TÍNH TOÁN VÀ CẬP NHẬT LẠI toàn bộ các "Mục Lục" này. Đánh quá nhiều Index sẽ làm hệ thống chậm đi thảm hại mỗi khi ghi dữ liệu. Index còn tốn dung lượng ổ cứng vật lý (RAM/Disk).' },
      { type: 'practice', instruction: 'Thực hành tạo Index trên cột Tên để làm API thanh tìm kiếm nhanh hơn:', query: "CREATE INDEX idx_first_name \nON employees(first_name);" },
      { type: 'subheading', content: 'Bảng Ảo (VIEW)' },
      { type: 'text', content: 'VIEW là một truy vấn SELECT phức tạp được lưu lại dưới dạng một cái tên ảo. Nó giúp các phòng ban (VD: Marketing) có thể truy xuất dữ liệu dễ dàng mà DEV không cần phải chia sẻ cấu trúc thật của Database gốc (Bảo vệ tính bảo mật).' }
    ],
    quiz: [
      { question: "Hệ lụy chí mạng của việc Lạm Dụng đánh Index lên quá nhiều cột trong bảng là gì?", options: ["Làm chậm đáng kể các truy vấn SELECT và JOIN", "Làm giảm hiệu năng các thao tác ghi dữ liệu (INSERT, UPDATE, DELETE) và phình to ổ cứng", "Gây ra lỗi vòng lặp vô hạn trong CSDL"], answer: 1 },
      { question: "VIEW có lưu trữ dữ liệu vật lý trong ổ cứng không?", options: ["Có, giống bảng thật", "Không, nó chỉ là truy vấn (query) được lưu dưới một cái tên", "Tùy cấu hình Database"], answer: 1 },
      { question: "Khi nào KHÔNG NÊN tạo Index?", options: ["Cột thường xuyên dùng trong WHERE", "Bảng có kích thước rất nhỏ hoặc cột có ít giá trị đa dạng", "Cột thường xuyên dùng trong JOIN"], answer: 1 }
    ]
  },
  {
    id: 11, level: "advanced", title: "11. Tự động hóa (Procedures & Triggers)",
    sections: [
      { type: 'heading', content: 'Lập trình Logic trong lòng Database Engine' },
      { type: 'text', content: 'Thông thường, Logic nghiệp vụ (Business Logic) được viết bằng NodeJS, Python, Java. Tuy nhiên, việc đẩy đi đẩy lại hàng chục truy vấn SQL qua lại giữa Server Code và Server Database sẽ gây nghẽn cổ chai mạng (Network Bottleneck). Ta có thể nhúng trực tiếp code vào DB.' },
      { type: 'subheading', content: 'Stored Procedures (Thủ tục lưu trữ)' },
      { type: 'text', content: 'Stored Procedure là các đoạn code SQL được biên dịch (compile) sẵn bên trong Database. Chúng hoạt động như các Hàm (Functions), có thể nhận tham số (IN) và trả về kết quả (OUT). Dùng Procedures giúp giảm thiểu lưu lượng mạng và là lớp phòng thủ thép chống lại các cuộc tấn công SQL Injection.' },
      { type: 'practice', instruction: 'Ví dụ tạo một Procedure đóng gói logic lấy danh sách nhân sự:', query: "CREATE PROCEDURE GetAllEmps()\nBEGIN\n  SELECT * FROM employees;\nEND;" },
      { type: 'diagram', diagramType: 'trigger', title: 'Luồng Tự động kích hoạt (Fire) của Triggers' },
      { type: 'subheading', content: 'Triggers (Trình kích hoạt)' },
      { type: 'note', content: 'Triggers giống như những "Quả Mìn" chạy ẩn ngầm. Khi có một hành vi (Event) như INSERT, UPDATE, hoặc DELETE xảy ra trên một bảng cụ thể, Trigger sẽ TỰ ĐỘNG FIRE (kích hoạt) chạy một khối code SQL khác tương ứng (Có thể BEFORE hoặc AFTER sự kiện).\n\n💡 Ứng dụng Thực chiến:\n1. Audit Log: Ai đó đổi giá sản phẩm? Trigger tự động copy giá cũ lưu vào bảng Lịch Sử Lớn.\n2. Tồn Kho: Có đơn hàng mới (INSERT Orders)? Trigger tự động trừ số lượng sản phẩm ở bảng Kho (UPDATE Inventory).' }
    ],
    quiz: [
      { question: "Tính năng nào cho phép hệ thống Database TỰ ĐỘNG CHẠY một đoạn mã SQL khác ngay lập tức khi bảng dữ liệu bị chỉnh sửa?", options: ["STORED PROCEDURE", "VIEW", "TRIGGER"], answer: 2 },
      { question: "Stored Procedure khác View ở điểm nào?", options: ["View chạy nhanh hơn", "Procedure có thể nhận tham số (IN/OUT) và chứa logic phức tạp (IF, LOOP)", "View bảo mật hơn Procedure"], answer: 1 },
      { question: "Trigger BEFORE INSERT sẽ chạy khi nào?", options: ["Sau khi dữ liệu đã được chèn thành công", "Ngay trước khi dữ liệu được chèn vào bảng", "Khi người dùng gõ lệnh INSERT nhưng chưa nhấn Enter"], answer: 1 }
    ]
  },

  // --- NEW MODULES (12-17) ---
  {
    id: 12, level: "advanced", title: "12. Giao dịch (Transactions & ACID)",
    sections: [
      { type: 'heading', content: 'Bảo vệ Dữ liệu bằng Giao dịch (Transaction)' },
      { type: 'text', content: 'Tưởng tượng bạn đang chuyển 10 triệu VNĐ từ Tài khoản A sang B. MySQL thực hiện 2 bước: (1) Trừ tiền A, (2) Cộng tiền B. Nếu hệ thống sập GIỮA bước 1 và 2, tiền sẽ BỐC HƠI! Transaction đảm bảo hoặc CẢ HAI bước thành công, hoặc KHÔNG bước nào được thực hiện.' },
      { type: 'note', content: '🔒 4 Tính chất ACID (Bắt buộc nhớ khi phỏng vấn):\n\n• Atomicity (Nguyên tử): Tất cả hoặc Không gì cả. Không có trạng thái \"nửa vời\".\n• Consistency (Nhất quán): Dữ liệu luôn tuân thủ mọi ràng buộc trước và sau giao dịch.\n• Isolation (Cô lập): Các giao dịch song song không can thiệp lẫn nhau.\n• Durability (Bền vững): Khi đã COMMIT, dữ liệu được lưu vĩnh viễn kể cả khi mất điện.' },
      { type: 'subheading', content: 'COMMIT, ROLLBACK và SAVEPOINT' },
      { type: 'text', content: 'MySQL mặc định ở chế độ AUTO COMMIT: mỗi câu lệnh tự động lưu ngay. Khi tắt chế độ này (SET AUTOCOMMIT = 0), bạn cần gọi COMMIT thủ công để lưu, hoặc ROLLBACK để hủy bỏ. SAVEPOINT tạo các \"điểm lưu\" trung gian, cho phép ROLLBACK đến đúng vị trí mong muốn thay vì hủy toàn bộ.' },
      { type: 'practice', instruction: 'Ví dụ chuyển tiền ngân hàng an toàn với Transaction:', query: "START TRANSACTION;\n\nUPDATE accounts SET balance = balance - 10000000 WHERE id = 1;\nUPDATE accounts SET balance = balance + 10000000 WHERE id = 2;\n\n-- Kiểm tra kết quả trước khi lưu\nSELECT * FROM accounts;\n\nCOMMIT;  -- Hoặc ROLLBACK nếu có lỗi" },
      { type: 'practice', instruction: 'Sử dụng SAVEPOINT để rollback từng phần:', query: "START TRANSACTION;\n\nINSERT INTO logs VALUES (1, 'Step 1: OK');\nSAVEPOINT sp1;\n\nINSERT INTO logs VALUES (2, 'Step 2: FAILED');\nROLLBACK TO SAVEPOINT sp1;  -- Chỉ hủy Step 2\n\nINSERT INTO logs VALUES (3, 'Step 3: OK');\nCOMMIT;  -- Lưu Step 1 + Step 3" }
    ],
    quiz: [
      { question: "Chữ 'A' trong ACID (Atomicity) có nghĩa là gì?", options: ["Dữ liệu luôn chính xác", "Tất cả hoặc Không gì cả — giao dịch không có trạng thái nửa vời", "Các giao dịch chạy song song được cô lập"], answer: 1 },
      { question: "Khi nào cần dùng SAVEPOINT thay vì ROLLBACK thông thường?", options: ["Khi muốn hủy toàn bộ giao dịch", "Khi muốn chỉ hủy một phần (rollback đến điểm cụ thể) mà giữ lại các bước trước", "Khi muốn tăng tốc độ giao dịch"], answer: 1 },
      { question: "MySQL mặc định ở chế độ AUTO COMMIT. Điều này có nghĩa gì?", options: ["Mỗi câu lệnh SQL tự động được lưu ngay lập tức", "Hệ thống tự commit vào lúc nửa đêm", "Chỉ lưu khi user gõ lệnh COMMIT"], answer: 0 }
    ]
  },
  {
    id: 13, level: "advanced", title: "13. Hàm Ngày & CASE WHEN",
    sections: [
      { type: 'heading', content: 'Xử lý Thời gian & Biến đổi Dữ liệu' },
      { type: 'text', content: 'Trong thực tế, rất nhiều nghiệp vụ xoay quanh Thời gian: \"Đơn hàng trong 30 ngày gần nhất\", \"Nhân viên đã làm bao nhiêu năm?\". MySQL cung cấp các hàm xử lý ngày tháng mạnh mẽ để giải quyết các bài toán này.' },
      { type: 'note', content: '📅 Các hàm Date/Time quan trọng:\n• CURRENT_DATE() → Ngày hôm nay (VD: 2024-06-15)\n• CURRENT_TIME() → Giờ hiện tại (VD: 14:30:00)\n• NOW() → Kết hợp cả ngày và giờ\n• DATEDIFF(date1, date2) → Số ngày chênh lệch\n• DATE_FORMAT(date, format) → Format lại ngày\n• YEAR(), MONTH(), DAY() → Trích xuất phần năm/tháng/ngày' },
      { type: 'practice', instruction: 'Tính số ngày làm việc của nhân viên (từ ngày vào đến hiện tại):', query: "SELECT first_name,\n  hire_date,\n  DATEDIFF(CURRENT_DATE(), hire_date) AS days_worked\nFROM employees;" },
      { type: 'subheading', content: 'CASE WHEN — \"If-Else\" của SQL' },
      { type: 'text', content: 'CASE WHEN là công cụ biến đổi dữ liệu mạnh nhất trong SQL. Nó cho phép bạn tạo cột mới dựa trên điều kiện logic — giống như IF/ELSE trong lập trình. Đây là kỹ thuật xuất hiện CỰC KỲ NHIỀU trong phỏng vấn Data Analyst.' },
      { type: 'note', content: '⚡ CASE WHEN Pattern phổ biến:\n1. Phân loại (Bucketing): Chia khách hàng thành "VIP/Standard/New"\n2. Pivot Table: Xoay dữ liệu từ dọc → ngang\n3. Xử lý NULL: Thay thế giá trị NULL bằng giá trị có ý nghĩa\n4. Counting điều kiện: COUNT(CASE WHEN status="active" THEN 1 END)' },
      { type: 'practice', instruction: 'Phân loại nhân viên theo mức lương (Bucketing):', query: "SELECT first_name, hourly_pay,\n  CASE\n    WHEN hourly_pay >= 50 THEN 'Senior'\n    WHEN hourly_pay >= 25 THEN 'Mid-level'\n    ELSE 'Junior'\n  END AS level\nFROM employees;" }
    ],
    quiz: [
      { question: "Hàm DATEDIFF('2024-12-31', '2024-01-01') trả về giá trị gì?", options: ["365 (số ngày chênh lệch)", "12 (số tháng)", "1 (số năm)"], answer: 0 },
      { question: "CASE WHEN trong SQL tương đương với cấu trúc nào trong lập trình?", options: ["FOR Loop", "IF / ELSE IF / ELSE", "TRY / CATCH"], answer: 1 },
      { question: "Dùng CASE WHEN để Pivot (xoay dữ liệu) có ý nghĩa gì?", options: ["Xóa dữ liệu trùng lặp", "Chuyển giá trị từ dạng Hàng (Rows) sang dạng Cột (Columns)", "Tăng tốc độ truy vấn"], answer: 1 }
    ]
  },
  {
    id: 14, level: "advanced", title: "14. UNION & Phân trang (Pagination)",
    sections: [
      { type: 'heading', content: 'Gộp Dữ liệu & Logic Phân trang Thực tế' },
      { type: 'text', content: 'Đôi khi dữ liệu cần tổng hợp nằm rải rác ở nhiều bảng hoặc truy vấn khác nhau. UNION cho phép bạn \"xếp chồng\" kết quả từ nhiều câu SELECT thành một danh sách duy nhất — giống như ghép nhiều file Excel thành 1 file.' },
      { type: 'note', content: '🔗 UNION vs UNION ALL:\n• UNION: Gộp kết quả + TỰ ĐỘNG loại bỏ dòng trùng lặp (chậm hơn do phải so sánh).\n• UNION ALL: Gộp kết quả + GIỮ NGUYÊN tất cả dòng (nhanh hơn).\n\n⚠️ Quy tắc bắt buộc: Tất cả các câu SELECT phải có CÙNG SỐ LƯỢNG CỘT và kiểu dữ liệu tương ứng.' },
      { type: 'practice', instruction: 'Gộp danh sách nhân viên từ 2 chi nhánh (loại bỏ trùng tên):', query: "SELECT name FROM employees_hanoi\nUNION\nSELECT name FROM employees_hcm\nORDER BY name;" },
      { type: 'subheading', content: 'DISTINCT & Phân trang (LIMIT + OFFSET)' },
      { type: 'text', content: 'DISTINCT loại bỏ dòng trùng lặp trong kết quả SELECT. Kết hợp với LIMIT + OFFSET, bạn có thể xây dựng logic phân trang (Pagination) cho website — đây là pattern Backend Developer và Data Analyst đều cần biết.' },
      { type: 'note', content: '📄 Công thức phân trang chuẩn:\nTrang N, mỗi trang K sản phẩm:\n→ LIMIT K OFFSET (N-1)*K\n\nVD: Trang 3, hiện 10 sản phẩm/trang:\n→ LIMIT 10 OFFSET 20' },
      { type: 'practice', instruction: 'Lấy sản phẩm cho Trang 3 (mỗi trang 10 sản phẩm):', query: "SELECT product_name, price\nFROM products\nORDER BY price DESC\nLIMIT 10 OFFSET 20;" }
    ],
    quiz: [
      { question: "UNION và UNION ALL khác nhau ở điểm nào quan trọng nhất?", options: ["UNION chạy nhanh hơn", "UNION loại bỏ dòng trùng lặp, UNION ALL giữ nguyên tất cả", "UNION ALL chỉ gộp tối đa 2 bảng"], answer: 1 },
      { question: "Để hiển thị Trang 5 (mỗi trang 20 sản phẩm), câu SQL đúng là gì?", options: ["LIMIT 20 OFFSET 80", "LIMIT 100 OFFSET 20", "LIMIT 20 OFFSET 100"], answer: 0 },
      { question: "DISTINCT đặt ở đâu trong câu SELECT?", options: ["Sau FROM", "Ngay sau từ khóa SELECT", "Sau WHERE"], answer: 1 }
    ]
  },
  {
    id: 15, level: "advanced", title: "15. Thiết kế DB (Normalization)",
    sections: [
      { type: 'heading', content: 'Chuẩn hóa Cơ sở Dữ liệu (Normalization)' },
      { type: 'text', content: 'Normalization (Chuẩn hóa) là quá trình tổ chức bảng trong Database sao cho giảm thiểu dữ liệu dư thừa (redundancy) và đảm bảo tính toàn vẹn. Đây là kiến thức NỀN TẢNG mà bất kỳ cuộc phỏng vấn DB nào cũng hỏi — đặc biệt khi thiết kế hệ thống.' },
      { type: 'note', content: '📐 3 Dạng Chuẩn (Normal Forms) cốt lõi:\n\n1️⃣ 1NF (First Normal Form): Mỗi ô chỉ chứa MỘT giá trị nguyên tử (atomic). Không có mảng, danh sách, hoặc bảng con bên trong 1 ô.\n   ❌ Sai: Cột skills = "Java, Python, SQL"\n   ✅ Đúng: Tách thành 3 dòng riêng biệt.\n\n2️⃣ 2NF: Phải đạt 1NF + Mọi cột non-key phải phụ thuộc vào TOÀN BỘ khóa chính (không phụ thuộc riêng một phần). Chỉ áp dụng khi có Composite Key.\n\n3️⃣ 3NF: Phải đạt 2NF + Không có phụ thuộc bắc cầu (transitive dependency). Cột A → Cột B → Cột C thì C không nên nằm cùng bảng với A.' },
      { type: 'subheading', content: 'Entity-Relationship (ER) Diagram' },
      { type: 'text', content: 'ER Diagram là bản vẽ thiết kế Database. Nó mô tả các Thực thể (Entity/Bảng), Thuộc tính (Attributes/Cột), và Mối quan hệ (Relationships: 1-1, 1-N, N-N). Công cụ phổ biến: MySQL Workbench có thể tự sinh ER từ DB đã có (Reverse Engineer) hoặc tạo DB từ ER (Forward Engineer).' },
      { type: 'note', content: '🤔 Khi nào KHÔNG chuẩn hóa (Denormalization)?\nKhi ưu tiên tốc độ ĐỌC hơn tốc độ GHI:\n• Data Warehouse / OLAP: Cần query nhanh, không sửa liên tục.\n• Hệ thống read-heavy (Báo cáo, Dashboard).\n• Caching layer để giảm số lần JOIN.\n\nĐánh đổi: Chuẩn hóa quá mức → nhiều JOIN → chậm. Denormalize quá mức → dữ liệu trùng → khó maintain.' }
    ],
    quiz: [
      { question: "Quy tắc 1NF (First Normal Form) yêu cầu gì?", options: ["Mỗi bảng phải có khóa ngoại", "Mỗi ô trong bảng chỉ chứa MỘT giá trị nguyên tử (atomic)", "Không được có dòng trùng lặp"], answer: 1 },
      { question: "Phụ thuộc bắc cầu (Transitive Dependency) vi phạm dạng chuẩn nào?", options: ["1NF", "2NF", "3NF"], answer: 2 },
      { question: "Khi nào nên Denormalize (phá chuẩn) Database?", options: ["Khi database có ít dữ liệu", "Khi hệ thống ưu tiên tốc độ ĐỌC và ít cập nhật (Data Warehouse)", "Khi muốn bảo mật tốt hơn"], answer: 1 }
    ]
  },
  {
    id: 16, level: "advanced", title: "16. Hàm Chuỗi & Xử lý NULL",
    sections: [
      { type: 'heading', content: 'Xử lý Chuỗi Văn bản & Giá trị NULL' },
      { type: 'text', content: 'Dữ liệu thực tế luôn \"bẩn\": tên viết HOA lẫn thường, có dấu cách thừa, giá trị NULL rải rác khắp nơi. SQL cung cấp các hàm xử lý chuỗi (String Functions) và hàm xử lý NULL giúp bạn \"tắm rửa\" dữ liệu trước khi phân tích.' },
      { type: 'note', content: '🔤 String Functions quan trọng:\n• CONCAT(a, b): Nối chuỗi → "Nguyễn" + " " + "Văn A" = "Nguyễn Văn A"\n• UPPER(s) / LOWER(s): Đổi sang CHỮ HOA / chữ thường\n• TRIM(s): Xóa dấu cách thừa 2 đầu\n• SUBSTRING(s, start, length): Cắt chuỗi con\n• LENGTH(s): Đếm ký tự\n• REPLACE(s, old, new): Thay thế chuỗi con\n• LEFT(s, n) / RIGHT(s, n): Lấy n ký tự từ trái/phải' },
      { type: 'practice', instruction: 'Gộp Họ và Tên thành một cột Full Name viết hoa:', query: "SELECT \n  UPPER(CONCAT(last_name, ' ', first_name)) AS full_name,\n  TRIM(email) AS clean_email\nFROM employees;" },
      { type: 'subheading', content: 'Xử lý NULL — Kẻ phá hoại thầm lặng' },
      { type: 'text', content: 'NULL không phải là 0, không phải chuỗi rỗng. NULL có nghĩa là CHƯA BIẾT / KHÔNG CÓ. Mọi phép tính với NULL đều trả về NULL (VD: 100 + NULL = NULL). Đây là nguồn gốc vô số bug mà developer gặp phải.' },
      { type: 'note', content: '🛡️ Vũ khí chống NULL:\n• COALESCE(a, b, c): Trả về giá trị NOT NULL đầu tiên trong danh sách. VD: COALESCE(bonus, 0) → nếu bonus = NULL thì trả về 0.\n• IFNULL(a, b): Phiên bản rút gọn chỉ cho 2 giá trị.\n• NULLIF(a, b): Trả về NULL nếu a = b (dùng tránh chia cho 0).\n\n🔥 TRUNCATE vs DELETE:\n• DELETE: Xóa dòng, có thể WHERE, có thể ROLLBACK.\n• TRUNCATE: Xóa SẠCH toàn bộ — nhanh hơn nhưng KHÔNG THỂ ROLLBACK.' },
      { type: 'practice', instruction: 'Dùng COALESCE để thay NULL bằng giá trị mặc định:', query: "SELECT first_name,\n  COALESCE(bonus, 0) AS bonus_safe,\n  hourly_pay + COALESCE(bonus, 0) AS total_pay\nFROM employees;" }
    ],
    quiz: [
      { question: "Kết quả của phép tính 100 + NULL trong SQL là gì?", options: ["100", "NULL", "0"], answer: 1 },
      { question: "COALESCE(NULL, NULL, 'Hello', 'World') trả về giá trị gì?", options: ["NULL", "'Hello'", "'World'"], answer: 1 },
      { question: "TRUNCATE TABLE khác DELETE FROM TABLE ở điểm nào?", options: ["TRUNCATE chậm hơn nhưng an toàn hơn", "TRUNCATE xóa sạch và KHÔNG THỂ rollback, DELETE có thể rollback", "Giống nhau hoàn toàn"], answer: 1 }
    ]
  },
  {
    id: 17, level: "advanced", title: "17. Quản trị & Bảo mật (DCL)",
    sections: [
      { type: 'heading', content: 'Quản trị User & Bảo mật Database (DCL)' },
      { type: 'text', content: 'DCL (Data Control Language) là nhóm lệnh quản lý QUYỀN TRUY CẬP trong Database. Trong môi trường công ty thực tế, không phải ai cũng được toàn quyền — Intern chỉ nên đọc (SELECT), Lead mới có quyền sửa (INSERT/UPDATE), chỉ DBA mới được xóa (DROP).' },
      { type: 'note', content: '👤 Quản lý User & Quyền:\n• CREATE USER \'username\'@\'host\' IDENTIFIED BY \'password\';\n• GRANT SELECT, INSERT ON database.* TO \'username\'@\'host\';\n• REVOKE INSERT ON database.* FROM \'username\'@\'host\';\n• SHOW GRANTS FOR \'username\'@\'host\';\n\n📊 Cấp độ quyền (Privilege Levels):\n1. Global (*.*): Toàn bộ server\n2. Database (db.*): Một database cụ thể\n3. Table (db.table): Một bảng cụ thể\n4. Column: Một cột cụ thể trong bảng' },
      { type: 'practice', instruction: 'Tạo user intern chỉ được phép ĐỌC dữ liệu từ database company:', query: "CREATE USER 'intern_2024'@'localhost'\nIDENTIFIED BY 'SecurePass123!';\n\nGRANT SELECT ON company.* TO 'intern_2024'@'localhost';\n\n-- Kiểm tra quyền\nSHOW GRANTS FOR 'intern_2024'@'localhost';" },
      { type: 'subheading', content: 'Backup & Restore — Phòng thủ tuyệt đối' },
      { type: 'text', content: 'Dù bạn có bảo mật giỏi đến đâu, thảm họa vẫn có thể xảy ra: Server cháy, ransomware, hoặc đơn giản là ai đó chạy nhầm lệnh DROP. Backup định kỳ là lớp phòng thủ cuối cùng — và cũng là câu hỏi phỏng vấn DBA yêu thích.' },
      { type: 'note', content: '💾 Backup & Restore bằng mysqldump:\n\n📦 Backup (Xuất ra file .sql):\nmysqldump -u root -p company_db > backup_20240615.sql\n\n📥 Restore (Nhập lại từ file .sql):\nmysql -u root -p company_db < backup_20240615.sql\n\n⚡ Tips thực chiến:\n• Đặt lịch backup tự động bằng Cron Job (Linux) hoặc Task Scheduler (Windows).\n• Lưu backup ở NGOÀI server (AWS S3, Google Drive) phòng trường hợp server vật lý hỏng.\n• Test restore định kỳ — backup mà không restore được thì vô dụng!' }
    ],
    quiz: [
      { question: "Lệnh nào dùng để CẤP quyền SELECT cho user 'intern' trên database 'sales'?", options: ["ALLOW SELECT ON sales.* TO 'intern'", "GRANT SELECT ON sales.* TO 'intern'@'localhost'", "PERMIT SELECT ON sales.* FOR 'intern'"], answer: 1 },
      { question: "Tại sao cần backup database định kỳ?", options: ["Để tăng tốc độ truy vấn", "Để phòng thảm họa: mất server, ransomware, lỗi người dùng (DROP nhầm)", "Để giảm dung lượng database"], answer: 1 },
      { question: "Lệnh REVOKE dùng để làm gì?", options: ["Xóa user khỏi hệ thống", "Thu hồi (gỡ bỏ) quyền đã cấp cho user", "Khôi phục dữ liệu từ backup"], answer: 1 }
    ]
  }
];

