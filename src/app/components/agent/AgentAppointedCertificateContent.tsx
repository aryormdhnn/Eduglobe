import { useState } from "react";
import { Download, Award, CheckCircle2 } from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────
interface AppointedCertRecord {
    id: number;
    certificateId: string;
    agentName: string;
    agentId: string;
    type: "New" | "Renewal";
    startDate: string;
    endDate: string;
    status: "Active" | "Expired";
    createdDate: string;
}

// ── Mock Data ───────────────────────────────────────────────────────────────
const initialCert: AppointedCertRecord = { 
    id: 1, 
    certificateId: "APPT-2025-1082", 
    agentName: "EduBridge Partners", 
    agentId: "AGT001", 
    type: "New", 
    startDate: "2025-01-02", 
    endDate: "2025-12-31", 
    status: "Active", 
    createdDate: "02 Jan 2025" 
};

function formatDate(dateStr: string) {
    if (!dateStr) return "—";
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

// ── Certificate Document UI ────────────────────────────────────────────────
function CertificateDocument({ cert }: { cert: AppointedCertRecord }) {
    return (
        <div className="bg-white w-[1056px] min-h-[816px] relative shadow-lg mx-auto print:m-0 print:shadow-none print:w-full print:h-screen landscape:print:block flex flex-col shrink-0">
            {/* --- Certificate Content (Landscape A4 size roughly) --- */}
            <div className="relative w-full flex-1 bg-white font-['Inter',sans-serif] text-center print:p-0 flex items-center justify-center overflow-hidden" id="certificate-print">
                
                {/* Background Decorative Elements Matching Reference */}
                {/* Orange Top Right Banner */}
                <div className="absolute top-0 right-0 w-[80%] h-[300px] bg-[#EA580C] origin-top-right transform translate-x-[15%] -translate-y-[40%] rotate-[-12deg] z-0"></div>
                
                {/* Blue & Green Left Side Banners */}
                <div className="absolute top-0 left-0 w-[120px] h-[150%] bg-[#0EA5E9] origin-top-left transform -translate-x-[40%] rotate-[15deg] z-0"></div>
                <div className="absolute top-0 left-[40px] w-[80px] h-[150%] bg-[#84CC16] origin-top-left transform -translate-x-[20%] rotate-[15deg] z-0"></div>

                {/* Content Container */}
                <div className="relative z-10 w-full h-full flex flex-col px-[80px] py-[60px]">
                    
                    {/* Header / Logo */}
                    <div className="flex justify-start mb-[50px]">
                        <div className="flex items-center gap-[12px]">
                            {/* Mimicking Logo */}
                            <div className="text-[#EA580C] relative">
                                <div className="flex gap-[4px] absolute -top-[12px] left-[10px]">
                                    <div className="w-[4px] h-[8px] bg-[#EA580C] rotate-[-20deg] rounded-full"></div>
                                    <div className="w-[4px] h-[10px] bg-[#EA580C] -translate-y-[4px] rounded-full"></div>
                                    <div className="w-[4px] h-[8px] bg-[#EA580C] rotate-[20deg] rounded-full"></div>
                                </div>
                                <svg width="60" height="69" viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.5 44C18.5 44 8 36.5 8 22C8 7.5 18 2 28 2C35 2 38 6 38 12C38 18 34 22 28 22H24C20 22 17 25 17 29C17 33 20 36 24 36H38V42C38 42 28 44 24 44H18.5Z" stroke="#EA580C" strokeWidth="2" fill="white" />
                                    <path d="M18.5 44L12 45L14 38" fill="#EA580C" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="font-bold text-[28px] text-[#4B5563] leading-tight flex items-center gap-[6px]">
                                    <span className="text-[#EA580C]">EDU</span>GLOBE <span className="font-light text-[22px] ml-[4px]">Malaysia</span>
                                </h1>
                            </div>
                        </div>
                    </div>

                    {/* Certificate Body */}
                    <div className="flex-1 flex flex-col items-center justify-center mt-[-40px]">
                        <h2 className="text-[42px] font-bold text-[#EA580C] uppercase tracking-wider mb-[30px]" style={{ transform: 'scaleY(1.2)' }}>
                            Certificate of Appointment
                        </h2>

                        <p className="text-[16px] text-[#4B5563] mb-[20px]">
                            This is to certify that
                        </p>

                        <h3 className="text-[32px] font-bold text-[#374151] uppercase mb-[24px]">
                            {cert.agentName}
                        </h3>

                        <p className="text-[16px] text-[#4B5563] mb-[60px]">
                            is an official admission representative of <strong className="text-[#EA580C]">EduGlobe Language Centers, Malaysia.</strong>
                        </p>

                        {/* Signatures & Dates */}
                        <div className="w-full max-w-[600px] flex justify-between items-end relative mt-[40px]">
                            {/* Issue Date */}
                            <div className="text-center w-[180px]">
                                <p className="text-[12px] text-[#374151] mb-[4px] font-semibold">{formatDate(cert.startDate)}</p>
                                <div className="h-[1px] w-full bg-[#111827]"></div>
                                <p className="text-[11px] text-[#6B7280] mt-[4px]">Date of Issue</p>
                            </div>

                            {/* Signature Center */}
                            <div className="text-center relative -top-[20px]">
                                {/* Mock Signature */}
                                <div className="relative h-[60px] w-[140px] mx-auto flex items-center justify-center mb-[-10px]">
                                    <svg viewBox="0 0 100 50" className="w-[80px] h-auto stroke-[#111827] stroke-[1.5] fill-none">
                                        <path d="M 30,40 C 20,40 20,20 40,10 C 60,0 80,20 70,40 C 60,60 40,40 50,30 C 60,20 80,10 90,30" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="h-[1px] w-[180px] bg-[#111827] mx-auto absolute bottom-[22px] left-[-20px] z-[-1]"></div>
                                <p className="text-[11px] text-[#6B7280] mt-[4px]">Director</p>
                            </div>

                            {/* Expiry Date */}
                            <div className="text-center w-[180px]">
                                <p className="text-[12px] text-[#374151] mb-[4px] font-semibold">{formatDate(cert.endDate)}</p>
                                <div className="h-[1px] w-full bg-[#111827]"></div>
                                <p className="text-[11px] text-[#6B7280] mt-[4px]">Expiry Date</p>
                            </div>
                        </div>
                    </div>

                    {/* Seal/Badge at the bottom */}
                    <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 flex flex-col items-center">
                        <div className="size-[80px] rounded-full bg-[#EA580C] text-white flex flex-col items-center justify-center border-dashed border-[2px] border-white ring-[4px] ring-[#EA580C]">
                            <div className="flex gap-[2px] mb-[4px]">
                                {[1,2,3,4,5].map(i => <div key={i} className="text-[6px]">★</div>)}
                            </div>
                            <span className="font-bold text-[20px] leading-none mb-[2px]">EDU</span>
                            <span className="text-[6px] tracking-widest uppercase opacity-80">Globe Center</span>
                        </div>
                    </div>

                    {/* Certificate ID */}
                    <div className="absolute bottom-[30px] left-[80px] text-[10px] text-[#9CA3AF]">
                        ID: {cert.certificateId}
                    </div>

                </div>
            </div>
        </div>
    );
}

// ── Main Component Layout ───────────────────────────────────────────────────
export function AgentAppointedCertificateContent() {
    const [cert, setCert] = useState<AppointedCertRecord>(initialCert);

    const handlePrint = () => {
        window.print();
    }

    return (
        <div className="h-[calc(100vh-120px)] flex flex-col max-h-[900px]">
            {/* Header Area */}
            <div className="flex items-center justify-between mb-[24px] shrink-0">
                <div>
                    <h2 className="font-['Inter',sans-serif] font-bold text-[24px] text-[#111827]">Appointed Representative Certificate</h2>
                    <p className="font-['Inter',sans-serif] text-[15px] text-[#6B7280] mt-[4px]">View and download your official appointment certificate</p>
                </div>
            </div>

            {/* Split View */}
            <div className="flex gap-[24px] flex-1 min-h-0 bg-white p-[8px] rounded-[16px] shadow-sm border border-[#E5E7EB]">
                {/* Left: Document Viewer */}
                <div className="flex-1 bg-[#F3F4F6] rounded-[12px] overflow-auto flex justify-center py-[24px] border border-[#E5E7EB] print:border-none print:m-0 print:p-0">
                    <CertificateDocument cert={cert} />
                </div>

                {/* Right: Actions sidebar */}
                <div className="w-[320px] shrink-0 border border-[#E5E7EB] rounded-[12px] flex flex-col bg-[#FAFAFA] print:hidden">
                    <div className="p-[20px] bg-white rounded-t-[12px] border-b border-[#E5E7EB]">
                        {cert.status === "Active" ? (
                             <div className="flex items-start gap-[12px] bg-[#DCFCE7]/50 p-[12px] rounded-[8px] border border-[#BBF7D0] mb-[16px]">
                                <CheckCircle2 className="text-[#16A34A] shrink-0 mt-[2px]" size={18} />
                                <div>
                                    <p className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#15803D]">Certificate Active</p>
                                    <p className="font-['Inter',sans-serif] text-[12px] text-[#16A34A] mt-[2px]">Your representative status is currently valid and active.</p>
                                </div>
                            </div>
                        ) : (
                             <div className="flex items-start gap-[12px] bg-[#FEE2E2]/50 p-[12px] rounded-[8px] border border-[#FECACA] mb-[16px]">
                                <CheckCircle2 className="text-[#EF4444] shrink-0 mt-[2px]" size={18} />
                                <div>
                                    <p className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#B91C1C]">Certificate Expired</p>
                                    <p className="font-['Inter',sans-serif] text-[12px] text-[#EF4444] mt-[2px]">Your representative status has expired. Please contact administration for renewal.</p>
                                </div>
                            </div>
                        )}

                        <h3 className="font-['Inter',sans-serif] font-bold text-[14px] text-[#111827] mb-[12px]">Certificate Details</h3>
                        <div className="space-y-[10px]">
                            <div className="flex justify-between items-center py-[4px]">
                                <span className="font-['Inter',sans-serif] text-[12px] text-[#6B7280]">Certificate ID</span>
                                <span className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827]">{cert.certificateId}</span>
                            </div>
                            <div className="flex justify-between items-center py-[4px]">
                                <span className="font-['Inter',sans-serif] text-[12px] text-[#6B7280]">Type</span>
                                <span className="font-['Inter',sans-serif] font-medium text-[12px] text-[#111827] bg-[#F3F4F6] px-[8px] py-[3px] rounded-[6px]">{cert.type}</span>
                            </div>
                            <div className="flex justify-between items-center py-[4px]">
                                <span className="font-['Inter',sans-serif] text-[12px] text-[#6B7280]">Valid From</span>
                                <span className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827]">{formatDate(cert.startDate)}</span>
                            </div>
                            <div className="flex justify-between items-center py-[4px]">
                                <span className="font-['Inter',sans-serif] text-[12px] text-[#6B7280]">Valid To</span>
                                <span className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827]">{formatDate(cert.endDate)}</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-[20px] mt-auto">
                        <div className="space-y-[12px]">
                            <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280] text-center mb-[8px]">Download a high-quality copy for printing or framing.</p>
                            <button onClick={handlePrint} className="w-full flex items-center justify-center gap-[8px] bg-[#155DFC] hover:bg-[#1249CC] text-white py-[12px] rounded-[10px] font-['Inter',sans-serif] font-bold text-[14px] transition-all shadow-md">
                                <Download size={18} /> Download Certificate PDF
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
