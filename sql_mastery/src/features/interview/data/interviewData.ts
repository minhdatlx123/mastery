import type { InterviewProblem } from '../types';

export const interviewProblems: InterviewProblem[] = [
  // ========== GROUP BY & HAVING ==========
  {
    id: 1,
    category: 'GROUP BY & HAVING',
    title: 'Lương trung bình theo phòng ban',
    difficulty: 'easy',
    description: 'Cho bảng employees gồm các nhân viên và phòng ban. Hãy tìm mức lương trung bình của từng phòng ban, và CHỈ hiển thị những phòng ban có mức lương trung bình lớn hơn 20,000,000 VNĐ.',
    tables: 'CREATE TABLE employees (\n  emp_id INT PRIMARY KEY,\n  name VARCHAR(100),\n  dept VARCHAR(50),\n  salary DECIMAL(12,0)\n);',
    hint: 'Dùng GROUP BY để nhóm theo phòng ban, AVG() để tính trung bình, và HAVING để lọc kết quả sau khi gom nhóm.',
    sampleAnswer: "SELECT dept, AVG(salary) AS avg_salary\nFROM employees\nGROUP BY dept\nHAVING AVG(salary) > 20000000;",
    explanation: 'GROUP BY dept gom nhân viên theo phòng ban → AVG(salary) tính trung bình từng nhóm → HAVING lọc nhóm có TB > 20 triệu. Lưu ý: Không dùng WHERE vì WHERE lọc TRƯỚC khi gom nhóm.'
  },
  {
    id: 2,
    category: 'Subquery',
    title: 'Nhân viên lương cao hơn trung bình',
    difficulty: 'easy',
    description: 'Tìm danh sách TÊN và LƯƠNG của những nhân viên có mức lương cao hơn mức lương trung bình của TOÀN BỘ công ty.',
    tables: 'CREATE TABLE employees (\n  emp_id INT PRIMARY KEY,\n  name VARCHAR(100),\n  salary DECIMAL(12,0)\n);',
    hint: 'Dùng Subquery trong WHERE để tính AVG(salary) của toàn công ty trước, rồi so sánh từng nhân viên.',
    sampleAnswer: "SELECT name, salary\nFROM employees\nWHERE salary > (\n  SELECT AVG(salary) FROM employees\n);",
    explanation: 'Subquery (SELECT AVG(salary) FROM employees) trả về 1 con số = lương TB công ty. Query ngoài so sánh lương từng người với con số đó. Cách viết CTE cũng được nhưng Subquery ngắn gọn hơn cho bài này.'
  },
  {
    id: 3,
    category: 'GROUP BY & HAVING',
    title: 'Khách hàng mua hàng nhiều hơn 5 lần',
    difficulty: 'medium',
    description: 'Đếm số lượng khách hàng đã đặt hàng NHIỀU HƠN 5 lần. Kết quả trả về chỉ 1 con số duy nhất.',
    tables: 'CREATE TABLE orders (\n  order_id INT PRIMARY KEY,\n  customer_id INT,\n  order_date DATE,\n  amount DECIMAL(10,2)\n);',
    hint: 'Bước 1: GROUP BY customer_id + COUNT(*) + HAVING > 5 để tìm những KH thỏa. Bước 2: Bọc kết quả bước 1 trong một Subquery rồi COUNT(*) lần nữa.',
    sampleAnswer: "SELECT COUNT(*) AS total_frequent_customers\nFROM (\n  SELECT customer_id\n  FROM orders\n  GROUP BY customer_id\n  HAVING COUNT(*) > 5\n) AS frequent;",
    explanation: 'Subquery bên trong tìm tất cả customer_id có > 5 đơn hàng. Query bên ngoài đếm có bao nhiêu khách như vậy. Đây là pattern \"Gom nhóm 2 lần\" rất phổ biến trong phỏng vấn.'
  },
  // ========== Anti-JOIN ==========
  {
    id: 4,
    category: 'Anti-JOIN',
    title: 'Khách hàng chưa từng đặt hàng',
    difficulty: 'easy',
    description: 'Tìm danh sách tên những khách hàng CHƯA TỪNG đặt bất kỳ đơn hàng nào.',
    tables: 'CREATE TABLE customers (\n  id INT PRIMARY KEY,\n  name VARCHAR(100)\n);\n\nCREATE TABLE orders (\n  order_id INT PRIMARY KEY,\n  customer_id INT\n);',
    hint: 'Dùng LEFT JOIN bảng customers với orders, sau đó tìm WHERE orders.order_id IS NULL. Hoặc dùng NOT EXISTS.',
    sampleAnswer: "SELECT c.name\nFROM customers c\nLEFT JOIN orders o ON c.id = o.customer_id\nWHERE o.order_id IS NULL;",
    explanation: 'LEFT JOIN giữ tất cả khách hàng. Những khách chưa có đơn sẽ có order_id = NULL. WHERE IS NULL lọc ra đúng nhóm đó. Cách 2: NOT EXISTS (SELECT 1 FROM orders WHERE customer_id = c.id).'
  },
  {
    id: 5,
    category: 'JOIN & HAVING',
    title: 'Giao 2 tập hợp (INTERSECT Pattern)',
    difficulty: 'hard',
    description: 'Lấy danh sách customer_id đã thực hiện ĐỒNG THỜI cả 2 hành động: gửi yêu cầu "Vay mua nhà" VÀ "Vay đi học". Coi chừng bẫy dùng OR!',
    tables: 'CREATE TABLE requests (\n  id INT PRIMARY KEY,\n  customer_id INT,\n  request_type VARCHAR(50)\n);',
    hint: 'KHÔNG dùng OR/IN. Dùng GROUP BY customer_id + HAVING COUNT(DISTINCT request_type) = 2 với WHERE lọc 2 loại trước.',
    sampleAnswer: "SELECT customer_id\nFROM requests\nWHERE request_type IN ('Vay mua nhà', 'Vay đi học')\nGROUP BY customer_id\nHAVING COUNT(DISTINCT request_type) = 2;",
    explanation: 'WHERE IN lọc chỉ 2 loại yêu cầu → GROUP BY theo KH → HAVING COUNT(DISTINCT) = 2 đảm bảo KH có ĐỦ CẢ 2 loại. Nếu dùng OR thông thường sẽ lấy cả người chỉ có 1 loại.'
  },
  {
    id: 6,
    category: 'Anti-JOIN',
    title: 'Loại trừ chiến dịch Marketing',
    difficulty: 'hard',
    description: 'Tìm khách hàng có mua hàng SAU ngày chiến dịch (2024-01-15), nhưng LOẠI TRỪ những người chỉ mua lại đúng sản phẩm giống hệt đơn hàng đầu tiên của họ.',
    tables: 'CREATE TABLE orders (\n  order_id INT,\n  customer_id INT,\n  product_id INT,\n  order_date DATE\n);',
    hint: 'Bước 1: CTE tìm sản phẩm đơn đầu tiên mỗi KH. Bước 2: JOIN với đơn sau chiến dịch. Bước 3: Loại trừ nếu product_id trùng.',
    sampleAnswer: "WITH FirstOrder AS (\n  SELECT customer_id, product_id,\n    ROW_NUMBER() OVER(PARTITION BY customer_id ORDER BY order_date) AS rn\n  FROM orders\n)\nSELECT DISTINCT o.customer_id\nFROM orders o\nJOIN FirstOrder f ON o.customer_id = f.customer_id AND f.rn = 1\nWHERE o.order_date > '2024-01-15'\n  AND o.product_id != f.product_id;",
    explanation: 'CTE FirstOrder dùng ROW_NUMBER() để đánh dấu đơn đầu tiên. Sau đó JOIN để loại trừ ai chỉ mua lại cùng sản phẩm. Bài này kết hợp Window Function + Anti-pattern.'
  },
  // ========== Window Functions ==========
  {
    id: 7,
    category: 'Window Functions',
    title: 'Mức lương cao thứ 2 (DENSE_RANK)',
    difficulty: 'medium',
    description: 'Viết câu lệnh truy vấn để lấy TÊN và LƯƠNG của nhân viên có mức lương cao THỨ HAI trong công ty. Nếu có nhiều người cùng lương cao nhất, lương thứ 2 vẫn phải đúng.',
    tables: 'CREATE TABLE employees (\n  emp_id INT PRIMARY KEY,\n  name VARCHAR(100),\n  salary DECIMAL(12,0)\n);',
    hint: 'Dùng DENSE_RANK() OVER (ORDER BY salary DESC) rồi lọc WHERE rank = 2. Không dùng RANK() vì có thể nhảy số.',
    sampleAnswer: "SELECT name, salary\nFROM (\n  SELECT name, salary,\n    DENSE_RANK() OVER (ORDER BY salary DESC) AS dr\n  FROM employees\n) ranked\nWHERE dr = 2;",
    explanation: 'DENSE_RANK() xếp hạng liên tục: nếu 2 người cùng hạng 1 thì người tiếp theo là hạng 2 (không nhảy số). Đây là câu hỏi phỏng vấn "kinh điển" nhất cho vị trí Data.'
  },
  {
    id: 8,
    category: 'Window Functions',
    title: 'Top 3 sản phẩm theo danh mục',
    difficulty: 'medium',
    description: 'Tìm Top 3 sản phẩm có doanh thu cao nhất trong MỖI danh mục (category). Nếu có sản phẩm đồng hạng, vẫn phải hiển thị hết.',
    tables: 'CREATE TABLE products (\n  product_id INT,\n  category VARCHAR(50),\n  product_name VARCHAR(100),\n  revenue DECIMAL(12,2)\n);',
    hint: 'Dùng RANK() OVER (PARTITION BY category ORDER BY revenue DESC). Dùng RANK thay ROW_NUMBER để không bỏ sót đồng hạng.',
    sampleAnswer: "SELECT category, product_name, revenue\nFROM (\n  SELECT *,\n    RANK() OVER (PARTITION BY category ORDER BY revenue DESC) AS rk\n  FROM products\n) t\nWHERE rk <= 3;",
    explanation: 'PARTITION BY chia dữ liệu theo từng danh mục → RANK() xếp hạng trong mỗi nhóm → WHERE rk <= 3 lấy Top 3. Dùng RANK() thay ROW_NUMBER() để giữ cả sản phẩm đồng hạng.'
  },
  {
    id: 9,
    category: 'Window Functions',
    title: 'Doanh thu cộng dồn (Running Total)',
    difficulty: 'medium',
    description: 'Tính tổng doanh thu CỘNG DỒN của cửa hàng qua từng ngày. Mỗi dòng hiển thị: ngày, doanh thu ngày đó, và tổng lũy kế từ ngày đầu đến ngày hiện tại.',
    tables: 'CREATE TABLE daily_sales (\n  sale_date DATE,\n  amount DECIMAL(12,2)\n);',
    hint: 'Dùng SUM(amount) OVER (ORDER BY sale_date) để tính tổng cộng dồn. ORDER BY trong OVER() xác định thứ tự tích lũy.',
    sampleAnswer: "SELECT sale_date, amount,\n  SUM(amount) OVER (ORDER BY sale_date) AS running_total\nFROM daily_sales\nORDER BY sale_date;",
    explanation: 'SUM() OVER (ORDER BY sale_date) → MySQL sẽ cộng dồn amount từ dòng đầu tiên đến dòng hiện tại theo thứ tự ngày. Đây là Frame mặc định ROWS UNBOUNDED PRECEDING.'
  },
  // ========== Time-series ==========
  {
    id: 10,
    category: 'Time-series',
    title: 'Tính thời lượng Session truy cập',
    difficulty: 'hard',
    description: 'Cho bảng log hệ thống chứa sự kiện page_load và page_exit. Hãy tính thời lượng truy cập TRUNG BÌNH mỗi ngày của mỗi user (page_exit muộn nhất - page_load sớm nhất trong cùng ngày).',
    tables: "CREATE TABLE user_logs (\n  user_id INT,\n  event_type ENUM('page_load','page_exit'),\n  event_time DATETIME\n);",
    hint: 'GROUP BY user_id, DATE(event_time). Dùng MAX(CASE WHEN exit) - MIN(CASE WHEN load) để tính chênh lệch.',
    sampleAnswer: "SELECT user_id, DATE(event_time) AS log_date,\n  TIMESTAMPDIFF(MINUTE,\n    MIN(CASE WHEN event_type='page_load' THEN event_time END),\n    MAX(CASE WHEN event_type='page_exit' THEN event_time END)\n  ) AS session_minutes\nFROM user_logs\nGROUP BY user_id, DATE(event_time);",
    explanation: 'CASE WHEN tách load/exit → MIN lấy lần load sớm nhất, MAX lấy lần exit muộn nhất → TIMESTAMPDIFF tính phút chênh lệch. GROUP BY user + ngày cho kết quả mỗi user mỗi ngày.'
  },
  {
    id: 11,
    category: 'Window Functions',
    title: 'So sánh điểm phim mới vs lịch sử',
    difficulty: 'hard',
    description: 'Cho bảng đánh giá phim. Tính chênh lệch giữa điểm phim MỚI NHẤT của mỗi diễn viên so với TRUNG BÌNH điểm tất cả phim trước đó của diễn viên đó.',
    tables: 'CREATE TABLE movie_ratings (\n  actor_id INT,\n  movie_name VARCHAR(100),\n  rating DECIMAL(3,1),\n  release_date DATE\n);',
    hint: 'Dùng ROW_NUMBER() OVER (PARTITION BY actor_id ORDER BY release_date DESC) để đánh nhãn phim mới = 1. Tách 2 CTE: phim mới và phim cũ, rồi JOIN.',
    sampleAnswer: "WITH Ranked AS (\n  SELECT *, ROW_NUMBER() OVER(\n    PARTITION BY actor_id ORDER BY release_date DESC\n  ) AS rn\n  FROM movie_ratings\n),\nLatest AS (SELECT actor_id, rating AS latest_rating FROM Ranked WHERE rn = 1),\nHistory AS (SELECT actor_id, AVG(rating) AS avg_old FROM Ranked WHERE rn > 1 GROUP BY actor_id)\nSELECT l.actor_id, l.latest_rating, h.avg_old,\n  ROUND(l.latest_rating - h.avg_old, 1) AS diff\nFROM Latest l JOIN History h ON l.actor_id = h.actor_id;",
    explanation: 'CTE Ranked đánh số phim mới→cũ. Latest lấy phim rn=1. History tính AVG cho rn>1. JOIN lại để tính chênh lệch. Kỹ thuật \"tách + hợp\" này rất phổ biến trong PV.'
  },
  // ========== CASE WHEN / Pivot ==========
  {
    id: 12,
    category: 'CASE WHEN',
    title: 'Histogram phân phối bình luận',
    difficulty: 'hard',
    description: 'Lập bảng phân phối: Có bao nhiêu người dùng viết ĐÚNG 1 bình luận, bao nhiêu viết 2 bình luận, v.v... trong tháng 1/2024.',
    tables: 'CREATE TABLE comments (\n  comment_id INT,\n  user_id INT,\n  created_at DATE\n);',
    hint: 'Gom nhóm 2 lần! Bước 1: COUNT bình luận per user. Bước 2: COUNT user per mức bình luận.',
    sampleAnswer: "SELECT comment_count, COUNT(*) AS num_users\nFROM (\n  SELECT user_id, COUNT(*) AS comment_count\n  FROM comments\n  WHERE created_at BETWEEN '2024-01-01' AND '2024-01-31'\n  GROUP BY user_id\n) user_counts\nGROUP BY comment_count\nORDER BY comment_count;",
    explanation: 'Subquery đếm số bình luận mỗi user → Query ngoài đếm có bao nhiêu user ở mỗi mức. Pattern \"Double GROUP BY\" này xuất hiện rất nhiều ở Facebook, TikTok.'
  },
  {
    id: 13,
    category: 'CASE WHEN',
    title: 'Xoay dữ liệu (Pivot Table)',
    difficulty: 'medium',
    description: 'Chuyển đổi bảng doanh thu theo tháng từ dạng dọc (mỗi tháng 1 dòng) sang dạng ngang (mỗi tháng 1 cột). VD: Cột Q1, Q2, Q3, Q4.',
    tables: 'CREATE TABLE quarterly_sales (\n  product VARCHAR(50),\n  quarter VARCHAR(5),\n  revenue DECIMAL(12,2)\n);',
    hint: 'Dùng SUM(CASE WHEN quarter = "Q1" THEN revenue ELSE 0 END) AS Q1 cho mỗi quý. GROUP BY product.',
    sampleAnswer: "SELECT product,\n  SUM(CASE WHEN quarter='Q1' THEN revenue ELSE 0 END) AS Q1,\n  SUM(CASE WHEN quarter='Q2' THEN revenue ELSE 0 END) AS Q2,\n  SUM(CASE WHEN quarter='Q3' THEN revenue ELSE 0 END) AS Q3,\n  SUM(CASE WHEN quarter='Q4' THEN revenue ELSE 0 END) AS Q4\nFROM quarterly_sales\nGROUP BY product;",
    explanation: 'CASE WHEN biến mỗi giá trị quý thành 1 cột riêng. SUM() đảm bảo gộp đúng giá trị. Đây là cách \"Pivot thủ công\" khi MySQL không có PIVOT keyword như SQL Server.'
  },
  {
    id: 14,
    category: 'Tổng hợp',
    title: 'Thứ tự thực thi SQL (Execution Order)',
    difficulty: 'easy',
    description: 'Cho câu lệnh SQL phức tạp. Hãy sắp xếp đúng thứ tự thực thi thực sự của MySQL Engine (không phải thứ tự viết code). Đây là "bẫy" phổ biến nhất khi phỏng vấn.',
    tables: '-- Không cần bảng cụ thể. Đây là bài lý thuyết.',
    hint: 'Thứ tự VIẾT: SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY → LIMIT\nThứ tự THỰC THI: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT',
    sampleAnswer: "-- Thứ tự THỰC THI thực sự của MySQL:\n-- 1. FROM (xác định bảng nguồn)\n-- 2. WHERE (lọc dòng thô)\n-- 3. GROUP BY (gom nhóm)\n-- 4. HAVING (lọc nhóm)\n-- 5. SELECT (chọn cột, tính toán)\n-- 6. ORDER BY (sắp xếp)\n-- 7. LIMIT (giới hạn kết quả)",
    explanation: 'Vì SELECT chạy SAU WHERE, bạn KHÔNG THỂ dùng Alias đặt ở SELECT cho mệnh đề WHERE. Ví dụ: SELECT salary*12 AS annual WHERE annual > 100000 → LỖI! Phải viết WHERE salary*12 > 100000.'
  },
  {
    id: 15,
    category: 'Window Functions',
    title: 'Trung bình trượt 7 ngày (Moving Average)',
    difficulty: 'medium',
    description: 'Tính trung bình trượt doanh thu trong 7 NGÀY GẦN NHẤT (bao gồm ngày hiện tại). Mỗi dòng hiển thị: ngày, doanh thu, và giá trị trung bình trượt.',
    tables: 'CREATE TABLE daily_revenue (\n  rev_date DATE,\n  revenue DECIMAL(12,2)\n);',
    hint: 'Dùng AVG(revenue) OVER (ORDER BY rev_date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW). 6 PRECEDING + current = 7 ngày.',
    sampleAnswer: "SELECT rev_date, revenue,\n  ROUND(AVG(revenue) OVER (\n    ORDER BY rev_date\n    ROWS BETWEEN 6 PRECEDING AND CURRENT ROW\n  ), 2) AS moving_avg_7d\nFROM daily_revenue\nORDER BY rev_date;",
    explanation: 'ROWS BETWEEN 6 PRECEDING AND CURRENT ROW tạo khung cửa sổ 7 dòng (6 trước + hiện tại). AVG() tính trung bình trong khung đó. Khung trượt theo mỗi dòng → Moving Average.'
  }
];
