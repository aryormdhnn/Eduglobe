import { useState } from "react";
import { Plus, Search, Download, Eye, ChevronLeft, ChevronRight, Calculator, X } from "lucide-react";

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

const statusMap = { Paid: "bg-[#DCFCE7] text-[#16A34A]", Partial: "bg-[#FEF9C3] text-[#CA8A04]", Unpaid: "bg-[#FEE2E2] text-[#DC2626]", Pending: "bg-[#FEF9C3] text-[#CA8A04]" };

const commissionRates = [
    {
        id: 1,
        program: "IELTS Preparation",
        duration: "1 Month",
        rate: 0.10, // 10%
    },
    {
        id: 2,
        program: "IELTS Preparation",
        duration: "3 Months",
        rate: 0.15, // 15%
    },
    {
        id: 3,
        program: "IELTS Preparation",
        duration: "6 Months",
        rate: 0.25, // 25%
    },
    {
        id: 4,
        program: "Business English Course",
        duration: "1 Month",
        rate: 0.10, // 10%
    },
    {
        id: 5,
        program: "Business English Course",
        duration: "3 Months",
        rate: 0.15, // 15%
    },
    {
        id: 6,
        program: "General English",
        duration: "1 Month",
        rate: 0.10, // 10%
    }
];

export function StaffPaymentContent() {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    
    // Generate Commission Modal State
    const [isCommissionModalOpen, setIsCommissionModalOpen] = useState(false);
    const [commissionForm, setCommissionForm] = useState({ agent: "", program: "", baseAmount: "" });
    
    const filtered = payments.filter(p => p.studentName.toLowerCase().includes(search.toLowerCase()) || p.invoiceNo.toLowerCase().includes(search.toLowerCase()));
    const totalRevenue = payments.reduce((a, p) => a + p.paidAmount, 0);
    const outstanding = payments.reduce((a, p) => a + (p.amount - p.paidAmount), 0);
    
    // Mock percentages based on user example
    const programCommissionRates: Record<string, number> = {
        "IELTS Preparation": 0.25, // 25%
        "Business English Course": 0.15, // 15%
        "General English": 0.10 // 10%
    };
    
    const selectedRate = programCommissionRates[commissionForm.program] || 0;
    const baseAmountNum = parseFloat(commissionForm.baseAmount) || 0;
    const calculatedCommission = baseAmountNum * selectedRate;

    return (
        <div className="space-y-[20px]">
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827]">Payment</h2>
                    <p className="font-['Inter',sans-serif] text-[14px] text-[#6B7280] mt-[4px]">Track tuition fees, invoices, and payment status</p>
                </div>
                <div className="flex items-center gap-[10px]">
                    <button 
                        onClick={() => setIsCommissionModalOpen(true)}
                        className="flex items-center gap-[8px] bg-white border border-[#10B981] text-[#10B981] hover:bg-[#ECFDF5] transition-colors px-[16px] py-[10px] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[14px]"
                    >
                        <Calculator size={16} />Generate Commission
                    </button>
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

            {/* Commissions Section */}
            <div className="mt-[32px]">
                <div className="flex items-start justify-between mb-[16px]">
                    <div>
                        <h2 className="font-['Inter',sans-serif] font-bold text-[18px] text-[#111827]">Commission Rates</h2>
                        <p className="font-['Inter',sans-serif] text-[13px] text-[#6B7280] mt-[2px]">Reference table for agent commission percentages</p>
                    </div>
                </div>
                <div className="bg-white rounded-[12px] border border-[#F3F4F6] w-2/3">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-[#F3F4F6] bg-[#F9FAFB]">
                                    {["Program", "Duration", "Commission Rate"].map((col) => (
                                        <th key={col} className="px-[20px] py-[12px] text-left font-['Inter',sans-serif] font-semibold text-[13px] text-[#374151] whitespace-nowrap">{col}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {commissionRates.map((c) => (
                                    <tr key={c.id} className="border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors">
                                        <td className="px-[20px] py-[14px] font-['Inter',sans-serif] font-semibold text-[14px] text-[#111827]">{c.program}</td>
                                        <td className="px-[20px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151] whitespace-nowrap">{c.duration}</td>
                                        <td className="px-[20px] py-[14px] font-['Inter',sans-serif] font-bold text-[14px] text-[#155DFC]">{(c.rate * 100)}%</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Generate Commission Modal */}
            {isCommissionModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-[16px] w-[500px] shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
                        {/* Modal Header */}
                        <div className="px-[24px] py-[20px] border-b border-[#F3F4F6] flex items-center justify-between bg-white">
                            <div>
                                <h2 className="text-[18px] font-bold text-[#111827] font-['Inter',sans-serif]">Generate Agent Commission</h2>
                                <p className="text-[13px] text-[#6B7280] font-['Inter',sans-serif] mt-[4px]">Calculate and log commission for agents</p>
                            </div>
                            <button 
                                onClick={() => setIsCommissionModalOpen(false)}
                                className="text-[#9CA3AF] hover:text-[#374151] transition-colors p-[8px] rounded-full hover:bg-[#F3F4F6]"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        
                        {/* Modal Body */}
                        <div className="p-[24px] space-y-[20px] bg-[#FAFAFA]">
                            <div>
                                <label className="block text-[13px] font-medium text-[#374151] font-['Inter',sans-serif] mb-[6px]">Select Agent</label>
                                <select 
                                    className="w-full px-[14px] py-[10px] bg-white border border-[#D1D5DB] rounded-[8px] text-[14px] font-['Inter',sans-serif] outline-none focus:border-[#155DFC] focus:ring-1 focus:ring-[#155DFC] transition-all"
                                    value={commissionForm.agent}
                                    onChange={(e) => setCommissionForm({...commissionForm, agent: e.target.value})}
                                >
                                    <option value="" disabled>Choose an agent...</option>
                                    <option value="AG-0092">Jhon Doe (AG-0092)</option>
                                    <option value="AG-0041">Agent Edu (AG-0041)</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-[16px]">
                                <div>
                                    <label className="block text-[13px] font-medium text-[#374151] font-['Inter',sans-serif] mb-[6px]">Program / Course</label>
                                    <select 
                                        className="w-full px-[14px] py-[10px] bg-white border border-[#D1D5DB] rounded-[8px] text-[14px] font-['Inter',sans-serif] outline-none focus:border-[#155DFC] focus:ring-1 focus:ring-[#155DFC] transition-all"
                                        value={commissionForm.program}
                                        onChange={(e) => setCommissionForm({...commissionForm, program: e.target.value})}
                                    >
                                        <option value="" disabled>Select program...</option>
                                        <option value="IELTS Preparation">IELTS Preparation (25%)</option>
                                        <option value="Business English Course">Business English Course (15%)</option>
                                        <option value="General English">General English (10%)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[13px] font-medium text-[#374151] font-['Inter',sans-serif] mb-[6px]">Base Amount Received (MYR)</label>
                                    <input 
                                        type="number" 
                                        placeholder="e.g. 5000"
                                        className="w-full px-[14px] py-[10px] bg-white border border-[#D1D5DB] rounded-[8px] text-[14px] font-['Inter',sans-serif] outline-none focus:border-[#155DFC] focus:ring-1 focus:ring-[#155DFC] transition-all"
                                        value={commissionForm.baseAmount}
                                        onChange={(e) => setCommissionForm({...commissionForm, baseAmount: e.target.value})}
                                    />
                                </div>
                            </div>

                            {/* Calculation Banner */}
                            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-[8px] p-[16px] mt-[8px]">
                                <div className="flex justify-between items-center mb-[8px]">
                                    <span className="text-[13px] text-[#3B82F6] font-medium font-['Inter',sans-serif]">Commission Rate applied:</span>
                                    <span className="text-[13px] font-bold text-[#1D4ED8] bg-[#DBEAFE] px-[8px] py-[2px] rounded-[4px] font-['Inter',sans-serif]">
                                        {selectedRate * 100}%
                                    </span>
                                </div>
                                <div className="flex justify-between items-center pt-[8px] border-t border-[#BFDBFE]">
                                    <span className="text-[14px] text-[#1D4ED8] font-bold font-['Inter',sans-serif]">Calculated Commission:</span>
                                    <span className="text-[20px] text-[#155DFC] font-bold font-['Inter',sans-serif]">
                                        MYR {calculatedCommission.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="px-[24px] py-[16px] border-t border-[#F3F4F6] bg-white flex justify-end gap-[12px]">
                            <button 
                                onClick={() => setIsCommissionModalOpen(false)}
                                className="px-[16px] py-[10px] text-[13px] font-semibold text-[#374151] bg-white border border-[#D1D5DB] rounded-[8px] hover:bg-[#F9FAFB] transition-colors font-['Inter',sans-serif]"
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={() => {
                                    alert(`Commission of MYR ${calculatedCommission} generated successfully for ${commissionForm.agent}!`);
                                    setIsCommissionModalOpen(false);
                                    setCommissionForm({ agent: "", program: "", baseAmount: "" });
                                }}
                                disabled={!commissionForm.agent || !commissionForm.program || calculatedCommission <= 0}
                                className="px-[16px] py-[10px] text-[13px] font-semibold text-white bg-[#155DFC] rounded-[8px] hover:bg-[#1249CC] transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-['Inter',sans-serif]"
                            >
                                Confirm & Generate
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
