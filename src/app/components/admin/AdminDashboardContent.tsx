import { useState } from "react";
import {
    Users, Award, CreditCard, ClipboardList, TrendingUp,
    BookOpen, GraduationCap, Bell, ChevronRight, ArrowUpRight,
} from "lucide-react";

const stats = [
    { label: "Total Students", value: "56", change: "+12%", icon: <Users size={20} className="text-[#155DFC]" />, bg: "bg-[#EFF6FF]" },
    { label: "Total Teachers", value: "12", change: "+2%", icon: <GraduationCap size={20} className="text-[#16A34A]" />, bg: "bg-[#DCFCE7]" },
    { label: "Certificates Issued", value: "134", change: "+8%", icon: <Award size={20} className="text-[#F97316]" />, bg: "bg-[#FFF7ED]" },
    { label: "Revenue (MYR)", value: "339,000", change: "+5%", icon: <CreditCard size={20} className="text-[#7C3AED]" />, bg: "bg-[#EDE9FE]" },
];

const recentStudents = [
    { name: "Emma Thompson", course: "Business English Course", date: "10 Jan 2025", status: "Active" },
    { name: "James Wilson", course: "Business English Course", date: "14 Feb 2025", status: "Active" },
    { name: "Sophia Martinez", course: "Business English Course", date: "01 Mar 2025", status: "In Progress" },
    { name: "Liam Johnson", course: "Business English Course", date: "10 Mar 2025", status: "Completed" },
    { name: "Olivia Brown", course: "Business English Course", date: "01 Apr 2025", status: "In Progress" },
];

const announcements = [
    { title: "New CEFR Curriculum Update", date: "05 Mar 2025", priority: "High" },
    { title: "End of Term Assessment Schedule", date: "28 Feb 2025", priority: "Medium" },
    { title: "Student Portal Maintenance – 15 Mar", date: "12 Feb 2025", priority: "Low" },
];

export function AdminDashboardContent() {
    const [period] = useState("This Month");

    return (
        <div className="space-y-[20px]">
            {/* Header */}
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827]">Dashboard</h2>
                    <p className="font-['Inter',sans-serif] text-[14px] text-[#6B7280] mt-[4px]">
                        Welcome back! Here's what's happening at EduGlobe today.
                    </p>
                </div>
                <div className="flex items-center gap-[10px]">
                    <span className="font-['Inter',sans-serif] text-[13px] text-[#6B7280]">{period}</span>
                    <button className="relative flex items-center justify-center size-[38px] bg-white border border-[#E5E7EB] rounded-[8px] hover:bg-[#F9FAFB] transition-colors">
                        <Bell size={17} className="text-[#374151]" />
                        <span className="absolute top-[8px] right-[8px] size-[7px] bg-[#EF4444] rounded-full" />
                    </button>
                </div>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-4 gap-[14px]">
                {stats.map((s) => (
                    <div key={s.label} className="bg-white rounded-[12px] border border-[#F3F4F6] p-[20px]">
                        <div className="flex items-center justify-between mb-[14px]">
                            <div className={`${s.bg} rounded-[8px] p-[8px]`}>{s.icon}</div>
                            <span className="flex items-center gap-[3px] font-['Inter',sans-serif] text-[12px] text-[#22C55E] font-semibold">
                                <ArrowUpRight size={13} />
                                {s.change}
                            </span>
                        </div>
                        <p className="font-['Inter',sans-serif] font-bold text-[26px] text-[#111827]">{s.value}</p>
                        <p className="font-['Inter',sans-serif] text-[13px] text-[#6B7280] mt-[2px]">{s.label}</p>
                    </div>
                ))}
            </div>

            {/* Progress + Announcements */}
            <div className="grid grid-cols-2 gap-[16px]">
                {/* Program Progress */}
                <div className="bg-white rounded-[12px] border border-[#F3F4F6] p-[20px]">
                    <div className="flex items-center justify-between mb-[16px]">
                        <h3 className="font-['Inter',sans-serif] font-bold text-[15px] text-[#111827]">Program Completion Rate</h3>
                        <TrendingUp size={16} className="text-[#9CA3AF]" />
                    </div>
                    <div className="space-y-[14px]">
                        {[
                            { label: "Business English Course", pct: 72 },
                            { label: "IELTS Preparation", pct: 55 },
                            { label: "General English", pct: 88 },
                            { label: "CEFR B2 Intensive", pct: 40 },
                        ].map((p) => (
                            <div key={p.label}>
                                <div className="flex justify-between mb-[6px]">
                                    <span className="font-['Inter',sans-serif] text-[13px] text-[#374151]">{p.label}</span>
                                    <span className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827]">{p.pct}%</span>
                                </div>
                                <div className="h-[7px] bg-[#F3F4F6] rounded-full overflow-hidden">
                                    <div className="h-full bg-[#155DFC] rounded-full transition-all" style={{ width: `${p.pct}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Announcements */}
                <div className="bg-white rounded-[12px] border border-[#F3F4F6] p-[20px]">
                    <div className="flex items-center justify-between mb-[16px]">
                        <h3 className="font-['Inter',sans-serif] font-bold text-[15px] text-[#111827]">Latest Announcements</h3>
                        <button className="font-['Inter',sans-serif] text-[12px] text-[#155DFC] hover:underline">View all</button>
                    </div>
                    <div className="space-y-[12px]">
                        {announcements.map((a) => {
                            const pColor = a.priority === "High" ? "bg-[#FEE2E2] text-[#DC2626]" : a.priority === "Medium" ? "bg-[#FEF9C3] text-[#CA8A04]" : "bg-[#DCFCE7] text-[#16A34A]";
                            return (
                                <div key={a.title} className="flex items-start gap-[12px] p-[12px] rounded-[8px] bg-[#F9FAFB] hover:bg-[#F3F4F6] transition-colors cursor-pointer">
                                    <Bell size={15} className="text-[#9CA3AF] shrink-0 mt-[2px]" />
                                    <div className="flex-1">
                                        <p className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827]">{a.title}</p>
                                        <p className="font-['Inter',sans-serif] text-[12px] text-[#9CA3AF] mt-[2px]">{a.date}</p>
                                    </div>
                                    <span className={`text-[11px] font-semibold font-['Inter',sans-serif] px-[8px] py-[2px] rounded-full ${pColor}`}>{a.priority}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Recent Students Table */}
            <div className="bg-white rounded-[12px] border border-[#F3F4F6]">
                <div className="flex items-center justify-between px-[20px] py-[16px] border-b border-[#F3F4F6]">
                    <h3 className="font-['Inter',sans-serif] font-bold text-[15px] text-[#111827]">Recent Enrollments</h3>
                    <button className="flex items-center gap-[4px] font-['Inter',sans-serif] text-[12px] text-[#155DFC] hover:underline">
                        View all <ChevronRight size={13} />
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-[#F3F4F6]">
                                {["Student", "Course", "Enrolled Date", "Status"].map((col) => (
                                    <th key={col} className="px-[20px] py-[12px] text-left font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151]">{col}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {recentStudents.map((s) => {
                                const sc = s.status === "Active" ? "bg-[#DCFCE7] text-[#16A34A]" : s.status === "Completed" ? "bg-[#EFF6FF] text-[#155DFC]" : "bg-[#FEF9C3] text-[#CA8A04]";
                                return (
                                    <tr key={s.name} className="border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors">
                                        <td className="px-[20px] py-[14px] font-['Inter',sans-serif] font-medium text-[13px] text-[#111827]">{s.name}</td>
                                        <td className="px-[20px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{s.course}</td>
                                        <td className="px-[20px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{s.date}</td>
                                        <td className="px-[20px] py-[14px]">
                                            <span className={`px-[8px] py-[3px] rounded-full text-[11px] font-semibold font-['Inter',sans-serif] ${sc}`}>{s.status}</span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-4 gap-[12px]">
                {[
                    { label: "Add Student", icon: <Users size={18} />, color: "text-[#155DFC]", bg: "bg-[#EFF6FF]" },
                    { label: "Schedule Class", icon: <BookOpen size={18} />, color: "text-[#16A34A]", bg: "bg-[#DCFCE7]" },
                    { label: "Issue Certificate", icon: <Award size={18} />, color: "text-[#F97316]", bg: "bg-[#FFF7ED]" },
                    { label: "View Reports", icon: <ClipboardList size={18} />, color: "text-[#7C3AED]", bg: "bg-[#EDE9FE]" },
                ].map((q) => (
                    <button key={q.label} className="bg-white border border-[#F3F4F6] rounded-[12px] p-[16px] flex items-center gap-[12px] hover:border-[#E5E7EB] hover:bg-[#FAFAFA] transition-colors">
                        <div className={`${q.bg} rounded-[8px] p-[8px] ${q.color}`}>{q.icon}</div>
                        <span className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#374151]">{q.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
