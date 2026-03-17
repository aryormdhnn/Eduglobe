import imgLogos4 from "../../../assets/logo.png";
import {
    LayoutDashboard,
    Users,
    FileText,
    Calendar,
    MessageSquare,
    DollarSign,
    Settings,
    ChevronRight,
} from "lucide-react";

interface MenuItem {
    label: string;
    icon: React.ReactNode;
    hasChildren?: boolean;
    page?: string;
}

const menuItems: MenuItem[] = [
    { label: "Dashboard", icon: <LayoutDashboard size={18} />, page: "dashboard" },
    { label: "Students", icon: <Users size={18} />, page: "students" },
    { label: "Applications", icon: <FileText size={18} />, page: "applications" },
    { label: "Fee", icon: <DollarSign size={18} />, page: "fee" },
    { label: "Appointments", icon: <Calendar size={18} />, page: "appointments" },
    { label: "Chat", icon: <MessageSquare size={18} />, page: "chat" },
];

interface ConselorSidebarProps {
    activePage: string;
    onNavigate: (page: string) => void;
}

export function ConselorSidebar({ activePage, onNavigate }: ConselorSidebarProps) {
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

                {/* Role Badge */}
                <div className="px-[16px] py-[12px] border-b border-[#f0f0f0]">
                    <div className="flex items-center gap-[8px]">
                        <div className="bg-[#F3E8FF] text-[#7E22CE] px-[10px] py-[3px] rounded-full">
                            <span className="font-['Inter',sans-serif] text-[11px] font-semibold">CONSELOR</span>
                        </div>
                    </div>
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
                                    ? "bg-[#F3E8FF] text-[#9333EA] font-semibold"
                                    : "text-[#6B7280] hover:bg-[#f9fafb] hover:text-[#374151]"
                                    }`}
                            >
                                <div className="flex items-center gap-[10px]">
                                    <span className={isActive ? "text-[#9333EA]" : "text-[#9CA3AF]"}>
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
