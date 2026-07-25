import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const ParallaxBackground: React.FC = () => {
  const { scrollY } = useScroll();

  // Gentle motion transforms for depth elements
  const y1 = useTransform(scrollY, [0, 2000], [0, -250]);
  const y2 = useTransform(scrollY, [0, 2000], [0, 300]);
  const y3 = useTransform(scrollY, [0, 2000], [0, -150]);
  const rotate1 = useTransform(scrollY, [0, 2000], [0, 45]);
  const rotate2 = useTransform(scrollY, [0, 2000], [0, -45]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0a0a0a]">
      {/* Dark background radial gradient as seen in theme */}
      <div 
        className="absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(circle at top left, #1a1a1a 0%, #0a0a0a 100%)' }}
      />

      {/* Dark background subtle grid overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"
        style={{ maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)' }}
      />

      {/* Top Left Warm Gold Gradient Blob */}
      <motion.div 
        style={{ y: y1, rotate: rotate1 }}
        className="absolute -top-40 -left-40 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[140px]"
      />

      {/* Top Right Dark Ambient Gradient Blob */}
      <motion.div 
        style={{ y: y2, rotate: rotate2 }}
        className="absolute top-1/4 -right-40 w-[30rem] h-[30rem] bg-[#1f1f1f]/40 rounded-full blur-[140px]"
      />

      {/* Middle Floating Circle */}
      <motion.div 
        style={{ y: y3 }}
        className="absolute top-2/3 left-1/3 w-80 h-80 bg-[#d4af37]/08 rounded-full blur-[120px]"
      />

      {/* Subtle floating code tech ambient shapes */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-48 right-[15%] text-[#1a1a1a] text-8xl font-mono select-none pointer-events-none font-bold"
      >
        &#123; &#125;
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.1, 0.25, 0.1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
        className="absolute top-[60%] left-[8%] text-[#1a1a1a] text-9xl font-mono select-none pointer-events-none font-bold"
      >
        &lt;/&gt;
      </motion.div>
    </div>
  );
};
