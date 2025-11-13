import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <main className="bg-[#0b1220] text-white font-poppins">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-gradient-to-b from-[#0b1220] to-[#1a2335]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl sm:text-6xl font-bold mb-6"
        >
          VyomGarud
        </motion.h1>
        <p className="text-slate-300 text-xl max-w-2xl mb-8">
          Precision. Reliability. Autonomy. The next generation of UAV systems
          engineered for mission success.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition">
            Request Demo
          </button>
          <a
            href="#about"
            className="border border-slate-400 px-6 py-3 rounded-xl text-slate-300 hover:bg-slate-800 transition"
          >
            Learn More
          </a>
        </div>
        <motion.img
          src="https://images.unsplash.com/photo-1616361726885-5713c3d08b16?auto=format&fit=crop&w=1000&q=80"
          alt="VyomGarud Drone"
          className="w-full max-w-3xl mt-12 rounded-3xl shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 text-center bg-[#101827]">
        <h2 className="text-4xl font-bold mb-4">About VyomGarud</h2>
        <p className="text-slate-300 max-w-3xl mx-auto">
          VyomGarud is a cutting-edge UAV systems company specializing in
          autonomous, military-grade drones. Our mission is to deliver
          intelligence, surveillance, and reconnaissance solutions that redefine
          operational precision and safety.
        </p>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 px-6 bg-[#0b1220] text-center">
        <h2 className="text-4xl font-bold mb-12">Our Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[{
            title: "Autonomous Flight",
            desc: "AI-powered systems enable precision navigation and adaptability in complex environments."
          }, {
            title: "Long Endurance",
            desc: "Extended flight time with optimized aerodynamics and battery efficiency."
          }, {
            title: "Secure Communication",
            desc: "Encrypted data links ensure mission integrity and confidentiality."
          }].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#1a2335] p-8 rounded-3xl shadow-xl border border-slate-700 hover:border-orange-500 transition"
            >
              <h3 className="text-2xl font-semibold mb-4 text-orange-400">
                {item.title}
              </h3>
              <p className="text-slate-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-6 bg-[#101827] text-center">
        <h2 className="text-4xl font-bold mb-10">Highlights</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-[#1a2335] rounded-2xl border border-slate-700">
            <p className="text-orange-400 font-bold text-lg mb-2">24+ Hr Endurance</p>
            <p className="text-slate-300">Persistent aerial coverage for extended missions.</p>
          </div>
          <div className="p-6 bg-[#1a2335] rounded-2xl border border-slate-700">
            <p className="text-orange-400 font-bold text-lg mb-2">AI Target Recognition</p>
            <p className="text-slate-300">Real-time analytics and decision-making capabilities.</p>
          </div>
          <div className="p-6 bg-[#1a2335] rounded-2xl border border-slate-700">
            <p className="text-orange-400 font-bold text-lg mb-2">Military-Grade Durability</p>
            <p className="text-slate-300">Rugged construction built for harsh conditions.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-[#0b1220] text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <form className="max-w-xl mx-auto bg-[#1a2335] p-8 rounded-3xl border border-slate-700 space-y-5">
          <input type="text" name="name" placeholder="Your Name" className="w-full p-3 rounded-md bg-[#0b1220] border border-slate-700 text-white" />
          <input type="email" name="email" placeholder="Your Email" className="w-full p-3 rounded-md bg-[#0b1220] border border-slate-700 text-white" />
          <textarea name="message" rows="4" placeholder="Your Message" className="w-full p-3 rounded-md bg-[#0b1220] border border-slate-700 text-white" />
          <button className="bg-orange-500 hover:bg-orange-600 w-full py-3 rounded-md font-semibold text-white">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-[#101827] text-center py-6 text-slate-400 border-t border-slate-700">
        <p>© 2025 VyomGarud. All rights reserved.</p>
      </footer>
    </main>
  );
}
