import { ArrowLeft, Download, FileText, CheckCircle2, Clock } from "lucide-react";

interface AgentTransactionDetailContentProps {
  onBack: () => void;
  // In a real app we'd pass the transaction ID to fetch data, 
  // but we'll mock it for this demonstration.
  transactionId?: string; 
}

// Mock detailed data for the receipt
const mockTransactions: Record<string, any> = {
    // --- Income Paid ---
    "TXN-INC-001": {
        id: "TXN-INC-001", type: "Income", status: "Paid",
        date: "Jan 10, 2024", paidDate: "Jan 12, 2024", totalAmount: 12200,
        paymentMethod: "Bank Transfer (Ending in 4321)", referenceNo: "REF-INC-998273645",
        billedTo: { name: "EduGlobe Communications", address: "123 Education Hub, Level 4\nKuala Lumpur, 50000\nMalaysia" },
        payableTo: { name: "Jhon Doe (Agent ID: AG-0092)", bank: "Maybank", account: "**** **** 4321" },
        items: [
            { name: "Sarah Connor", course: "Intensive English Programme", amount: 850 },
            { name: "John Smith", course: "Intensive English Programme", amount: 850 },
            { name: "Aisha Patel", course: "Business English", amount: 800 },
            { name: "Wei Chen", course: "Advanced English Course", amount: 950 },
            { name: "Maria Garcia", course: "IELTS Preparation", amount: 900 },
            { name: "James Wilson", course: "Intensive English Programme", amount: 850 },
            { name: "Emma Brown", course: "Business English", amount: 800 },
            { name: "Michael Lee", course: "Advanced English Course", amount: 950 },
            { name: "David Kim", course: "IELTS Preparation", amount: 900 },
            { name: "Sophia Martinez", course: "Intensive English Programme", amount: 850 },
            { name: "Daniel Taylor", course: "Business English", amount: 800 },
            { name: "Olivia Anderson", course: "General English", amount: 1700 }
        ]
    },
    // --- Outcome Paid ---
    "TXN-OUT-001": {
        id: "TXN-OUT-001", type: "Outcome", status: "Paid",
        date: "Jan 10, 2024", paidDate: "Jan 12, 2024", totalAmount: 10200,
        paymentMethod: "Credit Card", referenceNo: "REF-OUT-11223344",
        billedTo: { name: "Marketing Vendor Corp", address: "456 Media Avenue\nKuala Lumpur, 50200\nMalaysia" },
        payableTo: { name: "EduGlobe Communications", bank: "CIMB Bank", account: "**** **** 8899" },
        items: [
            { name: "Facebook Ad Campaign", course: "Jan 1 - Jan 15 Promotion", amount: 5000 },
            { name: "Google Search Ads", course: "Keywords targeting", amount: 3200 },
            { name: "Instagram Reels Creation", course: "5 videos package", amount: 2000 }
        ]
    },
    // --- Income Pending (or general Pending) ---
    "TXN-PND-001": {
        id: "TXN-PND-001", type: "Income", status: "Pending",
        date: "Jan 15, 2024", due: "Jan 20, 2024", totalAmount: 3400,
        paymentMethod: "Credit Card", referenceNo: "REF-PND-556677",
        billedTo: { name: "EduGlobe Communications", address: "123 Education Hub, Level 4\nKuala Lumpur, 50000\nMalaysia" },
        payableTo: { name: "Jhon Doe (Agent ID: AG-0092)", bank: "Maybank", account: "**** **** 4321" },
        items: [
            { name: "Lucas Vance", course: "IELTS Preparation", amount: 3400 }
        ]
    }
};

export function AgentTransactionDetailContent({ onBack, transactionId }: AgentTransactionDetailContentProps) {
    let fallbackId = "TXN-INC-001";
    if (transactionId?.includes("OUT")) fallbackId = "TXN-OUT-001";
    if (transactionId?.includes("PND")) fallbackId = "TXN-PND-001";
    
    const txn = mockTransactions[transactionId || ""] || { ...mockTransactions[fallbackId], id: transactionId || fallbackId };

    const totalItems = txn.items.length;

    return (
        <div className="max-w-[800px] mx-auto pb-[40px]">
            {/* Header & Back Action */}
            <div className="flex items-center justify-between mb-[24px]">
                <button 
                    onClick={onBack}
                    className="flex items-center gap-[8px] text-[#6B7280] hover:text-[#111827] transition-colors font-['Inter',sans-serif] text-[14px] font-medium"
                >
                    <ArrowLeft size={16} />
                    Back to Commission
                </button>
                <div className="flex gap-[12px]">
                    <button className="flex items-center gap-[8px] px-[16px] py-[8px] bg-white border border-[#E5E7EB] rounded-[8px] text-[13px] font-medium text-[#374151] hover:bg-[#F9FAFB] shadow-sm transition-colors">
                        <Download size={14} />
                        Download PDF
                    </button>
                </div>
            </div>

            {/* Receipt Card */}
            <div className="bg-white rounded-[16px] shadow-sm border border-[#F3F4F6] overflow-hidden">
                
                {/* Status Banner */}
                <div className={`px-[32px] py-[16px] flex flex-col items-start justify-center border-b ${txn.status === 'Paid' ? 'bg-[#ECFDF5] border-[#D1FAE5]' : 'bg-[#FEF9C3] border-[#FEF08A]'}`}>
                    <div className="flex w-full items-center justify-between">
                        <div className="flex items-center gap-[12px]">
                            {txn.status === 'Paid' ? (
                                <CheckCircle2 className="text-[#10B981]" size={24} />
                            ) : (
                                <Clock className="text-[#A16207]" size={24} />
                            )}
                            <div>
                                <h2 className={`font-bold text-[16px] font-['Inter',sans-serif] ${txn.status === 'Paid' ? 'text-[#065F46]' : 'text-[#854D0E]'}`}>
                                    Payment {txn.status}
                                </h2>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-[24px] font-bold text-[#111827] font-['Inter',sans-serif]">RM {txn.totalAmount.toLocaleString()}</p>
                        </div>
                    </div>
                    
                    {/* Additional Sub-status descriptions based on WhatsApp context */}
                    <div className="mt-[8px] pl-[36px] flex flex-col gap-[2px]">
                        {txn.status === 'Paid' && txn.type === 'Income' && (
                            <div className="flex items-center gap-[6px] text-[13px] font-['Inter',sans-serif] text-[#047857] font-medium">
                                <span className="bg-[#D1FAE5] px-[8px] py-[2px] rounded-full">Admin Approved & Student Paid</span>
                            </div>
                        )}
                        {txn.status === 'Pending' && (
                            <div className="flex items-center gap-[6px] text-[13px] font-['Inter',sans-serif] text-[#A16207] font-medium">
                                <span className="bg-[#FEF08A] px-[8px] py-[2px] rounded-full">Under review / Processing from Admin to Student</span>
                            </div>
                        )}

                        {txn.status === 'Paid' && txn.paidDate && (
                            <p className="text-[13px] font-['Inter',sans-serif] text-[#047857] mt-[4px]">
                                Processed on {txn.paidDate}
                            </p>
                        )}
                        {txn.status === 'Pending' && txn.due && (
                            <p className="text-[13px] font-['Inter',sans-serif] text-[#A16207] mt-[4px]">
                                Due on {txn.due}
                            </p>
                        )}
                    </div>
                </div>

                <div className="p-[32px]">
                    {/* Header Info */}
                    <div className="flex justify-between items-start mb-[40px] border-b border-[#F3F4F6] pb-[32px]">
                        <div>
                            <div className="flex items-center gap-[8px] mb-[16px]">
                                <FileText className="text-[#155DFC]" size={20} />
                                <h3 className="text-[18px] font-bold text-[#111827] font-['Inter',sans-serif]">Commission Details</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-x-[48px] gap-y-[16px]">
                                <div>
                                    <p className="text-[12px] text-[#9CA3AF] font-['Inter',sans-serif] mb-[4px]">Transaction ID</p>
                                    <p className="text-[14px] font-medium text-[#111827] font-['Inter',sans-serif]">{txn.id}</p>
                                </div>
                                <div>
                                    <p className="text-[12px] text-[#9CA3AF] font-['Inter',sans-serif] mb-[4px]">Date Generated</p>
                                    <p className="text-[14px] font-medium text-[#111827] font-['Inter',sans-serif]">{txn.date}</p>
                                </div>
                                <div>
                                    <p className="text-[12px] text-[#9CA3AF] font-['Inter',sans-serif] mb-[4px]">Payment Method</p>
                                    <p className="text-[14px] font-medium text-[#111827] font-['Inter',sans-serif]">{txn.paymentMethod}</p>
                                </div>
                                <div>
                                    <p className="text-[12px] text-[#9CA3AF] font-['Inter',sans-serif] mb-[4px]">Reference No.</p>
                                    <p className="text-[14px] font-medium text-[#111827] font-['Inter',sans-serif]">{txn.referenceNo}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#FAFAFA] rounded-[12px] p-[16px] border border-[#F3F4F6] min-w-[240px]">
                             <p className="text-[12px] font-bold text-[#6B7280] font-['Inter',sans-serif] mb-[8px] uppercase tracking-wider">Payable To</p>
                             <p className="text-[14px] font-bold text-[#111827] font-['Inter',sans-serif] mb-[4px]">{txn.payableTo.name}</p>
                             <p className="text-[13px] text-[#6B7280] font-['Inter',sans-serif]">{txn.payableTo.bank}</p>
                             <p className="text-[13px] text-[#6B7280] font-['Inter',sans-serif]">{txn.payableTo.account}</p>
                        </div>
                    </div>

                    {/* Line Items (Student Breakdown) */}
                    <div>
                        <div className="flex items-center justify-between mb-[16px]">
                            <h4 className="text-[16px] font-bold text-[#111827] font-['Inter',sans-serif]">{txn.type === "Income" ? "Enrollment Breakdown" : "Expense Breakdown"}</h4>
                            <span className="text-[13px] font-medium text-[#155DFC] bg-[#EFF6FF] px-[12px] py-[4px] rounded-full">
                                {totalItems} {txn.type === "Income" ? "Students" : "Items"} Total
                            </span>
                        </div>
                        
                        <div className="border border-[#F3F4F6] rounded-[12px] overflow-hidden">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#F9FAFB] border-b border-[#F3F4F6]">
                                        <th className="py-[12px] px-[16px] text-[12px] font-semibold text-[#6B7280] font-['Inter',sans-serif]">{txn.type === "Income" ? "Student Name" : "Item"}</th>
                                        <th className="py-[12px] px-[16px] text-[12px] font-semibold text-[#6B7280] font-['Inter',sans-serif]">{txn.type === "Income" ? "Enrolled Course" : "Description"}</th>
                                        <th className="py-[12px] px-[16px] text-[12px] font-semibold text-[#6B7280] font-['Inter',sans-serif] text-right">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {txn.items.map((item: any, idx: number) => (
                                        <tr key={idx} className={`border-b border-[#F3F4F6] last:border-0 hover:bg-[#FAFAFA] transition-colors`}>
                                            <td className="py-[16px] px-[16px] text-[14px] font-medium text-[#111827] font-['Inter',sans-serif]">{item.name}</td>
                                            <td className="py-[16px] px-[16px] text-[13px] text-[#6B7280] font-['Inter',sans-serif]">{item.course}</td>
                                            <td className="py-[16px] px-[16px] text-[14px] font-medium text-[#111827] font-['Inter',sans-serif] text-right">RM {item.amount.toLocaleString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Summary Footer */}
                        <div className="mt-[24px] flex justify-end">
                            <div className="w-[300px]">
                                <div className="flex justify-between py-[12px] border-b border-[#F3F4F6]">
                                    <span className="text-[14px] text-[#6B7280] font-['Inter',sans-serif]">Subtotal</span>
                                    <span className="text-[14px] font-medium text-[#111827] font-['Inter',sans-serif]">RM {txn.totalAmount.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between py-[12px] border-b border-[#F3F4F6]">
                                    <span className="text-[14px] text-[#6B7280] font-['Inter',sans-serif]">Platform Fee (0%)</span>
                                    <span className="text-[14px] font-medium text-[#111827] font-['Inter',sans-serif]">RM 0</span>
                                </div>
                                <div className="flex justify-between py-[16px]">
                                    <span className="text-[16px] font-bold text-[#111827] font-['Inter',sans-serif]">Total {txn.status === 'Paid' ? 'Paid' : 'Due'}</span>
                                    <span className="text-[20px] font-bold text-[#155DFC] font-['Inter',sans-serif]">RM {txn.totalAmount.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
