import { useState } from "react";
import { Plus, Bell, Edit2, Trash2, X } from "lucide-react";

const announcements = [
    { id: 1, title: "New CEFR Curriculum Update", body: "We are pleased to announce that the updated CEFR curriculum for Business English will take effect starting April 2025. All teachers are required to attend the briefing session on 20 March 2025.", category: "Academic", target: "All", priority: "High" as const, date: "05 Mar 2025", author: "Admin" },
    { id: 2, title: "End of Term Assessment Schedule", body: "The end-of-term assessments for Module 1–3 students will be held from 28–30 March 2025. Please ensure all attendance records are submitted by 25 March 2025.", category: "Academic", target: "Teachers", priority: "Medium" as const, date: "28 Feb 2025", author: "Academic Dept" },
    { id: 3, title: "Student Portal Maintenance – 15 Mar", body: "The EduGlobe student portal will undergo scheduled maintenance on 15 March 2025 from 10:00 PM to 2:00 AM. During this period, access to the portal will be unavailable.", category: "IT", target: "Students", priority: "Low" as const, date: "12 Feb 2025", author: "IT Department" },
    { id: 4, title: "Ramadan Office Hours", body: "During the month of Ramadan, EduGlobe office hours will be adjusted to 8:00 AM – 4:00 PM, Monday to Friday.", category: "Operations", target: "All", priority: "Medium" as const, date: "01 Mar 2025", author: "Admin" },
    { id: 5, title: "Annual EduGlobe Language Expo 2025", body: "We are excited to announce the Annual EduGlobe Language Expo 2025, scheduled for 20 April 2025. Students and teachers are encouraged to participate.", category: "Events", target: "All", priority: "Medium" as const, date: "15 Feb 2025", author: "Events Team" },
];

const priorityMap = { High: "bg-[#FEE2E2] text-[#DC2626]", Medium: "bg-[#FEF9C3] text-[#CA8A04]", Low: "bg-[#DCFCE7] text-[#16A34A]" };

export function AdminAnnouncementContent() {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="space-y-[20px]">
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827]">Announcements</h2>
                    <p className="font-['Inter',sans-serif] text-[14px] text-[#6B7280] mt-[4px]">Create and manage announcements for students, teachers, and staff</p>
                </div>
                <button
                    onClick={() => setShowForm(true)}
                    className="flex items-center gap-[8px] bg-[#155DFC] hover:bg-[#1249CC] transition-colors text-white px-[16px] py-[10px] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[14px]"
                >
                    <Plus size={16} />New Announcement
                </button>
            </div>

            {/* Compose form */}
            {showForm && (
                <div className="bg-white rounded-[12px] border border-[#E5E7EB] p-[24px] space-y-[14px]">
                    <div className="flex items-center justify-between">
                        <h3 className="font-['Inter',sans-serif] font-bold text-[15px] text-[#111827]">New Announcement</h3>
                        <button onClick={() => setShowForm(false)} className="size-[30px] flex items-center justify-center rounded-[6px] hover:bg-[#F3F4F6] transition-colors"><X size={16} className="text-[#6B7280]" /></button>
                    </div>
                    <input className="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] font-['Inter',sans-serif] text-[14px] text-[#111827] outline-none focus:border-[#155DFC] transition-colors" placeholder="Title" />
                    <div className="grid grid-cols-3 gap-[12px]">
                        <select className="border border-[#E5E7EB] rounded-[8px] px-[12px] py-[10px] font-['Inter',sans-serif] text-[13px] text-[#374151] outline-none focus:border-[#155DFC] transition-colors">
                            <option>Academic</option><option>IT</option><option>Operations</option><option>Events</option>
                        </select>
                        <select className="border border-[#E5E7EB] rounded-[8px] px-[12px] py-[10px] font-['Inter',sans-serif] text-[13px] text-[#374151] outline-none focus:border-[#155DFC] transition-colors">
                            <option>All</option><option>Students</option><option>Teachers</option><option>Staff</option>
                        </select>
                        <select className="border border-[#E5E7EB] rounded-[8px] px-[12px] py-[10px] font-['Inter',sans-serif] text-[13px] text-[#374151] outline-none focus:border-[#155DFC] transition-colors">
                            <option>High</option><option>Medium</option><option>Low</option>
                        </select>
                    </div>
                    <textarea rows={4} className="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] font-['Inter',sans-serif] text-[14px] text-[#111827] outline-none focus:border-[#155DFC] transition-colors resize-none" placeholder="Write your announcement..." />
                    <div className="flex justify-end gap-[10px]">
                        <button onClick={() => setShowForm(false)} className="px-[16px] py-[9px] border border-[#E5E7EB] rounded-[8px] font-['Inter',sans-serif] text-[13px] text-[#374151] hover:bg-[#F9FAFB] transition-colors">Cancel</button>
                        <button className="px-[16px] py-[9px] bg-[#155DFC] hover:bg-[#1249CC] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[13px] text-white transition-colors">Publish</button>
                    </div>
                </div>
            )}

            {/* Announcement cards */}
            <div className="space-y-[12px]">
                {announcements.map((a) => (
                    <div key={a.id} className="bg-white rounded-[12px] border border-[#F3F4F6] p-[20px] hover:border-[#E5E7EB] transition-colors">
                        <div className="flex items-start justify-between gap-[16px]">
                            <div className="flex items-start gap-[14px] flex-1">
                                <div className="bg-[#EFF6FF] rounded-[8px] p-[8px] shrink-0 mt-[2px]">
                                    <Bell size={16} className="text-[#155DFC]" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-[8px] mb-[6px] flex-wrap">
                                        <h3 className="font-['Inter',sans-serif] font-bold text-[15px] text-[#111827]">{a.title}</h3>
                                        <span className={`px-[7px] py-[2px] rounded-full text-[10px] font-semibold font-['Inter',sans-serif] ${priorityMap[a.priority]}`}>{a.priority}</span>
                                        <span className="px-[7px] py-[2px] rounded-full bg-[#F3F4F6] text-[10px] font-semibold font-['Inter',sans-serif] text-[#374151]">→ {a.target}</span>
                                        <span className="px-[7px] py-[2px] rounded-full bg-[#F9FAFB] text-[10px] font-['Inter',sans-serif] text-[#9CA3AF]">{a.category}</span>
                                    </div>
                                    <p className="font-['Inter',sans-serif] text-[13px] text-[#6B7280] leading-[1.6] mb-[10px]">{a.body}</p>
                                    <div className="flex items-center gap-[12px]">
                                        <span className="font-['Inter',sans-serif] text-[12px] text-[#9CA3AF]">{a.date}</span>
                                        <span className="font-['Inter',sans-serif] text-[12px] text-[#9CA3AF]">by {a.author}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-[6px] shrink-0">
                                <button className="size-[32px] flex items-center justify-center rounded-[6px] hover:bg-[#F3F4F6] transition-colors"><Edit2 size={14} className="text-[#6B7280]" /></button>
                                <button className="size-[32px] flex items-center justify-center rounded-[6px] hover:bg-[#FEE2E2] transition-colors"><Trash2 size={14} className="text-[#DC2626]" /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
