import { useState } from "react";
import {
    Search,
    Eye,
    ChevronLeft,
    ChevronRight,
    Calendar,
    Clock,
    Users,
    School,
    MapPin,
} from "lucide-react";

interface ClassItem {
    id: number;
    name: string;
    program: string;
    teacher: string;
    schedule: string;
    room: string;
    students: number;
    maxStudents: number;
    startDate: string;
    status: "Active" | "Upcoming" | "Completed";
}

const classes: ClassItem[] = [
    { id: 1, name: "BEC-A1", program: "Business English Course", teacher: "Ms. Sarah", schedule: "Mon, Wed, Fri 09:00–11:00", room: "Room A", students: 12, maxStudents: 15, startDate: "01 Jan 2025", status: "Active" },
    { id: 2, name: "IELTS-B1", program: "IELTS Preparation", teacher: "Mr. James", schedule: "Tue, Thu 10:00–12:00", room: "Room B", students: 8, maxStudents: 10, startDate: "15 Jan 2025", status: "Active" },
    { id: 3, name: "GE-A2", program: "General English", teacher: "Ms. Lisa", schedule: "Mon–Fri 13:00–15:00", room: "Room C", students: 15, maxStudents: 20, startDate: "01 Feb 2025", status: "Active" },
    { id: 4, name: "FCE-B2", program: "Cambridge FCE", teacher: "Dr. Ahmed", schedule: "Wed, Fri 14:00–16:00", room: "Room D", students: 6, maxStudents: 8, startDate: "10 Feb 2025", status: "Active" },
    { id: 5, name: "CEFR-B2", program: "CEFR B2 Intensive", teacher: "Mr. Tom", schedule: "Sat, Sun 09:00–13:00", room: "Room A", students: 5, maxStudents: 10, startDate: "01 Mar 2025", status: "Upcoming" },
    { id: 6, name: "BEC-A2", program: "Business English Course", teacher: "Ms. Sarah", schedule: "Mon, Wed 15:00–17:00", room: "Room B", students: 10, maxStudents: 12, startDate: "15 Mar 2025", status: "Upcoming" },
    { id: 7, name: "GE-A1", program: "General English", teacher: "Mr. James", schedule: "Tue, Thu 09:00–11:00", room: "Room C", students: 18, maxStudents: 20, startDate: "01 Nov 2024", status: "Completed" },
    { id: 8, name: "IELTS-A2", program: "IELTS Preparation", teacher: "Ms. Lisa", schedule: "Mon–Fri 10:00–12:00", room: "Room D", students: 10, maxStudents: 10, startDate: "01 Oct 2024", status: "Completed" },
];

const statusMap: Record<string, string> = {
    Active: "bg-[#DCFCE7] text-[#16A34A]",
    Upcoming: "bg-[#EFF6FF] text-[#155DFC]",
    Completed: "bg-[#F3F4F6] text-[#6B7280]",
};

export function StaffClassesContent() {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [selectedClass, setSelectedClass] = useState<ClassItem | null>(null);

    const filtered = classes.filter((c) => {
        const matchSearch =
            c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.program.toLowerCase().includes(search.toLowerCase()) ||
            c.teacher.toLowerCase().includes(search.toLowerCase());
        const matchStatus = statusFilter === "All" || c.status === statusFilter;
        return matchSearch && matchStatus;
    });

    const totalStudents = classes.reduce((a, c) => a + c.students, 0);

    return (
        <div className="space-y-[20px]">
            {/* Stats */}
            <div className="grid grid-cols-4 gap-[16px]">
                {[
                    { label: "Total Classes", value: classes.length.toString(), icon: <School size={20} className="text-[#155DFC]" />, bg: "bg-[#EFF6FF]", sub: `${classes.filter(c => c.status === "Active").length} active` },
                    { label: "Total Students", value: totalStudents.toString(), icon: <Users size={20} className="text-[#8B5CF6]" />, bg: "bg-[#F5F3FF]", sub: "Across all classes" },
                    { label: "Upcoming", value: classes.filter(c => c.status === "Upcoming").length.toString(), icon: <Calendar size={20} className="text-[#F59E0B]" />, bg: "bg-[#FFFBEB]", sub: "Starting soon" },
                    { label: "Avg. Class Size", value: Math.round(totalStudents / classes.length).toString(), icon: <Users size={20} className="text-[#10B981]" />, bg: "bg-[#ECFDF5]", sub: "Students per class" },
                ].map((s) => (
                    <div key={s.label} className="bg-white rounded-[12px] border border-[#F0F0F0] p-[20px]">
                        <div className="flex items-center gap-[10px] mb-[10px]">
                            <div className={`${s.bg} rounded-[10px] p-[8px]`}>{s.icon}</div>
                        </div>
                        <p className="font-['Inter',sans-serif] text-[24px] font-bold text-[#111827]">{s.value}</p>
                        <div className="flex items-center justify-between mt-[2px]">
                            <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280]">{s.label}</p>
                            <p className="font-['Inter',sans-serif] text-[11px] text-[#9CA3AF]">{s.sub}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Class Cards Grid */}
            <div className="bg-white rounded-[12px] border border-[#F0F0F0] overflow-hidden">
                <div className="flex items-center justify-between p-[16px] border-b border-[#F5F5F5]">
                    <div className="flex items-center gap-[10px]">
                        <div className="flex items-center gap-[8px] bg-[#F9FAFB] border border-[#E5E7EB] rounded-[8px] px-[12px] py-[8px] w-[260px]">
                            <Search size={16} className="text-[#9CA3AF]" />
                            <input
                                type="text"
                                placeholder="Search classes..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="bg-transparent outline-none font-['Inter',sans-serif] text-[13px] text-[#111827] w-full placeholder:text-[#9CA3AF]"
                            />
                        </div>
                        <div className="flex items-center gap-[2px] bg-[#F3F4F6] rounded-[8px] p-[2px]">
                            {["All", "Active", "Upcoming", "Completed"].map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setStatusFilter(f)}
                                    className={`px-[10px] py-[5px] rounded-[6px] font-['Inter',sans-serif] text-[12px] transition-colors ${statusFilter === f ? "bg-white text-[#111827] shadow-sm font-medium" : "text-[#6B7280] hover:text-[#374151]"}`}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-2 gap-[16px] p-[16px]">
                    {filtered.map((cls) => (
                        <div
                            key={cls.id}
                            className="border border-[#F0F0F0] rounded-[12px] p-[18px] hover:shadow-md transition-shadow cursor-pointer"
                            onClick={() => setSelectedClass(cls)}
                        >
                            <div className="flex items-center justify-between mb-[12px]">
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-[#EFF6FF] rounded-[10px] p-[8px]">
                                        <School size={18} className="text-[#155DFC]" />
                                    </div>
                                    <div>
                                        <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#111827]">{cls.name}</p>
                                        <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280]">{cls.program}</p>
                                    </div>
                                </div>
                                <span className={`px-[8px] py-[3px] rounded-full text-[11px] font-medium ${statusMap[cls.status]}`}>
                                    {cls.status}
                                </span>
                            </div>

                            <div className="space-y-[8px]">
                                <div className="flex items-center gap-[8px]">
                                    <Users size={14} className="text-[#9CA3AF]" />
                                    <span className="font-['Inter',sans-serif] text-[12px] text-[#374151]">{cls.teacher}</span>
                                </div>
                                <div className="flex items-center gap-[8px]">
                                    <Clock size={14} className="text-[#9CA3AF]" />
                                    <span className="font-['Inter',sans-serif] text-[12px] text-[#374151]">{cls.schedule}</span>
                                </div>
                                <div className="flex items-center gap-[8px]">
                                    <MapPin size={14} className="text-[#9CA3AF]" />
                                    <span className="font-['Inter',sans-serif] text-[12px] text-[#374151]">{cls.room}</span>
                                </div>
                            </div>

                            <div className="mt-[14px] pt-[12px] border-t border-[#F5F5F5]">
                                <div className="flex items-center justify-between mb-[6px]">
                                    <span className="font-['Inter',sans-serif] text-[11px] text-[#9CA3AF]">Students</span>
                                    <span className="font-['Inter',sans-serif] text-[12px] font-medium text-[#111827]">{cls.students}/{cls.maxStudents}</span>
                                </div>
                                <div className="bg-[#F3F4F6] rounded-full h-[5px] overflow-hidden">
                                    <div
                                        className="h-full rounded-full transition-all bg-[#155DFC]"
                                        style={{ width: `${(cls.students / cls.maxStudents) * 100}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between px-[16px] py-[12px] border-t border-[#F5F5F5]">
                    <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280]">
                        Showing {filtered.length} of {classes.length} classes
                    </p>
                    <div className="flex items-center gap-[4px]">
                        <button className="p-[6px] rounded-[6px] text-[#9CA3AF] hover:bg-[#F3F4F6] transition-colors"><ChevronLeft size={16} /></button>
                        <button className="px-[10px] py-[4px] rounded-[6px] bg-[#155DFC] text-white font-['Inter',sans-serif] text-[12px] font-medium">1</button>
                        <button className="p-[6px] rounded-[6px] text-[#9CA3AF] hover:bg-[#F3F4F6] transition-colors"><ChevronRight size={16} /></button>
                    </div>
                </div>
            </div>

            {/* Class Detail Modal */}
            {selectedClass && (
                <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center" onClick={() => setSelectedClass(null)}>
                    <div className="bg-white rounded-[16px] w-[480px] p-[24px] shadow-xl" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between mb-[20px]">
                            <h3 className="font-['Inter',sans-serif] text-[18px] font-bold text-[#111827]">Class Details</h3>
                            <button onClick={() => setSelectedClass(null)} className="text-[#9CA3AF] hover:text-[#374151] transition-colors text-[20px]">×</button>
                        </div>
                        <div className="flex items-center gap-[12px] mb-[20px]">
                            <div className="bg-[#EFF6FF] rounded-[12px] p-[12px]">
                                <School size={24} className="text-[#155DFC]" />
                            </div>
                            <div>
                                <p className="font-['Inter',sans-serif] text-[16px] font-semibold text-[#111827]">{selectedClass.name}</p>
                                <p className="font-['Inter',sans-serif] text-[13px] text-[#6B7280]">{selectedClass.program}</p>
                            </div>
                            <span className={`ml-auto px-[10px] py-[4px] rounded-full text-[12px] font-medium ${statusMap[selectedClass.status]}`}>
                                {selectedClass.status}
                            </span>
                        </div>
                        <div className="grid grid-cols-2 gap-[16px]">
                            {[
                                { label: "Teacher", value: selectedClass.teacher },
                                { label: "Room", value: selectedClass.room },
                                { label: "Schedule", value: selectedClass.schedule },
                                { label: "Start Date", value: selectedClass.startDate },
                                { label: "Students", value: `${selectedClass.students} / ${selectedClass.maxStudents}` },
                                { label: "Capacity", value: `${Math.round((selectedClass.students / selectedClass.maxStudents) * 100)}% filled` },
                            ].map((f) => (
                                <div key={f.label}>
                                    <p className="font-['Inter',sans-serif] text-[11px] text-[#9CA3AF] uppercase mb-[2px]">{f.label}</p>
                                    <p className="font-['Inter',sans-serif] text-[13px] text-[#111827]">{f.value}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-end mt-[20px]">
                            <button className="flex items-center gap-[6px] px-[14px] py-[8px] bg-[#155DFC] text-white rounded-[8px] hover:bg-[#1249D6] transition-colors font-['Inter',sans-serif] text-[13px] font-medium">
                                <Eye size={14} />
                                View Students
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
