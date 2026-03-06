import { useState } from "react";
import { Plus, Search, Eye, ChevronLeft, ChevronRight, FileText } from "lucide-react";

const applications = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    appRef: `APP-2025-${String(i + 1).padStart(3, "0")}`,
    studentName: ["Alice Chen", "Mohammed Al-Rashid", "Sofia Hernandez", "Kwame Asante", "Yuki Tanaka", "Fatima Zahra", "Lucas Oliveira", "Priya Sharma"][i],
    nationality: ["China", "Saudi Arabia", "Mexico", "Ghana", "Japan", "Morocco", "Brazil", "India"][i],
    program: "Business English Course",
    submittedDate: `0${i + 1}/02/2025`,
    startDate: `0${i + 1}/03/2025`,
    agent: ["Direct", "Star Education", "Direct", "EduBridge Arabia", "AsiaPro Education", "Direct", "Global Study Link", "Direct"][i],
    status: (["Pending", "Approved", "Under Review", "Approved", "Pending", "Under Review", "Approved", "Pending"] as const)[i],
}));

const statusMap = { Pending: "bg-[#FEF9C3] text-[#CA8A04]", Approved: "bg-[#DCFCE7] text-[#16A34A]", "Under Review": "bg-[#EFF6FF] text-[#155DFC]", Rejected: "bg-[#FEE2E2] text-[#DC2626]" };

export function AdminApplicationContent() {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const filtered = applications.filter(a => a.studentName.toLowerCase().includes(search.toLowerCase()) || a.appRef.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="space-y-[20px]">
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827]">Application</h2>
                    <p className="font-['Inter',sans-serif] text-[14px] text-[#6B7280] mt-[4px]">Review and process student enrollment applications</p>
                </div>
                <button className="flex items-center gap-[8px] bg-[#155DFC] hover:bg-[#1249CC] transition-colors text-white px-[16px] py-[10px] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[14px]">
                    <Plus size={16} />New Application
                </button>
            </div>
            <div className="grid grid-cols-4 gap-[14px]">
                {[
                    { label: "Pending", value: applications.filter(a => a.status === "Pending").length, color: "text-[#CA8A04]", bg: "bg-[#FEF9C3]" },
                    { label: "Under Review", value: applications.filter(a => a.status === "Under Review").length, color: "text-[#155DFC]", bg: "bg-[#EFF6FF]" },
                    { label: "Approved", value: applications.filter(a => a.status === "Approved").length, color: "text-[#16A34A]", bg: "bg-[#DCFCE7]" },
                    { label: "Total", value: applications.length, color: "text-[#374151]", bg: "bg-[#F3F4F6]" },
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
                        <input className="bg-transparent font-['Inter',sans-serif] text-[13px] outline-none flex-1 placeholder:text-[#a0a0a0]" placeholder="Search application..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-[#F3F4F6]">
                                {["Ref No.", "Student Name", "Nationality", "Program", "Submitted", "Start Date", "Agent", "Status", "Actions"].map((col) => (
                                    <th key={col} className="px-[16px] py-[12px] text-left font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] whitespace-nowrap">{col}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((a) => (
                                <tr key={a.id} className="border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors">
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] font-semibold text-[12px] text-[#155DFC]">{a.appRef}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827] whitespace-nowrap">{a.studentName}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{a.nationality}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151]">{a.program}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151] whitespace-nowrap">{a.submittedDate}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151] whitespace-nowrap">{a.startDate}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151]">{a.agent}</td>
                                    <td className="px-[16px] py-[14px]"><span className={`px-[8px] py-[3px] rounded-full text-[11px] font-semibold font-['Inter',sans-serif] ${statusMap[a.status]}`}>{a.status}</span></td>
                                    <td className="px-[16px] py-[14px]">
                                        <div className="flex items-center gap-[6px]">
                                            <button className="flex items-center gap-[4px] px-[10px] py-[6px] rounded-[6px] bg-[#F3F4F6] hover:bg-[#E5E7EB] transition-colors"><Eye size={13} className="text-[#374151]" /><span className="font-['Inter',sans-serif] text-[12px] text-[#374151]">View</span></button>
                                            <button className="flex items-center gap-[4px] px-[10px] py-[6px] rounded-[6px] border border-[#E5E7EB] hover:bg-[#F9FAFB] transition-colors"><FileText size={13} className="text-[#374151]" /><span className="font-['Inter',sans-serif] text-[12px] text-[#374151]">Docs</span></button>
                                        </div>
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
