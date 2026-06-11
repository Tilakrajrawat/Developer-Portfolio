export default function Footer() {
    return ( <footer className="border-t border-white/5 mt-24"> <div className="content-container py-8"> <div className="flex flex-col md:flex-row items-center justify-between gap-4">
    
    
          <div>
            <h3 className="font-semibold text-white">
              Tilak Raj Rawat
            </h3>
    
            <p className="text-sm text-slate-500 mt-1">
              Backend-Focused Full-Stack Engineer
            </p>
          </div>
    
          <div className="flex items-center gap-6 text-sm">
            <a
              href="https://github.com/Tilakrajrawat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition"
            >
              GitHub
            </a>
    
            <a
              href="https://linkedin.com/in/tilakrajrawat142"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition"
            >
              LinkedIn
            </a>
    
            <a
              href="mailto:tilakrajrawat1234@gmail.com"
              className="text-slate-400 hover:text-blue-400 transition"
            >
              Email
            </a>
          </div>
        </div>
    
        <div className="mt-6 pt-6 border-t border-white/5 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Tilak Raj Rawat. Built with Next.js,
          TypeScript and Tailwind CSS.
        </div>
      </div>
    </footer>
    
    
    );
    }
    