import imgLogos4 from "../../../assets/logo.png";
import {
    LayoutDashboard,
    HelpCircle,
    ClipboardList,
    BookOpen,
    CalendarDays,
    Users,
    GraduationCap,
    UserCog,
    School,
    FileText,
    Globe,
    CreditCard,
    Megaphone,
    FlaskConical,
    BarChart2,
    BarChart3,
    Leaf,
    Award,
    Settings,
    ChevronRight,
    ClipboardCheck,
    FileBadge2,
} from "lucide-react";


interface MenuItem {
    label: string;
    icon: React.ReactNode;
    hasChildren?: boolean;
    page?: string;
}

const menuItems: MenuItem[] = [
    { label: "Dashboard", icon: <LayoutDashboard size={18} />, page: "dashboard" },
    { label: "Enquiry", icon: <HelpCircle size={18} />, page: "enquiry" },
    { label: "Placement Test", icon: <ClipboardList size={18} />, page: "placement-test" },
    { label: "Program", icon: <BookOpen size={18} />, page: "program" },
    { label: "Student Study Plan", icon: <CalendarDays size={18} />, page: "study-plan" },
    { label: "Students", icon: <Users size={18} />, page: "students" },
    { label: "Teachers", icon: <GraduationCap size={18} />, page: "teachers", hasChildren: true },
    { label: "Agent", icon: <UserCog size={18} />, page: "agent" },
    { label: "Classes", icon: <School size={18} />, page: "classes", hasChildren: true },
    { label: "Application", icon: <FileText size={18} />, page: "application" },
    { label: "Visa Management", icon: <Globe size={18} />, page: "visa", hasChildren: true },
    { label: "Payment", icon: <CreditCard size={18} />, page: "payment" },
    { label: "Anouncement", icon: <Megaphone size={18} />, page: "announcement" },
    { label: "Certificate", icon: <Award size={18} />, page: "certificate" },
    { label: "Progress Report", icon: <BarChart3 size={18} />, page: "progress-report" },
    { label: "Evaluation Test", icon: <FlaskConical size={18} />, page: "evaluation-test" },
    { label: "Generate Evaluation", icon: <ClipboardCheck size={18} />, page: "generate-evaluation" },
    { label: "Generate Offer Letter", icon: <FileBadge2 size={18} />, page: "offer-letter" },
    { label: "Reports", icon: <BarChart2 size={18} />, page: "reports" },
    { label: "Student Plant", icon: <Leaf size={18} />, page: "student-plant" },
];

interface AdminSidebarProps {
    activePage: string;
    onNavigate: (page: string) => void;
}

export function AdminSidebar({ activePage, onNavigate }: AdminSidebarProps) {
    // Map page key → menu label for highlight
    const activeLabel =
        menuItems.find((m) => m.page === activePage)?.label ?? activePage;

    return (
        <div className="fixed left-0 top-0 flex flex-col justify-between bg-white w-[200px] h-screen border-r border-[#f0f0f0] z-20">
            {/* Logo */}
            <div className="flex flex-col min-h-0">
                <div className="flex items-center justify-between px-[16px] py-[20px] border-b border-[#f0f0f0] shrink-0">
                    <img alt="EduGlobe" className="h-[32px] object-contain" src={imgLogos4} />
                    <button className="text-[#a0a0a0] hover:text-[#555] transition-colors">
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                            <rect x="3" y="4" width="7" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" />
                            <rect x="14" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
                            <rect x="14" y="15" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                    </button>
                </div>

                {/* Nav Items */}
                <nav className="flex flex-col py-[8px] overflow-y-auto flex-1">
                    {menuItems.map((item) => {
                        const isActive = item.label === activeLabel;
                        return (
                            <button
                                key={item.label}
                                onClick={() => item.page && onNavigate(item.page)}
                                className={`flex items-center justify-between px-[16px] py-[10px] text-left transition-colors ${isActive
                                    ? "bg-[#EFF6FF] text-[#155DFC] font-semibold"
                                    : "text-[#6B7280] hover:bg-[#f9fafb] hover:text-[#374151]"
                                    }`}
                            >
                                <div className="flex items-center gap-[10px]">
                                    <span className={isActive ? "text-[#155DFC]" : "text-[#9CA3AF]"}>
                                        {item.icon}
                                    </span>
                                    <span className="font-['Inter',sans-serif] text-[13px] leading-[1.5]">
                                        {item.label}
                                    </span>
                                </div>
                                {item.hasChildren && (
                                    <ChevronRight size={14} className="text-[#9CA3AF]" />
                                )}
                            </button>
                        );
                    })}
                </nav>
            </div>

            {/* Settings */}
            <div className="border-t border-[#f0f0f0] shrink-0">
                <button className="flex items-center gap-[10px] px-[16px] py-[14px] w-full text-[#6B7280] hover:bg-[#f9fafb] hover:text-[#374151] transition-colors">
                    <Settings size={18} className="text-[#9CA3AF]" />
                    <span className="font-['Inter',sans-serif] text-[13px]">Settings</span>
                </button>
            </div>
        </div>
    );
}
