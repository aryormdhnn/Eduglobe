import { useState } from "react";
import {
    Search,
    SlidersHorizontal,
    Download,
    Mail,
    Phone,
    ChevronLeft,
    ChevronRight,
    TrendingUp,
    Plus,
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
}

const students: Student[] = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    enrollmentId: "ENR001",
    name: "Emma Thompson",
    email: "emma.thompson@email.com",
    phone: "+1 234-567-8901",
    program: "Business English Course",
    level: "Beginner (CEFR A1)",
    startDate: "2024-01-15",
    endDate: "2024-01-15",
}));

const statCards = [
    {
        label: "Total Student",
        value: "56",
        sub: "+12% from last month",
        icon: (
            <div className="bg-[#EFF6FF] rounded-[8px] p-[8px]">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C7.9317 15.4468 8.78333 15 9.87 15H14.13C15.2167 15 16.0683 15.4468 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z" stroke="#155DFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        ),
        color: "text-[#155DFC]",
        subColor: "text-[#22C55E]",
    },
    {
        label: "Student Payment",
        value: "RM 339,000",
        sub: "23 new today",
        icon: (
            <div className="bg-[#EFF6FF] rounded-[8px] p-[8px]">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path d="M3 10H21M7 15H8M12 15H13M6 19H18C19.6569 19 21 17.6569 21 16V8C21 6.34315 19.6569 5 18 5H6C4.34315 5 3 6.34315 3 8V16C3 17.6569 4.34315 19 6 19Z" stroke="#155DFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        ),
        color: "text-[#155DFC]",
        subColor: "text-[#6B7280]",
    },
    {
        label: "Completed",
        value: "2,548",
        sub: "3 starting this week",
        icon: (
            <div className="bg-[#EFF6FF] rounded-[8px] p-[8px]">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#155DFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        ),
        color: "text-[#155DFC]",
        subColor: "text-[#6B7280]",
    },
];

export function AdminStudentContent() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    return (
        <div className="space-y-[20px]">
            {/* Header */}
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827]">
                        Student Management
                    </h2>
                    <p className="font-['Inter',sans-serif] font-normal text-[14px] text-[#6B7280] mt-[4px]">
                        View student details, enrollment, and progress
                    </p>
                </div>
                <div className="flex items-center gap-[10px]">
                    <button className="flex items-center gap-[8px] bg-[#155DFC] hover:bg-[#1249CC] transition-colors text-white px-[16px] py-[10px] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[14px]">
                        <Plus size={16} />
                        Add Student
                    </button>
                    <button className="flex items-center justify-center size-[40px] border border-[#E5E7EB] rounded-[8px] bg-white hover:bg-[#f9fafb] transition-colors">
                        <Search size={16} className="text-[#374151]" />
                    </button>
                    <button className="flex items-center gap-[8px] border border-[#E5E7EB] rounded-[8px] bg-white hover:bg-[#f9fafb] px-[14px] py-[10px] transition-colors">
                        <SlidersHorizontal size={16} className="text-[#374151]" />
                        <span className="font-['Inter',sans-serif] font-normal text-[14px] text-[#374151]">Filter</span>
                    </button>
                    <button className="flex items-center gap-[8px] border border-[#E5E7EB] rounded-[8px] bg-white hover:bg-[#f9fafb] px-[14px] py-[10px] transition-colors">
                        <Download size={16} className="text-[#374151]" />
                        <span className="font-['Inter',sans-serif] font-normal text-[14px] text-[#374151]">Export</span>
                    </button>
                </div>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-3 gap-[16px]">
                {statCards.map((card) => (
                    <div key={card.label} className="bg-white rounded-[12px] border border-[#F3F4F6] p-[20px]">
                        <div className="flex items-center justify-between mb-[12px]">
                            <div className="flex items-center gap-[10px]">
                                {card.icon}
                                <span className="font-['Inter',sans-serif] font-normal text-[14px] text-[#6B7280]">{card.label}</span>
                            </div>
                            <TrendingUp size={16} className="text-[#9CA3AF]" />
                        </div>
                        <p className="font-['Inter',sans-serif] font-bold text-[26px] text-[#111827]">{card.value}</p>
                        <p className={`font-['Inter',sans-serif] font-normal text-[13px] mt-[4px] ${card.subColor}`}>{card.sub}</p>
                    </div>
                ))}
            </div>

            {/* Table Card */}
            <div className="bg-white rounded-[12px] border border-[#F3F4F6]">
                {/* Table Header */}
                <div className="flex items-center justify-between px-[20px] py-[16px] border-b border-[#F3F4F6]">
                    <h3 className="font-['Inter',sans-serif] font-bold text-[16px] text-[#111827]">Teachers</h3>
                    <div className="flex items-center gap-[10px]">
                        <div className="bg-[#f6f6f6] flex items-center gap-[8px] px-[12px] py-[8px] rounded-full w-[200px]">
                            <Search size={14} className="text-[#a0a0a0] shrink-0" />
                            <span className="font-['Inter',sans-serif] text-[13px] text-[#a0a0a0] flex-1">Search</span>
                            <div className="flex items-center gap-[2px]">
                                <span className="bg-white rounded-[3px] px-[3px] font-['Inter',sans-serif] text-[10px] text-[#a0a0a0]">⌘</span>
                                <span className="bg-white rounded-[3px] px-[3px] font-['Inter',sans-serif] text-[10px] text-[#a0a0a0]">K</span>
                            </div>
                        </div>
                        <button className="flex items-center gap-[6px] border border-[#E5E7EB] rounded-full bg-white hover:bg-[#f9fafb] px-[14px] py-[8px] transition-colors">
                            <span className="font-['Inter',sans-serif] font-normal text-[13px] text-[#374151]">All Programs</span>
                            <ChevronRight size={14} className="text-[#6B7280]" />
                        </button>
                        <button className="flex items-center gap-[6px] border border-[#E5E7EB] rounded-full bg-white hover:bg-[#f9fafb] px-[14px] py-[8px] transition-colors">
                            <SlidersHorizontal size={14} className="text-[#374151]" />
                            <span className="font-['Inter',sans-serif] font-normal text-[13px] text-[#374151]">Filter</span>
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-[#F3F4F6]">
                                {["No.", "Enrollment ID", "Student Name", "Contact", "Program", "Level", "Start Date", "End Date"].map((col) => (
                                    <th
                                        key={col}
                                        className="px-[16px] py-[12px] text-left font-['Inter',sans-serif] font-semibold text-[13px] text-[#374151]"
                                    >
                                        {col}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student, idx) => (
                                <tr
                                    key={student.id}
                                    className="border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors"
                                >
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">
                                        {idx + 1}.
                                    </td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">
                                        {student.enrollmentId}
                                    </td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] font-medium text-[13px] text-[#111827]">
                                        {student.name}
                                    </td>
                                    <td className="px-[16px] py-[14px]">
                                        <div className="flex flex-col gap-[2px]">
                                            <div className="flex items-center gap-[6px]">
                                                <Mail size={12} className="text-[#9CA3AF] shrink-0" />
                                                <span className="font-['Inter',sans-serif] text-[12px] text-[#374151]">{student.email}</span>
                                            </div>
                                            <div className="flex items-center gap-[6px]">
                                                <Phone size={12} className="text-[#9CA3AF] shrink-0" />
                                                <span className="font-['Inter',sans-serif] text-[12px] text-[#374151]">{student.phone}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">
                                        {student.program}
                                    </td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">
                                        {student.level}
                                    </td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">
                                        {student.startDate}
                                    </td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">
                                        {student.endDate}
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
                                className={`size-[32px] flex items-center justify-center rounded-[6px] font-['Inter',sans-serif] text-[13px] transition-colors ${currentPage === p
                                        ? "bg-[#155DFC] text-white"
                                        : "text-[#374151] hover:bg-[#F3F4F6]"
                                    }`}
                            >
                                {p}
                            </button>
                        ))}
                        <span className="px-[8px] font-['Inter',sans-serif] text-[13px] text-[#9CA3AF]">...</span>
                        {[8, 9, 10].map((p) => (
                            <button
                                key={p}
                                onClick={() => setCurrentPage(p)}
                                className={`size-[32px] flex items-center justify-center rounded-[6px] font-['Inter',sans-serif] text-[13px] transition-colors ${currentPage === p
                                        ? "bg-[#155DFC] text-white"
                                        : "text-[#374151] hover:bg-[#F3F4F6]"
                                    }`}
                            >
                                {p}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        className="flex items-center gap-[6px] font-['Inter',sans-serif] text-[13px] text-[#374151] hover:text-[#111827] transition-colors"
                    >
                        Next
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
