import React, { useState, useRef, useEffect } from 'react';
import { 
  Terminal, BookOpen, HelpCircle, CheckCircle, Play, Info, 
  Menu, X, Trash2, Award, Sparkles, Loader2, Bot, Keyboard, 
  ChevronRight, ChevronLeft, Sprout, Rocket, ChevronDown, ChevronUp, CheckCircle2,
  Database, Table, KeyRound, Network, Filter, Layers, ListOrdered, 
  Workflow, ArrowDownUp, Search, Zap, UserCircle, LogOut, Mail, Github, GripHorizontal, Activity
} from 'lucide-react';

// --- MOCK SQL ENGINE (Đã fix lỗi trùng lặp dữ liệu M6, M7, M8) ---
const simulateSQL = (query) => {
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

// --- CUSTOM DIAGRAM COMPONENT ---
const VisualDiagram = ({ type, title }) => {
  const renderContent = () => {
    switch (type) {
      case 'database':
        return (
          <div className="flex flex-col items-center pt-2">
            <svg width="120" height="110" viewBox="0 0 120 110" className="text-slate-700 drop-shadow-md">
               <path d="M 15 25 C 15 10, 105 10, 105 25 L 105 75 C 105 90, 15 90, 15 75 Z" fill="#f8fafc" stroke="currentColor" strokeWidth="3" />
               <ellipse cx="60" cy="25" rx="45" ry="12" fill="#f8fafc" stroke="currentColor" strokeWidth="3" />
               <ellipse cx="60" cy="50" rx="45" ry="12" fill="none" stroke="currentColor" strokeWidth="3" />
               <path d="M 15 80 C 15 95, 105 95, 105 80 L 105 88 C 105 103, 15 103, 15 88 Z" fill="currentColor" />
               <rect x="52" y="38" width="16" height="24" rx="4" fill="white" stroke="currentColor" strokeWidth="2.5" />
               <line x1="52" y1="46" x2="68" y2="46" stroke="currentColor" strokeWidth="1.5"/>
               <line x1="52" y1="54" x2="68" y2="54" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <div className="flex flex-col items-center w-full mt-[-2px]">
              <div className="w-px h-6 bg-slate-400"></div>
              <div className="w-56 h-px bg-slate-400"></div>
              <div className="w-56 flex justify-between">
                <div className="w-px h-6 bg-slate-400"></div><div className="w-px h-6 bg-slate-400"></div><div className="w-px h-6 bg-slate-400"></div>
              </div>
            </div>
            <div className="flex gap-4 mt-1">
               <div className="w-24 h-20 bg-blue-50 border border-blue-200 rounded-xl flex flex-col items-center justify-center shadow-sm">
                  <Table size={20} className="text-blue-500 mb-2"/><span className="text-[12px] font-bold text-blue-700">Table 1</span>
               </div>
               <div className="w-24 h-20 bg-emerald-50 border border-emerald-200 rounded-xl flex flex-col items-center justify-center shadow-sm">
                  <Table size={20} className="text-emerald-500 mb-2"/><span className="text-[12px] font-bold text-emerald-700">Table 2</span>
               </div>
               <div className="w-24 h-20 bg-purple-50 border border-purple-200 rounded-xl flex flex-col items-center justify-center shadow-sm">
                  <Table size={20} className="text-purple-500 mb-2"/><span className="text-[12px] font-bold text-purple-700">Table 3</span>
               </div>
            </div>
          </div>
        );
      case 'ddl':
        return (
          <div className="flex justify-center items-center gap-8 w-full">
             <div className="flex flex-col gap-2">
                <div className="px-4 py-2 bg-emerald-100 text-emerald-700 font-bold border-2 border-emerald-400 rounded flex items-center gap-2 shadow-sm"><div className="w-4 h-4 bg-emerald-500 text-white flex items-center justify-center rounded-full text-xs">+</div> CREATE</div>
                <div className="px-4 py-2 bg-amber-100 text-amber-700 font-bold border-2 border-amber-400 rounded flex items-center gap-2 shadow-sm"><div className="w-4 h-4 bg-amber-500 text-white flex items-center justify-center rounded-full text-xs">~</div> ALTER</div>
                <div className="px-4 py-2 bg-red-100 text-red-700 font-bold border-2 border-red-400 rounded flex items-center gap-2 shadow-sm"><div className="w-4 h-4 bg-red-500 text-white flex items-center justify-center rounded-full text-xs">-</div> DROP</div>
             </div>
             <ArrowDownUp size={32} className="text-slate-300 rotate-90" />
             <div className="w-40 border-2 border-slate-800 rounded-lg overflow-hidden bg-white shadow-lg">
                <div className="bg-slate-800 text-white text-xs font-bold p-2 text-center">TABLE SCHEMA</div>
                <div className="flex border-b border-slate-200 text-[10px] bg-slate-50"><div className="w-1/2 p-2 border-r border-slate-200 font-bold">id (INT)</div><div className="w-1/2 p-2 font-bold">name (VAR)</div></div>
                <div className="flex border-b border-slate-200 text-[10px] bg-slate-100/50"><div className="w-1/2 p-2 border-r border-slate-200 text-slate-400">---</div><div className="w-1/2 p-2 text-slate-400">---</div></div>
             </div>
          </div>
        );
      case 'dml':
        return (
          <div className="flex flex-col items-center w-full max-w-sm mx-auto border-2 border-blue-200 rounded-xl overflow-hidden bg-white shadow-lg relative">
             <div className="w-full bg-blue-100 p-2 text-center font-bold text-blue-800 text-sm border-b-2 border-blue-200">Bảng Dữ Liệu (Rows)</div>
             <div className="w-full flex text-xs border-b border-slate-200 bg-emerald-50 text-emerald-700 font-semibold relative">
                <div className="absolute -left-8 top-1 bg-emerald-500 text-white text-[9px] px-1 rounded">INSERT</div>
                <div className="w-1/3 p-2 border-r border-slate-200">1</div><div className="w-1/3 p-2 border-r border-slate-200">Alice</div><div className="w-1/3 p-2">25.00</div>
             </div>
             <div className="w-full flex text-xs border-b border-slate-200 bg-amber-50 text-amber-700 font-semibold relative">
                <div className="absolute -left-8 top-1 bg-amber-500 text-white text-[9px] px-1 rounded">UPDATE</div>
                <div className="w-1/3 p-2 border-r border-slate-200">2</div><div className="w-1/3 p-2 border-r border-slate-200">Bob</div><div className="w-1/3 p-2 font-bold bg-amber-200/50">30.00</div>
             </div>
             <div className="w-full flex text-xs bg-red-50 text-red-400 line-through opacity-70 relative">
                <div className="absolute -left-8 top-1 bg-red-500 text-white text-[9px] px-1 rounded no-underline opacity-100">DELETE</div>
                <div className="w-1/3 p-2 border-r border-red-200">3</div><div className="w-1/3 p-2 border-r border-red-200">Charlie</div><div className="w-1/3 p-2">15.00</div>
             </div>
          </div>
        );
      case 'keys':
        return (
          <div className="flex justify-center items-center gap-10 w-full relative">
             <div className="w-40 border-2 border-blue-300 rounded-lg overflow-hidden bg-white z-10">
                <div className="bg-blue-100 text-blue-800 text-xs font-bold p-2 flex items-center gap-2"><Table size={14}/> CUSTOMERS</div>
                <div className="flex border-b border-slate-200 text-[10px] bg-yellow-50 items-center"><div className="p-2 font-bold text-amber-600 flex items-center gap-1"><KeyRound size={12}/> cust_id (PK)</div></div>
                <div className="p-2 text-[10px] text-slate-500">name</div>
             </div>
             <div className="absolute w-24 h-10 border-t-2 border-r-2 border-dashed border-amber-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-full rounded-tr-xl">
                 <div className="absolute -bottom-1 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-amber-500 rotate-135"></div>
             </div>
             <div className="w-40 border-2 border-emerald-300 rounded-lg overflow-hidden bg-white z-10 mt-12">
                <div className="bg-emerald-100 text-emerald-800 text-xs font-bold p-2 flex items-center gap-2"><Table size={14}/> ORDERS</div>
                <div className="p-2 text-[10px] border-b border-slate-200 text-slate-500 font-bold">order_id (PK)</div>
                <div className="flex text-[10px] bg-yellow-50 items-center"><div className="p-2 font-bold text-amber-600 flex items-center gap-1"><Network size={12}/> cust_id (FK)</div></div>
             </div>
          </div>
        );
      case 'joins':
        return (
          <div className="flex justify-center items-center h-48 relative w-full overflow-hidden">
             <div className="w-36 h-36 rounded-full border-[6px] border-blue-500 bg-blue-500/20 absolute -ml-16 flex items-center justify-start pl-6 font-bold text-blue-800 shadow-lg">Table A</div>
             <div className="w-36 h-36 rounded-full border-[6px] border-emerald-500 bg-emerald-500/20 absolute ml-16 flex items-center justify-end pr-6 font-bold text-emerald-800 shadow-lg mix-blend-multiply">Table B</div>
             <div className="absolute font-black text-white bg-slate-800 px-2 py-1 rounded text-[10px] z-10 shadow-md">INNER JOIN<br/>(Intersection)</div>
          </div>
        );
      case 'groupby':
        return (
          <div className="flex flex-col items-center w-full gap-4">
             <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-400"></div><div className="w-6 h-6 rounded-full bg-emerald-400"></div><div className="w-6 h-6 rounded-full bg-blue-400"></div>
                <div className="w-6 h-6 rounded-full bg-amber-400"></div><div className="w-6 h-6 rounded-full bg-emerald-400"></div>
             </div>
             <div className="flex flex-col items-center text-slate-400 text-xs font-bold"><Filter size={16} /> GROUP BY color</div>
             <div className="flex gap-6 w-full justify-center">
                <div className="p-3 border-2 border-blue-400 bg-blue-50 rounded-lg flex flex-col items-center gap-1"><div className="flex gap-1"><div className="w-4 h-4 rounded-full bg-blue-400"></div><div className="w-4 h-4 rounded-full bg-blue-400"></div></div><span className="text-[10px] font-bold text-blue-700">COUNT = 2</span></div>
                <div className="p-3 border-2 border-emerald-400 bg-emerald-50 rounded-lg flex flex-col items-center gap-1"><div className="flex gap-1"><div className="w-4 h-4 rounded-full bg-emerald-400"></div><div className="w-4 h-4 rounded-full bg-emerald-400"></div></div><span className="text-[10px] font-bold text-emerald-700">COUNT = 2</span></div>
                <div className="p-3 border-2 border-amber-400 bg-amber-50 rounded-lg flex flex-col items-center gap-1"><div className="flex gap-1"><div className="w-4 h-4 rounded-full bg-amber-400"></div></div><span className="text-[10px] font-bold text-amber-700">COUNT = 1</span></div>
             </div>
          </div>
        );
      case 'cte':
        return (
           <div className="flex flex-col items-center gap-3 w-full">
              <div className="w-full max-w-sm p-3 border-2 border-dashed border-purple-400 bg-purple-50 rounded-xl relative">
                 <div className="absolute -top-3 left-4 bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-0.5 rounded border border-purple-400">WITH TemporaryTable AS (...)</div>
                 <div className="mt-2 text-xs font-mono text-purple-800 bg-white p-2 rounded border border-purple-200">SELECT * FROM complex_joins WHERE condition</div>
              </div>
              <ArrowDownUp size={20} className="text-slate-400" />
              <div className="w-full max-w-sm p-3 border-2 border-emerald-400 bg-emerald-50 rounded-xl relative">
                 <div className="absolute -top-3 left-4 bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-400">MAIN QUERY</div>
                 <div className="mt-2 text-xs font-mono text-emerald-800 bg-white p-2 rounded border border-emerald-200">SELECT * FROM TemporaryTable</div>
              </div>
           </div>
        );
      case 'window':
        return (
           <div className="flex items-center justify-center w-full gap-4 relative">
              <div className="w-48 border border-slate-300 rounded-md overflow-hidden bg-white flex flex-col">
                 <div className="bg-slate-100 p-1 text-center text-[10px] font-bold border-b">Table Data</div>
                 <div className="p-1 border-b border-slate-100 text-[10px] flex justify-between bg-blue-50"><span>HR</span><span>1000</span></div>
                 <div className="p-1 border-b border-slate-100 text-[10px] flex justify-between bg-blue-50"><span>HR</span><span>1200</span></div>
                 <div className="p-1 border-b border-slate-100 text-[10px] flex justify-between bg-emerald-50"><span>IT</span><span>2000</span></div>
                 <div className="p-1 text-[10px] flex justify-between bg-emerald-50"><span>IT</span><span>2100</span></div>
              </div>
              <div className="absolute right-1/4 top-8 h-10 border-r-2 border-t-2 border-b-2 border-blue-500 rounded-r-md w-4 flex items-center justify-center">
                 <div className="absolute -right-16 text-[9px] font-bold text-blue-700 bg-blue-100 px-1 rounded">Window 1</div>
              </div>
              <div className="absolute right-1/4 bottom-3 h-10 border-r-2 border-t-2 border-b-2 border-emerald-500 rounded-r-md w-4 flex items-center justify-center">
                 <div className="absolute -right-16 text-[9px] font-bold text-emerald-700 bg-emerald-100 px-1 rounded">Window 2</div>
              </div>
           </div>
        );
      case 'index':
        return (
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="px-6 py-2 bg-slate-800 text-white rounded-full text-xs font-bold shadow-md">B-Tree Root (ID = 50)</div>
            <div className="flex gap-16 relative">
               <div className="absolute top-[-16px] left-[50%] w-0.5 h-4 bg-slate-400"></div><div className="absolute top-[-16px] left-[20%] w-[60%] h-0.5 bg-slate-400"></div>
               <div className="absolute top-[-16px] left-[20%] w-0.5 h-4 bg-slate-400"></div><div className="absolute top-[-16px] right-[20%] w-0.5 h-4 bg-slate-400"></div>
               <div className="px-4 py-1.5 bg-blue-100 border border-blue-400 text-blue-800 rounded-lg text-[10px] font-bold">&lt; 50 (Node)</div>
               <div className="px-4 py-1.5 bg-emerald-100 border border-emerald-400 text-emerald-800 rounded-lg text-[10px] font-bold">&ge; 50 (Node)</div>
            </div>
            <div className="flex w-full justify-center gap-4 mt-2">
               <div className="p-2 bg-white border border-slate-200 rounded shadow-sm text-[9px] font-mono">Row 12</div>
               <div className="p-2 bg-white border border-slate-200 rounded shadow-sm text-[9px] font-mono">Row 38</div>
               <div className="p-2 bg-amber-200 border border-amber-500 rounded shadow-md text-[9px] font-mono font-bold animate-pulse text-amber-900">Row 55 (Found!)</div>
               <div className="p-2 bg-white border border-slate-200 rounded shadow-sm text-[9px] font-mono">Row 89</div>
            </div>
          </div>
        );
      case 'trigger':
        return (
           <div className="flex items-center justify-center gap-6 w-full">
              <div className="flex flex-col items-center gap-2">
                 <div className="w-16 h-12 bg-blue-100 border-2 border-blue-400 rounded flex items-center justify-center font-bold text-xs text-blue-700">INSERT</div><span className="text-[10px] text-slate-500">Table: Orders</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 text-amber-500">
                 <Zap size={24} fill="currentColor" className="animate-bounce" /><span className="text-[9px] font-bold bg-amber-100 px-1 rounded border border-amber-200">TRIGGER FIRE</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                 <div className="w-16 h-12 bg-emerald-100 border-2 border-emerald-400 rounded flex items-center justify-center font-bold text-xs text-emerald-700">UPDATE</div><span className="text-[10px] text-slate-500">Table: Inventory</span>
              </div>
           </div>
        );
      default: return <div>Diagram Placeholder</div>;
    }
  };

  return (
    <div className="my-8 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm flex flex-col group">
       <div className="w-full h-[220px] md:h-[260px] bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="relative z-10 w-full flex justify-center">{renderContent()}</div>
       </div>
       <div className="px-5 py-3 border-t border-slate-100 flex items-center gap-2 bg-slate-100/50">
          <Workflow size={16} className="text-blue-500" /><span className="text-sm font-semibold text-slate-700">{title}</span>
       </div>
    </div>
  );
};


// --- COURSE DATA ---
const courseData = [
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
      { question: "Kiểu dữ liệu nào được khuyến nghị để lưu trữ Tiền tệ (nhằm tránh sai số thập phân)?", options: ["FLOAT", "VARCHAR", "DECIMAL"], answer: 2 }
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
      { question: "Điều tồi tệ gì sẽ xảy ra nếu bạn chạy lệnh: `UPDATE users SET status = 'banned';` ?", options: ["Hệ thống báo lỗi cú pháp do thiếu WHERE", "Chỉ user đầu tiên trong bảng bị khóa", "Tất cả user trong toàn bộ hệ thống đều bị khóa tài khoản"], answer: 2 }
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
      { question: "Primary Key (Khóa chính) về bản chất là sự kết hợp của 2 ràng buộc nào?", options: ["NOT NULL và UNIQUE", "UNIQUE và DEFAULT", "NOT NULL và CHECK"], answer: 0 }
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
      { question: "Nếu bạn muốn xuất báo cáo danh sách TẤT CẢ Nhân Viên công ty, kèm theo Tên Phòng Ban (nếu người đó đã được phân phòng). Kể cả người mới chưa có phòng cũng phải hiển thị. Bạn dùng JOIN nào?", options: ["INNER JOIN", "LEFT JOIN", "CROSS JOIN"], answer: 1 }
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
      { question: "Mệnh đề nào BẮT BUỘC phải dùng nếu bạn muốn lọc kết quả: 'Chỉ hiển thị những Phòng ban có tổng số lượng nhân viên > 10 người'?", options: ["WHERE total_emp > 10", "HAVING total_emp > 10", "FILTER total_emp > 10"], answer: 1 }
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
      { question: "Nếu User đang ở Trang 2 (mỗi trang hiện 10 sản phẩm), câu lệnh SQL nào xử lý logic phân trang này đúng nhất?", options: ["LIMIT 20", "LIMIT 10 OFFSET 10", "OFFSET 2 LIMIT 10"], answer: 1 }
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
      { question: "Điểm vượt trội nhất của CTE (WITH) so với Subquery thông thường là gì?", options: ["Tăng tốc độ xử lý nhanh gấp hàng chục lần do lưu vào RAM vật lý", "Giúp code SQL trở nên phẳng, tuần tự, dễ debug và có thể tái sử dụng bảng tạm", "Có khả năng gọi API ra bên ngoài internet"], answer: 1 }
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
      { question: "Trong cuộc thi Sales, Top 2 người dẫn đầu có doanh thu BẰNG NHAU. Nếu bạn dùng hàm DENSE_RANK(), người thứ 3 sẽ được đánh số hạng mấy?", options: ["Hạng 2", "Hạng 3", "Báo lỗi hệ thống"], answer: 0 }
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
      { question: "Hệ lụy chí mạng của việc Lạm Dụng đánh Index lên quá nhiều cột trong bảng là gì?", options: ["Làm chậm đáng kể các truy vấn SELECT và JOIN", "Làm giảm hiệu năng các thao tác ghi dữ liệu (INSERT, UPDATE, DELETE) và phình to ổ cứng", "Gây ra lỗi vòng lặp vô hạn trong CSDL"], answer: 1 }
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
      { question: "Tính năng nào cho phép hệ thống Database TỰ ĐỘNG CHẠY một đoạn mã SQL khác ngay lập tức khi bảng dữ liệu bị chỉnh sửa?", options: ["STORED PROCEDURE", "VIEW", "TRIGGER"], answer: 2 }
    ]
  }
];

// --- GEMINI API INTEGRATION ---
const apiKey = "";
const callGeminiAPI = async (prompt, isJson = false) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    systemInstruction: { parts: [{ text: "Bạn là một giảng viên Data/SQL Senior. Giải thích ngắn gọn, chuyên sâu, trực quan. Sử dụng tiếng Việt chuẩn." }] }
  };
  if (isJson) {
    payload.generationConfig = { responseMimeType: "application/json", responseSchema: { type: "ARRAY", items: { type: "OBJECT", properties: { question: { type: "STRING" }, options: { type: "ARRAY", items: { type: "STRING" } }, answer: { type: "INTEGER" } }, required: ["question", "options", "answer"] } } };
  }
  const delays = [1000, 2000, 4000];
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      const data = await response.json();
      const textResult = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!textResult) throw new Error("No valid output from API");
      return isJson ? JSON.parse(textResult) : textResult;
    } catch (err) {
      if (attempt === 2) throw new Error("API request failed.");
      await new Promise(res => setTimeout(res, delays[attempt]));
    }
  }
};

// --- GITHUB DAILY COMMIT MOCK DATA ---
const generateMockHeatmap = () => {
    const days = [];
    for(let i=0; i<28; i++) {
        const level = Math.random() > 0.5 ? Math.floor(Math.random() * 4) + 1 : 0;
        days.push(level);
    }
    return days;
}

// --- MAIN COMPONENT ---
export default function App() {
  const [activeModule, setActiveModule] = useState(courseData[0]);
  const [viewMode, setViewMode] = useState('lesson'); 
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [completedModules, setCompletedModules] = useState([]);
  
  // Auth & Profile State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [totalQuizzesPassed, setTotalQuizzesPassed] = useState(0);
  const [heatmapData, setHeatmapData] = useState([]);

  // Terminal State
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);
  const [terminalHeight, setTerminalHeight] = useState(280);
  const [isDraggingTerminal, setIsDraggingTerminal] = useState(false);
  
  const [logs, setLogs] = useState([{ time: new Date().toLocaleTimeString(), type: 'info', text: 'Hệ thống giả lập SQL CLI đã sẵn sàng. Gõ lệnh và nhấn Enter để test...' }]);
  const [terminalInput, setTerminalInput] = useState('');
  const logEndRef = useRef(null);

  // Quiz State
  const [currentQuizList, setCurrentQuizList] = useState(courseData[0].quiz);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isGeneratingQuiz, setIsGeneratingQuiz] = useState(false);
  const [isExplainingCode, setIsExplainingCode] = useState(false);

  const beginnerModules = courseData.filter(m => m.level === 'beginner');
  const advancedModules = courseData.filter(m => m.level === 'advanced');

  // Terminal Resizing Logic
  useEffect(() => {
    if (!isDraggingTerminal) return;
    const handleMouseMove = (e) => {
        e.preventDefault();
        const newHeight = window.innerHeight - e.clientY;
        setTerminalHeight(Math.max(150, Math.min(newHeight, window.innerHeight * 0.8)));
    };
    const handleMouseUp = () => setIsDraggingTerminal(false);
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDraggingTerminal]);

  useEffect(() => {
    if(isTerminalOpen) logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs, isTerminalOpen, terminalHeight]);

  useEffect(() => {
    setCurrentQuizList(activeModule.quiz);
  }, [activeModule]);

  // Terminal Handlers
  const handleTerminalKeyDown = (e) => {
    if (e.key === 'Enter' && terminalInput.trim() !== '') {
      const query = terminalInput.trim();
      setTerminalInput('');
      const timestamp = new Date().toLocaleTimeString();
      setLogs(prev => [...prev, { time: timestamp, type: 'query', text: query }]);
      setTimeout(() => {
        const result = simulateSQL(query);
        setLogs(prev => [...prev, { time: new Date().toLocaleTimeString(), type: 'result', text: result }]);
      }, 300);
    }
  };

  const handleRunSQL = (query) => {
    if (!isTerminalOpen) setIsTerminalOpen(true);
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev, { time: timestamp, type: 'query', text: query }]);
    setTimeout(() => {
      const result = simulateSQL(query);
      setLogs(prev => [...prev, { time: new Date().toLocaleTimeString(), type: 'result', text: result }]);
    }, 400);
  };

  const handleAIExplain = async (query) => {
    if (!isTerminalOpen) setIsTerminalOpen(true);
    const timestamp = new Date().toLocaleTimeString();
    setIsExplainingCode(true);
    setLogs(prev => [...prev, { time: timestamp, type: 'ai-loading', text: 'AI đang phân tích logic kiến trúc...' }]);
    try {
      const prompt = `Giải thích câu lệnh SQL sau một cách chuyên nghiệp, đi sâu vào logic xử lý cho kỹ sư:\n\n${query}\n\nTrả lời trực tiếp, không chào hỏi.`;
      const explanation = await callGeminiAPI(prompt, false);
      setLogs(prev => prev.filter(log => log.type !== 'ai-loading'));
      setLogs(prev => [...prev, { time: new Date().toLocaleTimeString(), type: 'ai-explain', text: explanation }]);
    } catch (error) {
      setLogs(prev => prev.filter(log => log.type !== 'ai-loading'));
      setLogs(prev => [...prev, { time: new Date().toLocaleTimeString(), type: 'error', text: 'Lỗi AI: ' + error.message }]);
    } finally {
      setIsExplainingCode(false);
    }
  };

  const clearLogs = () => setLogs([]);

  // Quiz Handlers
  const handleAnswerSelect = (idx) => setSelectedAnswer(idx);

  const handleNextQuestion = () => {
    const isCorrect = selectedAnswer === currentQuizList[currentQuestionIdx].answer;
    const finalScore = quizScore + (isCorrect ? 1 : 0);
    if (isCorrect) setQuizScore(finalScore);

    if (currentQuestionIdx < currentQuizList.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
      if (finalScore >= currentQuizList.length / 2) {
          if (!completedModules.includes(activeModule.id)) {
              setCompletedModules(prev => [...prev, activeModule.id]);
          }
          setTotalQuizzesPassed(prev => prev + finalScore);
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIdx(0);
    setSelectedAnswer(null);
    setQuizScore(0);
    setQuizCompleted(false);
  };

  const handleGenerateAIQuiz = async () => {
    setIsGeneratingQuiz(true);
    try {
      const prompt = `Tạo 3 câu hỏi trắc nghiệm SQL level thực chiến đi làm về chủ đề: "${activeModule.title}". Mỗi câu có 3-4 lựa chọn và 1 đáp án đúng duy nhất.`;
      const newQuiz = await callGeminiAPI(prompt, true);
      if (newQuiz && newQuiz.length > 0) {
        setCurrentQuizList(newQuiz);
        resetQuiz();
      }
    } catch (error) {
      alert("Không thể tạo Quiz AI lúc này. Vui lòng thử lại sau.");
    } finally {
      setIsGeneratingQuiz(false);
    }
  };

  const changeModule = (mod) => {
    setActiveModule(mod);
    setViewMode('lesson');
    resetQuiz();
    if (window.innerWidth < 768) setSidebarOpen(false);
  };

  const handleMockLogin = () => {
     setIsLoggedIn(true);
     setHeatmapData(generateMockHeatmap());
  }

  const progressPercent = Math.round((completedModules.length / courseData.length) * 100) || 0;

  const getHeatmapColor = (level) => {
      if(level === 1) return 'bg-emerald-200';
      if(level === 2) return 'bg-emerald-400';
      if(level === 3) return 'bg-emerald-500';
      if(level >= 4) return 'bg-emerald-700';
      return 'bg-slate-100'; 
  }

  return (
    <div className="flex h-screen bg-[#f4f6f8] font-sans text-slate-800 overflow-hidden">
      
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR Wrapper with smooth width transition */}
      <div className={`shrink-0 bg-white z-40 transition-all duration-300 ease-in-out fixed md:relative h-full border-r border-slate-200 shadow-[10px_0_30px_rgba(0,0,0,0.05)] md:shadow-none flex flex-col ${
         sidebarOpen ? 'w-72 translate-x-0' : 'w-72 -translate-x-full md:w-0 md:translate-x-0 md:border-r-0 md:overflow-hidden'
      }`}>
         <div className="w-72 h-full flex flex-col relative">
            <div className="p-5 flex items-center justify-between border-b border-slate-100 shrink-0">
              <div className="flex items-center gap-2.5 font-black text-xl text-slate-900 tracking-tight">
                <div className="bg-blue-600 text-white p-1.5 rounded-lg shadow-sm">
                    <Terminal size={22} strokeWidth={2.5}/>
                </div>
                SQL<span className="text-blue-600 font-light">Mastery</span>
              </div>
              <button 
                className="text-slate-400 hover:text-slate-800 hover:bg-slate-100 p-1.5 rounded-lg transition-colors focus:outline-none" 
                onClick={() => setSidebarOpen(false)}
              >
                <ChevronLeft size={22} />
              </button>
            </div>
            
            <div className="px-5 py-4 border-b border-slate-50 bg-slate-50/50 shrink-0">
               <div className="flex justify-between items-center text-xs font-bold text-slate-500 uppercase mb-2 tracking-wider">
                  <span>Tiến trình học</span>
                  <span className="text-blue-600">{progressPercent}%</span>
               </div>
               <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div 
                     className="h-full bg-blue-600 transition-all duration-700 ease-out rounded-full"
                     style={{ width: `${progressPercent}%` }}
                  ></div>
               </div>
            </div>

            {/* Modules List - Scrollable */}
            <div className="flex-1 overflow-y-auto py-4 scrollbar-hide pb-24">
              <div className="px-5 mb-2 mt-1 text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                 <Sprout size={14} /> Level: Cơ bản
              </div>
              {beginnerModules.map(mod => {
                const isCompleted = completedModules.includes(mod.id);
                const isActive = activeModule.id === mod.id;
                return (
                    <button
                    key={mod.id}
                    onClick={() => changeModule(mod)}
                    className={`w-full text-left px-5 py-3 flex items-center gap-3 transition-all border-l-4 ${
                        isActive 
                        ? 'bg-blue-50/70 border-blue-600 text-blue-700' 
                        : 'border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                    >
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                        isCompleted ? 'bg-emerald-500 text-white shadow-sm' : isActive ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-500'
                    }`}>
                        {isCompleted ? <CheckCircle2 size={16} strokeWidth={3}/> : mod.id}
                    </div>
                    <span className="truncate text-sm font-semibold leading-tight">{mod.title.split('. ')[1]}</span>
                    </button>
                )
              })}

              <div className="px-5 mb-2 mt-8 text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <Rocket size={14} /> Level: Nâng cao
              </div>
              {advancedModules.map(mod => {
                 const isCompleted = completedModules.includes(mod.id);
                 const isActive = activeModule.id === mod.id;
                 return (
                   <button
                     key={mod.id}
                     onClick={() => changeModule(mod)}
                     className={`w-full text-left px-5 py-3 flex items-center gap-3 transition-all border-l-4 ${
                       isActive 
                         ? 'bg-blue-50/70 border-blue-600 text-blue-700' 
                         : 'border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                     }`}
                   >
                     <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                        isCompleted ? 'bg-emerald-500 text-white shadow-sm' : isActive ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-500'
                     }`}>
                       {isCompleted ? <CheckCircle2 size={16} strokeWidth={3}/> : mod.id}
                     </div>
                     <span className="truncate text-sm font-semibold leading-tight">{mod.title.split('. ')[1]}</span>
                   </button>
                 )
              })}
            </div>
            
            {/* Sidebar Bottom Controls Fixed */}
            <div className="absolute bottom-0 w-full bg-white border-t border-slate-200 p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.02)]">
                <div className="flex bg-slate-100/80 rounded-xl p-1.5 border border-slate-200/60 shadow-sm w-full">
                  <button 
                    onClick={() => { setViewMode('lesson'); resetQuiz(); }}
                    className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${viewMode === 'lesson' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    <BookOpen size={16} /> Giáo Trình
                  </button>
                  <button 
                    onClick={() => setViewMode('quiz')}
                    className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${viewMode === 'quiz' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    <HelpCircle size={16} /> Luyện Tập
                  </button>
                </div>
            </div>
         </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex-1 flex flex-col h-full relative min-w-0">
        
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shrink-0 z-20 sticky top-0 transition-all">
          <div className="flex items-center gap-4">
            
            {/* Hamburger Button (shown when sidebar closed) */}
            {!sidebarOpen && (
              <button 
                onClick={() => setSidebarOpen(true)} 
                className="relative flex items-center justify-center w-10 h-10 -ml-2 rounded-full hover:bg-slate-50 transition-colors group focus:outline-none shrink-0"
              >
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle cx="20" cy="20" r="17" stroke="#e2e8f0" strokeWidth="2.5" fill="none" />
                  <circle 
                     cx="20" cy="20" r="17" stroke="#2563eb" strokeWidth="2.5" fill="none" strokeLinecap="round"
                     style={{
                        strokeDasharray: 2 * Math.PI * 17,
                        strokeDashoffset: 2 * Math.PI * 17 - (progressPercent / 100) * (2 * Math.PI * 17),
                        transition: 'stroke-dashoffset 0.8s ease-in-out'
                     }}
                  />
                </svg>
                <Menu size={18} className="text-slate-700 group-hover:text-blue-600 transition-colors" />
              </button>
            )}

            <div className="flex flex-col justify-center h-full overflow-hidden">
               <span className={`text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 ${activeModule.level === 'advanced' ? 'text-purple-600' : 'text-blue-600'}`}>
                 {activeModule.level === 'advanced' ? <><Rocket size={12}/> PHẦN NÂNG CAO</> : <><Sprout size={12}/> PHẦN CƠ BẢN</>}
               </span>
               <h1 className="font-bold text-xl md:text-2xl text-slate-900 truncate mt-0.5 tracking-tight transition-all">{activeModule.title}</h1>
            </div>
          </div>
          
          {/* User Profile Section */}
          <div className="relative shrink-0 ml-4 z-50">
             <button 
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                className={`flex items-center gap-2 p-1.5 pr-3 rounded-full border transition-all ${isLoggedIn ? 'bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-slate-300' : 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:shadow-md'}`}
             >
                {isLoggedIn ? (
                   <>
                     <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold overflow-hidden border border-blue-200 shrink-0">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=e2e8f0" alt="Avatar" className="w-full h-full object-cover" />
                     </div>
                     <span className="text-sm font-bold text-slate-700 hidden sm:block">Hoàng Developer</span>
                   </>
                ) : (
                   <span className="text-sm font-bold px-2 py-0.5" onClick={handleMockLogin}>Đăng nhập</span>
                )}
             </button>

             {/* Profile Dropdown with Water Drop Animation */}
             {isLoggedIn && (
               <>
                 {/* Backdrop to close dropdown */}
                 {showProfileDropdown && <div className="fixed inset-0 z-40" onClick={() => setShowProfileDropdown(false)}></div>}
                 
                 <div 
                    className={`absolute right-0 top-14 w-[340px] bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-slate-100 z-50 origin-top-right transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${showProfileDropdown ? 'scale-100 opacity-100 translate-y-0 visible' : 'scale-90 opacity-0 -translate-y-4 invisible'}`}
                 >
                    {/* User Header */}
                    <div className="p-5 border-b border-slate-100 flex items-center gap-4 bg-slate-50/50 rounded-t-2xl">
                       <div className="w-12 h-12 rounded-full bg-blue-100 border-2 border-white shadow-sm overflow-hidden shrink-0">
                           <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=e2e8f0" alt="Avatar" className="w-full h-full object-cover" />
                       </div>
                       <div className="flex flex-col">
                          <span className="font-bold text-slate-800 text-lg leading-tight">Hoàng Developer</span>
                          <span className="text-xs text-slate-500 font-medium">hoangdev@gmail.com</span>
                       </div>
                    </div>

                    {/* Progress Stats */}
                    <div className="p-5 border-b border-slate-100">
                       <h4 className="text-[11px] font-black uppercase text-slate-400 tracking-widest mb-4">Thống kê học tập</h4>
                       <div className="grid grid-cols-2 gap-3">
                          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                             <div className="text-slate-500 text-xs font-bold mb-1 flex items-center gap-1.5"><BookOpen size={14}/> Bài đã học</div>
                             <div className="text-2xl font-black text-slate-800">{completedModules.length}<span className="text-sm font-bold text-slate-400">/{courseData.length}</span></div>
                          </div>
                          <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                             <div className="text-emerald-600 text-xs font-bold mb-1 flex items-center gap-1.5"><Award size={14}/> Quiz đã giải</div>
                             <div className="text-2xl font-black text-emerald-700">{totalQuizzesPassed}</div>
                          </div>
                       </div>
                    </div>

                    {/* Activity Heatmap (GitHub Style) */}
                    <div className="p-5 border-b border-slate-100">
                       <h4 className="text-[11px] font-black uppercase text-slate-400 tracking-widest mb-3 flex items-center gap-1.5"><Activity size={14}/> Activity 30 ngày qua</h4>
                       <div className="grid grid-cols-7 gap-1.5">
                          {heatmapData.map((level, i) => (
                             <div key={i} className={`w-full aspect-square rounded-sm ${getHeatmapColor(level)}`} title={`Activity level: ${level}`}></div>
                          ))}
                       </div>
                       <div className="flex items-center justify-end gap-1.5 mt-2 text-[10px] font-medium text-slate-400">
                          Ít <div className="w-2.5 h-2.5 rounded-sm bg-slate-100"></div><div className="w-2.5 h-2.5 rounded-sm bg-emerald-200"></div><div className="w-2.5 h-2.5 rounded-sm bg-emerald-400"></div><div className="w-2.5 h-2.5 rounded-sm bg-emerald-700"></div> Nhiều
                       </div>
                    </div>

                    <div className="p-2">
                       <button 
                          onClick={() => { setIsLoggedIn(false); setShowProfileDropdown(false); }}
                          className="w-full text-left px-4 py-2.5 text-sm font-bold text-red-500 hover:bg-red-50 rounded-xl transition-colors flex items-center gap-2"
                       >
                          <LogOut size={16} /> Đăng xuất
                       </button>
                    </div>
                 </div>
               </>
             )}
          </div>
        </header>

        {/* CONTENT SPLIT */}
        <div className="flex-1 flex flex-col min-h-0 relative">
          
          <div className="flex-1 overflow-y-auto p-4 md:p-10 bg-[#f4f6f8] relative">
            <div className="max-w-3xl mx-auto pb-12">
              
              {/* LESSON VIEW */}
              {viewMode === 'lesson' && (
                <div className="space-y-6">
                  {activeModule.sections.map((sec, idx) => {
                    if (sec.type === 'heading') return <h2 key={idx} className="text-2xl font-black text-slate-800 tracking-tight mt-8 mb-4 border-l-4 border-blue-600 pl-4">{sec.content}</h2>;
                    if (sec.type === 'subheading') return <h3 key={idx} className="text-lg font-bold text-blue-700 mt-6 mb-2">{sec.content}</h3>;
                    if (sec.type === 'text') return <p key={idx} className="text-slate-700 text-[15.5px] md:text-[16px] leading-relaxed text-justify">{sec.content}</p>;
                    if (sec.type === 'diagram') return <VisualDiagram key={idx} type={sec.diagramType} title={sec.title} />;
                    
                    if (sec.type === 'note') {
                      return (
                        <div key={idx} className="bg-blue-50/60 border border-blue-100 rounded-2xl p-6 flex gap-4 shadow-sm relative overflow-hidden my-6">
                          <Info className="text-blue-500 shrink-0 mt-0.5" size={24} />
                          <div className="text-blue-900 text-[15px] md:text-base leading-relaxed whitespace-pre-line font-medium">{sec.content}</div>
                        </div>
                      );
                    }

                    if (sec.type === 'practice') {
                      return (
                        <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 md:p-7 shadow-sm flex flex-col gap-4 my-6">
                          <div className="flex items-center gap-2 text-slate-800 font-bold text-lg tracking-tight">
                            <Keyboard size={20} className="text-blue-600"/> Code Thực Hành
                          </div>
                          <p className="text-[15px] text-slate-600 font-medium">{sec.instruction}</p>
                          <div className="bg-[#0f172a] rounded-xl overflow-hidden shadow-inner border border-slate-800">
                             <div className="px-4 py-3 bg-[#1e293b] border-b border-slate-700/50 flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400/80"></div><div className="w-3 h-3 rounded-full bg-amber-400/80"></div><div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
                             </div>
                             <div className="p-5 overflow-x-auto">
                               <code className="text-[#a7f3d0] font-mono text-[14.5px] leading-relaxed whitespace-pre-wrap">{sec.query}</code>
                             </div>
                          </div>
                          <div className="flex flex-wrap gap-3 mt-2">
                             <button 
                                onClick={() => handleRunSQL(sec.query)}
                                className="flex-1 md:flex-none justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-colors shadow-sm"
                             >
                                <Play size={14} fill="currentColor" /> CHẠY CODE TRÊN TERMINAL
                             </button>
                             <button 
                                onClick={() => handleAIExplain(sec.query)}
                                disabled={isExplainingCode}
                                className="flex-1 md:flex-none justify-center bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-colors disabled:opacity-50 shadow-sm"
                             >
                                {isExplainingCode ? <Loader2 size={14} className="animate-spin text-purple-600" /> : <Sparkles size={14} className="text-purple-600" />} NHỜ AI GIẢI THÍCH
                             </button>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
                  
                  <div className="pt-12 flex justify-center border-t border-slate-200 mt-12">
                    <button 
                      onClick={() => setViewMode('quiz')}
                      className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-slate-900/20 flex items-center gap-3 transition-transform hover:-translate-y-1 active:translate-y-0 text-lg tracking-wide"
                    >
                      <CheckCircle size={22} />
                      HOÀN THÀNH MODULE & LÀM BÀI TEST
                    </button>
                  </div>
                </div>
              )}

              {/* QUIZ VIEW */}
              {viewMode === 'quiz' && (
                <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 p-8 md:p-12 relative overflow-hidden">
                  {isGeneratingQuiz && (
                     <div className="absolute inset-0 bg-white/90 z-10 flex flex-col items-center justify-center backdrop-blur-sm">
                        <Loader2 size={48} className="text-blue-600 animate-spin mb-4" />
                        <p className="text-slate-800 font-bold text-lg">AI đang tạo bộ câu hỏi hóc búa cho bạn...</p>
                     </div>
                  )}

                  {!quizCompleted ? (
                    <>
                      <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight">Câu hỏi {currentQuestionIdx + 1} / {currentQuizList.length}</h2>
                        <span className="text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest bg-blue-50 text-blue-600">
                          Trắc nghiệm Kiến thức
                        </span>
                      </div>
                      
                      <p className="text-[17px] text-slate-800 mb-8 font-semibold leading-relaxed">{currentQuizList[currentQuestionIdx].question}</p>
                      
                      <div className="space-y-4 mb-10">
                        {currentQuizList[currentQuestionIdx].options.map((opt, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleAnswerSelect(idx)}
                            className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 outline-none ${
                              selectedAnswer === idx 
                                ? 'border-blue-600 bg-blue-50/50 text-blue-900 shadow-sm ring-4 ring-blue-600/10' 
                                : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                            }`}
                          >
                            <div className="flex items-center gap-4">
                              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${selectedAnswer === idx ? 'border-blue-600 bg-blue-600' : 'border-slate-300'}`}>
                                {selectedAnswer === idx && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                              </div>
                              <span className="text-[16px] font-medium">{opt}</span>
                            </div>
                          </button>
                        ))}
                      </div>

                      <div className="flex justify-end pt-6 border-t border-slate-100">
                        <button
                          disabled={selectedAnswer === null}
                          onClick={handleNextQuestion}
                          className={`px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-sm transition-all flex items-center gap-2 ${
                            selectedAnswer !== null 
                              ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg' 
                              : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                          }`}
                        >
                          {currentQuestionIdx === currentQuizList.length - 1 ? 'XEM KẾT QUẢ' : 'CÂU TIẾP THEO'} <ChevronRight size={18}/>
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-10">
                      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-emerald-50 text-emerald-500 mb-6 ring-8 ring-emerald-50/50">
                        <Award size={48} strokeWidth={1.5} />
                      </div>
                      <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">Hoàn thành Module!</h2>
                      <p className="text-slate-600 mb-10 text-lg">Bạn đã trả lời đúng <span className="font-black text-emerald-600 text-2xl mx-1">{quizScore} / {currentQuizList.length}</span> câu hỏi.</p>
                      
                      <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button 
                          onClick={resetQuiz}
                          className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full font-bold text-sm uppercase tracking-wider transition-colors"
                        >
                          Làm Lại
                        </button>
                        <button 
                          onClick={handleGenerateAIQuiz}
                          disabled={isGeneratingQuiz}
                          className="px-6 py-3.5 bg-purple-50 border border-purple-200 hover:bg-purple-100 text-purple-700 rounded-full font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                        >
                          <Sparkles size={16} /> Nhờ AI Tạo Đề Mới
                        </button>
                        <button 
                          onClick={() => {
                            const nextModule = courseData.find(m => m.id === activeModule.id + 1);
                            if (nextModule) changeModule(nextModule);
                          }}
                          disabled={activeModule.id === courseData.length}
                          className={`px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                            activeModule.id < courseData.length 
                            ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg' 
                            : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                          }`}
                        >
                          HỌC BÀI TIẾP THEO <ChevronRight size={18}/>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* TERMINAL SECTION (With Resizer) */}
          <div 
             className={`bg-[#0d1117] border-t border-slate-800 shrink-0 flex flex-col shadow-[0_-10px_30px_rgba(0,0,0,0.1)] z-20 relative`}
             style={{ height: isTerminalOpen ? `${terminalHeight}px` : '48px' }}
          >
            {/* Draggable Resize Handle */}
            {isTerminalOpen && (
               <div 
                  className="absolute top-0 left-0 w-full h-2 cursor-ns-resize z-30 flex justify-center hover:bg-blue-500/20 transition-colors group"
                  onMouseDown={(e) => { e.preventDefault(); setIsDraggingTerminal(true); }}
               >
                   <div className="w-12 h-1 bg-slate-700 rounded-full mt-0.5 group-hover:bg-blue-500 transition-colors"></div>
               </div>
            )}

            <div 
               className="flex items-center justify-between px-5 h-12 bg-[#161b22] border-b border-[#30363d] cursor-pointer hover:bg-[#1f242c] transition-colors shrink-0 select-none"
               onClick={() => setIsTerminalOpen(!isTerminalOpen)}
            >
              <div className="flex items-center gap-2 text-slate-300 font-mono text-[11px] font-bold uppercase tracking-widest">
                <Terminal size={15} className="text-blue-400" /> Bảng điều khiển Console (CLI)
              </div>
              <div className="flex items-center gap-3">
                 {isTerminalOpen && (
                    <button 
                      onClick={(e) => { e.stopPropagation(); clearLogs(); }}
                      className="text-slate-500 hover:text-red-400 transition-colors p-1"
                      title="Xóa Log"
                    >
                      <Trash2 size={15} />
                    </button>
                 )}
                 <div className="text-slate-400 bg-slate-800/50 rounded p-1">
                    {isTerminalOpen ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
                 </div>
              </div>
            </div>
            
            {/* Terminal View */}
            <div className={`flex-1 overflow-y-auto p-5 font-mono text-[14px] leading-relaxed pb-12 ${!isTerminalOpen ? 'hidden' : 'block'}`}>
              {logs.map((log, index) => (
                <div key={index} className="mb-3 break-words flex gap-3">
                  <span className="text-slate-600 shrink-0 select-none">[{log.time}]</span>
                  <div className="flex-1">
                    {log.type === 'info' && <span className="text-slate-400 italic">{log.text}</span>}
                    {log.type === 'query' && <span className="text-sky-400 font-bold tracking-wide">mysql&gt; {log.text}</span>}
                    {log.type === 'result' && <span className="text-emerald-400 whitespace-pre-wrap block mt-1 leading-snug">{log.text}</span>}
                    {log.type === 'ai-loading' && <span className="text-purple-400 italic flex items-center gap-2 mt-1"><Loader2 size={14} className="animate-spin" /> {log.text}</span>}
                    {log.type === 'ai-explain' && (
                      <div className="text-purple-200 bg-purple-900/30 p-4 rounded-xl border border-purple-700/30 mt-3 mb-4 whitespace-pre-line flex gap-3 leading-relaxed shadow-sm">
                        <Bot size={20} className="shrink-0 mt-1 text-purple-400" />
                        <span>{log.text}</span>
                      </div>
                    )}
                    {log.type === 'error' && <span className="text-red-400 whitespace-pre-line bg-red-900/20 p-3 rounded-lg block mt-2 border border-red-800/50">{log.text}</span>}
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[#30363d]/50">
                <span className="text-blue-400 font-bold tracking-wide select-none">mysql&gt;</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  onKeyDown={handleTerminalKeyDown}
                  placeholder="Viết mã SQL ở đây và nhấn phím Enter..."
                  className="flex-1 bg-transparent text-[#a7f3d0] font-mono text-[14px] outline-none placeholder-slate-600"
                  spellCheck="false"
                  autoComplete="off"
                />
              </div>
              <div ref={logEndRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}