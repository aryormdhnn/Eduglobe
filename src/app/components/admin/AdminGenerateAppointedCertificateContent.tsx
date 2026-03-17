import { useState } from "react";
import { Award, ChevronLeft, CheckCircle2, User, BookOpen, Hash, Calendar, RefreshCw, Eye, Download, X, Plus, ChevronRight } from "lucide-react";

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
const mockCerts: AppointedCertRecord[] = [
    { id: 1, certificateId: "APPT-2025-1082", agentName: "EduBridge Partners", agentId: "AGT001", type: "New", startDate: "2025-01-02", endDate: "2025-12-31", status: "Active", createdDate: "02 Jan 2025" },
    { id: 2, certificateId: "APPT-2025-4421", agentName: "Global Study Link", agentId: "AGT002", type: "Renewal", startDate: "2024-03-01", endDate: "2024-12-31", status: "Expired", createdDate: "01 Mar 2024" },
];

const agents = [
    { id: "AGT001", name: "EduBridge Partners", country: "Indonesia" },
    { id: "AGT002", name: "Global Study Link", country: "Malaysia" },
    { id: "AGT003", name: "Future Pathways Ltd", country: "China" },
];


function generateCertId() {
    const year = new Date().getFullYear();
    const rand = Math.floor(1000 + Math.random() * 9000);
    return `APPT-${year}-${rand}`;
}

function today() {
    return new Date().toISOString().split("T")[0];
}

function endOfYear() {
    const d = new Date();
    return `${d.getFullYear()}-12-31`;
}

function formatDate(dateStr: string) {
    if (!dateStr) return "—";
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

// ── Certificate Preview Modal ────────────────────────────────────────────────
function CertificatePreview({ cert, onClose }: { cert: AppointedCertRecord; onClose: () => void }) {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-start justify-center p-[24px] overflow-y-auto" onClick={onClose}>
            <div className="bg-white w-full max-w-[1056px] min-h-[816px] relative shadow-2xl my-[20px] mx-auto overflow-hidden print:m-0 print:shadow-none print:w-full print:h-screen landscape:print:block flex flex-col" onClick={(e) => e.stopPropagation()}>
                {/* Modal toolbar (hidden in print) */}
                <div className="flex items-center justify-between px-[24px] py-[14px] border-b border-[#E5E7EB] print:hidden bg-white relative z-50 shrink-0">
                    <span className="font-['Inter',sans-serif] font-semibold text-[14px] text-[#111827]">Certificate Preview</span>
                    <div className="flex items-center gap-[8px]">
                        <button onClick={handlePrint} className="flex items-center gap-[6px] px-[14px] py-[8px] bg-[#155DFC] hover:bg-[#1249CC] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[13px] text-white transition-colors">
                            <Download size={14} />Print
                        </button>
                        <button onClick={onClose} className="size-[34px] flex items-center justify-center rounded-[6px] hover:bg-[#F3F4F6] transition-colors"><X size={16} className="text-[#6B7280]" /></button>
                    </div>
                </div>

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
        </div>
    );
}


// ── Create Appointed Certificate Form ───────────────────────────────────────
function CreateAppointedCertificateForm({ onClose }: { onClose: () => void }) {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState({ agentId: "", agentName: "", type: "New", startDate: today(), endDate: endOfYear(), notes: "" });
    const [done, setDone] = useState(false);
    
    const agent = agents.find((a) => a.id === form.agentId);

    const updateForm = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

    const handleAgentSelect = (val: string) => {
        const agt = agents.find((a) => a.id === val);
        setForm(f => ({ ...f, agentId: val, agentName: agt?.name || "" }));
    }

    if (done) return (
        <div className="bg-white rounded-[12px] border border-[#E5E7EB] p-[32px] text-center space-y-[14px] mb-[20px]">
            <div className="size-[52px] bg-[#DCFCE7] rounded-full flex items-center justify-center mx-auto"><CheckCircle2 size={26} className="text-[#16A34A]" /></div>
            <h3 className="font-['Inter',sans-serif] font-bold text-[16px] text-[#111827]">Certificate Generated!</h3>
            <p className="font-['Inter',sans-serif] text-[13px] text-[#6B7280]">Appointed Representative Certificate for <strong>{form.agentName}</strong> has been created successfully.</p>
            <button onClick={onClose} className="px-[20px] py-[9px] bg-[#155DFC] hover:bg-[#1249CC] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[13px] text-white transition-colors">Done</button>
        </div>
    );

    return (
        <div className="bg-white rounded-[12px] border border-[#E5E7EB] overflow-hidden mb-[20px]">
            <div className="flex items-center gap-0 border-b border-[#E5E7EB]">
                {["Representative", "Duration", "Review"].map((label, i) => (
                    <div key={label} className={`flex-1 flex items-center gap-[6px] px-[16px] py-[12px] ${step === i + 1 ? "bg-[#EFF6FF] border-b-2 border-[#155DFC]" : "bg-white"}`}>
                        <div className={`size-[20px] rounded-full flex items-center justify-center text-[11px] font-bold font-['Inter',sans-serif] ${step >= i + 1 ? "bg-[#155DFC] text-white" : "bg-[#F3F4F6] text-[#9CA3AF]"}`}>{i + 1}</div>
                        <span className={`font-['Inter',sans-serif] text-[12px] font-semibold ${step === i + 1 ? "text-[#155DFC]" : "text-[#9CA3AF]"}`}>{label}</span>
                    </div>
                ))}
                <button onClick={onClose} className="px-[14px] flex items-center justify-center hover:bg-[#F3F4F6] self-stretch transition-colors"><X size={16} className="text-[#6B7280]" /></button>
            </div>

            <div className="p-[24px] space-y-[14px]">
                {step === 1 && (
                    <>
                        <h3 className="font-['Inter',sans-serif] font-bold text-[15px] text-[#111827]">Select Representative</h3>
                        <div>
                            <label className="block font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] mb-[5px]">Agent / Partner</label>
                            <select value={form.agentId} onChange={(e) => handleAgentSelect(e.target.value)} className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[9px] font-['Inter',sans-serif] text-[13px] outline-none focus:border-[#155DFC] transition-colors">
                                <option value="">— Choose a representative —</option>
                                {agents.map((a) => <option key={a.id} value={a.id}>{a.name} ({a.country})</option>)}
                            </select>
                        </div>
                        {agent && (
                            <div className="bg-[#F9FAFB] rounded-[8px] px-[12px] py-[10px]">
                                <p className="font-['Inter',sans-serif] text-[11px] text-[#9CA3AF]">Selected Representative</p>
                                <p className="font-['Inter',sans-serif] font-semibold text-[14px] text-[#111827] mt-[2px]">{agent.name}</p>
                                <p className="font-['Inter',sans-serif] text-[12px] text-[#4B5563]">{agent.country} ({agent.id})</p>
                            </div>
                        )}
                    </>
                )}

                {step === 2 && (
                    <>
                        <h3 className="font-['Inter',sans-serif] font-bold text-[15px] text-[#111827]">Duration details</h3>
                        <div className="space-y-[12px]">
                            <div>
                                <label className="block font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] mb-[6px]">Certificate Type</label>
                                <div className="flex gap-[16px] items-center">
                                    <label className="flex items-center gap-[6px] cursor-pointer">
                                        <input type="radio" name="certificateType" value="New" checked={form.type === "New"} onChange={(e) => updateForm("type", e.target.value)} className="accent-[#155DFC] size-[16px]" />
                                        <span className="font-['Inter',sans-serif] text-[13px] text-[#374151]">New</span>
                                    </label>
                                    <label className="flex items-center gap-[6px] cursor-pointer">
                                        <input type="radio" name="certificateType" value="Renewal" checked={form.type === "Renewal"} onChange={(e) => updateForm("type", e.target.value)} className="accent-[#155DFC] size-[16px]" />
                                        <span className="font-['Inter',sans-serif] text-[13px] text-[#374151]">Renewal</span>
                                    </label>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-[12px] pt-[8px]">
                                <div>
                                    <label className="block font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] mb-[5px]">Date of Issue (Start)</label>
                                    <input type="date" value={form.startDate} onChange={(e) => updateForm("startDate", e.target.value)} className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[9px] font-['Inter',sans-serif] text-[13px] outline-none focus:border-[#155DFC] transition-colors" />
                                </div>
                                <div>
                                    <label className="block font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] mb-[5px]">Expiry Date (End)</label>
                                    <input type="date" value={form.endDate} onChange={(e) => updateForm("endDate", e.target.value)} className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[9px] font-['Inter',sans-serif] text-[13px] outline-none focus:border-[#155DFC] transition-colors" />
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {step === 3 && (
                    <>
                        <h3 className="font-['Inter',sans-serif] font-bold text-[15px] text-[#111827]">Review & Generate</h3>
                        <div className="bg-[#F9FAFB] rounded-[8px] divide-y divide-[#F3F4F6]">
                            {[
                                { label: "Representative", value: form.agentName },
                                { label: "Type", value: form.type },
                                { label: "Date of Issue", value: form.startDate },
                                { label: "Expiry Date", value: form.endDate },
                            ].map((r) => (
                                <div key={r.label} className="flex items-center gap-[12px] px-[14px] py-[10px]">
                                    <span className="font-['Inter',sans-serif] text-[12px] text-[#6B7280] w-[130px] shrink-0">{r.label}</span>
                                    <span className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827]">{r.value || "—"}</span>
                                </div>
                            ))}
                        </div>
                        <p className="font-['Inter',sans-serif] text-[12px] text-[#9CA3AF]">
                            The Appointed Representative Certificate will be ready to print and sign upon generation.
                        </p>
                    </>
                )}

                <div className="flex justify-between pt-[4px]">
                    {step > 1 ? (
                        <button onClick={() => setStep(s => s - 1)} className="px-[16px] py-[9px] border border-[#E5E7EB] rounded-[8px] font-['Inter',sans-serif] text-[13px] text-[#374151] hover:bg-[#F9FAFB] transition-colors">Back</button>
                    ) : (
                        <button onClick={onClose} className="px-[16px] py-[9px] border border-[#E5E7EB] rounded-[8px] font-['Inter',sans-serif] text-[13px] text-[#374151] hover:bg-[#F9FAFB] transition-colors">Cancel</button>
                    )}
                    {step < 3 ? (
                        <button onClick={() => setStep(s => s + 1)} disabled={step === 1 && !form.agentId} className="flex items-center gap-[6px] px-[16px] py-[9px] bg-[#155DFC] hover:bg-[#1249CC] disabled:opacity-40 rounded-[8px] font-['Inter',sans-serif] font-semibold text-[13px] text-white transition-colors">
                            Next<ChevronRight size={14} />
                        </button>
                    ) : (
                        <button onClick={() => setDone(true)} className="flex items-center gap-[7px] px-[16px] py-[9px] bg-[#155DFC] hover:bg-[#1249CC] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[13px] text-white transition-colors">
                            <Award size={14} />Generate Certificate
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

// ── Main Component ──────────────────────────────────────────────────────────
export function AdminGenerateAppointedCertificateContent() {
    const [showForm, setShowForm] = useState(false);
    const [previewCert, setPreviewCert] = useState<AppointedCertRecord | null>(null);

    return (
        <>
            {previewCert && <CertificatePreview cert={previewCert} onClose={() => setPreviewCert(null)} />}
            
            <div className="space-y-[20px]">
                <div className="flex items-start justify-between">
                    <div>
                        <h2 className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827]">Generate Appointed Representative Certificate</h2>
                        <p className="font-['Inter',sans-serif] text-[14px] text-[#6B7280] mt-[4px]">Create official appointment certificates for admission representatives</p>
                    </div>
                    <button onClick={() => setShowForm(true)} className="flex items-center gap-[8px] bg-[#155DFC] hover:bg-[#1249CC] transition-colors text-white px-[16px] py-[10px] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[14px]">
                        <Plus size={16} />Generate Certificate
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-[14px]">
                    {[
                        { label: "Total Generated", value: mockCerts.length, color: "text-[#155DFC]", bg: "bg-[#EFF6FF]" },
                        { label: "Active", value: mockCerts.filter(l => l.status === "Active").length, color: "text-[#16A34A]", bg: "bg-[#DCFCE7]" },
                        { label: "Expired", value: mockCerts.filter(l => l.status === "Expired").length, color: "text-[#EF4444]", bg: "bg-[#FEE2E2]" },
                    ].map((c) => (
                        <div key={c.label} className={`${c.bg} rounded-[12px] p-[16px] flex items-center gap-[14px]`}>
                            <Award size={24} className={c.color} />
                            <div>
                                <p className={`font-['Inter',sans-serif] font-bold text-[28px] ${c.color}`}>{c.value}</p>
                                <p className={`font-['Inter',sans-serif] text-[13px] ${c.color}`}>{c.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {showForm && <CreateAppointedCertificateForm onClose={() => setShowForm(false)} />}

                {/* Table */}
                <div className="bg-white rounded-[12px] border border-[#F3F4F6]">
                    <div className="px-[20px] py-[14px] border-b border-[#F3F4F6]">
                        <h3 className="font-['Inter',sans-serif] font-bold text-[14px] text-[#111827]">Generated Certificates</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-[#F3F4F6]">
                                    {["Certificate ID", "Representative", "Type", "Start Date", "End Date", "Status", "Actions"].map((col) => (
                                        <th key={col} className="px-[16px] py-[12px] text-left font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] whitespace-nowrap">{col}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {mockCerts.map((c) => (
                                    <tr key={c.id} className="border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors">
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] font-semibold text-[12px] text-[#155DFC] whitespace-nowrap">{c.certificateId}</td>
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827] whitespace-nowrap">{c.agentName}</td>
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151]">{c.type}</td>
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151] whitespace-nowrap">{c.startDate}</td>
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151] whitespace-nowrap">{c.endDate}</td>
                                        <td className="px-[16px] py-[14px]">
                                            <span className={`px-[8px] py-[3px] rounded-full text-[11px] font-semibold font-['Inter',sans-serif] ${c.status === "Active" ? "bg-[#DCFCE7] text-[#16A34A]" : "bg-[#FEE2E2] text-[#EF4444]"}`}>{c.status}</span>
                                        </td>
                                        <td className="px-[16px] py-[14px]">
                                            <div className="flex items-center gap-[6px]">
                                                <button onClick={() => setPreviewCert(c)} className="flex items-center gap-[4px] px-[10px] py-[6px] rounded-[6px] bg-[#F3F4F6] hover:bg-[#E5E7EB] transition-colors">
                                                    <Eye size={13} className="text-[#374151]" /><span className="font-['Inter',sans-serif] text-[12px] text-[#374151]">View</span>
                                                </button>
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
