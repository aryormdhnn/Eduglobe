import { useState } from "react";
import { Plus, Search, Globe, Eye, ChevronLeft, ChevronRight, Mail, Phone } from "lucide-react";

const agents = [
    { id: 1, name: "Star Education Consulting", contact: "Ahmad Farid", email: "ahmad@staredu.com", phone: "+60 12-800-9001", country: "Malaysia", students: 12, commission: "10%", status: "Active" as const },
    { id: 2, name: "Global Study Link", contact: "Li Wei", email: "li@globalstudylink.com", phone: "+86 138-0013-8000", country: "China", students: 8, commission: "8%", status: "Active" as const },
    { id: 3, name: "EduBridge Arabia", contact: "Khalid Al-Mansour", email: "khalid@edubridge.sa", phone: "+966 50-123-4567", country: "Saudi Arabia", students: 6, commission: "10%", status: "Active" as const },
    { id: 4, name: "Pathway Partners", contact: "John Smith", email: "john@pathway.co.uk", phone: "+44 20-7946-0958", country: "UK", students: 4, commission: "9%", status: "Inactive" as const },
    { id: 5, name: "AsiaPro Education", contact: "Tanaka Hiroshi", email: "tanaka@asiapro.jp", phone: "+81 3-1234-5678", country: "Japan", students: 5, commission: "8%", status: "Active" as const },
];

export function AdminAgentContent() {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const filtered = agents.filter(a => a.name.toLowerCase().includes(search.toLowerCase()) || a.contact.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="space-y-[20px]">
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827]">Agent</h2>
                    <p className="font-['Inter',sans-serif] text-[14px] text-[#6B7280] mt-[4px]">Manage recruitment agents and partner organizations</p>
                </div>
                <button className="flex items-center gap-[8px] bg-[#155DFC] hover:bg-[#1249CC] transition-colors text-white px-[16px] py-[10px] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[14px]">
                    <Plus size={16} />Add Agent
                </button>
            </div>
            <div className="grid grid-cols-3 gap-[14px]">
                {[
                    { label: "Total Agents", value: agents.length, color: "text-[#155DFC]", bg: "bg-[#EFF6FF]" },
                    { label: "Active", value: agents.filter(a => a.status === "Active").length, color: "text-[#16A34A]", bg: "bg-[#DCFCE7]" },
                    { label: "Total Referrals", value: agents.reduce((a, ag) => a + ag.students, 0), color: "text-[#F97316]", bg: "bg-[#FFF7ED]" },
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
                        <input className="bg-transparent font-['Inter',sans-serif] text-[13px] outline-none flex-1 placeholder:text-[#a0a0a0]" placeholder="Search agent..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-[#F3F4F6]">
                                {["No.", "Agency Name", "Contact Person", "Country", "Students", "Commission", "Status", "Actions"].map((col) => (
                                    <th key={col} className="px-[16px] py-[12px] text-left font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] whitespace-nowrap">{col}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((a, idx) => (
                                <tr key={a.id} className="border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors">
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{idx + 1}.</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827]">{a.name}</td>
                                    <td className="px-[16px] py-[14px]">
                                        <div className="flex flex-col gap-[2px]">
                                            <span className="font-['Inter',sans-serif] font-medium text-[13px] text-[#111827]">{a.contact}</span>
                                            <div className="flex items-center gap-[4px]"><Mail size={11} className="text-[#9CA3AF]" /><span className="font-['Inter',sans-serif] text-[11px] text-[#374151]">{a.email}</span></div>
                                        </div>
                                    </td>
                                    <td className="px-[16px] py-[14px]">
                                        <div className="flex items-center gap-[5px]"><Globe size={12} className="text-[#9CA3AF]" /><span className="font-['Inter',sans-serif] text-[13px] text-[#374151]">{a.country}</span></div>
                                    </td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827]">{a.students}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#155DFC] font-semibold">{a.commission}</td>
                                    <td className="px-[16px] py-[14px]"><span className={`px-[8px] py-[3px] rounded-full text-[11px] font-semibold font-['Inter',sans-serif] ${a.status === "Active" ? "bg-[#DCFCE7] text-[#16A34A]" : "bg-[#F3F4F6] text-[#6B7280]"}`}>{a.status}</span></td>
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
