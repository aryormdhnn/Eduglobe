import { useState } from "react";
import { Plus, Search, Eye, Globe, ChevronLeft, ChevronRight, Clock } from "lucide-react";

const visas = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    studentName: ["Emma Thompson", "James Wilson", "Sophia Martinez", "Liam Johnson", "Olivia Brown", "Ava Garcia", "William Lee"][i],
    nationality: ["United Kingdom", "Australia", "Spain", "United States", "Canada", "Mexico", "Singapore"][i],
    passportNo: `P${String(100000 + i * 11111).slice(0, 6)}`,
    visaType: "Student Visa (VP)",
    applicationDate: `0${i + 1}/01/2025`,
    expiryDate: `0${i + 1}/01/2026`,
    status: (["Approved", "Pending", "Approved", "Approved", "In Review", "Approved", "Pending"] as const)[i],
}));

const statusMap = { Approved: "bg-[#DCFCE7] text-[#16A34A]", Pending: "bg-[#FEF9C3] text-[#CA8A04]", "In Review": "bg-[#EFF6FF] text-[#155DFC]", Expired: "bg-[#FEE2E2] text-[#DC2626]" };

export function AdminVisaContent() {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const filtered = visas.filter(v => v.studentName.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="space-y-[20px]">
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827]">Visa Management</h2>
                    <p className="font-['Inter',sans-serif] text-[14px] text-[#6B7280] mt-[4px]">Track student visa applications and expiry dates</p>
                </div>
                <button className="flex items-center gap-[8px] bg-[#155DFC] hover:bg-[#1249CC] transition-colors text-white px-[16px] py-[10px] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[14px]">
                    <Plus size={16} />New Visa Record
                </button>
            </div>
            <div className="grid grid-cols-3 gap-[14px]">
                {[
                    { label: "Approved", value: visas.filter(v => v.status === "Approved").length, color: "text-[#16A34A]", bg: "bg-[#DCFCE7]" },
                    { label: "Pending", value: visas.filter(v => v.status === "Pending").length, color: "text-[#CA8A04]", bg: "bg-[#FEF9C3]" },
                    { label: "In Review", value: visas.filter(v => v.status === "In Review").length, color: "text-[#155DFC]", bg: "bg-[#EFF6FF]" },
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
                                {["No.", "Student Name", "Nationality", "Passport No.", "Visa Type", "Applied", "Expiry", "Status", "Actions"].map((col) => (
                                    <th key={col} className="px-[16px] py-[12px] text-left font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] whitespace-nowrap">{col}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((v, idx) => (
                                <tr key={v.id} className="border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors">
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{idx + 1}.</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827] whitespace-nowrap">{v.studentName}</td>
                                    <td className="px-[16px] py-[14px]"><div className="flex items-center gap-[5px]"><Globe size={12} className="text-[#9CA3AF]" /><span className="font-['Inter',sans-serif] text-[13px] text-[#374151]">{v.nationality}</span></div></td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151] font-mono">{v.passportNo}</td>
                                    <td className="px-[16px] py-[14px]"><span className="px-[8px] py-[3px] rounded-[4px] bg-[#F3F4F6] font-['Inter',sans-serif] text-[12px] text-[#374151]">{v.visaType}</span></td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151] whitespace-nowrap">{v.applicationDate}</td>
                                    <td className="px-[16px] py-[14px]"><div className="flex items-center gap-[5px]"><Clock size={12} className="text-[#9CA3AF]" /><span className="font-['Inter',sans-serif] text-[12px] text-[#374151] whitespace-nowrap">{v.expiryDate}</span></div></td>
                                    <td className="px-[16px] py-[14px]"><span className={`px-[8px] py-[3px] rounded-full text-[11px] font-semibold font-['Inter',sans-serif] ${statusMap[v.status]}`}>{v.status}</span></td>
                                    <td className="px-[16px] py-[14px]"><button className="flex items-center gap-[4px] px-[10px] py-[6px] rounded-[6px] bg-[#F3F4F6] hover:bg-[#E5E7EB] transition-colors"><Eye size={13} className="text-[#374151]" /><span className="font-['Inter',sans-serif] text-[12px] text-[#374151]">View</span></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex items-center justify-between px-[20px] py-[14px]">
                    <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} className="flex items-center gap-[6px] font-['Inter',sans-serif] text-[13px] text-[#374151]"><ChevronLeft size={16} />Previous</button>
                    <div className="flex items-center gap-[4px]">{[1].map(p => <button key={p} onClick={() => setCurrentPage(p)} className={`size-[32px] flex items-center justify-center rounded-[6px] font-['Inter',sans-serif] text-[13px] ${currentPage === p ? "bg-[#155DFC] text-white" : "text-[#374151] hover:bg-[#F3F4F6]"}`}>{p}</button>)}</div>
                    <button onClick={() => setCurrentPage(p => Math.min(1, p + 1))} className="flex items-center gap-[6px] font-['Inter',sans-serif] text-[13px] text-[#374151]">Next<ChevronRight size={16} /></button>
                </div>
            </div>
        </div>
    );
}
