import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

export default function SkillCloud({ skills }) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {skills.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .4, delay: i * 0.03 }}
        >
          <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable glareMaxOpacity={0.2} className="glass neon-border p-4 rounded-2xl h-full">
            <h4 className="font-semibold mb-1 text-neon-pink">{s.category}</h4>
            <div className="flex flex-wrap gap-2">
              {s.items.map((it, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">{it}</span>
              ))}
            </div>
          </Tilt>
        </motion.div>
      ))}
    </div>
  );
}
