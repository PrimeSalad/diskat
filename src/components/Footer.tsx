"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Footer() {
  const [stars, setStars] = useState<{ top: string; left: string; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const generatedStars = [...Array(12)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 5,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <footer className="py-24 px-4 bg-charcoal text-cream flex flex-col items-center justify-center overflow-hidden relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <svg 
          className="w-24 h-24 text-rose fill-current" 
          viewBox="0 0 24 24"
        >
          <motion.path
            initial={{ pathLength: 0, fill: "rgba(226, 149, 149, 0)" }}
            whileInView={{ pathLength: 1, fill: "rgba(226, 149, 149, 1)" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center px-4"
      >
        <p className="text-2xl md:text-3xl font-heading mb-4">I Love You</p>
        <div className="w-12 h-0.5 bg-rose/30 mx-auto mb-8" />
        <p className="text-cream/40 text-xs md:text-sm font-body uppercase tracking-[0.2em]">
          Always & Forever
        </p>
      </motion.div>

      {/* Decorative stars/sparkles */}
      {stars.map((star, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ 
            duration: star.duration, 
            repeat: Infinity, 
            delay: star.delay 
          }}
          className="absolute text-rose/20 text-xs"
          style={{
            top: star.top,
            left: star.left,
          }}
        >
          ✦
        </motion.div>
      ))}
    </footer>
  );
}
