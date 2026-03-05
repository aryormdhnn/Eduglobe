import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import { CertificateContent } from "./components/CertificateContent";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="bg-[#f6f6f6] min-h-screen relative">
      <Sidebar />
      <Navbar />
      <div className="ml-[248px] pt-[80px] p-[24px]">
        <CertificateContent />
      </div>
      <Toaster />
    </div>
  );
}
