export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="content-container">
        <div className="mb-4">
          <span className="text-sm uppercase tracking-[0.2em] text-blue-400">
            Experience
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Professional Experience
        </h2>

        <div className="glass-panel rounded-3xl p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Salesforce Developer Virtual Experience
              </h3>

              <p className="mt-2 text-blue-400">
                Agentblazer Champion Program
              </p>
            </div>

            <span className="text-slate-400 text-sm whitespace-nowrap">
              May 2025 – Jul 2025
            </span>
          </div>

          <ul className="mt-8 space-y-4 text-slate-400 leading-relaxed">
            <li>
              Developed automated business workflows using Salesforce Flow
              Builder, optimizing task processing efficiency for simulated
              enterprise environments.
            </li>

            <li>
              Architected data models and granular permission sets while
              following cloud security and multi-tenant application best
              practices.
            </li>

            <li>
              Customized Lightning components to improve user interface
              responsiveness and declarative workflow accuracy.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}