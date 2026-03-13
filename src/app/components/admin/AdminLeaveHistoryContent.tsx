import { useState } from "react";
import {
    Search,
    Eye,
    CheckCircle2,
    Clock,
    XCircle,
    CalendarDays,
    AlertCircle,
    CalendarOff,
    ChevronLeft,
    ChevronRight,
    X,
} from "lucide-react";

interface AdminLeaveRecord {
    id: number;
    staffName: string;
    staffRole: string;
    staffAvatar: string;
    type: string;
    startDate: string;
    endDate: string;
    days: number;
    reason: string;
    status: "Approved" | "Pending" | "Rejected";
    appliedDate: string;
}

const leaveRecords: AdminLeaveRecord[] = [
    { id: 1, staffName: "Ahmad Fauzi", staffRole: "Academic Coordinator", staffAvatar: "AF", type: "Annual Leave", startDate: "2025-03-20", endDate: "2025-03-21", days: 2, reason: "Family vacation to Langkawi", status: "Approved", appliedDate: "2025-03-10" },
    { id: 2, staffName: "Siti Nurhaliza", staffRole: "Finance Officer", staffAvatar: "SN", type: "Sick Leave", startDate: "2025-03-05", endDate: "2025-03-05", days: 1, reason: "Fever and flu", status: "Approved", appliedDate: "2025-03-05" },
    { id: 3, staffName: "Razak Ibrahim", staffRole: "Student Affairs", staffAvatar: "RI", type: "Annual Leave", startDate: "2025-04-14", endDate: "2025-04-18", days: 5, reason: "Travel abroad for personal matters", status: "Pending", appliedDate: "2025-03-11" },
    { id: 4, staffName: "Nurul Aisyah", staffRole: "Admissions Officer", staffAvatar: "NA", type: "Emergency Leave", startDate: "2025-02-10", endDate: "2025-02-10", days: 1, reason: "Family emergency — hospitalization", status: "Approved", appliedDate: "2025-02-10" },
    { id: 5, staffName: "Kevin Lim", staffRole: "IT Support", staffAvatar: "KL", type: "Annual Leave", startDate: "2025-01-02", endDate: "2025-01-03", days: 2, reason: "New Year break extension", status: "Approved", appliedDate: "2024-12-20" },
    { id: 6, staffName: "Farah Diba", staffRole: "Marketing Executive", staffAvatar: "FD", type: "Sick Leave", startDate: "2025-05-01", endDate: "2025-05-02", days: 2, reason: "Medical appointment and recovery", status: "Rejected", appliedDate: "2025-03-08" },
    { id: 7, staffName: "Ahmad Fauzi", staffRole: "Academic Coordinator", staffAvatar: "AF", type: "Unpaid Leave", startDate: "2025-06-01", endDate: "2025-06-05", days: 5, reason: "Extended personal travel", status: "Pending", appliedDate: "2025-03-10" },
    { id: 8, staffName: "Siti Nurhaliza", staffRole: "Finance Officer", staffAvatar: "SN", type: "Emergency Leave", startDate: "2025-03-25", endDate: "2025-03-25", days: 1, reason: "Urgent family matter", status: "Pending", appliedDate: "2025-03-12" },
];

const statusConfig: Record<string, { bg: string; icon: React.ReactNode }> = {
    Approved: { bg: "bg-[#DCFCE7] text-[#16A34A]", icon: <CheckCircle2 size={12} /> },
    Pending: { bg: "bg-[#FEF9C3] text-[#CA8A04]", icon: <Clock size={12} /> },
    Rejected: { bg: "bg-[#FEE2E2] text-[#DC2626]", icon: <XCircle size={12} /> },
};

const avatarColors: Record<string, string> = {
    AF: "bg-[#DBEAFE] text-[#2563EB]",
    SN: "bg-[#FCE7F3] text-[#DB2777]",
    RI: "bg-[#D1FAE5] text-[#059669]",
    NA: "bg-[#FEF3C7] text-[#D97706]",
    KL: "bg-[#E0E7FF] text-[#4F46E5]",
    FD: "bg-[#FECDD3] text-[#E11D48]",
};

export function AdminLeaveHistoryContent() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<string>("All");
    const [selectedRecord, setSelectedRecord] = useState<AdminLeaveRecord | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    const filtered = leaveRecords
        .filter((r) => filter === "All" || r.status === filter)
        .filter((r) => r.staffName.toLowerCase().includes(search.toLowerCase()));

    const totalApproved = leaveRecords.filter((r) => r.status === "Approved").length;
    const totalPending = leaveRecords.filter((r) => r.status === "Pending").length;
    const totalRejected = leaveRecords.filter((r) => r.status === "Rejected").length;

    const summaryCards = [
        { label: "Total Requests", value: leaveRecords.length, icon: <CalendarDays size={18} className="text-[#155DFC]" />, bg: "bg-[#EFF6FF]", color: "text-[#155DFC]" },
        { label: "Approved", value: totalApproved, icon: <CheckCircle2 size={18} className="text-[#16A34A]" />, bg: "bg-[#F0FDF4]", color: "text-[#16A34A]" },
        { label: "Pending", value: totalPending, icon: <Clock size={18} className="text-[#CA8A04]" />, bg: "bg-[#FEFCE8]", color: "text-[#CA8A04]" },
        { label: "Rejected", value: totalRejected, icon: <AlertCircle size={18} className="text-[#DC2626]" />, bg: "bg-[#FEF2F2]", color: "text-[#DC2626]" },
    ];

    return (
        <div className="space-y-[20px]">
            {/* Header */}
            <div>
                <h2 className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827]">Leave History</h2>
                <p className="font-['Inter',sans-serif] text-[14px] text-[#6B7280] mt-[4px]">Monitor and manage leave requests from all staff members</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-4 gap-[14px]">
                {summaryCards.map((c) => (
                    <div key={c.label} className={`${c.bg} rounded-[12px] p-[20px]`}>
                        <div className="flex items-center gap-[10px] mb-[10px]">
                            <div className={`bg-white/60 rounded-[10px] p-[8px]`}>{c.icon}</div>
                            <span className={`font-['Inter',sans-serif] text-[13px] font-medium ${c.color}`}>{c.label}</span>
                        </div>
                        <p className={`font-['Inter',sans-serif] font-bold text-[28px] ${c.color}`}>{c.value}</p>
                    </div>
                ))}
            </div>

            {/* Leave History Table */}
            <div className="bg-white rounded-[12px] border border-[#F3F4F6]">
                {/* Toolbar */}
                <div className="flex items-center justify-between px-[20px] py-[16px] border-b border-[#F3F4F6]">
                    <div className="flex items-center gap-[12px]">
                        {/* Search */}
                        <div className="bg-[#f6f6f6] flex items-center gap-[8px] px-[12px] py-[8px] rounded-full w-[260px]">
                            <Search size={14} className="text-[#a0a0a0] shrink-0" />
                            <input
                                className="bg-transparent font-['Inter',sans-serif] text-[13px] outline-none flex-1 placeholder:text-[#a0a0a0]"
                                placeholder="Search staff name..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
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
                    <p className="font-['Inter',sans-serif] text-[12px] text-[#9CA3AF]">
                        {filtered.length} record{filtered.length !== 1 ? "s" : ""} found
                    </p>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-[#F3F4F6]">
                                {["No.", "Staff Name", "Leave Type", "Duration", "Days", "Reason", "Applied Date", "Status", "Actions"].map((col) => (
                                    <th key={col} className="px-[16px] py-[12px] text-left font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] whitespace-nowrap">{col}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((r, idx) => {
                                const sc = statusConfig[r.status];
                                const ac = avatarColors[r.staffAvatar] || "bg-[#F3F4F6] text-[#374151]";
                                return (
                                    <tr key={r.id} className="border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors">
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{idx + 1}.</td>
                                        <td className="px-[16px] py-[14px]">
                                            <div className="flex items-center gap-[10px]">
                                                <div className={`w-[32px] h-[32px] rounded-full ${ac} flex items-center justify-center font-['Inter',sans-serif] text-[11px] font-bold shrink-0`}>
                                                    {r.staffAvatar}
                                                </div>
                                                <div>
                                                    <p className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827] whitespace-nowrap">{r.staffName}</p>
                                                    <p className="font-['Inter',sans-serif] text-[11px] text-[#9CA3AF]">{r.staffRole}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-[16px] py-[14px]">
                                            <span className="font-['Inter',sans-serif] text-[13px] font-medium text-[#111827]">{r.type}</span>
                                        </td>
                                        <td className="px-[16px] py-[14px]">
                                            <span className="font-['Inter',sans-serif] text-[13px] text-[#374151] whitespace-nowrap">
                                                {r.startDate === r.endDate ? r.startDate : `${r.startDate} → ${r.endDate}`}
                                            </span>
                                        </td>
                                        <td className="px-[16px] py-[14px]">
                                            <span className="font-['Inter',sans-serif] text-[13px] font-semibold text-[#111827]">{r.days}</span>
                                        </td>
                                        <td className="px-[16px] py-[14px]">
                                            <span className="font-['Inter',sans-serif] text-[12px] text-[#6B7280] max-w-[160px] truncate block" title={r.reason}>{r.reason}</span>
                                        </td>
                                        <td className="px-[16px] py-[14px]">
                                            <span className="font-['Inter',sans-serif] text-[13px] text-[#374151] whitespace-nowrap">{r.appliedDate}</span>
                                        </td>
                                        <td className="px-[16px] py-[14px]">
                                            <span className={`inline-flex items-center gap-[4px] px-[8px] py-[3px] rounded-full text-[11px] font-medium ${sc.bg}`}>
                                                {sc.icon}
                                                {r.status}
                                            </span>
                                        </td>
                                        <td className="px-[16px] py-[14px]">
                                            <button
                                                onClick={() => setSelectedRecord(r)}
                                                className="flex items-center gap-[4px] px-[10px] py-[6px] rounded-[6px] bg-[#F3F4F6] hover:bg-[#E5E7EB] transition-colors"
                                            >
                                                <Eye size={13} className="text-[#374151]" />
                                                <span className="font-['Inter',sans-serif] text-[12px] text-[#374151]">View</span>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                            {filtered.length === 0 && (
                                <tr>
                                    <td colSpan={9} className="px-[16px] py-[40px] text-center">
                                        <CalendarOff size={32} className="text-[#D1D5DB] mx-auto mb-[8px]" />
                                        <p className="font-['Inter',sans-serif] text-[14px] text-[#9CA3AF]">No leave records found</p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between px-[20px] py-[14px]">
                    <button onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} className="flex items-center gap-[6px] font-['Inter',sans-serif] text-[13px] text-[#374151]">
                        <ChevronLeft size={16} />Previous
                    </button>
                    <div className="flex items-center gap-[4px]">
                        {[1].map((p) => (
                            <button key={p} onClick={() => setCurrentPage(p)} className={`size-[32px] flex items-center justify-center rounded-[6px] font-['Inter',sans-serif] text-[13px] ${currentPage === p ? "bg-[#155DFC] text-white" : "text-[#374151] hover:bg-[#F3F4F6]"}`}>
                                {p}
                            </button>
                        ))}
                    </div>
                    <button onClick={() => setCurrentPage((p) => Math.min(1, p + 1))} className="flex items-center gap-[6px] font-['Inter',sans-serif] text-[13px] text-[#374151]">
                        Next<ChevronRight size={16} />
                    </button>
                </div>
            </div>

            {/* Detail Modal */}
            {selectedRecord && (
                <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center" onClick={() => setSelectedRecord(null)}>
                    <div className="bg-white rounded-[16px] w-[520px] shadow-xl" onClick={(e) => e.stopPropagation()}>
                        {/* Modal Header */}
                        <div className="flex items-center justify-between px-[24px] py-[18px] border-b border-[#F0F0F0]">
                            <h3 className="font-['Inter',sans-serif] text-[18px] font-bold text-[#111827]">Leave Request Detail</h3>
                            <button onClick={() => setSelectedRecord(null)} className="text-[#9CA3AF] hover:text-[#374151] transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-[24px] space-y-[20px]">
                            {/* Staff Info */}
                            <div className="flex items-center gap-[14px] p-[16px] bg-[#F9FAFB] rounded-[12px]">
                                <div className={`w-[44px] h-[44px] rounded-full ${avatarColors[selectedRecord.staffAvatar] || "bg-[#F3F4F6] text-[#374151]"} flex items-center justify-center font-['Inter',sans-serif] text-[14px] font-bold`}>
                                    {selectedRecord.staffAvatar}
                                </div>
                                <div>
                                    <p className="font-['Inter',sans-serif] font-semibold text-[15px] text-[#111827]">{selectedRecord.staffName}</p>
                                    <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280]">{selectedRecord.staffRole}</p>
                                </div>
                                <div className="ml-auto">
                                    {(() => {
                                        const sc = statusConfig[selectedRecord.status];
                                        return (
                                            <span className={`inline-flex items-center gap-[4px] px-[10px] py-[4px] rounded-full text-[12px] font-medium ${sc.bg}`}>
                                                {sc.icon}
                                                {selectedRecord.status}
                                            </span>
                                        );
                                    })()}
                                </div>
                            </div>

                            {/* Details Grid */}
                            <div className="grid grid-cols-2 gap-[16px]">
                                {[
                                    { label: "Leave Type", value: selectedRecord.type },
                                    { label: "Total Days", value: `${selectedRecord.days} day${selectedRecord.days > 1 ? "s" : ""}` },
                                    { label: "Start Date", value: selectedRecord.startDate },
                                    { label: "End Date", value: selectedRecord.endDate },
                                    { label: "Applied Date", value: selectedRecord.appliedDate },
                                ].map((item) => (
                                    <div key={item.label}>
                                        <p className="font-['Inter',sans-serif] text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider mb-[4px]">{item.label}</p>
                                        <p className="font-['Inter',sans-serif] text-[14px] font-medium text-[#111827]">{item.value}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Reason */}
                            <div>
                                <p className="font-['Inter',sans-serif] text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider mb-[4px]">Reason</p>
                                <p className="font-['Inter',sans-serif] text-[14px] text-[#374151] bg-[#F9FAFB] rounded-[8px] p-[12px]">{selectedRecord.reason}</p>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="flex items-center justify-end gap-[10px] px-[24px] py-[16px] border-t border-[#F0F0F0]">
                            {selectedRecord.status === "Pending" ? (
                                <>
                                    <button
                                        onClick={() => setSelectedRecord(null)}
                                        className="flex items-center gap-[6px] px-[16px] py-[8px] border border-[#FCA5A5] text-[#DC2626] rounded-[8px] font-['Inter',sans-serif] text-[13px] font-medium hover:bg-[#FEF2F2] transition-colors"
                                    >
                                        <XCircle size={14} />
                                        Reject
                                    </button>
                                    <button
                                        onClick={() => setSelectedRecord(null)}
                                        className="flex items-center gap-[6px] px-[16px] py-[8px] bg-[#16A34A] text-white rounded-[8px] font-['Inter',sans-serif] text-[13px] font-medium hover:bg-[#15803D] transition-colors"
                                    >
                                        <CheckCircle2 size={14} />
                                        Approve
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => setSelectedRecord(null)}
                                    className="px-[16px] py-[8px] border border-[#E5E7EB] rounded-[8px] font-['Inter',sans-serif] text-[13px] text-[#374151] hover:bg-[#F9FAFB] transition-colors"
                                >
                                    Close
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
