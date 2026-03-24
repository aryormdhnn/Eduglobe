import { useState } from "react";
import { Plus, Edit2, BookOpen, Users, Clock, ChevronRight } from "lucide-react";

const programs = [
    { id: 1, name: "Business English Course", code: "BEC-01", level: "B1–B2", duration: "12 weeks", enrolled: 56, modules: 6, fee: "MYR 3,000", status: "Active" as const },
    { id: 2, name: "IELTS Preparation", code: "IELTS-01", level: "B2–C1", duration: "8 weeks", enrolled: 24, modules: 4, fee: "MYR 2,500", status: "Active" as const },
    { id: 3, name: "General English", code: "GEN-01", level: "A1–A2", duration: "16 weeks", enrolled: 18, modules: 8, fee: "MYR 1,800", status: "Active" as const },
    { id: 4, name: "CEFR B2 Intensive", code: "CEFR-B2", level: "B2", duration: "6 weeks", enrolled: 10, modules: 3, fee: "MYR 2,000", status: "Active" as const },
    { id: 5, name: "Conversational English", code: "CON-01", level: "A2–B1", duration: "10 weeks", enrolled: 8, modules: 5, fee: "MYR 1,500", status: "Inactive" as const },
];

export function StaffProgramContent() {
    const [view, setView] = useState<"grid" | "list">("grid");

    return (
        <div className="space-y-[20px]">
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827]">Program</h2>
                    <p className="font-['Inter',sans-serif] text-[14px] text-[#6B7280] mt-[4px]">Manage all English language programs and courses</p>
                </div>
                <button className="flex items-center gap-[8px] bg-[#155DFC] hover:bg-[#1249CC] transition-colors text-white px-[16px] py-[10px] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[14px]">
                    <Plus size={16} />Add Program
                </button>
            </div>
            <div className="grid grid-cols-3 gap-[14px]">
                {[
                    { label: "Total Programs", value: programs.length, color: "text-[#155DFC]", bg: "bg-[#EFF6FF]" },
                    { label: "Active", value: programs.filter(p => p.status === "Active").length, color: "text-[#16A34A]", bg: "bg-[#DCFCE7]" },
                    { label: "Total Enrolled", value: programs.reduce((a, p) => a + p.enrolled, 0), color: "text-[#F97316]", bg: "bg-[#FFF7ED]" },
                ].map((c) => (
                    <div key={c.label} className={`${c.bg} rounded-[12px] p-[16px]`}>
                        <p className={`font-['Inter',sans-serif] font-bold text-[28px] ${c.color}`}>{c.value}</p>
                        <p className={`font-['Inter',sans-serif] text-[13px] ${c.color}`}>{c.label}</p>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-2 gap-[16px]">
                {programs.map((p) => (
                    <div key={p.id} className="bg-white rounded-[12px] border border-[#F3F4F6] p-[20px] hover:border-[#D1D5DB] transition-colors">
                        <div className="flex items-start justify-between mb-[14px]">
                            <div className="bg-[#EFF6FF] rounded-[10px] p-[10px]">
                                <BookOpen size={22} className="text-[#155DFC]" />
                            </div>
                            <div className="flex items-center gap-[8px]">
                                <span className={`px-[8px] py-[3px] rounded-full text-[11px] font-semibold font-['Inter',sans-serif] ${p.status === "Active" ? "bg-[#DCFCE7] text-[#16A34A]" : "bg-[#F3F4F6] text-[#6B7280]"}`}>
                                    {p.status}
                                </span>
                                <button className="p-[6px] rounded-[6px] hover:bg-[#F3F4F6] transition-colors">
                                    <Edit2 size={14} className="text-[#6B7280]" />
                                </button>
                            </div>
                        </div>
                        <h3 className="font-['Inter',sans-serif] font-bold text-[15px] text-[#111827] mb-[4px]">{p.name}</h3>
                        <p className="font-['Inter',sans-serif] text-[12px] text-[#9CA3AF] mb-[14px]">{p.code} · CEFR {p.level}</p>
                        <div className="grid grid-cols-3 gap-[10px] mb-[16px]">
                            <div className="flex items-center gap-[6px]">
                                <Users size={13} className="text-[#9CA3AF]" />
                                <span className="font-['Inter',sans-serif] text-[12px] text-[#374151]">{p.enrolled} Students</span>
                            </div>
                            <div className="flex items-center gap-[6px]">
                                <Clock size={13} className="text-[#9CA3AF]" />
                                <span className="font-['Inter',sans-serif] text-[12px] text-[#374151]">{p.duration}</span>
                            </div>
                            <div className="flex items-center gap-[6px]">
                                <BookOpen size={13} className="text-[#9CA3AF]" />
                                <span className="font-['Inter',sans-serif] text-[12px] text-[#374151]">{p.modules} Modules</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-[14px] border-t border-[#F3F4F6]">
                            <span className="font-['Inter',sans-serif] font-bold text-[15px] text-[#155DFC]">{p.fee}</span>
                            <button className="flex items-center gap-[4px] font-['Inter',sans-serif] text-[12px] text-[#155DFC] hover:underline">
                                View Details <ChevronRight size={13} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
