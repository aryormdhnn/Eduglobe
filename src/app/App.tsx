import { useState } from "react";
import { Sidebar } from "./components/student/Sidebar";
import { Navbar } from "./components/student/Navbar";
import { CertificateContent } from "./components/student/CertificateContent";
import { Toaster } from "./components/ui/sonner";
import { AdminSidebar } from "./components/admin/AdminSidebar";
import { AdminNavbar } from "./components/admin/AdminNavbar";
// Admin pages
import { AdminDashboardContent } from "./components/admin/AdminDashboardContent";
import { AdminEnquiryContent } from "./components/admin/AdminEnquiryContent";
import { AdminPlacementTestContent } from "./components/admin/AdminPlacementTestContent";
import { AdminProgramContent } from "./components/admin/AdminProgramContent";
import { AdminStudyPlanContent } from "./components/admin/AdminStudyPlanContent";
import { AdminStudentContent } from "./components/admin/AdminStudentContent";
import { AdminTeachersContent } from "./components/admin/AdminTeachersContent";
import { AdminAgentContent } from "./components/admin/AdminAgentContent";
import { AdminClassesContent } from "./components/admin/AdminClassesContent";
import { AdminApplicationContent } from "./components/admin/AdminApplicationContent";
import { AdminVisaContent } from "./components/admin/AdminVisaContent";
import { AdminPaymentContent } from "./components/admin/AdminPaymentContent";
import { AdminAnnouncementContent } from "./components/admin/AdminAnnouncementContent";
import { AdminCertificateContent } from "./components/admin/AdminCertificateContent";
import { AdminCreateCertificateContent } from "./components/admin/AdminCreateCertificateContent";
import { AdminProgressReportContent } from "./components/admin/AdminProgressReportContent";
import { AdminEvaluationTestContent } from "./components/admin/AdminEvaluationTestContent";
import { AdminReportsContent } from "./components/admin/AdminReportsContent";
import { AdminStudentPlantContent } from "./components/admin/AdminStudentPlantContent";

const adminPageTitles: Record<string, string> = {
  dashboard: "Dashboard",
  enquiry: "Enquiry",
  "placement-test": "Placement Test",
  program: "Program",
  "study-plan": "Student Study Plan",
  students: "Students",
  teachers: "Teachers",
  agent: "Agent",
  classes: "Classes",
  application: "Application",
  visa: "Visa Management",
  payment: "Payment",
  announcement: "Announcement",
  certificate: "Certificate",
  "create-certificate": "Issue New Certificate",
  "progress-report": "Progress Reports",
  "evaluation-test": "Evaluation Test",
  reports: "Reports & Analytics",
  "student-plant": "Student Plant",
};

export default function App() {
  const [role, setRole] = useState<"student" | "admin">("student");
  const [adminPage, setAdminPage] = useState("dashboard");

  return (
    <div className="bg-[#f6f6f6] min-h-screen relative">
      {/* Role Toggle */}
      <div className="fixed bottom-[28px] right-[28px] z-50 flex items-center gap-[2px] bg-white border border-[#E5E7EB] rounded-full p-[4px] shadow-lg">
        <button
          onClick={() => setRole("student")}
          className={`px-[16px] py-[8px] rounded-full font-['Inter',sans-serif] font-semibold text-[13px] transition-all duration-200 ${role === "student" ? "bg-[#155DFC] text-white shadow-sm" : "text-[#6B7280] hover:text-[#374151]"}`}
        >Student</button>
        <button
          onClick={() => setRole("admin")}
          className={`px-[16px] py-[8px] rounded-full font-['Inter',sans-serif] font-semibold text-[13px] transition-all duration-200 ${role === "admin" ? "bg-[#155DFC] text-white shadow-sm" : "text-[#6B7280] hover:text-[#374151]"}`}
        >Admin</button>
      </div>

      {role === "student" ? (
        <>
          <Sidebar />
          <Navbar />
          <div className="ml-[248px] pt-[80px] p-[24px]">
            <CertificateContent />
          </div>
        </>
      ) : (
        <>
          <AdminSidebar activePage={adminPage} onNavigate={setAdminPage} />
          <AdminNavbar title={adminPageTitles[adminPage] ?? "Admin"} />
          <div className="ml-[200px] pt-[64px] p-[24px] bg-[#F9FAFB] min-h-screen">
            {adminPage === "dashboard" && <AdminDashboardContent />}
            {adminPage === "enquiry" && <AdminEnquiryContent />}
            {adminPage === "placement-test" && <AdminPlacementTestContent />}
            {adminPage === "program" && <AdminProgramContent />}
            {adminPage === "study-plan" && <AdminStudyPlanContent />}
            {adminPage === "students" && <AdminStudentContent />}
            {adminPage === "teachers" && <AdminTeachersContent />}
            {adminPage === "agent" && <AdminAgentContent />}
            {adminPage === "classes" && <AdminClassesContent />}
            {adminPage === "application" && <AdminApplicationContent />}
            {adminPage === "visa" && <AdminVisaContent />}
            {adminPage === "payment" && <AdminPaymentContent />}
            {adminPage === "announcement" && <AdminAnnouncementContent />}
            {adminPage === "certificate" && (
              <AdminCertificateContent
                onCreateCertificate={() => setAdminPage("create-certificate")}
              />
            )}
            {adminPage === "create-certificate" && (
              <AdminCreateCertificateContent onBack={() => setAdminPage("certificate")} />
            )}
            {adminPage === "progress-report" && (
              <AdminProgressReportContent onBack={() => setAdminPage("certificate")} />
            )}
            {adminPage === "evaluation-test" && <AdminEvaluationTestContent />}
            {adminPage === "reports" && <AdminReportsContent />}
            {adminPage === "student-plant" && <AdminStudentPlantContent />}
          </div>
        </>
      )}

      <Toaster />
    </div>
  );
}
