import { useState, useMemo } from "react";
import { ArrowUpRight, Copy, Download, Import, Search } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { AgentWithdrawalModal } from "./AgentWithdrawalModal";

const trendData = [
  { name: "Jul", commission: 9000 },
  { name: "Aug", commission: 12500 },
  { name: "Sep", commission: 16500 },
  { name: "Oct", commission: 15300 },
  { name: "Nov", commission: 19500 },
  { name: "Dec", commission: 1200 },
  { name: "Jan", commission: 1200 },
];

const breakdownData = [
  { course: "Intensive English Programme", students: 45, rate: 850, total: 38250 },
  { course: "Advanced English Course", students: 28, rate: 950, total: 26600 },
  { course: "Business English", students: 32, rate: 800, total: 25600 },
  { course: "IELTS Preparation", students: 24, rate: 900, total: 21600 },
  { course: "General English", students: 18, rate: 750, total: 13500 },
  { course: "English for Academic Purposes", students: 20, rate: 880, total: 17600 },
];

const transactionData = [
  { id: "TXN-INC-001", type: "Income", statusBadge: "Paid", title: "Commission for 12 student enrollments", desc: "12 students enrolled", date: "2024-01-10", paidDate: "2024-01-12", method: "Bank Transfer", amount: 12200 },
  { id: "TXN-INC-002", type: "Income", statusBadge: "Paid", title: "Commission for 4 student enrollments", desc: "4 students enrolled", date: "2024-01-10", paidDate: "2024-01-12", method: "Bank Transfer", amount: 5200 },
  { id: "TXN-INC-003", type: "Income", statusBadge: "Paid", title: "Commission for 10 student enrollments", desc: "10 students enrolled", date: "2024-01-10", paidDate: "2024-01-12", method: "Bank Transfer", amount: 45200 },
  { id: "TXN-INC-004", type: "Income", statusBadge: "Paid", title: "Commission for 12 student enrollments", desc: "12 students enrolled", date: "2024-01-10", paidDate: "2024-01-12", method: "Direct Transfer", amount: 11200 },
  { id: "TXN-OUT-001", type: "Outcome", statusBadge: "Processed", title: "Marketing campaign reimbursement", desc: "Social media promotion for Eduglobe English programs", date: "2024-01-10", paidDate: "2024-01-12", method: "Credit Card", amount: 10200 },
  { id: "TXN-OUT-002", type: "Outcome", statusBadge: "Paid", title: "Student event participant fee", desc: "Registration fee for Eduglobe recruitment seminar", date: "2024-01-10", paidDate: "2024-01-12", method: "Bank Transfer", amount: 9600 },
  { id: "TXN-OUT-003", type: "Outcome", statusBadge: "Paid", title: "Promotional material printing", desc: "Marketing brochures for student recruitment campaign", date: "2024-01-10", paidDate: "2024-01-12", method: "Bank Transfer", amount: 9300 },
  { id: "TXN-PND-001", type: "Income", statusBadge: "Pending", title: "Commission for 1 student enrollment", desc: "1 student enrolled in IELTS Preparation Course", date: "2024-01-15", due: "2024-01-20", method: "Credit Card", amount: 3400 },
  { id: "TXN-PND-002", type: "Income", statusBadge: "Pending", title: "Commission for 5 student enrollment", desc: "5 student enrolled in IELTS Preparation Course", date: "2024-01-15", due: "2024-01-20", method: "Credit Card", amount: 5500 },
  { id: "TXN-PND-003", type: "Outcome", statusBadge: "Pending", title: "Marketing expenses for social media campaigns", desc: "N/A", date: "2024-01-15", due: "2024-01-20", method: "Credit Card", amount: 7400 },
  { id: "TXN-PND-004", type: "Outcome", statusBadge: "Pending", title: "Marketing expenses for social media campaigns", desc: "N/A", date: "2024-01-15", due: "2024-01-20", method: "Credit Card", amount: 5000 },
];

interface AgentCommissionContentProps {
  onNavigate?: (page: string, params?: any) => void;
}

export function AgentCommissionContent({ onNavigate }: AgentCommissionContentProps) {
  const [isWithdrawalModalOpen, setIsWithdrawalModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Income");
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = ["All", "Recent Activities", "Income", "Pending", "Outcome"];

  const filteredTransactions = useMemo(() => {
    let filtered = transactionData;
    
    if (activeTab === "Income") {
      filtered = filtered.filter(t => t.type === "Income" && t.statusBadge !== "Pending");
    } else if (activeTab === "Outcome") {
      filtered = filtered.filter(t => t.type === "Outcome" && t.statusBadge !== "Pending");
    } else if (activeTab === "Pending") {
      filtered = filtered.filter(t => t.statusBadge === "Pending");
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(t => 
        t.title.toLowerCase().includes(q) || 
        t.id.toLowerCase().includes(q)
      );
    }
    
    return filtered;
  }, [activeTab, searchQuery]);
  
  return (
    <div className="max-w-[1200px] mx-auto pb-[40px] space-y-[24px]">

      {/* Header section (already rendered in Navbar in App layout, but we can add title/subtitle here if needed. Design shows "Commission & Payments" again with subtitle) */}
      <div className="flex flex-col gap-[4px] mb-[24px]">
        <h2 className="text-[20px] font-bold text-[#111827] font-['Inter',sans-serif]">Commission & Payments</h2>
        <p className="text-[14px] text-[#6B7280] font-['Inter',sans-serif]">Track your earnings and payment history</p>
      </div>

      {/* Data Cards */}
      <div className="grid grid-cols-4 gap-[16px]">
        {/* Card 1 */}
        <div className="bg-white rounded-[12px] p-[20px] shadow-sm border border-[#F3F4F6] flex flex-col justify-between">
          <div className="flex justify-between items-start mb-[16px]">
            <div className="flex items-center gap-[8px]">
              <div className="bg-[#EFF6FF] text-[#155DFC] p-[6px] rounded-[6px]">
                <BanknoteIcon />
              </div>
              <span className="text-[13px] font-medium text-[#374151] font-['Inter',sans-serif]">Total Earned (YTD)</span>
            </div>
            <ArrowUpRight className="text-[#9CA3AF]" size={16} />
          </div>
          <div>
            <div className="text-[24px] font-bold text-[#111827] font-['Inter',sans-serif] mb-[4px]">RM 143,150</div>
            <div className="text-[11px] text-[#10B981] font-medium font-['Inter',sans-serif]">37.5% Complete</div>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="bg-white rounded-[12px] p-[20px] shadow-sm border border-[#F3F4F6] flex flex-col justify-between border-t-4 border-t-[#155DFC]">
          <div className="flex justify-between items-start mb-[16px]">
            <div className="flex items-center gap-[8px]">
              <div className="bg-[#EFF6FF] text-[#155DFC] p-[6px] rounded-[6px]">
                <WalletIcon />
              </div>
              <span className="text-[13px] font-medium text-[#374151] font-['Inter',sans-serif]">Paid This Month</span>
            </div>
            <ArrowUpRight className="text-[#9CA3AF]" size={16} />
          </div>
          <div>
            <div className="text-[24px] font-bold text-[#111827] font-['Inter',sans-serif] mb-[4px]">RM 12,200</div>
            <div className="text-[11px] text-[#10B981] font-medium font-['Inter',sans-serif]">37.5% Complete</div>
          </div>
        </div>

        {/* Card 3 (Pending Payment with Withdrawal button) */}
        <div className="bg-white rounded-[12px] p-[20px] shadow-sm border border-[#F3F4F6] flex flex-col justify-between">
          <div className="flex justify-between items-start mb-[16px]">
            <div className="flex items-center gap-[8px]">
              <div className="bg-[#FEF9C3] text-[#A16207] p-[6px] rounded-[6px]">
                <ClockIcon />
              </div>
              <span className="text-[13px] font-medium text-[#374151] font-['Inter',sans-serif]">Pending Payment</span>
            </div>
            <ArrowUpRight className="text-[#9CA3AF]" size={16} />
          </div>
          <div>
            <div className="text-[24px] font-bold text-[#111827] font-['Inter',sans-serif] mb-[8px]">RM 28,050</div>
            <button 
              onClick={() => setIsWithdrawalModalOpen(true)}
              className="w-full py-[8px] border border-[#E5E7EB] rounded-[8px] text-[13px] font-medium text-[#111827] hover:bg-[#F9FAFB] transition-colors"
            >
              Request Withdrawal
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-[12px] p-[20px] shadow-sm border border-[#F3F4F6] flex flex-col justify-between">
          <div className="flex justify-between items-start mb-[16px]">
            <div className="flex items-center gap-[8px]">
              <div className="bg-[#EFF6FF] text-[#155DFC] p-[6px] rounded-[6px]">
                <TrendingUpIcon />
              </div>
              <span className="text-[13px] font-medium text-[#374151] font-['Inter',sans-serif]">Avg. Commission/Student</span>
            </div>
            <ArrowUpRight className="text-[#9CA3AF]" size={16} />
          </div>
          <div>
            <div className="text-[24px] font-bold text-[#111827] font-['Inter',sans-serif] mb-[4px]">RM 863</div>
            <div className="text-[11px] text-[#10B981] font-medium font-['Inter',sans-serif]">37.5% Complete</div>
          </div>
        </div>
      </div>

      {/* Trend Chart */}
      <div className="bg-white rounded-[16px] shadow-sm border border-[#F3F4F6] p-[24px]">
        <div className="flex justify-between items-center mb-[24px]">
          <div>
            <h3 className="text-[16px] font-bold text-[#111827] font-['Inter',sans-serif]">Commission Trend</h3>
            <p className="text-[13px] text-[#6B7280] font-['Inter',sans-serif]">Last 7 months performance</p>
          </div>
          <button className="flex items-center gap-[8px] px-[12px] py-[8px] bg-white border border-[#E5E7EB] rounded-[8px] text-[13px] font-medium text-[#374151] transition-colors hover:bg-[#F9FAFB]">
            <Download size={14} />
            Export Report
          </button>
        </div>
        <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorCommission" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#818CF8" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#34D399" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9CA3AF' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9CA3AF' }} />
                <CartesianGrid vertical={false} stroke="#F3F4F6" strokeDasharray="3 3"/>
                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }} />
                <Area type="monotone" dataKey="commission" stroke="#60A5FA" strokeWidth={2} fillOpacity={1} fill="url(#colorCommission)" activeDot={{ r: 6, fill: '#155DFC', stroke: '#fff', strokeWidth: 2 }} />
              </AreaChart>
            </ResponsiveContainer>
        </div>
      </div>

      {/* Commission Breakdown */}
      <div className="bg-white rounded-[16px] shadow-sm border border-[#F3F4F6] p-[24px]">
        <h3 className="text-[16px] font-bold text-[#111827] font-['Inter',sans-serif] mb-[20px]">Commission Breakdown by Course</h3>
        <div className="flex flex-col gap-[16px]">
          {breakdownData.map((item, index) => (
            <div key={index} className={`flex justify-between items-center pb-[16px] ${index !== breakdownData.length -1 ? 'border-b border-[#F3F4F6]' : ''}`}>
              <div>
                <div className="text-[14px] font-semibold text-[#374151] font-['Inter',sans-serif] mb-[2px]">{item.course}</div>
                <div className="text-[13px] text-[#6B7280] font-['Inter',sans-serif]">{item.students} students • RM {item.rate}/student</div>
              </div>
              <div className="text-[14px] font-bold text-[#10B981] font-['Inter',sans-serif]">RM {item.total.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Transactions & Filters */}
      <div className="bg-transparent mb-[24px]">
        <div className="flex justify-between flex-wrap gap-[16px] items-center">
          <div className="flex items-center gap-[8px] flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-[16px] py-[8px] rounded-[8px] text-[13px] font-medium transition-colors border ${
                  activeTab === tab
                    ? "bg-[#EFF6FF] text-[#155DFC] border-[#BFDBFE]"
                    : "bg-white text-[#6B7280] border-[#E5E7EB] hover:bg-[#F9FAFB]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search className="absolute left-[12px] top-1/2 -translate-y-1/2 text-[#9CA3AF]" size={16} />
            <input
              type="text"
              placeholder="Search anything"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-[36px] pr-[40px] py-[8px] bg-white border border-[#E5E7EB] rounded-[8px] text-[13px] text-[#111827] outline-none focus:border-[#155DFC] focus:ring-1 focus:ring-[#155DFC] transition-all w-[240px] font-['Inter',sans-serif]"
            />
            <div className="absolute right-[12px] top-1/2 -translate-y-1/2 flex items-center gap-[2px]">
              <kbd className="px-[4px] py-[1px] bg-white border border-[#E5E7EB] rounded-[4px] text-[10px] text-[#9CA3AF] font-['Inter',sans-serif]">⌘</kbd>
              <kbd className="px-[4px] py-[1px] bg-white border border-[#E5E7EB] rounded-[4px] text-[10px] text-[#9CA3AF] font-['Inter',sans-serif]">K</kbd>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[16px] shadow-sm border border-[#EDF2F7] md:border-[#F3F4F6] p-[24px] border-b-0 border-x-0 md:border-b md:border-x">
        <div className="flex flex-col gap-[20px]">
          {filteredTransactions.map((txn, index) => (
            <div key={index} className={`flex justify-between items-start pb-[20px] ${index !== filteredTransactions.length -1 ? 'border-b border-[#F3F4F6]' : ''}`}>
              <div className="flex flex-col gap-[8px]">
                <div className="flex items-center gap-[12px]">
                  <span className="text-[14px] font-bold text-[#111827] font-['Inter',sans-serif]">{txn.id}</span>
                  <span className={`px-[8px] py-[2px] rounded-full text-[11px] font-medium font-['Inter',sans-serif] flex items-center gap-[4px]
                    ${(txn.statusBadge === 'Paid' || txn.statusBadge === 'Processed') ? 'bg-[#DCFCE7] text-[#15803D]' : txn.statusBadge === 'Pending' ? 'bg-[#FEF9C3] text-[#A16207]' : 'bg-[#FEE2E2] text-[#B91C1C]'}`}>
                    <div className={`size-[6px] rounded-full ${(txn.statusBadge === 'Paid' || txn.statusBadge === 'Processed') ? 'bg-[#15803D]' : txn.statusBadge === 'Pending' ? 'bg-[#A16207]' : 'bg-[#B91C1C]'}`}></div>
                    {txn.statusBadge}
                  </span>
                </div>
                <div>
                  <div className="text-[13px] text-[#374151] font-['Inter',sans-serif]">{txn.title}</div>
                  <div className="text-[12px] text-[#9CA3AF] font-['Inter',sans-serif]">{txn.desc}</div>
                </div>
                <div className="flex items-center gap-[16px] mt-[4px]">
                  <div className="flex items-center gap-[6px]">
                    <ClockIcon className="size-[12px] text-[#9CA3AF]" />
                    <span className="text-[11px] text-[#6B7280] font-['Inter',sans-serif]">Date: {txn.date}</span>
                  </div>
                  {(txn.statusBadge === 'Paid' || txn.statusBadge === 'Processed') && txn.paidDate && (
                     <div className="flex items-center gap-[6px]">
                       <div className="size-[12px] rounded-full border border-[#10B981] flex items-center justify-center"><div className="size-[6px] bg-[#10B981] rounded-full"></div></div>
                       <span className="text-[11px] text-[#6B7280] font-['Inter',sans-serif]">Paid: {txn.paidDate}</span>
                     </div>
                  )}
                  {txn.statusBadge === 'Pending' && txn.due && (
                     <div className="flex items-center gap-[6px]">
                       <ClockIcon className="size-[12px] text-[#10B981]" />
                       <span className="text-[11px] text-[#6B7280] font-['Inter',sans-serif]">Due: {txn.due}</span>
                     </div>
                  )}
                  {txn.statusBadge === 'Cancelled' && (txn as any).refundDate && (
                     <div className="flex items-center gap-[6px]">
                       <Import className="size-[12px] text-[#6B7280] rotate-180" />
                       <span className="text-[11px] text-[#6B7280] font-['Inter',sans-serif]">Refund Processed: {(txn as any).refundDate}</span>
                     </div>
                  )}
                  <div className="text-[11px] text-[#9CA3AF] font-['Inter',sans-serif]">• {txn.method}</div>
                </div>
              </div>
              
              <div className="flex flex-col items-end gap-[12px]">
                 <div className="text-[16px] font-bold text-[#111827] font-['Inter',sans-serif]">RM {txn.amount.toLocaleString()}</div>
                 <button 
                    onClick={() => onNavigate && onNavigate("transaction-detail", { id: txn.id, type: txn.type })}
                    className="text-[12px] text-[#155DFC] font-semibold hover:underline font-['Inter',sans-serif] mt-auto"
                 >
                    View Details
                 </button>
              </div>
            </div>
          ))}
          
          {filteredTransactions.length === 0 && (
             <div className="py-[40px] text-center text-[14px] text-[#6B7280] font-['Inter',sans-serif]">
               No transactions found for the selected filter.
             </div>
          )}
        </div>
      </div>

      <AgentWithdrawalModal 
        isOpen={isWithdrawalModalOpen} 
        onClose={() => setIsWithdrawalModalOpen(false)} 
        availableBalance={28050}
      />
    </div>
  );
}

// Simple icons to emulate the design's specific icons without adding large external SVG assets if possible
function BanknoteIcon(props: any) {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <rect x="2" y="6" width="20" height="12" rx="2" />
            <circle cx="12" cy="12" r="2" />
            <path d="M6 12h.01M18 12h.01" />
        </svg>
    )
}

function WalletIcon(props: any) {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
             <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
             <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
             <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
        </svg>
    )
}

function ClockIcon(props: any) {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
             <circle cx="12" cy="12" r="10"/>
             <polyline points="12 6 12 12 16 14"/>
        </svg>
    )
}

function TrendingUpIcon(props: any) {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
             <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
             <polyline points="16 7 22 7 22 13"/>
        </svg>
    )
}
