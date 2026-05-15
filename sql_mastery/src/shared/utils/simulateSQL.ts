// --- MOCK SQL ENGINE (Đã fix lỗi trùng lặp dữ liệu M6, M7, M8) ---
export const simulateSQL = (query: string): string => {
  const upperQuery = query.toUpperCase().trim();
  if (!upperQuery) return "";
  
  // DDL / Basic
  if (upperQuery.includes('SHOW DATABASES')) return "+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| mysql              |\n| KrustyKrab         |\n| student_db         |\n+--------------------+";
  if (upperQuery.includes('CREATE DATABASE')) return "Query OK, 1 row affected (0.01 sec)";
  if (upperQuery.includes('CREATE TABLE') || upperQuery.includes('CREATE VIEW')) return "Query OK, 0 rows affected (0.02 sec)";
  if (upperQuery.includes('CREATE INDEX')) return "Query OK, 0 rows affected (0.03 sec)\nRecords: 0  Duplicates: 0  Warnings: 0";
  if (upperQuery.includes('CREATE PROCEDURE')) return "Query OK, 0 rows affected (0.01 sec)";
  if (upperQuery.includes('INSERT INTO')) return "Query OK, 1 row affected (0.00 sec)";
  if (upperQuery.includes('UPDATE')) return "Query OK, 1 row affected (0.01 sec)\nRows matched: 1  Changed: 1  Warnings: 0";
  if (upperQuery.includes('DELETE') || upperQuery.includes('TRUNCATE')) return "Query OK, 1 row affected (0.01 sec)";
  if (upperQuery.includes('DROP')) return "Query OK, 0 rows affected (0.02 sec)";
  if (upperQuery.includes('ALTER')) return "Query OK, 0 rows affected (0.03 sec)\nRecords: 0  Duplicates: 0  Warnings: 0";
  
  // M8: CTEs (WITH)
  if (upperQuery.startsWith('WITH ')) return "+------------+------------+\n| first_name | hourly_pay |\n+------------+------------+\n| Eugene     |      25.50 |\n+------------+------------+\n(Log: Bảng tạm AvgSalary đã được khởi tạo. Eugene có lương > mức TB 17.75)";
  
  // M9: Window Functions
  if (upperQuery.includes('RANK() OVER') || upperQuery.includes('ROW_NUMBER()')) return "+------------+------------+-----------+\n| first_name | hourly_pay | rank_luong|\n+------------+------------+-----------+\n| Eugene     |      25.50 |         1 |\n| Sandy      |      17.25 |         2 |\n| Squidward  |      15.00 |         3 |\n| SpongeBob  |      12.50 |         4 |\n+------------+------------+-----------+";
  
  // M6: GROUP BY
  if (upperQuery.includes('GROUP BY DEPT_ID') || (upperQuery.includes('COUNT') && upperQuery.includes('GROUP BY'))) {
     return "+---------+-----------+\n| dept_id | total_emp |\n+---------+-----------+\n| D01     |         3 |\n| D02     |         5 |\n| D03     |         2 |\n+---------+-----------+";
  }

  // M7: ORDER BY & LIMIT
  if (upperQuery.includes('ORDER BY') && upperQuery.includes('LIMIT')) {
      return "+--------+------------+------------+\n| emp_id | first_name | hourly_pay |\n+--------+------------+------------+\n|      1 | Eugene     |      25.50 |\n|      5 | Sandy      |      17.25 |\n|      2 | Squidward  |      15.00 |\n+--------+------------+------------+\n(Log: Đã sắp xếp giảm dần và lấy ra Top 3)";
  }

  // M7: LIKE
  if (upperQuery.includes('LIKE')) {
      return "+--------+------------+------------+\n| emp_id | first_name | hourly_pay |\n+--------+------------+------------+\n|      2 | Squidward  |      15.00 |\n|      3 | SpongeBob  |      12.50 |\n|      5 | Sandy      |      17.25 |\n+--------+------------+------------+";
  }

  // M5: JOINS
  if (upperQuery.includes('JOIN')) {
    return "+-------+-------+\n| name  | grade |\n+-------+-------+\n| Alice |   8.5 |\n| Bob   |   9.0 |\n+-------+-------+";
  }

  // Basic Select
  if (upperQuery.includes('SELECT') && upperQuery.includes('EMPLOYEES')) {
    return "+--------+------------+------------+\n| emp_id | first_name | hourly_pay |\n+--------+------------+------------+\n|      1 | Eugene     |      25.50 |\n|      2 | Squidward  |      15.00 |\n|      3 | SpongeBob  |      12.50 |\n+--------+------------+------------+";
  }

  if (upperQuery.includes('SELECT')) return "Empty set (0.00 sec) - (Terminal giả lập trả về mock data chuẩn cho ví dụ)";
  
  return "ERROR 1064 (42000): Cú pháp không hợp lệ. Hãy kiểm tra lại lệnh của bạn.";
};
