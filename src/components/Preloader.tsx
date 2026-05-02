import { motion } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
      }}
      onAnimationComplete={() => {
        // This is handled by the exit prop on AnimatePresence in App.tsx
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-brand-surface"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Glow Background */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.8, 1.2, 1],
            opacity: [0, 0.15, 0.1],
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-[-50px] bg-brand-accent rounded-full blur-[60px]"
        />

        {/* Logo Container */}
        <motion.div
          initial={{ scale: 0, rotate: -10, opacity: 0 }}
          animate={{ 
            scale: 1, 
            rotate: 0, 
            opacity: 1,
            transition: { 
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 1.2
            }
          }}
          className="relative z-10"
        >
          <img 
            src="https://i.ibb.co.com/gMcj9MCz/logo.png" 
            alt="Klyvora Media" 
            className="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover border-4 border-brand-accent/50 shadow-2xl shadow-brand-accent/30"
          />
          
          {/* Shimmer Effect */}
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "200%" }}
            transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatDelay: 1 }}
            className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          />
        </motion.div>

        {/* Text Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 text-center"
        >
          <h2 className="text-brand-accent font-black tracking-[0.2em] uppercase text-sm mb-2">
            Klyvora Media
          </h2>
          <div className="h-[1px] w-24 bg-brand-accent/30 mx-auto overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="h-full w-full bg-brand-accent"
            />
          </div>
        </motion.div>
      </div>

      {/* Progress Trigger - Auto complete after 3 seconds */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        onAnimationComplete={() => setTimeout(onComplete, 2500)}
      />
    </motion.div>
  );
}
