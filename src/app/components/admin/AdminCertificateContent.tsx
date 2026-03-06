import { useState } from "react";
import {
    Search,
    SlidersHorizontal,
    Download,
    Eye,
    Award,
    CheckCircle2,
    Clock,
    ChevronLeft,
    ChevronRight,
    Plus,
    X,
    Printer,
} from "lucide-react";
import { getReportByEnrollmentId, gradesKey } from "../../data/studentReports";

interface CertRecord {
    id: number;
    enrollmentId: string;
    studentName: string;
    course: string;
    module: string;
    issueDate: string;
    expiryDate: string;
    certificateId: string;
    status: "issued" | "pending" | "expired";
}

const certificates: CertRecord[] = [
    { id: 1, enrollmentId: "ENR001", studentName: "Emma Thompson", course: "Business English Course", module: "Introduction to Business Communication", issueDate: "2024-01-15", expiryDate: "2027-01-15", certificateId: "CERT-2024-BE-001", status: "issued" },
    { id: 2, enrollmentId: "ENR002", studentName: "James Wilson", course: "Business English Course", module: "Professional Writing & Email Etiquette", issueDate: "2024-02-20", expiryDate: "2027-02-20", certificateId: "CERT-2024-BE-002", status: "issued" },
    { id: 3, enrollmentId: "ENR003", studentName: "Sophia Martinez", course: "Business English Course", module: "Effective Meetings & Negotiation Skills", issueDate: "", expiryDate: "", certificateId: "", status: "pending" },
    { id: 4, enrollmentId: "ENR004", studentName: "Liam Johnson", course: "Business English Course", module: "Business Presentations & Public Speaking", issueDate: "2024-03-10", expiryDate: "2027-03-10", certificateId: "CERT-2024-BE-004", status: "issued" },
    { id: 5, enrollmentId: "ENR005", studentName: "Olivia Brown", course: "Business English Course", module: "Sales, Marketing & Customer Communication", issueDate: "", expiryDate: "", certificateId: "", status: "pending" },
    { id: 6, enrollmentId: "ENR006", studentName: "Noah Davis", course: "Business English Course", module: "Workplace Problem-Solving & Decision Making", issueDate: "2023-11-05", expiryDate: "2024-11-05", certificateId: "CERT-2023-BE-006", status: "expired" },
    { id: 7, enrollmentId: "ENR007", studentName: "Ava Garcia", course: "Business English Course", module: "Introduction to Business Communication", issueDate: "2024-04-01", expiryDate: "2027-04-01", certificateId: "CERT-2024-BE-007", status: "issued" },
    { id: 8, enrollmentId: "ENR008", studentName: "William Lee", course: "Business English Course", module: "Professional Writing & Email Etiquette", issueDate: "", expiryDate: "", certificateId: "", status: "pending" },
    { id: 9, enrollmentId: "ENR009", studentName: "Isabella White", course: "Business English Course", module: "Effective Meetings & Negotiation Skills", issueDate: "2024-05-12", expiryDate: "2027-05-12", certificateId: "CERT-2024-BE-009", status: "issued" },
    { id: 10, enrollmentId: "ENR010", studentName: "Mason Harris", course: "Business English Course", module: "Business Presentations & Public Speaking", issueDate: "2022-06-20", expiryDate: "2023-06-20", certificateId: "CERT-2022-BE-010", status: "expired" },
];

const statusConfig = {
    issued: { label: "Issued", color: "bg-[#DCFCE7] text-[#16A34A]", icon: <CheckCircle2 size={12} /> },
    pending: { label: "Pending", color: "bg-[#FEF9C3] text-[#CA8A04]", icon: <Clock size={12} /> },
    expired: { label: "Expired", color: "bg-[#FEE2E2] text-[#DC2626]", icon: <X size={12} /> },
};

interface PreviewModalProps {
    cert: CertRecord;
    onClose: () => void;
}

function CertificatePreviewModal({ cert, onClose }: PreviewModalProps) {
    const report = getReportByEnrollmentId(cert.enrollmentId);

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-start justify-center p-[24px] overflow-y-auto" onClick={onClose}>
            <div
                className="bg-white w-full max-w-[720px] rounded-[12px] overflow-hidden shadow-2xl my-[24px]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal toolbar */}
                <div className="flex items-center justify-between px-[24px] py-[14px] border-b border-[#E5E7EB]">
                    <p className="font-['Inter',sans-serif] font-semibold text-[15px] text-[#111827]">
                        Certificate &amp; Progress Report
                    </p>
                    <div className="flex items-center gap-[8px]">
                        <button
                            onClick={() => window.print()}
                            className="flex items-center gap-[6px] px-[12px] py-[7px] bg-[#F9FAFB] border border-[#E5E7EB] rounded-[7px] hover:bg-[#F3F4F6] transition-colors"
                        >
                            <Printer size={15} className="text-[#374151]" />
                            <span className="font-['Inter',sans-serif] text-[13px] font-semibold text-[#374151]">Print</span>
                        </button>
                        <button
                            className="flex items-center gap-[6px] px-[12px] py-[7px] bg-[#155DFC] hover:bg-[#1249CC] rounded-[7px] transition-colors"
                        >
                            <Download size={15} className="text-white" />
                            <span className="font-['Inter',sans-serif] text-[13px] font-semibold text-white">Download PDF</span>
                        </button>
                        <button onClick={onClose} className="flex items-center justify-center size-[34px] rounded-[7px] hover:bg-[#F3F4F6] transition-colors">
                            <X size={18} className="text-[#6B7280]" />
                        </button>
                    </div>
                </div>

                <div className="p-[32px] space-y-[32px]">
                    {/* ── DOCUMENT 1: CERTIFICATE ── */}
                    <div>
                        <p className="font-['Inter',sans-serif] font-semibold text-[12px] text-[#9CA3AF] uppercase tracking-wider mb-[12px]">
                            01 — Certificate of Completion
                        </p>
                        <div className="bg-gradient-to-br from-[#155DFC] to-[#0D3FA8] p-[40px] text-white text-center relative overflow-hidden rounded-[12px]">
                            <div className="absolute top-[-30px] right-[-30px] size-[120px] rounded-full bg-white/5" />
                            <div className="absolute bottom-[-20px] left-[-20px] size-[80px] rounded-full bg-white/5" />
                            <Award size={48} className="mx-auto mb-[16px] text-yellow-300" />
                            <p className="font-['Inter',sans-serif] text-[11px] uppercase tracking-[3px] text-blue-200 mb-[8px]">
                                Certificate of Completion
                            </p>
                            <p className="font-['Inter',sans-serif] font-bold text-[18px] mb-[8px]">This is to certify that</p>
                            <h1 className="font-['Inter',sans-serif] font-bold text-[30px] text-yellow-300 mb-[16px]">
                                {cert.studentName}
                            </h1>
                            <p className="font-['Inter',sans-serif] text-[14px] text-blue-100 mb-[4px]">has successfully completed</p>
                            <p className="font-['Inter',sans-serif] font-semibold text-[16px]">{cert.module}</p>
                            <p className="font-['Inter',sans-serif] text-[13px] text-blue-200 mt-[4px]">{cert.course}</p>
                            <div className="mt-[24px] flex justify-center gap-[40px] text-[12px] text-blue-200 border-t border-white/20 pt-[16px]">
                                <div>
                                    <p className="text-white font-semibold mb-[2px]">Issue Date</p>
                                    <p>{cert.issueDate}</p>
                                </div>
                                <div>
                                    <p className="text-white font-semibold mb-[2px]">Expiry Date</p>
                                    <p>{cert.expiryDate}</p>
                                </div>
                                <div>
                                    <p className="text-white font-semibold mb-[2px]">Certificate ID</p>
                                    <p>{cert.certificateId}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-[12px]">
                        <div className="flex-1 h-[1px] bg-[#E5E7EB]" />
                        <span className="font-['Inter',sans-serif] text-[12px] text-[#9CA3AF] font-medium">Progress Report</span>
                        <div className="flex-1 h-[1px] bg-[#E5E7EB]" />
                    </div>

                    {/* ── DOCUMENT 2: PROGRESS REPORT ── */}
                    {report ? (
                        <div>
                            <p className="font-['Inter',sans-serif] font-semibold text-[12px] text-[#9CA3AF] uppercase tracking-wider mb-[12px]">
                                02 — Progress Report
                            </p>
                            <div className="border border-[#E5E7EB] rounded-[12px] p-[32px] bg-white">
                                {/* Report Header */}
                                <div className="flex items-start justify-between mb-[28px]">
                                    <h2 className="font-['Inter',sans-serif] font-black text-[22px] text-[#F97316] uppercase tracking-wide">
                                        PROGRESS REPORT
                                    </h2>
                                    <div className="flex items-center gap-[10px]">
                                        <div className="border-2 border-[#F97316] rounded-[8px] px-[12px] py-[6px] flex items-center justify-center">
                                            <Award size={22} className="text-[#F97316]" />
                                        </div>
                                        <div>
                                            <p className="font-['Inter',sans-serif] font-bold text-[13px] text-[#111827]">EduGlobe</p>
                                            <p className="font-['Inter',sans-serif] text-[11px] text-[#6B7280]">Language Centres</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Student info */}
                                <div className="mb-[24px]">
                                    <h3 className="font-['Inter',sans-serif] font-black text-[18px] text-[#111827] mb-[2px]">
                                        {report.name.toUpperCase()}
                                    </h3>
                                    <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280] mb-[14px]">
                                        STUDENT ID: {report.studentId}
                                    </p>
                                    <div className="grid grid-cols-[auto_1fr] gap-x-[12px] gap-y-[5px] max-w-[420px]">
                                        {[
                                            { label: "Nationality", value: report.nationality },
                                            { label: "Programme", value: report.programme },
                                            { label: "Session", value: report.session },
                                            { label: "Dates", value: report.dates },
                                            { label: "Level", value: report.level },
                                            { label: "Centre", value: report.centre },
                                        ].map((row) => (
                                            <div key={row.label} className="contents">
                                                <span className="bg-[#4B5563] text-white font-['Inter',sans-serif] text-[10px] font-semibold px-[8px] py-[2px] rounded-[3px] whitespace-nowrap self-center">
                                                    {row.label}
                                                </span>
                                                <span className="font-['Inter',sans-serif] text-[12px] text-[#374151] self-center">{row.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Grade section header */}
                                <div className="bg-[#9CA3AF] px-[14px] py-[6px] rounded-t-[4px]">
                                    <h4 className="font-['Inter',sans-serif] font-semibold text-[13px] text-white">
                                        Grade Result and Attendance
                                    </h4>
                                </div>

                                {/* Table + grades key side by side */}
                                <div className="flex gap-[24px] items-start">
                                    <div className="flex-1">
                                        <table className="w-full border-collapse border border-[#D1D5DB]">
                                            <thead>
                                                <tr className="bg-[#F9FAFB]">
                                                    {["Class", "Teacher", "Grade", "Attendance"].map((col) => (
                                                        <th key={col} className="border border-[#D1D5DB] px-[10px] py-[7px] font-['Inter',sans-serif] font-semibold text-[11px] text-[#374151] text-center">
                                                            {col}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {report.subjects.map((subj, i) => (
                                                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"}>
                                                        <td className="border border-[#D1D5DB] px-[10px] py-[7px] font-['Inter',sans-serif] text-[11px] text-[#374151]">{subj.className}</td>
                                                        <td className="border border-[#D1D5DB] px-[10px] py-[7px] font-['Inter',sans-serif] text-[11px] text-[#374151] text-center whitespace-nowrap">{subj.teacher}</td>
                                                        <td className="border border-[#D1D5DB] px-[10px] py-[7px] font-['Inter',sans-serif] font-bold text-[11px] text-center">{subj.grade}</td>
                                                        <td className="border border-[#D1D5DB] px-[10px] py-[7px] font-['Inter',sans-serif] text-[11px] text-center">{subj.attendance}</td>
                                                    </tr>
                                                ))}
                                                <tr><td colSpan={4} className="border border-[#D1D5DB] py-[6px]" /></tr>
                                                <tr className="bg-[#F3F4F6]">
                                                    <td colSpan={2} className="border border-[#D1D5DB] px-[10px] py-[7px] font-['Inter',sans-serif] font-bold text-[11px] text-[#111827]">
                                                        Overall Result &amp; Attendance
                                                    </td>
                                                    <td className="border border-[#D1D5DB] px-[10px] py-[7px] font-['Inter',sans-serif] font-bold text-[11px] text-center">({report.overallResult})</td>
                                                    <td className="border border-[#D1D5DB] px-[10px] py-[7px] font-['Inter',sans-serif] font-bold text-[11px] text-center">{report.overallAttendance}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* Grades key */}
                                    <div className="shrink-0 min-w-[160px] pt-[2px]">
                                        <p className="font-['Inter',sans-serif] font-bold text-[10px] text-[#111827] mb-[6px] text-center tracking-wide">GRADES / RESULTS</p>
                                        <div className="space-y-[3px]">
                                            {gradesKey.map((g) => (
                                                <div key={g.letter} className="flex items-center gap-[6px]">
                                                    <span className="font-['Inter',sans-serif] text-[10px] text-[#6B7280] w-[64px]">{g.range}</span>
                                                    <span className="font-['Inter',sans-serif] font-bold text-[10px] text-[#111827] w-[12px]">{g.letter}</span>
                                                    <span className="font-['Inter',sans-serif] text-[10px] text-[#374151]">{g.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="border border-dashed border-[#E5E7EB] rounded-[12px] p-[32px] text-center">
                            <p className="font-['Inter',sans-serif] text-[14px] text-[#9CA3AF]">No progress report found for this student.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

interface AdminCertificateContentProps {
    onCreateCertificate: () => void;
}

export function AdminCertificateContent({ onCreateCertificate }: AdminCertificateContentProps) {
    const [search, setSearch] = useState("");
    const [filterStatus, setFilterStatus] = useState<"all" | "issued" | "pending" | "expired">("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [previewCert, setPreviewCert] = useState<CertRecord | null>(null);

    const issued = certificates.filter((c) => c.status === "issued").length;
    const pending = certificates.filter((c) => c.status === "pending").length;
    const expired = certificates.filter((c) => c.status === "expired").length;

    const filtered = certificates.filter((c) => {
        const matchSearch = c.studentName.toLowerCase().includes(search.toLowerCase()) ||
            c.certificateId.toLowerCase().includes(search.toLowerCase());
        const matchStatus = filterStatus === "all" || c.status === filterStatus;
        return matchSearch && matchStatus;
    });

    return (
        <>
            {previewCert && (
                <CertificatePreviewModal cert={previewCert} onClose={() => setPreviewCert(null)} />
            )}

            <div className="space-y-[20px]">
                {/* Page Header */}
                <div className="flex items-start justify-between">
                    <div>
                        <h2 className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827]">
                            Certificate Management
                        </h2>
                        <p className="font-['Inter',sans-serif] font-normal text-[14px] text-[#6B7280] mt-[4px]">
                            Manage and issue student certificates for each completed module
                        </p>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <button onClick={onCreateCertificate} className="flex items-center gap-[8px] bg-[#155DFC] hover:bg-[#1249CC] transition-colors text-white px-[16px] py-[10px] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[14px]">
                            <Plus size={16} />
                            Issue Certificate
                        </button>
                        <button className="flex items-center gap-[8px] border border-[#E5E7EB] rounded-[8px] bg-white hover:bg-[#f9fafb] px-[14px] py-[10px] transition-colors">
                            <Download size={16} className="text-[#374151]" />
                            <span className="font-['Inter',sans-serif] font-normal text-[14px] text-[#374151]">Export</span>
                        </button>
                    </div>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-3 gap-[16px]">
                    {[
                        { label: "Total Issued", value: issued, icon: <CheckCircle2 size={20} className="text-[#155DFC]" />, sub: `${issued} certificates active`, subColor: "text-[#22C55E]" },
                        { label: "Pending Approval", value: pending, icon: <Clock size={20} className="text-[#CA8A04]" />, sub: "Awaiting review", subColor: "text-[#CA8A04]" },
                        { label: "Expired", value: expired, icon: <X size={20} className="text-[#DC2626]" />, sub: "Need renewal", subColor: "text-[#DC2626]" },
                    ].map((card) => (
                        <div key={card.label} className="bg-white rounded-[12px] border border-[#F3F4F6] p-[20px]">
                            <div className="flex items-center gap-[10px] mb-[12px]">
                                <div className="bg-[#EFF6FF] rounded-[8px] p-[8px]">{card.icon}</div>
                                <span className="font-['Inter',sans-serif] text-[14px] text-[#6B7280]">{card.label}</span>
                            </div>
                            <p className="font-['Inter',sans-serif] font-bold text-[28px] text-[#111827]">{card.value}</p>
                            <p className={`font-['Inter',sans-serif] text-[13px] mt-[4px] ${card.subColor}`}>{card.sub}</p>
                        </div>
                    ))}
                </div>

                {/* Table Card */}
                <div className="bg-white rounded-[12px] border border-[#F3F4F6]">
                    {/* Filters */}
                    <div className="flex items-center justify-between px-[20px] py-[16px] border-b border-[#F3F4F6] gap-[12px] flex-wrap">
                        <div className="flex items-center gap-[4px] bg-[#F3F4F6] p-[4px] rounded-[10px]">
                            {(["all", "issued", "pending", "expired"] as const).map((s) => (
                                <button
                                    key={s}
                                    onClick={() => setFilterStatus(s)}
                                    className={`px-[14px] py-[7px] rounded-[7px] font-['Inter',sans-serif] text-[13px] capitalize transition-colors ${filterStatus === s
                                        ? "bg-white text-[#111827] font-semibold shadow-sm"
                                        : "text-[#6B7280] hover:text-[#374151]"
                                        }`}
                                >
                                    {s === "all" ? "All" : s.charAt(0).toUpperCase() + s.slice(1)}
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-[10px]">
                            <div className="bg-[#f6f6f6] flex items-center gap-[8px] px-[12px] py-[8px] rounded-full w-[220px]">
                                <Search size={14} className="text-[#a0a0a0] shrink-0" />
                                <input
                                    className="bg-transparent font-['Inter',sans-serif] text-[13px] text-[#374151] outline-none flex-1 placeholder:text-[#a0a0a0]"
                                    placeholder="Search student or ID..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            <button className="flex items-center gap-[6px] border border-[#E5E7EB] rounded-full bg-white hover:bg-[#f9fafb] px-[14px] py-[8px] transition-colors">
                                <SlidersHorizontal size={14} className="text-[#374151]" />
                                <span className="font-['Inter',sans-serif] text-[13px] text-[#374151]">Filter</span>
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-[#F3F4F6]">
                                    {["No.", "Enrollment ID", "Student Name", "Module", "Certificate ID", "Issue Date", "Expiry Date", "Status", "Actions"].map((col) => (
                                        <th key={col} className="px-[16px] py-[12px] text-left font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] whitespace-nowrap">
                                            {col}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((cert, idx) => {
                                    const sc = statusConfig[cert.status];
                                    return (
                                        <tr key={cert.id} className="border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors">
                                            <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{idx + 1}.</td>
                                            <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{cert.enrollmentId}</td>
                                            <td className="px-[16px] py-[14px] font-['Inter',sans-serif] font-medium text-[13px] text-[#111827] whitespace-nowrap">{cert.studentName}</td>
                                            <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151] max-w-[200px]">{cert.module}</td>
                                            <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#155DFC] font-medium whitespace-nowrap">
                                                {cert.certificateId || "—"}
                                            </td>
                                            <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151] whitespace-nowrap">{cert.issueDate || "—"}</td>
                                            <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151] whitespace-nowrap">{cert.expiryDate || "—"}</td>
                                            <td className="px-[16px] py-[14px]">
                                                <span className={`inline-flex items-center gap-[4px] px-[8px] py-[3px] rounded-full text-[11px] font-semibold font-['Inter',sans-serif] ${sc.color}`}>
                                                    {sc.icon}
                                                    {sc.label}
                                                </span>
                                            </td>
                                            <td className="px-[16px] py-[14px]">
                                                <div className="flex items-center gap-[8px]">
                                                    {cert.status === "issued" && (
                                                        <>
                                                            <button
                                                                onClick={() => setPreviewCert(cert)}
                                                                className="flex items-center gap-[4px] px-[10px] py-[6px] rounded-[6px] bg-[#F3F4F6] hover:bg-[#E5E7EB] transition-colors"
                                                            >
                                                                <Eye size={13} className="text-[#374151]" />
                                                                <span className="font-['Inter',sans-serif] text-[12px] text-[#374151]">View</span>
                                                            </button>
                                                            <button className="flex items-center gap-[4px] px-[10px] py-[6px] rounded-[6px] bg-[#155DFC] hover:bg-[#1249CC] transition-colors">
                                                                <Download size={13} className="text-white" />
                                                                <span className="font-['Inter',sans-serif] text-[12px] text-white">Download</span>
                                                            </button>
                                                        </>
                                                    )}
                                                    {cert.status === "pending" && (
                                                        <button onClick={onCreateCertificate} className="flex items-center gap-[4px] px-[10px] py-[6px] rounded-[6px] bg-[#155DFC] hover:bg-[#1249CC] transition-colors">
                                                            <Award size={13} className="text-white" />
                                                            <span className="font-['Inter',sans-serif] text-[12px] text-white">Issue</span>
                                                        </button>
                                                    )}
                                                    {cert.status === "expired" && (
                                                        <button className="flex items-center gap-[4px] px-[10px] py-[6px] rounded-[6px] bg-[#FEF9C3] hover:bg-[#FEF08A] transition-colors">
                                                            <Award size={13} className="text-[#CA8A04]" />
                                                            <span className="font-['Inter',sans-serif] text-[12px] text-[#CA8A04]">Renew</span>
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-between px-[20px] py-[14px]">
                        <button
                            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                            className="flex items-center gap-[6px] font-['Inter',sans-serif] text-[13px] text-[#374151] hover:text-[#111827] transition-colors"
                        >
                            <ChevronLeft size={16} />
                            Previous
                        </button>
                        <div className="flex items-center gap-[4px]">
                            {[1, 2, 3].map((p) => (
                                <button
                                    key={p}
                                    onClick={() => setCurrentPage(p)}
                                    className={`size-[32px] flex items-center justify-center rounded-[6px] font-['Inter',sans-serif] text-[13px] transition-colors ${currentPage === p ? "bg-[#155DFC] text-white" : "text-[#374151] hover:bg-[#F3F4F6]"}`}
                                >
                                    {p}
                                </button>
                            ))}
                            <span className="px-[8px] text-[#9CA3AF] font-['Inter',sans-serif] text-[13px]">...</span>
                            {[8, 9, 10].map((p) => (
                                <button
                                    key={p}
                                    onClick={() => setCurrentPage(p)}
                                    className={`size-[32px] flex items-center justify-center rounded-[6px] font-['Inter',sans-serif] text-[13px] transition-colors ${currentPage === p ? "bg-[#155DFC] text-white" : "text-[#374151] hover:bg-[#F3F4F6]"}`}
                                >
                                    {p}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => setCurrentPage((p) => Math.min(10, p + 1))}
                            className="flex items-center gap-[6px] font-['Inter',sans-serif] text-[13px] text-[#374151] hover:text-[#111827] transition-colors"
                        >
                            Next
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
