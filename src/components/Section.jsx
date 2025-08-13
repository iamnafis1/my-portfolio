import React from 'react';
import { motion } from 'framer-motion';

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative my-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="glass neon-border p-6 md:p-8"
      >
        <h2 className="font-display text-2xl md:text-3xl tracking-widest text-neon-blue drop-shadow">
          {title}
        </h2>
        {subtitle && <p className="text-white/70 mt-1">{subtitle}</p>}
        <div className="mt-4 md:mt-6">{children}</div>
      </motion.div>
    </section>
  );
}
