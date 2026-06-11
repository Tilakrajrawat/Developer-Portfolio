export default function Certifications() {
  const certifications = [
    {
      title: "Azure Fundamentals",
      code: "AZ-900 Learning Path",
      issuer: "Microsoft Learn",
    },
    {
      title: "Azure Developer Associate",
      code: "Functions, Cosmos DB, App Service",
      issuer: "Microsoft Learn",
    },
    {
      title: "Azure AI Fundamentals",
      code: "AI-900 Learning Path",
      issuer: "Microsoft Learn",
    },
  ];

  return (
    <section id="certifications" className="section">
      <div className="content-container">
        <div className="mb-4">
          <span className="text-sm uppercase tracking-[0.2em] text-blue-400">
            Certifications
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Cloud & AI Learning
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="glass-panel rounded-3xl p-6"
            >
              <h3 className="text-xl font-semibold text-white">
                {cert.title}
              </h3>

              <p className="mt-2 text-blue-400 text-sm">
                {cert.code}
              </p>

              <p className="mt-4 text-slate-400">
                {cert.issuer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}