import { useState } from "react";
import { Download, X, AlertCircle, PenTool, CheckCircle2 } from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────
interface ContractRecord {
    id: number;
    contractId: string;
    agentName: string;
    agentId: string;
    country: string;
    contractType: string;
    startDate: string;
    endDate: string;
    status: "Generated" | "Signed";
    createdDate: string;
}

// ── Mock Data ───────────────────────────────────────────────────────────────
const initialContract: ContractRecord = { 
    id: 1, 
    contractId: "CONT-2025-1023", 
    agentName: "EduBridge Partners", 
    agentId: "AGT001", 
    country: "Indonesia", 
    contractType: "Standard Agency Agreement", 
    startDate: "2025-01-01", 
    endDate: "2026-01-01", 
    status: "Generated", 
    createdDate: "10 Jan 2025" 
};

const fixedCourses = [
    { course: "Business English Course", commission: "15%" },
    { course: "IELTS Preparation", commission: "20%" },
    { course: "General English", commission: "10%" },
    { course: "CEFR B2 Intensive", commission: "15%" },
];

// ── Signature Modal ─────────────────────────────────────────────────────────
function SignModal({ contract, onSign, onClose }: { contract: ContractRecord; onSign: (name: string) => void; onClose: () => void }) {
    const [name, setName] = useState("");
    const [agreed, setAgreed] = useState(false);

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-[24px]" onClick={onClose}>
            <div className="bg-white rounded-[16px] w-full max-w-[500px] overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
                <div className="flex items-center justify-between px-[24px] py-[18px] border-b border-[#E5E7EB]">
                    <h3 className="font-['Inter',sans-serif] font-bold text-[18px] text-[#111827]">Sign Digital Contract</h3>
                    <button onClick={onClose} className="size-[32px] flex items-center justify-center rounded-[8px] hover:bg-[#F3F4F6] text-[#6B7280] transition-colors"><X size={18} /></button>
                </div>
                
                <div className="p-[24px] space-y-[20px]">
                    <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-[10px] p-[16px] flex gap-[12px]">
                        <AlertCircle className="text-[#155DFC] shrink-0 mt-[2px]" size={20} />
                        <p className="font-['Inter',sans-serif] text-[13px] text-[#1E3A8A] leading-[1.6]">
                            By formally signing this document, you acknowledge and agree to act as an official representative for EduGlobe as defined by the terms in document <strong>{contract.contractId}</strong>.
                        </p>
                    </div>

                    <label className="flex items-start gap-[12px] p-[12px] border border-[#E5E7EB] rounded-[10px] cursor-pointer hover:bg-[#F9FAFB] transition-colors">
                        <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} className="mt-[4px] accent-[#155DFC] size-[18px]" />
                        <span className="font-['Inter',sans-serif] text-[13px] text-[#374151] leading-[1.6]">I confirm that I have read, understood, and accept all the terms and conditions outlined in this agreement.</span>
                    </label>

                    <div>
                        <label className="block font-['Inter',sans-serif] font-semibold text-[13px] text-[#374151] mb-[8px]">Type your full name to sign legally</label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Budi Santoso" className="w-full border border-[#D1D5DB] rounded-[10px] px-[16px] py-[12px] font-['Inter',sans-serif] text-[14px] outline-none focus:border-[#155DFC] focus:ring-1 focus:ring-[#155DFC] transition-all" />
                    </div>
                </div>
                
                <div className="px-[24px] py-[20px] bg-[#F9FAFB] border-t border-[#E5E7EB] flex justify-end gap-[12px]">
                    <button onClick={onClose} className="px-[20px] py-[10px] rounded-[10px] font-['Inter',sans-serif] font-semibold text-[14px] text-[#374151] hover:bg-[#E5E7EB] transition-colors">Cancel</button>
                    <button onClick={() => onSign(name)} disabled={!agreed || !name.trim()} className="px-[20px] py-[10px] rounded-[10px] font-['Inter',sans-serif] font-semibold text-[14px] text-white bg-[#155DFC] hover:bg-[#1249CC] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm flex items-center gap-[8px]">
                        <PenTool size={16} /> Sign Document
                    </button>
                </div>
            </div>
        </div>
    )
}

// ── Contract Document UI ────────────────────────────────────────────────────
function ContractDocument({ contract, signature }: { contract: ContractRecord, signature: string }) {
    return (
        <div className="bg-white w-[794px] min-h-[1123px] relative shadow-lg mx-auto print:m-0 print:shadow-none print:w-full shrink-0">
            <div className="relative w-full h-full bg-white px-[60px] pt-[70px] pb-[100px] font-['Inter',sans-serif] print:p-0" id="contract-print">
                {/* Header Details */}
                <div className="flex justify-between items-start mb-[50px]">
                    {/* Logo */}
                    <div className="flex items-center gap-[12px]">
                        <div className="text-[#0EA5E9] relative">
                            <div className="flex gap-[4px] absolute -top-[12px] left-[10px]">
                                <div className="w-[4px] h-[8px] bg-[#FACC15] rotate-[-20deg] rounded-full"></div>
                                <div className="w-[4px] h-[10px] bg-[#FACC15] -translate-y-[4px] rounded-full"></div>
                                <div className="w-[4px] h-[8px] bg-[#FACC15] rotate-[20deg] rounded-full"></div>
                            </div>
                            <svg width="40" height="46" viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.5 44C18.5 44 8 36.5 8 22C8 7.5 18 2 28 2C35 2 38 6 38 12C38 18 34 22 28 22H24C20 22 17 25 17 29C17 33 20 36 24 36H38V42C38 42 28 44 24 44H18.5Z" fill="#0EA5E9" />
                                <path d="M18.5 44L12 45L14 38" fill="#0EA5E9" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="font-bold text-[20px] text-[#0EA5E9] leading-tight tracking-wide">EDU<span className="text-[#2563EB]">GLOBE</span></h1>
                            <p className="text-[10px] font-bold text-[#FACC15] tracking-[0.1em] uppercase">Language Center</p>
                        </div>
                    </div>

                    {/* Address (aligned right) */}
                    <div className="text-right text-[9px] text-[#4B5563] leading-[1.6]">
                        <p className="font-bold text-[#111827]">EduGlobe Language Center</p>
                        <p>1C, 3rd Floor, Wisma Ampang Triangle, 1</p>
                        <p>68000 Ampang, Selangor, Malaysia</p>
                        <p>+6 (03) 4820 7995</p>
                        <p>info@eduglobe.com</p>
                    </div>
                </div>

                {/* Date and Ref */}
                <div className="mb-[30px] text-[12px] text-[#6B7280]">
                    <p>{contract.createdDate}</p>
                    <p className="italic mt-[2px]">Ref: {contract.contractId}</p>
                </div>

                {/* Title */}
                <h2 className="text-[18px] font-bold text-[#111827] mb-[24px] uppercase text-center border-b-2 border-[#111827] pb-[8px]">
                    {contract.contractType}
                </h2>

                <p className="text-[12px] text-[#374151] leading-[1.8] mb-[24px] text-justify">
                    This Agreement is made on <strong>{contract.createdDate}</strong> between <strong>EduGlobe Language Center</strong> (hereinafter referred to as the "Institution") and <strong>{contract.agentName}</strong> (hereinafter referred to as the "Agent").
                </p>

                <ol className="list-decimal list-outside ml-[16px] text-[12px] text-[#374151] leading-[1.8] space-y-[16px] mb-[32px] text-justify">
                    <li>
                        <strong>Appointment:</strong> The Institution hereby appoints the Agent as a non-exclusive representative to recruit students for the programs listed in this agreement.
                    </li>
                    <li>
                        <strong>Term:</strong> This Agreement shall commence on <strong>{contract.startDate}</strong> and will remain in effect until <strong>{contract.endDate}</strong> unless terminated earlier by either party with a 30-day written notice.
                    </li>
                    <li>
                        <strong>Fixed Commission Rates:</strong> The Institution agrees to pay the Agent a fixed commission based on the program enrolled by the student as following:
                        
                        <table className="w-full mt-[16px] border border-[#E5E7EB] text-left">
                            <thead>
                                <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                                    <th className="px-[12px] py-[8px] font-semibold text-[#111827]">Program / Course</th>
                                    <th className="px-[12px] py-[8px] font-semibold text-[#111827] w-[150px]">Fixed Commission</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fixedCourses.map((c, i) => (
                                    <tr key={i} className="border-b border-[#E5E7EB]">
                                        <td className="px-[12px] py-[8px]">{c.course}</td>
                                        <td className="px-[12px] py-[8px] font-semibold text-[#155DFC]">{c.commission}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </li>
                    <li>
                        <strong>Payment Terms:</strong> Commissions will be payable within 30 days after the student has successfully commenced their studies and paid the full tuition fees to the Institution.
                    </li>
                    <li>
                        <strong>Compliance:</strong> The Agent agrees to conduct their recruitment activities ethically, accurately representing the Institution's courses, fees, and services without using deceptive practices.
                    </li>
                </ol>

                {/* Signatures / Sign Off */}
                <div className="mt-[60px]">
                    <h3 className="text-[14px] font-bold text-[#111827] mb-[40px]">Signatures & Approval</h3>
                    <div className="grid grid-cols-2 gap-[40px]">
                        <div>
                            {contract.status === "Signed" ? (
                                <div className="h-[80px] border-b border-dashed border-[#9CA3AF] mb-[8px] flex flex-col justify-end pb-[2px]">
                                    <span className="font-['Inter',sans-serif] font-bold text-[18px] text-[#111827] italic">Hassan Al-Saeed</span>
                                </div>
                            ) : (
                                <div className="h-[80px] border-b border-dashed border-[#9CA3AF] mb-[8px]"></div>
                            )}
                            <p className="text-[12px] font-bold text-[#111827]">For and on behalf of EduGlobe</p>
                            <p className="text-[11px] text-[#6B7280] mt-[2px]">Authorized Signatory</p>
                            <p className="text-[11px] text-[#6B7280] mt-[2px]">Date: ________________________</p>
                        </div>
                        <div>
                            {contract.status === "Signed" ? (
                                <div className="h-[80px] border-b border-dashed border-[#9CA3AF] mb-[8px] flex flex-col justify-end pb-[2px] relative">
                                    <span className="font-serif italic text-[26px] text-[#155DFC] leading-none mb-[4px]">{signature || contract.agentName}</span>
                                    <div className="absolute right-0 top-[20px] bg-[#DCFCE7] text-[#16A34A] text-[9px] font-bold px-[6px] py-[2px] rounded uppercase border border-[#16A34A]/20">Digitally Verified</div>
                                </div>
                            ) : (
                                <div className="h-[80px] border-b border-dashed border-[#9CA3AF] mb-[8px]"></div>
                            )}
                            <p className="text-[12px] font-bold text-[#111827]">For and on behalf of {contract.agentName}</p>
                            <p className="text-[11px] text-[#6B7280] mt-[2px]">{contract.agentId} / {contract.country}</p>
                            <p className="text-[11px] text-[#6B7280] mt-[2px]">Date: ________________________</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

// ── Main Component Layout ───────────────────────────────────────────────────
export function AgentContractContent() {
    const [contract, setContract] = useState<ContractRecord>(initialContract);
    const [showSignModal, setShowSignModal] = useState(false);
    const [signature, setSignature] = useState("");

    const handleSign = (name: string) => {
        setSignature(name);
        setContract({ ...contract, status: "Signed" });
        setShowSignModal(false);
    }

    const handlePrint = () => {
        window.print();
    }

    return (
        <div className="h-[calc(100vh-120px)] flex flex-col max-h-[900px]">
            {showSignModal && <SignModal contract={contract} onSign={handleSign} onClose={() => setShowSignModal(false)} />}
            
            {/* Header Area */}
            <div className="flex items-center justify-between mb-[24px] shrink-0">
                <div>
                    <h2 className="font-['Inter',sans-serif] font-bold text-[24px] text-[#111827]">My Partnership Contract</h2>
                    <p className="font-['Inter',sans-serif] text-[15px] text-[#6B7280] mt-[4px]">Review and digitally sign your official agreement</p>
                </div>
            </div>

            {/* Split View */}
            <div className="flex gap-[24px] flex-1 min-h-0 bg-white p-[8px] rounded-[16px] shadow-sm border border-[#E5E7EB]">
                {/* Left: Document Viewer */}
                <div className="flex-1 bg-[#F3F4F6] rounded-[12px] overflow-auto flex justify-center py-[24px] border border-[#E5E7EB] print:border-none print:m-0 print:p-0">
                    <ContractDocument contract={contract} signature={signature} />
                </div>

                {/* Right: Actions sidebar */}
                <div className="w-[320px] shrink-0 border border-[#E5E7EB] rounded-[12px] flex flex-col bg-[#FAFAFA] print:hidden">
                    <div className="p-[20px] bg-white rounded-t-[12px] border-b border-[#E5E7EB]">
                        {contract.status === "Generated" ? (
                             <div className="flex items-start gap-[12px] bg-[#FEF9C3]/50 p-[12px] rounded-[8px] border border-[#FEF08A] mb-[16px]">
                                <AlertCircle className="text-[#CA8A04] shrink-0 mt-[2px]" size={18} />
                                <div>
                                    <p className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#A16207]">Signature Required</p>
                                    <p className="font-['Inter',sans-serif] text-[12px] text-[#CA8A04] mt-[2px]">Please read the contract and sign to activate your partnership.</p>
                                </div>
                            </div>
                        ) : (
                             <div className="flex items-start gap-[12px] bg-[#DCFCE7]/50 p-[12px] rounded-[8px] border border-[#BBF7D0] mb-[16px]">
                                <CheckCircle2 className="text-[#16A34A] shrink-0 mt-[2px]" size={18} />
                                <div>
                                    <p className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#15803D]">Contract Signed</p>
                                    <p className="font-['Inter',sans-serif] text-[12px] text-[#16A34A] mt-[2px]">Your partnership agreement is legally binding and active.</p>
                                </div>
                            </div>
                        )}

                        <h3 className="font-['Inter',sans-serif] font-bold text-[14px] text-[#111827] mb-[12px]">Contract Details</h3>
                        <div className="space-y-[10px]">
                            <div className="flex justify-between items-center py-[4px]">
                                <span className="font-['Inter',sans-serif] text-[12px] text-[#6B7280]">Contract ID</span>
                                <span className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827]">{contract.contractId}</span>
                            </div>
                            <div className="flex justify-between items-center py-[4px]">
                                <span className="font-['Inter',sans-serif] text-[12px] text-[#6B7280]">Type</span>
                                <span className="font-['Inter',sans-serif] font-medium text-[12px] text-[#111827] bg-[#F3F4F6] px-[8px] py-[3px] rounded-[6px]">{contract.contractType}</span>
                            </div>
                            <div className="flex justify-between items-center py-[4px]">
                                <span className="font-['Inter',sans-serif] text-[12px] text-[#6B7280]">Valid From</span>
                                <span className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827]">{contract.startDate}</span>
                            </div>
                            <div className="flex justify-between items-center py-[4px]">
                                <span className="font-['Inter',sans-serif] text-[12px] text-[#6B7280]">Valid To</span>
                                <span className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827]">{contract.endDate}</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-[20px] mt-auto">
                        {contract.status === "Generated" ? (
                            <div className="space-y-[12px]">
                                <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280] text-center mb-[8px]">Ready to finalize your agreement?</p>
                                <button onClick={() => setShowSignModal(true)} className="w-full flex items-center justify-center gap-[8px] bg-[#155DFC] hover:bg-[#1249CC] text-white py-[12px] rounded-[10px] font-['Inter',sans-serif] font-bold text-[14px] transition-all shadow-md">
                                    <PenTool size={18} /> Sign Document
                                </button>
                                <button onClick={handlePrint} className="w-full flex items-center justify-center gap-[8px] bg-white border border-[#E5E7EB] hover:bg-[#F9FAFB] text-[#374151] py-[10px] rounded-[10px] font-['Inter',sans-serif] font-semibold text-[13px] transition-colors">
                                    <Download size={16} /> Download PDF
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-[12px]">
                                <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280] text-center mb-[8px]">You can still download a copy for your records.</p>
                                <button onClick={handlePrint} className="w-full flex items-center justify-center gap-[8px] bg-[#155DFC] text-white hover:bg-[#1249CC] py-[12px] rounded-[10px] font-['Inter',sans-serif] font-bold text-[14px] transition-all shadow-md">
                                    <Download size={18} /> Download Signed PDF
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
