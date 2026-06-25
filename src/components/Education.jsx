function Education() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Education
        </h2>

        <div className="space-y-8">

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-white text-2xl font-bold">
              M.Sc Data Science
            </h3>

            <p className="text-cyan-400">
              St Aloysius Deemed To Be University
            </p>

            <p className="text-gray-300">
              2025 - 2027 | CGPA: 8.2
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-white text-2xl font-bold">
              B.Sc Computer Science & Physics
            </h3>

            <p className="text-cyan-400">
              Canara College
            </p>

            <p className="text-gray-300">
              2022 - 2025 | CGPA: 7.6
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;