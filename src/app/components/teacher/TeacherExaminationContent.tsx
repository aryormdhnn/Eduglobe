import { useState } from "react";
import { Search, ChevronLeft, ChevronRight, Eye, FileText, CheckCircle2, Clock, Calendar, Download } from "lucide-react";
import imgProfilePicture from "../../../assets/profile_picture.png";
import { toast } from "sonner";

interface StudentSubmission {
  id: string;
  studentName: string;
  studentEmail: string;
  examTitle: string;
  module: string;
  date: string;
  time: string;
  type: "online" | "on-campus";
  status: "pending-review" | "graded";
  score?: number;
  maxScore: number;
  correct?: number;
  wrong?: number;
  files: { name: string; size: string; url: string }[];
  feedback?: string;
}

const initialSubmissions: StudentSubmission[] = [
  {
    id: "SUB-001",
    studentName: "Jhon Doe",
    studentEmail: "jhondoe@eduglobe.edu",
    examTitle: "Final Examination",
    module: "Module 1",
    date: "12 Jan 2026",
    time: "09:00 AM - 09:45 AM",
    type: "on-campus",
    status: "pending-review",
    maxScore: 100,
    files: [
      { name: "Exam_Answer_Sheet_Jhon.pdf", size: "2.4 MB", url: "#" },
      { name: "Speaking_Screenshot.png", size: "1.1 MB", url: "#" },
    ]
  },
  {
    id: "SUB-002",
    studentName: "Emma Thompson",
    studentEmail: "emma.t@eduglobe.edu",
    examTitle: "Midterm Test",
    module: "Module 2",
    date: "11 Jan 2026",
    time: "10:00 AM - 11:00 AM",
    type: "online",
    status: "graded",
    score: 85,
    maxScore: 100,
    correct: 34,
    wrong: 6,
    files: [],
    feedback: "Excellent grammar. Keep practicing speaking."
  },
  {
    id: "SUB-003",
    studentName: "Liam Johnson",
    studentEmail: "liam.j@eduglobe.edu",
    examTitle: "Placement Test",
    module: "General",
    date: "10 Jan 2026",
    time: "14:00 PM - 15:00 PM",
    type: "on-campus",
    status: "pending-review",
    maxScore: 100,
    files: [
      { name: "Placement_Written.pdf", size: "1.8 MB", url: "#" }
    ]
  }
];

function ExamReviewDetail({ submission, onBack, onSubmitGrade }: { submission: StudentSubmission; onBack: () => void; onSubmitGrade: (id: string, score: number, correct: number, wrong: number, feedback: string) => void }) {
  const [score, setScore] = useState(submission.score?.toString() || "");
  const [correct, setCorrect] = useState(submission.correct?.toString() || "");
  const [wrong, setWrong] = useState(submission.wrong?.toString() || "");
  const [feedback, setFeedback] = useState(submission.feedback || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!score || !correct || !wrong || !feedback) {
      toast.error("Please fill in all grading fields");
      return;
    }
    onSubmitGrade(submission.id, Number(score), Number(correct), Number(wrong), feedback);
  };

  return (
    <div className="space-y-[20px]">
      <button onClick={onBack} className="flex items-center gap-[6px] font-['Inter',sans-serif] text-[14px] text-[#374151] hover:text-[#111827] transition-colors">
        <ChevronLeft size={18} /><span>Back to Submissions</span>
      </button>

      <div className="grid grid-cols-[1fr_400px] gap-[24px]">
        {/* Left Col: Submission Details & Files */}
        <div className="space-y-[24px]">
          <div className="bg-white rounded-[16px] border border-[#F3F4F6] p-[24px]">
            <h2 className="font-['Inter',sans-serif] font-bold text-[18px] text-[#111827] mb-[16px]">Submission Details</h2>
            
            <div className="grid grid-cols-2 gap-[16px] mb-[20px] p-[16px] bg-[#F9FAFB] rounded-[12px] border border-[#F3F4F6]">
              <div>
                <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280] mb-[4px]">Student</p>
                <div className="flex items-center gap-[8px]">
                  <img src={imgProfilePicture} alt="Student" className="size-[24px] rounded-full object-cover" />
                  <p className="font-['Inter',sans-serif] font-semibold text-[14px] text-[#111827]">{submission.studentName}</p>
                </div>
              </div>
              <div>
                <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280] mb-[4px]">Examination</p>
                <p className="font-['Inter',sans-serif] font-medium text-[14px] text-[#111827]">{submission.examTitle} ({submission.module})</p>
              </div>
              <div>
                <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280] mb-[4px]">Date & Time</p>
                <div className="flex items-center gap-[6px] text-[#111827] font-medium text-[13px]">
                  <Calendar size={14} className="text-[#6B7280]" /> {submission.date} <Clock size={14} className="ml-[4px] text-[#6B7280]" /> {submission.time}
                </div>
              </div>
              <div>
                <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280] mb-[4px]">Type</p>
                <span className={`px-[8px] py-[2px] rounded-full text-[11px] font-semibold font-['Inter',sans-serif] ${submission.type === "on-campus" ? "bg-[#FFF7ED] text-[#F97316]" : "bg-[#EFF6FF] text-[#155DFC]"}`}>
                  {submission.type === "on-campus" ? "On Campus" : "Online"}
                </span>
              </div>
            </div>

            <h3 className="font-['Inter',sans-serif] font-semibold text-[15px] text-[#111827] mb-[12px]">Attached Files</h3>
            {submission.files.length > 0 ? (
              <div className="space-y-[12px]">
                {submission.files.map((file, i) => (
                  <div key={i} className="flex items-center justify-between p-[12px] border border-[#E5E7EB] rounded-[8px] hover:bg-[#F9FAFB] transition-colors">
                    <div className="flex items-center gap-[12px]">
                      <div className="size-[36px] bg-[#EFF6FF] rounded-[8px] flex items-center justify-center">
                        <FileText size={18} className="text-[#155DFC]" />
                      </div>
                      <div>
                        <p className="font-['Inter',sans-serif] font-medium text-[13px] text-[#111827]">{file.name}</p>
                        <p className="font-['Inter',sans-serif] text-[11px] text-[#6B7280]">{file.size}</p>
                      </div>
                    </div>
                    <button className="flex items-center gap-[6px] px-[12px] py-[6px] bg-white border border-[#D1D5DB] rounded-[6px] font-['Inter',sans-serif] text-[12px] font-medium text-[#374151] hover:bg-[#F3F4F6] transition-colors">
                      <Download size={14} /> Download
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="font-['Inter',sans-serif] text-[13px] text-[#6B7280]">No files attached to this submission (Online Test)</p>
            )}
          </div>
        </div>

        {/* Right Col: Grading Form */}
        <div className="bg-white rounded-[16px] border border-[#F3F4F6] p-[24px] h-fit">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-between mb-[20px]">
              <h2 className="font-['Inter',sans-serif] font-bold text-[18px] text-[#111827]">Grading & Feedback</h2>
              {submission.status === "graded" && <span className="flex items-center gap-[4px] px-[8px] py-[2px] bg-[#DCFCE7] text-[#16A34A] rounded-full text-[11px] font-semibold"><CheckCircle2 size={12} /> Graded</span>}
            </div>

            <div className="space-y-[16px] mb-[24px]">
              <div>
                <label className="font-['Inter',sans-serif] font-medium text-[13px] text-[#374151] block mb-[6px]">Final Score (%)</label>
                <input 
                  type="number" min="0" max="100" 
                  value={score} onChange={(e) => setScore(e.target.value)}
                  className="w-full border border-[#D1D5DB] rounded-[8px] px-[12px] py-[10px] font-['Inter',sans-serif] text-[14px] outline-none focus:border-[#155DFC] focus:ring-1 focus:ring-[#155DFC]" 
                  placeholder="e.g. 85"
                />
              </div>
              <div className="grid grid-cols-2 gap-[12px]">
                <div>
                  <label className="font-['Inter',sans-serif] font-medium text-[13px] text-[#374151] block mb-[6px]">Correct Answers</label>
                  <input 
                    type="number" min="0"
                    value={correct} onChange={(e) => setCorrect(e.target.value)}
                    className="w-full border border-[#D1D5DB] rounded-[8px] px-[12px] py-[10px] font-['Inter',sans-serif] text-[14px] outline-none focus:border-[#155DFC] focus:ring-1 focus:ring-[#155DFC]" 
                    placeholder="e.g. 40"
                  />
                </div>
                <div>
                  <label className="font-['Inter',sans-serif] font-medium text-[13px] text-[#374151] block mb-[6px]">Wrong Answers</label>
                  <input 
                    type="number" min="0"
                    value={wrong} onChange={(e) => setWrong(e.target.value)}
                    className="w-full border border-[#D1D5DB] rounded-[8px] px-[12px] py-[10px] font-['Inter',sans-serif] text-[14px] outline-none focus:border-[#155DFC] focus:ring-1 focus:ring-[#155DFC]" 
                    placeholder="e.g. 10"
                  />
                </div>
              </div>
              <div>
                <label className="font-['Inter',sans-serif] font-medium text-[13px] text-[#374151] block mb-[6px]">Instructor Feedback</label>
                <textarea 
                  rows={4}
                  value={feedback} onChange={(e) => setFeedback(e.target.value)}
                  className="w-full border border-[#D1D5DB] rounded-[8px] px-[12px] py-[10px] font-['Inter',sans-serif] text-[14px] outline-none focus:border-[#155DFC] focus:ring-1 focus:ring-[#155DFC] resize-none" 
                  placeholder="Write detailed feedback for the student..."
                />
              </div>
            </div>

            <button type="submit" className="w-full bg-[#155DFC] hover:bg-[#1249CC] transition-colors text-white rounded-[8px] py-[12px] font-['Inter',sans-serif] font-semibold text-[14px]">
              {submission.status === "graded" ? "Update Grade" : "Submit Grade"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export function TeacherExaminationContent() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSubmission, setSelectedSubmission] = useState<StudentSubmission | null>(null);
  const [submissions, setSubmissions] = useState<StudentSubmission[]>(initialSubmissions);

  const filtered = submissions.filter(s => 
    s.studentName.toLowerCase().includes(search.toLowerCase()) || 
    s.examTitle.toLowerCase().includes(search.toLowerCase())
  );

  const pendingCount = submissions.filter(s => s.status === "pending-review").length;

  const handleSubmitGrade = (id: string, score: number, correct: number, wrong: number, feedback: string) => {
    setSubmissions(prev => prev.map(s => s.id === id ? { ...s, score, correct, wrong, feedback, status: "graded" } : s));
    toast.success("Grade submitted successfully");
    setSelectedSubmission(null);
  };

  if (selectedSubmission) {
    return <ExamReviewDetail submission={selectedSubmission} onBack={() => setSelectedSubmission(null)} onSubmitGrade={handleSubmitGrade} />;
  }

  return (
    <div className="space-y-[20px]">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827]">Examination Submissions</h2>
          <p className="font-['Inter',sans-serif] text-[14px] text-[#6B7280] mt-[4px]">Review and grade student examination files</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-[14px]">
        {[
          { label: "Total Submissions", value: submissions.length, color: "text-[#155DFC]", bg: "bg-[#EFF6FF]" },
          { label: "Pending Review", value: pendingCount, color: "text-[#F97316]", bg: "bg-[#FFF7ED]" },
          { label: "Graded", value: submissions.length - pendingCount, color: "text-[#16A34A]", bg: "bg-[#DCFCE7]" },
        ].map((c) => (
          <div key={c.label} className={`${c.bg} rounded-[12px] p-[16px]`}>
            <p className={`font-['Inter',sans-serif] font-bold text-[24px] ${c.color}`}>{c.value}</p>
            <p className={`font-['Inter',sans-serif] text-[13px] ${c.color}`}>{c.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-[12px] border border-[#F3F4F6]">
        <div className="flex items-center justify-between px-[20px] py-[16px] border-b border-[#F3F4F6]">
          <div className="bg-[#f6f6f6] flex items-center gap-[8px] px-[12px] py-[8px] rounded-full w-[280px]">
            <Search size={14} className="text-[#a0a0a0] shrink-0" />
            <input className="bg-transparent font-['Inter',sans-serif] text-[13px] outline-none flex-1 placeholder:text-[#a0a0a0]" placeholder="Search student or exam..." value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#F3F4F6] bg-[#F9FAFB]">
                {["Submission ID", "Student Name", "Examination", "Date", "Status", "Score", "Actions"].map((col) => (
                  <th key={col} className="px-[16px] py-[14px] text-left font-['Inter',sans-serif] font-semibold text-[13px] text-[#374151] whitespace-nowrap">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((sub) => (
                <tr key={sub.id} className="border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors">
                  <td className="px-[16px] py-[16px] font-['Inter',sans-serif] text-[12px] text-[#6B7280]">{sub.id}</td>
                  <td className="px-[16px] py-[16px]">
                    <div className="flex items-center gap-[10px]">
                      <img src={imgProfilePicture} alt="" className="size-[28px] rounded-full object-cover" />
                      <div>
                        <p className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827]">{sub.studentName}</p>
                        <p className="font-['Inter',sans-serif] text-[11px] text-[#6B7280]">{sub.studentEmail}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-[16px] py-[16px]">
                    <p className="font-['Inter',sans-serif] font-medium text-[13px] text-[#111827]">{sub.examTitle}</p>
                    <p className="font-['Inter',sans-serif] text-[11px] text-[#6B7280]">{sub.module}</p>
                  </td>
                  <td className="px-[16px] py-[16px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{sub.date}</td>
                  <td className="px-[16px] py-[16px]">
                    <span className={`inline-flex items-center gap-[4px] px-[8px] py-[3px] rounded-full text-[11px] font-semibold font-['Inter',sans-serif] ${sub.status === "graded" ? "bg-[#DCFCE7] text-[#16A34A]" : "bg-[#FEF3C7] text-[#D97706]"}`}>
                      {sub.status === "graded" ? <><CheckCircle2 size={11} />Graded</> : <><Clock size={11} />Pending</>}
                    </span>
                  </td>
                  <td className="px-[16px] py-[16px]">
                    <span className={`font-['Inter',sans-serif] font-semibold text-[13px] ${sub.score ? "text-[#111827]" : "text-[#9CA3AF]"}`}>{sub.score ? `${sub.score}%` : "-"}</span>
                  </td>
                  <td className="px-[16px] py-[16px]">
                    <button onClick={() => setSelectedSubmission(sub)} className={`flex items-center gap-[6px] px-[12px] py-[8px] rounded-[6px] font-['Inter',sans-serif] text-[12px] font-medium transition-colors ${sub.status === "pending-review" ? "bg-[#155DFC] hover:bg-[#1249CC] text-white" : "bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#374151]"}`}>
                      <Eye size={14} /> {sub.status === "pending-review" ? "Review" : "View"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between px-[20px] py-[14px]">
          <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} className="flex items-center gap-[6px] font-['Inter',sans-serif] text-[13px] text-[#374151]"><ChevronLeft size={16} />Previous</button>
          <div className="flex items-center gap-[4px]">{[1].map(p => <button key={p} onClick={() => setCurrentPage(p)} className={`size-[32px] flex items-center justify-center rounded-[6px] font-['Inter',sans-serif] text-[13px] ${currentPage === p ? "bg-[#155DFC] text-white" : "text-[#374151] hover:bg-[#F3F4F6]"}`}>{p}</button>)}</div>
          <button onClick={() => setCurrentPage(p => Math.min(1, p + 1))} className="flex items-center gap-[6px] font-['Inter',sans-serif] text-[13px] text-[#374151]">Next<ChevronRight size={16} /></button>
        </div>
      </div>
    </div>
  );
}
