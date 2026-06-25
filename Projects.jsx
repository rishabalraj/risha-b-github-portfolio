function Projects() {
  const projects = [
    {
      title: "Multi-Agent Enterprise Knowledge Assistant",
      description:
        "Production-ready Multi-Agent RAG system using LangChain, LangGraph, FAISS, BM25, Ollama, FastAPI and SQLite.",
      tech: "LangChain • LangGraph • FAISS • FastAPI • Ollama",
    },
    {
      title: "User Profile Segmentation System",
      description:
        "Machine Learning based user segmentation system for personalized marketing and analytics.",
      tech: "Python • Machine Learning • Tableau",
    },
  ];

  return (
    <section id="projects" className="bg-slate-800 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-400 transition"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4">
                {project.description}
              </p>

              <p className="text-cyan-400">
                {project.tech}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;