import { useState } from "react";
import { Search, SlidersHorizontal, Plus, Phone, Mail, ChevronLeft, ChevronRight, Eye } from "lucide-react";

const enquiries = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: ["Alice Chen", "Mohammed Al-Rashid", "Sofia Hernandez", "Kwame Asante", "Yuki Tanaka", "Fatima Zahra", "Lucas Oliveira", "Priya Sharma"][i],
    email: `student${i + 1}@email.com`,
    phone: `+60 1${String(i + 1).padStart(1, "0")}-${100 + i * 11}-${1000 + i * 111}`,
    course: "Business English Course",
    date: `${String(i + 1).padStart(2, "0")}/01/2025`,
    nationality: ["China", "Saudi Arabia", "Mexico", "Ghana", "Japan", "Morocco", "Brazil", "India"][i],
    status: (["New", "Contacted", "In Review", "Accepted", "New", "Contacted", "In Review", "Accepted"] as const)[i],
}));

const statusColors = {
    New: "bg-[#EFF6FF] text-[#155DFC]",
    Contacted: "bg-[#FEF9C3] text-[#CA8A04]",
    "In Review": "bg-[#FFF7ED] text-[#F97316]",
    Accepted: "bg-[#DCFCE7] text-[#16A34A]",
};

export function StaffEnquiryContent() {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const filtered = enquiries.filter((e) =>
        e.name.toLowerCase().includes(search.toLowerCase()) ||
        e.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-[20px]">
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827]">Enquiry</h2>
                    <p className="font-['Inter',sans-serif] text-[14px] text-[#6B7280] mt-[4px]">Manage incoming student enquiries and follow-ups</p>
                </div>
                <button className="flex items-center gap-[8px] bg-[#155DFC] hover:bg-[#1249CC] transition-colors text-white px-[16px] py-[10px] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[14px]">
                    <Plus size={16} />
                    Add Enquiry
                </button>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-4 gap-[14px]">
                {[
                    { label: "New", value: enquiries.filter(e => e.status === "New").length, color: "text-[#155DFC]", bg: "bg-[#EFF6FF]" },
                    { label: "Contacted", value: enquiries.filter(e => e.status === "Contacted").length, color: "text-[#CA8A04]", bg: "bg-[#FEF9C3]" },
                    { label: "In Review", value: enquiries.filter(e => e.status === "In Review").length, color: "text-[#F97316]", bg: "bg-[#FFF7ED]" },
                    { label: "Accepted", value: enquiries.filter(e => e.status === "Accepted").length, color: "text-[#16A34A]", bg: "bg-[#DCFCE7]" },
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
                        <input className="bg-transparent font-['Inter',sans-serif] text-[13px] outline-none flex-1 placeholder:text-[#a0a0a0]" placeholder="Search enquiries..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                    <button className="flex items-center gap-[6px] border border-[#E5E7EB] rounded-[8px] bg-white hover:bg-[#f9fafb] px-[14px] py-[9px] transition-colors">
                        <SlidersHorizontal size={14} className="text-[#374151]" />
                        <span className="font-['Inter',sans-serif] text-[13px] text-[#374151]">Filter</span>
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-[#F3F4F6]">
                                {["No.", "Name", "Contact", "Nationality", "Course", "Enquiry Date", "Status", "Actions"].map((col) => (
                                    <th key={col} className="px-[16px] py-[12px] text-left font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] whitespace-nowrap">{col}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((e, idx) => (
                                <tr key={e.id} className="border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors">
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{idx + 1}.</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827] whitespace-nowrap">{e.name}</td>
                                    <td className="px-[16px] py-[14px]">
                                        <div className="flex flex-col gap-[2px]">
                                            <div className="flex items-center gap-[5px]"><Mail size={11} className="text-[#9CA3AF]" /><span className="font-['Inter',sans-serif] text-[12px] text-[#374151]">{e.email}</span></div>
                                            <div className="flex items-center gap-[5px]"><Phone size={11} className="text-[#9CA3AF]" /><span className="font-['Inter',sans-serif] text-[12px] text-[#374151]">{e.phone}</span></div>
                                        </div>
                                    </td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151] whitespace-nowrap">{e.nationality}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{e.course}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151] whitespace-nowrap">{e.date}</td>
                                    <td className="px-[16px] py-[14px]">
                                        <span className={`px-[8px] py-[3px] rounded-full text-[11px] font-semibold font-['Inter',sans-serif] ${statusColors[e.status]}`}>{e.status}</span>
                                    </td>
                                    <td className="px-[16px] py-[14px]">
                                        <button className="flex items-center gap-[4px] px-[10px] py-[6px] rounded-[6px] bg-[#F3F4F6] hover:bg-[#E5E7EB] transition-colors">
                                            <Eye size={13} className="text-[#374151]" />
                                            <span className="font-['Inter',sans-serif] text-[12px] text-[#374151]">View</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex items-center justify-between px-[20px] py-[14px]">
                    <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} className="flex items-center gap-[6px] font-['Inter',sans-serif] text-[13px] text-[#374151] hover:text-[#111827]"><ChevronLeft size={16} />Previous</button>
                    <div className="flex items-center gap-[4px]">
                        {[1, 2, 3].map((p) => (
                            <button key={p} onClick={() => setCurrentPage(p)} className={`size-[32px] flex items-center justify-center rounded-[6px] font-['Inter',sans-serif] text-[13px] ${currentPage === p ? "bg-[#155DFC] text-white" : "text-[#374151] hover:bg-[#F3F4F6]"}`}>{p}</button>
                        ))}
                    </div>
                    <button onClick={() => setCurrentPage(p => Math.min(3, p + 1))} className="flex items-center gap-[6px] font-['Inter',sans-serif] text-[13px] text-[#374151] hover:text-[#111827]">Next<ChevronRight size={16} /></button>
                </div>
            </div>
        </div>
    );
}
