import imgLogos4 from "../../../assets/logo.png";
import {
    LayoutDashboard,
    BookOpen,
    Presentation,
    GraduationCap,
    Map,
    MessageSquare,
    ClipboardList,
    PenTool,
    Users,
    FileCheck,
    MailOpen,
    CreditCard,
    Megaphone,
    CalendarOff,
    Settings,
    ChevronRight,
} from "lucide-react";

interface MenuItem {
    label: string;
    icon: React.ReactNode;
    hasChildren?: boolean;
    page?: string;
}

interface MenuGroup {
    groupName: string;
    items: MenuItem[];
}

const sidebarGroups: MenuGroup[] = [
    {
        groupName: "Main",
        items: [
            { label: "Dashboard", icon: <LayoutDashboard size={18} strokeWidth={1.5} />, page: "dashboard" },
        ],
    },
    {
        groupName: "Academic & Classes",
        items: [
            { label: "Program", icon: <BookOpen size={18} strokeWidth={1.5} />, page: "program" },
            { label: "Classes", icon: <Presentation size={18} strokeWidth={1.5} />, page: "classes" },
            { label: "Teachers", icon: <GraduationCap size={18} strokeWidth={1.5} />, page: "teachers" },
            { label: "Student Study Plan", icon: <Map size={18} strokeWidth={1.5} />, page: "study-plan" },
        ],
    },
    {
        groupName: "Admissions & Students",
        items: [
            { label: "Enquiry", icon: <MessageSquare size={18} strokeWidth={1.5} />, page: "enquiry" },
            { label: "Application", icon: <ClipboardList size={18} strokeWidth={1.5} />, page: "application" },
            { label: "Placement Test", icon: <PenTool size={18} strokeWidth={1.5} />, page: "placement-test" },
            { label: "Students", icon: <Users size={18} strokeWidth={1.5} />, page: "students" },
            { label: "Evaluation Test", icon: <FileCheck size={18} strokeWidth={1.5} />, page: "evaluation-test" },
        ],
    },
    {
        groupName: "Administration & Finance",
        items: [
            { label: "Generate Offer Letter", icon: <MailOpen size={18} strokeWidth={1.5} />, page: "offer-letter" },
            { label: "Payment", icon: <CreditCard size={18} strokeWidth={1.5} />, page: "payment" },
        ],
    },
    {
        groupName: "Internal",
        items: [
            { label: "Announcement", icon: <Megaphone size={18} strokeWidth={1.5} />, page: "announcement" },
            { label: "Leave Request", icon: <CalendarOff size={18} strokeWidth={1.5} />, page: "leave" },
        ],
    },
];

interface StaffSidebarProps {
    activePage: string;
    onNavigate: (page: string) => void;
}

export function StaffSidebar({ activePage, onNavigate }: StaffSidebarProps) {
    const activeLabel = sidebarGroups
        .flatMap((g) => g.items)
        .find((m) => m.page === activePage)?.label ?? activePage;

    return (
        <div className="fixed left-0 top-0 flex flex-col justify-between bg-white w-[250px] h-screen border-r border-[#E5E7EB] z-20">
            {/* Header / Logo */}
            <div className="flex flex-col min-h-0">
                <div className="flex items-center gap-[12px] px-[20px] py-[24px] shrink-0">
                    <img alt="EduGlobe" className="h-[28px] object-contain" src={imgLogos4} />
                </div>

                {/* Workspace Switcher / Role Badge */}
                <div className="px-[20px] pb-[16px] shrink-0">
                    <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-[12px] flex items-center justify-between cursor-pointer hover:bg-[#F1F5F9] transition-colors">
                        <div className="flex flex-col">
                            <span className="font-['Inter',sans-serif] text-[13px] font-semibold text-[#0F172A]">Staff Portal</span>
                            <span className="font-['Inter',sans-serif] text-[11px] text-[#64748B]">Operations Admin</span>
                        </div>
                        <ChevronRight size={14} className="text-[#94A3B8]" />
                    </div>
                </div>

                {/* Nav Items Grouped */}
                <nav className="flex flex-col py-[8px] px-[12px] overflow-y-auto flex-1 gap-[24px]">
                    {sidebarGroups.map((group, idx) => (
                        <div key={idx} className="flex flex-col gap-[4px]">
                            {group.groupName !== "Main" && (
                                <span className="px-[12px] mb-[4px] font-['Inter',sans-serif] text-[11px] font-semibold text-[#94A3B8] uppercase tracking-wider">
                                    {group.groupName}
                                </span>
                            )}
                            {group.items.map((item) => {
                                const isActive = item.label === activeLabel;
                                return (
                                    <button
                                        key={item.label}
                                        onClick={() => item.page && onNavigate(item.page)}
                                        className={`flex items-center justify-between px-[12px] py-[10px] rounded-[8px] text-left transition-all duration-200 ${isActive
                                                ? "bg-[#EFF6FF] text-[#2563EB] font-medium"
                                                : "text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A]"
                                            }`}
                                    >
                                        <div className="flex items-center gap-[12px]">
                                            <span className={isActive ? "text-[#3B82F6]" : "text-[#64748B]"}>
                                                {item.icon}
                                            </span>
                                            <span className="font-['Inter',sans-serif] text-[13px] leading-[1.5]">
                                                {item.label}
                                            </span>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    ))}
                </nav>
            </div>

            {/* Footer Settings */}
            <div className="border-t border-[#F1F5F9] px-[12px] py-[16px] shrink-0">
                <button className="flex items-center gap-[12px] px-[12px] py-[10px] w-full rounded-[8px] text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A] transition-colors">
                    <Settings size={18} strokeWidth={1.5} className="text-[#64748B]" />
                    <span className="font-['Inter',sans-serif] text-[13px]">Settings</span>
                </button>
                <div className="mt-[16px] px-[12px] flex items-center gap-[12px]">
                    <div className="w-[32px] h-[32px] rounded-full bg-[#E2E8F0] flex items-center justify-center font-semibold text-[#0F172A] text-[12px]">
                        SA
                    </div>
                    <div className="flex flex-col">
                        <span className="font-['Inter',sans-serif] text-[13px] font-medium text-[#0F172A]">Staff User</span>
                        <span className="font-['Inter',sans-serif] text-[11px] text-[#64748B]">staff@eduglobe.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
