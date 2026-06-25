function Skills() {
  const skills = [
    "Python",
    "LangChain",
    "LangGraph",
    "FastAPI",
    "FAISS",
    "RAG",
    "SQL",
    "AWS",
    "Machine Learning",
    "NLP",
    "Power BI",
    "Tableau",
  ];

  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-800 p-6 rounded-xl text-center text-white hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;