import { useState } from "react";
import { Plus, Search, Mail, Phone, Eye, ChevronLeft, ChevronRight } from "lucide-react";

const teachers = [
    { id: 1, name: "Ms. Aisha Rahman", email: "aisha@eduglobe.com", phone: "+60 12-345-6789", subject: "Business Communication", classes: 3, students: 24, since: "Jan 2023", status: "Active" as const },
    { id: 2, name: "Mr. David Chen", email: "david@eduglobe.com", phone: "+60 11-234-5678", subject: "Writing & Grammar", classes: 2, students: 18, since: "Mar 2023", status: "Active" as const },
    { id: 3, name: "Mr. Tom Harrison", email: "tom@eduglobe.com", phone: "+60 13-456-7890", subject: "Speaking & Presentation", classes: 2, students: 16, since: "Jun 2023", status: "Active" as const },
    { id: 4, name: "Ms. Fatin Zahra", email: "fatin@eduglobe.com", phone: "+60 14-567-8901", subject: "Listening & Comprehension", classes: 1, students: 10, since: "Sep 2023", status: "Active" as const },
    { id: 5, name: "Mr. Kevin Lim", email: "kevin@eduglobe.com", phone: "+60 16-678-9012", subject: "IELTS Preparation", classes: 2, students: 14, since: "Jan 2024", status: "On Leave" as const },
];

export function StaffTeachersContent() {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const filtered = teachers.filter(t => t.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="space-y-[20px]">
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827]">Teachers</h2>
                    <p className="font-['Inter',sans-serif] text-[14px] text-[#6B7280] mt-[4px]">Manage teaching staff, subjects, and class assignments</p>
                </div>
                <button className="flex items-center gap-[8px] bg-[#155DFC] hover:bg-[#1249CC] transition-colors text-white px-[16px] py-[10px] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[14px]">
                    <Plus size={16} />Add Teacher
                </button>
            </div>
            <div className="grid grid-cols-3 gap-[14px]">
                {[
                    { label: "Total Teachers", value: teachers.length, color: "text-[#155DFC]", bg: "bg-[#EFF6FF]" },
                    { label: "Active", value: teachers.filter(t => t.status === "Active").length, color: "text-[#16A34A]", bg: "bg-[#DCFCE7]" },
                    { label: "Total Classes", value: teachers.reduce((a, t) => a + t.classes, 0), color: "text-[#F97316]", bg: "bg-[#FFF7ED]" },
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
                        <input className="bg-transparent font-['Inter',sans-serif] text-[13px] outline-none flex-1 placeholder:text-[#a0a0a0]" placeholder="Search teacher..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-[#F3F4F6]">
                                {["No.", "Teacher Name", "Contact", "Subject", "Classes", "Students", "Since", "Status", "Actions"].map((col) => (
                                    <th key={col} className="px-[16px] py-[12px] text-left font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] whitespace-nowrap">{col}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((t, idx) => (
                                <tr key={t.id} className="border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors">
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{idx + 1}.</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827] whitespace-nowrap">{t.name}</td>
                                    <td className="px-[16px] py-[14px]">
                                        <div className="flex flex-col gap-[2px]">
                                            <div className="flex items-center gap-[5px]"><Mail size={11} className="text-[#9CA3AF]" /><span className="font-['Inter',sans-serif] text-[12px] text-[#374151]">{t.email}</span></div>
                                            <div className="flex items-center gap-[5px]"><Phone size={11} className="text-[#9CA3AF]" /><span className="font-['Inter',sans-serif] text-[12px] text-[#374151]">{t.phone}</span></div>
                                        </div>
                                    </td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{t.subject}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{t.classes}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{t.students}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151] whitespace-nowrap">{t.since}</td>
                                    <td className="px-[16px] py-[14px]">
                                        <span className={`px-[8px] py-[3px] rounded-full text-[11px] font-semibold font-['Inter',sans-serif] ${t.status === "Active" ? "bg-[#DCFCE7] text-[#16A34A]" : "bg-[#FEF9C3] text-[#CA8A04]"}`}>{t.status}</span>
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
                    <div className="flex items-center gap-[4px]">{[1].map(p => <button key={p} onClick={() => setCurrentPage(p)} className={`size-[32px] flex items-center justify-center rounded-[6px] font-['Inter',sans-serif] text-[13px] ${currentPage === p ? "bg-[#155DFC] text-white" : "text-[#374151] hover:bg-[#F3F4F6]"}`}>{p}</button>)}</div>
                    <button onClick={() => setCurrentPage(p => Math.min(1, p + 1))} className="flex items-center gap-[6px] font-['Inter',sans-serif] text-[13px] text-[#374151]">Next<ChevronRight size={16} /></button>
                </div>
            </div>
        </div>
    );
}
