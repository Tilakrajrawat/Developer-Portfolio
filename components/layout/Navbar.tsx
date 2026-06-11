"use client";

export default function Navbar() {
const navItems = [
{ label: "About", href: "#about" },
{ label: "Skills", href: "#skills" },
{ label: "Projects", href: "#projects" },
{ label: "Experience", href: "#experience" },
{ label: "Contact", href: "#contact" },
];

const scrollToSection = (selector: string) => {
document.querySelector(selector)?.scrollIntoView({
behavior: "smooth",
block: "start",
});
};

return ( <header className="fixed top-5 left-0 right-0 z-50 flex justify-center"> <nav className="glass-panel rounded-full px-6 py-3"> <div className="flex items-center gap-8">
<button
onClick={() =>
window.scrollTo({
top: 0,
behavior: "smooth",
})
}
className="font-semibold text-sm text-white whitespace-nowrap"
>
Tilak Raj Rawat </button>


      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => scrollToSection(item.href)}
            className="
              text-sm
              text-slate-400
              hover:text-white
              transition-colors
            "
          >
            {item.label}
          </button>
        ))}
      </div>

      <a
        href="https://drive.google.com/file/d/1yQM8mvXPGPWeqmnU6OYotEik848al6AZ/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="
          text-sm
          px-4 py-2
          rounded-full
          border border-blue-500/20
          bg-blue-500/5
          text-blue-300
          hover:bg-blue-500/10
          transition
        "
      >
        View Resume
      </a>
    </div>
  </nav>
</header>


);
}
