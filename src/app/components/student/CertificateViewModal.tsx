import { Download, X, Award, CheckCircle2, Printer } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "../ui/dialog";

interface CertificateViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: {
    id: string;
    title: string;
    level: string;
    completedDate: string;
    certificateId: string;
    studentName?: string;
  };
  onDownload: () => void;
}

export function CertificateViewModal({
  isOpen,
  onClose,
  certificate,
  onDownload,
}: CertificateViewModalProps) {
  const handlePrint = () => {
    window.print();
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[900px] p-[24px] gap-0 bg-transparent border-none shadow-none overflow-visible [&>button]:hidden">
        {/* Header Actions */}
        <div className="flex justify-end gap-[12px] mb-[16px] print:hidden">
          <button
            onClick={handlePrint}
            className="flex items-center gap-[8px] px-[16px] py-[10px] rounded-[8px] bg-white hover:bg-[#F3F4F6] transition-colors shadow-lg"
          >
            <Printer className="size-[18px] text-[#374151]" />
            <span className="font-['Inter',sans-serif] font-medium text-[14px] text-[#374151]">
              Print
            </span>
          </button>
          <button
            onClick={onDownload}
            className="flex items-center gap-[8px] px-[16px] py-[10px] rounded-[8px] bg-[#155DFC] hover:bg-[#1249CC] transition-colors shadow-lg"
          >
            <Download className="size-[18px] text-white" />
            <span className="font-['Inter',sans-serif] font-medium text-[14px] text-white">
              Download
            </span>
          </button>
          <button
            onClick={onClose}
            className="flex items-center justify-center size-[40px] rounded-[8px] bg-white hover:bg-[#F3F4F6] transition-colors shadow-lg"
          >
            <X className="size-[20px] text-[#374151]" />
          </button>
        </div>

        {/* Certificate Design */}
        <div className="certificate-printable bg-white rounded-[16px] shadow-2xl overflow-hidden relative">
          {/* Top Border Pattern */}
          <div className="h-[12px] bg-gradient-to-r from-[#EF4444] via-[#F87171] to-[#EF4444]" />

          <div className="p-[64px] relative">
            {/* Header with Logo/Icon */}
            <div className="flex flex-col items-center mb-[48px]">
              <div className="flex items-center gap-[12px] mb-[16px]">
                <div className="size-[56px] rounded-full bg-[#FEE2E2] flex items-center justify-center">
                  <Award className="size-[32px] text-[#EF4444]" />
                </div>
              </div>
              <h1 className="font-['Inter',sans-serif] font-bold text-[32px] text-[#111827] mb-[8px]">
                Certificate of Achievement
              </h1>
              <div className="w-[80px] h-[4px] bg-[#EF4444] rounded-full" />
            </div>

            {/* Main Content */}
            <div className="text-center mb-[48px]">
              <p className="font-['Inter',sans-serif] font-normal text-[16px] text-[#6B7280] mb-[24px]">
                This is to certify that
              </p>
              <h2 className="font-['Inter',sans-serif] font-bold text-[36px] text-[#111827] mb-[32px] border-b-2 border-[#E5E7EB] pb-[16px] max-w-[500px] mx-auto">
                {certificate.studentName || "Student Name"}
              </h2>
              <p className="font-['Inter',sans-serif] font-normal text-[16px] text-[#6B7280] mb-[16px]">
                has successfully completed the
              </p>
              <div className="inline-block bg-[#FEF3F2] border-2 border-[#EF4444] rounded-[12px] px-[32px] py-[20px] mb-[24px]">
                <h3 className="font-['Inter',sans-serif] font-bold text-[28px] text-[#EF4444] mb-[4px]">
                  {certificate.title}
                </h3>
                <p className="font-['Inter',sans-serif] font-semibold text-[18px] text-[#991B1B]">
                  {certificate.level}
                </p>
              </div>
            </div>

            {/* Footer Info */}
            <div className="flex justify-between items-end pt-[32px] border-t border-[#E5E7EB]">
              <div className="flex flex-col gap-[8px]">
                <div className="flex items-center gap-[8px]">
                  <CheckCircle2 className="size-[18px] text-[#10B981]" />
                  <span className="font-['Inter',sans-serif] font-normal text-[14px] text-[#6B7280]">
                    Completed: {certificate.completedDate}
                  </span>
                </div>
                <div className="font-['Inter',sans-serif] font-mono font-normal text-[13px] text-[#9CA3AF]">
                  Certificate ID: {certificate.certificateId}
                </div>
              </div>

              <div className="text-right">
                <div className="w-[200px] border-t-2 border-[#111827] pt-[8px]">
                  <p className="font-['Inter',sans-serif] font-semibold text-[14px] text-[#111827]">
                    Director of Education
                  </p>
                  <p className="font-['Inter',sans-serif] font-normal text-[12px] text-[#6B7280]">
                    English Learning Platform
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-[24px] left-[24px] size-[40px] border-l-4 border-t-4 border-[#FEE2E2] rounded-tl-[8px]" />
            <div className="absolute top-[24px] right-[24px] size-[40px] border-r-4 border-t-4 border-[#FEE2E2] rounded-tr-[8px]" />
            <div className="absolute bottom-[24px] left-[24px] size-[40px] border-l-4 border-b-4 border-[#FEE2E2] rounded-bl-[8px]" />
            <div className="absolute bottom-[24px] right-[24px] size-[40px] border-r-4 border-b-4 border-[#FEE2E2] rounded-br-[8px]" />
          </div>

          {/* Bottom Border Pattern */}
          <div className="h-[12px] bg-gradient-to-r from-[#EF4444] via-[#F87171] to-[#EF4444]" />
        </div>

        {/* Watermark/Authenticity Badge */}
        <div className="text-center mt-[16px] print:hidden">
          <p className="font-['Inter',sans-serif] font-normal text-[12px] text-white/80">
            This is an official certificate issued by English Learning Platform
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
