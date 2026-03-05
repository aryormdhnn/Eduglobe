import svgPaths from "./svg-mpum6s8vmz";
import imgProfilePicture from "figma:asset/f2a6a44a8bdaef76e35d287a0160a1293e7c5dfb.png";
import imgLogos4 from "figma:asset/bf159c7b13b121def6f8691466fbc6c69d1a2e71.png";

function Greeting() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Greeting">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">My Certificate</p>
    </div>
  );
}

function SearchInput() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Search Input">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="absolute bottom-1/4 left-[12.5%] right-1/4 top-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.75 13.75">
              <path d={svgPaths.pf1d2380} id="Vector" stroke="var(--stroke-0, #A0A0A0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[65.85%_12.5%_12.5%_65.85%]" data-name="Vector">
          <div className="absolute inset-[-14.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.58047 5.58047">
              <path d="M0.625 0.625L4.95547 4.95547" id="Vector" stroke="var(--stroke-0, #A0A0A0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#a0a0a0] text-[16px] whitespace-nowrap">Search anything</p>
    </div>
  );
}

function Command() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Command">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3705)" id="Command">
          <g id="Vector" />
          <path d={svgPaths.p315e4b00} id="Vector_2" stroke="var(--stroke-0, #A0A0A0)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1dc400} id="Vector_3" stroke="var(--stroke-0, #A0A0A0)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p4383a00} id="Vector_4" stroke="var(--stroke-0, #A0A0A0)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p25248a00} id="Vector_5" stroke="var(--stroke-0, #A0A0A0)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.5 6.5H6.5V9.5H9.5V6.5Z" id="Vector_6" stroke="var(--stroke-0, #A0A0A0)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_3705">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ShortcutIcon() {
  return (
    <div className="bg-white content-stretch flex items-center p-[2px] relative rounded-[4px] shrink-0" data-name="Shortcut Icon">
      <Command />
    </div>
  );
}

function ShortcutKey() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[2px] relative rounded-[4px] shrink-0 size-[20px]" data-name="Shortcut Key">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#a0a0a0] text-[12px] whitespace-nowrap">K</p>
    </div>
  );
}

function Shortcut() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Shortcut">
      <ShortcutIcon />
      <ShortcutKey />
    </div>
  );
}

function SearchBar() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex h-[47px] items-center justify-between px-[16px] py-[10px] relative rounded-[100px] shrink-0 w-[304px]" data-name="Search Bar">
      <SearchInput />
      <Shortcut />
    </div>
  );
}

function NotificationIcon() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex items-center p-[11px] relative rounded-[83.333px] shrink-0 size-[47px]" data-name="Notification Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icons">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="absolute bottom-[12.5%] left-[37.5%] right-[37.5%] top-3/4" data-name="Vector">
          <div className="absolute inset-[-25%_-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 4.5">
              <path d={svgPaths.p2e4da280} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[15.64%] right-[15.64%] top-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-5%_-4.55%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9928 16.5">
              <path d={svgPaths.p259f2900} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[2.08%_16.67%_68.75%_54.17%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <circle cx="3.5" cy="3.5" fill="var(--fill-0, #FF0013)" id="Ellipse 2" r="3" stroke="var(--stroke-0, white)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ProfileInfo() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Profile Info">
      <div className="relative rounded-[18.5px] shrink-0 size-[37px]" data-name="Profile Picture">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[18.5px] size-full" src={imgProfilePicture} />
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Jhon</p>
    </div>
  );
}

function Profile() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex gap-[8px] h-[47px] items-center pl-[4px] pr-[16px] relative rounded-[100px] shrink-0" data-name="Profile">
      <ProfileInfo />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[37.5%_18.75%_31.25%_18.75%]" data-name="Vector">
          <div className="absolute inset-[-10%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.75 7.5">
              <path d={svgPaths.p207e4f80} id="Vector" stroke="var(--stroke-0, #A0A0A0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="CTA">
      <SearchBar />
      <NotificationIcon />
      <Profile />
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-[248px] overflow-clip px-[24px] py-[16px] top-0 w-[1192px]" data-name="Navbar">
      <Greeting />
      <Cta />
    </div>
  );
}

function MyClasses() {
  return (
    <div className="bg-white h-[1034px] relative rounded-[16px] shrink-0 w-full" data-name="MyClasses">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function CardContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center justify-center left-[248px] p-[24px] top-[80px] w-[1192px]" data-name="Card Container">
      <MyClasses />
    </div>
  );
}

function NavigationHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Navigation Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[32px] px-[12px] relative w-full">
          <div className="h-[40px] relative shrink-0 w-[105px]" data-name="logos 4">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[91.3%] left-[5.03%] max-w-none top-[4.73%] w-[90.49%]" src={imgLogos4} />
            </div>
          </div>
          <div className="relative shrink-0 size-[20px]" data-name="SquareHalf">
            <div className="absolute inset-[15.63%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.75 13.75">
                <path d={svgPaths.p3b894d80} fill="var(--fill-0, #878787)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VuesaxOutlineHome() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/home-2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="home-2">
          <path d={svgPaths.p19afa500} fill="var(--fill-0, #A3A3A3)" id="Vector" />
          <path d={svgPaths.pf0dc300} fill="var(--fill-0, #A3A3A3)" id="Vector_2" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function MenuItem() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <div className="relative shrink-0 size-[24px]" data-name="home-2">
            <VuesaxOutlineHome />
          </div>
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">Dashboard</p>
        </div>
      </div>
    </div>
  );
}

function VuesaxLinearNote() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/note">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="note">
          <path d={svgPaths.p1067c780} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3a0c77f0} id="Vector_2" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M8 13H12" id="Vector_3" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M8 17H16" id="Vector_4" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_5" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function MenuItem1() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <div className="relative shrink-0 size-[24px]" data-name="note">
            <VuesaxLinearNote />
          </div>
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">Placement Test</p>
        </div>
      </div>
    </div>
  );
}

function VuesaxLinearBill() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/bill">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="bill">
          <path d={svgPaths.p251376c0} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M2 2.5H22" id="Vector_2" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M8 8H16" id="Vector_3" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M8 13H16" id="Vector_4" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_5" opacity="0" />
          <g id="Vector_6" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function MenuItem2() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <div className="relative shrink-0 size-[24px]" data-name="bill">
            <VuesaxLinearBill />
          </div>
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">My Classes</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p3a100400} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeWidth="1.5" />
          <path d={svgPaths.p8d27800} id="Vector_2" stroke="var(--stroke-0, #A3A3A3)" strokeWidth="1.5" />
          <path d="M5 6H2M5 12H2M5 18H2" id="Vector_3" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function MenuItem3() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <Frame />
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">My Study Plan</p>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Path" />
          <path d="M9 6.67H15" id="Path_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M7 10.67H17" id="Path_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pdf49b00} id="Path_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4815" />
          <path d={svgPaths.p27c689a0} id="Path_5" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4815" />
          <path d={svgPaths.p279f0100} id="Path_6" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4815" />
          <path d={svgPaths.p16176f00} id="Path_7" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4815" />
        </g>
      </svg>
    </div>
  );
}

function MenuItem4() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Menu Item" style={{ backgroundImage: "linear-gradient(90deg, rgb(245, 250, 255) 0%, rgb(245, 250, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <div className="relative shrink-0 size-[24px]" data-name="Sidebar Navigation/Property 1=School, Learning, Property 2=Сertificate, Diploma=Diploma17">
            <Group />
          </div>
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] min-h-px min-w-px not-italic relative text-[#155dfc] text-[14px]">My Certificate</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#155dfc] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Calendar() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="calendar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="calendar">
          <path d="M8 2V5" id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M16 2V5" id="Vector_2" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M3.5 9.09H20.5" id="Vector_3" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d={svgPaths.pb7b9300} id="Vector_4" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_5" opacity="0" />
          <path d="M15.6947 13.7H15.7037" id="Vector_6" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M15.6947 16.7H15.7037" id="Vector_7" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M11.9955 13.7H12.0045" id="Vector_8" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M11.9955 16.7H12.0045" id="Vector_9" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8.29431 13.7H8.30329" id="Vector_10" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8.29431 16.7H8.30329" id="Vector_11" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearCalendar() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="vuesax/linear/calendar">
      <Calendar />
    </div>
  );
}

function MenuItem5() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <VuesaxLinearCalendar />
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">Attendance</p>
        </div>
      </div>
    </div>
  );
}

function VuesaxLinearBook() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/book">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="book">
          <path d={svgPaths.p75c9200} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12 5.49V20.49" id="Vector_2" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M7.75 8.49H5.5" id="Vector_3" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M8.5 11.49H5.5" id="Vector_4" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_5" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function MenuItem6() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <div className="relative shrink-0 size-[24px]" data-name="book">
            <VuesaxLinearBook />
          </div>
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">Study Materials</p>
        </div>
      </div>
    </div>
  );
}

function VuesaxLinearCalendar1() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/calendar-2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="calendar-2">
          <path d="M8 2V5" id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M16 2V5" id="Vector_2" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M3.5 9.09H20.5" id="Vector_3" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d={svgPaths.pb7b9300} id="Vector_4" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_5" opacity="0" />
          <path d="M11.9955 13.7H12.0045" id="Vector_6" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8.29431 13.7H8.30329" id="Vector_7" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8.29431 16.7H8.30329" id="Vector_8" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function MenuItem7() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <div className="relative shrink-0 size-[24px]" data-name="calendar-2">
            <VuesaxLinearCalendar1 />
          </div>
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">Schedule</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p94dbc70} fill="var(--fill-0, #A3A3A3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MenuItem8() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <Frame1 />
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">My Assignments</p>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[-0.02%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.01 24.01">
        <g id="Group">
          <path d={svgPaths.p1de41280} id="Stroke-10" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p8951680} id="Stroke-10-2" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p13bd2e00} id="Stroke-10-2-2" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p838a700} id="Stroke-10-3" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path clipRule="evenodd" d={svgPaths.pa849100} fillRule="evenodd" id="Path" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9.00375 5.00208H12.005" id="Path_2" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9.00375 11.5048H12.005" id="Path_3" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9.00375 18.0075H12.005" id="Path_4" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M16.0067 8.00333H21.0087" id="Path_5" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Rectangle" />
        </g>
      </svg>
    </div>
  );
}

function MenuItem9() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <div className="relative shrink-0 size-[24px]" data-name="School, Learning/checklist-pen">
            <Group1 />
          </div>
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">My Examination</p>
        </div>
      </div>
    </div>
  );
}

function VuesaxLinearBook1() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/book">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="book">
          <path d={svgPaths.p75c9200} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12 5.49V20.49" id="Vector_2" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M7.75 8.49H5.5" id="Vector_3" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M8.5 11.49H5.5" id="Vector_4" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_5" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function MenuItem10() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <div className="relative shrink-0 size-[24px]" data-name="book">
            <VuesaxLinearBook1 />
          </div>
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">Academic Reports</p>
        </div>
      </div>
    </div>
  );
}

function VuesaxLinearDocumentText() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/document-text">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="document-text">
          <path d={svgPaths.p12bd9100} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pd21c400} id="Vector_2" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M7 13H13" id="Vector_3" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M7 17H11" id="Vector_4" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_5" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function MenuItem11() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <div className="relative shrink-0 size-[24px]" data-name="document-text">
            <VuesaxLinearDocumentText />
          </div>
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">Payment</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p2d1b1280} fill="var(--fill-0, #A3A3A3)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MenuItem12() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <Frame2 />
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">Evaluation Test</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p367c7380} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p38472e00} id="Vector_2" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function MenuItem13() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <Frame3 />
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">Chat</p>
        </div>
      </div>
    </div>
  );
}

function VuesaxLinearGlobal() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/global">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="global">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p168b3380} id="Vector_2" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2bfa5680} id="Vector_3" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1920f500} id="Vector_4" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p219c3a80} id="Vector_5" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_6" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function MenuItem14() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <div className="relative shrink-0 size-[24px]" data-name="global">
            <VuesaxLinearGlobal />
          </div>
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">Visa Information</p>
        </div>
      </div>
    </div>
  );
}

function Navigation1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Navigation">
      <MenuItem />
      <MenuItem1 />
      <MenuItem2 />
      <MenuItem3 />
      <MenuItem4 />
      <MenuItem5 />
      <MenuItem6 />
      <MenuItem7 />
      <MenuItem8 />
      <MenuItem9 />
      <MenuItem10 />
      <MenuItem11 />
      <MenuItem12 />
      <MenuItem13 />
      <MenuItem14 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Navigation">
      <NavigationHeader />
      <Navigation1 />
    </div>
  );
}

function VuesaxLinearSetting() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/setting-2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="setting-2">
          <path d={svgPaths.p3cccb600} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d={svgPaths.p243d2300} id="Vector_2" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function MenuItem15() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <div className="relative shrink-0 size-[24px]" data-name="setting-2">
            <VuesaxLinearSetting />
          </div>
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px]">Settings</p>
        </div>
      </div>
    </div>
  );
}

function BottomMenu() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bottom Menu">
      <MenuItem15 />
    </div>
  );
}

export default function MyCertificate() {
  return (
    <div className="bg-[#f6f6f6] relative size-full" data-name="My Certificate">
      <Navbar />
      <CardContainer />
      <div className="absolute bg-white content-stretch flex flex-col h-[1146px] items-start justify-between left-0 px-[12px] py-[24px] top-[16px] w-[248px]" data-name="Sidebar Navigation">
        <Navigation />
        <BottomMenu />
      </div>
    </div>
  );
}