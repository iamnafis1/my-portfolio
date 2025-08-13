import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import ParticlesBg from "./ParticlesBg.jsx";

export default function Hero({ profile }) {
  return (
    <header className="relative">
      <ParticlesBg />
      <div className="bg-grid rounded-3xl p-6 md:p-10 glass neon-border">
        <div className="flex flex-col items-center text-center gap-4">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-6xl font-extrabold tracking-widest"
          >
            {profile.name}
          </motion.h1>
          <p className="text-neon-blue/80 font-display tracking-widest">
            {profile.title}
          </p>
          <p className="text-white/70">{profile.location}</p>

          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <a
              className="glass px-4 py-2 rounded-full hover:shadow-glow transition"
              href={`tel:${profile.phone}`}
            >
              <FaPhone className="inline -mt-1 mr-2" />
              {profile.phone}
            </a>
            <a
              className="glass px-4 py-2 rounded-full hover:shadow-glow transition"
              href={`mailto:${profile.email}`}
            >
              <FaEnvelope className="inline -mt-1 mr-2" />
              Email
            </a>
            <a
              className="glass px-4 py-2 rounded-full hover:shadow-glow transition"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="inline -mt-1 mr-2" />
              LinkedIn
            </a>
            <a
              className="glass px-4 py-2 rounded-full hover:shadow-glow transition"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="inline -mt-1 mr-2" />
              GitHub
            </a>
          </div>

          <div className="mt-4 max-w-3xl text-white/80 leading-relaxed">
            {profile.summary.map((s, i) => (
              <p key={i} className="mb-2">
                {s}
              </p>
            ))}
          </div>
          <div className="mt-2">
            <a
              href="/Nafish_Full_stack_resume.pdf"
              download
              className="px-6 py-3 rounded-full bg-gradient-to-r from-neon-blue via-neon-pink to-neon-green text-black font-display tracking-widest shadow-glowStrong hover:scale-[1.02] transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
