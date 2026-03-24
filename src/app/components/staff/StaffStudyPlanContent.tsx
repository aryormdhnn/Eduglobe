import { useState } from "react";
import { Plus, Search, CalendarDays, ChevronLeft, ChevronRight, Eye } from "lucide-react";

const plans = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    studentName: ["Emma Thompson", "James Wilson", "Sophia Martinez", "Liam Johnson", "Olivia Brown", "Noah Davis", "Ava Garcia", "William Lee"][i],
    program: "Business English Course",
    startDate: `0${i + 1}/01/2025`,
    endDate: `0${i + 1}/04/2025`,
    currentModule: `Module ${i + 1}`,
    completionRate: [100, 80, 60, 100, 40, 100, 80, 30][i],
    status: (["On Track", "On Track", "On Track", "Completed", "Behind", "Completed", "On Track", "Behind"] as const)[i],
}));

const statusMap = {
    "On Track": "bg-[#DCFCE7] text-[#16A34A]",
    "Completed": "bg-[#EFF6FF] text-[#155DFC]",
    "Behind": "bg-[#FEE2E2] text-[#DC2626]",
};

export function StaffStudyPlanContent() {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const filtered = plans.filter(p => p.studentName.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="space-y-[20px]">
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827]">Student Study Plan</h2>
                    <p className="font-['Inter',sans-serif] text-[14px] text-[#6B7280] mt-[4px]">Monitor and manage individual student study plans</p>
                </div>
                <button className="flex items-center gap-[8px] bg-[#155DFC] hover:bg-[#1249CC] transition-colors text-white px-[16px] py-[10px] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[14px]">
                    <Plus size={16} />Create Plan
                </button>
            </div>
            <div className="grid grid-cols-3 gap-[14px]">
                {[
                    { label: "On Track", value: plans.filter(p => p.status === "On Track").length, color: "text-[#16A34A]", bg: "bg-[#DCFCE7]" },
                    { label: "Completed", value: plans.filter(p => p.status === "Completed").length, color: "text-[#155DFC]", bg: "bg-[#EFF6FF]" },
                    { label: "Behind", value: plans.filter(p => p.status === "Behind").length, color: "text-[#DC2626]", bg: "bg-[#FEE2E2]" },
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
                                {["No.", "Student Name", "Program", "Start", "End", "Current Module", "Progress", "Status", "Actions"].map((col) => (
                                    <th key={col} className="px-[16px] py-[12px] text-left font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] whitespace-nowrap">{col}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((p, idx) => (
                                <tr key={p.id} className="border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors">
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{idx + 1}.</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827] whitespace-nowrap">{p.studentName}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151]">{p.program}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151] whitespace-nowrap">{p.startDate}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151] whitespace-nowrap">{p.endDate}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151]">{p.currentModule}</td>
                                    <td className="px-[16px] py-[14px]">
                                        <div className="flex items-center gap-[8px]">
                                            <div className="w-[60px] h-[6px] bg-[#F3F4F6] rounded-full overflow-hidden">
                                                <div className="h-full bg-[#155DFC] rounded-full" style={{ width: `${p.completionRate}%` }} />
                                            </div>
                                            <span className="font-['Inter',sans-serif] text-[12px] text-[#374151]">{p.completionRate}%</span>
                                        </div>
                                    </td>
                                    <td className="px-[16px] py-[14px]">
                                        <span className={`px-[8px] py-[3px] rounded-full text-[11px] font-semibold font-['Inter',sans-serif] ${statusMap[p.status]}`}>{p.status}</span>
                                    </td>
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
                    <div className="flex items-center gap-[4px]">{[1, 2].map(p => <button key={p} onClick={() => setCurrentPage(p)} className={`size-[32px] flex items-center justify-center rounded-[6px] font-['Inter',sans-serif] text-[13px] ${currentPage === p ? "bg-[#155DFC] text-white" : "text-[#374151] hover:bg-[#F3F4F6]"}`}>{p}</button>)}</div>
                    <button onClick={() => setCurrentPage(p => Math.min(2, p + 1))} className="flex items-center gap-[6px] font-['Inter',sans-serif] text-[13px] text-[#374151]">Next<ChevronRight size={16} /></button>
                </div>
            </div>
        </div>
    );
}
