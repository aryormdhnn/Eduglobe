import { useState } from "react";
import { Download, Eye, Lock } from "lucide-react";
import { CertificateViewModal } from "./CertificateViewModal";
import { toast } from "sonner";

interface Program {
  id: string;
  number: string;
  title: string;
  level: string;
  status: "completed" | "current" | "locked";
  completedDate?: string;
  certificateId?: string;
}

const programs: Program[] = [
  {
    id: "1",
    number: "01",
    title: "Introduction to Business Communication",
    level: "Module 1",
    status: "completed",
    completedDate: "10 Jan 2025",
    certificateId: "CERT-2025-BE-001",
  },
  {
    id: "2",
    number: "02",
    title: "Professional Writing & Email Etiquette",
    level: "Module 2",
    status: "completed",
    completedDate: "14 Feb 2025",
    certificateId: "CERT-2025-BE-002",
  },
  {
    id: "3",
    number: "03",
    title: "Effective Meetings & Negotiation Skills",
    level: "Module 3",
    status: "current",
  },
  {
    id: "4",
    number: "04",
    title: "Business Presentations & Public Speaking",
    level: "Module 4",
    status: "locked",
  },
  {
    id: "5",
    number: "05",
    title: "Sales, Marketing & Customer Communication",
    level: "Module 5",
    status: "locked",
  },
  {
    id: "6",
    number: "06",
    title: "Workplace Problem-Solving & Decision Making",
    level: "Module 6",
    status: "locked",
  },
];

function ProgramStep({
  program,
  isLast,
  onViewCertificate,
  onDownloadCertificate
}: {
  program: Program;
  isLast: boolean;
  onViewCertificate: (program: Program) => void;
  onDownloadCertificate: (program: Program) => void;
}) {
  const isCompleted = program.status === "completed";
  const isCurrent = program.status === "current";
  const isLocked = program.status === "locked";

  return (
    <div className="flex items-stretch gap-[24px]">
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div
          className={`flex items-center justify-center rounded-[10px] size-[48px] shrink-0 font-['Inter',sans-serif] font-semibold text-[16px] ${isCompleted
              ? "bg-[#EF4444] text-white"
              : isCurrent
                ? "bg-[#EF4444] text-white"
                : "bg-[#FEE2E2] text-[#EF4444]"
            }`}
        >
          {program.number}
        </div>
        {!isLast && (
          <div
            className={`w-[3px] flex-1 min-h-[24px] ${isCompleted ? "bg-[#EF4444]" : "bg-[#FEE2E2]"
              }`}
          />
        )}
      </div>

      {/* Content */}
      <div className={`flex-1 pb-[24px] ${isLast ? "pb-0" : ""}`}>
        <div
          className={`rounded-[12px] p-[20px] border ${isCompleted
              ? "bg-white border-[#E5E7EB]"
              : isCurrent
                ? "bg-[#FFF7ED] border-[#FDBA74]"
                : "bg-[#F9FAFB] border-[#F3F4F6]"
            }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3
                className={`font-['Inter',sans-serif] font-semibold text-[16px] leading-[1.5] ${isLocked ? "text-[#9CA3AF]" : "text-[#111827]"
                  }`}
              >
                {program.title} ({program.level})
              </h3>
              {isCompleted && program.completedDate && (
                <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[1.5] text-[#6B7280] mt-[4px]">
                  Completed: {program.completedDate} · ID: {program.certificateId}
                </p>
              )}
              {isCurrent && (
                <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[1.5] text-[#D97706] mt-[4px]">
                  In Progress
                </p>
              )}
              {isLocked && (
                <div className="flex items-center gap-[6px] mt-[4px]">
                  <Lock className="size-[14px] text-[#9CA3AF]" />
                  <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[1.5] text-[#9CA3AF]">
                    Complete previous level to unlock
                  </p>
                </div>
              )}
            </div>
            {isCompleted && (
              <div className="flex gap-[8px]">
                <button
                  onClick={() => onViewCertificate(program)}
                  className="flex items-center gap-[6px] px-[12px] py-[8px] rounded-[8px] bg-[#F3F4F6] hover:bg-[#E5E7EB] transition-colors"
                >
                  <Eye className="size-[16px] text-[#374151]" />
                  <span className="font-['Inter',sans-serif] font-normal text-[13px] text-[#374151]">
                    View
                  </span>
                </button>
                <button
                  onClick={() => onDownloadCertificate(program)}
                  className="flex items-center gap-[6px] px-[12px] py-[8px] rounded-[8px] bg-[#155DFC] hover:bg-[#1249CC] transition-colors"
                >
                  <Download className="size-[16px] text-white" />
                  <span className="font-['Inter',sans-serif] font-normal text-[13px] text-white">
                    Download
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CertificateContent() {
  const [selectedTab, setSelectedTab] = useState<"all" | "completed" | "inprogress">("all");
  const [selectedCertificate, setSelectedCertificate] = useState<Program | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // In a real application, this would come from user authentication/profile
  const studentName = "John Anderson";

  const filteredPrograms = programs.filter((p) => {
    if (selectedTab === "completed") return p.status === "completed";
    if (selectedTab === "inprogress") return p.status === "current";
    return true;
  });

  const completedCount = programs.filter((p) => p.status === "completed").length;

  const handleViewCertificate = (program: Program) => {
    setSelectedCertificate(program);
    setIsModalOpen(true);
  };

  const handleDownloadCertificate = (program: Program) => {
    // Simulate download
    toast.success(`Downloading certificate for ${program.title}...`, {
      description: `Certificate ID: ${program.certificateId}`,
    });

    // In a real app, this would trigger an actual download
    console.log("Downloading certificate:", program);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCertificate(null), 300);
  };

  return (
    <div className="bg-white rounded-[16px] border border-[#F3F4F6] p-[32px] min-h-[800px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-[24px]">
        <div>
          <h2 className="font-['Inter',sans-serif] font-semibold text-[18px] leading-[1.5] text-[#111827]">
            Business English Course
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[1.5] text-[#6B7280] mt-[4px]">
            {completedCount} of {programs.length} modules completed
          </p>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-[12px]">
          <div className="w-[200px] h-[8px] bg-[#F3F4F6] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#EF4444] rounded-full transition-all duration-500"
              style={{ width: `${(completedCount / programs.length) * 100}%` }}
            />
          </div>
          <span className="font-['Inter',sans-serif] font-semibold text-[14px] text-[#374151]">
            {Math.round((completedCount / programs.length) * 100)}%
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-[4px] mb-[32px] bg-[#F3F4F6] p-[4px] rounded-[10px] w-fit">
        {[
          { key: "all" as const, label: "All Programs" },
          { key: "completed" as const, label: "Completed" },
          { key: "inprogress" as const, label: "In Progress" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSelectedTab(tab.key)}
            className={`px-[16px] py-[8px] rounded-[8px] font-['Inter',sans-serif] font-normal text-[14px] transition-colors ${selectedTab === tab.key
                ? "bg-white text-[#111827] shadow-sm"
                : "text-[#6B7280] hover:text-[#374151]"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="pl-[8px]">
        {filteredPrograms.map((program, index) => (
          <ProgramStep
            key={program.id}
            program={program}
            isLast={index === filteredPrograms.length - 1}
            onViewCertificate={handleViewCertificate}
            onDownloadCertificate={handleDownloadCertificate}
          />
        ))}
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <CertificateViewModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          certificate={{
            id: selectedCertificate.id,
            title: selectedCertificate.title,
            level: selectedCertificate.level,
            completedDate: selectedCertificate.completedDate || "",
            certificateId: selectedCertificate.certificateId || "",
            studentName: studentName,
          }}
          onDownload={() => handleDownloadCertificate(selectedCertificate)}
        />
      )}
    </div>
  );
}
