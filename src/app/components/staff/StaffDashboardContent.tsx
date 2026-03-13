import {
    Users, FileText, CalendarOff, TrendingUp,
    ArrowUpRight, Clock, CheckCircle2, AlertCircle,
} from "lucide-react";

const stats = [
    { label: "Registered Students", value: "142", change: "+8%", icon: <Users size={20} className="text-[#155DFC]" />, bg: "bg-[#EFF6FF]" },
    { label: "Pending Invoices", value: "23", change: "5 overdue", icon: <FileText size={20} className="text-[#F59E0B]" />, bg: "bg-[#FFFBEB]" },
    { label: "Leave Balance", value: "12 days", change: "3 used", icon: <CalendarOff size={20} className="text-[#8B5CF6]" />, bg: "bg-[#F5F3FF]" },
    { label: "Revenue (Month)", value: "RM 48,500", change: "+15%", icon: <TrendingUp size={20} className="text-[#10B981]" />, bg: "bg-[#ECFDF5]" },
];

const recentStudents = [
    { name: "Emma Thompson", program: "Business English Course", date: "10 Mar 2025", status: "Active" },
    { name: "Liam Johnson", program: "IELTS Preparation", date: "08 Mar 2025", status: "Active" },
    { name: "Sophie Chen", program: "General English", date: "05 Mar 2025", status: "Pending" },
    { name: "Ahmad Faiz", program: "Business English Course", date: "01 Mar 2025", status: "Active" },
];

const recentInvoices = [
    { id: "INV-2025-001", student: "Emma Thompson", amount: "RM 3,500", status: "Paid", date: "10 Mar 2025" },
    { id: "INV-2025-002", student: "Liam Johnson", amount: "RM 4,200", status: "Pending", date: "08 Mar 2025" },
    { id: "INV-2025-003", student: "Sophie Chen", amount: "RM 2,800", status: "Overdue", date: "28 Feb 2025" },
    { id: "INV-2025-004", student: "Ahmad Faiz", amount: "RM 3,500", status: "Paid", date: "25 Feb 2025" },
];

const statusColors: Record<string, string> = {
    Active: "bg-[#DCFCE7] text-[#16A34A]",
    Pending: "bg-[#FEF9C3] text-[#CA8A04]",
    Paid: "bg-[#DCFCE7] text-[#16A34A]",
    Overdue: "bg-[#FEE2E2] text-[#DC2626]",
};

export function StaffDashboardContent() {
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
                {/* Recent Students */}
                <div className="bg-white rounded-[12px] border border-[#F0F0F0] p-[20px]">
                    <div className="flex items-center justify-between mb-[16px]">
                        <h3 className="font-['Inter',sans-serif] text-[15px] font-semibold text-[#111827]">Recent Students</h3>
                        <button className="font-['Inter',sans-serif] text-[12px] text-[#155DFC] hover:underline">View All</button>
                    </div>
                    <div className="space-y-[12px]">
                        {recentStudents.map((s, i) => (
                            <div key={i} className="flex items-center justify-between py-[8px] border-b border-[#F5F5F5] last:border-0">
                                <div className="flex items-center gap-[12px]">
                                    <div className="bg-[#EFF6FF] rounded-full size-[36px] flex items-center justify-center">
                                        <span className="font-['Inter',sans-serif] text-[13px] font-semibold text-[#155DFC]">
                                            {s.name.split(" ").map(n => n[0]).join("")}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="font-['Inter',sans-serif] text-[13px] font-medium text-[#111827]">{s.name}</p>
                                        <p className="font-['Inter',sans-serif] text-[11px] text-[#9CA3AF]">{s.program}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-[8px]">
                                    <span className={`px-[8px] py-[2px] rounded-full text-[11px] font-medium ${statusColors[s.status]}`}>
                                        {s.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Invoices */}
                <div className="bg-white rounded-[12px] border border-[#F0F0F0] p-[20px]">
                    <div className="flex items-center justify-between mb-[16px]">
                        <h3 className="font-['Inter',sans-serif] text-[15px] font-semibold text-[#111827]">Recent Invoices</h3>
                        <button className="font-['Inter',sans-serif] text-[12px] text-[#155DFC] hover:underline">View All</button>
                    </div>
                    <div className="space-y-[12px]">
                        {recentInvoices.map((inv, i) => (
                            <div key={i} className="flex items-center justify-between py-[8px] border-b border-[#F5F5F5] last:border-0">
                                <div>
                                    <p className="font-['Inter',sans-serif] text-[13px] font-medium text-[#111827]">{inv.id}</p>
                                    <p className="font-['Inter',sans-serif] text-[11px] text-[#9CA3AF]">{inv.student} • {inv.date}</p>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <span className="font-['Inter',sans-serif] text-[13px] font-semibold text-[#111827]">{inv.amount}</span>
                                    <span className={`px-[8px] py-[2px] rounded-full text-[11px] font-medium ${statusColors[inv.status]}`}>
                                        {inv.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Leave Summary */}
            <div className="bg-white rounded-[12px] border border-[#F0F0F0] p-[20px]">
                <h3 className="font-['Inter',sans-serif] text-[15px] font-semibold text-[#111827] mb-[16px]">Leave Summary</h3>
                <div className="grid grid-cols-4 gap-[16px]">
                    {[
                        { type: "Annual Leave", total: 14, used: 2, icon: <CalendarOff size={16} className="text-[#155DFC]" />, color: "#155DFC" },
                        { type: "Sick Leave", total: 14, used: 1, icon: <AlertCircle size={16} className="text-[#EF4444]" />, color: "#EF4444" },
                        { type: "Emergency Leave", total: 3, used: 0, icon: <Clock size={16} className="text-[#F59E0B]" />, color: "#F59E0B" },
                        { type: "Unpaid Leave", total: 30, used: 0, icon: <CheckCircle2 size={16} className="text-[#6B7280]" />, color: "#6B7280" },
                    ].map((l) => (
                        <div key={l.type} className="border border-[#F0F0F0] rounded-[10px] p-[16px]">
                            <div className="flex items-center gap-[8px] mb-[12px]">
                                {l.icon}
                                <span className="font-['Inter',sans-serif] text-[12px] font-medium text-[#374151]">{l.type}</span>
                            </div>
                            <div className="flex items-end gap-[4px]">
                                <span className="font-['Inter',sans-serif] text-[22px] font-bold text-[#111827]">{l.total - l.used}</span>
                                <span className="font-['Inter',sans-serif] text-[12px] text-[#9CA3AF] mb-[3px]">/ {l.total} days</span>
                            </div>
                            <div className="mt-[8px] bg-[#F3F4F6] rounded-full h-[6px] overflow-hidden">
                                <div
                                    className="h-full rounded-full transition-all"
                                    style={{ width: `${(l.used / l.total) * 100}%`, backgroundColor: l.color }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
