export interface FeaturedProject {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  github: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: "AI-Based Proctoring Platform",
    description:
      "Enterprise-style online examination platform combining AI-powered proctoring, live WebRTC monitoring, risk scoring, server-side evaluation, and role-based access control.",

    tech: [
      "Next.js",
      "Spring Boot",
      "FastAPI",
      "YOLOv8",
      "WebRTC",
      "MongoDB",
    ],

    github:
      "https://github.com/Tilakrajrawat/ai-based-proctoring-system",

    highlights: [
      "AI Incident Detection",
      "Live WebRTC Monitoring",
      "Risk-Aware Session Control",
      "Server-Side Scoring",
    ],
  },

  {
    title: "IncidentIQ",
    description:
      "Production-ready incident management platform featuring SLA tracking, analytics dashboards, role-based workflows, real-time notifications, and Azure Functions automation.",

    tech: [
      "React + Vite",
      "Node.js + Express",
      "MongoDB",
      "Azure Functions",
      "WebSockets",
    ],

    github:
      "https://github.com/Tilakrajrawat/incidentiq",

    highlights: [
      "JWT + RBAC Security",
      "SLA Tracking Engine",
      "Real-Time Event Streaming",
      "Analytics Dashboard",
    ],
  },

  {
    title: "NexTalk",
    description:
      "Real-time messaging platform supporting private conversations, group chat, file sharing, presence tracking, typing indicators, and Socket.IO powered communication.",

    tech: [
      "React + Vite",
      "Node.js + Express",
      "Socket.IO",
      "MongoDB",
    ],

    github:
      "https://github.com/Tilakrajrawat/NexTalk",

    highlights: [
      "Group Messaging",
      "Presence Tracking",
      "Typing Indicators",
      "File & Image Sharing",
    ],
  },
];