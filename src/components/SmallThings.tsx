"use client";

import { motion } from "framer-motion";

const smallThings = [
  { title: "Your Smile", description: "How it lights up even the darkest days." },
  { title: "Kindness", description: "The way you treat everyone with such grace." },
  { title: "Passion", description: "The spark in your eyes when you talk about what you love." },
  { title: "Laughter", description: "The most beautiful sound in the world." },
  { title: "Patience", description: "How you always find a way to stay calm and loving." },
  { title: "Strength", description: "The quiet resilience you show in everything you do." },
];

export default function SmallThings() {
  return (
    <section className="py-24 px-4 bg-cream/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-charcoal mb-4">The Small Things</h2>
          <p className="text-sm md:text-base text-charcoal/60 font-body">A few of the million reasons why you're amazing</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {smallThings.map((thing, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              className="group relative p-6 md:p-8 bg-white rounded-3xl border border-rose/10 shadow-sm hover:shadow-xl hover:border-rose/30 transition-all cursor-default overflow-hidden"
            >
              {/* Animated background circle on hover */}
              <div className="absolute -top-12 -right-12 w-24 h-24 md:w-32 md:h-32 bg-rose/5 rounded-full transition-transform group-hover:scale-150" />
              
              <h3 className="text-xl md:text-2xl font-heading text-charcoal mb-3 md:mb-4 relative z-10 group-hover:text-rose transition-colors">
                {thing.title}
              </h3>
              <p className="text-sm md:text-base text-charcoal/70 font-body leading-relaxed relative z-10">
                {thing.description}
              </p>
              
              <div className="mt-4 md:mt-6 flex justify-end relative z-10">
                <span className="text-rose opacity-0 group-hover:opacity-100 transition-opacity">
                  ✨
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
