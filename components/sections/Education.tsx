export default function Education() {
    return (
      <section id="education" className="section">
        <div className="content-container">
          <div className="mb-4">
            <span className="text-sm uppercase tracking-[0.2em] text-blue-400">
              Education
            </span>
          </div>
  
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Academic Background
          </h2>
  
          <div className="glass-panel rounded-3xl p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Graphic Era Hill University
                </h3>
  
                <p className="mt-2 text-blue-400">
                  Bachelor of Technology (B.Tech) — Computer Science & Engineering
                </p>
  
                <p className="mt-4 text-slate-400 leading-relaxed">
                Focused on software engineering, data structures & algorithms,
    database systems, operating systems, computer networks, and
    full-stack application development.
                </p>
              </div>
  
              <span className="text-slate-400 text-sm whitespace-nowrap">
                2022-2026
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }