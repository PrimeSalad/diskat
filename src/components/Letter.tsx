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
            i want to say this properly, not in a perfect way, but in a real way.
          </p>
          
          <p>
            sorry if there are times na nataasan kita ng boses or naging harsh ako during arguments. i know sometimes when emotions get ahead of me, i say things in a way that i don’t really mean, or in a tone that hurts more than it should. hindi ko agad napapansin habang nangyayari, pero after everything calms down, doon ko nare-realize na mali pala ako.
          </p>
          
          <p>
            and honestly, i don’t like that version of myself when it happens.
          </p>
          
          <p>
            you don’t deserve to be spoken to like that. you don’t deserve to feel like you’re being attacked or misunderstood just because we are trying to talk about something. i want you to feel safe with me, even when we disagree. especially when we disagree.
          </p>

          <p>
            i know we’re still learning each other. we’re still adjusting, still figuring out how to handle things properly. minsan pareho tayong emotional, minsan pareho tayong may pride, and minsan nauuwi sa arguments na hindi na natin alam paano nagsimula. but kahit ganun, i don’t want us to stay in that cycle.
          </p>

          <p>
            i want us to be better at handling those moments. not perfect, but better.
          </p>

          <p>
            like when things start getting heated, i want us to learn how to pause a bit. hindi yung biglang sabay sabay lahat ng sinasabi habang galit, but giving each other space to think. then coming back kapag mas kalmado na, para maayos natin ng maayos, hindi yung may nasasaktan lang.
          </p>

          <p>
            i don’t want arguments to be something that breaks us or leaves distance between us. i want it to be something we can learn from, something that helps us understand each other more instead of pushing us away.
          </p>

          <p>
            and i also want you to know, i’m not blaming you for anything here. i’m looking at myself too. may mga bagay ako na kailangan ko ayusin, especially how i react when i’m overwhelmed or emotional. i’m trying to work on that slowly, even if it’s not easy.
          </p>

          <p>
            i just hope you can see that i’m aware, and i’m trying.
          </p>

          <p>
            because at the end of the day, even after misunderstandings, even after silence, even after moments na hindi tayo okay, i still choose you. not because everything is easy, but because i want to learn how to be better with you through everything.
          </p>

          <p>
            i don’t want a relationship where we just stay when things are good. i want a relationship where we learn how to stay even when things are not.
          </p>

          <p>
            and if i’m being honest, i still want you in all versions of my days. the good ones, the quiet ones, and even the messy ones where we are still figuring everything out.
          </p>

          <p>
            i hope we don’t give up on learning each other properly. i hope we keep trying, even when it’s hard, even when we get tired, even when we don’t fully understand each other in the moment.
          </p>

          <p>
            i’m here, and i’m trying, and i want you to know that. i love you so much mahal!
          </p>
          
          <div className="pt-12 flex flex-col items-end">
            <p className="italic text-charcoal/60">love,</p>
            <p className="text-2xl font-heading text-rose font-bold mt-2 text-right">elps</p>
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
