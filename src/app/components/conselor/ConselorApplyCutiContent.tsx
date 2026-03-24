import { useState } from "react";
import {
    Plus,
    CalendarDays,
    CheckCircle2,
    Clock,
    X,
    XCircle,
    CalendarOff,
    AlertCircle,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

interface LeaveRecord {
    id: number;
    type: string;
    startDate: string;
    endDate: string;
    days: number;
    reason: string;
    status: "Approved" | "Pending" | "Rejected";
    appliedDate: string;
}

const leaveRecords: LeaveRecord[] = [
    { id: 1, type: "Annual Leave", startDate: "2025-03-20", endDate: "2025-03-21", days: 2, reason: "Family vacation", status: "Approved", appliedDate: "2025-03-10" },
    { id: 2, type: "Sick Leave", startDate: "2025-03-05", endDate: "2025-03-05", days: 1, reason: "Fever and flu", status: "Approved", appliedDate: "2025-03-05" },
    { id: 3, type: "Annual Leave", startDate: "2025-04-14", endDate: "2025-04-18", days: 5, reason: "Travel abroad", status: "Pending", appliedDate: "2025-03-11" },
    { id: 4, type: "Emergency Leave", startDate: "2025-02-10", endDate: "2025-02-10", days: 1, reason: "Family emergency", status: "Approved", appliedDate: "2025-02-10" },
    { id: 5, type: "Annual Leave", startDate: "2025-01-02", endDate: "2025-01-03", days: 2, reason: "New Year break", status: "Approved", appliedDate: "2024-12-20" },
    { id: 6, type: "Sick Leave", startDate: "2025-05-01", endDate: "2025-05-02", days: 2, reason: "Medical appointment", status: "Rejected", appliedDate: "2025-03-08" },
];

const leaveBalance = [
    { type: "Annual Leave", total: 14, used: 4, icon: <CalendarDays size={18} className="text-[#9333EA]" />, color: "#9333EA", bg: "bg-[#F3E8FF]" },
    { type: "Sick Leave", total: 14, used: 1, icon: <AlertCircle size={18} className="text-[#EF4444]" />, color: "#EF4444", bg: "bg-[#FEF2F2]" },
    { type: "Emergency Leave", total: 3, used: 1, icon: <Clock size={18} className="text-[#F59E0B]" />, color: "#F59E0B", bg: "bg-[#FFFBEB]" },
    { type: "Unpaid Leave", total: 30, used: 0, icon: <CalendarOff size={18} className="text-[#6B7280]" />, color: "#6B7280", bg: "bg-[#F9FAFB]" },
];

const statusConfig: Record<string, { bg: string; icon: React.ReactNode }> = {
    Approved: { bg: "bg-[#DCFCE7] text-[#16A34A]", icon: <CheckCircle2 size={12} /> },
    Pending: { bg: "bg-[#FEF9C3] text-[#CA8A04]", icon: <Clock size={12} /> },
    Rejected: { bg: "bg-[#FEE2E2] text-[#DC2626]", icon: <XCircle size={12} /> },
};

export function ConselorApplyCutiContent() {
    const [showApply, setShowApply] = useState(false);
    const [filter, setFilter] = useState<string>("All");

    const filtered = leaveRecords.filter((r) => filter === "All" || r.status === filter);

    return (
        <div className="space-y-[20px]">
            {/* Header Section */}
            <div className="flex flex-col gap-[4px] mb-[24px]">
                <h2 className="text-[20px] font-bold text-[#111827] font-['Inter',sans-serif]">Leave / Cuti</h2>
                <p className="text-[14px] text-[#6B7280] font-['Inter',sans-serif]">Manage your leave applications and history</p>
            </div>

            {/* Leave Balance Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-[16px]">
                {leaveBalance.map((l) => (
                    <div key={l.type} className="bg-white rounded-[12px] border border-[#F0F0F0] p-[20px]">
                        <div className="flex items-center gap-[10px] mb-[12px]">
                            <div className={`${l.bg} rounded-[10px] p-[8px]`}>{l.icon}</div>
                            <span className="font-['Inter',sans-serif] text-[13px] font-medium text-[#374151]">{l.type}</span>
                        </div>
                        <div className="flex items-end gap-[6px] mb-[8px]">
                            <span className="font-['Inter',sans-serif] text-[28px] font-bold text-[#111827]">{l.total - l.used}</span>
                            <span className="font-['Inter',sans-serif] text-[13px] text-[#9CA3AF] mb-[4px]">/ {l.total} days</span>
                        </div>
                        <div className="bg-[#F3F4F6] rounded-full h-[6px] overflow-hidden">
                            <div
                                className="h-full rounded-full transition-all duration-500"
                                style={{ width: `${(l.used / l.total) * 100}%`, backgroundColor: l.color }}
                            />
                        </div>
                        <p className="font-['Inter',sans-serif] text-[11px] text-[#9CA3AF] mt-[6px]">{l.used} days used</p>
                    </div>
                ))}
            </div>

            {/* Leave History */}
            <div className="bg-white rounded-[12px] border border-[#F0F0F0] overflow-hidden">
                {/* Toolbar */}
                <div className="flex items-center justify-between p-[16px] border-b border-[#F5F5F5]">
                    <div className="flex items-center gap-[10px]">
                        <h3 className="font-['Inter',sans-serif] text-[15px] font-semibold text-[#111827]">Leave History</h3>
                        {/* Filter Tabs */}
                        <div className="flex items-center gap-[2px] bg-[#F3F4F6] rounded-[8px] p-[2px]">
                            {["All", "Approved", "Pending", "Rejected"].map((f) => (
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
                    <button
                        onClick={() => setShowApply(true)}
                        className="flex items-center gap-[6px] px-[14px] py-[8px] bg-[#9333EA] text-white rounded-[8px] hover:bg-[#7e22ce] transition-colors"
                    >
                        <Plus size={14} />
                        <span className="font-['Inter',sans-serif] text-[13px] font-medium">Apply Leave</span>
                    </button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[800px]">
                        <thead>
                            <tr className="border-b border-[#F5F5F5]">
                                {["Leave Type", "Duration", "Days", "Reason", "Applied Date", "Status"].map((h) => (
                                    <th key={h} className="text-left px-[16px] py-[12px] font-['Inter',sans-serif] text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider">
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((r) => {
                                const sc = statusConfig[r.status];
                                return (
                                    <tr key={r.id} className="border-b border-[#F5F5F5] hover:bg-[#FAFAFA] transition-colors">
                                        <td className="px-[16px] py-[12px]">
                                            <span className="font-['Inter',sans-serif] text-[13px] font-medium text-[#111827]">{r.type}</span>
                                        </td>
                                        <td className="px-[16px] py-[12px]">
                                            <span className="font-['Inter',sans-serif] text-[13px] text-[#374151]">
                                                {r.startDate === r.endDate ? r.startDate : `${r.startDate} → ${r.endDate}`}
                                            </span>
                                        </td>
                                        <td className="px-[16px] py-[12px]">
                                            <span className="font-['Inter',sans-serif] text-[13px] font-semibold text-[#111827]">{r.days}</span>
                                        </td>
                                        <td className="px-[16px] py-[12px]">
                                            <span className="font-['Inter',sans-serif] text-[12px] text-[#6B7280]">{r.reason}</span>
                                        </td>
                                        <td className="px-[16px] py-[12px]">
                                            <span className="font-['Inter',sans-serif] text-[13px] text-[#374151]">{r.appliedDate}</span>
                                        </td>
                                        <td className="px-[16px] py-[12px]">
                                            <span className={`inline-flex items-center gap-[4px] px-[8px] py-[3px] rounded-full text-[11px] font-medium ${sc.bg}`}>
                                                {sc.icon}
                                                {r.status}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between px-[16px] py-[12px]">
                    <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280]">
                        Showing {filtered.length} of {leaveRecords.length} records
                    </p>
                    <div className="flex items-center gap-[4px]">
                        <button className="p-[6px] rounded-[6px] text-[#9CA3AF] hover:bg-[#F3F4F6] transition-colors"><ChevronLeft size={16} /></button>
                        <button className="px-[10px] py-[4px] rounded-[6px] bg-[#9333EA] text-white font-['Inter',sans-serif] text-[12px] font-medium">1</button>
                        <button className="p-[6px] rounded-[6px] text-[#9CA3AF] hover:bg-[#F3F4F6] transition-colors"><ChevronRight size={16} /></button>
                    </div>
                </div>
            </div>

            {/* Apply Leave Modal */}
            {showApply && (
                <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-[16px]" onClick={() => setShowApply(false)}>
                    <div className="bg-white rounded-[16px] w-full max-w-[480px] shadow-xl" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between px-[24px] py-[18px] border-b border-[#F0F0F0]">
                            <h3 className="font-['Inter',sans-serif] text-[18px] font-bold text-[#111827]">Apply Leave</h3>
                            <button onClick={() => setShowApply(false)} className="text-[#9CA3AF] hover:text-[#374151] transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-[24px] space-y-[16px]">
                            {/* Leave Type */}
                            <div>
                                <label className="font-['Inter',sans-serif] text-[12px] font-medium text-[#374151] block mb-[6px]">Leave Type</label>
                                <select className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[10px] font-['Inter',sans-serif] text-[13px] text-[#111827] outline-none focus:border-[#9333EA] focus:ring-1 focus:ring-[#9333EA] transition-colors bg-white">
                                    <option value="">Select leave type...</option>
                                    <option>Annual Leave</option>
                                    <option>Sick Leave</option>
                                    <option>Emergency Leave</option>
                                    <option>Unpaid Leave</option>
                                </select>
                            </div>
                            {/* Date Range */}
                            <div className="grid grid-cols-2 gap-[12px]">
                                <div>
                                    <label className="font-['Inter',sans-serif] text-[12px] font-medium text-[#374151] block mb-[6px]">Start Date</label>
                                    <input
                                        type="date"
                                        className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[10px] font-['Inter',sans-serif] text-[13px] text-[#111827] outline-none focus:border-[#9333EA] focus:ring-1 focus:ring-[#9333EA] transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="font-['Inter',sans-serif] text-[12px] font-medium text-[#374151] block mb-[6px]">End Date</label>
                                    <input
                                        type="date"
                                        className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[10px] font-['Inter',sans-serif] text-[13px] text-[#111827] outline-none focus:border-[#9333EA] focus:ring-1 focus:ring-[#9333EA] transition-colors"
                                    />
                                </div>
                            </div>
                            {/* Reason */}
                            <div>
                                <label className="font-['Inter',sans-serif] text-[12px] font-medium text-[#374151] block mb-[6px]">Reason</label>
                                <textarea
                                    rows={3}
                                    placeholder="Describe your reason for leave..."
                                    className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[10px] font-['Inter',sans-serif] text-[13px] text-[#111827] outline-none focus:border-[#9333EA] focus:ring-1 focus:ring-[#9333EA] transition-colors resize-none"
                                />
                            </div>
                            {/* Attachment */}
                            <div>
                                <label className="font-['Inter',sans-serif] text-[12px] font-medium text-[#374151] block mb-[6px]">Attachment (Optional)</label>
                                <div className="border-2 border-dashed border-[#E5E7EB] rounded-[8px] p-[16px] text-center hover:border-[#9333EA] transition-colors cursor-pointer">
                                    <p className="font-['Inter',sans-serif] text-[12px] text-[#9CA3AF]">
                                        Drop file here or <span className="text-[#9333EA]">browse</span>
                                    </p>
                                    <p className="font-['Inter',sans-serif] text-[10px] text-[#D1D5DB] mt-[4px]">PDF, JPG, PNG up to 5MB</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-end gap-[10px] px-[24px] py-[16px] border-t border-[#F0F0F0]">
                            <button
                                onClick={() => setShowApply(false)}
                                className="px-[16px] py-[8px] border border-[#E5E7EB] rounded-[8px] font-['Inter',sans-serif] text-[13px] text-[#374151] hover:bg-[#F9FAFB] transition-colors"
                            >
                                Cancel
                            </button>
                            <button className="px-[16px] py-[8px] bg-[#9333EA] text-white rounded-[8px] font-['Inter',sans-serif] text-[13px] font-medium hover:bg-[#7e22ce] transition-colors">
                                Submit Request
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
