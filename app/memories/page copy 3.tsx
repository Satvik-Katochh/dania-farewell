"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Sparkles,
  Heart,
  Music,
  Camera,
  Plane,
  Book,
  Star,
} from "lucide-react";

const memories = [
  {
    id: 1,
    title: "First Day of College",
    icon: Book,
    color: "bg-pink-400",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/college-day-uWxRwvHGWxT9Ks8eRLLWVhRgQbLwxA.jpg",
  },
  {
    id: 2,
    title: "Birthday Celebration",
    icon: Sparkles,
    color: "bg-pink-500",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/birthday-Wd9Iy4Ue9Hs4Hy9Uy5Uy6Uy7Uy8Uy9.jpg",
  },
  {
    id: 3,
    title: "Summer Road Trip",
    icon: Plane,
    color: "bg-pink-600",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/road-trip-Uy9Uy8Uy7Uy6Uy5Uy4Uy3Uy2Uy1Uy0.jpg",
  },
  {
    id: 4,
    title: "Music Festival",
    icon: Music,
    color: "bg-pink-700",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/music-festival-Uy0Uy1Uy2Uy3Uy4Uy5Uy6Uy7Uy8.jpg",
  },
  {
    id: 5,
    title: "Graduation Day",
    icon: Camera,
    color: "bg-pink-800",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/graduation-Uy8Uy7Uy6Uy5Uy4Uy3Uy2Uy1Uy0.jpg",
  },
  {
    id: 6,
    title: "Farewell Party",
    icon: Heart,
    color: "bg-pink-900",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/farewell-Uy0Uy1Uy2Uy3Uy4Uy5Uy6Uy7Uy8.jpg",
  },
];

const MemoryOrb = ({ memory, onClick, index, total, isActive }) => {
  const angle = (index / total) * 2 * Math.PI;
  const radius = 150;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      className={`absolute w-16 h-16 rounded-full ${memory.color} shadow-lg flex items-center justify-center cursor-pointer`}
      style={{
        left: `calc(50% + ${x}px - 32px)`,
        top: `calc(50% + ${y}px - 32px)`,
      }}
      whileHover={{ scale: 1.1 }}
      animate={{
        scale: isActive ? 1.2 : 1,
        boxShadow: isActive ? "0 0 20px 5px rgba(255,182,193,0.5)" : "none",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      onClick={() => onClick(memory)}
    >
      <memory.icon className="text-white w-8 h-8" />
    </motion.div>
  );
};

const Sparkle = ({ delay }) => (
  <motion.div
    className="absolute rounded-full bg-white"
    style={{
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 3 + 1}px`,
      height: `${Math.random() * 3 + 1}px`,
    }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
    }}
    transition={{
      duration: Math.random() * 2 + 1,
      repeat: Infinity,
      repeatType: "loop",
      delay: delay,
    }}
  />
);

const SparkleField = () => (
  <div className="fixed inset-0 pointer-events-none">
    {[...Array(50)].map((_, i) => (
      <Sparkle key={i} delay={i * 0.1} />
    ))}
  </div>
);

export default function PinkMagicalMemories() {
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [activeMemory, setActiveMemory] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMemory(memories[Math.floor(Math.random() * memories.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleOrbClick = (memory) => {
    setSelectedMemory(memory);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FFC0CB", "#FFB6C1", "#FF69B4", "#FF1493", "#DB7093"],
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 text-pink-900 p-4 md:p-8 flex flex-col items-center justify-between relative overflow-hidden">
      <SparkleField />
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-center mb-8 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Dania's Magical Memory Constellation ✨
      </motion.h1>

      <div className="relative w-[340px] h-[340px] mb-8">
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 flex items-center justify-center z-20 overflow-hidden"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{
            duration: 2,
            delay: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <motion.img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dania-profile-uWxRwvHGWxT9Ks8eRLLWVhRgQbLwxA.jpg"
            alt="Dania"
            className="w-36 h-36 rounded-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </motion.div>

        {memories.map((memory, index) => (
          <MemoryOrb
            key={memory.id}
            memory={memory}
            onClick={handleOrbClick}
            index={index}
            total={memories.length}
            isActive={activeMemory?.id === memory.id}
          />
        ))}
      </div>

      <motion.div
        className="text-center mb-4 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <p className="text-xl md:text-2xl font-semibold mb-4">
          Explore Dania's magical memories!
        </p>
        <motion.button
          className="bg-gradient-to-r from-pink-500 to-pink-700 text-white px-6 py-3 rounded-full text-lg font-bold hover:from-pink-600 hover:to-pink-800 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            confetti({
              particleCount: 300,
              spread: 180,
              colors: ["#FFC0CB", "#FFB6C1", "#FF69B4", "#FF1493", "#DB7093"],
            })
          }
        >
          Celebrate Dania's Journey!
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            className="fixed inset-0 bg-pink-900 bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-br from-pink-100 to-pink-300 text-pink-900 rounded-lg overflow-hidden w-full max-w-3xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 15 }}
            >
              <img
                src={selectedMemory.image}
                alt={selectedMemory.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-8">
                <h2 className="text-4xl font-bold mb-4 flex items-center">
                  <selectedMemory.icon
                    className={`w-10 h-10 mr-3 ${selectedMemory.color.replace(
                      "bg-",
                      "text-"
                    )}`}
                  />
                  {selectedMemory.title}
                </h2>
                <p className="text-xl mb-6">
                  Remember the magical moments we shared during{" "}
                  {selectedMemory.title.toLowerCase()}? Those memories will
                  always be a part of our journey together.
                </p>
                <button
                  className="bg-gradient-to-r from-pink-500 to-pink-700 text-white px-6 py-3 rounded-full text-lg font-bold hover:from-pink-600 hover:to-pink-800 transition-colors"
                  onClick={() => setSelectedMemory(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
