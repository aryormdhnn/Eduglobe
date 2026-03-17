import { useState } from "react";
import { Sidebar } from "./components/student/Sidebar";
import { Navbar } from "./components/student/Navbar";
import { CertificateContent } from "./components/student/CertificateContent";
import { StudentExaminationContent } from "./components/student/StudentExaminationContent";
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
import { AdminGenerateEvaluationContent } from "./components/admin/AdminGenerateEvaluationContent";
import { AdminOfferLetterContent } from "./components/admin/AdminOfferLetterContent";
import { AdminGenerateContractContent } from "./components/admin/AdminGenerateContractContent";
import { AdminGenerateAppointedCertificateContent } from "./components/admin/AdminGenerateAppointedCertificateContent";
import { AdminReportsContent } from "./components/admin/AdminReportsContent";
import { AdminStudentPlantContent } from "./components/admin/AdminStudentPlantContent";
import { AdminLeaveHistoryContent } from "./components/admin/AdminLeaveHistoryContent";
// Staff pages
import { StaffSidebar } from "./components/staff/StaffSidebar";
import { StaffNavbar } from "./components/staff/StaffNavbar";
import { StaffDashboardContent } from "./components/staff/StaffDashboardContent";
import { StaffStudentContent } from "./components/staff/StaffStudentContent";
import { StaffInvoiceContent } from "./components/staff/StaffInvoiceContent";
import { StaffLeaveContent } from "./components/staff/StaffLeaveContent";
import { StaffAttendanceContent } from "./components/staff/StaffAttendanceContent";
import { StaffClassesContent } from "./components/staff/StaffClassesContent";
import { StaffAnnouncementContent } from "./components/staff/StaffAnnouncementContent";
// Teacher pages
import { TeacherSidebar } from "./components/teacher/TeacherSidebar";
import { TeacherNavbar } from "./components/teacher/TeacherNavbar";
import { TeacherExaminationContent } from "./components/teacher/TeacherExaminationContent";

// Agent pages
import { AgentSidebar } from "./components/agent/AgentSidebar";
import { AgentNavbar } from "./components/agent/AgentNavbar";
import { AgentCommissionContent } from "./components/agent/AgentCommissionContent";
import { AgentTransactionDetailContent } from "./components/agent/AgentTransactionDetailContent";
import { AgentContractContent } from "./components/agent/AgentContractContent";
import { AgentAppointedCertificateContent } from "./components/agent/AgentAppointedCertificateContent";

// Conselor pages
import { ConselorSidebar } from "./components/conselor/ConselorSidebar";
import { ConselorNavbar } from "./components/conselor/ConselorNavbar";
import { ConselorDashboardContent } from "./components/conselor/ConselorDashboardContent";
import { ConselorFeeContent } from "./components/conselor/ConselorFeeContent";

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
  "generate-evaluation": "Generate Evaluation",
  "offer-letter": "Generate Offer Letter",
  "generate-contract": "Generate Contract",
  "appointed-certificate": "Appointed Representative",
  reports: "Reports & Analytics",

  "student-plant": "Student Plant",
  "leave-history": "Leave History",
};

const studentPageTitles: Record<string, string> = {
  dashboard: "Dashboard",
  "placement-test": "Placement Test",
  "my-classes": "My Classes",
  "my-study-plan": "My Study Plan",
  "my-certificate": "My Certificate",
  attendance: "Attendance",
  "study-materials": "Study Materials",
  "my-assignments": "My Assignments",
  "my-examination": "My Examination",
  schedule: "Schedule",
  "academic-reports": "Academic Reports",
  payment: "Payment",
  "evaluation-test": "Evaluation Test",
  chat: "Chat",
  "visa-information": "Visa Information",
};

const staffPageTitles: Record<string, string> = {
  dashboard: "Dashboard",
  students: "Students",
  attendance: "Attendance",
  classes: "Classes",
  invoice: "Invoice",
  announcement: "Announcement",
  leave: "Leave / Cuti",
};

const teacherPageTitles: Record<string, string> = {
  dashboard: "Dashboard",
  students: "Students",
  "my-classes": "My Classes",
  examination: "Examination",
  schedule: "Schedule",
  "academic-reports": "Academic Reports",
};

const agentPageTitles: Record<string, string> = {
  dashboard: "Dashboard",
  enquiry: "Enquiry",
  students: "My Students",
  visa: "Visa Application",
  reports: "Reports & Analytics",
  commission: "Commission & Payments",
  contract: "Contracts",
  appointed: "Appointed Representative",
  chat: "Chat"
};

const conselorPageTitles: Record<string, string> = {
  dashboard: "Dashboard",
  students: "Students",
  applications: "Applications",
  fee: "Marketing Fees",
  appointments: "Appointments",
  chat: "Chat",
};

export default function App() {
  const [role, setRole] = useState<"student" | "admin" | "staff" | "teacher" | "agent" | "conselor">("agent");
  const [adminPage, setAdminPage] = useState("dashboard");
  const [staffPage, setStaffPage] = useState("dashboard");
  const [studentPage, setStudentPage] = useState("my-examination");
  const [teacherPage, setTeacherPage] = useState("examination");
  const [agentPage, setAgentPage] = useState("commission");
  const [conselorPage, setConselorPage] = useState("dashboard");
  const [agentPageParams, setAgentPageParams] = useState<any>(null);

  const handleAgentNavigate = (page: string, params?: any) => {
    setAgentPage(page);
    setAgentPageParams(params || null);
  };
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
        <button
          onClick={() => setRole("teacher")}
          className={`px-[16px] py-[8px] rounded-full font-['Inter',sans-serif] font-semibold text-[13px] transition-all duration-200 ${role === "teacher" ? "bg-[#155DFC] text-white shadow-sm" : "text-[#6B7280] hover:text-[#374151]"}`}
        >Teacher</button>
        <button
          onClick={() => setRole("staff")}
          className={`px-[16px] py-[8px] rounded-full font-['Inter',sans-serif] font-semibold text-[13px] transition-all duration-200 ${role === "staff" ? "bg-[#155DFC] text-white shadow-sm" : "text-[#6B7280] hover:text-[#374151]"}`}
        >Staff</button>
        <button
          onClick={() => setRole("agent")}
          className={`px-[16px] py-[8px] rounded-full font-['Inter',sans-serif] font-semibold text-[13px] transition-all duration-200 ${role === "agent" ? "bg-[#155DFC] text-white shadow-sm" : "text-[#6B7280] hover:text-[#374151]"}`}
        >Agent</button>
        <button
          onClick={() => setRole("conselor")}
          className={`px-[16px] py-[8px] rounded-full font-['Inter',sans-serif] font-semibold text-[13px] transition-all duration-200 ${role === "conselor" ? "bg-[#155DFC] text-white shadow-sm" : "text-[#6B7280] hover:text-[#374151]"}`}
        >Conselor</button>
      </div>

      {role === "student" ? (
        <>
          <Sidebar activePage={studentPage} onNavigate={setStudentPage} />
          <Navbar title={studentPageTitles[studentPage] ?? "Dashboard"} />
          <div className="ml-[248px] pt-[80px] p-[24px]">
            {studentPage === "my-certificate" && <CertificateContent />}
            {studentPage === "my-examination" && <StudentExaminationContent />}
            {!(["my-certificate", "my-examination"].includes(studentPage)) && (
              <div className="bg-white rounded-[16px] border border-[#F3F4F6] p-[32px] min-h-[400px] flex items-center justify-center">
                <p className="font-['Inter',sans-serif] text-[16px] text-[#9CA3AF]">Coming soon — {studentPageTitles[studentPage] ?? studentPage}</p>
              </div>
            )}
          </div>
        </>
      ) : role === "admin" ? (
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
            {adminPage === "generate-evaluation" && <AdminGenerateEvaluationContent />}
            {adminPage === "offer-letter" && <AdminOfferLetterContent />}
            {adminPage === "generate-contract" && <AdminGenerateContractContent />}
            {adminPage === "appointed-certificate" && <AdminGenerateAppointedCertificateContent />}
            {adminPage === "reports" && <AdminReportsContent />}

            {adminPage === "student-plant" && <AdminStudentPlantContent />}
            {adminPage === "leave-history" && <AdminLeaveHistoryContent />}
          </div>
        </>
      ) : role === "staff" ? (
        <>
          <StaffSidebar activePage={staffPage} onNavigate={setStaffPage} />
          <StaffNavbar title={staffPageTitles[staffPage] ?? "Staff"} />
          <div className="ml-[200px] pt-[64px] p-[24px] bg-[#F9FAFB] min-h-screen">
            {staffPage === "dashboard" && <StaffDashboardContent />}
            {staffPage === "students" && <StaffStudentContent />}
            {staffPage === "attendance" && <StaffAttendanceContent />}
            {staffPage === "classes" && <StaffClassesContent />}
            {staffPage === "invoice" && <StaffInvoiceContent />}
            {staffPage === "announcement" && <StaffAnnouncementContent />}
            {staffPage === "leave" && <StaffLeaveContent />}
          </div>
        </>
      ) : role === "teacher" ? (
        <>
          <TeacherSidebar activePage={teacherPage} onNavigate={setTeacherPage} />
          <TeacherNavbar title={teacherPageTitles[teacherPage] ?? "Dashboard"} />
          <div className="ml-[248px] pt-[80px] p-[24px]">
            {teacherPage === "examination" && <TeacherExaminationContent />}
            {!(["examination"].includes(teacherPage)) && (
              <div className="bg-white rounded-[16px] border border-[#F3F4F6] p-[32px] min-h-[400px] flex items-center justify-center">
                <p className="font-['Inter',sans-serif] text-[16px] text-[#9CA3AF]">Coming soon — {teacherPageTitles[teacherPage] ?? teacherPage}</p>
              </div>
            )}
          </div>
        </>
      ) : role === "agent" ? (
        <>
          <AgentSidebar activePage={agentPage === "transaction-detail" ? "commission" : agentPage} onNavigate={setAgentPage} />
          <AgentNavbar title="" />
          <div className="ml-[200px] pt-[64px] p-[24px] bg-[#FAFAFA] min-h-screen">
            {agentPage === "commission" && <AgentCommissionContent onNavigate={handleAgentNavigate} />}
            {agentPage === "transaction-detail" && <AgentTransactionDetailContent onBack={() => handleAgentNavigate("commission")} transactionId={agentPageParams?.id} />}
            {agentPage === "contract" && <AgentContractContent />}
            {agentPage === "appointed" && <AgentAppointedCertificateContent />}
            {!(["commission", "transaction-detail", "contract", "appointed"].includes(agentPage)) && (
              <div className="bg-white rounded-[16px] border border-[#F3F4F6] p-[32px] min-h-[400px] flex items-center justify-center shadow-sm">
                <p className="font-['Inter',sans-serif] text-[16px] text-[#9CA3AF]">Coming soon — {agentPageTitles[agentPage] ?? agentPage}</p>
              </div>
            )}
          </div>
        </>
      ) : role === "conselor" ? (
        <>
          <ConselorSidebar activePage={conselorPage} onNavigate={setConselorPage} />
          <ConselorNavbar title={conselorPageTitles[conselorPage] ?? "Dashboard"} />
          <div className="ml-[200px] pt-[64px] p-[24px] bg-[#FAFAFA] min-h-screen">
            {conselorPage === "dashboard" && <ConselorDashboardContent />}
            {conselorPage === "fee" && <ConselorFeeContent />}
            {!(["dashboard", "fee"].includes(conselorPage)) && (
              <div className="bg-white rounded-[16px] border border-[#F3F4F6] p-[32px] min-h-[400px] flex items-center justify-center shadow-sm">
                <p className="font-['Inter',sans-serif] text-[16px] text-[#9CA3AF]">Coming soon — {conselorPageTitles[conselorPage] ?? conselorPage}</p>
              </div>
            )}
          </div>
        </>
      ) : null}

      <Toaster />
    </div>
  );
}
