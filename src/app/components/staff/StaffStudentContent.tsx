import { useState } from "react";
import {
    Search,
    SlidersHorizontal,
    Download,
    Mail,
    Phone,
    ChevronLeft,
    ChevronRight,
    Eye,
} from "lucide-react";

interface Student {
    id: number;
    enrollmentId: string;
    name: string;
    email: string;
    phone: string;
    program: string;
    level: string;
    startDate: string;
    endDate: string;
    status: string;
}

const students: Student[] = [
    { id: 1, enrollmentId: "ENR001", name: "Emma Thompson", email: "emma.thompson@email.com", phone: "+1 234-567-8901", program: "Business English Course", level: "Beginner (CEFR A1)", startDate: "2024-01-15", endDate: "2024-06-15", status: "Active" },
    { id: 2, enrollmentId: "ENR002", name: "Liam Johnson", email: "liam.johnson@email.com", phone: "+1 234-567-8902", program: "IELTS Preparation", level: "Intermediate (CEFR B1)", startDate: "2024-02-01", endDate: "2024-07-01", status: "Active" },
    { id: 3, enrollmentId: "ENR003", name: "Sophie Chen", email: "sophie.chen@email.com", phone: "+60 12-345-6789", program: "General English", level: "Upper-Intermediate (CEFR B2)", startDate: "2024-01-20", endDate: "2024-06-20", status: "Pending" },
    { id: 4, enrollmentId: "ENR004", name: "Ahmad Faiz", email: "ahmad.faiz@email.com", phone: "+60 13-456-7890", program: "Business English Course", level: "Beginner (CEFR A1)", startDate: "2024-03-01", endDate: "2024-08-01", status: "Active" },
    { id: 5, enrollmentId: "ENR005", name: "Maria Garcia", email: "maria.garcia@email.com", phone: "+34 612-345-678", program: "Cambridge FCE", level: "Intermediate (CEFR B1)", startDate: "2024-02-15", endDate: "2024-07-15", status: "Active" },
    { id: 6, enrollmentId: "ENR006", name: "Kenji Tanaka", email: "kenji.tanaka@email.com", phone: "+81 90-1234-5678", program: "General English", level: "Elementary (CEFR A2)", startDate: "2024-01-10", endDate: "2024-06-10", status: "Completed" },
    { id: 7, enrollmentId: "ENR007", name: "Fatimah Zahra", email: "fatimah.z@email.com", phone: "+60 11-234-5678", program: "IELTS Preparation", level: "Advanced (CEFR C1)", startDate: "2024-03-10", endDate: "2024-08-10", status: "Active" },
    { id: 8, enrollmentId: "ENR008", name: "David Kim", email: "david.kim@email.com", phone: "+82 10-1234-5678", program: "Business English Course", level: "Intermediate (CEFR B1)", startDate: "2024-02-20", endDate: "2024-07-20", status: "Active" },
];

const statusMap: Record<string, string> = {
    Active: "bg-[#DCFCE7] text-[#16A34A]",
    Pending: "bg-[#FEF9C3] text-[#CA8A04]",
    Completed: "bg-[#E0E7FF] text-[#4F46E5]",
};

export function StaffStudentContent() {
    const [search, setSearch] = useState("");
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

    const filtered = students.filter(
        (s) =>
            s.name.toLowerCase().includes(search.toLowerCase()) ||
            s.enrollmentId.toLowerCase().includes(search.toLowerCase()) ||
            s.program.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-[20px]">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-[16px]">
                {[
                    { label: "Total Students", value: "142", sub: "+8 this month", color: "text-[#155DFC]", bg: "bg-[#EFF6FF]" },
                    { label: "Active Students", value: "128", sub: "90% of total", color: "text-[#16A34A]", bg: "bg-[#F0FDF4]" },
                    { label: "Pending Registration", value: "14", sub: "Needs review", color: "text-[#CA8A04]", bg: "bg-[#FFFBEB]" },
                ].map((s) => (
                    <div key={s.label} className="bg-white rounded-[12px] border border-[#F0F0F0] p-[20px]">
                        <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280] mb-[4px]">{s.label}</p>
                        <p className={`font-['Inter',sans-serif] text-[24px] font-bold ${s.color}`}>{s.value}</p>
                        <p className="font-['Inter',sans-serif] text-[11px] text-[#9CA3AF] mt-[2px]">{s.sub}</p>
                    </div>
                ))}
            </div>

            {/* Toolbar */}
            <div className="bg-white rounded-[12px] border border-[#F0F0F0] overflow-hidden">
                <div className="flex items-center justify-between p-[16px] border-b border-[#F5F5F5]">
                    <div className="flex items-center gap-[10px]">
                        <div className="flex items-center gap-[8px] bg-[#F9FAFB] border border-[#E5E7EB] rounded-[8px] px-[12px] py-[8px] w-[280px]">
                            <Search size={16} className="text-[#9CA3AF]" />
                            <input
                                type="text"
                                placeholder="Search students..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="bg-transparent outline-none font-['Inter',sans-serif] text-[13px] text-[#111827] w-full placeholder:text-[#9CA3AF]"
                            />
                        </div>
                        <button className="flex items-center gap-[6px] px-[12px] py-[8px] border border-[#E5E7EB] rounded-[8px] text-[#374151] hover:bg-[#F9FAFB] transition-colors">
                            <SlidersHorizontal size={14} />
                            <span className="font-['Inter',sans-serif] text-[13px]">Filter</span>
                        </button>
                    </div>
                    <button className="flex items-center gap-[6px] px-[12px] py-[8px] border border-[#E5E7EB] rounded-[8px] text-[#374151] hover:bg-[#F9FAFB] transition-colors">
                        <Download size={14} />
                        <span className="font-['Inter',sans-serif] text-[13px]">Export</span>
                    </button>
                </div>

                {/* Table */}
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-[#F5F5F5]">
                            {["Enrollment ID", "Student Name", "Program", "Level", "Start Date", "Status", "Action"].map((h) => (
                                <th key={h} className="text-left px-[16px] py-[12px] font-['Inter',sans-serif] text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider">
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((s) => (
                            <tr key={s.id} className="border-b border-[#F5F5F5] hover:bg-[#FAFAFA] transition-colors">
                                <td className="px-[16px] py-[12px] font-['Inter',sans-serif] text-[13px] text-[#155DFC] font-medium">{s.enrollmentId}</td>
                                <td className="px-[16px] py-[12px]">
                                    <div>
                                        <p className="font-['Inter',sans-serif] text-[13px] font-medium text-[#111827]">{s.name}</p>
                                        <p className="font-['Inter',sans-serif] text-[11px] text-[#9CA3AF]">{s.email}</p>
                                    </div>
                                </td>
                                <td className="px-[16px] py-[12px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{s.program}</td>
                                <td className="px-[16px] py-[12px] font-['Inter',sans-serif] text-[12px] text-[#6B7280]">{s.level}</td>
                                <td className="px-[16px] py-[12px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{s.startDate}</td>
                                <td className="px-[16px] py-[12px]">
                                    <span className={`px-[8px] py-[3px] rounded-full text-[11px] font-medium ${statusMap[s.status] ?? ""}`}>
                                        {s.status}
                                    </span>
                                </td>
                                <td className="px-[16px] py-[12px]">
                                    <div className="flex items-center gap-[6px]">
                                        <button
                                            onClick={() => setSelectedStudent(s)}
                                            className="p-[6px] rounded-[6px] text-[#6B7280] hover:bg-[#EFF6FF] hover:text-[#155DFC] transition-colors"
                                            title="View"
                                        >
                                            <Eye size={15} />
                                        </button>
                                        <button className="p-[6px] rounded-[6px] text-[#6B7280] hover:bg-[#EFF6FF] hover:text-[#155DFC] transition-colors" title="Email">
                                            <Mail size={15} />
                                        </button>
                                        <button className="p-[6px] rounded-[6px] text-[#6B7280] hover:bg-[#EFF6FF] hover:text-[#155DFC] transition-colors" title="Call">
                                            <Phone size={15} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="flex items-center justify-between px-[16px] py-[12px]">
                    <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280]">
                        Showing {filtered.length} of {students.length} students
                    </p>
                    <div className="flex items-center gap-[4px]">
                        <button className="p-[6px] rounded-[6px] text-[#9CA3AF] hover:bg-[#F3F4F6] transition-colors">
                            <ChevronLeft size={16} />
                        </button>
                        <button className="px-[10px] py-[4px] rounded-[6px] bg-[#155DFC] text-white font-['Inter',sans-serif] text-[12px] font-medium">1</button>
                        <button className="px-[10px] py-[4px] rounded-[6px] text-[#6B7280] hover:bg-[#F3F4F6] font-['Inter',sans-serif] text-[12px]">2</button>
                        <button className="p-[6px] rounded-[6px] text-[#9CA3AF] hover:bg-[#F3F4F6] transition-colors">
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Student Detail Modal */}
            {selectedStudent && (
                <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center" onClick={() => setSelectedStudent(null)}>
                    <div className="bg-white rounded-[16px] w-[500px] p-[24px] shadow-xl" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between mb-[20px]">
                            <h3 className="font-['Inter',sans-serif] text-[18px] font-bold text-[#111827]">Student Details</h3>
                            <button onClick={() => setSelectedStudent(null)} className="text-[#9CA3AF] hover:text-[#374151] transition-colors text-[20px]">×</button>
                        </div>
                        <div className="flex items-center gap-[16px] mb-[20px]">
                            <div className="bg-[#EFF6FF] rounded-full size-[56px] flex items-center justify-center">
                                <span className="font-['Inter',sans-serif] text-[20px] font-bold text-[#155DFC]">
                                    {selectedStudent.name.split(" ").map(n => n[0]).join("")}
                                </span>
                            </div>
                            <div>
                                <p className="font-['Inter',sans-serif] text-[16px] font-semibold text-[#111827]">{selectedStudent.name}</p>
                                <p className="font-['Inter',sans-serif] text-[13px] text-[#6B7280]">{selectedStudent.enrollmentId}</p>
                            </div>
                            <span className={`ml-auto px-[10px] py-[4px] rounded-full text-[12px] font-medium ${statusMap[selectedStudent.status] ?? ""}`}>
                                {selectedStudent.status}
                            </span>
                        </div>
                        <div className="grid grid-cols-2 gap-[16px]">
                            {[
                                { label: "Email", value: selectedStudent.email },
                                { label: "Phone", value: selectedStudent.phone },
                                { label: "Program", value: selectedStudent.program },
                                { label: "Level", value: selectedStudent.level },
                                { label: "Start Date", value: selectedStudent.startDate },
                                { label: "End Date", value: selectedStudent.endDate },
                            ].map((f) => (
                                <div key={f.label}>
                                    <p className="font-['Inter',sans-serif] text-[11px] text-[#9CA3AF] uppercase mb-[2px]">{f.label}</p>
                                    <p className="font-['Inter',sans-serif] text-[13px] text-[#111827]">{f.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
