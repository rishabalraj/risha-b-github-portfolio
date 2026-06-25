function Certifications() {
  const certs = [
    "LLM Engineering & AI Agents Masterclass",
    "LLM Deployment Agentic Workflows",
    "Generative AI For All",
    "Mastering Tableau",
    "Python Programming",
  ];

  return (
    <section className="bg-slate-800 py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certs.map((cert) => (
            <div
              key={cert}
              className="bg-slate-900 p-6 rounded-xl text-white"
            >
              {cert}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;