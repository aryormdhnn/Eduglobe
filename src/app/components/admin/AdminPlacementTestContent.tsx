import { useState } from "react";
import { Search, Plus, Eye, ChevronLeft, ChevronRight, CheckCircle2, Clock, X } from "lucide-react";

const tests = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    studentName: ["Emma Thompson", "James Wilson", "Sophia Martinez", "Liam Johnson", "Olivia Brown", "Noah Davis", "Ava Garcia", "William Lee"][i],
    testDate: `${String(i * 3 + 1).padStart(2, "0")}/01/2025`,
    score: [82, 75, 68, 91, 55, 88, 72, 60][i],
    level: ["B2", "B1", "A2", "C1", "A1", "B2", "B1", "A2"][i],
    result: (["Pass", "Pass", "Pass", "Pass", "Fail", "Pass", "Pass", "Fail"] as const)[i],
    assignedCourse: ["Business English Course", "Business English Course", "General English", "IELTS Prep", "General English", "Business English Course", "Business English Course", "General English"][i],
}));

export function AdminPlacementTestContent() {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const filtered = tests.filter(t => t.studentName.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="space-y-[20px]">
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827]">Placement Test</h2>
                    <p className="font-['Inter',sans-serif] text-[14px] text-[#6B7280] mt-[4px]">Track and manage student placement test results</p>
                </div>
                <button className="flex items-center gap-[8px] bg-[#155DFC] hover:bg-[#1249CC] transition-colors text-white px-[16px] py-[10px] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[14px]">
                    <Plus size={16} />Schedule Test
                </button>
            </div>
            <div className="grid grid-cols-4 gap-[14px]">
                {[
                    { label: "Total Tests", value: tests.length, color: "text-[#155DFC]", bg: "bg-[#EFF6FF]" },
                    { label: "Passed", value: tests.filter(t => t.result === "Pass").length, color: "text-[#16A34A]", bg: "bg-[#DCFCE7]" },
                    { label: "Failed", value: tests.filter(t => t.result === "Fail").length, color: "text-[#DC2626]", bg: "bg-[#FEE2E2]" },
                    { label: "Avg Score", value: Math.round(tests.reduce((a, t) => a + t.score, 0) / tests.length), color: "text-[#F97316]", bg: "bg-[#FFF7ED]" },
                ].map((c) => (
                    <div key={c.label} className={`${c.bg} rounded-[12px] p-[16px]`}>
                        <p className={`font-['Inter',sans-serif] font-bold text-[28px] ${c.color}`}>{c.value}</p>
                        <p className={`font-['Inter',sans-serif] text-[13px] ${c.color}`}>{c.label}</p>
                    </div>
                ))}
            </div>
            <div className="bg-white rounded-[12px] border border-[#F3F4F6]">
                <div className="flex items-center justify-between px-[20px] py-[16px] border-b border-[#F3F4F6]">
                    <div className="bg-[#f6f6f6] flex items-center gap-[8px] px-[12px] py-[8px] rounded-full w-[240px]">
                        <Search size={14} className="text-[#a0a0a0] shrink-0" />
                        <input className="bg-transparent font-['Inter',sans-serif] text-[13px] outline-none flex-1 placeholder:text-[#a0a0a0]" placeholder="Search student..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-[#F3F4F6]">
                                {["No.", "Student Name", "Test Date", "Score", "Level", "Result", "Assigned Course", "Actions"].map((col) => (
                                    <th key={col} className="px-[16px] py-[12px] text-left font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] whitespace-nowrap">{col}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((t, idx) => (
                                <tr key={t.id} className="border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors">
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{idx + 1}.</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827] whitespace-nowrap">{t.studentName}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{t.testDate}</td>
                                    <td className="px-[16px] py-[14px]">
                                        <div className="flex items-center gap-[8px]">
                                            <div className="w-[60px] h-[6px] bg-[#F3F4F6] rounded-full overflow-hidden">
                                                <div className="h-full rounded-full" style={{ width: `${t.score}%`, backgroundColor: t.score >= 70 ? "#22C55E" : "#EF4444" }} />
                                            </div>
                                            <span className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827]">{t.score}</span>
                                        </div>
                                    </td>
                                    <td className="px-[16px] py-[14px]"><span className="px-[8px] py-[3px] rounded-full bg-[#EFF6FF] text-[#155DFC] text-[11px] font-semibold font-['Inter',sans-serif]">{t.level}</span></td>
                                    <td className="px-[16px] py-[14px]">
                                        <span className={`inline-flex items-center gap-[4px] px-[8px] py-[3px] rounded-full text-[11px] font-semibold font-['Inter',sans-serif] ${t.result === "Pass" ? "bg-[#DCFCE7] text-[#16A34A]" : "bg-[#FEE2E2] text-[#DC2626]"}`}>
                                            {t.result === "Pass" ? <CheckCircle2 size={11} /> : <X size={11} />}{t.result}
                                        </span>
                                    </td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{t.assignedCourse}</td>
                                    <td className="px-[16px] py-[14px]">
                                        <button className="flex items-center gap-[4px] px-[10px] py-[6px] rounded-[6px] bg-[#F3F4F6] hover:bg-[#E5E7EB] transition-colors">
                                            <Eye size={13} className="text-[#374151]" /><span className="font-['Inter',sans-serif] text-[12px] text-[#374151]">View</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex items-center justify-between px-[20px] py-[14px]">
                    <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} className="flex items-center gap-[6px] font-['Inter',sans-serif] text-[13px] text-[#374151]"><ChevronLeft size={16} />Previous</button>
                    <div className="flex items-center gap-[4px]">
                        {[1, 2].map(p => (<button key={p} onClick={() => setCurrentPage(p)} className={`size-[32px] flex items-center justify-center rounded-[6px] font-['Inter',sans-serif] text-[13px] ${currentPage === p ? "bg-[#155DFC] text-white" : "text-[#374151] hover:bg-[#F3F4F6]"}`}>{p}</button>))}
                    </div>
                    <button onClick={() => setCurrentPage(p => Math.min(2, p + 1))} className="flex items-center gap-[6px] font-['Inter',sans-serif] text-[13px] text-[#374151]">Next<ChevronRight size={16} /></button>
                </div>
            </div>
        </div>
    );
}
