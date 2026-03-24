import { TrendingUp, Users, Award, CreditCard, BarChart2, PieChart } from "lucide-react";

const monthlyData = [
    { month: "Oct", students: 8, revenue: 24000, certificates: 4 },
    { month: "Nov", students: 10, revenue: 30000, certificates: 4 },
    { month: "Dec", students: 9, revenue: 27000, certificates: 5 },
    { month: "Jan", students: 14, revenue: 42000, certificates: 8 },
    { month: "Feb", students: 12, revenue: 36000, certificates: 7 },
    { month: "Mar", students: 18, revenue: 54000, certificates: 11 },
];

const programDist = [
    { name: "Business English Course", count: 9, color: "#155DFC", pct: 50 },
    { name: "IELTS Preparation", count: 5, color: "#F97316", pct: 28 },
    { name: "General English", count: 3, color: "#22C55E", pct: 17 },
    { name: "CEFR B2 Intensive", count: 1, color: "#7C3AED", pct: 5 },
];

const nationalityData = [
    { country: "China", count: 7, flag: "🇨🇳" },
    { country: "Saudi Arabia", count: 4, flag: "🇸🇦" },
    { country: "South Korea", count: 3, flag: "🇰🇷" },
    { country: "Vietnam", count: 2, flag: "🇻🇳" },
    { country: "Indonesia", count: 1, flag: "🇮🇩" },
    { country: "Others", count: 1, flag: "🌍" },
];
const maxNat = Math.max(...nationalityData.map(n => n.count));

const maxStudents = Math.max(...monthlyData.map(m => m.students));

export function ConselorReportsContent() {
    return (
        <div className="space-y-[20px]">
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827]">Reports & Analytics (Conselor)</h2>
                    <p className="font-['Inter',sans-serif] text-[14px] text-[#6B7280] mt-[4px]">Overview of conselor performance, students, and conversions</p>
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
                    { label: "My Students", value: "18", change: "+16.3%", icon: <Users size={18} className="text-[#155DFC]" />, bg: "bg-[#EFF6FF]" },
                    { label: "Consultation Revenue", value: "MYR 54K", change: "+12.8%", icon: <CreditCard size={18} className="text-[#16A34A]" />, bg: "bg-[#DCFCE7]" },
                    { label: "Successful Enrollments", value: "11", change: "+14.2%", icon: <Award size={18} className="text-[#F97316]" />, bg: "bg-[#FFF7ED]" },
                    { label: "Conversion Rate", value: "61%", change: "+2.5%", icon: <TrendingUp size={18} className="text-[#7C3AED]" />, bg: "bg-[#EDE9FE]" },
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
                        <h3 className="font-['Inter',sans-serif] font-bold text-[14px] text-[#111827]">Monthly Students Guided</h3>
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
                <h3 className="font-['Inter',sans-serif] font-bold text-[14px] text-[#111827] mb-[16px]">Monthly Performance Summary</h3>
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-[#F3F4F6]">
                            {["Month", "New Students", "Consultation Revenue", "Enrollments", "Conversion Rate"].map((col) => (
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
                                <td className="py-[12px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{Math.round((m.certificates / m.students) * 100)}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
