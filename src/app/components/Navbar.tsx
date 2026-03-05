import svgPaths from "../../imports/svg-mpum6s8vmz";
import imgProfilePicture from "figma:asset/f2a6a44a8bdaef76e35d287a0160a1293e7c5dfb.png";

export function Navbar() {
  return (
    <div className="fixed top-0 left-[248px] right-0 bg-white flex items-center justify-between px-[24px] py-[16px] z-10">
      {/* Title */}
      <p className="font-['Inter',sans-serif] font-semibold text-[20px] leading-[1.3] text-black">
        My Certificate
      </p>

      {/* Right CTA */}
      <div className="flex gap-[16px] items-center">
        {/* Search Bar */}
        <div className="bg-[#f6f6f6] flex items-center justify-between px-[16px] py-[10px] rounded-full w-[304px] h-[47px]">
          <div className="flex gap-[8px] items-center">
            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
              <circle cx="8.75" cy="8.75" r="6.25" stroke="#A0A0A0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
              <path d="M13.125 13.125L16.875 16.875" stroke="#A0A0A0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            </svg>
            <span className="font-['Inter',sans-serif] font-normal text-[16px] leading-[1.5] text-[#a0a0a0]">
              Search anything
            </span>
          </div>
          <div className="flex gap-[4px] items-center">
            <div className="bg-white rounded-[4px] p-[2px]">
              <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                <g clipPath="url(#cmd)">
                  <path d={svgPaths.p315e4b00} stroke="#A0A0A0" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.pc1dc400} stroke="#A0A0A0" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p4383a00} stroke="#A0A0A0" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p25248a00} stroke="#A0A0A0" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.5 6.5H6.5V9.5H9.5V6.5Z" stroke="#A0A0A0" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="cmd">
                    <rect fill="white" height="16" width="16" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="bg-white rounded-[4px] p-[2px] size-[20px] flex items-center justify-center">
              <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[1.5] text-[#a0a0a0]">K</span>
            </div>
          </div>
        </div>

        {/* Notification */}
        <div className="bg-[#f6f6f6] flex items-center justify-center rounded-full size-[47px] relative">
          <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
            <path d={svgPaths.p2e4da280} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="translate(5.25, 18.75)" />
            <path d={svgPaths.p259f2900} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="translate(3, 3)" />
          </svg>
          <div className="absolute top-[11px] right-[13px] size-[7px] bg-[#FF0013] rounded-full border border-white" />
        </div>

        {/* Profile */}
        <div className="bg-[#f6f6f6] flex gap-[8px] items-center pl-[4px] pr-[16px] rounded-full h-[47px]">
          <div className="flex gap-[8px] items-center">
            <img
              alt="Profile"
              className="size-[37px] rounded-full object-cover"
              src={imgProfilePicture}
            />
            <span className="font-['Inter',sans-serif] font-normal text-[16px] leading-[1.5] text-black">
              Jhon
            </span>
          </div>
          <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
            <path d={svgPaths.p207e4f80} stroke="#A0A0A0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" transform="translate(3, 5)" />
          </svg>
        </div>
      </div>
    </div>
  );
}
