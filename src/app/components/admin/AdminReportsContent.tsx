import { TrendingUp, Users, Award, CreditCard, BarChart2, PieChart } from "lucide-react";

const monthlyData = [
    { month: "Oct", students: 42, revenue: 126000, certificates: 18 },
    { month: "Nov", students: 46, revenue: 138000, certificates: 22 },
    { month: "Dec", students: 44, revenue: 132000, certificates: 20 },
    { month: "Jan", students: 50, revenue: 150000, certificates: 25 },
    { month: "Feb", students: 53, revenue: 159000, certificates: 28 },
    { month: "Mar", students: 56, revenue: 168000, certificates: 31 },
];

const programDist = [
    { name: "Business English Course", count: 32, color: "#155DFC", pct: 57 },
    { name: "IELTS Preparation", count: 12, color: "#F97316", pct: 21 },
    { name: "General English", count: 8, color: "#22C55E", pct: 14 },
    { name: "CEFR B2 Intensive", count: 4, color: "#7C3AED", pct: 8 },
];

const nationalityData = [
    { country: "Saudi Arabia", count: 14, flag: "🇸🇦" },
    { country: "China", count: 10, flag: "🇨🇳" },
    { country: "Japan", count: 8, flag: "🇯🇵" },
    { country: "UK", count: 7, flag: "🇬🇧" },
    { country: "Australia", count: 6, flag: "🇦🇺" },
    { country: "Others", count: 11, flag: "🌍" },
];
const maxNat = Math.max(...nationalityData.map(n => n.count));

const maxStudents = Math.max(...monthlyData.map(m => m.students));

export function AdminReportsContent() {
    return (
        <div className="space-y-[20px]">
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827]">Reports & Analytics</h2>
                    <p className="font-['Inter',sans-serif] text-[14px] text-[#6B7280] mt-[4px]">Overview of enrollment trends, revenue, and performance metrics</p>
                </div>
                <div className="flex items-center gap-[6px] bg-[#F3F4F6] p-[4px] rounded-[8px]">
                    {["6 Months", "1 Year", "All Time"].map((p, i) => (
                        <button key={p} className={`px-[12px] py-[6px] rounded-[6px] font-['Inter',sans-serif] text-[12px] transition-colors ${i === 0 ? "bg-white text-[#111827] font-semibold shadow-sm" : "text-[#6B7280]"}`}>{p}</button>
                    ))}
                </div>
            </div>

            {/* KPI cards */}
            <div className="grid grid-cols-4 gap-[14px]">
                {[
                    { label: "Total Students", value: "56", change: "+5.7%", icon: <Users size={18} className="text-[#155DFC]" />, bg: "bg-[#EFF6FF]" },
                    { label: "Total Revenue", value: "MYR 168K", change: "+5.7%", icon: <CreditCard size={18} className="text-[#16A34A]" />, bg: "bg-[#DCFCE7]" },
                    { label: "Certificates Issued", value: "31", change: "+10.7%", icon: <Award size={18} className="text-[#F97316]" />, bg: "bg-[#FFF7ED]" },
                    { label: "Pass Rate", value: "87%", change: "+2.1%", icon: <TrendingUp size={18} className="text-[#7C3AED]" />, bg: "bg-[#EDE9FE]" },
                ].map((k) => (
                    <div key={k.label} className="bg-white rounded-[12px] border border-[#F3F4F6] p-[18px]">
                        <div className="flex items-center justify-between mb-[12px]">
                            <div className={`${k.bg} rounded-[8px] p-[7px]`}>{k.icon}</div>
                            <span className="font-['Inter',sans-serif] text-[11px] text-[#22C55E] font-semibold">↑ {k.change}</span>
                        </div>
                        <p className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827]">{k.value}</p>
                        <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280] mt-[2px]">{k.label}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-2 gap-[16px]">
                {/* Monthly Student Enrollment Bar Chart */}
                <div className="bg-white rounded-[12px] border border-[#F3F4F6] p-[20px]">
                    <div className="flex items-center justify-between mb-[20px]">
                        <h3 className="font-['Inter',sans-serif] font-bold text-[14px] text-[#111827]">Monthly Enrollment</h3>
                        <BarChart2 size={16} className="text-[#9CA3AF]" />
                    </div>
                    <div className="flex items-end gap-[10px] h-[140px]">
                        {monthlyData.map((m) => (
                            <div key={m.month} className="flex-1 flex flex-col items-center gap-[6px]">
                                <span className="font-['Inter',sans-serif] text-[11px] font-semibold text-[#374151]">{m.students}</span>
                                <div className="w-full rounded-t-[4px] bg-[#155DFC] hover:bg-[#1249CC] transition-colors cursor-pointer" style={{ height: `${(m.students / maxStudents) * 110}px` }} />
                                <span className="font-['Inter',sans-serif] text-[11px] text-[#9CA3AF]">{m.month}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Program Distribution */}
                <div className="bg-white rounded-[12px] border border-[#F3F4F6] p-[20px]">
                    <div className="flex items-center justify-between mb-[20px]">
                        <h3 className="font-['Inter',sans-serif] font-bold text-[14px] text-[#111827]">Enrollment by Program</h3>
                        <PieChart size={16} className="text-[#9CA3AF]" />
                    </div>
                    <div className="space-y-[12px]">
                        {programDist.map((p) => (
                            <div key={p.name}>
                                <div className="flex justify-between mb-[5px]">
                                    <div className="flex items-center gap-[7px]">
                                        <div className="size-[8px] rounded-full" style={{ backgroundColor: p.color }} />
                                        <span className="font-['Inter',sans-serif] text-[12px] text-[#374151]">{p.name}</span>
                                    </div>
                                    <span className="font-['Inter',sans-serif] font-semibold text-[12px] text-[#111827]">{p.count} ({p.pct}%)</span>
                                </div>
                                <div className="h-[6px] bg-[#F3F4F6] rounded-full overflow-hidden">
                                    <div className="h-full rounded-full transition-all" style={{ width: `${p.pct}%`, backgroundColor: p.color }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Nationality Breakdown */}
            <div className="bg-white rounded-[12px] border border-[#F3F4F6] p-[20px]">
                <h3 className="font-['Inter',sans-serif] font-bold text-[14px] text-[#111827] mb-[16px]">Students by Nationality</h3>
                <div className="grid grid-cols-6 gap-[10px]">
                    {nationalityData.map((n) => (
                        <div key={n.country} className="flex flex-col items-center gap-[10px]">
                            <span className="text-[24px]">{n.flag}</span>
                            <div className="w-full flex flex-col items-center gap-[4px]">
                                <div className="w-[40px] flex flex-col items-center justify-end" style={{ height: "60px" }}>
                                    <div className="w-full rounded-t-[4px] bg-[#155DFC]" style={{ height: `${(n.count / maxNat) * 60}px` }} />
                                </div>
                                <span className="font-['Inter',sans-serif] font-bold text-[13px] text-[#111827]">{n.count}</span>
                                <span className="font-['Inter',sans-serif] text-[11px] text-[#9CA3AF] text-center">{n.country}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Revenue trend table */}
            <div className="bg-white rounded-[12px] border border-[#F3F4F6] p-[20px]">
                <h3 className="font-['Inter',sans-serif] font-bold text-[14px] text-[#111827] mb-[16px]">Monthly Revenue Summary</h3>
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-[#F3F4F6]">
                            {["Month", "New Students", "Revenue (MYR)", "Certificates", "Avg Revenue/Student"].map((col) => (
                                <th key={col} className="py-[10px] text-left font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151]">{col}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {monthlyData.map((m, i) => (
                            <tr key={m.month} className={`border-b border-[#F9FAFB] ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"}`}>
                                <td className="py-[12px] font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827]">{m.month} 2025</td>
                                <td className="py-[12px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{m.students}</td>
                                <td className="py-[12px] font-['Inter',sans-serif] font-semibold text-[13px] text-[#16A34A]">{m.revenue.toLocaleString()}</td>
                                <td className="py-[12px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{m.certificates}</td>
                                <td className="py-[12px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{Math.round(m.revenue / m.students).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
