import { useState } from "react";
import { ArrowLeft, Save, UploadCloud } from "lucide-react";
import { toast } from "sonner";

interface ConselorCreateProgramContentProps {
    onBack?: () => void;
}

export function ConselorCreateProgramContent({ onBack }: ConselorCreateProgramContentProps) {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            toast.success("Program successfully created");
            if (onBack) onBack();
        }, 1000);
    };

    return (
        <div className="space-y-[24px]">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-[16px]">
                    <button
                        onClick={onBack}
                        className="p-[8px] rounded-full hover:bg-[#F3F4F6] transition-colors text-[#6B7280]"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div>
                        <h2 className="text-[20px] font-bold text-[#111827] font-['Inter',sans-serif]">Create New Program</h2>
                        <p className="text-[14px] text-[#6B7280] font-['Inter',sans-serif]">Add a new educational program or course</p>
                    </div>
                </div>
                <div className="flex items-center gap-[12px]">
                    <button
                        onClick={onBack}
                        className="px-[16px] py-[8px] border border-[#E5E7EB] rounded-[8px] font-['Inter',sans-serif] text-[13px] font-medium text-[#374151] hover:bg-[#F9FAFB] transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="flex items-center gap-[8px] px-[16px] py-[8px] bg-[#155DFC] text-white rounded-[8px] font-['Inter',sans-serif] text-[13px] font-medium hover:bg-[#1e4db7] transition-colors disabled:opacity-50"
                    >
                        <Save size={16} />
                        {loading ? "Saving..." : "Save Program"}
                    </button>
                </div>
            </div>

            {/* Form Content */}
            <div className="bg-white rounded-[12px] border border-[#F0F0F0] p-[24px]">
                <form className="space-y-[24px]" onSubmit={handleSubmit}>
                    {/* Basic Info */}
                    <div className="space-y-[16px]">
                        <h3 className="font-['Inter',sans-serif] text-[16px] font-semibold text-[#111827] border-b border-[#F0F0F0] pb-[8px]">Basic Information</h3>
                        
                        <div className="grid grid-cols-2 gap-[16px]">
                            <div className="space-y-[6px]">
                                <label className="font-['Inter',sans-serif] text-[13px] font-medium text-[#374151]">Program Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Business English Course"
                                    className="w-full px-[12px] py-[8px] border border-[#E5E7EB] rounded-[8px] font-['Inter',sans-serif] text-[13px] text-[#111827] outline-none focus:border-[#155DFC] focus:ring-1 focus:ring-[#155DFC] transition-all placeholder:text-[#9CA3AF]"
                                />
                            </div>
                            <div className="space-y-[6px]">
                                <label className="font-['Inter',sans-serif] text-[13px] font-medium text-[#374151]">Category <span className="text-red-500">*</span></label>
                                <select 
                                    required
                                    className="w-full px-[12px] py-[8px] border border-[#E5E7EB] rounded-[8px] font-['Inter',sans-serif] text-[13px] text-[#111827] outline-none focus:border-[#155DFC] focus:ring-1 focus:ring-[#155DFC] transition-all bg-white"
                                >
                                    <option value="">Select category</option>
                                    <option value="Language">Language</option>
                                    <option value="Test Prep">Test Preparation</option>
                                    <option value="Skills">Skills</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-[6px]">
                            <label className="font-['Inter',sans-serif] text-[13px] font-medium text-[#374151]">Program Description</label>
                            <textarea
                                rows={4}
                                placeholder="Describe the program..."
                                className="w-full px-[12px] py-[8px] border border-[#E5E7EB] rounded-[8px] font-['Inter',sans-serif] text-[13px] text-[#111827] outline-none focus:border-[#155DFC] focus:ring-1 focus:ring-[#155DFC] transition-all placeholder:text-[#9CA3AF] resize-none"
                            ></textarea>
                        </div>
                    </div>

                    {/* Additional Details */}
                    <div className="space-y-[16px]">
                        <h3 className="font-['Inter',sans-serif] text-[16px] font-semibold text-[#111827] border-b border-[#F0F0F0] pb-[8px]">Program Details</h3>
                        
                        <div className="grid grid-cols-2 gap-[16px]">
                            <div className="space-y-[6px]">
                                <label className="font-['Inter',sans-serif] text-[13px] font-medium text-[#374151]">Duration <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. 12 Weeks"
                                    className="w-full px-[12px] py-[8px] border border-[#E5E7EB] rounded-[8px] font-['Inter',sans-serif] text-[13px] text-[#111827] outline-none focus:border-[#155DFC] focus:ring-1 focus:ring-[#155DFC] transition-all placeholder:text-[#9CA3AF]"
                                />
                            </div>
                            <div className="space-y-[6px]">
                                <label className="font-['Inter',sans-serif] text-[13px] font-medium text-[#374151]">Status</label>
                                <select 
                                    className="w-full px-[12px] py-[8px] border border-[#E5E7EB] rounded-[8px] font-['Inter',sans-serif] text-[13px] text-[#111827] outline-none focus:border-[#155DFC] focus:ring-1 focus:ring-[#155DFC] transition-all bg-white"
                                >
                                    <option value="Draft">Draft</option>
                                    <option value="Upcoming">Upcoming</option>
                                    <option value="Active">Active</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Image/Thumbnail */}
                    <div className="space-y-[16px]">
                        <h3 className="font-['Inter',sans-serif] text-[16px] font-semibold text-[#111827] border-b border-[#F0F0F0] pb-[8px]">Program Thumbnail</h3>
                        
                        <div className="border-2 border-dashed border-[#E5E7EB] rounded-[12px] p-[32px] flex flex-col items-center justify-center text-center hover:bg-[#F9FAFB] transition-colors cursor-pointer group">
                            <div className="p-[12px] rounded-full bg-[#F3F4F6] text-[#9CA3AF] group-hover:text-[#155DFC] group-hover:bg-[#EFF6FF] transition-colors mb-[12px]">
                                <UploadCloud size={24} />
                            </div>
                            <p className="font-['Inter',sans-serif] text-[13px] font-medium text-[#374151] mb-[4px]">Click to upload or drag and drop</p>
                            <p className="font-['Inter',sans-serif] text-[12px] text-[#6B7280]">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
