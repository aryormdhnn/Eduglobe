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
} from "lucide-react";

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
    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-[24px]" onClick={onClose}>
            <div
                className="bg-white rounded-[16px] w-full max-w-[640px] overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Certificate Visual */}
                <div className="bg-gradient-to-br from-[#155DFC] to-[#0D3FA8] p-[40px] text-white text-center relative overflow-hidden">
                    <div className="absolute top-[-30px] right-[-30px] size-[120px] rounded-full bg-white/5" />
                    <div className="absolute bottom-[-20px] left-[-20px] size-[80px] rounded-full bg-white/5" />
                    <Award size={48} className="mx-auto mb-[16px] text-yellow-300" />
                    <p className="font-['Inter',sans-serif] text-[12px] uppercase tracking-[3px] text-blue-200 mb-[8px]">Certificate of Completion</p>
                    <h2 className="font-['Inter',sans-serif] font-bold text-[22px] mb-[8px]">This is to certify that</h2>
                    <h1 className="font-['Inter',sans-serif] font-bold text-[30px] text-yellow-300 mb-[16px]">{cert.studentName}</h1>
                    <p className="font-['Inter',sans-serif] text-[14px] text-blue-100 mb-[4px]">has successfully completed</p>
                    <p className="font-['Inter',sans-serif] font-semibold text-[16px]">{cert.module}</p>
                    <p className="font-['Inter',sans-serif] text-[13px] text-blue-200 mt-[4px]">{cert.course}</p>
                    <div className="mt-[24px] flex justify-center gap-[40px] text-[12px] text-blue-200">
                        <div>
                            <p className="text-white font-semibold">Issue Date</p>
                            <p>{cert.issueDate}</p>
                        </div>
                        <div>
                            <p className="text-white font-semibold">Certificate ID</p>
                            <p>{cert.certificateId}</p>
                        </div>
                    </div>
                </div>
                {/* Actions */}
                <div className="flex items-center justify-between px-[24px] py-[16px]">
                    <button onClick={onClose} className="font-['Inter',sans-serif] text-[14px] text-[#6B7280] hover:text-[#374151]">
                        Close
                    </button>
                    <button className="flex items-center gap-[8px] bg-[#155DFC] hover:bg-[#1249CC] text-white px-[20px] py-[10px] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[14px] transition-colors">
                        <Download size={16} />
                        Download PDF
                    </button>
                </div>
            </div>
        </div>
    );
}

export function AdminCertificateContent() {
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
                        <button className="flex items-center gap-[8px] bg-[#155DFC] hover:bg-[#1249CC] transition-colors text-white px-[16px] py-[10px] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[14px]">
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
                        {/* Status tabs */}
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
                        {/* Search + filter */}
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
                                                        <button className="flex items-center gap-[4px] px-[10px] py-[6px] rounded-[6px] bg-[#155DFC] hover:bg-[#1249CC] transition-colors">
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
                                    className={`size-[32px] flex items-center justify-center rounded-[6px] font-['Inter',sans-serif] text-[13px] transition-colors ${currentPage === p ? "bg-[#155DFC] text-white" : "text-[#374151] hover:bg-[#F3F4F6]"
                                        }`}
                                >
                                    {p}
                                </button>
                            ))}
                            <span className="px-[8px] text-[#9CA3AF] font-['Inter',sans-serif] text-[13px]">...</span>
                            {[8, 9, 10].map((p) => (
                                <button
                                    key={p}
                                    onClick={() => setCurrentPage(p)}
                                    className={`size-[32px] flex items-center justify-center rounded-[6px] font-['Inter',sans-serif] text-[13px] transition-colors ${currentPage === p ? "bg-[#155DFC] text-white" : "text-[#374151] hover:bg-[#F3F4F6]"
                                        }`}
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
