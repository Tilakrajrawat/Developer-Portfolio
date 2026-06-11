export default function About() {
    return (
      <section id="about" className="section">
        <div className="content-container max-w-4xl">
          <div className="mb-4">
            <span className="text-sm uppercase tracking-[0.2em] text-blue-400">
              About
            </span>
          </div>
  
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Building scalable backend systems and real-time applications.
          </h2>
  
          <div className="space-y-6 text-neutral-400 leading-relaxed text-lg">
  <p>
    I'm a software engineer focused on building reliable backend systems,
    real-time applications, and cloud-native platforms. My work spans
    distributed architectures, API design, AI-powered solutions, and
    scalable web applications.
  </p>

  <p>
    Recently, I've built an AI-powered online examination platform,
    a production-style incident management system, and a real-time
    communication platform, each designed around performance,
    maintainability, and system reliability.
  </p>

  <p>
    I'm particularly interested in backend engineering, distributed
    systems, cloud technologies, and solving complex problems that
    require thoughtful architecture rather than just code.
  </p>
</div>
        </div>
      </section>
    );
  }