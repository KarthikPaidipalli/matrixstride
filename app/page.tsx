"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Particle = {
  size: number;
  left: string;
  top: string;
  delay: number;
  duration: number;
  repeatDelay: number;
};

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      [...Array(8)].map(() => ({
        size: Math.random() * 20 + 10,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 0.5,
        duration: 0.5 + Math.random(),
        repeatDelay: Math.random() * 3,
      }))
    );
  }, []);

  return (
    <div className="relative bg-white overflow-hidden" ref={ref}>
      {/* Background shape */}
      <motion.div
        className="absolute top-20 right-0 z-0"
        initial={{ opacity: 0, x: 100, rotate: 15 }}
        animate={isInView ? { opacity: 0.8, x: 0, rotate: 0 } : {}}
        transition={{ duration: 1.5, ease: "backOut" }}
      >
        <img
          src="https://www.matrixstride.com/images/banner-shape.svg"
          alt="Background shape"
          className="w-[500px] h-[460px] object-cover"
        />
      </motion.div>

      {/* Blue blur dot */}
      <motion.div
        className="absolute top-1/4 left-10 z-0"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 0.3, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="w-40 h-40 rounded-full bg-blue-400 blur-3xl opacity-30"></div>
      </motion.div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-8 mt-10 min-h-[80vh]">
        {/* Text */}
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.65, 0.3, 0.9] }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {"Applying the Spirit of Agility and Scale-Out".split(" ").map(
              (word, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ y: 50, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.05 + 0.3 }}
                >
                  {word}&nbsp;
                </motion.span>
              )
            )}
          </h1>

          <motion.p
            className="text-gray-700 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            We integrate design thinking into our digital consulting to craft
            customer experiences across all digital platforms, innovating
            solutions and demystifying complex business challenges for our
            clients.
          </motion.p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="w-full md:w-1/2 relative"
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: "anticipate" }}
        >
          <img
            src="https://www.matrixstride.com/images/ai-at-nih-900.png"
            alt="AI at NIH"
            className="w-full h-auto"
          />
        </motion.div>
      </div>

      {/* Extended engineering section */}
      <motion.section
        className="bg-gray-50 px-6 md:px-20 py-20 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute inset-0 -z-0 opacity-10"
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 bg-[url('https://www.matrixstride.com/images/grid-pattern.svg')] bg-repeat"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Your Extended Engineering Team to {" "}
            <motion.span
              className="text-blue-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Accelerate
            </motion.span>{" "}
            Your Digital Transformation
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Our mission is to help clients drive business agility to address
            their technology challenges by providing industry experience, tools,
            frameworks, and processes. We design, build, and run enterprise
            applications that are more flexible and scalable, accelerating
            digital transformation and delivering real business impact.
          </motion.p>
        </div>
      </motion.section>

      {/* Floating particles section */}
      <motion.section
        className="relative bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-10 md:p-16 text-white max-w-5xl mx-auto text-center space-y-6 my-20 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2 }}
      >
        {particles.length > 0 &&
          particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white opacity-10"
              style={{ width: p.size, height: p.size, left: p.left, top: p.top }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                delay: p.delay,
                duration: p.duration,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: p.repeatDelay,
              }}
            />
          ))}

        <motion.h2
          className="text-3xl md:text-4xl font-semibold relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Helping Teams in the World with {" "}
          <motion.span
            className="inline-block"
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 10, delay: 0.5 }}
          >
            Focus
          </motion.span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl leading-relaxed relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          We are a group of boundary smashers, dreamers, engineers, and
          technologists with a common trait. We are fanatical about using
          technology to benefit the world and solve operational and strategic
          challenges.
        </motion.p>
      </motion.section>
    </div>
  );
}