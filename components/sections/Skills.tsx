import {
  Server,
  Cloud,
  BrainCircuit,
  Network,
} from "lucide-react";

const groups = [
  {
    title: "Backend Engineering",
    icon: Server,
    description:
      "Designing scalable APIs, authentication systems, real-time services, and backend architectures.",
    skills: [
      "Spring Boot",
      "Node.js",
      "Express",
      "REST APIs",
      "WebSockets",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    description:
      "Building cloud-native applications with containerized deployments and modern DevOps workflows.",
    skills: [
      "Azure",
      "Docker",
      "GitHub Actions",
      "Linux",
    ],
  },
  {
    title: "Databases & AI",
    icon: BrainCircuit,
    description:
      "Developing AI-powered applications with computer vision pipelines, APIs, and scalable data layers.",
    skills: [
      "MongoDB",
      "Cosmos DB",
      "FastAPI",
      "YOLOv8",
      "OpenCV",
    ],
  },
  {
    title: "System Design",
    icon: Network,
    description:
      "Designing distributed systems, role-based platforms, event-driven workflows, and scalable architectures.",
    skills: [
      "RBAC",
      "Microservices",
      "Distributed Systems",
      "Event-Driven Architecture",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="content-container">
        <div className="mb-4">
          <span className="text-sm uppercase tracking-[0.2em] text-blue-400">
            Technical Expertise
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Technologies and systems I work with.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="
                  glass-panel
                  rounded-3xl
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500/30
                  hover:shadow-[0_0_40px_rgba(59,130,246,0.08)]
                "
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="
                      flex items-center justify-center
                      w-11 h-11
                      rounded-xl
                      bg-blue-500/10
                      border border-blue-500/20
                    "
                  >
                    <Icon
                      size={20}
                      className="text-blue-400"
                    />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {group.title}
                  </h3>
                </div>

                <p className="text-slate-400 leading-relaxed mb-6">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        px-3 py-1.5
                        rounded-full
                        border border-blue-500/15
                        bg-blue-500/5
                        text-sm
                        text-slate-300
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}