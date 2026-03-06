import { useState } from "react";
import { Plus, Search, Download, Eye, ChevronLeft, ChevronRight, CheckCircle2, Clock, X } from "lucide-react";

const payments = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    invoiceNo: `INV-2025-${String(i + 1).padStart(3, "0")}`,
    studentName: ["Emma Thompson", "James Wilson", "Sophia Martinez", "Liam Johnson", "Olivia Brown", "Ava Garcia", "William Lee", "Isabella White"][i],
    program: "Business English Course",
    amount: [3000, 3000, 2500, 3000, 3000, 3000, 2500, 3000][i],
    paidAmount: [3000, 1500, 0, 3000, 3000, 1000, 2500, 3000][i],
    dueDate: `1${i}/02/2025`,
    paymentDate: [`05/01/2025`, ``, ``, `10/01/2025`, `08/01/2025`, ``, `12/01/2025`, `15/01/2025`][i],
    method: ["Transfer", "—", "—", "Card", "Transfer", "—", "Card", "Transfer"][i],
    status: (["Paid", "Partial", "Unpaid", "Paid", "Paid", "Partial", "Paid", "Paid"] as const)[i],
}));

const statusMap = { Paid: "bg-[#DCFCE7] text-[#16A34A]", Partial: "bg-[#FEF9C3] text-[#CA8A04]", Unpaid: "bg-[#FEE2E2] text-[#DC2626]" };

export function AdminPaymentContent() {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const filtered = payments.filter(p => p.studentName.toLowerCase().includes(search.toLowerCase()) || p.invoiceNo.toLowerCase().includes(search.toLowerCase()));
    const totalRevenue = payments.reduce((a, p) => a + p.paidAmount, 0);
    const outstanding = payments.reduce((a, p) => a + (p.amount - p.paidAmount), 0);

    return (
        <div className="space-y-[20px]">
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827]">Payment</h2>
                    <p className="font-['Inter',sans-serif] text-[14px] text-[#6B7280] mt-[4px]">Track tuition fees, invoices, and payment status</p>
                </div>
                <div className="flex items-center gap-[10px]">
                    <button className="flex items-center gap-[8px] border border-[#E5E7EB] rounded-[8px] bg-white hover:bg-[#F9FAFB] px-[14px] py-[10px] transition-colors">
                        <Download size={15} className="text-[#374151]" />
                        <span className="font-['Inter',sans-serif] font-normal text-[14px] text-[#374151]">Export</span>
                    </button>
                    <button className="flex items-center gap-[8px] bg-[#155DFC] hover:bg-[#1249CC] transition-colors text-white px-[16px] py-[10px] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[14px]">
                        <Plus size={16} />New Invoice
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-[14px]">
                {[
                    { label: "Total Revenue", value: `MYR ${totalRevenue.toLocaleString()}`, color: "text-[#16A34A]", bg: "bg-[#DCFCE7]" },
                    { label: "Outstanding", value: `MYR ${outstanding.toLocaleString()}`, color: "text-[#DC2626]", bg: "bg-[#FEE2E2]" },
                    { label: "Paid", value: payments.filter(p => p.status === "Paid").length, color: "text-[#155DFC]", bg: "bg-[#EFF6FF]" },
                    { label: "Pending", value: payments.filter(p => p.status !== "Paid").length, color: "text-[#CA8A04]", bg: "bg-[#FEF9C3]" },
                ].map((c) => (
                    <div key={c.label} className={`${c.bg} rounded-[12px] p-[16px]`}>
                        <p className={`font-['Inter',sans-serif] font-bold text-[20px] ${c.color}`}>{c.value}</p>
                        <p className={`font-['Inter',sans-serif] text-[13px] ${c.color}`}>{c.label}</p>
                    </div>
                ))}
            </div>
            <div className="bg-white rounded-[12px] border border-[#F3F4F6]">
                <div className="flex items-center justify-between px-[20px] py-[16px] border-b border-[#F3F4F6]">
                    <div className="bg-[#f6f6f6] flex items-center gap-[8px] px-[12px] py-[8px] rounded-full w-[240px]">
                        <Search size={14} className="text-[#a0a0a0] shrink-0" />
                        <input className="bg-transparent font-['Inter',sans-serif] text-[13px] outline-none flex-1 placeholder:text-[#a0a0a0]" placeholder="Search invoice..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-[#F3F4F6]">
                                {["Invoice No.", "Student", "Program", "Amount", "Paid", "Due Date", "Payment Date", "Method", "Status", "Actions"].map((col) => (
                                    <th key={col} className="px-[16px] py-[12px] text-left font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] whitespace-nowrap">{col}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((p) => (
                                <tr key={p.id} className="border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors">
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] font-semibold text-[12px] text-[#155DFC]">{p.invoiceNo}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827] whitespace-nowrap">{p.studentName}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151]">{p.program}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827]">MYR {p.amount.toLocaleString()}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#16A34A] font-semibold">MYR {p.paidAmount.toLocaleString()}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151] whitespace-nowrap">{p.dueDate}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151] whitespace-nowrap">{p.paymentDate || "—"}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151]">{p.method}</td>
                                    <td className="px-[16px] py-[14px]"><span className={`px-[8px] py-[3px] rounded-full text-[11px] font-semibold font-['Inter',sans-serif] ${statusMap[p.status]}`}>{p.status}</span></td>
                                    <td className="px-[16px] py-[14px]">
                                        <div className="flex items-center gap-[6px]">
                                            <button className="flex items-center gap-[4px] px-[10px] py-[6px] rounded-[6px] bg-[#F3F4F6] hover:bg-[#E5E7EB] transition-colors"><Eye size={13} className="text-[#374151]" /></button>
                                            <button className="flex items-center gap-[4px] px-[10px] py-[6px] rounded-[6px] bg-[#F3F4F6] hover:bg-[#E5E7EB] transition-colors"><Download size={13} className="text-[#374151]" /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex items-center justify-between px-[20px] py-[14px]">
                    <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} className="flex items-center gap-[6px] font-['Inter',sans-serif] text-[13px] text-[#374151]"><ChevronLeft size={16} />Previous</button>
                    <div className="flex items-center gap-[4px]">{[1, 2].map(p => <button key={p} onClick={() => setCurrentPage(p)} className={`size-[32px] flex items-center justify-center rounded-[6px] font-['Inter',sans-serif] text-[13px] ${currentPage === p ? "bg-[#155DFC] text-white" : "text-[#374151] hover:bg-[#F3F4F6]"}`}>{p}</button>)}</div>
                    <button onClick={() => setCurrentPage(p => Math.min(2, p + 1))} className="flex items-center gap-[6px] font-['Inter',sans-serif] text-[13px] text-[#374151]">Next<ChevronRight size={16} /></button>
                </div>
            </div>
        </div>
    );
}
