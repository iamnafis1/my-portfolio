import React from 'react';
import { motion } from 'framer-motion';

export default function Timeline({ items }) {
  return (
    <ol className="relative border-l border-white/10 pl-6">
      {items.map((item, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5, delay: i * 0.05 }}
          className="mb-8"
        >
          <div className="absolute -left-2.5 w-5 h-5 rounded-full bg-gradient-to-r from-neon-blue to-neon-pink shadow-glow" />
          <div className="glass p-4 rounded-xl">
            <div className="flex flex-wrap justify-between gap-2">
              <h3 className="font-semibold">{item.role || item.school}</h3>
              <span className="text-white/60 text-sm">{item.duration}</span>
            </div>
            <div className="text-neon-green/80 text-sm">{item.company || item.degree}</div>
            {item.location && <div className="text-white/60 text-sm">{item.location}</div>}
            {item.details && <div className="text-white/70 text-sm">{item.details}</div>}
            {item.bullets && (
              <ul className="list-disc list-inside mt-2 space-y-1 text-white/80">
                {item.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
              </ul>
            )}
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
