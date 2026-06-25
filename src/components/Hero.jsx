import { motion } from "framer-motion";
import profile from "C:/Users/RISHA B/Desktop/risha-portfolio/src/assets/Profile.png";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-slate-900 flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left">

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            Risha B
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold text-cyan-400"
          >
            AI Engineer • LLM Engineer • RAG Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-300 mt-6 text-lg leading-relaxed max-w-xl"
          >
            Building production-ready AI systems using
            LangChain, LangGraph, FastAPI, FAISS,
            and Large Language Models.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <a
              href="https://github.com/risha-balraj"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition duration-300"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/risha-balraj/"
              target="_blank"
              rel="noreferrer"
              className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-400 transition duration-300"
            >
              LinkedIn
            </a>

            <a
              href="https://drive.google.com/file/d/1kDAta5J4FAspkqpfinzPdTIHRHPhhy5b/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
              className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition duration-300"
            >
              Resume
            </a>
          </motion.div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">

          <motion.img
            src={profile}
            alt="Risha Balraj"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-cyan-400 object-cover shadow-[0_0_50px_rgba(34,211,238,0.5)]"
          />

        </div>

      </div>
    </motion.section>
  );
}

export default Hero;