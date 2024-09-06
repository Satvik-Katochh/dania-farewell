"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import Image from "next/image";
import {
  Sparkles,
  Heart,
  Music,
  Camera,
  Plane,
  Book,
  Star,
  House,
  TreePalm,
  Angry,
  HeartPulse,
  History,
  Earth,
  LucideIcon,
} from "lucide-react";

interface Memory {
  id: number;
  title: string;
  icon: LucideIcon;
  color: string;
  description: string;
  image: string;
}

interface MemoryOrbProps {
  memory: Memory;
  onClick: (memory: Memory) => void;
  index: number;
  total: number;
  isActive: boolean;
}

interface SparkleProps {
  delay: number;
}

const memories = [
  {
    id: 1,
    title: "Rakhiiiii",
    icon: HeartPulse,
    color: "bg-pink-600",
    description:
      "Ek zaroon mein meri behna hai, saari umar humein sang rehna hai 🌸",
    image: "/memories/heartpulse.jpeg",
  },
  {
    id: 2,
    title: "Gokarna Trip",
    icon: TreePalm,
    color: "bg-green-600",
    description: "Go go gokarna!!",
    image: "/memories/treepalm.jpeg",
  },
  {
    id: 3,
    title: "FWB",
    icon: Earth,
    color: "bg-purple-600",
    description: "Friends Without Benefits!!",

    image: "/memories/history.jpeg",
  },
  {
    id: 4,
    title: "B2B",
    icon: Sparkles,
    color: "bg-yellow-400",
    description: "Bahuu to Beeee....",
    image: "/memories/sparkles.jpeg",
  },
  {
    id: 5,
    title: "F*** You!!",
    icon: Angry,
    color: "bg-red-600",
    description:
      "That's what you get for not inviting me your b-day BITCH, huh serves you right.",
    image: "/memories/angry.jpeg",
  },
  {
    id: 6,
    title: "116 & 802",
    icon: House,
    color: "bg-blue-600",
    description: " Permanent Roomates.",
    image: "/memories/home.jpeg",
  },
];

const MemoryOrb: React.FC<MemoryOrbProps> = ({
  memory,
  onClick,
  index,
  total,
  isActive,
}) => {
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
        boxShadow: isActive ? "0 0 20px 5px rgba(255,255,255,0.5)" : "none",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      onClick={() => onClick(memory)}
    >
      <memory.icon className="text-white w-8 h-8" />
    </motion.div>
  );
};

const Sparkle: React.FC<SparkleProps> = ({ delay }) => (
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
      repeat: Infinity, // Ensure repeat is set properly
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

export default function EnchantedMemories() {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const [activeMemory, setActiveMemory] = useState<Memory | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMemory(memories[Math.floor(Math.random() * memories.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleOrbClick = (memory: Memory) => {
    setSelectedMemory(memory);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: [
        "#60A5FA",
        "#F472B6",
        "#34D399",
        "#A78BFA",
        "#FBBF24",
        "#F87171",
      ],
    });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white p-4 md:p-8 flex flex-col items-center justify-between relative overflow-hidden">
      <SparkleField />
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-center mb-8 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Dania&apos;s Memory Constellation ✨
      </motion.h1>

      <div className="relative w-[340px] h-[340px] mb-8">
        <motion.div
          className="absolute top-1/4 left-[28%] transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center z-20 overflow-hidden"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{
            duration: 2,
            delay: 0.5,
            // repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {/* <motion.img
            src="/memories/dania-avatar.jpeg"
            className="w-36 h-36 rounded-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          /> */}
          <Image
            src="/memories/dania-avatar.jpeg"
            alt="Dania Avatar"
            className="w-36 h-36 rounded-full object-cover"
            layout="responsive" // Optional: Use layout="responsive"
            width={144} // Specify the desired width
            height={144} // Specify the desired height
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
          Explore Dania&apos;s magical memories!
        </p>
        <motion.button
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-bold hover:from-pink-600 hover:to-purple-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            confetti({
              particleCount: 300,
              spread: 180,
              colors: [
                "#60A5FA",
                "#F472B6",
                "#34D399",
                "#A78BFA",
                "#FBBF24",
                "#F87171",
              ],
            })
          }
        >
          Celebrate Dania&apos;s Journey!
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-800 to-purple-900 text-white rounded-lg overflow-hidden w-full max-w-3xl"
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
                <p className="text-xl mb-6">{selectedMemory.description}</p>
                <button
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-bold hover:from-pink-600 hover:to-purple-700 transition-colors"
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
