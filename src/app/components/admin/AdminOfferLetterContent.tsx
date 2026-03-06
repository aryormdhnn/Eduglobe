import { useState } from "react";
import { Plus, Eye, Download, X, FileText, CheckCircle2, ChevronRight, Mail, Calendar } from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────
interface OfferLetterRecord {
    id: number;
    refNo: string;
    studentName: string;
    studentId: string;
    nationality: string;
    passportNo: string;
    program: string;
    level: string;
    startDate: string;
    endDate: string;
    sessionHours: number;
    tuitionFee: number;
    issuedDate: string;
    status: "Draft" | "Issued";
}

// ── Mock Data ───────────────────────────────────────────────────────────────
const letters: OfferLetterRecord[] = [
    { id: 1, refNo: "OL-EG-2025-001", studentName: "Emma Thompson", studentId: "2024PM00101", nationality: "United Kingdom", passportNo: "P123456", program: "Business English Course", level: "B1-B2", startDate: "10 January 2025", endDate: "10 April 2025", sessionHours: 48, tuitionFee: 3000, issuedDate: "05 Jan 2025", status: "Issued" },
    { id: 2, refNo: "OL-EG-2025-002", studentName: "James Wilson", studentId: "2024PM00102", nationality: "Australia", passportNo: "P234567", program: "Business English Course", level: "B1-B2", startDate: "14 February 2025", endDate: "14 May 2025", sessionHours: 48, tuitionFee: 3000, issuedDate: "10 Feb 2025", status: "Issued" },
    { id: 3, refNo: "OL-EG-2025-003", studentName: "Sophia Martinez", studentId: "2024PM00103", nationality: "Spain", passportNo: "P345678", program: "General English", level: "A2-B1", startDate: "01 March 2025", endDate: "30 June 2025", sessionHours: 64, tuitionFee: 1800, issuedDate: "25 Feb 2025", status: "Draft" },
    { id: 4, refNo: "OL-EG-2025-004", studentName: "Liam Johnson", studentId: "2024PM00104", nationality: "United States", passportNo: "P456789", program: "IELTS Preparation", level: "B2-C1", startDate: "10 March 2025", endDate: "05 May 2025", sessionHours: 32, tuitionFee: 2500, issuedDate: "05 Mar 2025", status: "Issued" },
];

const students = [
    { name: "Emma Thompson", id: "2024PM00101", nationality: "United Kingdom", passportNo: "P123456" },
    { name: "James Wilson", id: "2024PM00102", nationality: "Australia", passportNo: "P234567" },
    { name: "Sophia Martinez", id: "2024PM00103", nationality: "Spain", passportNo: "P345678" },
    { name: "Liam Johnson", id: "2024PM00104", nationality: "United States", passportNo: "P456789" },
    { name: "Olivia Brown", id: "2024PM00105", nationality: "Canada", passportNo: "P567890" },
];

const programs = ["Business English Course", "IELTS Preparation", "General English", "CEFR B2 Intensive"];

// ── Offer Letter Preview ────────────────────────────────────────────────────
function OfferLetterPreview({ letter, onClose }: { letter: OfferLetterRecord; onClose: () => void }) {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-start justify-center p-[24px] overflow-y-auto" onClick={onClose}>
            <div className="bg-white w-full max-w-[720px] rounded-[12px] shadow-2xl my-[20px]" onClick={(e) => e.stopPropagation()}>
                {/* Modal toolbar */}
                <div className="flex items-center justify-between px-[24px] py-[14px] border-b border-[#E5E7EB] print:hidden">
                    <span className="font-['Inter',sans-serif] font-semibold text-[14px] text-[#111827]">Offer Letter Preview</span>
                    <div className="flex items-center gap-[8px]">
                        <button onClick={handlePrint} className="flex items-center gap-[6px] px-[14px] py-[8px] bg-[#155DFC] hover:bg-[#1249CC] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[13px] text-white transition-colors">
                            <Download size={14} />Print / Save
                        </button>
                        <button onClick={onClose} className="size-[34px] flex items-center justify-center rounded-[6px] hover:bg-[#F3F4F6] transition-colors"><X size={16} className="text-[#6B7280]" /></button>
                    </div>
                </div>

                {/* Letter content */}
                <div className="p-[48px] font-['Times_New_Roman',serif]" id="offer-letter-print">
                    {/* Letterhead */}
                    <div className="flex items-start justify-between mb-[32px]">
                        <div>
                            <h1 className="font-['Inter',sans-serif] font-black text-[22px] text-[#155DFC] tracking-wide">EduGlobe</h1>
                            <p className="font-['Inter',sans-serif] text-[11px] text-[#6B7280] leading-[1.8]">
                                Language Centre of Excellence<br />
                                Kuala Lumpur, Malaysia<br />
                                Tel: +60 3-1234 5678 | info@eduglobe.com.my
                            </p>
                        </div>
                        <div className="text-right">
                            <div className="inline-block border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px]">
                                <p className="font-['Inter',sans-serif] text-[11px] text-[#9CA3AF]">Reference No.</p>
                                <p className="font-['Inter',sans-serif] font-bold text-[13px] text-[#111827]">{letter.refNo}</p>
                                <p className="font-['Inter',sans-serif] text-[11px] text-[#9CA3AF] mt-[4px]">Issue Date: {letter.issuedDate}</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t-2 border-[#155DFC] mb-[28px]" />

                    {/* Title */}
                    <div className="text-center mb-[28px]">
                        <h2 className="font-['Inter',sans-serif] font-black text-[18px] text-[#111827] uppercase tracking-widest">Offer Letter</h2>
                        <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280] mt-[4px]">Surat Tawaran Kemasukan / Offer of Admission</p>
                    </div>

                    {/* Salutation */}
                    <p className="text-[14px] text-[#111827] mb-[16px]">
                        To Whom It May Concern,
                    </p>
                    <p className="text-[14px] text-[#374151] leading-[1.8] mb-[24px]">
                        We are pleased to inform that the following student has been <strong>officially accepted</strong> for enrollment
                        at <strong>EduGlobe Language Centre</strong>. Please find below the details of the offer of admission:
                    </p>

                    {/* Student details box */}
                    <div className="border border-[#E5E7EB] rounded-[8px] mb-[24px] overflow-hidden">
                        <div className="bg-[#155DFC] px-[16px] py-[10px]">
                            <p className="font-['Inter',sans-serif] font-bold text-[13px] text-white uppercase tracking-wide">Student Information</p>
                        </div>
                        <div className="grid grid-cols-2 gap-0 divide-y divide-[#F3F4F6]">
                            {[
                                { label: "Full Name", value: letter.studentName },
                                { label: "Student ID", value: letter.studentId },
                                { label: "Nationality", value: letter.nationality },
                                { label: "Passport Number", value: letter.passportNo },
                            ].map((row) => (
                                <div key={row.label} className="flex items-center px-[16px] py-[10px] border-b border-[#F3F4F6] gap-[16px]">
                                    <span className="font-['Inter',sans-serif] text-[12px] text-[#6B7280] w-[140px] shrink-0">{row.label}</span>
                                    <span className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827]">{row.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Course details box */}
                    <div className="border border-[#E5E7EB] rounded-[8px] mb-[24px] overflow-hidden">
                        <div className="bg-[#F97316] px-[16px] py-[10px]">
                            <p className="font-['Inter',sans-serif] font-bold text-[13px] text-white uppercase tracking-wide">Programme Details</p>
                        </div>
                        <div className="divide-y divide-[#F3F4F6]">
                            {[
                                { label: "Programme", value: letter.program },
                                { label: "CEFR Level", value: letter.level },
                                { label: "Commencement Date", value: letter.startDate },
                                { label: "Completion Date", value: letter.endDate },
                                { label: "Total Hours", value: `${letter.sessionHours} hours` },
                                { label: "Tuition Fee", value: `MYR ${letter.tuitionFee.toLocaleString()}` },
                            ].map((row) => (
                                <div key={row.label} className="flex items-center px-[16px] py-[10px] gap-[16px]">
                                    <span className="font-['Inter',sans-serif] text-[12px] text-[#6B7280] w-[160px] shrink-0">{row.label}</span>
                                    <span className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827]">{row.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Conditions */}
                    <p className="text-[13px] text-[#374151] leading-[1.9] mb-[24px]">
                        This offer is subject to the following conditions:
                    </p>
                    <ol className="list-decimal pl-[20px] space-y-[8px] mb-[28px]">
                        {[
                            "The student must present valid identification documents upon registration.",
                            "Full tuition payment must be completed within 7 working days of acceptance.",
                            "The student is required to maintain a minimum 80% attendance throughout the programme.",
                            "This offer letter is valid for 30 days from the date of issue.",
                        ].map((item, i) => (
                            <li key={i} className="text-[13px] text-[#374151] leading-[1.8]">{item}</li>
                        ))}
                    </ol>

                    <p className="text-[13px] text-[#374151] leading-[1.9] mb-[32px]">
                        We look forward to welcoming <strong>{letter.studentName}</strong> to EduGlobe Language Centre.
                        Should you require any further information, please do not hesitate to contact us.
                    </p>

                    {/* Signature */}
                    <div className="flex items-end justify-between">
                        <div>
                            <div className="w-[160px] border-b border-[#111827] mb-[6px] mt-[40px]" />
                            <p className="font-['Inter',sans-serif] font-bold text-[13px] text-[#111827]">Centre Director</p>
                            <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280]">EduGlobe Language Centre</p>
                            <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280]">Date: {letter.issuedDate}</p>
                        </div>
                        <div className="text-right">
                            <div className="inline-block bg-[#EFF6FF] border border-[#155DFC]/20 rounded-[8px] px-[16px] py-[10px]">
                                <p className="font-['Inter',sans-serif] font-bold text-[11px] text-[#155DFC] uppercase tracking-widest">OFFICIAL DOCUMENT</p>
                                <p className="font-['Inter',sans-serif] text-[10px] text-[#9CA3AF] mt-[2px]">{letter.refNo}</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-[#E5E7EB] mt-[32px] pt-[14px] text-center">
                        <p className="font-['Inter',sans-serif] text-[10px] text-[#9CA3AF]">
                            EduGlobe Language Centre · Kuala Lumpur, Malaysia · info@eduglobe.com.my · eduglobe.com.my
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ── Create Offer Letter Form ─────────────────────────────────────────────────
function CreateOfferLetterForm({ onClose }: { onClose: () => void }) {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState({ student: "", program: "", level: "", startDate: "", endDate: "", hours: "48", fee: "" });
    const [done, setDone] = useState(false);
    const student = students.find((s) => s.name === form.student);

    const updateForm = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

    if (done) return (
        <div className="bg-white rounded-[12px] border border-[#E5E7EB] p-[32px] text-center space-y-[14px]">
            <div className="size-[52px] bg-[#DCFCE7] rounded-full flex items-center justify-center mx-auto"><CheckCircle2 size={26} className="text-[#16A34A]" /></div>
            <h3 className="font-['Inter',sans-serif] font-bold text-[16px] text-[#111827]">Offer Letter Generated!</h3>
            <p className="font-['Inter',sans-serif] text-[13px] text-[#6B7280]">Offer letter for <strong>{form.student}</strong> has been created successfully.</p>
            <button onClick={onClose} className="px-[20px] py-[9px] bg-[#155DFC] hover:bg-[#1249CC] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[13px] text-white transition-colors">Done</button>
        </div>
    );

    return (
        <div className="bg-white rounded-[12px] border border-[#E5E7EB] overflow-hidden">
            {/* Step header */}
            <div className="flex items-center gap-0 border-b border-[#E5E7EB]">
                {["Student Info", "Programme Details", "Review"].map((label, i) => (
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
                        <h3 className="font-['Inter',sans-serif] font-bold text-[15px] text-[#111827]">Student Information</h3>
                        <div>
                            <label className="block font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] mb-[5px]">Select Student</label>
                            <select value={form.student} onChange={(e) => updateForm("student", e.target.value)} className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[9px] font-['Inter',sans-serif] text-[13px] outline-none focus:border-[#155DFC] transition-colors">
                                <option value="">— Choose a student —</option>
                                {students.map((s) => <option key={s.id} value={s.name}>{s.name} ({s.id})</option>)}
                            </select>
                        </div>
                        {student && (
                            <div className="grid grid-cols-2 gap-[10px]">
                                {[{ label: "Nationality", value: student.nationality }, { label: "Passport No.", value: student.passportNo }].map((r) => (
                                    <div key={r.label} className="bg-[#F9FAFB] rounded-[8px] px-[12px] py-[10px]">
                                        <p className="font-['Inter',sans-serif] text-[11px] text-[#9CA3AF]">{r.label}</p>
                                        <p className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827]">{r.value}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}

                {step === 2 && (
                    <>
                        <h3 className="font-['Inter',sans-serif] font-bold text-[15px] text-[#111827]">Programme Details</h3>
                        <div className="grid grid-cols-2 gap-[12px]">
                            <div>
                                <label className="block font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] mb-[5px]">Programme</label>
                                <select value={form.program} onChange={(e) => updateForm("program", e.target.value)} className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[9px] font-['Inter',sans-serif] text-[13px] outline-none focus:border-[#155DFC] transition-colors">
                                    <option value="">— Select —</option>
                                    {programs.map((p) => <option key={p}>{p}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] mb-[5px]">CEFR Level</label>
                                <select value={form.level} onChange={(e) => updateForm("level", e.target.value)} className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[9px] font-['Inter',sans-serif] text-[13px] outline-none focus:border-[#155DFC] transition-colors">
                                    <option value="">— Level —</option>
                                    {["A1", "A2", "B1", "B2", "C1", "C2", "A2-B1", "B1-B2", "B2-C1"].map((l) => <option key={l}>{l}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] mb-[5px]">Start Date</label>
                                <input type="date" value={form.startDate} onChange={(e) => updateForm("startDate", e.target.value)} className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[9px] font-['Inter',sans-serif] text-[13px] outline-none focus:border-[#155DFC] transition-colors" />
                            </div>
                            <div>
                                <label className="block font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] mb-[5px]">End Date</label>
                                <input type="date" value={form.endDate} onChange={(e) => updateForm("endDate", e.target.value)} className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[9px] font-['Inter',sans-serif] text-[13px] outline-none focus:border-[#155DFC] transition-colors" />
                            </div>
                            <div>
                                <label className="block font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] mb-[5px]">Total Hours</label>
                                <input type="number" value={form.hours} onChange={(e) => updateForm("hours", e.target.value)} className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[9px] font-['Inter',sans-serif] text-[13px] outline-none focus:border-[#155DFC] transition-colors" placeholder="e.g. 48" />
                            </div>
                            <div>
                                <label className="block font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] mb-[5px]">Tuition Fee (MYR)</label>
                                <input type="number" value={form.fee} onChange={(e) => updateForm("fee", e.target.value)} className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[9px] font-['Inter',sans-serif] text-[13px] outline-none focus:border-[#155DFC] transition-colors" placeholder="e.g. 3000" />
                            </div>
                        </div>
                    </>
                )}

                {step === 3 && (
                    <>
                        <h3 className="font-['Inter',sans-serif] font-bold text-[15px] text-[#111827]">Review & Generate</h3>
                        <div className="bg-[#F9FAFB] rounded-[8px] divide-y divide-[#F3F4F6]">
                            {[
                                { label: "Student", value: form.student }, { label: "Programme", value: form.program },
                                { label: "CEFR Level", value: form.level }, { label: "Start Date", value: form.startDate },
                                { label: "End Date", value: form.endDate }, { label: "Total Hours", value: `${form.hours} hrs` },
                                { label: "Tuition Fee", value: `MYR ${Number(form.fee).toLocaleString()}` },
                            ].map((r) => (
                                <div key={r.label} className="flex items-center gap-[12px] px-[14px] py-[10px]">
                                    <span className="font-['Inter',sans-serif] text-[12px] text-[#6B7280] w-[130px] shrink-0">{r.label}</span>
                                    <span className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827]">{r.value || "—"}</span>
                                </div>
                            ))}
                        </div>
                        <p className="font-['Inter',sans-serif] text-[12px] text-[#9CA3AF]">
                            The offer letter will be generated using EduGlobe brand template with the above details.
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
                        <button onClick={() => setStep(s => s + 1)} disabled={step === 1 && !form.student} className="flex items-center gap-[6px] px-[16px] py-[9px] bg-[#155DFC] hover:bg-[#1249CC] disabled:opacity-40 rounded-[8px] font-['Inter',sans-serif] font-semibold text-[13px] text-white transition-colors">
                            Next<ChevronRight size={14} />
                        </button>
                    ) : (
                        <button onClick={() => setDone(true)} className="flex items-center gap-[7px] px-[16px] py-[9px] bg-[#155DFC] hover:bg-[#1249CC] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[13px] text-white transition-colors">
                            <FileText size={14} />Generate Offer Letter
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

// ── Main Component ──────────────────────────────────────────────────────────
export function AdminOfferLetterContent() {
    const [showForm, setShowForm] = useState(false);
    const [previewLetter, setPreviewLetter] = useState<OfferLetterRecord | null>(null);

    return (
        <>
            {previewLetter && <OfferLetterPreview letter={previewLetter} onClose={() => setPreviewLetter(null)} />}
            <div className="space-y-[20px]">
                <div className="flex items-start justify-between">
                    <div>
                        <h2 className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827]">Generate Offer Letter</h2>
                        <p className="font-['Inter',sans-serif] text-[14px] text-[#6B7280] mt-[4px]">Create official offer letters using the EduGlobe brand template</p>
                    </div>
                    <button onClick={() => setShowForm(true)} className="flex items-center gap-[8px] bg-[#155DFC] hover:bg-[#1249CC] transition-colors text-white px-[16px] py-[10px] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[14px]">
                        <Plus size={16} />Create Offer Letter
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-[14px]">
                    {[
                        { label: "Total Generated", value: letters.length, color: "text-[#155DFC]", bg: "bg-[#EFF6FF]" },
                        { label: "Issued", value: letters.filter(l => l.status === "Issued").length, color: "text-[#16A34A]", bg: "bg-[#DCFCE7]" },
                        { label: "Draft", value: letters.filter(l => l.status === "Draft").length, color: "text-[#CA8A04]", bg: "bg-[#FEF9C3]" },
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

                {showForm && <CreateOfferLetterForm onClose={() => setShowForm(false)} />}

                {/* Letters table */}
                <div className="bg-white rounded-[12px] border border-[#F3F4F6]">
                    <div className="px-[20px] py-[14px] border-b border-[#F3F4F6]">
                        <h3 className="font-['Inter',sans-serif] font-bold text-[14px] text-[#111827]">Generated Offer Letters</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-[#F3F4F6]">
                                    {["Ref No.", "Student Name", "Nationality", "Programme", "Start Date", "End Date", "Fee (MYR)", "Issued Date", "Status", "Actions"].map((col) => (
                                        <th key={col} className="px-[16px] py-[12px] text-left font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] whitespace-nowrap">{col}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {letters.map((l) => (
                                    <tr key={l.id} className="border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors">
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] font-semibold text-[12px] text-[#155DFC] whitespace-nowrap">{l.refNo}</td>
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827] whitespace-nowrap">{l.studentName}</td>
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{l.nationality}</td>
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151]">{l.program}</td>
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151] whitespace-nowrap">{l.startDate}</td>
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151] whitespace-nowrap">{l.endDate}</td>
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827]">{l.tuitionFee.toLocaleString()}</td>
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151] whitespace-nowrap">{l.issuedDate}</td>
                                        <td className="px-[16px] py-[14px]">
                                            <span className={`px-[8px] py-[3px] rounded-full text-[11px] font-semibold font-['Inter',sans-serif] ${l.status === "Issued" ? "bg-[#DCFCE7] text-[#16A34A]" : "bg-[#FEF9C3] text-[#CA8A04]"}`}>{l.status}</span>
                                        </td>
                                        <td className="px-[16px] py-[14px]">
                                            <div className="flex items-center gap-[6px]">
                                                <button onClick={() => setPreviewLetter(l)} className="flex items-center gap-[4px] px-[10px] py-[6px] rounded-[6px] bg-[#F3F4F6] hover:bg-[#E5E7EB] transition-colors">
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
