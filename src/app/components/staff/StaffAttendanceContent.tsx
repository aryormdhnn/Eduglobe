import { useState } from "react";
import {
    Search,
    Calendar,
    ChevronLeft,
    ChevronRight,
    CheckCircle2,
    XCircle,
    Clock,
    Users,
    UserCheck,
    UserX,
    Download,
} from "lucide-react";

interface AttendanceRecord {
    id: number;
    studentName: string;
    enrollmentId: string;
    program: string;
    date: string;
    checkIn: string;
    checkOut: string;
    status: "Present" | "Absent" | "Late" | "Excused";
}

const attendanceData: AttendanceRecord[] = [
    { id: 1, studentName: "Emma Thompson", enrollmentId: "ENR001", program: "Business English Course", date: "2025-03-11", checkIn: "08:55", checkOut: "15:00", status: "Present" },
    { id: 2, studentName: "Liam Johnson", enrollmentId: "ENR002", program: "IELTS Preparation", date: "2025-03-11", checkIn: "09:15", checkOut: "15:00", status: "Late" },
    { id: 3, studentName: "Sophie Chen", enrollmentId: "ENR003", program: "General English", date: "2025-03-11", checkIn: "-", checkOut: "-", status: "Absent" },
    { id: 4, studentName: "Ahmad Faiz", enrollmentId: "ENR004", program: "Business English Course", date: "2025-03-11", checkIn: "08:50", checkOut: "15:00", status: "Present" },
    { id: 5, studentName: "Maria Garcia", enrollmentId: "ENR005", program: "Cambridge FCE", date: "2025-03-11", checkIn: "08:58", checkOut: "15:00", status: "Present" },
    { id: 6, studentName: "Kenji Tanaka", enrollmentId: "ENR006", program: "General English", date: "2025-03-11", checkIn: "-", checkOut: "-", status: "Excused" },
    { id: 7, studentName: "Fatimah Zahra", enrollmentId: "ENR007", program: "IELTS Preparation", date: "2025-03-11", checkIn: "08:45", checkOut: "15:00", status: "Present" },
    { id: 8, studentName: "David Kim", enrollmentId: "ENR008", program: "Business English Course", date: "2025-03-11", checkIn: "09:05", checkOut: "14:30", status: "Late" },
    { id: 9, studentName: "Aisha Rahman", enrollmentId: "ENR009", program: "General English", date: "2025-03-11", checkIn: "08:52", checkOut: "15:00", status: "Present" },
    { id: 10, studentName: "Carlos Rivera", enrollmentId: "ENR010", program: "Cambridge FCE", date: "2025-03-11", checkIn: "-", checkOut: "-", status: "Absent" },
];

const statusConfig: Record<string, { bg: string; icon: React.ReactNode }> = {
    Present: { bg: "bg-[#DCFCE7] text-[#16A34A]", icon: <CheckCircle2 size={12} /> },
    Absent: { bg: "bg-[#FEE2E2] text-[#DC2626]", icon: <XCircle size={12} /> },
    Late: { bg: "bg-[#FEF9C3] text-[#CA8A04]", icon: <Clock size={12} /> },
    Excused: { bg: "bg-[#E0E7FF] text-[#4F46E5]", icon: <CheckCircle2 size={12} /> },
};

export function StaffAttendanceContent() {
    const [search, setSearch] = useState("");
    const [dateFilter, setDateFilter] = useState("2025-03-11");
    const [statusFilter, setStatusFilter] = useState("All");

    const filtered = attendanceData.filter((r) => {
        const matchSearch =
            r.studentName.toLowerCase().includes(search.toLowerCase()) ||
            r.enrollmentId.toLowerCase().includes(search.toLowerCase());
        const matchStatus = statusFilter === "All" || r.status === statusFilter;
        return matchSearch && matchStatus;
    });

    const present = attendanceData.filter((r) => r.status === "Present").length;
    const absent = attendanceData.filter((r) => r.status === "Absent").length;
    const late = attendanceData.filter((r) => r.status === "Late").length;
    const attendanceRate = Math.round((present / attendanceData.length) * 100);

    return (
        <div className="space-y-[20px]">
            {/* Stats */}
            <div className="grid grid-cols-4 gap-[16px]">
                {[
                    { label: "Total Students", value: attendanceData.length.toString(), icon: <Users size={20} className="text-[#155DFC]" />, bg: "bg-[#EFF6FF]", sub: "Today's record" },
                    { label: "Present", value: present.toString(), icon: <UserCheck size={20} className="text-[#16A34A]" />, bg: "bg-[#F0FDF4]", sub: `${attendanceRate}% attendance` },
                    { label: "Absent", value: absent.toString(), icon: <UserX size={20} className="text-[#DC2626]" />, bg: "bg-[#FEF2F2]", sub: "Needs follow-up" },
                    { label: "Late", value: late.toString(), icon: <Clock size={20} className="text-[#F59E0B]" />, bg: "bg-[#FFFBEB]", sub: "Arrived after 9:00" },
                ].map((s) => (
                    <div key={s.label} className="bg-white rounded-[12px] border border-[#F0F0F0] p-[20px]">
                        <div className="flex items-center gap-[10px] mb-[10px]">
                            <div className={`${s.bg} rounded-[10px] p-[8px]`}>{s.icon}</div>
                        </div>
                        <p className={`font-['Inter',sans-serif] text-[24px] font-bold text-[#111827]`}>{s.value}</p>
                        <div className="flex items-center justify-between mt-[2px]">
                            <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280]">{s.label}</p>
                            <p className="font-['Inter',sans-serif] text-[11px] text-[#9CA3AF]">{s.sub}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Attendance Rate Bar */}
            <div className="bg-white rounded-[12px] border border-[#F0F0F0] p-[20px]">
                <div className="flex items-center justify-between mb-[10px]">
                    <h3 className="font-['Inter',sans-serif] text-[15px] font-semibold text-[#111827]">Today's Attendance Rate</h3>
                    <span className="font-['Inter',sans-serif] text-[20px] font-bold text-[#155DFC]">{attendanceRate}%</span>
                </div>
                <div className="bg-[#F3F4F6] rounded-full h-[10px] overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#155DFC] to-[#38BDF8] transition-all duration-700" style={{ width: `${attendanceRate}%` }} />
                </div>
                <div className="flex items-center gap-[20px] mt-[10px]">
                    {[
                        { label: "Present", count: present, color: "#16A34A" },
                        { label: "Late", count: late, color: "#F59E0B" },
                        { label: "Absent", count: absent, color: "#DC2626" },
                        { label: "Excused", count: attendanceData.filter(r => r.status === "Excused").length, color: "#4F46E5" },
                    ].map((item) => (
                        <div key={item.label} className="flex items-center gap-[6px]">
                            <div className="size-[8px] rounded-full" style={{ backgroundColor: item.color }} />
                            <span className="font-['Inter',sans-serif] text-[12px] text-[#6B7280]">{item.label}: {item.count}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-[12px] border border-[#F0F0F0] overflow-hidden">
                {/* Toolbar */}
                <div className="flex items-center justify-between p-[16px] border-b border-[#F5F5F5]">
                    <div className="flex items-center gap-[10px]">
                        <div className="flex items-center gap-[8px] bg-[#F9FAFB] border border-[#E5E7EB] rounded-[8px] px-[12px] py-[8px] w-[240px]">
                            <Search size={16} className="text-[#9CA3AF]" />
                            <input
                                type="text"
                                placeholder="Search students..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="bg-transparent outline-none font-['Inter',sans-serif] text-[13px] text-[#111827] w-full placeholder:text-[#9CA3AF]"
                            />
                        </div>
                        <div className="flex items-center gap-[6px] bg-[#F9FAFB] border border-[#E5E7EB] rounded-[8px] px-[12px] py-[8px]">
                            <Calendar size={14} className="text-[#9CA3AF]" />
                            <input
                                type="date"
                                value={dateFilter}
                                onChange={(e) => setDateFilter(e.target.value)}
                                className="bg-transparent outline-none font-['Inter',sans-serif] text-[13px] text-[#111827]"
                            />
                        </div>
                        <div className="flex items-center gap-[2px] bg-[#F3F4F6] rounded-[8px] p-[2px]">
                            {["All", "Present", "Absent", "Late", "Excused"].map((f) => (
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
                    <button className="flex items-center gap-[6px] px-[12px] py-[8px] border border-[#E5E7EB] rounded-[8px] text-[#374151] hover:bg-[#F9FAFB] transition-colors">
                        <Download size={14} />
                        <span className="font-['Inter',sans-serif] text-[13px]">Export</span>
                    </button>
                </div>

                {/* Table */}
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-[#F5F5F5]">
                            {["Enrollment ID", "Student Name", "Program", "Date", "Check In", "Check Out", "Status"].map((h) => (
                                <th key={h} className="text-left px-[16px] py-[12px] font-['Inter',sans-serif] text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider">
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((r) => {
                            const sc = statusConfig[r.status];
                            return (
                                <tr key={r.id} className="border-b border-[#F5F5F5] hover:bg-[#FAFAFA] transition-colors">
                                    <td className="px-[16px] py-[12px] font-['Inter',sans-serif] text-[13px] text-[#155DFC] font-medium">{r.enrollmentId}</td>
                                    <td className="px-[16px] py-[12px]">
                                        <div className="flex items-center gap-[10px]">
                                            <div className="bg-[#EFF6FF] rounded-full size-[32px] flex items-center justify-center shrink-0">
                                                <span className="font-['Inter',sans-serif] text-[11px] font-semibold text-[#155DFC]">
                                                    {r.studentName.split(" ").map(n => n[0]).join("")}
                                                </span>
                                            </div>
                                            <span className="font-['Inter',sans-serif] text-[13px] font-medium text-[#111827]">{r.studentName}</span>
                                        </div>
                                    </td>
                                    <td className="px-[16px] py-[12px] font-['Inter',sans-serif] text-[12px] text-[#6B7280]">{r.program}</td>
                                    <td className="px-[16px] py-[12px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{r.date}</td>
                                    <td className="px-[16px] py-[12px] font-['Inter',sans-serif] text-[13px] text-[#374151] font-medium">{r.checkIn}</td>
                                    <td className="px-[16px] py-[12px] font-['Inter',sans-serif] text-[13px] text-[#374151] font-medium">{r.checkOut}</td>
                                    <td className="px-[16px] py-[12px]">
                                        <span className={`inline-flex items-center gap-[4px] px-[8px] py-[3px] rounded-full text-[11px] font-medium ${sc.bg}`}>
                                            {sc.icon}
                                            {r.status}
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="flex items-center justify-between px-[16px] py-[12px]">
                    <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280]">
                        Showing {filtered.length} of {attendanceData.length} records
                    </p>
                    <div className="flex items-center gap-[4px]">
                        <button className="p-[6px] rounded-[6px] text-[#9CA3AF] hover:bg-[#F3F4F6] transition-colors"><ChevronLeft size={16} /></button>
                        <button className="px-[10px] py-[4px] rounded-[6px] bg-[#155DFC] text-white font-['Inter',sans-serif] text-[12px] font-medium">1</button>
                        <button className="p-[6px] rounded-[6px] text-[#9CA3AF] hover:bg-[#F3F4F6] transition-colors"><ChevronRight size={16} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
