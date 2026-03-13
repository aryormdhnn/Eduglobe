import svgPaths from "../../../imports/svg-mpum6s8vmz";
import imgLogos4 from "../../../assets/logo.png";

const menuItems = [
  { label: "Dashboard", icon: "home", page: "dashboard" },
  { label: "Students", icon: "note", page: "students" },
  { label: "My Classes", icon: "bill", page: "my-classes" },
  { label: "Examination", icon: "examination", page: "examination" },
  { label: "Schedule", icon: "calendar2", page: "schedule" },
  { label: "Academic Reports", icon: "reports", page: "academic-reports" },
];

function MenuIcon({ icon, active }: { icon: string; active?: boolean }) {
  const color = active ? "#155DFC" : "#A3A3A3";
  switch (icon) {
    case "home":
      return (
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.p19afa500} fill={color} />
          <path d={svgPaths.pf0dc300} fill={color} />
        </svg>
      );
    case "note":
      return (
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.p1067c780} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3a0c77f0} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M8 13H12" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M8 17H16" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      );
    case "bill":
      return (
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.p251376c0} stroke={color} strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M2 2.5H22" stroke={color} strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M8 8H16" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M8 13H16" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      );
    case "examination":
      return (
        <svg className="size-[24px]" fill="none" viewBox="0 0 24.01 24.01">
          <path d={svgPaths.p1de41280} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p8951680} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p13bd2e00} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p838a700} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path clipRule="evenodd" d={svgPaths.pa849100} fillRule="evenodd" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9.00375 5.00208H12.005" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9.00375 11.5048H12.005" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9.00375 18.0075H12.005" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M16.0067 8.00333H21.0087" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      );
    case "calendar2":
      return (
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
          <path d="M8 2V5" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M16 2V5" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M3.5 9.09H20.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pb7b9300} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M11.9955 13.7H12.0045" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8.29431 13.7H8.30329" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8.29431 16.7H8.30329" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      );
    case "reports":
      return (
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.p75c9200} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12 5.49V20.49" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M7.75 8.49H5.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M8.5 11.49H5.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      );
    case "settings":
      return (
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.p3cccb600} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p243d2300} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      );
    default:
      return null;
  }
}

interface SidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export function TeacherSidebar({ activePage, onNavigate }: SidebarProps) {
  return (
    <div className="fixed left-0 top-0 flex flex-col justify-between bg-white w-[248px] h-screen px-[12px] py-[24px] z-20 border-r border-[#F3F4F6]">
      {/* Header */}
      <div className="flex flex-col gap-[12px] w-full">
        <div className="flex items-center justify-between pb-[32px] px-[12px]">
          <div className="h-[40px] w-[105px] relative">
            <img alt="EduGlobe" className="absolute h-[91.3%] left-[5.03%] top-[4.73%] w-[90.49%] object-contain" src={imgLogos4} />
          </div>
          <div className="size-[20px] relative">
            <div className="absolute inset-[15.63%]">
              <span className="font-['Inter',sans-serif] font-bold text-[#155DFC] text-[10px] bg-[#EFF6FF] px-2 py-1 rounded-full whitespace-nowrap -ml-6">
                TEACHER
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col w-full overflow-y-auto max-h-[calc(100vh-180px)]">
          {menuItems.map((item) => {
            const isActive = activePage === item.page;
            return (
              <div
                key={item.label}
                onClick={() => onNavigate(item.page)}
                className={`flex items-center gap-[8px] p-[12px] rounded-[4px] w-full cursor-pointer relative ${isActive
                    ? "bg-[#f5faff]"
                    : "hover:bg-gray-50"
                  }`}
              >
                {isActive && (
                  <div className="absolute inset-0 border border-[#155dfc] rounded-[4px] pointer-events-none" />
                )}
                <MenuIcon icon={item.icon} active={isActive} />
                <span
                  className={`font-['Inter',sans-serif] text-[14px] leading-[1.5] ${isActive
                      ? "font-semibold text-[#155dfc]"
                      : "font-normal text-[#a3a3a3]"
                    }`}
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Menu */}
      <div className="flex items-center gap-[8px] p-[12px] rounded-[4px] w-full cursor-pointer hover:bg-gray-50">
        <MenuIcon icon="settings" />
        <span className="font-['Inter',sans-serif] font-normal text-[14px] leading-[1.5] text-[#a3a3a3]">
          Settings
        </span>
      </div>
    </div>
  );
}
