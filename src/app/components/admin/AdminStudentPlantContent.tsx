import { Leaf, TrendingUp, Droplets, Sun, Award, ChevronRight } from "lucide-react";

const students = [
    { id: 1, name: "Emma Thompson", level: "B2", totalModules: 6, completed: 6, streak: 45, points: 1250, badges: ["Top Performer", "Perfect Attendance"], status: "Graduated" as const },
    { id: 2, name: "James Wilson", level: "B1–B2", totalModules: 6, completed: 4, streak: 22, points: 890, badges: ["Consistent Learner"], status: "Growing" as const },
    { id: 3, name: "Sophia Martinez", level: "B1", totalModules: 6, completed: 3, streak: 15, points: 620, badges: ["Quick Learner"], status: "Growing" as const },
    { id: 4, name: "Liam Johnson", level: "C1", totalModules: 6, completed: 6, streak: 60, points: 1500, badges: ["Top Performer", "Most Improved", "Perfect Attendance"], status: "Graduated" as const },
    { id: 5, name: "Olivia Brown", level: "A2–B1", totalModules: 6, completed: 2, streak: 8, points: 340, badges: [], status: "Seedling" as const },
    { id: 6, name: "Ava Garcia", level: "B1", totalModules: 6, completed: 4, streak: 30, points: 980, badges: ["Consistent Learner", "Quick Learner"], status: "Growing" as const },
];

const statusConfig = {
    Seedling: { icon: "🌱", color: "text-[#16A34A]", bg: "bg-[#DCFCE7]", bar: "#BEF264" },
    Growing: { icon: "🌿", color: "text-[#0D9488]", bg: "bg-[#CCFBF1]", bar: "#22C55E" },
    Graduated: { icon: "🌳", color: "text-[#155DFC]", bg: "bg-[#EFF6FF]", bar: "#155DFC" },
};

export function AdminStudentPlantContent() {
    return (
        <div className="space-y-[20px]">
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827]">Student Plant</h2>
                    <p className="font-['Inter',sans-serif] text-[14px] text-[#6B7280] mt-[4px]">
                        Track student learning journey — each student grows from Seedling 🌱 → Growing 🌿 → Graduated 🌳
                    </p>
                </div>
            </div>

            {/* Stage overview */}
            <div className="grid grid-cols-3 gap-[14px]">
                {(["Seedling", "Growing", "Graduated"] as const).map((stage) => {
                    const conf = statusConfig[stage];
                    const count = students.filter(s => s.status === stage).length;
                    return (
                        <div key={stage} className={`${conf.bg} rounded-[12px] p-[18px]`}>
                            <div className="flex items-center gap-[10px] mb-[8px]">
                                <span className="text-[28px]">{conf.icon}</span>
                                <div>
                                    <p className={`font-['Inter',sans-serif] font-bold text-[26px] ${conf.color}`}>{count}</p>
                                    <p className={`font-['Inter',sans-serif] text-[13px] ${conf.color}`}>{stage}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Student cards */}
            <div className="grid grid-cols-2 gap-[14px]">
                {students.map((s) => {
                    const conf = statusConfig[s.status];
                    const pct = Math.round((s.completed / s.totalModules) * 100);
                    return (
                        <div key={s.id} className="bg-white rounded-[12px] border border-[#F3F4F6] p-[20px] hover:border-[#E5E7EB] transition-colors">
                            <div className="flex items-start justify-between mb-[14px]">
                                <div className="flex items-center gap-[12px]">
                                    <div className={`${conf.bg} rounded-[10px] p-[10px] text-[20px]`}>{conf.icon}</div>
                                    <div>
                                        <h3 className="font-['Inter',sans-serif] font-bold text-[14px] text-[#111827]">{s.name}</h3>
                                        <p className="font-['Inter',sans-serif] text-[12px] text-[#9CA3AF]">CEFR {s.level}</p>
                                    </div>
                                </div>
                                <span className={`px-[8px] py-[3px] rounded-full text-[11px] font-semibold font-['Inter',sans-serif] ${conf.bg} ${conf.color}`}>{s.status}</span>
                            </div>

                            {/* Progress */}
                            <div className="mb-[14px]">
                                <div className="flex justify-between mb-[5px]">
                                    <span className="font-['Inter',sans-serif] text-[12px] text-[#374151]">Module Progress</span>
                                    <span className="font-['Inter',sans-serif] font-semibold text-[12px] text-[#111827]">{s.completed}/{s.totalModules}</span>
                                </div>
                                <div className="h-[7px] bg-[#F3F4F6] rounded-full overflow-hidden">
                                    <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: conf.bar }} />
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-[8px] mb-[14px]">
                                <div className="flex flex-col items-center gap-[4px] bg-[#F9FAFB] rounded-[8px] p-[8px]">
                                    <Leaf size={13} className="text-[#16A34A]" />
                                    <span className="font-['Inter',sans-serif] font-bold text-[13px] text-[#111827]">{pct}%</span>
                                    <span className="font-['Inter',sans-serif] text-[10px] text-[#9CA3AF]">Complete</span>
                                </div>
                                <div className="flex flex-col items-center gap-[4px] bg-[#F9FAFB] rounded-[8px] p-[8px]">
                                    <Sun size={13} className="text-[#F97316]" />
                                    <span className="font-['Inter',sans-serif] font-bold text-[13px] text-[#111827]">{s.streak}</span>
                                    <span className="font-['Inter',sans-serif] text-[10px] text-[#9CA3AF]">Day Streak</span>
                                </div>
                                <div className="flex flex-col items-center gap-[4px] bg-[#F9FAFB] rounded-[8px] p-[8px]">
                                    <Award size={13} className="text-[#7C3AED]" />
                                    <span className="font-['Inter',sans-serif] font-bold text-[13px] text-[#111827]">{s.points}</span>
                                    <span className="font-['Inter',sans-serif] text-[10px] text-[#9CA3AF]">Points</span>
                                </div>
                            </div>

                            {/* Badges */}
                            {s.badges.length > 0 && (
                                <div className="flex flex-wrap gap-[5px]">
                                    {s.badges.map((b) => (
                                        <span key={b} className="inline-flex items-center gap-[3px] px-[7px] py-[2px] bg-[#FFF7ED] text-[#F97316] rounded-full text-[10px] font-semibold font-['Inter',sans-serif]">
                                            🏅 {b}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
