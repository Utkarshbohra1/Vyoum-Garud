import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center items-center text-center h-screen bg-gradient-to-b from-black via-[#111827] to-[#0b0e14] px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl sm:text-6xl font-extrabold text-primary"
      >
        VyomGarud
      </motion.h1>
      <p className="mt-4 text-lg text-gray-300">
        Precision Autonomy • Mission-Ready Reliability
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="#contact"
          className="bg-primary text-black font-semibold px-6 py-3 rounded-xl hover:bg-amber-400 transition"
        >
          Request Demo
        </a>
        <a
          href="#capabilities"
          className="border border-gray-600 px-6 py-3 rounded-xl text-gray-200 hover:bg-gray-800 transition"
        >
          View Capabilities
        </a>
      </div>
      <motion.img
        src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80"
        alt="VyomGarud UAV"
        className="absolute bottom-0 w-full h-1/2 object-cover opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 0.5 }}
      />
    </section>
  );
}
