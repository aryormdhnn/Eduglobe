import svgPaths from "../../imports/svg-mpum6s8vmz";
import imgLogos4 from "../../assets/logo.png";

const menuItems = [
  { label: "Dashboard", icon: "home" },
  { label: "Placement Test", icon: "note" },
  { label: "My Classes", icon: "bill" },
  { label: "My Study Plan", icon: "studyplan" },
  { label: "My Certificate", icon: "certificate", active: true },
  { label: "Attendance", icon: "calendar" },
  { label: "Study Materials", icon: "book" },
  { label: "Schedule", icon: "calendar2" },
  { label: "My Assignments", icon: "assignments" },
  { label: "My Examination", icon: "examination" },
  { label: "Academic Reports", icon: "reports" },
  { label: "Payment", icon: "payment" },
  { label: "Evaluation Test", icon: "evaluation" },
  { label: "Chat", icon: "chat" },
  { label: "Visa Information", icon: "global" },
];

function MenuIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "home":
      return (
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.p19afa500} fill="#A3A3A3" />
          <path d={svgPaths.pf0dc300} fill="#A3A3A3" />
        </svg>
      );
    case "note":
      return (
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.p1067c780} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3a0c77f0} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M8 13H12" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M8 17H16" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      );
    case "bill":
      return (
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.p251376c0} stroke="#A3A3A3" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M2 2.5H22" stroke="#A3A3A3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M8 8H16" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M8 13H16" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      );
    case "studyplan":
      return (
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.p3a100400} stroke="#A3A3A3" strokeWidth="1.5" />
          <path d={svgPaths.p8d27800} stroke="#A3A3A3" strokeWidth="1.5" />
          <path d="M5 6H2M5 12H2M5 18H2" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      );
    case "certificate":
      return (
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
          <path d="M9 6.67H15" stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M7 10.67H17" stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pdf49b00} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4815" />
          <path d={svgPaths.p27c689a0} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4815" />
          <path d={svgPaths.p279f0100} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4815" />
          <path d={svgPaths.p16176f00} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4815" />
        </svg>
      );
    case "calendar":
      return (
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
          <path d="M8 2V5" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M16 2V5" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M3.5 9.09H20.5" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pb7b9300} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M15.6947 13.7H15.7037" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M15.6947 16.7H15.7037" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M11.9955 13.7H12.0045" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M11.9955 16.7H12.0045" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8.29431 13.7H8.30329" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8.29431 16.7H8.30329" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      );
    case "book":
      return (
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.p75c9200} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12 5.49V20.49" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M7.75 8.49H5.5" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M8.5 11.49H5.5" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      );
    case "calendar2":
      return (
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
          <path d="M8 2V5" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M16 2V5" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M3.5 9.09H20.5" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pb7b9300} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M11.9955 13.7H12.0045" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8.29431 13.7H8.30329" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8.29431 16.7H8.30329" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      );
    case "assignments":
      return (
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.p94dbc70} fill="#A3A3A3" />
        </svg>
      );
    case "examination":
      return (
        <svg className="size-[24px]" fill="none" viewBox="0 0 24.01 24.01">
          <path d={svgPaths.p1de41280} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p8951680} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p13bd2e00} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p838a700} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path clipRule="evenodd" d={svgPaths.pa849100} fillRule="evenodd" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9.00375 5.00208H12.005" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9.00375 11.5048H12.005" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9.00375 18.0075H12.005" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M16.0067 8.00333H21.0087" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      );
    case "reports":
      return (
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.p75c9200} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12 5.49V20.49" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M7.75 8.49H5.5" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M8.5 11.49H5.5" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      );
    case "payment":
      return (
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.p12bd9100} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pd21c400} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M7 13H13" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M7 17H11" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      );
    case "evaluation":
      return (
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
          <path clipRule="evenodd" d={svgPaths.p2d1b1280} fill="#A3A3A3" fillRule="evenodd" />
        </svg>
      );
    case "chat":
      return (
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.p367c7380} stroke="#A3A3A3" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p38472e00} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      );
    case "global":
      return (
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.pace200} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p168b3380} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2bfa5680} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1920f500} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p219c3a80} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      );
    case "settings":
      return (
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.p3cccb600} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p243d2300} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      );
    default:
      return null;
  }
}

export function Sidebar() {
  return (
    <div className="fixed left-0 top-0 flex flex-col justify-between bg-white w-[248px] h-screen px-[12px] py-[24px] z-20">
      {/* Header */}
      <div className="flex flex-col gap-[12px] w-full">
        <div className="flex items-center justify-between pb-[32px] px-[12px]">
          <div className="h-[40px] w-[105px] relative">
            <img alt="EduGlobe" className="absolute h-[91.3%] left-[5.03%] top-[4.73%] w-[90.49%] object-contain" src={imgLogos4} />
          </div>
          <div className="size-[20px] relative">
            <div className="absolute inset-[15.63%]">
              <svg className="block size-full" fill="none" viewBox="0 0 13.75 13.75">
                <path d={svgPaths.p3b894d80} fill="#878787" />
              </svg>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col w-full">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-[8px] p-[12px] rounded-[4px] w-full cursor-pointer relative ${item.active
                  ? "bg-[#f5faff]"
                  : "hover:bg-gray-50"
                }`}
            >
              {item.active && (
                <div className="absolute inset-0 border border-[#155dfc] rounded-[4px] pointer-events-none" />
              )}
              <MenuIcon icon={item.icon} />
              <span
                className={`font-['Inter',sans-serif] text-[14px] leading-[1.5] ${item.active
                    ? "font-semibold text-[#155dfc]"
                    : "font-normal text-[#a3a3a3]"
                  }`}
              >
                {item.label}
              </span>
            </div>
          ))}
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
