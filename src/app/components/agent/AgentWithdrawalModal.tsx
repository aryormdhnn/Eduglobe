import { useState } from "react";
import { X, Building2, CreditCard } from "lucide-react";

interface AgentWithdrawalModalProps {
    isOpen: boolean;
    onClose: () => void;
    availableBalance: number;
}

export function AgentWithdrawalModal({ isOpen, onClose, availableBalance }: AgentWithdrawalModalProps) {
    const [amount, setAmount] = useState(availableBalance.toString());
    const [method, setMethod] = useState<"bank" | "paypal">("bank");
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            onClose();
        }, 1500);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-[16px] w-[90%] max-w-[500px] shadow-xl overflow-hidden animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="flex items-center justify-between px-[24px] py-[20px] border-b border-[#F3F4F6]">
                    <div>
                        <h2 className="text-[18px] font-bold text-[#111827] font-['Inter',sans-serif]">Request Withdrawal</h2>
                        <p className="text-[13px] text-[#6B7280] font-['Inter',sans-serif]">Transfer your commissions to your account</p>
                    </div>
                    <button 
                        onClick={onClose}
                        className="p-[8px] text-[#9CA3AF] hover:bg-[#F3F4F6] hover:text-[#374151] rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <form onSubmit={handleSubmit} className="p-[24px] space-y-[24px]">
                    
                    {/* Amount Input */}
                    <div>
                        <div className="flex justify-between items-center mb-[8px]">
                            <label className="text-[13px] font-semibold text-[#374151] font-['Inter',sans-serif]">Withdrawal Amount (RM)</label>
                            <span className="text-[12px] text-[#6B7280] font-['Inter',sans-serif]">Avail: RM {availableBalance.toLocaleString()}</span>
                        </div>
                        <div className="relative">
                            <span className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[#9CA3AF] font-['Inter',sans-serif] font-medium">RM</span>
                            <input 
                                type="number" 
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                max={availableBalance}
                                min={100}
                                className="w-full pl-[48px] pr-[16px] py-[12px] rounded-[8px] border border-[#D1D5DB] text-[16px] font-medium text-[#111827] focus:ring-2 focus:ring-[#155DFC] focus:border-[#155DFC] outline-none transition-all"
                            />
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div>
                        <label className="block text-[13px] font-semibold text-[#374151] font-['Inter',sans-serif] mb-[12px]">Transfer Method</label>
                        <div className="grid grid-cols-2 gap-[12px]">
                            {/* Bank Option */}
                            <div 
                                onClick={() => setMethod("bank")}
                                className={`flex items-start gap-[12px] p-[16px] rounded-[12px] border cursor-pointer transition-all ${method === "bank" ? "border-[#155DFC] bg-[#EFF6FF]" : "border-[#E5E7EB] hover:border-[#D1D5DB]"}`}
                            >
                                <div className={`p-[8px] rounded-full ${method === "bank" ? "bg-[#DBEAFE] text-[#1D4ED8]" : "bg-[#F3F4F6] text-[#6B7280]"}`}>
                                    <Building2 size={16} />
                                </div>
                                <div className="flex-1">
                                    <p className={`text-[14px] font-semibold font-['Inter',sans-serif] ${method === "bank" ? "text-[#1E3A8A]" : "text-[#374151]"}`}>Bank Account</p>
                                    <p className="text-[12px] text-[#6B7280] font-['Inter',sans-serif]">Maybank **** 4321</p>
                                </div>
                                <div className={`size-[16px] rounded-full border-2 flex items-center justify-center mt-[2px] ${method === "bank" ? "border-[#155DFC]" : "border-[#D1D5DB]"}`}>
                                    {method === "bank" && <div className="size-[8px] bg-[#155DFC] rounded-full" />}
                                </div>
                            </div>

                            {/* PayPal Option */}
                            <div 
                                onClick={() => setMethod("paypal")}
                                className={`flex items-start gap-[12px] p-[16px] rounded-[12px] border cursor-pointer transition-all ${method === "paypal" ? "border-[#155DFC] bg-[#EFF6FF]" : "border-[#E5E7EB] hover:border-[#D1D5DB]"}`}
                            >
                                <div className={`p-[8px] rounded-full ${method === "paypal" ? "bg-[#DBEAFE] text-[#1D4ED8]" : "bg-[#F3F4F6] text-[#6B7280]"}`}>
                                    <CreditCard size={16} />
                                </div>
                                <div className="flex-1">
                                    <p className={`text-[14px] font-semibold font-['Inter',sans-serif] ${method === "paypal" ? "text-[#1E3A8A]" : "text-[#374151]"}`}>PayPal</p>
                                    <p className="text-[12px] text-[#6B7280] font-['Inter',sans-serif] truncate">jhon@agent.com</p>
                                </div>
                                <div className={`size-[16px] rounded-full border-2 flex items-center justify-center mt-[2px] ${method === "paypal" ? "border-[#155DFC]" : "border-[#D1D5DB]"}`}>
                                    {method === "paypal" && <div className="size-[8px] bg-[#155DFC] rounded-full" />}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Summary Info */}
                    <div className="bg-[#F9FAFB] rounded-[8px] p-[16px]">
                        <div className="flex justify-between text-[13px] font-['Inter',sans-serif] text-[#6B7280] mb-[8px]">
                            <span>Transfer Fee</span>
                            <span>RM 0.00</span>
                        </div>
                        <div className="flex justify-between text-[13px] font-['Inter',sans-serif] text-[#6B7280]">
                            <span>Estimated Arrival</span>
                            <span>1-3 Business Days</span>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-[12px] pt-[8px] border-t border-[#F3F4F6]">
                        <button 
                            type="button"
                            onClick={onClose}
                            className="flex-1 py-[10px] rounded-[8px] border border-[#D1D5DB] text-[14px] font-semibold text-[#374151] hover:bg-[#F9FAFB] transition-colors font-['Inter',sans-serif]"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 py-[10px] rounded-[8px] bg-[#155DFC] text-white text-[14px] font-semibold hover:bg-[#1D4ED8] transition-colors font-['Inter',sans-serif] disabled:opacity-70 flex items-center justify-center gap-[8px]"
                        >
                            {isSubmitting && <div className="size-[16px] border-2 border-white border-t-transparent rounded-full animate-spin"></div>}
                            {isSubmitting ? "Processing..." : "Confirm Withdrawal"}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
