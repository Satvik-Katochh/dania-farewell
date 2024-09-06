"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

const memories = [
  {
    id: 1,
    title: "Graduation Day",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/graduation-day-uWxRwvHGWxT9Ks8eRLLWVhRgQbLwxA.jpg",
  },
  {
    id: 2,
    title: "Summer Road Trip",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/summer-road-trip-Wd9Iy4Ue9Hs4Hy9Uy5Uy6Uy7Uy8Uy9.jpg",
  },
  {
    id: 3,
    title: "London Send-Off",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/london-sendoff-Uy9Uy8Uy7Uy6Uy5Uy4Uy3Uy2Uy1Uy0.jpg",
  },
  {
    id: 4,
    title: "First Day of College",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/first-day-college-Uy0Uy1Uy2Uy3Uy4Uy5Uy6Uy7Uy8.jpg",
  },
  {
    id: 5,
    title: "Birthday Celebration",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/birthday-celebration-Uy8Uy7Uy6Uy5Uy4Uy3Uy2Uy1Uy0.jpg",
  },
  {
    id: 6,
    title: "New Year's Party",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/new-years-party-Uy0Uy1Uy2Uy3Uy4Uy5Uy6Uy7Uy8.jpg",
  },
];

export default function MemoriesPage() {
  const [selectedMemory, setSelectedMemory] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 p-8 relative overflow-hidden">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-white text-center mb-12"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Dania&apos;s Magical Memories 🦄✨
      </motion.h1>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-6 perspective-1000"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, staggerChildren: 0.1 }}
      >
        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            className="relative group cursor-pointer"
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotateY: 10 }}
            onClick={() => setSelectedMemory(memory)}
          >
            <Image
              src={memory.image}
              alt={memory.title}
              width={400}
              height={300}
              className="rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end justify-center">
              <h3 className="text-white text-xl font-semibold mb-4">
                {memory.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-4 max-w-3xl w-full mx-4 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 15 }}
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedMemory(null)}
              >
                <X size={24} />
              </button>
              <Image
                src={selectedMemory.image}
                alt={selectedMemory.title}
                width={800}
                height={600}
                className="rounded-lg shadow-lg mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedMemory.title}
              </h2>
              <p className="text-gray-600">
                This is a beautiful memory of{" "}
                {selectedMemory.title.toLowerCase()}. Remember all the fun we
                had and the magical moments we shared!
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute -bottom-16 -left-16 w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -top-16 -right-16 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
}
