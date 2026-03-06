import imgProfilePicture from "../../../assets/profile_picture.png";
import { Search, Bell, ChevronDown } from "lucide-react";

interface AdminNavbarProps {
    title: string;
}

export function AdminNavbar({ title }: AdminNavbarProps) {
    return (
        <div className="fixed top-0 left-[200px] right-0 bg-white border-b border-[#f0f0f0] flex items-center justify-between px-[24px] h-[64px] z-10">
            {/* Page Title */}
            <h1 className="font-['Inter',sans-serif] font-bold text-[20px] text-[#111827]">
                {title}
            </h1>

            {/* Right side */}
            <div className="flex items-center gap-[16px]">
                {/* Search Bar */}
                <div className="bg-[#f6f6f6] flex items-center gap-[8px] px-[14px] py-[9px] rounded-full w-[240px]">
                    <Search size={16} className="text-[#a0a0a0] shrink-0" />
                    <span className="font-['Inter',sans-serif] text-[14px] text-[#a0a0a0] flex-1">Search</span>
                    <div className="flex items-center gap-[2px]">
                        <div className="bg-white rounded-[4px] px-[4px] py-[1px]">
                            <span className="font-['Inter',sans-serif] text-[10px] text-[#a0a0a0]">⌘</span>
                        </div>
                        <div className="bg-white rounded-[4px] px-[4px] py-[1px]">
                            <span className="font-['Inter',sans-serif] text-[10px] text-[#a0a0a0]">K</span>
                        </div>
                    </div>
                </div>

                {/* Notification */}
                <div className="bg-[#f6f6f6] flex items-center justify-center rounded-full size-[40px] relative cursor-pointer hover:bg-[#ebebeb] transition-colors">
                    <Bell size={18} className="text-[#374151]" />
                    <div className="absolute top-[8px] right-[9px] size-[7px] bg-[#FF0013] rounded-full border border-white" />
                </div>

                {/* Profile */}
                <div className="bg-[#f6f6f6] flex gap-[8px] items-center pl-[4px] pr-[12px] rounded-full h-[40px] cursor-pointer hover:bg-[#ebebeb] transition-colors">
                    <img
                        alt="Profile"
                        className="size-[32px] rounded-full object-cover"
                        src={imgProfilePicture}
                    />
                    <span className="font-['Inter',sans-serif] text-[14px] text-black">Jhon</span>
                    <ChevronDown size={14} className="text-[#a0a0a0]" />
                </div>
            </div>
        </div>
    );
}
