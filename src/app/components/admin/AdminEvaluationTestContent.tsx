import { useState } from "react";
import { Plus, Search, Eye, ChevronLeft, ChevronRight, CheckCircle2, X } from "lucide-react";

const tests = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    studentName: ["Emma Thompson", "James Wilson", "Sophia Martinez", "Liam Johnson", "Olivia Brown", "Ava Garcia", "William Lee", "Isabella White"][i],
    module: [`Module ${i + 1}`, `Module ${i + 1}`, `Module ${i}`, `Module ${i + 2}`, `Module ${i + 1}`, `Module ${i}`, `Module ${i + 2}`, `Module ${i + 1}`][i] || "Module 1",
    testType: ["Written", "Oral", "Written", "Practical", "Written", "Oral", "Written", "Oral"][i],
    testDate: `${String(i + 1).padStart(2, "0")}/03/2025`,
    score: [88, 72, 65, 95, 58, 81, 74, 90][i],
    maxScore: 100,
    result: (["Pass", "Pass", "Pass", "Pass", "Fail", "Pass", "Pass", "Pass"] as const)[i],
    evaluator: ["Ms. Aisha", "Mr. David", "Mr. Tom", "Ms. Aisha", "Mr. David", "Ms. Fatin", "Mr. Tom", "Ms. Aisha"][i],
}));

export function AdminEvaluationTestContent() {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const filtered = tests.filter(t => t.studentName.toLowerCase().includes(search.toLowerCase()));
    const avgScore = Math.round(tests.reduce((a, t) => a + t.score, 0) / tests.length);

    return (
        <div className="space-y-[20px]">
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827]">Evaluation Test</h2>
                    <p className="font-['Inter',sans-serif] text-[14px] text-[#6B7280] mt-[4px]">Manage module evaluation tests and student results</p>
                </div>
                <button className="flex items-center gap-[8px] bg-[#155DFC] hover:bg-[#1249CC] transition-colors text-white px-[16px] py-[10px] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[14px]">
                    <Plus size={16} />Schedule Evaluation
                </button>
            </div>
            <div className="grid grid-cols-4 gap-[14px]">
                {[
                    { label: "Total Evaluations", value: tests.length, color: "text-[#155DFC]", bg: "bg-[#EFF6FF]" },
                    { label: "Passed", value: tests.filter(t => t.result === "Pass").length, color: "text-[#16A34A]", bg: "bg-[#DCFCE7]" },
                    { label: "Failed", value: tests.filter(t => t.result === "Fail").length, color: "text-[#DC2626]", bg: "bg-[#FEE2E2]" },
                    { label: "Avg Score", value: `${avgScore}/100`, color: "text-[#F97316]", bg: "bg-[#FFF7ED]" },
                ].map((c) => (
                    <div key={c.label} className={`${c.bg} rounded-[12px] p-[16px]`}>
                        <p className={`font-['Inter',sans-serif] font-bold text-[24px] ${c.color}`}>{c.value}</p>
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
                                {["No.", "Student Name", "Module", "Test Type", "Date", "Score", "Result", "Evaluator", "Actions"].map((col) => (
                                    <th key={col} className="px-[16px] py-[12px] text-left font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] whitespace-nowrap">{col}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((t, idx) => (
                                <tr key={t.id} className="border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors">
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{idx + 1}.</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827] whitespace-nowrap">{t.studentName}</td>
                                    <td className="px-[16px] py-[14px]"><span className="px-[8px] py-[2px] bg-[#F3F4F6] rounded-[4px] font-['Inter',sans-serif] text-[12px] text-[#374151]">{t.module}</span></td>
                                    <td className="px-[16px] py-[14px]"><span className="px-[8px] py-[2px] bg-[#EFF6FF] text-[#155DFC] rounded-[4px] font-['Inter',sans-serif] text-[12px] font-semibold">{t.testType}</span></td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151]">{t.testDate}</td>
                                    <td className="px-[16px] py-[14px]">
                                        <div className="flex items-center gap-[8px]">
                                            <div className="w-[50px] h-[6px] bg-[#F3F4F6] rounded-full overflow-hidden">
                                                <div className="h-full rounded-full" style={{ width: `${(t.score / t.maxScore) * 100}%`, backgroundColor: t.score >= 70 ? "#22C55E" : "#EF4444" }} />
                                            </div>
                                            <span className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827]">{t.score}</span>
                                        </div>
                                    </td>
                                    <td className="px-[16px] py-[14px]">
                                        <span className={`inline-flex items-center gap-[4px] px-[8px] py-[3px] rounded-full text-[11px] font-semibold font-['Inter',sans-serif] ${t.result === "Pass" ? "bg-[#DCFCE7] text-[#16A34A]" : "bg-[#FEE2E2] text-[#DC2626]"}`}>
                                            {t.result === "Pass" ? <CheckCircle2 size={11} /> : <X size={11} />}{t.result}
                                        </span>
                                    </td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151] whitespace-nowrap">{t.evaluator}</td>
                                    <td className="px-[16px] py-[14px]"><button className="flex items-center gap-[4px] px-[10px] py-[6px] rounded-[6px] bg-[#F3F4F6] hover:bg-[#E5E7EB] transition-colors"><Eye size={13} className="text-[#374151]" /><span className="font-['Inter',sans-serif] text-[12px] text-[#374151]">View</span></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex items-center justify-between px-[20px] py-[14px]">
                    <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} className="flex items-center gap-[6px] font-['Inter',sans-serif] text-[13px] text-[#374151]"><ChevronLeft size={16} />Previous</button>
                    <div className="flex items-center gap-[4px]">{[1, 2].map(p => <button key={p} onClick={() => setCurrentPage(p)} className={`size-[32px] flex items-center justify-center rounded-[6px] font-['Inter',sans-serif] text-[13px] ${currentPage === p ? "bg-[#155DFC] text-white" : "text-[#374151] hover:bg-[#F3F4F6]"}`}>{p}</button>)}</div>
                    <button onClick={() => setCurrentPage(p => Math.min(2, p + 1))} className="flex items-center gap-[6px] font-['Inter',sans-serif] text-[13px] text-[#374151]">Next<ChevronRight size={16} /></button>
                </div>
            </div>
        </div>
    );
}
