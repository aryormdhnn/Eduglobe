import {
    Users, FileText, Calendar, MessageSquare,
    ArrowUpRight, Clock, CheckCircle2, AlertCircle,
} from "lucide-react";

const stats = [
    { label: "Assigned Students", value: "84", change: "+12%", icon: <Users size={20} className="text-[#9333EA]" />, bg: "bg-[#F3E8FF]" },
    { label: "Pending Applications", value: "15", change: "3 urgent", icon: <FileText size={20} className="text-[#F59E0B]" />, bg: "bg-[#FFFBEB]" },
    { label: "Appointments Today", value: "6", change: "2 next hour", icon: <Calendar size={20} className="text-[#155DFC]" />, bg: "bg-[#EFF6FF]" },
    { label: "Unread Messages", value: "11", change: "-2 from yesterday", icon: <MessageSquare size={20} className="text-[#10B981]" />, bg: "bg-[#ECFDF5]" },
];

const scheduledAppointments = [
    { student: "Emma Thompson", type: "Visa Consultation", time: "10:00 AM", status: "Upcoming" },
    { student: "Liam Johnson", type: "Study Plan Review", time: "11:30 AM", status: "Upcoming" },
    { student: "Sophie Chen", type: "General Counseling", time: "02:00 PM", status: "Pending" },
    { student: "Ahmad Faiz", type: "Application Help", time: "04:00 PM", status: "Upcoming" },
];

const pendingApplications = [
    { id: "APP-2025-042", student: "Emma Thompson", program: "Business English", status: "Reviewing", date: "10 Mar 2025" },
    { id: "APP-2025-043", student: "Liam Johnson", program: "IELTS Preparation", status: "Pending Docs", date: "09 Mar 2025" },
    { id: "APP-2025-044", student: "Sophie Chen", program: "General English", status: "Submitted", date: "08 Mar 2025" },
    { id: "APP-2025-045", student: "Ahmad Faiz", program: "Business English", status: "Approved", date: "05 Mar 2025" },
];

const statusColors: Record<string, string> = {
    Upcoming: "bg-[#DCFCE7] text-[#16A34A]",
    Pending: "bg-[#FEF9C3] text-[#CA8A04]",
    Reviewing: "bg-[#EFF6FF] text-[#155DFC]",
    "Pending Docs": "bg-[#FEE2E2] text-[#DC2626]",
    Submitted: "bg-[#FEF9C3] text-[#CA8A04]",
    Approved: "bg-[#DCFCE7] text-[#16A34A]",
};

export function ConselorDashboardContent() {
    return (
        <div className="space-y-[24px]">
            {/* Stats Cards */}
            <div className="grid grid-cols-4 gap-[16px]">
                {stats.map((s) => (
                    <div key={s.label} className="bg-white rounded-[12px] border border-[#F0F0F0] p-[20px] flex flex-col gap-[12px] hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div className={`${s.bg} rounded-[10px] p-[10px]`}>{s.icon}</div>
                            <ArrowUpRight size={16} className="text-[#9CA3AF]" />
                        </div>
                        <div>
                            <p className="font-['Inter',sans-serif] text-[24px] font-bold text-[#111827]">{s.value}</p>
                            <div className="flex items-center justify-between mt-[4px]">
                                <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280]">{s.label}</p>
                                <p className="font-['Inter',sans-serif] text-[11px] text-[#22C55E] font-medium">{s.change}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-2 gap-[16px]">
                {/* Scheduled Appointments */}
                <div className="bg-white rounded-[12px] border border-[#F0F0F0] p-[20px]">
                    <div className="flex items-center justify-between mb-[16px]">
                        <h3 className="font-['Inter',sans-serif] text-[15px] font-semibold text-[#111827]">Today's Appointments</h3>
                        <button className="font-['Inter',sans-serif] text-[12px] text-[#9333EA] hover:underline">View All</button>
                    </div>
                    <div className="space-y-[12px]">
                        {scheduledAppointments.map((app, i) => (
                            <div key={i} className="flex items-center justify-between py-[8px] border-b border-[#F5F5F5] last:border-0">
                                <div className="flex items-center gap-[12px]">
                                    <div className="bg-[#F3E8FF] rounded-full size-[36px] flex items-center justify-center">
                                        <span className="font-['Inter',sans-serif] text-[13px] font-semibold text-[#9333EA]">
                                            {app.student.split(" ").map(n => n[0]).join("")}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="font-['Inter',sans-serif] text-[13px] font-medium text-[#111827]">{app.student}</p>
                                        <p className="font-['Inter',sans-serif] text-[11px] text-[#9CA3AF]">{app.type}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-[12px]">
                                    <span className="font-['Inter',sans-serif] text-[12px] font-medium text-[#374151]">{app.time}</span>
                                    <span className={`px-[8px] py-[2px] rounded-full text-[11px] font-medium ${statusColors[app.status]}`}>
                                        {app.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pending Applications */}
                <div className="bg-white rounded-[12px] border border-[#F0F0F0] p-[20px]">
                    <div className="flex items-center justify-between mb-[16px]">
                        <h3 className="font-['Inter',sans-serif] text-[15px] font-semibold text-[#111827]">Recent Applications</h3>
                        <button className="font-['Inter',sans-serif] text-[12px] text-[#9333EA] hover:underline">View All</button>
                    </div>
                    <div className="space-y-[12px]">
                        {pendingApplications.map((app, i) => (
                            <div key={i} className="flex items-center justify-between py-[8px] border-b border-[#F5F5F5] last:border-0">
                                <div>
                                    <p className="font-['Inter',sans-serif] text-[13px] font-medium text-[#111827]">{app.id}</p>
                                    <p className="font-['Inter',sans-serif] text-[11px] text-[#9CA3AF]">{app.student} • {app.program}</p>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <span className={`px-[8px] py-[2px] rounded-full text-[11px] font-medium ${statusColors[app.status]}`}>
                                        {app.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
