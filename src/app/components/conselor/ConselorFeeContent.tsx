import { useState } from "react";
import {
    Search,
    Download,
    Eye,
    ChevronLeft,
    ChevronRight,
    CheckCircle2,
    Clock,
    TrendingUp,
    Users,
    Target
} from "lucide-react";

interface MarketingFeeRecord {
    id: string;
    student: string;
    program: string;
    commissionRate: string;
    amount: string;
    date: string;
    status: "Paid" | "Pending" | "Processing";
}

const feeRecords: MarketingFeeRecord[] = [
    { id: "MFEE-2025-081", student: "Emma Thompson", program: "Business English Course", commissionRate: "15%", amount: "RM 525", date: "2025-03-10", status: "Paid" },
    { id: "MFEE-2025-082", student: "Liam Johnson", program: "IELTS Preparation", commissionRate: "10%", amount: "RM 420", date: "2025-03-08", status: "Pending" },
    { id: "MFEE-2025-083", student: "Sophie Chen", program: "General English", commissionRate: "10%", amount: "RM 280", date: "2025-02-28", status: "Processing" },
    { id: "MFEE-2025-084", student: "Ahmad Faiz", program: "Business English Course", commissionRate: "15%", amount: "RM 525", date: "2025-02-25", status: "Paid" },
    { id: "MFEE-2025-085", student: "Maria Garcia", program: "Cambridge FCE", commissionRate: "10%", amount: "RM 500", date: "2025-03-05", status: "Pending" },
    { id: "MFEE-2025-086", student: "Kenji Tanaka", program: "General English", commissionRate: "10%", amount: "RM 280", date: "2025-03-01", status: "Paid" },
];

const statusConfig: Record<string, { bg: string; icon: React.ReactNode }> = {
    Paid: { bg: "bg-[#DCFCE7] text-[#16A34A]", icon: <CheckCircle2 size={12} /> },
    Processing: { bg: "bg-[#EFF6FF] text-[#155DFC]", icon: <Clock size={12} /> },
    Pending: { bg: "bg-[#FEF9C3] text-[#CA8A04]", icon: <Clock size={12} /> },
};

export function ConselorFeeContent() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<string>("All");

    const filtered = feeRecords.filter((fee) => {
        const matchSearch =
            fee.id.toLowerCase().includes(search.toLowerCase()) ||
            fee.student.toLowerCase().includes(search.toLowerCase());
        const matchFilter = filter === "All" || fee.status === filter;
        return matchSearch && matchFilter;
    });

    const totalEarned = "RM 12,500";
    const pendingCommission = "RM 1,420";
    const conversionRate = "18.5%";
    const totalReferrals = "142";

    return (
        <div className="space-y-[20px]">
             {/* Header Section */}
             <div className="flex flex-col gap-[4px] mb-[24px]">
                <h2 className="text-[20px] font-bold text-[#111827] font-['Inter',sans-serif]">Marketing Fees & Commissions</h2>
                <p className="text-[14px] text-[#6B7280] font-['Inter',sans-serif]">Track your referral commissions and marketing performance</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-[16px]">
                {[
                    { label: "Total Earned (YTD)", value: totalEarned, sub: "+12% this month", color: "text-[#111827]", icon: <TrendingUp className="text-[#155DFC]" size={20} />, bg: "bg-[#EFF6FF]" },
                    { label: "Pending Commission", value: pendingCommission, sub: "From 3 recent enrollments", color: "text-[#111827]", icon: <Clock className="text-[#CA8A04]" size={20} />, bg: "bg-[#FEF9C3]" },
                    { label: "Conversion Rate", value: conversionRate, sub: "Leads to enrollments", color: "text-[#111827]", icon: <Target className="text-[#9333EA]" size={20} />, bg: "bg-[#F3E8FF]" },
                    { label: "Total Referrals", value: totalReferrals, sub: "All time students", color: "text-[#111827]", icon: <Users className="text-[#10B981]" size={20} />, bg: "bg-[#ECFDF5]" },
                ].map((s) => (
                    <div key={s.label} className="bg-white rounded-[12px] border border-[#F0F0F0] p-[20px] flex gap-[16px] items-center">
                        <div className={`p-[12px] rounded-[10px] ${s.bg}`}>
                            {s.icon}
                        </div>
                        <div>
                            <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280] mb-[2px]">{s.label}</p>
                            <p className={`font-['Inter',sans-serif] text-[20px] font-bold ${s.color}`}>{s.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Table Card */}
            <div className="bg-white rounded-[12px] border border-[#F0F0F0] overflow-hidden">
                {/* Toolbar */}
                <div className="flex items-center justify-between p-[16px] border-b border-[#F5F5F5]">
                    <div className="flex items-center gap-[10px]">
                        <div className="flex items-center gap-[8px] bg-[#F9FAFB] border border-[#E5E7EB] rounded-[8px] px-[12px] py-[8px] w-[280px]">
                            <Search size={16} className="text-[#9CA3AF]" />
                            <input
                                type="text"
                                placeholder="Search student or ID..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="bg-transparent outline-none font-['Inter',sans-serif] text-[13px] text-[#111827] w-full placeholder:text-[#9CA3AF]"
                            />
                        </div>
                        {/* Filter Tabs */}
                        <div className="flex items-center gap-[2px] bg-[#F3F4F6] rounded-[8px] p-[2px]">
                            {["All", "Paid", "Processing", "Pending"].map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setFilter(f)}
                                    className={`px-[10px] py-[5px] rounded-[6px] font-['Inter',sans-serif] text-[12px] transition-colors ${filter === f ? "bg-white text-[#111827] shadow-sm font-medium" : "text-[#6B7280] hover:text-[#374151]"}`}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-[8px]">
                        <button className="flex items-center gap-[6px] px-[12px] py-[8px] border border-[#E5E7EB] rounded-[8px] text-[#374151] hover:bg-[#F9FAFB] transition-colors">
                            <Download size={14} />
                            <span className="font-['Inter',sans-serif] text-[13px]">Export</span>
                        </button>
                    </div>
                </div>

                {/* Table */}
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-[#F5F5F5]">
                            {["Record ID", "Referred Student", "Program Enrolled", "Commission Rate", "Earnings", "Date", "Status", "Action"].map((h) => (
                                <th key={h} className="text-left px-[16px] py-[12px] font-['Inter',sans-serif] text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider">
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((fee) => {
                            const sc = statusConfig[fee.status];
                            return (
                                <tr key={fee.id} className="border-b border-[#F5F5F5] hover:bg-[#FAFAFA] transition-colors">
                                    <td className="px-[16px] py-[12px] font-['Inter',sans-serif] text-[13px] text-[#9333EA] font-medium">{fee.id}</td>
                                    <td className="px-[16px] py-[12px] font-['Inter',sans-serif] text-[13px] text-[#111827] font-medium">{fee.student}</td>
                                    <td className="px-[16px] py-[12px] font-['Inter',sans-serif] text-[12px] text-[#6B7280]">{fee.program}</td>
                                    <td className="px-[16px] py-[12px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{fee.commissionRate}</td>
                                    <td className="px-[16px] py-[12px] font-['Inter',sans-serif] text-[13px] text-[#111827] font-semibold">{fee.amount}</td>
                                    <td className="px-[16px] py-[12px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{fee.date}</td>
                                    <td className="px-[16px] py-[12px]">
                                        <span className={`inline-flex items-center gap-[4px] px-[8px] py-[3px] rounded-full text-[11px] font-medium ${sc.bg}`}>
                                            {sc.icon}
                                            {fee.status}
                                        </span>
                                    </td>
                                    <td className="px-[16px] py-[12px]">
                                        <button className="p-[6px] rounded-[6px] text-[#6B7280] hover:bg-[#F3E8FF] hover:text-[#9333EA] transition-colors" title="View Details">
                                            <Eye size={15} />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="flex items-center justify-between px-[16px] py-[12px]">
                    <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280]">
                        Showing {filtered.length} of {feeRecords.length} records
                    </p>
                    <div className="flex items-center gap-[4px]">
                        <button className="p-[6px] rounded-[6px] text-[#9CA3AF] hover:bg-[#F3F4F6] transition-colors"><ChevronLeft size={16} /></button>
                        <button className="px-[10px] py-[4px] rounded-[6px] bg-[#9333EA] text-white font-['Inter',sans-serif] text-[12px] font-medium">1</button>
                        <button className="p-[6px] rounded-[6px] text-[#9CA3AF] hover:bg-[#F3F4F6] transition-colors"><ChevronRight size={16} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
