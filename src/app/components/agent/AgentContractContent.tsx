import { useState } from "react";
import { Eye, Download, X, FileText, CheckCircle2 } from "lucide-react";

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
    status: "Draft" | "Generated" | "Signed";
    createdDate: string;
}

// ── Mock Data ───────────────────────────────────────────────────────────────
const mockContracts: ContractRecord[] = [
    { id: 1, contractId: "CONT-2025-1023", agentName: "EduBridge Partners", agentId: "AGT001", country: "Indonesia", contractType: "Standard Agency Agreement", startDate: "2025-01-01", endDate: "2026-01-01", status: "Generated", createdDate: "10 Jan 2025" },
    { id: 2, contractId: "CONT-2025-2489", agentName: "EduBridge Partners", agentId: "AGT001", country: "Indonesia", contractType: "Exclusive Partnership Agreement", startDate: "2025-02-15", endDate: "2026-02-15", status: "Signed", createdDate: "15 Feb 2025" },
];

const fixedCourses = [
    { course: "Business English Course", commission: "15%" },
    { course: "IELTS Preparation", commission: "20%" },
    { course: "General English", commission: "10%" },
    { course: "CEFR B2 Intensive", commission: "15%" },
];

// ── Contract Preview Modal ──────────────────────────────────────────────────
function ContractPreview({ contract, onClose }: { contract: ContractRecord; onClose: () => void }) {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-start justify-center p-[24px] overflow-y-auto" onClick={onClose}>
            <div className="bg-white w-full max-w-[794px] min-h-[1123px] relative shadow-2xl my-[20px] mx-auto overflow-hidden print:m-0 print:shadow-none print:w-full" onClick={(e) => e.stopPropagation()}>
                {/* Modal toolbar (hidden in print) */}
                <div className="flex items-center justify-between px-[24px] py-[14px] border-b border-[#E5E7EB] print:hidden bg-white relative z-50">
                    <span className="font-['Inter',sans-serif] font-semibold text-[14px] text-[#111827]">Contract Preview</span>
                    <div className="flex items-center gap-[8px]">
                        <button onClick={handlePrint} className="flex items-center gap-[6px] px-[14px] py-[8px] bg-[#155DFC] hover:bg-[#1249CC] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[13px] text-white transition-colors">
                            <Download size={14} />Print
                        </button>
                        <button onClick={onClose} className="size-[34px] flex items-center justify-center rounded-[6px] hover:bg-[#F3F4F6] transition-colors"><X size={16} className="text-[#6B7280]" /></button>
                    </div>
                </div>

                {/* --- Letter PDF Content --- */}
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
                        <h3 className="text-[14px] font-bold text-[#111827] mb-[40px]">Signatures & Approval (Sign Off)</h3>
                        <div className="grid grid-cols-2 gap-[40px]">
                            <div>
                                <div className="h-[80px] border-b border-dashed border-[#9CA3AF] mb-[8px]"></div>
                                <p className="text-[12px] font-bold text-[#111827]">For and on behalf of EduGlobe</p>
                                <p className="text-[11px] text-[#6B7280] mt-[2px]">Authorized Signatory</p>
                                <p className="text-[11px] text-[#6B7280] mt-[2px]">Date: ________________________</p>
                            </div>
                            <div>
                                {contract.status === "Signed" ? <div className="h-[80px] flex items-end mb-[8px] pb-[10px] text-[#16A34A] font-medium text-[16px] italic border-b border-dashed border-[#9CA3AF]">Digially Signed</div> : <div className="h-[80px] border-b border-dashed border-[#9CA3AF] mb-[8px]"></div>}
                                <p className="text-[12px] font-bold text-[#111827]">For and on behalf of {contract.agentName}</p>
                                <p className="text-[11px] text-[#6B7280] mt-[2px]">{contract.agentId} / {contract.country}</p>
                                <p className="text-[11px] text-[#6B7280] mt-[2px]">Date: ________________________</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

// ── Main Component ──────────────────────────────────────────────────────────
export function AgentContractContent() {
    const [previewContract, setPreviewContract] = useState<ContractRecord | null>(null);

    const handleSign = (contractId: string) => {
        // Implement signing functionality
        alert(`Signing contract ${contractId}...`);
    }

    return (
        <>
            {previewContract && <ContractPreview contract={previewContract} onClose={() => setPreviewContract(null)} />}
            
            <div className="space-y-[20px]">
                <div className="flex items-start justify-between">
                    <div>
                        <h2 className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827]">My Contracts</h2>
                        <p className="font-['Inter',sans-serif] text-[14px] text-[#6B7280] mt-[4px]">View and sign your agency agreements</p>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-[14px]">
                    {[
                        { label: "Pending Signatures", value: mockContracts.filter(l => l.status === "Generated").length, color: "text-[#155DFC]", bg: "bg-[#EFF6FF]" },
                        { label: "Signed Contracts", value: mockContracts.filter(l => l.status === "Signed").length, color: "text-[#16A34A]", bg: "bg-[#DCFCE7]" },
                    ].map((c) => (
                        <div key={c.label} className={`${c.bg} rounded-[12px] p-[16px] flex items-center gap-[14px]`}>
                            <FileText size={24} className={c.color} />
                            <div>
                                <p className={`font-['Inter',sans-serif] font-bold text-[28px] ${c.color}`}>{c.value}</p>
                                <p className={`font-['Inter',sans-serif] text-[13px] ${c.color}`}>{c.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contracts table */}
                <div className="bg-white rounded-[12px] border border-[#F3F4F6]">
                    <div className="px-[20px] py-[14px] border-b border-[#F3F4F6]">
                        <h3 className="font-['Inter',sans-serif] font-bold text-[14px] text-[#111827]">Contract History</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-[#F3F4F6]">
                                    {["Contract ID", "Contract Type", "Start Date", "End Date", "Status", "Actions"].map((col) => (
                                        <th key={col} className="px-[16px] py-[12px] text-left font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] whitespace-nowrap">{col}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {mockContracts.map((c) => (
                                    <tr key={c.id} className="border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors">
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] font-semibold text-[12px] text-[#155DFC] whitespace-nowrap">{c.contractId}</td>
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151]">{c.contractType}</td>
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151] whitespace-nowrap">{c.startDate}</td>
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151] whitespace-nowrap">{c.endDate}</td>
                                        <td className="px-[16px] py-[14px]">
                                            <span className={`px-[8px] py-[3px] rounded-full text-[11px] font-semibold font-['Inter',sans-serif] ${c.status === "Signed" ? "bg-[#DCFCE7] text-[#16A34A]" : c.status === "Generated" ? "bg-[#EFF6FF] text-[#155DFC]" : "bg-[#FEF9C3] text-[#CA8A04]"}`}>
                                                {c.status === "Generated" ? "Pending Signature" : c.status}
                                            </span>
                                        </td>
                                        <td className="px-[16px] py-[14px]">
                                            <div className="flex items-center gap-[6px]">
                                                <button onClick={() => setPreviewContract(c)} className="flex items-center gap-[4px] px-[10px] py-[6px] rounded-[6px] bg-[#F3F4F6] hover:bg-[#E5E7EB] transition-colors">
                                                    <Eye size={13} className="text-[#374151]" /><span className="font-['Inter',sans-serif] text-[12px] text-[#374151]">View</span>
                                                </button>
                                                {c.status === "Generated" && (
                                                    <button onClick={() => handleSign(c.contractId)} className="flex items-center gap-[4px] px-[10px] py-[6px] rounded-[6px] bg-[#155DFC] text-white hover:bg-[#1249CC] transition-colors">
                                                        <CheckCircle2 size={13} /><span className="font-['Inter',sans-serif] text-[12px]">Sign Document</span>
                                                    </button>
                                                )}
                                                <button className="flex items-center gap-[4px] px-[10px] py-[6px] rounded-[6px] border border-[#E5E7EB] hover:bg-[#F9FAFB] transition-colors">
                                                    <Download size={13} className="text-[#374151]" /><span className="font-['Inter',sans-serif] text-[12px] text-[#374151]">PDF</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
