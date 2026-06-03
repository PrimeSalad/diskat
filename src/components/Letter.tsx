"use client";

import { motion } from "framer-motion";

export default function Letter() {
  return (
    <section className="py-24 px-4 bg-cream flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-heading text-charcoal mb-4">A Note for You</h2>
        <div className="w-16 h-1 bg-rose mx-auto rounded-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full max-w-2xl bg-white p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-sm border border-charcoal/5"
      >
        {/* Paper texture overlay (using a CSS pattern instead of external image for reliability) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#2d2d2d_0.5px,transparent_0.5px)] [background-size:10px_10px]" />
        
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-12 h-12 bg-rose/10 rotate-45 translate-x-6 -translate-y-6" />
        </div>

        <div className="relative z-10 font-body text-charcoal text-base md:text-lg leading-relaxed space-y-6">
          <p className="font-bold italic text-rose text-xl">dear babu,</p>
          
          <p>
            i don’t really know how to put everything into perfect words, but i’ll try anyway.
          </p>
          
          <p>
            sometimes i catch myself just thinking about you in the middle of ordinary moments, like nothing special is happening, but somehow you’re still there in my mind. it’s a quiet kind of feeling, not dramatic, just something steady that i can’t ignore.
          </p>
          
          <p>
            being with you feels soft in a way i didn’t expect. like life is still the same, but somehow it feels lighter when i know you’re part of it.
          </p>

          <p>
            i don’t want to rush anything with us. i just want to stay in this slowly, learn you more in the simplest ways, and let things grow without forcing them. no pressure, no pretending, just whatever this naturally becomes.
          </p>

          <p>
            i like the idea of simple days with you. not always something big or planned, just normal moments where we talk about random things, sit together, laugh at nothing, or just exist beside each other without needing a reason.
          </p>

          <p>
            i know we’re still figuring things out, and that’s okay. i don’t expect everything to be perfect. i just hope we learn how to be gentle with each other even on days that don’t feel easy.
          </p>

          <p>
            i’m not trying to rush the story between us. i just want to be here for it, present and real, and see where it naturally goes.
          </p>

          <p>
            and honestly, i’m glad it’s you.
          </p>

          <p>
            this is just the beginning, and i’m kind of excited to see how the rest of it feels with you.
          </p>
          
          <div className="pt-12 flex flex-col items-end">
            <p className="italic text-charcoal/60">love,</p>
            <p className="text-2xl font-heading text-rose font-bold mt-2 text-right">your boyfriend</p>
          </div>
        </div>

        {/* Subtle bottom decoration */}
        <div className="mt-16 flex justify-center opacity-20">
          <svg className="w-8 h-8 text-rose" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
      </motion.div>

      {/* Floating background elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-1/4 -left-12 text-4xl opacity-10 pointer-events-none select-none hidden md:block"
      >
        🌸
      </motion.div>
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="fixed bottom-1/4 -right-12 text-4xl opacity-10 pointer-events-none select-none hidden md:block"
      >
        ✨
      </motion.div>
    </section>
  );
}
