import { useState } from "react";
import {
    Search,
    BookOpen,
    Clock,
    Users,
    ChevronRight,
    MoreHorizontal
} from "lucide-react";

interface Program {
    id: string;
    name: string;
    category: string;
    duration: string;
    studentsCount: number;
    status: "Active" | "Upcoming" | "Draft";
}

const programsData: Program[] = [
    { id: "PRG-001", name: "Business English Course", category: "Language", duration: "12 Weeks", studentsCount: 45, status: "Active" },
    { id: "PRG-002", name: "IELTS Preparation", category: "Test Prep", duration: "8 Weeks", studentsCount: 32, status: "Active" },
    { id: "PRG-003", name: "General English", category: "Language", duration: "16 Weeks", studentsCount: 68, status: "Active" },
    { id: "PRG-004", name: "Cambridge FCE", category: "Test Prep", duration: "10 Weeks", studentsCount: 0, status: "Upcoming" },
    { id: "PRG-005", name: "Academic Writing", category: "Skills", duration: "6 Weeks", studentsCount: 15, status: "Active" },
];

const statusConfig: Record<string, { bg: string; text: string }> = {
    Active: { bg: "bg-[#DCFCE7]", text: "text-[#16A34A]" },
    Upcoming: { bg: "bg-[#EFF6FF]", text: "text-[#155DFC]" },
    Draft: { bg: "bg-[#F3F4F6]", text: "text-[#6B7280]" },
};

export function ConselorProgramContent({ onCreateProgram }: { onCreateProgram?: () => void }) {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    const filtered = programsData.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.id.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === "All" || p.status === filter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="space-y-[20px]">
            {/* Header */}
            <div className="flex items-center justify-between mb-[24px]">
                <div className="flex flex-col gap-[4px]">
                    <h2 className="text-[20px] font-bold text-[#111827] font-['Inter',sans-serif]">Programs Directory</h2>
                    <p className="text-[14px] text-[#6B7280] font-['Inter',sans-serif]">View and manage available educational programs</p>
                </div>
                {onCreateProgram && (
                    <button 
                        onClick={onCreateProgram}
                        className="bg-[#155DFC] hover:bg-[#004EEB] text-white px-[16px] py-[8px] rounded-[8px] font-['Inter',sans-serif] text-[13px] font-medium inline-flex items-center gap-[8px] transition-colors"
                    >
                        + Add Program
                    </button>
                )}
            </div>

            {/* Overviews */}
            <div className="grid grid-cols-3 gap-[16px]">
                <div className="bg-white rounded-[12px] border border-[#F0F0F0] p-[20px] flex items-center gap-[16px]">
                    <div className="p-[12px] rounded-[10px] bg-[#F3E8FF]">
                        <BookOpen className="text-[#9333EA]" size={20} />
                    </div>
                    <div>
                        <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280] mb-[2px]">Total Programs</p>
                        <p className="font-['Inter',sans-serif] text-[20px] font-bold text-[#111827]">{programsData.length}</p>
                    </div>
                </div>
                <div className="bg-white rounded-[12px] border border-[#F0F0F0] p-[20px] flex items-center gap-[16px]">
                    <div className="p-[12px] rounded-[10px] bg-[#ECFDF5]">
                        <Users className="text-[#10B981]" size={20} />
                    </div>
                    <div>
                        <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280] mb-[2px]">Active Students</p>
                        <p className="font-['Inter',sans-serif] text-[20px] font-bold text-[#111827]">
                            {programsData.reduce((acc, curr) => acc + curr.studentsCount, 0)}
                        </p>
                    </div>
                </div>
                <div className="bg-white rounded-[12px] border border-[#F0F0F0] p-[20px] flex items-center gap-[16px]">
                    <div className="p-[12px] rounded-[10px] bg-[#EFF6FF]">
                        <Clock className="text-[#155DFC]" size={20} />
                    </div>
                    <div>
                        <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280] mb-[2px]">Upcoming Programs</p>
                        <p className="font-['Inter',sans-serif] text-[20px] font-bold text-[#111827]">
                            {programsData.filter(p => p.status === "Upcoming").length}
                        </p>
                    </div>
                </div>
            </div>

            {/* Content List */}
            <div className="bg-white rounded-[12px] border border-[#F0F0F0] overflow-hidden">
                <div className="p-[16px] border-b border-[#F5F5F5] flex items-center justify-between">
                    <div className="flex items-center gap-[12px]">
                        <div className="flex items-center gap-[8px] bg-[#F9FAFB] border border-[#E5E7EB] rounded-[8px] px-[12px] py-[8px] w-[280px]">
                            <Search size={16} className="text-[#9CA3AF]" />
                            <input
                                type="text"
                                placeholder="Search program name..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="bg-transparent outline-none font-['Inter',sans-serif] text-[13px] text-[#111827] w-full placeholder:text-[#9CA3AF]"
                            />
                        </div>
                        <div className="flex items-center gap-[2px] bg-[#F3F4F6] rounded-[8px] p-[2px]">
                            {["All", "Active", "Upcoming", "Draft"].map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setFilter(f)}
                                    className={`px-[12px] py-[6px] rounded-[6px] font-['Inter',sans-serif] text-[12px] transition-colors ${filter === f ? "bg-white text-[#111827] shadow-sm font-medium" : "text-[#6B7280] hover:text-[#374151]"}`}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <table className="w-full">
                    <thead>
                        <tr className="border-b border-[#F5F5F5]">
                            {["Program Code", "Program Name", "Category", "Duration", "Students", "Status", ""].map((h, i) => (
                                <th key={i} className="text-left px-[16px] py-[12px] font-['Inter',sans-serif] text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider">
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((prg) => (
                            <tr key={prg.id} className="border-b border-[#F5F5F5] hover:bg-[#FAFAFA] transition-colors">
                                <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] font-medium text-[#111827]">
                                    {prg.id}
                                </td>
                                <td className="px-[16px] py-[14px]">
                                    <div className="font-['Inter',sans-serif] text-[13px] font-medium text-[#111827]">
                                        {prg.name}
                                    </div>
                                </td>
                                <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#6B7280]">
                                    {prg.category}
                                </td>
                                <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#6B7280]">
                                    {prg.duration}
                                </td>
                                <td className="px-[16px] py-[14px]">
                                    <div className="flex items-center gap-[6px] text-[#374151]">
                                        <Users size={14} className="text-[#9CA3AF]" />
                                        <span className="font-['Inter',sans-serif] text-[13px]">{prg.studentsCount}</span>
                                    </div>
                                </td>
                                <td className="px-[16px] py-[14px]">
                                    <span className={`inline-flex items-center px-[8px] py-[2px] rounded-full text-[11px] font-medium ${statusConfig[prg.status].bg} ${statusConfig[prg.status].text}`}>
                                        {prg.status}
                                    </span>
                                </td>
                                <td className="px-[16px] py-[14px] text-right">
                                    <button className="p-[6px] rounded-[6px] text-[#9CA3AF] hover:bg-[#F3F4F6] hover:text-[#374151] transition-colors">
                                        <ChevronRight size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filtered.length === 0 && (
                    <div className="py-[32px] text-center">
                        <p className="font-['Inter',sans-serif] text-[13px] text-[#6B7280]">No programs found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
