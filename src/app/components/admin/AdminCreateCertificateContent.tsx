import { useState } from "react";
import { Award, ChevronLeft, CheckCircle2, User, BookOpen, Hash, Calendar, RefreshCw } from "lucide-react";

const students = [
    { id: "ENR001", name: "Emma Thompson" },
    { id: "ENR002", name: "James Wilson" },
    { id: "ENR003", name: "Sophia Martinez" },
    { id: "ENR004", name: "Liam Johnson" },
    { id: "ENR005", name: "Olivia Brown" },
    { id: "ENR006", name: "Noah Davis" },
    { id: "ENR007", name: "Ava Garcia" },
    { id: "ENR008", name: "William Lee" },
    { id: "ENR009", name: "Isabella White" },
    { id: "ENR010", name: "Mason Harris" },
];

const modules = [
    "Introduction to Business Communication",
    "Professional Writing & Email Etiquette",
    "Effective Meetings & Negotiation Skills",
    "Business Presentations & Public Speaking",
    "Sales, Marketing & Customer Communication",
    "Workplace Problem-Solving & Decision Making",
];

function generateCertId() {
    const year = new Date().getFullYear();
    const rand = Math.floor(1000 + Math.random() * 9000);
    return `CERT-${year}-BE-${rand}`;
}

function today() {
    return new Date().toISOString().split("T")[0];
}

function threeYearsFromNow() {
    const d = new Date();
    d.setFullYear(d.getFullYear() + 3);
    return d.toISOString().split("T")[0];
}

interface AdminCreateCertificateContentProps {
    onBack: () => void;
}

export function AdminCreateCertificateContent({ onBack }: AdminCreateCertificateContentProps) {
    const [form, setForm] = useState({
        enrollmentId: "",
        studentName: "",
        module: "",
        course: "Business English Course",
        issueDate: today(),
        expiryDate: threeYearsFromNow(),
        certificateId: generateCertId(),
        notes: "",
    });

    const [submitted, setSubmitted] = useState(false);

    function set(key: string, value: string) {
        setForm((prev) => ({ ...prev, [key]: value }));
    }

    function handleStudentChange(enrollmentId: string) {
        const student = students.find((s) => s.id === enrollmentId);
        setForm((prev) => ({
            ...prev,
            enrollmentId,
            studentName: student?.name ?? "",
        }));
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitted(true);
    }

    if (submitted) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                <div className="bg-white rounded-[20px] border border-[#F3F4F6] p-[56px] max-w-[500px] w-full shadow-sm">
                    <div className="size-[72px] bg-[#DCFCE7] rounded-full flex items-center justify-center mx-auto mb-[24px]">
                        <CheckCircle2 size={36} className="text-[#16A34A]" />
                    </div>
                    <h2 className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827] mb-[8px]">
                        Certificate Issued!
                    </h2>
                    <p className="font-['Inter',sans-serif] text-[14px] text-[#6B7280] mb-[6px]">
                        Certificate successfully issued to
                    </p>
                    <p className="font-['Inter',sans-serif] font-semibold text-[18px] text-[#155DFC] mb-[4px]">
                        {form.studentName}
                    </p>
                    <p className="font-['Inter',sans-serif] text-[13px] text-[#9CA3AF] mb-[32px]">
                        ID: {form.certificateId}
                    </p>
                    <div className="flex gap-[12px] justify-center">
                        <button
                            onClick={() => { setSubmitted(false); setForm((p) => ({ ...p, certificateId: generateCertId() })); }}
                            className="px-[20px] py-[10px] border border-[#E5E7EB] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[14px] text-[#374151] hover:bg-[#f9fafb] transition-colors"
                        >
                            Issue Another
                        </button>
                        <button
                            onClick={onBack}
                            className="px-[20px] py-[10px] bg-[#155DFC] hover:bg-[#1249CC] text-white rounded-[8px] font-['Inter',sans-serif] font-semibold text-[14px] transition-colors"
                        >
                            Back to Certificates
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const previewReady = form.studentName && form.module;

    return (
        <div className="space-y-[20px]">
            {/* Header */}
            <div className="flex items-center gap-[12px]">
                <button
                    onClick={onBack}
                    className="flex items-center gap-[6px] text-[#6B7280] hover:text-[#374151] font-['Inter',sans-serif] text-[14px] transition-colors"
                >
                    <ChevronLeft size={18} />
                    Back
                </button>
                <div className="h-[20px] w-[1px] bg-[#E5E7EB]" />
                <div>
                    <h2 className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827]">
                        Issue New Certificate
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-[1fr_400px] gap-[20px] items-start">
                {/* Form */}
                <form onSubmit={handleSubmit} className="bg-white rounded-[12px] border border-[#F3F4F6] p-[28px] space-y-[20px]">
                    <h3 className="font-['Inter',sans-serif] font-semibold text-[16px] text-[#111827] pb-[4px] border-b border-[#F3F4F6]">
                        Certificate Details
                    </h3>

                    {/* Student */}
                    <div className="space-y-[6px]">
                        <label className="flex items-center gap-[6px] font-['Inter',sans-serif] font-semibold text-[13px] text-[#374151]">
                            <User size={14} className="text-[#9CA3AF]" />
                            Student
                        </label>
                        <select
                            required
                            value={form.enrollmentId}
                            onChange={(e) => handleStudentChange(e.target.value)}
                            className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[10px] font-['Inter',sans-serif] text-[14px] text-[#374151] bg-white focus:outline-none focus:ring-2 focus:ring-[#155DFC]/30 focus:border-[#155DFC] transition-all"
                        >
                            <option value="">Select a student...</option>
                            {students.map((s) => (
                                <option key={s.id} value={s.id}>
                                    {s.name} ({s.id})
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Course */}
                    <div className="space-y-[6px]">
                        <label className="flex items-center gap-[6px] font-['Inter',sans-serif] font-semibold text-[13px] text-[#374151]">
                            <BookOpen size={14} className="text-[#9CA3AF]" />
                            Course
                        </label>
                        <input
                            type="text"
                            value={form.course}
                            onChange={(e) => set("course", e.target.value)}
                            className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[10px] font-['Inter',sans-serif] text-[14px] text-[#374151] focus:outline-none focus:ring-2 focus:ring-[#155DFC]/30 focus:border-[#155DFC] transition-all"
                        />
                    </div>

                    {/* Module */}
                    <div className="space-y-[6px]">
                        <label className="flex items-center gap-[6px] font-['Inter',sans-serif] font-semibold text-[13px] text-[#374151]">
                            <BookOpen size={14} className="text-[#9CA3AF]" />
                            Module Completed
                        </label>
                        <select
                            required
                            value={form.module}
                            onChange={(e) => set("module", e.target.value)}
                            className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[10px] font-['Inter',sans-serif] text-[14px] text-[#374151] bg-white focus:outline-none focus:ring-2 focus:ring-[#155DFC]/30 focus:border-[#155DFC] transition-all"
                        >
                            <option value="">Select a module...</option>
                            {modules.map((m) => (
                                <option key={m} value={m}>{m}</option>
                            ))}
                        </select>
                    </div>

                    {/* Dates row */}
                    <div className="grid grid-cols-2 gap-[16px]">
                        <div className="space-y-[6px]">
                            <label className="flex items-center gap-[6px] font-['Inter',sans-serif] font-semibold text-[13px] text-[#374151]">
                                <Calendar size={14} className="text-[#9CA3AF]" />
                                Issue Date
                            </label>
                            <input
                                type="date"
                                required
                                value={form.issueDate}
                                onChange={(e) => set("issueDate", e.target.value)}
                                className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[10px] font-['Inter',sans-serif] text-[14px] text-[#374151] focus:outline-none focus:ring-2 focus:ring-[#155DFC]/30 focus:border-[#155DFC] transition-all"
                            />
                        </div>
                        <div className="space-y-[6px]">
                            <label className="flex items-center gap-[6px] font-['Inter',sans-serif] font-semibold text-[13px] text-[#374151]">
                                <Calendar size={14} className="text-[#9CA3AF]" />
                                Expiry Date
                            </label>
                            <input
                                type="date"
                                required
                                value={form.expiryDate}
                                onChange={(e) => set("expiryDate", e.target.value)}
                                className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[10px] font-['Inter',sans-serif] text-[14px] text-[#374151] focus:outline-none focus:ring-2 focus:ring-[#155DFC]/30 focus:border-[#155DFC] transition-all"
                            />
                        </div>
                    </div>

                    {/* Certificate ID */}
                    <div className="space-y-[6px]">
                        <label className="flex items-center gap-[6px] font-['Inter',sans-serif] font-semibold text-[13px] text-[#374151]">
                            <Hash size={14} className="text-[#9CA3AF]" />
                            Certificate ID
                        </label>
                        <div className="flex gap-[8px]">
                            <input
                                type="text"
                                value={form.certificateId}
                                onChange={(e) => set("certificateId", e.target.value)}
                                className="flex-1 border border-[#E5E7EB] rounded-[8px] px-[12px] py-[10px] font-['Inter',sans-serif] text-[14px] text-[#374151] focus:outline-none focus:ring-2 focus:ring-[#155DFC]/30 focus:border-[#155DFC] transition-all"
                            />
                            <button
                                type="button"
                                onClick={() => set("certificateId", generateCertId())}
                                className="flex items-center gap-[6px] px-[12px] py-[10px] border border-[#E5E7EB] rounded-[8px] bg-[#F9FAFB] hover:bg-[#F3F4F6] transition-colors"
                                title="Regenerate ID"
                            >
                                <RefreshCw size={14} className="text-[#6B7280]" />
                            </button>
                        </div>
                    </div>

                    {/* Notes */}
                    <div className="space-y-[6px]">
                        <label className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#374151]">
                            Notes <span className="text-[#9CA3AF] font-normal">(optional)</span>
                        </label>
                        <textarea
                            rows={3}
                            value={form.notes}
                            onChange={(e) => set("notes", e.target.value)}
                            placeholder="Add any additional notes..."
                            className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[10px] font-['Inter',sans-serif] text-[14px] text-[#374151] resize-none focus:outline-none focus:ring-2 focus:ring-[#155DFC]/30 focus:border-[#155DFC] transition-all"
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-end gap-[12px] pt-[8px] border-t border-[#F3F4F6]">
                        <button
                            type="button"
                            onClick={onBack}
                            className="px-[20px] py-[10px] border border-[#E5E7EB] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[14px] text-[#374151] hover:bg-[#f9fafb] transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex items-center gap-[8px] px-[24px] py-[10px] bg-[#155DFC] hover:bg-[#1249CC] text-white rounded-[8px] font-['Inter',sans-serif] font-semibold text-[14px] transition-colors"
                        >
                            <Award size={16} />
                            Issue Certificate
                        </button>
                    </div>
                </form>

                {/* Live Preview */}
                <div className="space-y-[12px] sticky top-[84px]">
                    <p className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#374151]">Live Preview</p>
                    <div
                        className={`rounded-[16px] overflow-hidden transition-opacity duration-300 ${previewReady ? "opacity-100" : "opacity-40"
                            }`}
                    >
                        {/* Certificate card */}
                        <div className="bg-gradient-to-br from-[#155DFC] to-[#0D3FA8] p-[32px] text-white text-center relative overflow-hidden">
                            <div className="absolute top-[-24px] right-[-24px] size-[100px] rounded-full bg-white/5" />
                            <div className="absolute bottom-[-16px] left-[-16px] size-[70px] rounded-full bg-white/5" />

                            <Award size={40} className="mx-auto mb-[12px] text-yellow-300" />
                            <p className="font-['Inter',sans-serif] text-[9px] uppercase tracking-[2px] text-blue-200 mb-[6px]">
                                Certificate of Completion
                            </p>
                            <p className="font-['Inter',sans-serif] text-[11px] text-blue-100 mb-[4px]">This is to certify that</p>
                            <p className="font-['Inter',sans-serif] font-bold text-[20px] text-yellow-300 mb-[8px] min-h-[28px]">
                                {form.studentName || "Student Name"}
                            </p>
                            <p className="font-['Inter',sans-serif] text-[10px] text-blue-200 mb-[2px]">has successfully completed</p>
                            <p className="font-['Inter',sans-serif] font-semibold text-[12px] min-h-[18px]">
                                {form.module || "Module Name"}
                            </p>
                            <p className="font-['Inter',sans-serif] text-[10px] text-blue-200 mt-[2px]">{form.course}</p>

                            <div className="mt-[20px] flex justify-center gap-[24px] text-[9px] text-blue-200 border-t border-white/20 pt-[12px]">
                                <div>
                                    <p className="text-white font-semibold mb-[2px]">Issue Date</p>
                                    <p>{form.issueDate || "—"}</p>
                                </div>
                                <div>
                                    <p className="text-white font-semibold mb-[2px]">Expiry Date</p>
                                    <p>{form.expiryDate || "—"}</p>
                                </div>
                                <div>
                                    <p className="text-white font-semibold mb-[2px]">Certificate ID</p>
                                    <p>{form.certificateId}</p>
                                </div>
                            </div>
                        </div>

                        {/* Details below preview */}
                        <div className="bg-white border border-t-0 border-[#E5E7EB] rounded-b-[16px] px-[20px] py-[14px] space-y-[8px]">
                            {[
                                { label: "Student", value: form.studentName || "—" },
                                { label: "Enrollment ID", value: form.enrollmentId || "—" },
                                { label: "Course", value: form.course },
                            ].map((row) => (
                                <div key={row.label} className="flex justify-between text-[12px]">
                                    <span className="text-[#9CA3AF] font-['Inter',sans-serif]">{row.label}</span>
                                    <span className="text-[#374151] font-semibold font-['Inter',sans-serif] text-right max-w-[180px] truncate">{row.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {!previewReady && (
                        <p className="font-['Inter',sans-serif] text-[12px] text-[#9CA3AF] text-center mt-[8px]">
                            Select a student and module to see preview
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
