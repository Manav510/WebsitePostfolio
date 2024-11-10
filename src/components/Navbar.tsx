import React from "react";
import { Button } from "@/components/ui/button";
type selectedSectionProp = {
  setSelectedSection: (section: string) => void;
}; 
export default function Navbar({ setSelectedSection }: selectedSectionProp) {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/ManavJain_Resume.pdf';  // Place your PDF in the public folder
    link.download = 'ManavJain_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <nav className="w-full bg-gray-800 text-white py-4 px-6">
      <div className="flex items-center justify-between">
        {/* Left side (links with gap between them) */}
        <div className="text-xl font-semibold flex gap-6">
          <a
            href="#"
            onClick={() => setSelectedSection("about")}
            className="hover:underline"
          >
            About
          </a>
          <a
            href="#"
            onClick={() => setSelectedSection("career")}
            className="hover:underline"
          >
            Career
          </a>
        </div>

        {/* Right side - Download Resume */}
        <div className="space-x-4">
        <Button
            onClick={handleDownload}
            variant="outline"
            className="bg-white text-gray-800 hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2"
          >
            Download Resume
          </Button>
        </div>
      </div>
    </nav>
  );
}
