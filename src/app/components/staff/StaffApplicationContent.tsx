import { useState } from "react";
import { Plus, Search, Eye, ChevronLeft, ChevronRight, FileText, X } from "lucide-react";
import { toast } from "sonner";

const applicationsData = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    appRef: `APP-2025-${String(i + 1).padStart(3, "0")}`,
    studentName: ["Alice Chen", "Mohammed Al-Rashid", "Sofia Hernandez", "Kwame Asante", "Yuki Tanaka", "Fatima Zahra", "Lucas Oliveira", "Priya Sharma", "John Doe", "Jane Smith", "Ali Hasan", "Sara Lee"][i % 12],
    nationality: ["China", "Saudi Arabia", "Mexico", "Ghana", "Japan", "Morocco", "Brazil", "India", "USA", "Canada", "Egypt", "South Korea"][i % 12],
    program: "Business English Course",
    submittedDate: `0${(i % 9) + 1}/02/2025`,
    startDate: `0${(i % 9) + 1}/03/2025`,
    agent: ["Direct", "Star Education", "Direct", "EduBridge Arabia", "AsiaPro Education", "Direct", "Global Study Link", "Direct", "Direct", "Future Ed", "Star Education", "Direct"][i % 12],
    status: (["Pending", "Approved", "Under Review", "Approved", "Pending", "Under Review", "Approved", "Pending", "Approved", "Under Review", "Pending", "Approved"] as const)[i % 12],
}));

const statusMap = {
    Pending: "bg-[#FEF9C3] text-[#CA8A04]",
    Approved: "bg-[#DCFCE7] text-[#16A34A]",
    "Under Review": "bg-[#EFF6FF] text-[#155DFC]",
    Rejected: "bg-[#FEE2E2] text-[#DC2626]"
};

export function StaffApplicationContent() {
    const [applications, setApplications] = useState(applicationsData);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    
    // Modal states
    const [isNewModalOpen, setIsNewModalOpen] = useState(false);
    const [viewedApp, setViewedApp] = useState<any>(null);
    const [docsApp, setDocsApp] = useState<any>(null);

    // Filtering & Pagination
    const filtered = applications.filter(a => a.studentName.toLowerCase().includes(search.toLowerCase()) || a.appRef.toLowerCase().includes(search.toLowerCase()));
    
    const ITEMS_PER_PAGE = 5;
    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE) || 1;
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginated = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handleCreateApplication = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("New application created successfully!");
        setIsNewModalOpen(false);
        // Normally we'd push to `applications` state here, but simulated
    };

    return (
        <div className="space-y-[20px] relative">
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="font-['Inter',sans-serif] font-bold text-[22px] text-[#111827]">Application</h2>
                    <p className="font-['Inter',sans-serif] text-[14px] text-[#6B7280] mt-[4px]">Review and process student enrollment applications</p>
                </div>
                <button 
                    onClick={() => setIsNewModalOpen(true)}
                    className="flex items-center gap-[8px] bg-[#155DFC] hover:bg-[#1249CC] transition-colors text-white px-[16px] py-[10px] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[14px]">
                    <Plus size={16} />New Application
                </button>
            </div>

            <div className="grid grid-cols-4 gap-[14px]">
                {[
                    { label: "Pending", value: applications.filter(a => a.status === "Pending").length, color: "text-[#CA8A04]", bg: "bg-[#FEF9C3]" },
                    { label: "Under Review", value: applications.filter(a => a.status === "Under Review").length, color: "text-[#155DFC]", bg: "bg-[#EFF6FF]" },
                    { label: "Approved", value: applications.filter(a => a.status === "Approved").length, color: "text-[#16A34A]", bg: "bg-[#DCFCE7]" },
                    { label: "Total", value: applications.length, color: "text-[#374151]", bg: "bg-[#F3F4F6]" },
                ].map((c) => (
                    <div key={c.label} className={`${c.bg} rounded-[12px] p-[16px]`}>
                        <p className={`font-['Inter',sans-serif] font-bold text-[28px] ${c.color}`}>{c.value}</p>
                        <p className={`font-['Inter',sans-serif] text-[13px] ${c.color}`}>{c.label}</p>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-[12px] border border-[#F3F4F6] overflow-hidden">
                <div className="flex items-center justify-between px-[20px] py-[16px] border-b border-[#F3F4F6]">
                    <div className="bg-[#f6f6f6] flex items-center gap-[8px] px-[12px] py-[8px] rounded-full w-[280px]">
                        <Search size={14} className="text-[#a0a0a0] shrink-0" />
                        <input 
                            className="bg-transparent font-['Inter',sans-serif] text-[13px] outline-none flex-1 placeholder:text-[#a0a0a0]" 
                            placeholder="Search student or APP-ID..." 
                            value={search} 
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setCurrentPage(1); // Reset page on search
                            }} />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-[#F3F4F6]">
                                {["Ref No.", "Student Name", "Nationality", "Program", "Submitted", "Start Date", "Agent", "Status", "Actions"].map((col) => (
                                    <th key={col} className="px-[16px] py-[12px] text-left font-['Inter',sans-serif] font-semibold text-[12px] text-[#374151] whitespace-nowrap">{col}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {paginated.length > 0 ? paginated.map((a) => (
                                <tr key={a.id} className="border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors">
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] font-semibold text-[13px] text-[#155DFC]">{a.appRef}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827] whitespace-nowrap">{a.studentName}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[13px] text-[#374151]">{a.nationality}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151]">{a.program}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151] whitespace-nowrap">{a.submittedDate}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151] whitespace-nowrap">{a.startDate}</td>
                                    <td className="px-[16px] py-[14px] font-['Inter',sans-serif] text-[12px] text-[#374151]">{a.agent}</td>
                                    <td className="px-[16px] py-[14px]">
                                        <span className={`px-[8px] py-[3px] rounded-full text-[11px] font-semibold font-['Inter',sans-serif] ${statusMap[a.status]}`}>{a.status}</span>
                                    </td>
                                    <td className="px-[16px] py-[14px]">
                                        <div className="flex items-center gap-[6px]">
                                            <button 
                                                onClick={() => setViewedApp(a)}
                                                className="flex items-center gap-[4px] px-[10px] py-[6px] rounded-[6px] bg-[#F3F4F6] hover:bg-[#E5E7EB] transition-colors"
                                                title="View Application Details">
                                                <Eye size={13} className="text-[#374151]" />
                                                <span className="font-['Inter',sans-serif] text-[12px] text-[#374151]">View</span>
                                            </button>
                                            <button 
                                                onClick={() => setDocsApp(a)}
                                                className="flex items-center gap-[4px] px-[10px] py-[6px] rounded-[6px] border border-[#E5E7EB] hover:bg-[#F9FAFB] transition-colors"
                                                title="View Student Documents">
                                                <FileText size={13} className="text-[#374151]" />
                                                <span className="font-['Inter',sans-serif] text-[12px] text-[#374151]">Docs</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={9} className="px-[16px] py-[24px] text-center font-['Inter',sans-serif] text-[13px] text-[#6B7280]">
                                        No applications found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                
                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-between px-[20px] py-[14px]">
                        <button 
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))} 
                            disabled={currentPage === 1}
                            className="flex items-center gap-[6px] font-['Inter',sans-serif] text-[13px] text-[#374151] disabled:opacity-50 transition-opacity">
                            <ChevronLeft size={16} />Previous
                        </button>
                        <div className="flex items-center gap-[4px]">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                                <button 
                                    key={p} 
                                    onClick={() => setCurrentPage(p)} 
                                    className={`size-[32px] flex items-center justify-center rounded-[6px] font-['Inter',sans-serif] text-[13px] ${currentPage === p ? "bg-[#155DFC] text-white" : "text-[#374151] hover:bg-[#F3F4F6] transition-colors"}`}>
                                    {p}
                                </button>
                            ))}
                        </div>
                        <button 
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} 
                            disabled={currentPage === totalPages}
                            className="flex items-center gap-[6px] font-['Inter',sans-serif] text-[13px] text-[#374151] disabled:opacity-50 transition-opacity">
                            Next<ChevronRight size={16} />
                        </button>
                    </div>
                )}
            </div>

            {/* Modal: New Application */}
            {isNewModalOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-[20px]" onClick={() => setIsNewModalOpen(false)}>
                    <div className="bg-white rounded-[16px] w-[500px] shadow-xl" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between px-[24px] py-[20px] border-b border-[#F0F0F0]">
                            <h3 className="font-['Inter',sans-serif] text-[18px] font-bold text-[#111827]">Create New Application</h3>
                            <button onClick={() => setIsNewModalOpen(false)} className="text-[#9CA3AF] hover:text-[#374151] transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <form onSubmit={handleCreateApplication}>
                            <div className="p-[24px] space-y-[16px]">
                                <div className="grid grid-cols-2 gap-[16px]">
                                    <div>
                                        <label className="font-['Inter',sans-serif] text-[13px] font-medium text-[#374151] mb-[6px] block">First Name</label>
                                        <input required className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[10px] outline-none focus:border-[#155DFC] font-['Inter',sans-serif] text-[13px] transition-colors" placeholder="e.g. John" />
                                    </div>
                                    <div>
                                        <label className="font-['Inter',sans-serif] text-[13px] font-medium text-[#374151] mb-[6px] block">Last Name</label>
                                        <input required className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[10px] outline-none focus:border-[#155DFC] font-['Inter',sans-serif] text-[13px] transition-colors" placeholder="e.g. Doe" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-[16px]">
                                    <div>
                                        <label className="font-['Inter',sans-serif] text-[13px] font-medium text-[#374151] mb-[6px] block">Nationality</label>
                                        <select required className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[10px] outline-none focus:border-[#155DFC] font-['Inter',sans-serif] text-[13px] transition-colors bg-white">
                                            <option value="">Select country...</option>
                                            <option>China</option>
                                            <option>Saudi Arabia</option>
                                            <option>Mexico</option>
                                            <option>Brazil</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="font-['Inter',sans-serif] text-[13px] font-medium text-[#374151] mb-[6px] block">Program</label>
                                        <select required className="w-full border border-[#E5E7EB] rounded-[8px] px-[12px] py-[10px] outline-none focus:border-[#155DFC] font-['Inter',sans-serif] text-[13px] transition-colors bg-white">
                                            <option value="">Select program...</option>
                                            <option>Business English</option>
                                            <option>General English</option>
                                            <option>IELTS Preparation</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="px-[24px] py-[16px] border-t border-[#F0F0F0] flex items-center justify-end gap-[12px]">
                                <button type="button" onClick={() => setIsNewModalOpen(false)} className="px-[16px] py-[8px] rounded-[8px] font-['Inter',sans-serif] text-[13px] font-medium text-[#475569] hover:bg-[#F1F5F9] transition-colors">Cancel</button>
                                <button type="submit" className="px-[16px] py-[8px] rounded-[8px] font-['Inter',sans-serif] text-[13px] font-medium text-white bg-[#155DFC] hover:bg-[#1249CC] transition-colors">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal: View Application Details */}
            {viewedApp && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-[20px]" onClick={() => setViewedApp(null)}>
                    <div className="bg-white rounded-[16px] w-[500px] shadow-xl" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between px-[24px] py-[20px] border-b border-[#F0F0F0]">
                            <h3 className="font-['Inter',sans-serif] text-[18px] font-bold text-[#111827]">Application Details</h3>
                            <button onClick={() => setViewedApp(null)} className="text-[#9CA3AF] hover:text-[#374151] transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-[24px] space-y-[20px]">
                            <div className="grid grid-cols-2 gap-y-[16px] gap-x-[24px]">
                                <div>
                                    <p className="font-['Inter',sans-serif] text-[11px] font-medium text-[#6B7280] uppercase tracking-wider mb-[4px]">App Reference</p>
                                    <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#155DFC]">{viewedApp.appRef}</p>
                                </div>
                                <div>
                                    <p className="font-['Inter',sans-serif] text-[11px] font-medium text-[#6B7280] uppercase tracking-wider mb-[4px]">Student Name</p>
                                    <p className="font-['Inter',sans-serif] text-[14px] font-medium text-[#111827]">{viewedApp.studentName}</p>
                                </div>
                                <div>
                                    <p className="font-['Inter',sans-serif] text-[11px] font-medium text-[#6B7280] uppercase tracking-wider mb-[4px]">Nationality</p>
                                    <p className="font-['Inter',sans-serif] text-[14px] font-medium text-[#111827]">{viewedApp.nationality}</p>
                                </div>
                                <div>
                                    <p className="font-['Inter',sans-serif] text-[11px] font-medium text-[#6B7280] uppercase tracking-wider mb-[4px]">Program</p>
                                    <p className="font-['Inter',sans-serif] text-[14px] font-medium text-[#111827]">{viewedApp.program}</p>
                                </div>
                                <div>
                                    <p className="font-['Inter',sans-serif] text-[11px] font-medium text-[#6B7280] uppercase tracking-wider mb-[4px]">Submitted Date</p>
                                    <p className="font-['Inter',sans-serif] text-[14px] font-medium text-[#111827]">{viewedApp.submittedDate}</p>
                                </div>
                                <div>
                                    <p className="font-['Inter',sans-serif] text-[11px] font-medium text-[#6B7280] uppercase tracking-wider mb-[4px]">Status</p>
                                    <span className={`px-[8px] py-[3px] inline-block mt-[2px] rounded-full text-[11px] font-semibold font-['Inter',sans-serif] ${statusMap[viewedApp.status as keyof typeof statusMap]}`}>{viewedApp.status}</span>
                                </div>
                            </div>
                        </div>
                        <div className="px-[24px] py-[16px] border-t border-[#F0F0F0] flex items-center justify-end">
                            <button onClick={() => setViewedApp(null)} className="px-[16px] py-[8px] rounded-[8px] font-['Inter',sans-serif] text-[13px] font-medium text-white bg-[#155DFC] hover:bg-[#1249CC] transition-colors">Close</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal: View Documents */}
            {docsApp && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-[20px]" onClick={() => setDocsApp(null)}>
                    <div className="bg-white rounded-[16px] w-[500px] shadow-xl" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between px-[24px] py-[20px] border-b border-[#F0F0F0]">
                            <h3 className="font-['Inter',sans-serif] text-[18px] font-bold text-[#111827]">Application Documents</h3>
                            <button onClick={() => setDocsApp(null)} className="text-[#9CA3AF] hover:text-[#374151] transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-[24px] space-y-[16px]">
                            <p className="font-['Inter',sans-serif] text-[13px] text-[#374151]">Documents submitted by <span className="font-semibold text-[#111827]">{docsApp.studentName}</span> ({docsApp.appRef}):</p>
                            
                            <div className="space-y-[12px]">
                                {[
                                    { name: "Passport_Scan.pdf", size: "1.2 MB" },
                                    { name: "Previous_Transcripts.pdf", size: "3.4 MB" },
                                    { name: "Proof_of_Funds.pdf", size: "850 KB" }
                                ].map((doc, i) => (
                                    <div key={i} className="flex items-center justify-between p-[12px] rounded-[8px] border border-[#E5E7EB] bg-[#F8FAFC]">
                                        <div className="flex items-center gap-[12px]">
                                            <div className="bg-[#DBEAFE] p-[8px] rounded-[6px]">
                                                <FileText size={16} className="text-[#2563EB]" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-['Inter',sans-serif] text-[13px] font-medium text-[#1E293B]">{doc.name}</span>
                                                <span className="font-['Inter',sans-serif] text-[11px] text-[#64748B]">{doc.size}</span>
                                            </div>
                                        </div>
                                        <button className="text-[#2563EB] hover:text-[#1D4ED8] font-['Inter',sans-serif] text-[12px] font-medium transition-colors">Review</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
