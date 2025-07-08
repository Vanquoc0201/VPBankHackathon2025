import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-black/20 backdrop-blur-lg border-t border-white/20 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <img src="/logo.jpeg" alt="Project Logo" className="h-8 w-8 rounded-md" />
              <span className="font-bold text-white">GigaScore</span>
            </Link>
            <p className="text-sm text-gray-400">
              © {currentYear}. All Rights Reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Submission for VPBank Technology Hackathon 2025.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/[your-repo]" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-transform hover:scale-110"
              aria-label="GitHub Repository"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-transform hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}