import { useState } from "react";
import {
    Bell,
    Megaphone,
    ChevronRight,
    Calendar,
    AlertTriangle,
    Info,
    Star,
} from "lucide-react";

interface Announcement {
    id: number;
    title: string;
    body: string;
    category: string;
    priority: "High" | "Medium" | "Low";
    date: string;
    author: string;
    target: string;
    isRead: boolean;
}

const announcements: Announcement[] = [
    { id: 1, title: "New CEFR Curriculum Update", body: "The CEFR curriculum has been updated for Q2 2025. All teachers and staff are required to review the new materials and attend the briefing session on 20 March.", category: "Academic", priority: "High", date: "05 Mar 2025", author: "Admin Office", target: "All Staff", isRead: false },
    { id: 2, title: "End of Term Assessment Schedule", body: "The end-of-term assessments will be held from 28 March to 4 April. Please ensure all students are informed and prepared. Assessment rooms will be allocated by 25 March.", category: "Academic", priority: "High", date: "28 Feb 2025", author: "Academic Dept", target: "All Staff", isRead: false },
    { id: 3, title: "Student Portal Maintenance — 15 Mar", body: "The student portal will undergo scheduled maintenance on 15 March from 10 PM to 2 AM. Students may experience brief interruptions during this window.", category: "System", priority: "Medium", date: "12 Feb 2025", author: "IT Department", target: "All", isRead: true },
    { id: 4, title: "Staff Meeting — Q1 Review", body: "All staff are invited to the Q1 performance review meeting on 12 March at 2 PM in Conference Room A. Attendance is mandatory.", category: "Internal", priority: "High", date: "08 Mar 2025", author: "HR Department", target: "Staff Only", isRead: false },
    { id: 5, title: "Annual EduGlobe Language Expo 2025", body: "We are excited to announce the Annual EduGlobe Language Expo 2025, scheduled for 20 April 2025. Students and teachers are encouraged to participate. Registration opens 15 March.", category: "Events", priority: "Medium", date: "15 Feb 2025", author: "Events Team", target: "All", isRead: true },
    { id: 6, title: "Updated Leave Policy 2025", body: "Please review the updated leave policy effective from 1 April 2025. Key changes include additional sick leave days and a new emergency leave category.", category: "HR Policy", priority: "Medium", date: "01 Mar 2025", author: "HR Department", target: "Staff Only", isRead: true },
    { id: 7, title: "Fire Drill Notice — 18 March", body: "A scheduled fire drill will be conducted on 18 March at 11:00 AM. All personnel must evacuate the building following the emergency exit plan.", category: "Safety", priority: "Low", date: "10 Mar 2025", author: "Safety Officer", target: "All", isRead: false },
    { id: 8, title: "New Printer in Staff Room", body: "A new color printer has been installed in the staff room. Please see the guide posted near the printer for setup instructions.", category: "Facilities", priority: "Low", date: "06 Mar 2025", author: "Facilities", target: "Staff Only", isRead: true },
];

const priorityConfig: Record<string, { bg: string; icon: React.ReactNode; border: string }> = {
    High: { bg: "bg-[#FEE2E2] text-[#DC2626]", icon: <AlertTriangle size={12} />, border: "border-l-[#DC2626]" },
    Medium: { bg: "bg-[#FEF9C3] text-[#CA8A04]", icon: <Star size={12} />, border: "border-l-[#CA8A04]" },
    Low: { bg: "bg-[#DCFCE7] text-[#16A34A]", icon: <Info size={12} />, border: "border-l-[#16A34A]" },
};

const categoryColors: Record<string, string> = {
    Academic: "bg-[#EFF6FF] text-[#155DFC]",
    System: "bg-[#F5F3FF] text-[#7C3AED]",
    Internal: "bg-[#ECFDF5] text-[#059669]",
    Events: "bg-[#FFF7ED] text-[#EA580C]",
    "HR Policy": "bg-[#FCE7F3] text-[#DB2777]",
    Safety: "bg-[#FEF2F2] text-[#DC2626]",
    Facilities: "bg-[#F0F9FF] text-[#0284C7]",
};

export function StaffAnnouncementContent() {
    const [filter, setFilter] = useState("All");
    const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);

    const unreadCount = announcements.filter((a) => !a.isRead).length;

    const filtered = announcements.filter((a) => {
        if (filter === "All") return true;
        if (filter === "Unread") return !a.isRead;
        return a.priority === filter;
    });

    return (
        <div className="space-y-[20px]">
            {/* Stats */}
            <div className="grid grid-cols-4 gap-[16px]">
                {[
                    { label: "Total Announcements", value: announcements.length.toString(), icon: <Megaphone size={20} className="text-[#155DFC]" />, bg: "bg-[#EFF6FF]", sub: "All time" },
                    { label: "Unread", value: unreadCount.toString(), icon: <Bell size={20} className="text-[#DC2626]" />, bg: "bg-[#FEF2F2]", sub: "Needs attention" },
                    { label: "High Priority", value: announcements.filter(a => a.priority === "High").length.toString(), icon: <AlertTriangle size={20} className="text-[#F59E0B]" />, bg: "bg-[#FFFBEB]", sub: "Action required" },
                    { label: "This Month", value: announcements.filter(a => a.date.includes("Mar")).length.toString(), icon: <Calendar size={20} className="text-[#8B5CF6]" />, bg: "bg-[#F5F3FF]", sub: "March 2025" },
                ].map((s) => (
                    <div key={s.label} className="bg-white rounded-[12px] border border-[#F0F0F0] p-[20px]">
                        <div className="flex items-center gap-[10px] mb-[10px]">
                            <div className={`${s.bg} rounded-[10px] p-[8px]`}>{s.icon}</div>
                        </div>
                        <p className="font-['Inter',sans-serif] text-[24px] font-bold text-[#111827]">{s.value}</p>
                        <div className="flex items-center justify-between mt-[2px]">
                            <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280]">{s.label}</p>
                            <p className="font-['Inter',sans-serif] text-[11px] text-[#9CA3AF]">{s.sub}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Announcement List */}
            <div className="bg-white rounded-[12px] border border-[#F0F0F0] overflow-hidden">
                {/* Toolbar */}
                <div className="flex items-center justify-between p-[16px] border-b border-[#F5F5F5]">
                    <div className="flex items-center gap-[10px]">
                        <h3 className="font-['Inter',sans-serif] text-[15px] font-semibold text-[#111827]">Announcements</h3>
                        <div className="flex items-center gap-[2px] bg-[#F3F4F6] rounded-[8px] p-[2px]">
                            {["All", "Unread", "High", "Medium", "Low"].map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setFilter(f)}
                                    className={`px-[10px] py-[5px] rounded-[6px] font-['Inter',sans-serif] text-[12px] transition-colors ${filter === f ? "bg-white text-[#111827] shadow-sm font-medium" : "text-[#6B7280] hover:text-[#374151]"}`}
                                >
                                    {f}
                                    {f === "Unread" && unreadCount > 0 && (
                                        <span className="ml-[4px] bg-[#DC2626] text-white text-[10px] px-[5px] py-[1px] rounded-full">{unreadCount}</span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* List */}
                <div className="divide-y divide-[#F5F5F5]">
                    {filtered.map((a) => {
                        const pc = priorityConfig[a.priority];
                        return (
                            <div
                                key={a.id}
                                className={`flex items-start gap-[16px] p-[16px] border-l-[3px] ${pc.border} hover:bg-[#FAFAFA] transition-colors cursor-pointer ${!a.isRead ? "bg-[#FAFBFF]" : ""}`}
                                onClick={() => setSelectedAnnouncement(a)}
                            >
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-[8px] mb-[4px]">
                                        {!a.isRead && <div className="size-[7px] bg-[#155DFC] rounded-full shrink-0" />}
                                        <h4 className={`font-['Inter',sans-serif] text-[14px] text-[#111827] truncate ${!a.isRead ? "font-semibold" : "font-medium"}`}>
                                            {a.title}
                                        </h4>
                                    </div>
                                    <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280] line-clamp-2 mb-[8px]">{a.body}</p>
                                    <div className="flex items-center gap-[8px] flex-wrap">
                                        <span className={`px-[8px] py-[2px] rounded-full text-[10px] font-medium ${categoryColors[a.category] ?? "bg-[#F3F4F6] text-[#6B7280]"}`}>
                                            {a.category}
                                        </span>
                                        <span className={`inline-flex items-center gap-[3px] px-[8px] py-[2px] rounded-full text-[10px] font-medium ${pc.bg}`}>
                                            {pc.icon}
                                            {a.priority}
                                        </span>
                                        <span className="font-['Inter',sans-serif] text-[11px] text-[#9CA3AF]">• {a.date}</span>
                                        <span className="font-['Inter',sans-serif] text-[11px] text-[#9CA3AF]">• {a.author}</span>
                                        <span className="font-['Inter',sans-serif] text-[10px] text-[#9CA3AF] bg-[#F3F4F6] px-[6px] py-[1px] rounded">{a.target}</span>
                                    </div>
                                </div>
                                <ChevronRight size={16} className="text-[#D1D5DB] mt-[4px] shrink-0" />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Detail Modal */}
            {selectedAnnouncement && (
                <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center" onClick={() => setSelectedAnnouncement(null)}>
                    <div className="bg-white rounded-[16px] w-[560px] shadow-xl" onClick={(e) => e.stopPropagation()}>
                        <div className="px-[24px] py-[18px] border-b border-[#F0F0F0]">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-[8px]">
                                    <span className={`px-[8px] py-[2px] rounded-full text-[11px] font-medium ${categoryColors[selectedAnnouncement.category] ?? ""}`}>
                                        {selectedAnnouncement.category}
                                    </span>
                                    <span className={`inline-flex items-center gap-[3px] px-[8px] py-[2px] rounded-full text-[11px] font-medium ${priorityConfig[selectedAnnouncement.priority].bg}`}>
                                        {priorityConfig[selectedAnnouncement.priority].icon}
                                        {selectedAnnouncement.priority}
                                    </span>
                                </div>
                                <button onClick={() => setSelectedAnnouncement(null)} className="text-[#9CA3AF] hover:text-[#374151] transition-colors text-[20px]">×</button>
                            </div>
                        </div>
                        <div className="p-[24px]">
                            <h3 className="font-['Inter',sans-serif] text-[20px] font-bold text-[#111827] mb-[8px]">{selectedAnnouncement.title}</h3>
                            <div className="flex items-center gap-[12px] mb-[16px]">
                                <span className="font-['Inter',sans-serif] text-[12px] text-[#9CA3AF]">{selectedAnnouncement.date}</span>
                                <span className="font-['Inter',sans-serif] text-[12px] text-[#9CA3AF]">by {selectedAnnouncement.author}</span>
                                <span className="font-['Inter',sans-serif] text-[10px] text-[#9CA3AF] bg-[#F3F4F6] px-[6px] py-[1px] rounded">{selectedAnnouncement.target}</span>
                            </div>
                            <p className="font-['Inter',sans-serif] text-[14px] text-[#374151] leading-[1.7]">{selectedAnnouncement.body}</p>
                        </div>
                        <div className="flex justify-end px-[24px] py-[16px] border-t border-[#F0F0F0]">
                            <button
                                onClick={() => setSelectedAnnouncement(null)}
                                className="px-[16px] py-[8px] bg-[#155DFC] text-white rounded-[8px] font-['Inter',sans-serif] text-[13px] font-medium hover:bg-[#1249D6] transition-colors"
                            >
                                Got it
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
