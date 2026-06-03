"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const memories = [
  {
    date: "Origem",
    title: "Início",
    description: "hi pretty kris bub, if someone reads this, they’d probably cringe a little, but i don’t really care. i honestly can’t remember how we started taking pictures together. i just remember that somehow, we did. one picture became another, then another, until it became something normal. it’s funny because at that time, i didn’t think much about it. i just liked being around you. back then, i was still getting to know you. every conversation felt different because i’d always end up learning something new about you. sometimes it was through random talks, sometimes through the smallest interactions that you probably don’t even remember. i think what i liked most during that time was how natural everything felt. there was no reason behind it. we just talked, laughed, took pictures, and spent time together whenever we got the chance. nothing grand, nothing special on paper, but somehow those moments became some of my favorite memories. i remember noticing little things about you without even meaning to. the way you joked around, the way you reacted to things, and the little habits that made you, you. i guess that was the time when i started realizing how nice it was getting to know you. when i look back at that time, i miss how simple everything was. we were just there, making memories without even knowing they’d become memories one day. and honestly, if i could go back and watch those moments again, i probably would.",
    color: "bg-rose/20",
    image: "/assets/first.jpg",
  },
  {
    date: "Conexão",
    title: "Amizade",
    description: "i think one of my favorite phases was when we became best friends. that was the time when we started hanging out outside school more. sometimes we’d eat with our friends, sometimes it was just us, but if i’m being honest, i always looked forward to the days when i got to spend time with you. it wasn’t really about the food or where we were going. i just liked being around you. i remember during midterms, while everyone was busy stressing over exams, i’d already be thinking about what we’d do after. i’d be sitting there answering questions, then randomly wondering where we should eat once everything was over. the funny thing is, after every exam, all i wanted to do was find you and start talking. i’d rant about the questions i got stuck on, complain about the parts i forgot to review, and convince myself that i probably failed half the test. and somehow, you always ended up listening to all of it. looking back now, i realize those moments were never really about the exams. they were about having someone i genuinely wanted to spend time with after a long day. someone i could talk to about the most random things without feeling like i was bothering them. someone whose company made even an ordinary lunch feel like something worth remembering. at the time, i didn’t think much of it. i thought we were just making memories like everyone else. but now when i look back, those simple afternoons, those random meals, and those conversations after exams ended up becoming some of my favorite memories of us.",
    color: "bg-sage/20",
    image: "/assets/second.jpg",
  },
  {
    date: "Desafio",
    title: "Equipe",
    description: "i think another phase i’ll always remember was when we started competing together. before that, i was already joining competitions, but it felt different when you became part of the team. suddenly it wasn’t just about winning anymore. it became something i looked forward to because i knew i’d be spending those long days with you. if i’m being honest, one thing i regret is not being able to teach you more back then. especially during hackforgov. i always felt like there was so much i wanted to share, but my knowledge was limited too. sometimes i wished i knew more than i actually did. not for myself, but because i wanted to help you more. i remember seeing people from different universities talking to you, helping you, teaching you things that i probably couldn’t explain myself at that time. and a part of me wished i could’ve been that person for you. but despite all that, you still kept pushing forward. and honestly, seeing your growth was one of my favorite things. then came base ph. i don’t know if you feel the same way, but for me, that competition felt like a redemption arc. after all the losses, all the pressure, all the times we questioned ourselves, finally seeing our team win second place felt unreal. but what made me happiest wasn’t really the title. it was seeing both of us standing there as part of the same team. because if i’m being real, one of the reasons i kept convincing you to join competitions with me wasn’t just because i thought you were capable. i already knew that. i just liked having you there. those trainings, meetings, random calls, late-night preparations, and conversations in between competitions gave us time to talk about things we never really talked about before. looking back now, i realized those competitions gave me more than certificates. they gave me more time with you. and no matter how the results turned out, i think that’s the part i'll always be grateful for.",
    color: "bg-rose/10",
    image: "/assets/third.jpg",
  },
  {
    date: "Destino",
    title: "Nós",
    description: "now that you are my girlfriend, there are things i should have said earlier but i never really did properly. i have always seen how capable you are. you have this kind of strength that i honestly admire. i also want to say sorry for the times i acted childish or the times i became harsh without thinking. you did not deserve that. now that i have graduated, i find myself thinking more about you and your future. i hope you continue studying hard for yourself too. we have gone through so many phases already. and to be honest, even if we ended up in this relationship without me properly courting you before, i do not want that to feel like something i took lightly. i still want to court you in my own way every day. i want to keep showing you that choosing you is not something i do once, but something i keep doing over and over again. i promise you, i will do better. i want us to travel together one day. to go to places we only used to talk about before. more than anything, i just want us to grow together without rushing anything. and at the end of it all, i just want you to know that i am really glad it is you.",
    color: "bg-sage/10",
    image: "/assets/forth.jpg",
  },
];

export default function Timeline() {
  return (
    <section className="py-24 px-4 bg-cream overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading text-charcoal mb-4">Journey</h2>
          <div className="w-24 h-1 bg-rose mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-rose/20" />

          <div className="space-y-12">
            {memories.map((memory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot on the line */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-rose rounded-full z-10" />

                <div className="w-full md:w-1/2 pl-12 pr-4 md:px-8">
                  <div className={`p-6 md:p-8 rounded-2xl ${memory.color} border border-rose/10 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow`}>
                    <p className="text-xs md:text-sm font-heading text-rose uppercase tracking-widest mb-2">
                      {memory.date}
                    </p>
                    <h3 className="text-xl md:text-2xl font-heading text-charcoal mb-3">
                      {memory.title}
                    </h3>
                    <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
                      {memory.description}
                    </p>
                    
                    {/* Actual Image */}
                    <div className="mt-6 relative aspect-video rounded-lg overflow-hidden border border-rose/10">
                      <Image
                        src={memory.image}
                        alt={memory.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
