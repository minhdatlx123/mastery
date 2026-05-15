import type { CourseModule } from '../../../shared/types';

export const courseData: CourseModule[] = [
  // --- BEGINNER MODULES ---
  {
    id: 1, level: "beginner", title: "1. Kiáº¿n thá»©c ná»n táº£ng (Database)",
    sections: [
      { type: 'heading', content: 'Tá»•ng quan vá» CÆ¡ sá»Ÿ dá»¯ liá»‡u vÃ  SQL' },
      { type: 'text', content: 'SQL (Structured Query Language) lÃ  ngÃ´n ngá»¯ láº­p trÃ¬nh tiÃªu chuáº©n toÃ n cáº§u, Ä‘Æ°á»£c thiáº¿t káº¿ Ä‘áº·c biá»‡t Ä‘á»ƒ quáº£n lÃ½, lÆ°u trá»¯ vÃ  thao tÃ¡c vá»›i dá»¯ liá»‡u trong Há»‡ quáº£n trá»‹ cÆ¡ sá»Ÿ dá»¯ liá»‡u quan há»‡ (RDBMS - Relational Database Management System).' },
      { type: 'diagram', diagramType: 'database', title: 'MÃ´ hÃ¬nh Há»‡ quáº£n trá»‹ CÆ¡ sá»Ÿ dá»¯ liá»‡u Quan há»‡ (RDBMS)' },
      { type: 'subheading', content: 'Báº£n cháº¥t cá»§a CSDL Quan há»‡' },
      { type: 'text', content: 'KhÃ¡c vá»›i cÃ¡c há»‡ thá»‘ng NoSQL (nhÆ° MongoDB lÆ°u dá»¯ liá»‡u dáº¡ng JSON), cÆ¡ sá»Ÿ dá»¯ liá»‡u quan há»‡ nhÆ° MySQL, PostgreSQL, SQL Server lÆ°u trá»¯ dá»¯ liá»‡u dÆ°á»›i dáº¡ng cÃ¡c báº£ng (Tables) hai chiá»u. Má»—i báº£ng bao gá»“m HÃ ng (Rows/Records - Ä‘áº¡i diá»‡n cho má»™t báº£n ghi) vÃ  Cá»™t (Columns/Fields - Ä‘áº¡i diá»‡n cho cÃ¡c thuá»™c tÃ­nh cá»§a báº£n ghi).' },
      { type: 'subheading', content: 'MÃ´ hÃ¬nh C.R.U.D cá»‘t lÃµi' },
      { type: 'note', content: 'Báº¥t ká»³ á»©ng dá»¥ng hay pháº§n má»m nÃ o trÃªn tháº¿ giá»›i (Facebook, Shopee, App NgÃ¢n hÃ ng) Ä‘á»u xoay quanh 4 thao tÃ¡c dá»¯ liá»‡u cá»‘t lÃµi gá»i lÃ  C.R.U.D:\n\nâ€¢ Create (Táº¡o má»›i): Lá»‡nh INSERT.\nâ€¢ Retrieve (Truy xuáº¥t): Lá»‡nh SELECT (Äá»c dá»¯ liá»‡u).\nâ€¢ Update (Cáº­p nháº­t): Lá»‡nh UPDATE.\nâ€¢ Delete (XÃ³a bá»): Lá»‡nh DELETE.' },
      { type: 'practice', instruction: 'Há»‡ thá»‘ng DBMS giáº£ láº­p nÃ y Ä‘ang cháº¡y ngáº§m nhiá»u Database. HÃ£y cháº¡y lá»‡nh dÆ°á»›i Ä‘Ã¢y Ä‘á»ƒ hiá»ƒn thá»‹ danh sÃ¡ch chÃºng:', query: 'SHOW DATABASES;' }
    ],
    quiz: [
      { question: "MÃ´ hÃ¬nh CÆ¡ sá»Ÿ dá»¯ liá»‡u nÃ o lÆ°u trá»¯ dá»¯ liá»‡u dÆ°á»›i dáº¡ng Báº£ng (Table) cÃ³ HÃ ng vÃ  Cá»™t cháº·t cháº½?", options: ["CÆ¡ sá»Ÿ dá»¯ liá»‡u Phi quan há»‡ (NoSQL)", "CÆ¡ sá»Ÿ dá»¯ liá»‡u Quan há»‡ (Relational Database)", "CÆ¡ sá»Ÿ dá»¯ liá»‡u Äá»“ thá»‹ (Graph DB)"], answer: 1 },
      { question: "Chá»¯ 'R' trong khÃ¡i niá»‡m CRUD Ä‘áº¡i diá»‡n cho thao tÃ¡c nÃ o?", options: ["Remove (XÃ³a)", "Retrieve / Read (Truy xuáº¥t / Äá»c)", "Refresh (LÃ m má»›i)"], answer: 1 }
    ]
  },
  {
    id: 2, level: "beginner", title: "2. Quáº£n lÃ½ Cáº¥u trÃºc (DDL)",
    sections: [
      { type: 'heading', content: 'NgÃ´n ngá»¯ Äá»‹nh nghÄ©a Dá»¯ liá»‡u (DDL)' },
      { type: 'text', content: 'DDL (Data Definition Language) bao gá»“m cÃ¡c lá»‡nh dÃ¹ng Ä‘á»ƒ Ä‘á»‹nh nghÄ©a hoáº·c thay Ä‘á»•i "Bá»˜ KHUNG" (Schema) cá»§a cÆ¡ sá»Ÿ dá»¯ liá»‡u. NÃ³ khÃ´ng tÆ°Æ¡ng tÃ¡c vá»›i dá»¯ liá»‡u chi tiáº¿t bÃªn trong báº£ng, mÃ  thao tÃ¡c vá»›i chÃ­nh báº£n thÃ¢n Database hoáº·c Báº£ng Ä‘Ã³.' },
      { type: 'diagram', diagramType: 'ddl', title: 'Luá»“ng hoáº¡t Ä‘á»™ng cá»§a nhÃ³m lá»‡nh cáº¥u trÃºc DDL' },
      { type: 'subheading', content: 'CÃ¡c kiá»ƒu dá»¯ liá»‡u (Data Types) ná»n táº£ng' },
      { type: 'text', content: 'Má»—i cá»™t trong báº£ng SQL báº¯t buá»™c pháº£i Ä‘Æ°á»£c khai bÃ¡o má»™t kiá»ƒu dá»¯ liá»‡u cá»¥ thá»ƒ. Viá»‡c nÃ y giÃºp tá»‘i Æ°u bá»™ nhá»› vÃ  trÃ¡nh lá»—i logic (VÃ­ dá»¥: KhÃ´ng thá»ƒ Ä‘em chá»¯ cÃ¡i Ä‘i tÃ­nh tá»•ng).' },
      { type: 'note', content: 'CÃ¡c kiá»ƒu dá»¯ liá»‡u phá»• biáº¿n nháº¥t:\n1. INT: Sá»‘ nguyÃªn (dÃ¹ng cho ID, sá»‘ lÆ°á»£ng).\n2. DECIMAL(M, D): Sá»‘ tháº­p phÃ¢n chÃ­nh xÃ¡c cao. DÃ¹ng cho Tiá»n tá»‡. VÃ­ dá»¥ DECIMAL(10,2) lÆ°u tá»‘i Ä‘a 10 chá»¯ sá»‘, trong Ä‘Ã³ cÃ³ 2 chá»¯ sá»‘ sau dáº¥u pháº©y.\n3. VARCHAR(n): Chuá»—i vÄƒn báº£n cÃ³ Ä‘á»™ dÃ i linh hoáº¡t tá»‘i Ä‘a n kÃ½ tá»± (DÃ¹ng cho TÃªn, Email).\n4. DATE / DATETIME: LÆ°u trá»¯ ngÃ y thÃ¡ng vÃ  thá»i gian.' },
      { type: 'practice', instruction: 'Thá»­ táº¡o má»™t cáº¥u trÃºc báº£ng nhÃ¢n viÃªn (employees) vá»›i cÃ¡c kiá»ƒu dá»¯ liá»‡u chuáº©n:', query: 'CREATE TABLE employees (\n  emp_id INT,\n  first_name VARCHAR(50),\n  hourly_pay DECIMAL(5,2)\n);' },
      { type: 'subheading', content: 'ALTER vÃ  DROP' },
      { type: 'text', content: 'Lá»‡nh ALTER TABLE dÃ¹ng Ä‘á»ƒ sá»­a Ä‘á»•i cáº¥u trÃºc báº£ng Ä‘ang tá»“n táº¡i (ThÃªm cá»™t, XÃ³a cá»™t, Äá»•i kiá»ƒu dá»¯ liá»‡u). Lá»‡nh DROP TABLE sáº½ "xÃ³a sá»•" hoÃ n toÃ n báº£ng Ä‘Ã³ khá»i Database (Cá»±c ká»³ nguy hiá»ƒm).' }
    ],
    quiz: [
      { question: "NhÃ³m lá»‡nh nÃ o sau Ä‘Ã¢y KHÃ”NG dÃ¹ng Ä‘á»ƒ thao tÃ¡c vá»›i bá»™ khung (Schema) dá»¯ liá»‡u?", options: ["CREATE", "ALTER", "UPDATE"], answer: 2 },
      { question: "Kiá»ƒu dá»¯ liá»‡u nÃ o Ä‘Æ°á»£c khuyáº¿n nghá»‹ Ä‘á»ƒ lÆ°u trá»¯ Tiá»n tá»‡ (nháº±m trÃ¡nh sai sá»‘ tháº­p phÃ¢n)?", options: ["FLOAT", "VARCHAR", "DECIMAL"], answer: 2 },
      { question: "Lá»‡nh nÃ o dÃ¹ng Ä‘á»ƒ XÃ“A hoÃ n toÃ n má»™t báº£ng khá»i Database (cáº£ cáº¥u trÃºc láº«n dá»¯ liá»‡u)?", options: ["DELETE TABLE", "REMOVE TABLE", "DROP TABLE"], answer: 2 }
    ]
  },
  {
    id: 3, level: "beginner", title: "3. Thao tÃ¡c vá»›i Dá»¯ liá»‡u (DML)",
    sections: [
      { type: 'heading', content: 'NgÃ´n ngá»¯ Thao tÃ¡c Dá»¯ liá»‡u (DML)' },
      { type: 'text', content: 'KhÃ¡c vá»›i DDL, DML (Data Manipulation Language) lÃ  nhÃ³m lá»‡nh dÃ¹ng Ä‘á»ƒ lÃ m viá»‡c trá»±c tiáº¿p vá»›i dá»¯ liá»‡u THá»°C Táº¾ (cÃ¡c báº£n ghi/hÃ ng) náº±m bÃªn trong cÃ¡c báº£ng. ÄÃ¢y chÃ­nh lÃ  nhÃ³m lá»‡nh mÃ  báº¡n sáº½ sá»­ dá»¥ng 90% thá»i gian khi lÃ m viá»‡c.' },
      { type: 'diagram', diagramType: 'dml', title: 'Hoáº¡t Ä‘á»™ng cá»§a cÃ¡c lá»‡nh DML trÃªn dÃ²ng dá»¯ liá»‡u' },
      { type: 'subheading', content: 'CÃº phÃ¡p ThÃªm vÃ  Láº¥y Dá»¯ Liá»‡u' },
      { type: 'text', content: 'Lá»‡nh INSERT INTO cho phÃ©p chÃ¨n má»™t hoáº·c nhiá»u dÃ²ng cÃ¹ng lÃºc. Khi chÃ¨n nhiá»u dÃ²ng, chá»‰ cáº§n phÃ¢n cÃ¡ch cÃ¡c cá»¥m giÃ¡ trá»‹ (values) báº±ng dáº¥u pháº©y, giÃºp há»‡ thá»‘ng tÄƒng tá»‘c Ä‘á»™ xá»­ lÃ½ so vá»›i chÃ¨n tá»«ng dÃ²ng láº» táº».' },
      { type: 'practice', instruction: 'Thá»±c hÃ nh chÃ¨n 2 nhÃ¢n viÃªn má»›i vÃ o báº£ng employees cÃ¹ng lÃºc:', query: "INSERT INTO employees (emp_id, first_name, hourly_pay) \nVALUES \n(1, 'Eugene', 25.50),\n(2, 'Squidward', 15.00);" },
      { type: 'subheading', content: 'Rá»§i ro cá»§a UPDATE vÃ  DELETE' },
      { type: 'text', content: 'Má»‡nh Ä‘á» WHERE Ä‘Ã³ng vai trÃ² nhÆ° má»™t mÃ ng lá»c. Náº¿u báº¡n cháº¡y cÃ¢u lá»‡nh UPDATE hoáº·c DELETE mÃ  QUÃŠN ghi Ä‘iá»u kiá»‡n WHERE, há»‡ thá»‘ng sáº½ máº·c Ä‘á»‹nh báº¡n muá»‘n Ã¡p dá»¥ng hÃ nh Ä‘á»™ng Ä‘Ã³ cho TOÃ€N Bá»˜ dá»¯ liá»‡u trong báº£ng.' },
      { type: 'note', content: 'ðŸ”¥ Cáº£nh bÃ¡o Tháº£m Há»a Thá»±c Táº¿:\nCÃ¢u lá»‡nh `DELETE FROM employees;` sáº½ xÃ³a sáº¡ch nhÃ¢n sá»± cá»§a cáº£ cÃ´ng ty. \nÄá»ƒ an toÃ n, luÃ´n viáº¿t má»‡nh Ä‘á» WHERE trÆ°á»›c (VD: `WHERE emp_id = 5`), sau Ä‘Ã³ má»›i viáº¿t lá»‡nh thao tÃ¡c lÃªn trÃªn.' },
      { type: 'practice', instruction: 'Cáº­p nháº­t láº¡i má»©c lÆ°Æ¡ng cho Ä‘Ãºng má»™t nhÃ¢n viÃªn cÃ³ ID = 1:', query: "UPDATE employees \nSET hourly_pay = 30.00 \nWHERE emp_id = 1;" }
    ],
    quiz: [
      { question: "Äiá»u tá»“i tá»‡ gÃ¬ sáº½ xáº£y ra náº¿u báº¡n cháº¡y lá»‡nh: `UPDATE users SET status = 'banned';` ?", options: ["Há»‡ thá»‘ng bÃ¡o lá»—i cÃº phÃ¡p do thiáº¿u WHERE", "Chá»‰ user Ä‘áº§u tiÃªn trong báº£ng bá»‹ khÃ³a", "Táº¥t cáº£ user trong toÃ n bá»™ há»‡ thá»‘ng Ä‘á»u bá»‹ khÃ³a tÃ i khoáº£n"], answer: 2 },
      { question: "Lá»‡nh nÃ o dÃ¹ng Ä‘á»ƒ chÃ¨n nhiá»u dÃ²ng dá»¯ liá»‡u cÃ¹ng lÃºc vÃ o báº£ng?", options: ["ADD INTO ... VALUES", "INSERT INTO ... VALUES (row1), (row2)", "PUSH INTO ... VALUES"], answer: 1 },
      { question: "DÃ¹ng kÃ½ tá»± gÃ¬ trong SELECT Ä‘á»ƒ láº¥y Táº¤T Cáº¢ cÃ¡c cá»™t cá»§a báº£ng?", options: ["ALL", "@", "*"], answer: 2 }
    ]
  },
  {
    id: 4, level: "beginner", title: "4. RÃ ng buá»™c (Constraints) & KhÃ³a",
    sections: [
      { type: 'heading', content: 'Thiáº¿t láº­p Luáº­t lá»‡ cho Dá»¯ liá»‡u' },
      { type: 'text', content: 'Má»™t cÆ¡ sá»Ÿ dá»¯ liá»‡u náº¿u khÃ´ng cÃ³ "luáº­t lá»‡" sáº½ nhanh chÃ³ng trá»Ÿ thÃ nh bÃ£i rÃ¡c thÃ´ng tin (VÃ­ dá»¥: Tuá»•i bá»‹ nháº­p lÃ  sá»‘ Ã¢m, sá»‘ Ä‘iá»‡n thoáº¡i bá»‹ trÃ¹ng láº·p). RÃ ng buá»™c (Constraints) lÃ  hÃ ng rÃ o báº£o vá»‡ tÃ­nh TOÃ€N Váº¸N cá»§a dá»¯ liá»‡u.' },
      { type: 'subheading', content: 'CÃ¡c loáº¡i RÃ ng buá»™c Phá»• biáº¿n' },
      { type: 'text', content: 'â€¢ NOT NULL: Báº¯t buá»™c ngÆ°á»i dÃ¹ng pháº£i nháº­p dá»¯ liá»‡u vÃ o cá»™t nÃ y.\nâ€¢ UNIQUE: Äáº£m báº£o má»i giÃ¡ trá»‹ trong cá»™t Ä‘á»u lÃ  duy nháº¥t (VÃ­ dá»¥: Email, CCCD).\nâ€¢ DEFAULT: Tá»± Ä‘á»™ng gÃ¡n má»™t giÃ¡ trá»‹ cho trÆ°á»›c náº¿u ngÆ°á»i dÃ¹ng Ä‘á»ƒ trá»‘ng.\nâ€¢ CHECK: Giá»›i háº¡n Ä‘iá»u kiá»‡n logic (VÃ­ dá»¥: `CHECK (age >= 18)`).' },
      { type: 'diagram', diagramType: 'keys', title: 'Má»‘i quan há»‡ kiáº¿n trÃºc giá»¯a KhÃ³a ChÃ­nh (PK) vÃ  KhÃ³a Ngoáº¡i (FK)' },
      { type: 'subheading', content: 'KhÃ³a ChÃ­nh (Primary Key) & KhÃ³a Ngoáº¡i (Foreign Key)' },
      { type: 'note', content: 'ðŸ”‘ PRIMARY KEY (KhÃ³a chÃ­nh): LÃ  "CÄƒn cÆ°á»›c cÃ´ng dÃ¢n" cá»§a má»—i dÃ²ng. NÃ³ tá»± Ä‘á»™ng káº¿ thá»«a Ä‘áº·c tÃ­nh cá»§a NOT NULL vÃ  UNIQUE. KhÃ´ng cÃ³ 2 dÃ²ng nÃ o Ä‘Æ°á»£c trÃ¹ng KhÃ³a chÃ­nh.\n\nðŸ”— FOREIGN KEY (KhÃ³a ngoáº¡i): LÃ  linh há»“n cá»§a CSDL Quan há»‡. NÃ³ táº¡o má»™t sá»£i dÃ¢y liÃªn káº¿t tá»« báº£ng nÃ y sang KhÃ³a chÃ­nh cá»§a báº£ng khÃ¡c. Viá»‡c nÃ y ngÄƒn cháº·n "dá»¯ liá»‡u má»“ cÃ´i" (VÃ­ dá»¥: KhÃ´ng thá»ƒ chÃ¨n Ä‘iá»ƒm cho má»™t ID Sinh viÃªn khÃ´ng tá»“n táº¡i trong báº£ng Sinh viÃªn).' },
      { type: 'practice', instruction: 'Sá»­ dá»¥ng lá»‡nh ALTER Ä‘á»ƒ biáº¿n cá»™t emp_id thÃ nh KhÃ³a chÃ­nh cá»§a báº£ng:', query: "ALTER TABLE employees \nADD PRIMARY KEY (emp_id);" }
    ],
    quiz: [
      { question: "RÃ ng buá»™c (Constraint) nÃ o giÃºp Ä‘áº£m báº£o ráº±ng cá»™t 'Sá»‘ Äiá»‡n Thoáº¡i' khÃ´ng bao giá» bá»‹ ngÆ°á»i dÃ¹ng nháº­p trÃ¹ng láº·p?", options: ["CHECK", "NOT NULL", "UNIQUE"], answer: 2 },
      { question: "Primary Key (KhÃ³a chÃ­nh) vá» báº£n cháº¥t lÃ  sá»± káº¿t há»£p cá»§a 2 rÃ ng buá»™c nÃ o?", options: ["NOT NULL vÃ  UNIQUE", "UNIQUE vÃ  DEFAULT", "NOT NULL vÃ  CHECK"], answer: 0 },
      { question: "Khi xÃ³a dá»¯ liá»‡u á»Ÿ báº£ng cha, cháº¿ Ä‘á»™ ON DELETE CASCADE sáº½ lÃ m gÃ¬ vá»›i báº£ng con?", options: ["Äáº·t giÃ¡ trá»‹ khÃ³a ngoáº¡i thÃ nh NULL", "Tá»± Ä‘á»™ng xÃ³a toÃ n bá»™ dÃ²ng liÃªn káº¿t á»Ÿ báº£ng con", "BÃ¡o lá»—i vÃ  khÃ´ng cho xÃ³a"], answer: 1 }
    ]
  },
  {
    id: 5, level: "beginner", title: "5. Káº¿t há»£p báº£ng (JOINS)",
    sections: [
      { type: 'heading', content: 'Nghá»‡ thuáº­t khÃ¢u ná»‘i Dá»¯ liá»‡u (JOIN)' },
      { type: 'text', content: 'Trong thá»±c táº¿ quy chuáº©n thiáº¿t káº¿ Database (Normalization), dá»¯ liá»‡u luÃ´n Ä‘Æ°á»£c chia nhá» ra nhiá»u báº£ng chuyÃªn biá»‡t Ä‘á»ƒ trÃ¡nh dÆ° thá»«a (VD: Báº£ng KhÃ¡ch_HÃ ng riÃªng, Báº£ng ÄÆ¡n_HÃ ng riÃªng). Äá»ƒ táº¡o ra má»™t bÃ¡o cÃ¡o tá»•ng há»£p Ä‘áº§y Ä‘á»§ thÃ´ng tin, ta pháº£i dÃ¹ng JOIN Ä‘á»ƒ "khÃ¢u" chÃºng láº¡i dá»±a trÃªn cÃ¡c KhÃ³a.' },
      { type: 'diagram', diagramType: 'joins', title: 'CÆ¡ cháº¿ hoáº¡t Ä‘á»™ng cá»§a INNER JOIN' },
      { type: 'subheading', content: 'PhÃ¢n biá»‡t cÃ¡c loáº¡i JOIN (Biá»ƒu Ä‘á»“ Venn)' },
      { type: 'note', content: 'Quy táº¯c tÆ°á»Ÿng tÆ°á»£ng (Báº£ng A bÃªn TrÃ¡i, Báº£ng B bÃªn Pháº£i):\nâ€¢ INNER JOIN: Chá»‰ láº¥y pháº§n "Giao nhau". Dá»¯ liá»‡u báº¯t buá»™c pháº£i khá»›p/tá»“n táº¡i á»Ÿ Cáº¢ HAI báº£ng má»›i Ä‘Æ°á»£c hiá»ƒn thá»‹.\nâ€¢ LEFT JOIN: Láº¥y toÃ n bá»™ vÃ²ng trÃ²n TrÃ¡i. Dá»¯ liá»‡u bÃªn Pháº£i náº¿u cÃ³ khá»›p thÃ¬ hiá»ƒn thá»‹, náº¿u khÃ´ng cÃ³ thÃ¬ tráº£ vá» NULL.\nâ€¢ RIGHT JOIN: NgÆ°á»£c láº¡i vá»›i Left Join.\nâ€¢ CROSS JOIN: PhÃ©p nhÃ¢n chÃ©o toÃ¡n há»c (Má»i dÃ²ng báº£ng A ghÃ©p vá»›i má»i dÃ²ng báº£ng B). ThÆ°á»ng lÃ m treo há»‡ thá»‘ng náº¿u báº£ng lá»›n!' },
      { type: 'practice', instruction: 'KhÃ¢u báº£ng há»c sinh (students) vÃ  báº£ng Ä‘iá»ƒm (grades) Ä‘á»ƒ xem ai Ä‘Æ°á»£c máº¥y Ä‘iá»ƒm (INNER JOIN):', query: "SELECT students.name, grades.grade \nFROM students \nINNER JOIN grades \nON students.id = grades.student_id;" }
    ],
    quiz: [
      { question: "Náº¿u báº¡n muá»‘n xuáº¥t bÃ¡o cÃ¡o danh sÃ¡ch Táº¤T Cáº¢ NhÃ¢n ViÃªn cÃ´ng ty, kÃ¨m theo TÃªn PhÃ²ng Ban (náº¿u ngÆ°á»i Ä‘Ã³ Ä‘Ã£ Ä‘Æ°á»£c phÃ¢n phÃ²ng). Ká»ƒ cáº£ ngÆ°á»i má»›i chÆ°a cÃ³ phÃ²ng cÅ©ng pháº£i hiá»ƒn thá»‹. Báº¡n dÃ¹ng JOIN nÃ o?", options: ["INNER JOIN", "LEFT JOIN", "CROSS JOIN"], answer: 1 },
      { question: "CROSS JOIN giá»¯a báº£ng A (3 dÃ²ng) vÃ  báº£ng B (4 dÃ²ng) sáº½ táº¡o ra bao nhiÃªu dÃ²ng káº¿t quáº£?", options: ["7 dÃ²ng", "12 dÃ²ng", "3 dÃ²ng"], answer: 1 },
      { question: "SELF JOIN lÃ  gÃ¬?", options: ["Káº¿t há»£p má»™t báº£ng vá»›i chÃ­nh nÃ³ báº±ng 2 Alias khÃ¡c nhau", "JOIN tá»± Ä‘á»™ng khÃ´ng cáº§n má»‡nh Ä‘á» ON", "JOIN 2 báº£ng cÃ³ cÃ¹ng tÃªn cá»™t"], answer: 0 }
    ]
  },
  {
    id: 6, level: "beginner", title: "6. HÃ m Tá»•ng há»£p & Gom NhÃ³m",
    sections: [
      { type: 'heading', content: 'PhÃ¢n tÃ­ch Data vá»›i Aggregate & GROUP BY' },
      { type: 'text', content: 'Khi Database cÃ³ hÃ ng triá»‡u dÃ²ng, sáº¿p cá»§a báº¡n khÃ´ng muá»‘n xem tá»«ng dÃ²ng. Há» muá»‘n xem cÃ¡c con sá»‘ bÃ¡o cÃ¡o tá»•ng quan: "Tá»•ng doanh thu thÃ¡ng nÃ y lÃ  bao nhiÃªu?", "Má»—i chi nhÃ¡nh cÃ³ máº¥y ngÆ°á»i?". ÄÃ³ lÃ  lÃºc ta dÃ¹ng HÃ m Tá»•ng há»£p.' },
      { type: 'subheading', content: 'CÃ¡c HÃ m Aggregate cÆ¡ báº£n' },
      { type: 'text', content: 'Bao gá»“m `COUNT()` Ä‘á»ƒ Ä‘áº¿m, `SUM()` Ä‘á»ƒ tÃ­nh tá»•ng, `AVG()` Ä‘á»ƒ láº¥y trung bÃ¬nh cá»™ng, `MAX()` vÃ  `MIN()` Ä‘á»ƒ tÃ¬m chÃ³p Ä‘á»‰nh.' },
      { type: 'diagram', diagramType: 'groupby', title: 'CÆ¡ cháº¿ TÃ¡ch NhÃ³m vÃ  TÃ­nh ToÃ¡n cá»§a GROUP BY' },
      { type: 'subheading', content: 'Gom NhÃ³m vá»›i GROUP BY vÃ  Báº«y HAVING' },
      { type: 'text', content: 'Lá»‡nh `GROUP BY` sáº½ bá»‘c táº¥t cáº£ cÃ¡c dÃ²ng cÃ³ chung má»™t giÃ¡ trá»‹ (VD: CÃ¹ng MÃ£ Chi NhÃ¡nh) nÃ©m vÃ o má»™t cÃ¡i "há»™p" (NhÃ³m). Sau Ä‘Ã³ cÃ¡c HÃ m Aggregate sáº½ tÃ­nh toÃ¡n ra 1 con sá»‘ duy nháº¥t cho má»—i cÃ¡i há»™p Ä‘Ã³.' },
      { type: 'note', content: 'ðŸ”¥ PhÃ¢n biá»‡t WHERE vÃ  HAVING (Kiáº¿n thá»©c hay há»i phá»ng váº¥n):\n- WHERE: DÃ¹ng Ä‘á»ƒ lá»c dá»¯ liá»‡u á»Ÿ tá»«ng dÃ²ng chi tiáº¿t TRÆ¯á»šC KHI Ä‘em Ä‘i gom nhÃ³m.\n- HAVING: DÃ¹ng Ä‘á»ƒ lá»c dá»¯ liá»‡u cá»§a cÃ¡c NHÃ“M SAU KHI Ä‘Ã£ cháº¡y GROUP BY (VÃ¬ lÃºc nÃ y WHERE khÃ´ng cÃ²n tÃ¡c dá»¥ng vá»›i cÃ¡c káº¿t quáº£ Ä‘Ã£ bá»‹ tá»•ng há»£p).' },
      { type: 'practice', instruction: 'TÃ­nh tá»•ng sá»‘ nhÃ¢n viÃªn (COUNT) cá»§a tá»«ng phÃ²ng ban (GROUP BY):', query: "SELECT dept_id, COUNT(*) as total_emp \nFROM employees \nGROUP BY dept_id;" }
    ],
    quiz: [
      { question: "Má»‡nh Ä‘á» nÃ o Báº®T BUá»˜C pháº£i dÃ¹ng náº¿u báº¡n muá»‘n lá»c káº¿t quáº£: 'Chá»‰ hiá»ƒn thá»‹ nhá»¯ng PhÃ²ng ban cÃ³ tá»•ng sá»‘ lÆ°á»£ng nhÃ¢n viÃªn > 10 ngÆ°á»i'?", options: ["WHERE total_emp > 10", "HAVING total_emp > 10", "FILTER total_emp > 10"], answer: 1 },
      { question: "HÃ m AVG() xá»­ lÃ½ giÃ¡ trá»‹ NULL nhÆ° tháº¿ nÃ o?", options: ["TÃ­nh NULL = 0", "Bá» qua cÃ¡c dÃ²ng NULL", "BÃ¡o lá»—i náº¿u cÃ³ NULL"], answer: 1 },
      { question: "COUNT(*) vs COUNT(column_name) khÃ¡c nhau tháº¿ nÃ o?", options: ["Giá»‘ng nhau hoÃ n toÃ n", "COUNT(*) Ä‘áº¿m táº¥t cáº£ dÃ²ng, COUNT(column) bá» qua NULL", "COUNT(column) cháº¡y nhanh hÆ¡n"], answer: 1 }
    ]
  },
  {
    id: 7, level: "beginner", title: "7. CÃ¡c má»‡nh Ä‘á» bá»• trá»£ (Logic & Sort)",
    sections: [
      { type: 'heading', content: 'Tinh chá»‰nh Output cho UI/UX' },
      { type: 'text', content: 'Dá»¯ liá»‡u thÃ´ tá»« Database náº¿u Ä‘áº©y tháº³ng lÃªn Website sáº½ ráº¥t lá»™n xá»™n. Báº¡n cáº§n pháº£i sáº¯p xáº¿p thá»© tá»±, cáº¯t nhá» trang (phÃ¢n trang) vÃ  há»— trá»£ tÃ¬m kiáº¿m má».' },
      { type: 'subheading', content: 'Sáº¯p xáº¿p (ORDER BY) vÃ  PhÃ¢n trang (LIMIT)' },
      { type: 'note', content: 'â€¢ ORDER BY: Sáº¯p xáº¿p theo má»™t cá»™t. DÃ¹ng `ASC` cho tÄƒng dáº§n (A-Z) vÃ  `DESC` cho giáº£m dáº§n (Z-A).\nâ€¢ LIMIT n OFFSET m: Láº¥y Ä‘Ãºng n báº£n ghi, vÃ  bá» qua m báº£n ghi Ä‘áº§u tiÃªn. ÄÃ¢y chÃ­nh lÃ  logic cá»‘t lÃµi Ä‘áº±ng sau má»i nÃºt "Next Page 2, 3, 4" trÃªn cÃ¡c website thÆ°Æ¡ng máº¡i Ä‘iá»‡n tá»­.' },
      { type: 'practice', instruction: 'VÃ­ dá»¥ kinh Ä‘iá»ƒn: Láº¥y ra 3 nhÃ¢n viÃªn cÃ³ má»©c lÆ°Æ¡ng CAO NHáº¤T (Sáº¯p xáº¿p giáº£m dáº§n + Giá»›i háº¡n 3 ngÆ°á»i):', query: "SELECT * FROM employees \nORDER BY hourly_pay DESC \nLIMIT 3;" },
      { type: 'subheading', content: 'TÃ¬m kiáº¿m chuá»—i báº±ng LIKE' },
      { type: 'text', content: 'Sá»­ dá»¥ng toÃ¡n tá»­ LIKE káº¿t há»£p Wildcards (KÃ½ tá»± Ä‘áº¡i diá»‡n) Ä‘á»ƒ lÃ m chá»©c nÄƒng thanh Search. \nKÃ½ tá»± `%` Ä‘áº¡i diá»‡n cho vÃ´ sá»‘ kÃ½ tá»± báº¥t ká»³. KÃ½ tá»± `_` Ä‘áº¡i diá»‡n cho ÄÃšNG 1 kÃ½ tá»±.' },
      { type: 'practice', instruction: 'TÃ¬m kiáº¿m táº¥t cáº£ nhÃ¢n viÃªn cÃ³ tÃªn báº¯t Ä‘áº§u báº±ng chá»¯ "S":', query: "SELECT * FROM employees \nWHERE first_name LIKE 'S%';" }
    ],
    quiz: [
      { question: "Náº¿u User Ä‘ang á»Ÿ Trang 2 (má»—i trang hiá»‡n 10 sáº£n pháº©m), cÃ¢u lá»‡nh SQL nÃ o xá»­ lÃ½ logic phÃ¢n trang nÃ y Ä‘Ãºng nháº¥t?", options: ["LIMIT 20", "LIMIT 10 OFFSET 10", "OFFSET 2 LIMIT 10"], answer: 1 },
      { question: "ToÃ¡n tá»­ BETWEEN 10 AND 20 tÆ°Æ¡ng Ä‘Æ°Æ¡ng vá»›i Ä‘iá»u kiá»‡n nÃ o?", options: ["> 10 AND < 20", ">= 10 AND <= 20", ">= 10 AND < 20"], answer: 1 },
      { question: "ORDER BY salary DESC, name ASC sáº½ sáº¯p xáº¿p tháº¿ nÃ o?", options: ["LÆ°Æ¡ng giáº£m dáº§n; cÃ¹ng lÆ°Æ¡ng thÃ¬ tÃªn A-Z", "LÆ°Æ¡ng tÄƒng dáº§n; tÃªn Z-A", "Chá»‰ sáº¯p theo lÆ°Æ¡ng, bá» qua tÃªn"], answer: 0 }
    ]
  },

  // --- ADVANCED MODULES ---
  {
    id: 8, level: "advanced", title: "8. Subqueries & CTEs (WITH)",
    sections: [
      { type: 'heading', content: 'Truy váº¥n lá»“ng vÃ  Báº£ng táº¡m CTE' },
      { type: 'text', content: 'Subquery (Truy váº¥n con) lÃ  viá»‡c báº¡n viáº¿t má»™t cÃ¢u SELECT náº±m lá»t thá»m bÃªn trong má»™t cÃ¢u lá»‡nh SQL khÃ¡c. NÃ³ ráº¥t tuyá»‡t vá»i Ä‘á»ƒ tÃ­nh toÃ¡n cÃ¡c con sá»‘ so sÃ¡nh Ä‘á»™ng (Dynamic values).' },
      { type: 'practice', instruction: 'TÃ¬m nhá»¯ng nhÃ¢n viÃªn cÃ³ lÆ°Æ¡ng CAO HÆ N má»©c lÆ°Æ¡ng trung bÃ¬nh cÃ´ng ty (Subquery náº±m trong WHERE):', query: "SELECT first_name, hourly_pay \nFROM employees \nWHERE hourly_pay > (\n   SELECT AVG(hourly_pay) FROM employees\n);" },
      { type: 'subheading', content: 'Váº¥n Ä‘á» Spaghetti Code vÃ  Giáº£i phÃ¡p CTE' },
      { type: 'text', content: 'Khi logic nghiá»‡p vá»¥ phá»©c táº¡p, báº¡n cÃ³ thá»ƒ pháº£i lá»“ng 3-4 Subqueries vÃ o nhau. MÃ£ nguá»“n lÃºc Ä‘Ã³ sáº½ cÃ³ hÃ¬nh chá»¯ V (lÃµm sÃ¢u vÃ o trong), Ä‘Æ°á»£c giá»›i láº­p trÃ¬nh gá»i lÃ  Code rÃ¡c (Spaghetti Code) do khÃ´ng thá»ƒ Ä‘á»c vÃ  debug ná»•i.' },
      { type: 'diagram', diagramType: 'cte', title: 'MÃ´ hÃ¬nh lÃ m sáº¡ch code vá»›i CTE (Má»‡nh Ä‘á» WITH)' },
      { type: 'note', content: 'ðŸ’¡ CTE (Common Table Expressions) báº±ng má»‡nh Ä‘á» WITH giáº£i quyáº¿t triá»‡t Ä‘á»ƒ váº¥n Ä‘á» nÃ y:\nBáº¡n Ä‘á»‹nh nghÄ©a cÃ¡c Subquery thÃ nh cÃ¡c "Báº£ng Táº¡m" cÃ³ tÃªn rÃµ rÃ ng ngay táº¡i Ä‘áº§u file code. Luá»“ng Ä‘á»c code sáº½ Ä‘i tuáº§n tá»± tá»« trÃªn xuá»‘ng dÆ°á»›i. CÃ¡c báº£ng táº¡m nÃ y cÃ³ thá»ƒ Ä‘Æ°á»£c tÃ¡i sá»­ dá»¥ng nhiá»u láº§n trong luá»“ng cháº¡y.' },
      { type: 'practice', instruction: 'Viáº¿t láº¡i logic tÃ¬m ngÆ°á»i lÆ°Æ¡ng trÃªn Trung BÃ¬nh má»™t cÃ¡ch chuyÃªn nghiá»‡p vá»›i CTE:', query: "WITH AvgSalary AS (\n  SELECT AVG(hourly_pay) as avg_pay FROM employees\n)\nSELECT e.first_name, e.hourly_pay \nFROM employees e, AvgSalary a \nWHERE e.hourly_pay > a.avg_pay;" }
    ],
    quiz: [
      { question: "Äiá»ƒm vÆ°á»£t trá»™i nháº¥t cá»§a CTE (WITH) so vá»›i Subquery thÃ´ng thÆ°á»ng lÃ  gÃ¬?", options: ["TÄƒng tá»‘c Ä‘á»™ xá»­ lÃ½ nhanh gáº¥p hÃ ng chá»¥c láº§n do lÆ°u vÃ o RAM váº­t lÃ½", "GiÃºp code SQL trá»Ÿ nÃªn pháº³ng, tuáº§n tá»±, dá»… debug vÃ  cÃ³ thá»ƒ tÃ¡i sá»­ dá»¥ng báº£ng táº¡m", "CÃ³ kháº£ nÄƒng gá»i API ra bÃªn ngoÃ i internet"], answer: 1 },
      { question: "Subquery cÃ³ thá»ƒ Ä‘áº·t á»Ÿ nhá»¯ng vá»‹ trÃ­ nÃ o trong cÃ¢u SQL?", options: ["Chá»‰ trong WHERE", "Trong WHERE, FROM, hoáº·c SELECT", "Chá»‰ trong FROM"], answer: 1 },
      { question: "CTE (WITH) cÃ³ thá»ƒ tÃ¡i sá»­ dá»¥ng bao nhiÃªu láº§n trong cÃ¹ng má»™t cÃ¢u query?", options: ["Chá»‰ 1 láº§n", "Nhiá»u láº§n khÃ´ng giá»›i háº¡n", "Tá»‘i Ä‘a 3 láº§n"], answer: 1 }
    ]
  },
  {
    id: 9, level: "advanced", title: "9. HÃ m Cá»­a Sá»• (Window Functions)",
    sections: [
      { type: 'heading', content: 'Window Functions: ChÃ¬a khÃ³a Data Analysis' },
      { type: 'text', content: 'Window Functions (HÃ m Cá»­a Sá»•) lÃ  má»™t tÃ­nh nÄƒng cao cáº¥p cá»§a SQL (ra máº¯t chuáº©n nÄƒm 2003). ÄÃ¢y lÃ  cÃ¢u há»i phá»ng váº¥n thÆ°á»ng xuyÃªn nháº¥t á»Ÿ vá»‹ trÃ­ Data Analyst / Data Engineer.' },
      { type: 'subheading', content: 'VÆ°á»£t qua giá»›i háº¡n cá»§a GROUP BY' },
      { type: 'text', content: 'Lá»‡nh GROUP BY cÃ³ má»™t nhÆ°á»£c Ä‘iá»ƒm chÃ­ máº¡ng: NÃ³ gom nhiá»u dÃ²ng láº¡i thÃ nh 1 dÃ²ng tÃ³m táº¯t, khiáº¿n báº¡n Bá»Š Máº¤T Ä‘i cÃ¡c dÃ²ng chi tiáº¿t gá»‘c. Window Function cho phÃ©p báº¡n trÆ°á»£t má»™t "Khung Cá»­a Sá»•" lÃªn cÃ¡c dÃ²ng Ä‘á»ƒ tÃ­nh toÃ¡n (nhÆ° tÃ­nh xáº¿p háº¡ng, tá»•ng lÅ©y káº¿) mÃ  VáºªN GIá»® NGUYÃŠN cÃ¡c dÃ²ng chi tiáº¿t hiá»ƒn thá»‹ Ä‘áº§y Ä‘á»§.' },
      { type: 'diagram', diagramType: 'window', title: 'Minh há»a cÃ¡ch Frame (Khung) trÆ°á»£t qua cÃ¡c phÃ¢n vÃ¹ng' },
      { type: 'note', content: 'CÃ¡c HÃ m Cá»­a Sá»• "Ä‚n tiá»n" nháº¥t:\nâ€¢ CÃº phÃ¡p lÃµi: `HÃ m_TÃ­nh() OVER (PARTITION BY cá»™t_chia_nhÃ³m ORDER BY cá»™t_sáº¯p_xáº¿p)`\nâ€¢ ROW_NUMBER(): ÄÃ¡nh sá»‘ thá»© tá»± 1,2,3,4 báº¥t cháº¥p trÃ¹ng láº·p.\nâ€¢ RANK(): Xáº¿p háº¡ng. Náº¿u cÃ³ 2 ngÆ°á»i báº±ng Ä‘iá»ƒm á»Ÿ háº¡ng 1, ngÆ°á»i tiáº¿p theo sáº½ lÃ  háº¡ng 3 (Bá» nháº£y sá»‘: 1,1,3,4).\nâ€¢ DENSE_RANK(): Xáº¿p háº¡ng sÃ­t sao. NgÆ°á»i tiáº¿p theo váº«n lÃ  háº¡ng 2 (1,1,2,3).\nâ€¢ LAG() / LEAD(): Soi dá»¯ liá»‡u cá»§a dÃ²ng LIá»€N TRÆ¯á»šC / LIá»€N SAU dÃ²ng hiá»‡n táº¡i.' },
      { type: 'practice', instruction: 'Xáº¿p háº¡ng nhÃ¢n viÃªn theo má»©c lÆ°Æ¡ng cao xuá»‘ng tháº¥p báº±ng RANK() OVER:', query: "SELECT \n  first_name, \n  hourly_pay, \n  RANK() OVER(ORDER BY hourly_pay DESC) as rank_luong \nFROM employees;" }
    ],
    quiz: [
      { question: "Trong cuá»™c thi Sales, Top 2 ngÆ°á»i dáº«n Ä‘áº§u cÃ³ doanh thu Báº°NG NHAU. Náº¿u báº¡n dÃ¹ng hÃ m DENSE_RANK(), ngÆ°á»i thá»© 3 sáº½ Ä‘Æ°á»£c Ä‘Ã¡nh sá»‘ háº¡ng máº¥y?", options: ["Háº¡ng 2", "Háº¡ng 3", "BÃ¡o lá»—i há»‡ thá»‘ng"], answer: 0 },
      { question: "Window Function khÃ¡c GROUP BY á»Ÿ Ä‘iá»ƒm quan trá»ng nháº¥t nÃ o?", options: ["Window Function cháº¡y nhanh hÆ¡n GROUP BY", "Window Function giá»¯ nguyÃªn táº¥t cáº£ dÃ²ng chi tiáº¿t, khÃ´ng gá»™p dÃ²ng", "Window Function khÃ´ng cáº§n ORDER BY"], answer: 1 },
      { question: "HÃ m LAG(salary, 1) OVER (ORDER BY hire_date) tráº£ vá» giÃ¡ trá»‹ gÃ¬?", options: ["LÆ°Æ¡ng cá»§a dÃ²ng tiáº¿p theo", "LÆ°Æ¡ng cá»§a dÃ²ng liá»n TRÆ¯á»šC theo thá»© tá»± hire_date", "LÆ°Æ¡ng trung bÃ¬nh"], answer: 1 }
    ]
  },
  {
    id: 10, level: "advanced", title: "10. Tá»‘i Æ°u hÃ³a (Indexes & Views)",
    sections: [
      { type: 'heading', content: 'Performance Tuning & Báº£o máº­t' },
      { type: 'text', content: 'Khi cÃ´ng ty phÃ¡t triá»ƒn, báº£ng Database cá»§a báº¡n cÃ³ thá»ƒ phÃ¬nh to lÃªn 50 triá»‡u dÃ²ng. LÃºc nÃ y má»™t cÃ¢u lá»‡nh `SELECT ... WHERE tÃªn = "Nguyá»…n VÄƒn A"` thÃ´ng thÆ°á»ng sáº½ máº¥t Ä‘áº¿n vÃ i phÃºt Ä‘á»ƒ quÃ©t toÃ n bá»™ báº£ng (Table Scan). NgÆ°á»i dÃ¹ng sáº½ bá» Ä‘i.' },
      { type: 'diagram', diagramType: 'index', title: 'Cáº¥u trÃºc tÃ¬m kiáº¿m CÃ¢y B-Tree cá»§a Index' },
      { type: 'subheading', content: 'Chá»‰ má»¥c (INDEX) - Con dao hai lÆ°á»¡i' },
      { type: 'text', content: 'Chá»‰ má»¥c trong SQL hoáº¡t Ä‘á»™ng giá»‘ng nhÆ° trang "Má»¥c lá»¥c" náº±m á»Ÿ cuá»‘i má»™t cuá»‘n sÃ¡ch dÃ y. Thay vÃ¬ pháº£i láº­t tá»«ng trang, MySQL sá»­ dá»¥ng thuáº­t toÃ¡n cÃ¢y B-Tree Ä‘á»ƒ nháº£y tháº³ng Ä‘áº¿n vá»‹ trÃ­ dá»¯ liá»‡u. Tá»‘c Ä‘á»™ tÃ¬m kiáº¿m giáº£m tá»« Ä‘á»™ phá»©c táº¡p O(N) xuá»‘ng má»©c lÃ½ tÆ°á»Ÿng O(log N) â€” Nhanh gáº¥p hÃ ng nghÃ¬n láº§n.' },
      { type: 'note', content: 'âš ï¸ Lá»–I CHáº¾T NGÆ¯á»œI Cá»¦A JUNIOR:\nÄá»«ng bao giá» Ä‘Ã¡nh Index cho Táº¤T Cáº¢ cÃ¡c cá»™t. Khi báº¡n INSERT, UPDATE, hoáº·c DELETE má»™t dÃ²ng, cÆ¡ sá»Ÿ dá»¯ liá»‡u pháº£i TÃNH TOÃN VÃ€ Cáº¬P NHáº¬T Láº I toÃ n bá»™ cÃ¡c "Má»¥c Lá»¥c" nÃ y. ÄÃ¡nh quÃ¡ nhiá»u Index sáº½ lÃ m há»‡ thá»‘ng cháº­m Ä‘i tháº£m háº¡i má»—i khi ghi dá»¯ liá»‡u. Index cÃ²n tá»‘n dung lÆ°á»£ng á»• cá»©ng váº­t lÃ½ (RAM/Disk).' },
      { type: 'practice', instruction: 'Thá»±c hÃ nh táº¡o Index trÃªn cá»™t TÃªn Ä‘á»ƒ lÃ m API thanh tÃ¬m kiáº¿m nhanh hÆ¡n:', query: "CREATE INDEX idx_first_name \nON employees(first_name);" },
      { type: 'subheading', content: 'Báº£ng áº¢o (VIEW)' },
      { type: 'text', content: 'VIEW lÃ  má»™t truy váº¥n SELECT phá»©c táº¡p Ä‘Æ°á»£c lÆ°u láº¡i dÆ°á»›i dáº¡ng má»™t cÃ¡i tÃªn áº£o. NÃ³ giÃºp cÃ¡c phÃ²ng ban (VD: Marketing) cÃ³ thá»ƒ truy xuáº¥t dá»¯ liá»‡u dá»… dÃ ng mÃ  DEV khÃ´ng cáº§n pháº£i chia sáº» cáº¥u trÃºc tháº­t cá»§a Database gá»‘c (Báº£o vá»‡ tÃ­nh báº£o máº­t).' }
    ],
    quiz: [
      { question: "Há»‡ lá»¥y chÃ­ máº¡ng cá»§a viá»‡c Láº¡m Dá»¥ng Ä‘Ã¡nh Index lÃªn quÃ¡ nhiá»u cá»™t trong báº£ng lÃ  gÃ¬?", options: ["LÃ m cháº­m Ä‘Ã¡ng ká»ƒ cÃ¡c truy váº¥n SELECT vÃ  JOIN", "LÃ m giáº£m hiá»‡u nÄƒng cÃ¡c thao tÃ¡c ghi dá»¯ liá»‡u (INSERT, UPDATE, DELETE) vÃ  phÃ¬nh to á»• cá»©ng", "GÃ¢y ra lá»—i vÃ²ng láº·p vÃ´ háº¡n trong CSDL"], answer: 1 },
      { question: "VIEW cÃ³ lÆ°u trá»¯ dá»¯ liá»‡u váº­t lÃ½ trong á»• cá»©ng khÃ´ng?", options: ["CÃ³, giá»‘ng báº£ng tháº­t", "KhÃ´ng, nÃ³ chá»‰ lÃ  truy váº¥n (query) Ä‘Æ°á»£c lÆ°u dÆ°á»›i má»™t cÃ¡i tÃªn", "TÃ¹y cáº¥u hÃ¬nh Database"], answer: 1 },
      { question: "Khi nÃ o KHÃ”NG NÃŠN táº¡o Index?", options: ["Cá»™t thÆ°á»ng xuyÃªn dÃ¹ng trong WHERE", "Báº£ng cÃ³ kÃ­ch thÆ°á»›c ráº¥t nhá» hoáº·c cá»™t cÃ³ Ã­t giÃ¡ trá»‹ Ä‘a dáº¡ng", "Cá»™t thÆ°á»ng xuyÃªn dÃ¹ng trong JOIN"], answer: 1 }
    ]
  },
  {
    id: 11, level: "advanced", title: "11. Tá»± Ä‘á»™ng hÃ³a (Procedures & Triggers)",
    sections: [
      { type: 'heading', content: 'Láº­p trÃ¬nh Logic trong lÃ²ng Database Engine' },
      { type: 'text', content: 'ThÃ´ng thÆ°á»ng, Logic nghiá»‡p vá»¥ (Business Logic) Ä‘Æ°á»£c viáº¿t báº±ng NodeJS, Python, Java. Tuy nhiÃªn, viá»‡c Ä‘áº©y Ä‘i Ä‘áº©y láº¡i hÃ ng chá»¥c truy váº¥n SQL qua láº¡i giá»¯a Server Code vÃ  Server Database sáº½ gÃ¢y ngháº½n cá»• chai máº¡ng (Network Bottleneck). Ta cÃ³ thá»ƒ nhÃºng trá»±c tiáº¿p code vÃ o DB.' },
      { type: 'subheading', content: 'Stored Procedures (Thá»§ tá»¥c lÆ°u trá»¯)' },
      { type: 'text', content: 'Stored Procedure lÃ  cÃ¡c Ä‘oáº¡n code SQL Ä‘Æ°á»£c biÃªn dá»‹ch (compile) sáºµn bÃªn trong Database. ChÃºng hoáº¡t Ä‘á»™ng nhÆ° cÃ¡c HÃ m (Functions), cÃ³ thá»ƒ nháº­n tham sá»‘ (IN) vÃ  tráº£ vá» káº¿t quáº£ (OUT). DÃ¹ng Procedures giÃºp giáº£m thiá»ƒu lÆ°u lÆ°á»£ng máº¡ng vÃ  lÃ  lá»›p phÃ²ng thá»§ thÃ©p chá»‘ng láº¡i cÃ¡c cuá»™c táº¥n cÃ´ng SQL Injection.' },
      { type: 'practice', instruction: 'VÃ­ dá»¥ táº¡o má»™t Procedure Ä‘Ã³ng gÃ³i logic láº¥y danh sÃ¡ch nhÃ¢n sá»±:', query: "CREATE PROCEDURE GetAllEmps()\nBEGIN\n  SELECT * FROM employees;\nEND;" },
      { type: 'diagram', diagramType: 'trigger', title: 'Luá»“ng Tá»± Ä‘á»™ng kÃ­ch hoáº¡t (Fire) cá»§a Triggers' },
      { type: 'subheading', content: 'Triggers (TrÃ¬nh kÃ­ch hoáº¡t)' },
      { type: 'note', content: 'Triggers giá»‘ng nhÆ° nhá»¯ng "Quáº£ MÃ¬n" cháº¡y áº©n ngáº§m. Khi cÃ³ má»™t hÃ nh vi (Event) nhÆ° INSERT, UPDATE, hoáº·c DELETE xáº£y ra trÃªn má»™t báº£ng cá»¥ thá»ƒ, Trigger sáº½ Tá»° Äá»˜NG FIRE (kÃ­ch hoáº¡t) cháº¡y má»™t khá»‘i code SQL khÃ¡c tÆ°Æ¡ng á»©ng (CÃ³ thá»ƒ BEFORE hoáº·c AFTER sá»± kiá»‡n).\n\nðŸ’¡ á»¨ng dá»¥ng Thá»±c chiáº¿n:\n1. Audit Log: Ai Ä‘Ã³ Ä‘á»•i giÃ¡ sáº£n pháº©m? Trigger tá»± Ä‘á»™ng copy giÃ¡ cÅ© lÆ°u vÃ o báº£ng Lá»‹ch Sá»­ Lá»›n.\n2. Tá»“n Kho: CÃ³ Ä‘Æ¡n hÃ ng má»›i (INSERT Orders)? Trigger tá»± Ä‘á»™ng trá»« sá»‘ lÆ°á»£ng sáº£n pháº©m á»Ÿ báº£ng Kho (UPDATE Inventory).' }
    ],
    quiz: [
      { question: "TÃ­nh nÄƒng nÃ o cho phÃ©p há»‡ thá»‘ng Database Tá»° Äá»˜NG CHáº Y má»™t Ä‘oáº¡n mÃ£ SQL khÃ¡c ngay láº­p tá»©c khi báº£ng dá»¯ liá»‡u bá»‹ chá»‰nh sá»­a?", options: ["STORED PROCEDURE", "VIEW", "TRIGGER"], answer: 2 },
      { question: "Stored Procedure khÃ¡c View á»Ÿ Ä‘iá»ƒm nÃ o?", options: ["View cháº¡y nhanh hÆ¡n", "Procedure cÃ³ thá»ƒ nháº­n tham sá»‘ (IN/OUT) vÃ  chá»©a logic phá»©c táº¡p (IF, LOOP)", "View báº£o máº­t hÆ¡n Procedure"], answer: 1 },
      { question: "Trigger BEFORE INSERT sáº½ cháº¡y khi nÃ o?", options: ["Sau khi dá»¯ liá»‡u Ä‘Ã£ Ä‘Æ°á»£c chÃ¨n thÃ nh cÃ´ng", "Ngay trÆ°á»›c khi dá»¯ liá»‡u Ä‘Æ°á»£c chÃ¨n vÃ o báº£ng", "Khi ngÆ°á»i dÃ¹ng gÃµ lá»‡nh INSERT nhÆ°ng chÆ°a nháº¥n Enter"], answer: 1 }
    ]
  },

  // --- NEW MODULES (12-17) ---
  {
    id: 12, level: "advanced", title: "12. Giao dá»‹ch (Transactions & ACID)",
    sections: [
      { type: 'heading', content: 'Báº£o vá»‡ Dá»¯ liá»‡u báº±ng Giao dá»‹ch (Transaction)' },
      { type: 'text', content: 'TÆ°á»Ÿng tÆ°á»£ng báº¡n Ä‘ang chuyá»ƒn 10 triá»‡u VNÄ tá»« TÃ i khoáº£n A sang B. MySQL thá»±c hiá»‡n 2 bÆ°á»›c: (1) Trá»« tiá»n A, (2) Cá»™ng tiá»n B. Náº¿u há»‡ thá»‘ng sáº­p GIá»®A bÆ°á»›c 1 vÃ  2, tiá»n sáº½ Bá»C HÆ I! Transaction Ä‘áº£m báº£o hoáº·c Cáº¢ HAI bÆ°á»›c thÃ nh cÃ´ng, hoáº·c KHÃ”NG bÆ°á»›c nÃ o Ä‘Æ°á»£c thá»±c hiá»‡n.' },
      { type: 'note', content: 'ðŸ”’ 4 TÃ­nh cháº¥t ACID (Báº¯t buá»™c nhá»› khi phá»ng váº¥n):\n\nâ€¢ Atomicity (NguyÃªn tá»­): Táº¥t cáº£ hoáº·c KhÃ´ng gÃ¬ cáº£. KhÃ´ng cÃ³ tráº¡ng thÃ¡i \"ná»­a vá»i\".\nâ€¢ Consistency (Nháº¥t quÃ¡n): Dá»¯ liá»‡u luÃ´n tuÃ¢n thá»§ má»i rÃ ng buá»™c trÆ°á»›c vÃ  sau giao dá»‹ch.\nâ€¢ Isolation (CÃ´ láº­p): CÃ¡c giao dá»‹ch song song khÃ´ng can thiá»‡p láº«n nhau.\nâ€¢ Durability (Bá»n vá»¯ng): Khi Ä‘Ã£ COMMIT, dá»¯ liá»‡u Ä‘Æ°á»£c lÆ°u vÄ©nh viá»…n ká»ƒ cáº£ khi máº¥t Ä‘iá»‡n.' },
      { type: 'subheading', content: 'COMMIT, ROLLBACK vÃ  SAVEPOINT' },
      { type: 'text', content: 'MySQL máº·c Ä‘á»‹nh á»Ÿ cháº¿ Ä‘á»™ AUTO COMMIT: má»—i cÃ¢u lá»‡nh tá»± Ä‘á»™ng lÆ°u ngay. Khi táº¯t cháº¿ Ä‘á»™ nÃ y (SET AUTOCOMMIT = 0), báº¡n cáº§n gá»i COMMIT thá»§ cÃ´ng Ä‘á»ƒ lÆ°u, hoáº·c ROLLBACK Ä‘á»ƒ há»§y bá». SAVEPOINT táº¡o cÃ¡c \"Ä‘iá»ƒm lÆ°u\" trung gian, cho phÃ©p ROLLBACK Ä‘áº¿n Ä‘Ãºng vá»‹ trÃ­ mong muá»‘n thay vÃ¬ há»§y toÃ n bá»™.' },
      { type: 'practice', instruction: 'VÃ­ dá»¥ chuyá»ƒn tiá»n ngÃ¢n hÃ ng an toÃ n vá»›i Transaction:', query: "START TRANSACTION;\n\nUPDATE accounts SET balance = balance - 10000000 WHERE id = 1;\nUPDATE accounts SET balance = balance + 10000000 WHERE id = 2;\n\n-- Kiá»ƒm tra káº¿t quáº£ trÆ°á»›c khi lÆ°u\nSELECT * FROM accounts;\n\nCOMMIT;  -- Hoáº·c ROLLBACK náº¿u cÃ³ lá»—i" },
      { type: 'practice', instruction: 'Sá»­ dá»¥ng SAVEPOINT Ä‘á»ƒ rollback tá»«ng pháº§n:', query: "START TRANSACTION;\n\nINSERT INTO logs VALUES (1, 'Step 1: OK');\nSAVEPOINT sp1;\n\nINSERT INTO logs VALUES (2, 'Step 2: FAILED');\nROLLBACK TO SAVEPOINT sp1;  -- Chá»‰ há»§y Step 2\n\nINSERT INTO logs VALUES (3, 'Step 3: OK');\nCOMMIT;  -- LÆ°u Step 1 + Step 3" }
    ],
    quiz: [
      { question: "Chá»¯ 'A' trong ACID (Atomicity) cÃ³ nghÄ©a lÃ  gÃ¬?", options: ["Dá»¯ liá»‡u luÃ´n chÃ­nh xÃ¡c", "Táº¥t cáº£ hoáº·c KhÃ´ng gÃ¬ cáº£ â€” giao dá»‹ch khÃ´ng cÃ³ tráº¡ng thÃ¡i ná»­a vá»i", "CÃ¡c giao dá»‹ch cháº¡y song song Ä‘Æ°á»£c cÃ´ láº­p"], answer: 1 },
      { question: "Khi nÃ o cáº§n dÃ¹ng SAVEPOINT thay vÃ¬ ROLLBACK thÃ´ng thÆ°á»ng?", options: ["Khi muá»‘n há»§y toÃ n bá»™ giao dá»‹ch", "Khi muá»‘n chá»‰ há»§y má»™t pháº§n (rollback Ä‘áº¿n Ä‘iá»ƒm cá»¥ thá»ƒ) mÃ  giá»¯ láº¡i cÃ¡c bÆ°á»›c trÆ°á»›c", "Khi muá»‘n tÄƒng tá»‘c Ä‘á»™ giao dá»‹ch"], answer: 1 },
      { question: "MySQL máº·c Ä‘á»‹nh á»Ÿ cháº¿ Ä‘á»™ AUTO COMMIT. Äiá»u nÃ y cÃ³ nghÄ©a gÃ¬?", options: ["Má»—i cÃ¢u lá»‡nh SQL tá»± Ä‘á»™ng Ä‘Æ°á»£c lÆ°u ngay láº­p tá»©c", "Há»‡ thá»‘ng tá»± commit vÃ o lÃºc ná»­a Ä‘Ãªm", "Chá»‰ lÆ°u khi user gÃµ lá»‡nh COMMIT"], answer: 0 }
    ]
  },
  {
    id: 13, level: "advanced", title: "13. HÃ m NgÃ y & CASE WHEN",
    sections: [
      { type: 'heading', content: 'Xá»­ lÃ½ Thá»i gian & Biáº¿n Ä‘á»•i Dá»¯ liá»‡u' },
      { type: 'text', content: 'Trong thá»±c táº¿, ráº¥t nhiá»u nghiá»‡p vá»¥ xoay quanh Thá»i gian: \"ÄÆ¡n hÃ ng trong 30 ngÃ y gáº§n nháº¥t\", \"NhÃ¢n viÃªn Ä‘Ã£ lÃ m bao nhiÃªu nÄƒm?\". MySQL cung cáº¥p cÃ¡c hÃ m xá»­ lÃ½ ngÃ y thÃ¡ng máº¡nh máº½ Ä‘á»ƒ giáº£i quyáº¿t cÃ¡c bÃ i toÃ¡n nÃ y.' },
      { type: 'note', content: 'ðŸ“… CÃ¡c hÃ m Date/Time quan trá»ng:\nâ€¢ CURRENT_DATE() â†’ NgÃ y hÃ´m nay (VD: 2024-06-15)\nâ€¢ CURRENT_TIME() â†’ Giá» hiá»‡n táº¡i (VD: 14:30:00)\nâ€¢ NOW() â†’ Káº¿t há»£p cáº£ ngÃ y vÃ  giá»\nâ€¢ DATEDIFF(date1, date2) â†’ Sá»‘ ngÃ y chÃªnh lá»‡ch\nâ€¢ DATE_FORMAT(date, format) â†’ Format láº¡i ngÃ y\nâ€¢ YEAR(), MONTH(), DAY() â†’ TrÃ­ch xuáº¥t pháº§n nÄƒm/thÃ¡ng/ngÃ y' },
      { type: 'practice', instruction: 'TÃ­nh sá»‘ ngÃ y lÃ m viá»‡c cá»§a nhÃ¢n viÃªn (tá»« ngÃ y vÃ o Ä‘áº¿n hiá»‡n táº¡i):', query: "SELECT first_name,\n  hire_date,\n  DATEDIFF(CURRENT_DATE(), hire_date) AS days_worked\nFROM employees;" },
      { type: 'subheading', content: 'CASE WHEN â€” \"If-Else\" cá»§a SQL' },
      { type: 'text', content: 'CASE WHEN lÃ  cÃ´ng cá»¥ biáº¿n Ä‘á»•i dá»¯ liá»‡u máº¡nh nháº¥t trong SQL. NÃ³ cho phÃ©p báº¡n táº¡o cá»™t má»›i dá»±a trÃªn Ä‘iá»u kiá»‡n logic â€” giá»‘ng nhÆ° IF/ELSE trong láº­p trÃ¬nh. ÄÃ¢y lÃ  ká»¹ thuáº­t xuáº¥t hiá»‡n Cá»°C Ká»² NHIá»€U trong phá»ng váº¥n Data Analyst.' },
      { type: 'note', content: 'âš¡ CASE WHEN Pattern phá»• biáº¿n:\n1. PhÃ¢n loáº¡i (Bucketing): Chia khÃ¡ch hÃ ng thÃ nh "VIP/Standard/New"\n2. Pivot Table: Xoay dá»¯ liá»‡u tá»« dá»c â†’ ngang\n3. Xá»­ lÃ½ NULL: Thay tháº¿ giÃ¡ trá»‹ NULL báº±ng giÃ¡ trá»‹ cÃ³ Ã½ nghÄ©a\n4. Counting Ä‘iá»u kiá»‡n: COUNT(CASE WHEN status="active" THEN 1 END)' },
      { type: 'practice', instruction: 'PhÃ¢n loáº¡i nhÃ¢n viÃªn theo má»©c lÆ°Æ¡ng (Bucketing):', query: "SELECT first_name, hourly_pay,\n  CASE\n    WHEN hourly_pay >= 50 THEN 'Senior'\n    WHEN hourly_pay >= 25 THEN 'Mid-level'\n    ELSE 'Junior'\n  END AS level\nFROM employees;" }
    ],
    quiz: [
      { question: "HÃ m DATEDIFF('2024-12-31', '2024-01-01') tráº£ vá» giÃ¡ trá»‹ gÃ¬?", options: ["365 (sá»‘ ngÃ y chÃªnh lá»‡ch)", "12 (sá»‘ thÃ¡ng)", "1 (sá»‘ nÄƒm)"], answer: 0 },
      { question: "CASE WHEN trong SQL tÆ°Æ¡ng Ä‘Æ°Æ¡ng vá»›i cáº¥u trÃºc nÃ o trong láº­p trÃ¬nh?", options: ["FOR Loop", "IF / ELSE IF / ELSE", "TRY / CATCH"], answer: 1 },
      { question: "DÃ¹ng CASE WHEN Ä‘á»ƒ Pivot (xoay dá»¯ liá»‡u) cÃ³ Ã½ nghÄ©a gÃ¬?", options: ["XÃ³a dá»¯ liá»‡u trÃ¹ng láº·p", "Chuyá»ƒn giÃ¡ trá»‹ tá»« dáº¡ng HÃ ng (Rows) sang dáº¡ng Cá»™t (Columns)", "TÄƒng tá»‘c Ä‘á»™ truy váº¥n"], answer: 1 }
    ]
  },
  {
    id: 14, level: "advanced", title: "14. UNION & PhÃ¢n trang (Pagination)",
    sections: [
      { type: 'heading', content: 'Gá»™p Dá»¯ liá»‡u & Logic PhÃ¢n trang Thá»±c táº¿' },
      { type: 'text', content: 'ÄÃ´i khi dá»¯ liá»‡u cáº§n tá»•ng há»£p náº±m ráº£i rÃ¡c á»Ÿ nhiá»u báº£ng hoáº·c truy váº¥n khÃ¡c nhau. UNION cho phÃ©p báº¡n \"xáº¿p chá»“ng\" káº¿t quáº£ tá»« nhiá»u cÃ¢u SELECT thÃ nh má»™t danh sÃ¡ch duy nháº¥t â€” giá»‘ng nhÆ° ghÃ©p nhiá»u file Excel thÃ nh 1 file.' },
      { type: 'note', content: 'ðŸ”— UNION vs UNION ALL:\nâ€¢ UNION: Gá»™p káº¿t quáº£ + Tá»° Äá»˜NG loáº¡i bá» dÃ²ng trÃ¹ng láº·p (cháº­m hÆ¡n do pháº£i so sÃ¡nh).\nâ€¢ UNION ALL: Gá»™p káº¿t quáº£ + GIá»® NGUYÃŠN táº¥t cáº£ dÃ²ng (nhanh hÆ¡n).\n\nâš ï¸ Quy táº¯c báº¯t buá»™c: Táº¥t cáº£ cÃ¡c cÃ¢u SELECT pháº£i cÃ³ CÃ™NG Sá» LÆ¯á»¢NG Cá»˜T vÃ  kiá»ƒu dá»¯ liá»‡u tÆ°Æ¡ng á»©ng.' },
      { type: 'practice', instruction: 'Gá»™p danh sÃ¡ch nhÃ¢n viÃªn tá»« 2 chi nhÃ¡nh (loáº¡i bá» trÃ¹ng tÃªn):', query: "SELECT name FROM employees_hanoi\nUNION\nSELECT name FROM employees_hcm\nORDER BY name;" },
      { type: 'subheading', content: 'DISTINCT & PhÃ¢n trang (LIMIT + OFFSET)' },
      { type: 'text', content: 'DISTINCT loáº¡i bá» dÃ²ng trÃ¹ng láº·p trong káº¿t quáº£ SELECT. Káº¿t há»£p vá»›i LIMIT + OFFSET, báº¡n cÃ³ thá»ƒ xÃ¢y dá»±ng logic phÃ¢n trang (Pagination) cho website â€” Ä‘Ã¢y lÃ  pattern Backend Developer vÃ  Data Analyst Ä‘á»u cáº§n biáº¿t.' },
      { type: 'note', content: 'ðŸ“„ CÃ´ng thá»©c phÃ¢n trang chuáº©n:\nTrang N, má»—i trang K sáº£n pháº©m:\nâ†’ LIMIT K OFFSET (N-1)*K\n\nVD: Trang 3, hiá»‡n 10 sáº£n pháº©m/trang:\nâ†’ LIMIT 10 OFFSET 20' },
      { type: 'practice', instruction: 'Láº¥y sáº£n pháº©m cho Trang 3 (má»—i trang 10 sáº£n pháº©m):', query: "SELECT product_name, price\nFROM products\nORDER BY price DESC\nLIMIT 10 OFFSET 20;" }
    ],
    quiz: [
      { question: "UNION vÃ  UNION ALL khÃ¡c nhau á»Ÿ Ä‘iá»ƒm nÃ o quan trá»ng nháº¥t?", options: ["UNION cháº¡y nhanh hÆ¡n", "UNION loáº¡i bá» dÃ²ng trÃ¹ng láº·p, UNION ALL giá»¯ nguyÃªn táº¥t cáº£", "UNION ALL chá»‰ gá»™p tá»‘i Ä‘a 2 báº£ng"], answer: 1 },
      { question: "Äá»ƒ hiá»ƒn thá»‹ Trang 5 (má»—i trang 20 sáº£n pháº©m), cÃ¢u SQL Ä‘Ãºng lÃ  gÃ¬?", options: ["LIMIT 20 OFFSET 80", "LIMIT 100 OFFSET 20", "LIMIT 20 OFFSET 100"], answer: 0 },
      { question: "DISTINCT Ä‘áº·t á»Ÿ Ä‘Ã¢u trong cÃ¢u SELECT?", options: ["Sau FROM", "Ngay sau tá»« khÃ³a SELECT", "Sau WHERE"], answer: 1 }
    ]
  },
  {
    id: 15, level: "advanced", title: "15. Thiáº¿t káº¿ DB (Normalization)",
    sections: [
      { type: 'heading', content: 'Chuáº©n hÃ³a CÆ¡ sá»Ÿ Dá»¯ liá»‡u (Normalization)' },
      { type: 'text', content: 'Normalization (Chuáº©n hÃ³a) lÃ  quÃ¡ trÃ¬nh tá»• chá»©c báº£ng trong Database sao cho giáº£m thiá»ƒu dá»¯ liá»‡u dÆ° thá»«a (redundancy) vÃ  Ä‘áº£m báº£o tÃ­nh toÃ n váº¹n. ÄÃ¢y lÃ  kiáº¿n thá»©c Ná»€N Táº¢NG mÃ  báº¥t ká»³ cuá»™c phá»ng váº¥n DB nÃ o cÅ©ng há»i â€” Ä‘áº·c biá»‡t khi thiáº¿t káº¿ há»‡ thá»‘ng.' },
      { type: 'note', content: 'ðŸ“ 3 Dáº¡ng Chuáº©n (Normal Forms) cá»‘t lÃµi:\n\n1ï¸âƒ£ 1NF (First Normal Form): Má»—i Ã´ chá»‰ chá»©a Má»˜T giÃ¡ trá»‹ nguyÃªn tá»­ (atomic). KhÃ´ng cÃ³ máº£ng, danh sÃ¡ch, hoáº·c báº£ng con bÃªn trong 1 Ã´.\n   âŒ Sai: Cá»™t skills = "Java, Python, SQL"\n   âœ… ÄÃºng: TÃ¡ch thÃ nh 3 dÃ²ng riÃªng biá»‡t.\n\n2ï¸âƒ£ 2NF: Pháº£i Ä‘áº¡t 1NF + Má»i cá»™t non-key pháº£i phá»¥ thuá»™c vÃ o TOÃ€N Bá»˜ khÃ³a chÃ­nh (khÃ´ng phá»¥ thuá»™c riÃªng má»™t pháº§n). Chá»‰ Ã¡p dá»¥ng khi cÃ³ Composite Key.\n\n3ï¸âƒ£ 3NF: Pháº£i Ä‘áº¡t 2NF + KhÃ´ng cÃ³ phá»¥ thuá»™c báº¯c cáº§u (transitive dependency). Cá»™t A â†’ Cá»™t B â†’ Cá»™t C thÃ¬ C khÃ´ng nÃªn náº±m cÃ¹ng báº£ng vá»›i A.' },
      { type: 'subheading', content: 'Entity-Relationship (ER) Diagram' },
      { type: 'text', content: 'ER Diagram lÃ  báº£n váº½ thiáº¿t káº¿ Database. NÃ³ mÃ´ táº£ cÃ¡c Thá»±c thá»ƒ (Entity/Báº£ng), Thuá»™c tÃ­nh (Attributes/Cá»™t), vÃ  Má»‘i quan há»‡ (Relationships: 1-1, 1-N, N-N). CÃ´ng cá»¥ phá»• biáº¿n: MySQL Workbench cÃ³ thá»ƒ tá»± sinh ER tá»« DB Ä‘Ã£ cÃ³ (Reverse Engineer) hoáº·c táº¡o DB tá»« ER (Forward Engineer).' },
      { type: 'note', content: 'ðŸ¤” Khi nÃ o KHÃ”NG chuáº©n hÃ³a (Denormalization)?\nKhi Æ°u tiÃªn tá»‘c Ä‘á»™ Äá»ŒC hÆ¡n tá»‘c Ä‘á»™ GHI:\nâ€¢ Data Warehouse / OLAP: Cáº§n query nhanh, khÃ´ng sá»­a liÃªn tá»¥c.\nâ€¢ Há»‡ thá»‘ng read-heavy (BÃ¡o cÃ¡o, Dashboard).\nâ€¢ Caching layer Ä‘á»ƒ giáº£m sá»‘ láº§n JOIN.\n\nÄÃ¡nh Ä‘á»•i: Chuáº©n hÃ³a quÃ¡ má»©c â†’ nhiá»u JOIN â†’ cháº­m. Denormalize quÃ¡ má»©c â†’ dá»¯ liá»‡u trÃ¹ng â†’ khÃ³ maintain.' }
    ],
    quiz: [
      { question: "Quy táº¯c 1NF (First Normal Form) yÃªu cáº§u gÃ¬?", options: ["Má»—i báº£ng pháº£i cÃ³ khÃ³a ngoáº¡i", "Má»—i Ã´ trong báº£ng chá»‰ chá»©a Má»˜T giÃ¡ trá»‹ nguyÃªn tá»­ (atomic)", "KhÃ´ng Ä‘Æ°á»£c cÃ³ dÃ²ng trÃ¹ng láº·p"], answer: 1 },
      { question: "Phá»¥ thuá»™c báº¯c cáº§u (Transitive Dependency) vi pháº¡m dáº¡ng chuáº©n nÃ o?", options: ["1NF", "2NF", "3NF"], answer: 2 },
      { question: "Khi nÃ o nÃªn Denormalize (phÃ¡ chuáº©n) Database?", options: ["Khi database cÃ³ Ã­t dá»¯ liá»‡u", "Khi há»‡ thá»‘ng Æ°u tiÃªn tá»‘c Ä‘á»™ Äá»ŒC vÃ  Ã­t cáº­p nháº­t (Data Warehouse)", "Khi muá»‘n báº£o máº­t tá»‘t hÆ¡n"], answer: 1 }
    ]
  },
  {
    id: 16, level: "advanced", title: "16. HÃ m Chuá»—i & Xá»­ lÃ½ NULL",
    sections: [
      { type: 'heading', content: 'Xá»­ lÃ½ Chuá»—i VÄƒn báº£n & GiÃ¡ trá»‹ NULL' },
      { type: 'text', content: 'Dá»¯ liá»‡u thá»±c táº¿ luÃ´n \"báº©n\": tÃªn viáº¿t HOA láº«n thÆ°á»ng, cÃ³ dáº¥u cÃ¡ch thá»«a, giÃ¡ trá»‹ NULL ráº£i rÃ¡c kháº¯p nÆ¡i. SQL cung cáº¥p cÃ¡c hÃ m xá»­ lÃ½ chuá»—i (String Functions) vÃ  hÃ m xá»­ lÃ½ NULL giÃºp báº¡n \"táº¯m rá»­a\" dá»¯ liá»‡u trÆ°á»›c khi phÃ¢n tÃ­ch.' },
      { type: 'note', content: 'ðŸ”¤ String Functions quan trá»ng:\nâ€¢ CONCAT(a, b): Ná»‘i chuá»—i â†’ "Nguyá»…n" + " " + "VÄƒn A" = "Nguyá»…n VÄƒn A"\nâ€¢ UPPER(s) / LOWER(s): Äá»•i sang CHá»® HOA / chá»¯ thÆ°á»ng\nâ€¢ TRIM(s): XÃ³a dáº¥u cÃ¡ch thá»«a 2 Ä‘áº§u\nâ€¢ SUBSTRING(s, start, length): Cáº¯t chuá»—i con\nâ€¢ LENGTH(s): Äáº¿m kÃ½ tá»±\nâ€¢ REPLACE(s, old, new): Thay tháº¿ chuá»—i con\nâ€¢ LEFT(s, n) / RIGHT(s, n): Láº¥y n kÃ½ tá»± tá»« trÃ¡i/pháº£i' },
      { type: 'practice', instruction: 'Gá»™p Há» vÃ  TÃªn thÃ nh má»™t cá»™t Full Name viáº¿t hoa:', query: "SELECT \n  UPPER(CONCAT(last_name, ' ', first_name)) AS full_name,\n  TRIM(email) AS clean_email\nFROM employees;" },
      { type: 'subheading', content: 'Xá»­ lÃ½ NULL â€” Káº» phÃ¡ hoáº¡i tháº§m láº·ng' },
      { type: 'text', content: 'NULL khÃ´ng pháº£i lÃ  0, khÃ´ng pháº£i chuá»—i rá»—ng. NULL cÃ³ nghÄ©a lÃ  CHÆ¯A BIáº¾T / KHÃ”NG CÃ“. Má»i phÃ©p tÃ­nh vá»›i NULL Ä‘á»u tráº£ vá» NULL (VD: 100 + NULL = NULL). ÄÃ¢y lÃ  nguá»“n gá»‘c vÃ´ sá»‘ bug mÃ  developer gáº·p pháº£i.' },
      { type: 'note', content: 'ðŸ›¡ï¸ VÅ© khÃ­ chá»‘ng NULL:\nâ€¢ COALESCE(a, b, c): Tráº£ vá» giÃ¡ trá»‹ NOT NULL Ä‘áº§u tiÃªn trong danh sÃ¡ch. VD: COALESCE(bonus, 0) â†’ náº¿u bonus = NULL thÃ¬ tráº£ vá» 0.\nâ€¢ IFNULL(a, b): PhiÃªn báº£n rÃºt gá»n chá»‰ cho 2 giÃ¡ trá»‹.\nâ€¢ NULLIF(a, b): Tráº£ vá» NULL náº¿u a = b (dÃ¹ng trÃ¡nh chia cho 0).\n\nðŸ”¥ TRUNCATE vs DELETE:\nâ€¢ DELETE: XÃ³a dÃ²ng, cÃ³ thá»ƒ WHERE, cÃ³ thá»ƒ ROLLBACK.\nâ€¢ TRUNCATE: XÃ³a Sáº CH toÃ n bá»™ â€” nhanh hÆ¡n nhÆ°ng KHÃ”NG THá»‚ ROLLBACK.' },
      { type: 'practice', instruction: 'DÃ¹ng COALESCE Ä‘á»ƒ thay NULL báº±ng giÃ¡ trá»‹ máº·c Ä‘á»‹nh:', query: "SELECT first_name,\n  COALESCE(bonus, 0) AS bonus_safe,\n  hourly_pay + COALESCE(bonus, 0) AS total_pay\nFROM employees;" }
    ],
    quiz: [
      { question: "Káº¿t quáº£ cá»§a phÃ©p tÃ­nh 100 + NULL trong SQL lÃ  gÃ¬?", options: ["100", "NULL", "0"], answer: 1 },
      { question: "COALESCE(NULL, NULL, 'Hello', 'World') tráº£ vá» giÃ¡ trá»‹ gÃ¬?", options: ["NULL", "'Hello'", "'World'"], answer: 1 },
      { question: "TRUNCATE TABLE khÃ¡c DELETE FROM TABLE á»Ÿ Ä‘iá»ƒm nÃ o?", options: ["TRUNCATE cháº­m hÆ¡n nhÆ°ng an toÃ n hÆ¡n", "TRUNCATE xÃ³a sáº¡ch vÃ  KHÃ”NG THá»‚ rollback, DELETE cÃ³ thá»ƒ rollback", "Giá»‘ng nhau hoÃ n toÃ n"], answer: 1 }
    ]
  },
  {
    id: 17, level: "advanced", title: "17. Quáº£n trá»‹ & Báº£o máº­t (DCL)",
    sections: [
      { type: 'heading', content: 'Quáº£n trá»‹ User & Báº£o máº­t Database (DCL)' },
      { type: 'text', content: 'DCL (Data Control Language) lÃ  nhÃ³m lá»‡nh quáº£n lÃ½ QUYá»€N TRUY Cáº¬P trong Database. Trong mÃ´i trÆ°á»ng cÃ´ng ty thá»±c táº¿, khÃ´ng pháº£i ai cÅ©ng Ä‘Æ°á»£c toÃ n quyá»n â€” Intern chá»‰ nÃªn Ä‘á»c (SELECT), Lead má»›i cÃ³ quyá»n sá»­a (INSERT/UPDATE), chá»‰ DBA má»›i Ä‘Æ°á»£c xÃ³a (DROP).' },
      { type: 'note', content: 'ðŸ‘¤ Quáº£n lÃ½ User & Quyá»n:\nâ€¢ CREATE USER \'username\'@\'host\' IDENTIFIED BY \'password\';\nâ€¢ GRANT SELECT, INSERT ON database.* TO \'username\'@\'host\';\nâ€¢ REVOKE INSERT ON database.* FROM \'username\'@\'host\';\nâ€¢ SHOW GRANTS FOR \'username\'@\'host\';\n\nðŸ“Š Cáº¥p Ä‘á»™ quyá»n (Privilege Levels):\n1. Global (*.*): ToÃ n bá»™ server\n2. Database (db.*): Má»™t database cá»¥ thá»ƒ\n3. Table (db.table): Má»™t báº£ng cá»¥ thá»ƒ\n4. Column: Má»™t cá»™t cá»¥ thá»ƒ trong báº£ng' },
      { type: 'practice', instruction: 'Táº¡o user intern chá»‰ Ä‘Æ°á»£c phÃ©p Äá»ŒC dá»¯ liá»‡u tá»« database company:', query: "CREATE USER 'intern_2024'@'localhost'\nIDENTIFIED BY 'SecurePass123!';\n\nGRANT SELECT ON company.* TO 'intern_2024'@'localhost';\n\n-- Kiá»ƒm tra quyá»n\nSHOW GRANTS FOR 'intern_2024'@'localhost';" },
      { type: 'subheading', content: 'Backup & Restore â€” PhÃ²ng thá»§ tuyá»‡t Ä‘á»‘i' },
      { type: 'text', content: 'DÃ¹ báº¡n cÃ³ báº£o máº­t giá»i Ä‘áº¿n Ä‘Ã¢u, tháº£m há»a váº«n cÃ³ thá»ƒ xáº£y ra: Server chÃ¡y, ransomware, hoáº·c Ä‘Æ¡n giáº£n lÃ  ai Ä‘Ã³ cháº¡y nháº§m lá»‡nh DROP. Backup Ä‘á»‹nh ká»³ lÃ  lá»›p phÃ²ng thá»§ cuá»‘i cÃ¹ng â€” vÃ  cÅ©ng lÃ  cÃ¢u há»i phá»ng váº¥n DBA yÃªu thÃ­ch.' },
      { type: 'note', content: 'ðŸ’¾ Backup & Restore báº±ng mysqldump:\n\nðŸ“¦ Backup (Xuáº¥t ra file .sql):\nmysqldump -u root -p company_db > backup_20240615.sql\n\nðŸ“¥ Restore (Nháº­p láº¡i tá»« file .sql):\nmysql -u root -p company_db < backup_20240615.sql\n\nâš¡ Tips thá»±c chiáº¿n:\nâ€¢ Äáº·t lá»‹ch backup tá»± Ä‘á»™ng báº±ng Cron Job (Linux) hoáº·c Task Scheduler (Windows).\nâ€¢ LÆ°u backup á»Ÿ NGOÃ€I server (AWS S3, Google Drive) phÃ²ng trÆ°á»ng há»£p server váº­t lÃ½ há»ng.\nâ€¢ Test restore Ä‘á»‹nh ká»³ â€” backup mÃ  khÃ´ng restore Ä‘Æ°á»£c thÃ¬ vÃ´ dá»¥ng!' }
    ],
    quiz: [
      { question: "Lá»‡nh nÃ o dÃ¹ng Ä‘á»ƒ Cáº¤P quyá»n SELECT cho user 'intern' trÃªn database 'sales'?", options: ["ALLOW SELECT ON sales.* TO 'intern'", "GRANT SELECT ON sales.* TO 'intern'@'localhost'", "PERMIT SELECT ON sales.* FOR 'intern'"], answer: 1 },
      { question: "Táº¡i sao cáº§n backup database Ä‘á»‹nh ká»³?", options: ["Äá»ƒ tÄƒng tá»‘c Ä‘á»™ truy váº¥n", "Äá»ƒ phÃ²ng tháº£m há»a: máº¥t server, ransomware, lá»—i ngÆ°á»i dÃ¹ng (DROP nháº§m)", "Äá»ƒ giáº£m dung lÆ°á»£ng database"], answer: 1 },
      { question: "Lá»‡nh REVOKE dÃ¹ng Ä‘á»ƒ lÃ m gÃ¬?", options: ["XÃ³a user khá»i há»‡ thá»‘ng", "Thu há»“i (gá»¡ bá») quyá»n Ä‘Ã£ cáº¥p cho user", "KhÃ´i phá»¥c dá»¯ liá»‡u tá»« backup"], answer: 1 }
    ]
  }
];


