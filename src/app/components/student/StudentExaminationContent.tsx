import { useState, useRef } from "react";
import { ArrowLeft, Calendar, Clock, HelpCircle, Upload, FileText, X, CheckCircle2, Send } from "lucide-react";
import imgProfilePicture from "../../../assets/profile_picture.png";
import { toast } from "sonner";

interface ExamResult {
  id: number;
  title: string;
  examDate: string;
  startTime: string;
  endTime: string;
  totalQuestions: number;
  score: number;
  correct: number;
  wrong: number;
  type: "online" | "on-campus";
  status: "completed" | "pending-submission";
  feedback: string;
}

const exams: ExamResult[] = [
  {
    id: 1,
    title: "Module 1 - Final Examination",
    examDate: "12 Jan 2026",
    startTime: "09.00 AM",
    endTime: "09.45 AM",
    totalQuestions: 50,
    score: 40,
    correct: 20,
    wrong: 30,
    type: "on-campus",
    status: "pending-submission",
    feedback: "Your grammar and vocabulary are strong, but Writing needs improvement. You are suitable for the Beginner",
  },
  {
    id: 2,
    title: "Module 2 - Midterm Test",
    examDate: "20 Feb 2026",
    startTime: "10.00 AM",
    endTime: "11.00 AM",
    totalQuestions: 40,
    score: 75,
    correct: 30,
    wrong: 10,
    type: "online",
    status: "completed",
    feedback: "Excellent performance in reading and listening. Continue to improve writing skills for advanced placement.",
  },
  {
    id: 3,
    title: "Module 1 - Practice Test",
    examDate: "05 Jan 2026",
    startTime: "14.00 PM",
    endTime: "14.30 PM",
    totalQuestions: 30,
    score: 60,
    correct: 18,
    wrong: 12,
    type: "on-campus",
    status: "completed",
    feedback: "Good understanding of basic concepts. Work on vocabulary and sentence construction.",
  },
];

interface Comment {
  id: number;
  author: string;
  text: string;
  time: string;
  avatar: string;
}

function ExamListView({ onSelectExam }: { onSelectExam: (exam: ExamResult) => void }) {
  return (
    <div className="space-y-[20px]">
      <div>
        <h2 className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827]">My Examination</h2>
        <p className="font-['Inter',sans-serif] text-[14px] text-[#6B7280] mt-[4px]">View your examination results and submit files for on-campus tests</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-[14px]">
        {[
          { label: "Total Exams", value: exams.length, color: "text-[#155DFC]", bg: "bg-[#EFF6FF]" },
          { label: "Completed", value: exams.filter(e => e.status === "completed").length, color: "text-[#16A34A]", bg: "bg-[#DCFCE7]" },
          { label: "Pending Submission", value: exams.filter(e => e.status === "pending-submission").length, color: "text-[#F97316]", bg: "bg-[#FFF7ED]" },
          { label: "Average Score", value: `${Math.round(exams.reduce((a, e) => a + e.score, 0) / exams.length)}%`, color: "text-[#8B5CF6]", bg: "bg-[#F5F3FF]" },
        ].map((c) => (
          <div key={c.label} className={`${c.bg} rounded-[12px] p-[16px]`}>
            <p className={`font-['Inter',sans-serif] font-bold text-[24px] ${c.color}`}>{c.value}</p>
            <p className={`font-['Inter',sans-serif] text-[13px] ${c.color}`}>{c.label}</p>
          </div>
        ))}
      </div>

      {/* Exam List */}
      <div className="bg-white rounded-[12px] border border-[#F3F4F6]">
        <div className="px-[20px] py-[16px] border-b border-[#F3F4F6]">
          <h3 className="font-['Inter',sans-serif] font-semibold text-[15px] text-[#111827]">Examination Results</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#F3F4F6]">
                {["No.", "Examination", "Date", "Type", "Score", "Status", "Actions"].map((col) => (
                  <th key={col} className="px-[16px] py-[12px] text-left font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] whitespace-nowrap">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {exams.map((exam, idx) => (
                <tr key={exam.id} className="border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors">
                  <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{idx + 1}.</td>
                  <td className="px-[16px] py-[14px] font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827] whitespace-nowrap">{exam.title}</td>
                  <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151]">{exam.examDate}</td>
                  <td className="px-[16px] py-[14px]">
                    <span className={`px-[8px] py-[3px] rounded-full text-[11px] font-semibold font-['Inter',sans-serif] ${exam.type === "on-campus" ? "bg-[#FFF7ED] text-[#F97316]" : "bg-[#EFF6FF] text-[#155DFC]"}`}>
                      {exam.type === "on-campus" ? "On Campus" : "Online"}
                    </span>
                  </td>
                  <td className="px-[16px] py-[14px]">
                    <div className="flex items-center gap-[8px]">
                      <div className="w-[50px] h-[6px] bg-[#F3F4F6] rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${exam.score}%`, backgroundColor: exam.score >= 60 ? "#22C55E" : "#EF4444" }} />
                      </div>
                      <span className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827]">{exam.score}%</span>
                    </div>
                  </td>
                  <td className="px-[16px] py-[14px]">
                    <span className={`inline-flex items-center gap-[4px] px-[8px] py-[3px] rounded-full text-[11px] font-semibold font-['Inter',sans-serif] ${exam.status === "completed" ? "bg-[#DCFCE7] text-[#16A34A]" : "bg-[#FEF3C7] text-[#D97706]"}`}>
                      {exam.status === "completed" ? <><CheckCircle2 size={11} />Completed</> : <><Upload size={11} />Pending</>}
                    </span>
                  </td>
                  <td className="px-[16px] py-[14px]">
                    <button
                      onClick={() => onSelectExam(exam)}
                      className="flex items-center gap-[4px] px-[10px] py-[6px] rounded-[6px] bg-[#F3F4F6] hover:bg-[#E5E7EB] transition-colors"
                    >
                      <FileText size={13} className="text-[#374151]" />
                      <span className="font-['Inter',sans-serif] text-[12px] text-[#374151]">View</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ExamDetailView({ exam, onBack }: { exam: ExamResult; onBack: () => void }) {
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; size: string }[]>([]);
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, author: "Fani", text: "ini submit file dan attach screenshoot", time: "1 hour ago", avatar: "F" },
    { id: 2, author: "Fani", text: "attach ujiannya", time: "1 hour ago", avatar: "F" },
  ]);
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scorePercent = exam.score;
  const progressColor = scorePercent >= 60 ? "#22C55E" : scorePercent >= 40 ? "#F97316" : "#EF4444";

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files).map(f => ({
        name: f.name,
        size: `${(f.size / 1024).toFixed(1)} KB`,
      }));
      setUploadedFiles(prev => [...prev, ...newFiles]);
      toast.success(`${newFiles.length} file(s) attached successfully`);
    }
  };

  const handleRemoveFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmitFiles = () => {
    if (uploadedFiles.length === 0) {
      toast.error("Please attach at least one file before submitting");
      return;
    }
    toast.success("Files submitted successfully!", {
      description: `${uploadedFiles.length} file(s) have been submitted for review`,
    });
    setUploadedFiles([]);
  };

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    const comment: Comment = {
      id: comments.length + 1,
      author: "Jhon",
      text: newComment,
      time: "Just now",
      avatar: "J",
    };
    setComments([...comments, comment]);
    setNewComment("");
  };

  return (
    <div className="space-y-[20px] relative">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-[6px] font-['Inter',sans-serif] text-[14px] text-[#374151] hover:text-[#111827] transition-colors"
      >
        <ArrowLeft size={18} />
        <span>Back</span>
      </button>

      {/* Main Content Card */}
      <div className="bg-white rounded-[16px] border border-[#F3F4F6] p-[32px]">
        {/* Header */}
        <div className="mb-[24px]">
          <h2 className="font-['Inter',sans-serif] font-bold text-[20px] text-[#111827] mb-[12px]">
            Examination Result
          </h2>
          <div className="flex flex-wrap items-center gap-[16px]">
            <div className="flex items-center gap-[6px] text-[#6B7280]">
              <Calendar size={14} />
              <span className="font-['Inter',sans-serif] text-[13px]">Examination Date: {exam.examDate}</span>
            </div>
            <div className="flex items-center gap-[6px] text-[#6B7280]">
              <Clock size={14} />
              <span className="font-['Inter',sans-serif] text-[13px]">Start Time: {exam.startTime}</span>
            </div>
            <div className="flex items-center gap-[6px] text-[#6B7280]">
              <Clock size={14} />
              <span className="font-['Inter',sans-serif] text-[13px]">End Time: {exam.endTime}</span>
            </div>
            <div className="flex items-center gap-[6px] text-[#6B7280]">
              <HelpCircle size={14} />
              <span className="font-['Inter',sans-serif] text-[13px]">Total Questions: {exam.totalQuestions}</span>
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-[#F3F4F6] mb-[24px]" />

        {/* Student Profile */}
        <div className="flex items-center gap-[16px] mb-[24px]">
          <img
            alt="Student"
            className="size-[56px] rounded-full object-cover border-[2px] border-[#F3F4F6]"
            src={imgProfilePicture}
          />
          <div>
            <h3 className="font-['Inter',sans-serif] font-semibold text-[16px] text-[#111827]">Jhon Doe</h3>
            <p className="font-['Inter',sans-serif] text-[13px] text-[#6B7280]">jhondoe@eduglobe.edu</p>
          </div>
        </div>

        {/* Score Stats */}
        <div className="flex items-center gap-[32px] mb-[24px]">
          <div className="text-center">
            <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280] mb-[4px]">Score</p>
            <p className="font-['Inter',sans-serif] font-bold text-[24px]" style={{ color: progressColor }}>{exam.score}%</p>
          </div>
          <div className="text-center">
            <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280] mb-[4px]">Correct</p>
            <p className="font-['Inter',sans-serif] font-bold text-[24px] text-[#16A34A]">{exam.correct}</p>
          </div>
          <div className="text-center">
            <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280] mb-[4px]">Wrong</p>
            <p className="font-['Inter',sans-serif] font-bold text-[24px] text-[#DC2626]">{exam.wrong}</p>
          </div>

          {/* Progress Bar */}
          <div className="flex-1 ml-[16px]">
            <div className="flex items-center justify-between mb-[6px]">
              <p className="font-['Inter',sans-serif] text-[12px] font-semibold text-[#374151]">Progress</p>
            </div>
            <div className="w-full h-[10px] bg-[#F3F4F6] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{ width: `${scorePercent}%`, backgroundColor: progressColor }}
              />
            </div>
          </div>
        </div>

        {/* File Submission for On-Campus */}
        {exam.type === "on-campus" && (
          <>
            <div className="h-[1px] bg-[#F3F4F6] mb-[24px]" />
            <div className="mb-[24px]">
              <div className="flex items-center justify-between mb-[12px]">
                <h3 className="font-['Inter',sans-serif] font-semibold text-[15px] text-[#111827]">
                  Submit Examination File
                </h3>
                {exam.status === "pending-submission" && (
                  <span className="px-[10px] py-[4px] bg-[#FEF3C7] text-[#D97706] rounded-full font-['Inter',sans-serif] text-[11px] font-semibold">
                    Pending Submission
                  </span>
                )}
              </div>
              <p className="font-['Inter',sans-serif] text-[13px] text-[#6B7280] mb-[16px]">
                Upload your examination file or screenshot for on-campus exam verification
              </p>

              {/* Upload Area */}
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-[2px] border-dashed border-[#D1D5DB] hover:border-[#155DFC] rounded-[12px] p-[24px] flex flex-col items-center justify-center cursor-pointer transition-colors group"
              >
                <div className="size-[48px] bg-[#EFF6FF] group-hover:bg-[#DBEAFE] rounded-full flex items-center justify-center mb-[12px] transition-colors">
                  <Upload size={20} className="text-[#155DFC]" />
                </div>
                <p className="font-['Inter',sans-serif] font-semibold text-[14px] text-[#374151] mb-[4px]">
                  Click to upload files
                </p>
                <p className="font-['Inter',sans-serif] text-[12px] text-[#9CA3AF]">
                  PDF, JPG, PNG or DOC (max. 10MB)
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  multiple
                  onChange={handleFileUpload}
                />
              </div>

              {/* Uploaded Files */}
              {uploadedFiles.length > 0 && (
                <div className="mt-[12px] space-y-[8px]">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between px-[12px] py-[10px] bg-[#F9FAFB] rounded-[8px] border border-[#F3F4F6]">
                      <div className="flex items-center gap-[8px]">
                        <FileText size={16} className="text-[#155DFC]" />
                        <div>
                          <p className="font-['Inter',sans-serif] text-[13px] text-[#374151] font-medium">{file.name}</p>
                          <p className="font-['Inter',sans-serif] text-[11px] text-[#9CA3AF]">{file.size}</p>
                        </div>
                      </div>
                      <button onClick={() => handleRemoveFile(index)} className="text-[#9CA3AF] hover:text-[#EF4444] transition-colors">
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={handleSubmitFiles}
                    className="flex items-center gap-[8px] bg-[#155DFC] hover:bg-[#1249CC] transition-colors text-white px-[20px] py-[10px] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[14px] mt-[8px]"
                  >
                    <Upload size={16} />
                    Submit Files
                  </button>
                </div>
              )}
            </div>
          </>
        )}

        {/* Feedback */}
        <div className="h-[1px] bg-[#F3F4F6] mb-[24px]" />
        <div>
          <h3 className="font-['Inter',sans-serif] font-semibold text-[15px] text-[#111827] mb-[12px]">
            Feedback from Instructor
          </h3>
          <div className="bg-[#F9FAFB] rounded-[12px] border border-[#F3F4F6] p-[16px]">
            <p className="font-['Inter',sans-serif] text-[14px] text-[#374151] leading-[1.7]">
              {exam.feedback}
            </p>
          </div>
        </div>
      </div>

      {/* Comment Toggle Button */}
      <button
        onClick={() => setShowComments(!showComments)}
        className="fixed top-[90px] right-[28px] z-30 size-[44px] bg-[#374151] hover:bg-[#1F2937] text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        {comments.length > 0 && (
          <span className="absolute -top-[4px] -right-[4px] size-[18px] bg-[#EF4444] rounded-full flex items-center justify-center font-['Inter',sans-serif] text-[10px] font-bold text-white">
            {comments.length}
          </span>
        )}
      </button>

      {/* Comments Panel */}
      {showComments && (
        <div className="fixed top-[80px] right-[28px] z-30 w-[340px] bg-[#1F2937] rounded-[16px] shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-[16px] py-[14px] border-b border-[#374151]">
            <h4 className="font-['Inter',sans-serif] font-semibold text-[14px] text-white">Comment</h4>
            <div className="flex items-center gap-[8px]">
              <button className="text-[#9CA3AF] hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" />
                </svg>
              </button>
              <button className="text-[#9CA3AF] hover:text-white transition-colors">
                <CheckCircle2 size={16} />
              </button>
              <button onClick={() => setShowComments(false)} className="text-[#9CA3AF] hover:text-white transition-colors">
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Comments */}
          <div className="max-h-[300px] overflow-y-auto px-[16px] py-[12px] space-y-[16px]">
            {comments.map((comment) => (
              <div key={comment.id} className="flex gap-[10px]">
                <div className="size-[32px] rounded-full bg-[#F97316] flex items-center justify-center shrink-0">
                  <span className="font-['Inter',sans-serif] font-bold text-[12px] text-white">{comment.avatar}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-[4px]">
                    <div className="flex items-center gap-[8px]">
                      <span className="font-['Inter',sans-serif] font-semibold text-[13px] text-white">{comment.author}</span>
                      <span className="font-['Inter',sans-serif] text-[11px] text-[#9CA3AF]">{comment.time}</span>
                    </div>
                    <button className="text-[#9CA3AF] hover:text-white transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" />
                      </svg>
                    </button>
                  </div>
                  <p className="font-['Inter',sans-serif] text-[13px] text-[#D1D5DB] leading-[1.5]">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Reply Input */}
          <div className="px-[16px] py-[12px] border-t border-[#374151]">
            <div className="flex items-center gap-[10px]">
              <div className="size-[32px] rounded-full bg-[#F97316] flex items-center justify-center shrink-0">
                <span className="font-['Inter',sans-serif] font-bold text-[12px] text-white">J</span>
              </div>
              <div className="flex-1 flex items-center gap-[8px] bg-[#374151] rounded-full px-[14px] py-[8px]">
                <input
                  type="text"
                  placeholder="Reply"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAddComment()}
                  className="flex-1 bg-transparent text-white placeholder:text-[#6B7280] font-['Inter',sans-serif] text-[13px] outline-none"
                />
                <button
                  onClick={handleAddComment}
                  className="text-[#9CA3AF] hover:text-white transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function StudentExaminationContent() {
  const [selectedExam, setSelectedExam] = useState<ExamResult | null>(null);

  if (selectedExam) {
    return <ExamDetailView exam={selectedExam} onBack={() => setSelectedExam(null)} />;
  }

  return <ExamListView onSelectExam={setSelectedExam} />;
}
