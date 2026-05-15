import { 
  Table, KeyRound, Network, Filter, ArrowDownUp, Zap, Workflow 
} from 'lucide-react';
import type { VisualDiagramProps } from '../types';

const VisualDiagram: React.FC<VisualDiagramProps> = ({ type, title }) => {
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

export default VisualDiagram;
