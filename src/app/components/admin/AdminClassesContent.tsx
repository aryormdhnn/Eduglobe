import { useState } from "react";
import { Plus, Search, Eye, ChevronLeft, ChevronRight, Calendar } from "lucide-react";

const classes = [
    { id: 1, name: "BEC-01 Morning", program: "Business English Course", teacher: "Ms. Aisha", schedule: "Mon, Wed, Fri 09:00–11:00", room: "Room A", students: 12, maxStudents: 15, startDate: "10 Jan 2025", status: "Active" as const },
    { id: 2, name: "BEC-02 Afternoon", program: "Business English Course", teacher: "Mr. David", schedule: "Tue, Thu 14:00–17:00", room: "Room B", students: 10, maxStudents: 15, startDate: "14 Jan 2025", status: "Active" as const },
    { id: 3, name: "IELTS-01 Evening", program: "IELTS Preparation", teacher: "Mr. Kevin", schedule: "Mon–Fri 19:00–21:00", room: "Room C", students: 8, maxStudents: 12, startDate: "20 Jan 2025", status: "Active" as const },
    { id: 4, name: "GEN-01 Morning", program: "General English", teacher: "Ms. Fatin", schedule: "Mon, Wed 10:00–12:00", room: "Room D", students: 6, maxStudents: 15, startDate: "03 Feb 2025", status: "Active" as const },
    { id: 5, name: "CEFR-B2", program: "CEFR B2 Intensive", teacher: "Mr. Tom", schedule: "Sat, Sun 09:00–13:00", room: "Room A", students: 5, maxStudents: 10, startDate: "01 Mar 2025", status: "Upcoming" as const },
];

const statusMap = { Active: "bg-[#DCFCE7] text-[#16A34A]", Upcoming: "bg-[#EFF6FF] text-[#155DFC]", Completed: "bg-[#F3F4F6] text-[#6B7280]" };

export function AdminClassesContent() {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const filtered = classes.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || c.program.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="space-y-[20px]">
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827]">Classes</h2>
                    <p className="font-['Inter',sans-serif] text-[14px] text-[#6B7280] mt-[4px]">Schedule and manage class sessions and room assignments</p>
                </div>
                <button className="flex items-center gap-[8px] bg-[#155DFC] hover:bg-[#1249CC] transition-colors text-white px-[16px] py-[10px] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[14px]">
                    <Plus size={16} />Add Class
                </button>
            </div>
            <div className="grid grid-cols-3 gap-[14px]">
                {[
                    { label: "Active Classes", value: classes.filter(c => c.status === "Active").length, color: "text-[#16A34A]", bg: "bg-[#DCFCE7]" },
                    { label: "Upcoming", value: classes.filter(c => c.status === "Upcoming").length, color: "text-[#155DFC]", bg: "bg-[#EFF6FF]" },
                    { label: "Total Students", value: classes.reduce((a, c) => a + c.students, 0), color: "text-[#F97316]", bg: "bg-[#FFF7ED]" },
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
                        <input className="bg-transparent font-['Inter',sans-serif] text-[13px] outline-none flex-1 placeholder:text-[#a0a0a0]" placeholder="Search class..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-[#F3F4F6]">
                                {["No.", "Class Name", "Program", "Teacher", "Schedule", "Room", "Students", "Start Date", "Status", "Actions"].map((col) => (
                                    <th key={col} className="px-[16px] py-[12px] text-left font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] whitespace-nowrap">{col}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((c, idx) => (
                                <tr key={c.id} className="border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors">
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{idx + 1}.</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827] whitespace-nowrap">{c.name}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151]">{c.program}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151] whitespace-nowrap">{c.teacher}</td>
                                    <td className="px-[16px] py-[14px]"><div className="flex items-center gap-[5px]"><Calendar size={12} className="text-[#9CA3AF]" /><span className="font-['Inter',sans-serif] text-[11px] text-[#374151]">{c.schedule}</span></div></td>
                                    <td className="px-[16px] py-[14px]"><span className="px-[8px] py-[3px] rounded-[4px] bg-[#F3F4F6] font-['Inter',sans-serif] text-[12px] text-[#374151]">{c.room}</span></td>
                                    <td className="px-[16px] py-[14px]">
                                        <div className="flex items-center gap-[6px]">
                                            <span className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827]">{c.students}</span>
                                            <span className="font-['Inter',sans-serif] text-[11px] text-[#9CA3AF]">/ {c.maxStudents}</span>
                                        </div>
                                        <div className="w-[40px] h-[4px] bg-[#F3F4F6] rounded-full mt-[4px] overflow-hidden">
                                            <div className="h-full bg-[#155DFC] rounded-full" style={{ width: `${(c.students / c.maxStudents) * 100}%` }} />
                                        </div>
                                    </td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151] whitespace-nowrap">{c.startDate}</td>
                                    <td className="px-[16px] py-[14px]"><span className={`px-[8px] py-[3px] rounded-full text-[11px] font-semibold font-['Inter',sans-serif] ${statusMap[c.status]}`}>{c.status}</span></td>
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
