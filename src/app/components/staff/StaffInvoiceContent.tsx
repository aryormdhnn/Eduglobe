import { useState } from "react";
import {
    Plus,
    Search,
    Download,
    Eye,
    ChevronLeft,
    ChevronRight,
    CheckCircle2,
    Clock,
    AlertTriangle,
    X,
    Send,
} from "lucide-react";

interface Invoice {
    id: string;
    student: string;
    program: string;
    amount: string;
    issueDate: string;
    dueDate: string;
    status: "Paid" | "Pending" | "Overdue" | "Draft";
}

const invoices: Invoice[] = [
    { id: "INV-2025-001", student: "Emma Thompson", program: "Business English Course", amount: "RM 3,500", issueDate: "2025-03-01", dueDate: "2025-03-15", status: "Paid" },
    { id: "INV-2025-002", student: "Liam Johnson", program: "IELTS Preparation", amount: "RM 4,200", issueDate: "2025-03-05", dueDate: "2025-03-19", status: "Pending" },
    { id: "INV-2025-003", student: "Sophie Chen", program: "General English", amount: "RM 2,800", issueDate: "2025-02-20", dueDate: "2025-03-06", status: "Overdue" },
    { id: "INV-2025-004", student: "Ahmad Faiz", program: "Business English Course", amount: "RM 3,500", issueDate: "2025-02-15", dueDate: "2025-03-01", status: "Paid" },
    { id: "INV-2025-005", student: "Maria Garcia", program: "Cambridge FCE", amount: "RM 5,000", issueDate: "2025-03-08", dueDate: "2025-03-22", status: "Draft" },
    { id: "INV-2025-006", student: "Kenji Tanaka", program: "General English", amount: "RM 2,800", issueDate: "2025-03-02", dueDate: "2025-03-16", status: "Pending" },
    { id: "INV-2025-007", student: "Fatimah Zahra", program: "IELTS Preparation", amount: "RM 4,200", issueDate: "2025-02-25", dueDate: "2025-03-11", status: "Paid" },
    { id: "INV-2025-008", student: "David Kim", program: "Business English Course", amount: "RM 3,500", issueDate: "2025-03-10", dueDate: "2025-03-24", status: "Pending" },
];

const statusConfig: Record<string, { bg: string; icon: React.ReactNode }> = {
    Paid: { bg: "bg-[#DCFCE7] text-[#16A34A]", icon: <CheckCircle2 size={12} /> },
    Pending: { bg: "bg-[#FEF9C3] text-[#CA8A04]", icon: <Clock size={12} /> },
    Overdue: { bg: "bg-[#FEE2E2] text-[#DC2626]", icon: <AlertTriangle size={12} /> },
    Draft: { bg: "bg-[#F3F4F6] text-[#6B7280]", icon: <Clock size={12} /> },
};

export function StaffInvoiceContent() {
    const [search, setSearch] = useState("");
    const [showCreate, setShowCreate] = useState(false);
    const [filter, setFilter] = useState<string>("All");

    const filtered = invoices.filter((inv) => {
        const matchSearch =
            inv.id.toLowerCase().includes(search.toLowerCase()) ||
            inv.student.toLowerCase().includes(search.toLowerCase());
        const matchFilter = filter === "All" || inv.status === filter;
        return matchSearch && matchFilter;
    });

    const totalAmount = "RM 29,500";
    const paidAmount = "RM 11,200";
    const pendingAmount = "RM 10,500";
    const overdueAmount = "RM 2,800";

    return (
        <div className="space-y-[20px]">
            {/* Stats */}
            <div className="grid grid-cols-4 gap-[16px]">
                {[
                    { label: "Total Invoices", value: invoices.length.toString(), sub: totalAmount, color: "text-[#155DFC]", bg: "bg-[#EFF6FF]" },
                    { label: "Paid", value: invoices.filter(i => i.status === "Paid").length.toString(), sub: paidAmount, color: "text-[#16A34A]", bg: "bg-[#F0FDF4]" },
                    { label: "Pending", value: invoices.filter(i => i.status === "Pending").length.toString(), sub: pendingAmount, color: "text-[#CA8A04]", bg: "bg-[#FFFBEB]" },
                    { label: "Overdue", value: invoices.filter(i => i.status === "Overdue").length.toString(), sub: overdueAmount, color: "text-[#DC2626]", bg: "bg-[#FEF2F2]" },
                ].map((s) => (
                    <div key={s.label} className="bg-white rounded-[12px] border border-[#F0F0F0] p-[20px]">
                        <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280] mb-[4px]">{s.label}</p>
                        <p className={`font-['Inter',sans-serif] text-[24px] font-bold ${s.color}`}>{s.value}</p>
                        <p className="font-['Inter',sans-serif] text-[11px] text-[#9CA3AF] mt-[2px]">{s.sub}</p>
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
                                placeholder="Search invoices..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="bg-transparent outline-none font-['Inter',sans-serif] text-[13px] text-[#111827] w-full placeholder:text-[#9CA3AF]"
                            />
                        </div>
                        {/* Filter Tabs */}
                        <div className="flex items-center gap-[2px] bg-[#F3F4F6] rounded-[8px] p-[2px]">
                            {["All", "Paid", "Pending", "Overdue", "Draft"].map((f) => (
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
                        <button
                            onClick={() => setShowCreate(true)}
                            className="flex items-center gap-[6px] px-[14px] py-[8px] bg-[#155DFC] text-white rounded-[8px] hover:bg-[#1249D6] transition-colors"
                        >
                            <Plus size={14} />
                            <span className="font-['Inter',sans-serif] text-[13px] font-medium">Create Invoice</span>
                        </button>
                    </div>
                </div>

                {/* Table */}
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-[#F5F5F5]">
                            {["Invoice No", "Student", "Program", "Amount", "Issue Date", "Due Date", "Status", "Action"].map((h) => (
                                <th key={h} className="text-left px-[16px] py-[12px] font-['Inter',sans-serif] text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider">
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((inv) => {
                            const sc = statusConfig[inv.status];
                            return (
                                <tr key={inv.id} className="border-b border-[#F5F5F5] hover:bg-[#FAFAFA] transition-colors">
                                    <td className="px-[16px] py-[12px] font-['Inter',sans-serif] text-[13px] text-[#155DFC] font-medium">{inv.id}</td>
                                    <td className="px-[16px] py-[12px] font-['Inter',sans-serif] text-[13px] text-[#111827] font-medium">{inv.student}</td>
                                    <td className="px-[16px] py-[12px] font-['Inter',sans-serif] text-[12px] text-[#6B7280]">{inv.program}</td>
                                    <td className="px-[16px] py-[12px] font-['Inter',sans-serif] text-[13px] text-[#111827] font-semibold">{inv.amount}</td>
                                    <td className="px-[16px] py-[12px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{inv.issueDate}</td>
                                    <td className="px-[16px] py-[12px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{inv.dueDate}</td>
                                    <td className="px-[16px] py-[12px]">
                                        <span className={`inline-flex items-center gap-[4px] px-[8px] py-[3px] rounded-full text-[11px] font-medium ${sc.bg}`}>
                                            {sc.icon}
                                            {inv.status}
                                        </span>
                                    </td>
                                    <td className="px-[16px] py-[12px]">
                                        <div className="flex items-center gap-[6px]">
                                            <button className="p-[6px] rounded-[6px] text-[#6B7280] hover:bg-[#EFF6FF] hover:text-[#155DFC] transition-colors" title="View">
                                                <Eye size={15} />
                                            </button>
                                            {inv.status === "Draft" && (
                                                <button className="p-[6px] rounded-[6px] text-[#6B7280] hover:bg-[#EFF6FF] hover:text-[#155DFC] transition-colors" title="Send">
                                                    <Send size={15} />
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="flex items-center justify-between px-[16px] py-[12px]">
                    <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280]">
                        Showing {filtered.length} of {invoices.length} invoices
                    </p>
                    <div className="flex items-center gap-[4px]">
                        <button className="p-[6px] rounded-[6px] text-[#9CA3AF] hover:bg-[#F3F4F6] transition-colors"><ChevronLeft size={16} /></button>
                        <button className="px-[10px] py-[4px] rounded-[6px] bg-[#155DFC] text-white font-['Inter',sans-serif] text-[12px] font-medium">1</button>
                        <button className="p-[6px] rounded-[6px] text-[#9CA3AF] hover:bg-[#F3F4F6] transition-colors"><ChevronRight size={16} /></button>
                    </div>
                </div>
            </div>

            {/* Create Invoice Modal */}
            {showCreate && (
                <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center" onClick={() => setShowCreate(false)}>
                    <div className="bg-white rounded-[16px] w-[520px] shadow-xl" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between px-[24px] py-[18px] border-b border-[#F0F0F0]">
                            <h3 className="font-['Inter',sans-serif] text-[18px] font-bold text-[#111827]">Create New Invoice</h3>
                            <button onClick={() => setShowCreate(false)} className="text-[#9CA3AF] hover:text-[#374151] transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-[24px] space-y-[16px]">
                            {/* Student Select */}
                            <div>
                                <label className="font-['Inter',sans-serif] text-[12px] font-medium text-[#374151] block mb-[6px]">Student</label>
                                <select className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[10px] font-['Inter',sans-serif] text-[13px] text-[#111827] outline-none focus:border-[#155DFC] focus:ring-1 focus:ring-[#155DFC] transition-colors bg-white">
                                    <option value="">Select student...</option>
                                    <option>Emma Thompson</option>
                                    <option>Liam Johnson</option>
                                    <option>Sophie Chen</option>
                                    <option>Ahmad Faiz</option>
                                </select>
                            </div>
                            {/* Program */}
                            <div>
                                <label className="font-['Inter',sans-serif] text-[12px] font-medium text-[#374151] block mb-[6px]">Program</label>
                                <select className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[10px] font-['Inter',sans-serif] text-[13px] text-[#111827] outline-none focus:border-[#155DFC] focus:ring-1 focus:ring-[#155DFC] transition-colors bg-white">
                                    <option value="">Select program...</option>
                                    <option>Business English Course</option>
                                    <option>IELTS Preparation</option>
                                    <option>General English</option>
                                    <option>Cambridge FCE</option>
                                </select>
                            </div>
                            {/* Amount */}
                            <div>
                                <label className="font-['Inter',sans-serif] text-[12px] font-medium text-[#374151] block mb-[6px]">Amount (RM)</label>
                                <input
                                    type="number"
                                    placeholder="0.00"
                                    className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[10px] font-['Inter',sans-serif] text-[13px] text-[#111827] outline-none focus:border-[#155DFC] focus:ring-1 focus:ring-[#155DFC] transition-colors"
                                />
                            </div>
                            {/* Date Row */}
                            <div className="grid grid-cols-2 gap-[12px]">
                                <div>
                                    <label className="font-['Inter',sans-serif] text-[12px] font-medium text-[#374151] block mb-[6px]">Issue Date</label>
                                    <input
                                        type="date"
                                        className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[10px] font-['Inter',sans-serif] text-[13px] text-[#111827] outline-none focus:border-[#155DFC] focus:ring-1 focus:ring-[#155DFC] transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="font-['Inter',sans-serif] text-[12px] font-medium text-[#374151] block mb-[6px]">Due Date</label>
                                    <input
                                        type="date"
                                        className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[10px] font-['Inter',sans-serif] text-[13px] text-[#111827] outline-none focus:border-[#155DFC] focus:ring-1 focus:ring-[#155DFC] transition-colors"
                                    />
                                </div>
                            </div>
                            {/* Notes */}
                            <div>
                                <label className="font-['Inter',sans-serif] text-[12px] font-medium text-[#374151] block mb-[6px]">Notes (Optional)</label>
                                <textarea
                                    rows={3}
                                    placeholder="Additional notes..."
                                    className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[10px] font-['Inter',sans-serif] text-[13px] text-[#111827] outline-none focus:border-[#155DFC] focus:ring-1 focus:ring-[#155DFC] transition-colors resize-none"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-end gap-[10px] px-[24px] py-[16px] border-t border-[#F0F0F0]">
                            <button
                                onClick={() => setShowCreate(false)}
                                className="px-[16px] py-[8px] border border-[#E5E7EB] rounded-[8px] font-['Inter',sans-serif] text-[13px] text-[#374151] hover:bg-[#F9FAFB] transition-colors"
                            >
                                Cancel
                            </button>
                            <button className="px-[16px] py-[8px] bg-[#F3F4F6] border border-[#E5E7EB] rounded-[8px] font-['Inter',sans-serif] text-[13px] text-[#374151] hover:bg-[#E5E7EB] transition-colors">
                                Save as Draft
                            </button>
                            <button className="px-[16px] py-[8px] bg-[#155DFC] text-white rounded-[8px] font-['Inter',sans-serif] text-[13px] font-medium hover:bg-[#1249D6] transition-colors">
                                Create & Send
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
