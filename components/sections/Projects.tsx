import { ArrowUpRight, Github } from "lucide-react";
import { featuredProjects } from "@/app/data/projects";

export default async function Projects() {
return ( <section id="projects" className="section"> <div className="content-container"> <span className="text-sm uppercase tracking-[0.2em] text-blue-400">
Projects </span>

    <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-12">
      Building systems, not just applications.
    </h2>

    <div className="space-y-8">
      {featuredProjects.map((project) => (
        <div
          key={project.title}
          className="
            glass-panel
            rounded-3xl
            p-8
            border border-blue-500/10
            hover:border-blue-500/30
            transition-all duration-300
            hover:-translate-y-1
          "
        >
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h3 className="text-3xl font-bold text-white">
                  {project.title}
                </h3>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  <Github size={20} />
                </a>
              </div>

              <p className="mt-5 text-slate-400 leading-relaxed max-w-3xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3 py-1
                      rounded-full
                      border border-blue-500/15
                      bg-blue-500/5
                      text-sm
                      text-slate-300
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:w-[300px]">
              <h4 className="text-sm uppercase tracking-wider text-blue-400 mb-4">
                Key Highlights
              </h4>

              <div className="space-y-3">
                {project.highlights.map((item) => (
                  <div
                    key={item}
                    className="
                      rounded-xl
                      border border-blue-500/10
                      bg-blue-500/5
                      px-4 py-3
                      text-sm
                      text-slate-300
                    "
                  >
                    {item}
                  </div>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-5 inline-flex items-center gap-2
                  text-blue-400
                  hover:text-blue-300
                "
              >
                View Repository
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

);
}
