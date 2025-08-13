import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function ProjectGrid({ projects }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .45, delay: i * 0.05 }}
        >
          <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.01} glareEnable glareMaxOpacity={0.2} className="glass neon-border rounded-3xl overflow-hidden">
            <div className="p-5">
              <div className="flex justify-between items-start gap-3">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <div className="flex gap-2">
                  {p.link && (
                    <a className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition" href={p.link} target="_blank" rel="noreferrer" title="GitHub">
                      <FaGithub />
                    </a>
                  )}
                  {p.demo && (
                    <a className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition" href={p.demo} target="_blank" rel="noreferrer" title="Live Demo">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {p.tech.map((t, idx) => (
                  <span key={idx} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-xs">{t}</span>
                ))}
              </div>
              <ul className="list-disc list-inside mt-3 space-y-1 text-white/80">
                {p.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
              </ul>
            </div>
          </Tilt>
        </motion.div>
      ))}
    </div>
  );
}
