import { useState } from "react";
import {
    Search,
    FileText,
    Printer,
    ChevronLeft,
    ChevronRight,
    X,
    Award,
} from "lucide-react";

interface SubjectGrade {
    className: string;
    teacher: string;
    grade: string;
    attendance: string;
}

interface StudentReport {
    id: string;
    name: string;
    studentId: string;
    nationality: string;
    programme: string;
    session: string;
    dates: string;
    level: string;
    centre: string;
    overallResult: string;
    overallAttendance: string;
    subjects: SubjectGrade[];
}

const reports: StudentReport[] = [
    {
        id: "ENR001",
        name: "Emma Thompson",
        studentId: "2024PM00101",
        nationality: "United Kingdom",
        programme: "Business English Course",
        session: "BIEP202501",
        dates: "10/01/2025 - 10/04/2025",
        level: "Module 1-2",
        centre: "EduGlobe KL",
        overallResult: "PASS",
        overallAttendance: "100%",
        subjects: [
            { className: "Introduction to Business Communication", teacher: "Ms. Aisha", grade: "A", attendance: "100%" },
            { className: "Professional Writing & Email Etiquette", teacher: "Mr. David", grade: "B", attendance: "100%" },
            { className: "Effective Meetings & Negotiation Skills", teacher: "Ms. Aisha", grade: "-", attendance: "100%" },
            { className: "English Proficiency Assessment", teacher: "Mr. David", grade: "A", attendance: "100%" },
        ],
    },
    {
        id: "ENR002",
        name: "James Wilson",
        studentId: "2024PM00102",
        nationality: "Australia",
        programme: "Business English Course",
        session: "BIEP202502",
        dates: "14/02/2025 - 14/05/2025",
        level: "Module 1-2",
        centre: "EduGlobe KL",
        overallResult: "PASS",
        overallAttendance: "95%",
        subjects: [
            { className: "Introduction to Business Communication", teacher: "Mr. David", grade: "B", attendance: "95%" },
            { className: "Professional Writing & Email Etiquette", teacher: "Ms. Aisha", grade: "C", attendance: "95%" },
            { className: "Business Presentations & Public Speaking", teacher: "Mr. Tom", grade: "C", attendance: "95%" },
            { className: "English Proficiency Assessment", teacher: "Mr. David", grade: "B", attendance: "100%" },
        ],
    },
    {
        id: "ENR003",
        name: "Sophia Martinez",
        studentId: "2024PM00103",
        nationality: "Spain",
        programme: "Business English Course",
        session: "BIEP202503",
        dates: "01/03/2025 - 01/06/2025",
        level: "Module 3",
        centre: "EduGlobe KL",
        overallResult: "IN PROGRESS",
        overallAttendance: "90%",
        subjects: [
            { className: "Effective Meetings & Negotiation Skills", teacher: "Ms. Aisha", grade: "-", attendance: "90%" },
            { className: "Structure Speaking Practice", teacher: "Mr. Tom", grade: "C", attendance: "90%" },
            { className: "Listening Comprehension", teacher: "Ms. Fatin", grade: "B", attendance: "90%" },
        ],
    },
    {
        id: "ENR004",
        name: "Liam Johnson",
        studentId: "2024PM00104",
        nationality: "United States",
        programme: "Business English Course",
        session: "BIEP202504",
        dates: "10/03/2025 - 10/06/2025",
        level: "Module 4",
        centre: "EduGlobe KL",
        overallResult: "PASS",
        overallAttendance: "98%",
        subjects: [
            { className: "Business Presentations & Public Speaking", teacher: "Mr. Tom", grade: "A", attendance: "100%" },
            { className: "Sales, Marketing & Customer Communication", teacher: "Ms. Aisha", grade: "A", attendance: "95%" },
            { className: "Elective Presentation", teacher: "Mr. David", grade: "A", attendance: "100%" },
            { className: "English Proficiency Assessment", teacher: "Ms. Fatin", grade: "A", attendance: "100%" },
        ],
    },
    {
        id: "ENR005",
        name: "Olivia Brown",
        studentId: "2024PM00105",
        nationality: "Canada",
        programme: "Business English Course",
        session: "BIEP202505",
        dates: "01/04/2025 - 01/07/2025",
        level: "Module 5",
        centre: "EduGlobe KL",
        overallResult: "IN PROGRESS",
        overallAttendance: "85%",
        subjects: [
            { className: "Sales, Marketing & Customer Communication", teacher: "Mr. David", grade: "-", attendance: "85%" },
            { className: "Customer Service Excellence", teacher: "Ms. Aisha", grade: "C", attendance: "85%" },
        ],
    },
];

const gradesKey = [
    { range: "90% - 100%", letter: "A", label: "Distinction" },
    { range: "80% - 89%", letter: "B", label: "Credit" },
    { range: "70% - 79%", letter: "C", label: "Pass" },
    { range: "0% - 69%", letter: "F", label: "Fail" },
    { range: "x", letter: "I", label: "Incomplete" },
];

function ReportModal({ report, onClose }: { report: StudentReport; onClose: () => void }) {
    return (
        <div
            className="fixed inset-0 bg-black/60 z-50 flex items-start justify-center p-[24px] overflow-y-auto"
            onClick={onClose}
        >
            <div
                className="bg-white w-full max-w-[780px] rounded-[8px] shadow-2xl my-[24px]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Actions Bar */}
                <div className="flex items-center justify-between px-[24px] py-[14px] border-b border-[#E5E7EB]">
                    <span className="font-['Inter',sans-serif] font-semibold text-[15px] text-[#111827]">Progress Report</span>
                    <div className="flex items-center gap-[10px]">
                        <button
                            onClick={() => window.print()}
                            className="flex items-center gap-[6px] px-[14px] py-[8px] bg-[#F9FAFB] border border-[#E5E7EB] rounded-[7px] hover:bg-[#F3F4F6] transition-colors"
                        >
                            <Printer size={15} className="text-[#374151]" />
                            <span className="font-['Inter',sans-serif] text-[13px] text-[#374151] font-semibold">Print</span>
                        </button>
                        <button
                            onClick={onClose}
                            className="flex items-center justify-center size-[34px] rounded-[7px] hover:bg-[#F3F4F6] transition-colors"
                        >
                            <X size={18} className="text-[#6B7280]" />
                        </button>
                    </div>
                </div>

                {/* Report Document */}
                <div className="p-[48px]">
                    {/* Report Header */}
                    <div className="flex items-start justify-between mb-[40px]">
                        <div>
                            <h1 className="font-['Inter',sans-serif] font-black text-[26px] text-[#F97316] uppercase tracking-wide">
                                PROGRESS REPORT
                            </h1>
                        </div>
                        <div className="flex items-center gap-[12px]">
                            <div className="border-2 border-[#F97316] rounded-[8px] px-[14px] py-[8px] flex items-center justify-center">
                                <Award size={28} className="text-[#F97316]" />
                            </div>
                            <div>
                                <p className="font-['Inter',sans-serif] font-bold text-[15px] text-[#111827]">EduGlobe</p>
                                <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280]">Language Centres</p>
                            </div>
                        </div>
                    </div>

                    {/* Student Info */}
                    <div className="mb-[32px]">
                        <h2 className="font-['Inter',sans-serif] font-black text-[20px] text-[#111827] mb-[4px]">
                            {report.name.toUpperCase()}
                        </h2>
                        <p className="font-['Inter',sans-serif] text-[13px] text-[#6B7280] mb-[20px]">
                            STUDENT ID: {report.studentId}
                        </p>

                        {/* Info grid */}
                        <div className="grid grid-cols-[auto_1fr] gap-x-[16px] gap-y-[6px] max-w-[500px]">
                            {[
                                { label: "Nationality", value: report.nationality },
                                { label: "Programme", value: report.programme },
                                { label: "Session", value: report.session },
                                { label: "Dates", value: report.dates },
                                { label: "Level", value: report.level },
                                { label: "Centre", value: report.centre },
                            ].map((row) => (
                                <div key={row.label} className="contents">
                                    <span className="bg-[#4B5563] text-white font-['Inter',sans-serif] text-[11px] font-semibold px-[10px] py-[3px] rounded-[3px] whitespace-nowrap self-center">
                                        {row.label}
                                    </span>
                                    <span className="font-['Inter',sans-serif] text-[13px] text-[#374151] self-center">
                                        {row.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Grade Result Section Header */}
                    <div className="bg-[#9CA3AF] px-[16px] py-[7px] mb-[0px] rounded-t-[4px]">
                        <h3 className="font-['Inter',sans-serif] font-semibold text-[14px] text-white">
                            Grade Result and Attendance
                        </h3>
                    </div>

                    {/* Two-column layout: table + grades key */}
                    <div className="flex gap-[32px] items-start">
                        {/* Table */}
                        <div className="flex-1">
                            <table className="w-full border-collapse border border-[#D1D5DB]">
                                <thead>
                                    <tr className="bg-[#F9FAFB]">
                                        {["Class", "Teacher", "Grade", "Attendance"].map((col) => (
                                            <th
                                                key={col}
                                                className="border border-[#D1D5DB] px-[12px] py-[8px] font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] text-center"
                                            >
                                                {col}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {report.subjects.map((subj, i) => (
                                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"}>
                                            <td className="border border-[#D1D5DB] px-[12px] py-[8px] font-['Inter',sans-serif] text-[12px] text-[#374151]">
                                                {subj.className}
                                            </td>
                                            <td className="border border-[#D1D5DB] px-[12px] py-[8px] font-['Inter',sans-serif] text-[12px] text-[#374151] text-center whitespace-nowrap">
                                                {subj.teacher}
                                            </td>
                                            <td className="border border-[#D1D5DB] px-[12px] py-[8px] font-['Inter',sans-serif] font-bold text-[12px] text-[#374151] text-center">
                                                {subj.grade}
                                            </td>
                                            <td className="border border-[#D1D5DB] px-[12px] py-[8px] font-['Inter',sans-serif] text-[12px] text-[#374151] text-center">
                                                {subj.attendance}
                                            </td>
                                        </tr>
                                    ))}
                                    {/* Empty spacer row */}
                                    <tr>
                                        <td colSpan={4} className="border border-[#D1D5DB] py-[8px]" />
                                    </tr>
                                    {/* Overall row */}
                                    <tr className="bg-[#F3F4F6]">
                                        <td
                                            colSpan={2}
                                            className="border border-[#D1D5DB] px-[12px] py-[8px] font-['Inter',sans-serif] font-bold text-[12px] text-[#111827]"
                                        >
                                            Overall Result &amp; Attendance
                                        </td>
                                        <td className="border border-[#D1D5DB] px-[12px] py-[8px] font-['Inter',sans-serif] font-bold text-[12px] text-[#111827] text-center">
                                            ({report.overallResult})
                                        </td>
                                        <td className="border border-[#D1D5DB] px-[12px] py-[8px] font-['Inter',sans-serif] font-bold text-[12px] text-[#111827] text-center">
                                            {report.overallAttendance}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Grades Key */}
                        <div className="shrink-0 min-w-[180px]">
                            <p className="font-['Inter',sans-serif] font-bold text-[12px] text-[#111827] mb-[8px] text-center tracking-wide">
                                GRADES / RESULTS
                            </p>
                            <div className="space-y-[4px]">
                                {gradesKey.map((g) => (
                                    <div key={g.letter} className="flex items-center gap-[8px]">
                                        <span className="font-['Inter',sans-serif] text-[11px] text-[#6B7280] w-[72px]">{g.range}</span>
                                        <span className="font-['Inter',sans-serif] font-bold text-[11px] text-[#111827] w-[14px]">{g.letter}</span>
                                        <span className="font-['Inter',sans-serif] text-[11px] text-[#374151]">{g.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface AdminProgressReportContentProps {
    onBack: () => void;
}

export function AdminProgressReportContent({ onBack }: AdminProgressReportContentProps) {
    const [search, setSearch] = useState("");
    const [viewReport, setViewReport] = useState<StudentReport | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    const filtered = reports.filter((r) =>
        r.name.toLowerCase().includes(search.toLowerCase()) ||
        r.studentId.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            {viewReport && (
                <ReportModal report={viewReport} onClose={() => setViewReport(null)} />
            )}

            <div className="space-y-[20px]">
                {/* Header */}
                <div className="flex items-center gap-[12px]">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-[6px] text-[#6B7280] hover:text-[#374151] font-['Inter',sans-serif] text-[14px] transition-colors"
                    >
                        <ChevronLeft size={18} />
                        Back to Certificates
                    </button>
                    <div className="h-[20px] w-[1px] bg-[#E5E7EB]" />
                    <div>
                        <h2 className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827]">
                            Progress Reports
                        </h2>
                    </div>
                </div>

                {/* Stat cards */}
                <div className="grid grid-cols-3 gap-[16px]">
                    {[
                        { label: "Total Reports", value: reports.length, color: "text-[#155DFC]", bg: "bg-[#EFF6FF]" },
                        { label: "Passed", value: reports.filter((r) => r.overallResult === "PASS").length, color: "text-[#16A34A]", bg: "bg-[#DCFCE7]" },
                        { label: "In Progress", value: reports.filter((r) => r.overallResult === "IN PROGRESS").length, color: "text-[#CA8A04]", bg: "bg-[#FEF9C3]" },
                    ].map((card) => (
                        <div key={card.label} className="bg-white rounded-[12px] border border-[#F3F4F6] p-[20px] flex items-center gap-[16px]">
                            <div className={`${card.bg} rounded-[10px] p-[12px]`}>
                                <FileText size={22} className={card.color} />
                            </div>
                            <div>
                                <p className="font-['Inter',sans-serif] font-bold text-[28px] text-[#111827]">{card.value}</p>
                                <p className="font-['Inter',sans-serif] text-[13px] text-[#6B7280]">{card.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Table card */}
                <div className="bg-white rounded-[12px] border border-[#F3F4F6]">
                    {/* Search bar */}
                    <div className="flex items-center justify-between px-[20px] py-[16px] border-b border-[#F3F4F6]">
                        <h3 className="font-['Inter',sans-serif] font-bold text-[16px] text-[#111827]">Student Reports</h3>
                        <div className="bg-[#f6f6f6] flex items-center gap-[8px] px-[12px] py-[8px] rounded-full w-[240px]">
                            <Search size={14} className="text-[#a0a0a0] shrink-0" />
                            <input
                                className="bg-transparent font-['Inter',sans-serif] text-[13px] text-[#374151] outline-none flex-1 placeholder:text-[#a0a0a0]"
                                placeholder="Search by name or student ID..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-[#F3F4F6]">
                                    {["No.", "Student ID", "Student Name", "Programme", "Session", "Level", "Overall", "Attendance", "Actions"].map((col) => (
                                        <th
                                            key={col}
                                            className="px-[16px] py-[12px] text-left font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] whitespace-nowrap"
                                        >
                                            {col}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((r, idx) => (
                                    <tr key={r.id} className="border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors">
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{idx + 1}.</td>
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151] whitespace-nowrap">{r.studentId}</td>
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827] whitespace-nowrap">{r.name}</td>
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151] max-w-[160px]">{r.programme}</td>
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151] whitespace-nowrap">{r.session}</td>
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151]">{r.level}</td>
                                        <td className="px-[16px] py-[14px]">
                                            <span className={`inline-flex items-center px-[8px] py-[3px] rounded-full text-[11px] font-semibold font-['Inter',sans-serif] ${r.overallResult === "PASS"
                                                    ? "bg-[#DCFCE7] text-[#16A34A]"
                                                    : "bg-[#FEF9C3] text-[#CA8A04]"
                                                }`}>
                                                {r.overallResult}
                                            </span>
                                        </td>
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{r.overallAttendance}</td>
                                        <td className="px-[16px] py-[14px]">
                                            <button
                                                onClick={() => setViewReport(r)}
                                                className="flex items-center gap-[6px] px-[12px] py-[7px] rounded-[7px] bg-[#155DFC] hover:bg-[#1249CC] transition-colors"
                                            >
                                                <FileText size={13} className="text-white" />
                                                <span className="font-['Inter',sans-serif] text-[12px] text-white font-semibold">View Report</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
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
                        </div>
                        <button
                            onClick={() => setCurrentPage((p) => Math.min(3, p + 1))}
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
