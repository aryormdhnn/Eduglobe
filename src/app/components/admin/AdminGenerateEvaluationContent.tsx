import { useState } from "react";
import { Plus, Search, Send, Eye, ChevronLeft, ChevronRight, X, ClipboardList, Users, GraduationCap, CheckCircle2, Clock } from "lucide-react";

interface EvalCriteria { label: string; score: number; maxScore: number; }
interface EvaluationRecord {
    id: number; studentName: string; studentId: string; teacher: string; module: string;
    criteria: EvalCriteria[]; status: "Draft" | "Sent to Teacher" | "Completed";
    createdDate: string; submittedDate?: string;
}

const defaultCriteria: EvalCriteria[] = [
    { label: "Speaking Fluency", score: 0, maxScore: 25 },
    { label: "Writing Accuracy", score: 0, maxScore: 25 },
    { label: "Listening Comprehension", score: 0, maxScore: 25 },
    { label: "Vocabulary & Grammar", score: 0, maxScore: 25 },
];

const evaluations: EvaluationRecord[] = [
    { id: 1, studentName: "Emma Thompson", studentId: "2024PM00101", teacher: "Ms. Aisha", module: "Module 1-2", criteria: [{ label: "Speaking Fluency", score: 22, maxScore: 25 }, { label: "Writing Accuracy", score: 20, maxScore: 25 }, { label: "Listening Comprehension", score: 23, maxScore: 25 }, { label: "Vocabulary & Grammar", score: 21, maxScore: 25 }], status: "Completed", createdDate: "01/02/2025", submittedDate: "10/02/2025" },
    { id: 2, studentName: "James Wilson", studentId: "2024PM00102", teacher: "Mr. David", module: "Module 1-2", criteria: [{ label: "Speaking Fluency", score: 18, maxScore: 25 }, { label: "Writing Accuracy", score: 16, maxScore: 25 }, { label: "Listening Comprehension", score: 17, maxScore: 25 }, { label: "Vocabulary & Grammar", score: 15, maxScore: 25 }], status: "Completed", createdDate: "01/02/2025", submittedDate: "12/02/2025" },
    { id: 3, studentName: "Sophia Martinez", studentId: "2024PM00103", teacher: "Mr. Tom", module: "Module 3", criteria: defaultCriteria, status: "Sent to Teacher", createdDate: "15/02/2025" },
    { id: 4, studentName: "Liam Johnson", studentId: "2024PM00104", teacher: "Ms. Aisha", module: "Module 4", criteria: defaultCriteria, status: "Draft", createdDate: "20/02/2025" },
    { id: 5, studentName: "Olivia Brown", studentId: "2024PM00105", teacher: "Mr. David", module: "Module 5", criteria: defaultCriteria, status: "Sent to Teacher", createdDate: "22/02/2025" },
];

const students = [
    { name: "Emma Thompson", id: "2024PM00101", teacher: "Ms. Aisha", module: "Module 1-2" },
    { name: "James Wilson", id: "2024PM00102", teacher: "Mr. David", module: "Module 1-2" },
    { name: "Sophia Martinez", id: "2024PM00103", teacher: "Mr. Tom", module: "Module 3" },
    { name: "Liam Johnson", id: "2024PM00104", teacher: "Ms. Aisha", module: "Module 4" },
    { name: "Olivia Brown", id: "2024PM00105", teacher: "Mr. David", module: "Module 5" },
];

const statusMap = {
    Draft: { color: "bg-[#F3F4F6] text-[#6B7280]" },
    "Sent to Teacher": { color: "bg-[#FEF9C3] text-[#CA8A04]" },
    Completed: { color: "bg-[#DCFCE7] text-[#16A34A]" },
};

function EvalViewModal({ ev, onClose }: { ev: EvaluationRecord; onClose: () => void }) {
    const total = ev.criteria.reduce((a, c) => a + c.score, 0);
    const maxTotal = ev.criteria.reduce((a, c) => a + c.maxScore, 0);
    const grade = total >= 90 ? "A" : total >= 80 ? "B" : total >= 70 ? "C" : "F";
    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-[24px]" onClick={onClose}>
            <div className="bg-white w-full max-w-[560px] rounded-[12px] shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between px-[24px] py-[14px] border-b border-[#E5E7EB]">
                    <span className="font-['Inter',sans-serif] font-semibold text-[15px] text-[#111827]">Evaluation Report</span>
                    <button onClick={onClose} className="size-[32px] flex items-center justify-center rounded-[6px] hover:bg-[#F3F4F6] transition-colors"><X size={17} className="text-[#6B7280]" /></button>
                </div>
                <div className="p-[24px] space-y-[16px]">
                    <div className="grid grid-cols-2 gap-[8px]">
                        {[{ label: "Student", value: ev.studentName }, { label: "Student ID", value: ev.studentId }, { label: "Teacher", value: ev.teacher }, { label: "Module", value: ev.module }].map((r) => (
                            <div key={r.label} className="bg-[#F9FAFB] rounded-[8px] px-[12px] py-[8px]">
                                <p className="font-['Inter',sans-serif] text-[11px] text-[#9CA3AF]">{r.label}</p>
                                <p className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827]">{r.value}</p>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-[10px]">
                        {ev.criteria.map((c) => {
                            const pct = ev.status === "Completed" ? Math.round((c.score / c.maxScore) * 100) : 0;
                            return (
                                <div key={c.label}>
                                    <div className="flex justify-between mb-[4px]">
                                        <span className="font-['Inter',sans-serif] text-[13px] text-[#374151]">{c.label}</span>
                                        <span className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827]">{ev.status === "Completed" ? `${c.score}/${c.maxScore}` : `—/${c.maxScore}`}</span>
                                    </div>
                                    <div className="h-[7px] bg-[#F3F4F6] rounded-full overflow-hidden"><div className="h-full bg-[#155DFC] rounded-full" style={{ width: `${pct}%` }} /></div>
                                </div>
                            );
                        })}
                    </div>
                    {ev.status === "Completed" && (
                        <div className="flex items-center justify-between bg-[#EFF6FF] rounded-[10px] px-[16px] py-[12px]">
                            <div>
                                <p className="font-['Inter',sans-serif] text-[11px] text-[#6B7280]">Total Score</p>
                                <p className="font-['Inter',sans-serif] font-bold text-[22px] text-[#155DFC]">{total}<span className="text-[13px] font-normal text-[#9CA3AF]"> / {maxTotal}</span></p>
                            </div>
                            <div className="text-center">
                                <p className="font-['Inter',sans-serif] text-[11px] text-[#6B7280] mb-[2px]">Grade</p>
                                <div className="size-[42px] flex items-center justify-center bg-[#155DFC] rounded-full">
                                    <span className="font-['Inter',sans-serif] font-black text-[18px] text-white">{grade}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function CreateEvalForm({ onClose }: { onClose: () => void }) {
    const [selectedStudent, setSelectedStudent] = useState("");
    const [sendTo, setSendTo] = useState<"teacher" | "admin">("teacher");
    const [notes, setNotes] = useState("");
    const [sent, setSent] = useState(false);
    const student = students.find((s) => s.name === selectedStudent);

    if (sent) return (
        <div className="bg-white rounded-[12px] border border-[#E5E7EB] p-[32px] text-center space-y-[14px]">
            <div className="size-[52px] bg-[#DCFCE7] rounded-full flex items-center justify-center mx-auto"><CheckCircle2 size={26} className="text-[#16A34A]" /></div>
            <h3 className="font-['Inter',sans-serif] font-bold text-[16px] text-[#111827]">Evaluation Sent!</h3>
            <p className="font-['Inter',sans-serif] text-[13px] text-[#6B7280]">Evaluation for <strong>{selectedStudent}</strong> sent to <strong>{sendTo === "teacher" ? student?.teacher : "Admin Review"}</strong>.</p>
            <button onClick={onClose} className="px-[20px] py-[9px] bg-[#155DFC] hover:bg-[#1249CC] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[13px] text-white transition-colors">Done</button>
        </div>
    );

    return (
        <div className="bg-white rounded-[12px] border border-[#E5E7EB] p-[24px] space-y-[14px]">
            <div className="flex items-center justify-between">
                <h3 className="font-['Inter',sans-serif] font-bold text-[15px] text-[#111827]">Generate New Evaluation</h3>
                <button onClick={onClose} className="size-[30px] flex items-center justify-center rounded-[6px] hover:bg-[#F3F4F6]"><X size={16} className="text-[#6B7280]" /></button>
            </div>
            <div>
                <label className="block font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] mb-[5px]">Select Student</label>
                <select value={selectedStudent} onChange={(e) => setSelectedStudent(e.target.value)} className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[9px] font-['Inter',sans-serif] text-[13px] outline-none focus:border-[#155DFC] transition-colors">
                    <option value="">— Choose a student —</option>
                    {students.map((s) => <option key={s.id} value={s.name}>{s.name} ({s.id}) — {s.module}</option>)}
                </select>
            </div>
            {student && (
                <div className="bg-[#F9FAFB] rounded-[8px] p-[12px] flex items-center gap-[12px]">
                    <div className="bg-[#EFF6FF] rounded-[8px] p-[7px]"><GraduationCap size={16} className="text-[#155DFC]" /></div>
                    <div><p className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827]">Teacher: {student.teacher}</p><p className="font-['Inter',sans-serif] text-[11px] text-[#9CA3AF]">{student.module}</p></div>
                </div>
            )}
            <div>
                <label className="block font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] mb-[5px]">Evaluation Criteria</label>
                <div className="border border-[#E5E7EB] rounded-[8px] divide-y divide-[#F3F4F6]">
                    {defaultCriteria.map((c) => (
                        <div key={c.label} className="flex items-center justify-between px-[14px] py-[10px]">
                            <span className="font-['Inter',sans-serif] text-[13px] text-[#374151]">{c.label}</span>
                            <span className="font-['Inter',sans-serif] text-[12px] text-[#9CA3AF]">Max: {c.maxScore} pts</span>
                        </div>
                    ))}
                    <div className="flex items-center justify-between px-[14px] py-[10px] bg-[#F9FAFB]">
                        <span className="font-['Inter',sans-serif] font-bold text-[13px] text-[#111827]">Total</span>
                        <span className="font-['Inter',sans-serif] font-bold text-[12px] text-[#155DFC]">100 pts</span>
                    </div>
                </div>
            </div>
            <div>
                <label className="block font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] mb-[5px]">Send To</label>
                <div className="grid grid-cols-2 gap-[8px]">
                    {(["teacher", "admin"] as const).map((opt) => (
                        <button key={opt} onClick={() => setSendTo(opt)} className={`flex items-center gap-[8px] px-[12px] py-[9px] rounded-[8px] border transition-colors ${sendTo === opt ? "border-[#155DFC] bg-[#EFF6FF]" : "border-[#E5E7EB]"}`}>
                            {opt === "teacher" ? <GraduationCap size={14} className={sendTo === opt ? "text-[#155DFC]" : "text-[#9CA3AF]"} /> : <Users size={14} className={sendTo === opt ? "text-[#155DFC]" : "text-[#9CA3AF]"} />}
                            <span className={`font-['Inter',sans-serif] font-semibold text-[13px] ${sendTo === opt ? "text-[#155DFC]" : "text-[#374151]"}`}>{opt === "teacher" ? "Teacher" : "Admin Review"}</span>
                        </button>
                    ))}
                </div>
            </div>
            <div>
                <label className="block font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] mb-[5px]">Notes (Optional)</label>
                <textarea rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Instructions for the teacher..." className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[9px] font-['Inter',sans-serif] text-[13px] outline-none focus:border-[#155DFC] resize-none placeholder:text-[#9CA3AF]" />
            </div>
            <div className="flex justify-end gap-[10px]">
                <button onClick={onClose} className="px-[16px] py-[9px] border border-[#E5E7EB] rounded-[8px] font-['Inter',sans-serif] text-[13px] text-[#374151] hover:bg-[#F9FAFB] transition-colors">Cancel</button>
                <button onClick={() => { if (selectedStudent) setSent(true); }} disabled={!selectedStudent} className="flex items-center gap-[7px] px-[16px] py-[9px] bg-[#155DFC] hover:bg-[#1249CC] disabled:opacity-40 rounded-[8px] font-['Inter',sans-serif] font-semibold text-[13px] text-white transition-colors">
                    <Send size={14} />Send Evaluation
                </button>
            </div>
        </div>
    );
}

export function AdminGenerateEvaluationContent() {
    const [search, setSearch] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [viewEval, setViewEval] = useState<EvaluationRecord | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [filterStatus, setFilterStatus] = useState<"all" | "Draft" | "Sent to Teacher" | "Completed">("all");

    const filtered = evaluations.filter((e) => {
        const matchSearch = e.studentName.toLowerCase().includes(search.toLowerCase()) || e.teacher.toLowerCase().includes(search.toLowerCase());
        const matchStatus = filterStatus === "all" || e.status === filterStatus;
        return matchSearch && matchStatus;
    });

    return (
        <>
            {viewEval && <EvalViewModal ev={viewEval} onClose={() => setViewEval(null)} />}
            <div className="space-y-[20px]">
                <div className="flex items-start justify-between">
                    <div>
                        <h2 className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827]">Generate Evaluation</h2>
                        <p className="font-['Inter',sans-serif] text-[14px] text-[#6B7280] mt-[4px]">Create and send evaluation forms to teachers for student assessment</p>
                    </div>
                    <button onClick={() => setShowForm(true)} className="flex items-center gap-[8px] bg-[#155DFC] hover:bg-[#1249CC] transition-colors text-white px-[16px] py-[10px] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[14px]">
                        <Plus size={16} />Generate Evaluation
                    </button>
                </div>
                <div className="grid grid-cols-3 gap-[14px]">
                    {[
                        { label: "Total", value: evaluations.length, color: "text-[#155DFC]", bg: "bg-[#EFF6FF]" },
                        { label: "Sent to Teacher", value: evaluations.filter(e => e.status === "Sent to Teacher").length, color: "text-[#CA8A04]", bg: "bg-[#FEF9C3]" },
                        { label: "Completed", value: evaluations.filter(e => e.status === "Completed").length, color: "text-[#16A34A]", bg: "bg-[#DCFCE7]" },
                    ].map((c) => (
                        <div key={c.label} className={`${c.bg} rounded-[12px] p-[16px] flex items-center gap-[14px]`}>
                            <ClipboardList size={24} className={c.color} />
                            <div><p className={`font-['Inter',sans-serif] font-bold text-[28px] ${c.color}`}>{c.value}</p><p className={`font-['Inter',sans-serif] text-[13px] ${c.color}`}>{c.label}</p></div>
                        </div>
                    ))}
                </div>
                {showForm && <CreateEvalForm onClose={() => setShowForm(false)} />}
                <div className="bg-white rounded-[12px] border border-[#F3F4F6]">
                    <div className="flex items-center justify-between px-[20px] py-[16px] border-b border-[#F3F4F6] flex-wrap gap-[10px]">
                        <div className="flex items-center gap-[4px] bg-[#F3F4F6] p-[4px] rounded-[8px]">
                            {(["all", "Draft", "Sent to Teacher", "Completed"] as const).map((s) => (
                                <button key={s} onClick={() => setFilterStatus(s)} className={`px-[10px] py-[6px] rounded-[6px] font-['Inter',sans-serif] text-[12px] transition-colors whitespace-nowrap ${filterStatus === s ? "bg-white text-[#111827] font-semibold shadow-sm" : "text-[#6B7280]"}`}>{s === "all" ? "All" : s}</button>
                            ))}
                        </div>
                        <div className="bg-[#f6f6f6] flex items-center gap-[8px] px-[12px] py-[8px] rounded-full w-[220px]">
                            <Search size={14} className="text-[#a0a0a0] shrink-0" />
                            <input className="bg-transparent font-['Inter',sans-serif] text-[13px] outline-none flex-1 placeholder:text-[#a0a0a0]" placeholder="Search student or teacher..." value={search} onChange={(e) => setSearch(e.target.value)} />
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-[#F3F4F6]">
                                    {["No.", "Student Name", "Student ID", "Teacher", "Module", "Created", "Submitted", "Status", "Actions"].map((col) => (
                                        <th key={col} className="px-[16px] py-[12px] text-left font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] whitespace-nowrap">{col}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((ev, idx) => (
                                    <tr key={ev.id} className="border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors">
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{idx + 1}.</td>
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827] whitespace-nowrap">{ev.studentName}</td>
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151]">{ev.studentId}</td>
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151] whitespace-nowrap">{ev.teacher}</td>
                                        <td className="px-[16px] py-[14px]"><span className="px-[7px] py-[2px] bg-[#F3F4F6] rounded-[4px] font-['Inter',sans-serif] text-[12px] text-[#374151]">{ev.module}</span></td>
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151] whitespace-nowrap">{ev.createdDate}</td>
                                        <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151]">{ev.submittedDate ?? "—"}</td>
                                        <td className="px-[16px] py-[14px]"><span className={`px-[8px] py-[3px] rounded-full text-[11px] font-semibold font-['Inter',sans-serif] ${statusMap[ev.status].color}`}>{ev.status}</span></td>
                                        <td className="px-[16px] py-[14px]">
                                            <div className="flex items-center gap-[6px]">
                                                <button onClick={() => setViewEval(ev)} className="flex items-center gap-[4px] px-[10px] py-[6px] rounded-[6px] bg-[#F3F4F6] hover:bg-[#E5E7EB] transition-colors">
                                                    <Eye size={13} className="text-[#374151]" /><span className="font-['Inter',sans-serif] text-[12px] text-[#374151]">View</span>
                                                </button>
                                                {ev.status === "Draft" && (
                                                    <button className="flex items-center gap-[4px] px-[10px] py-[6px] rounded-[6px] bg-[#155DFC] hover:bg-[#1249CC] transition-colors">
                                                        <Send size={13} className="text-white" /><span className="font-['Inter',sans-serif] text-[12px] text-white">Send</span>
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex items-center justify-between px-[20px] py-[14px]">
                        <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} className="flex items-center gap-[6px] font-['Inter',sans-serif] text-[13px] text-[#374151]"><ChevronLeft size={16} />Previous</button>
                        <div className="flex items-center gap-[4px]">{[1, 2].map(p => <button key={p} onClick={() => setCurrentPage(p)} className={`size-[32px] flex items-center justify-center rounded-[6px] font-['Inter',sans-serif] text-[13px] ${currentPage === p ? "bg-[#155DFC] text-white" : "text-[#374151] hover:bg-[#F3F4F6]"}`}>{p}</button>)}</div>
                        <button onClick={() => setCurrentPage(p => Math.min(2, p + 1))} className="flex items-center gap-[6px] font-['Inter',sans-serif] text-[13px] text-[#374151]">Next<ChevronRight size={16} /></button>
                    </div>
                </div>
            </div>
        </>
    );
}
