"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const pages = [
  {
    photo: "https://via.placeholder.com/400x300?text=Memory+1",
    note: "A wonderful memory from our trip!",
    memento: "🎟️ Ticket to the concert",
  },
  {
    photo: "https://via.placeholder.com/400x300?text=Memory+2",
    note: "Celebrating my friend's birthday!",
    memento: "🎂 Birthday card",
  },
  {
    photo: "https://via.placeholder.com/400x300?text=Memory+3",
    note: "Beach day with family!",
    memento: "🏖️ Shell from the beach",
  },
];

export default function Scrapbook() {
  const [currentPage, setCurrentPage] = useState(0);

  const flipPage = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-300 to-purple-400 relative">
      <div className="absolute top-0 left-0 right-0 h-20 flex items-center justify-center text-white text-3xl font-bold">
        🌟 Welcome to Your Scrapbook! 🌟
      </div>
      <motion.div
        className="relative w-96 h-64 rounded-lg shadow-2xl cursor-pointer perspective"
        onClick={flipPage}
      >
        <motion.div
          className="absolute w-full h-full backface-hidden flex flex-col justify-center items-center rounded-lg bg-white p-4 shadow-lg"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 0 }}
          exit={{ rotateY: 180 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.img
            className="w-full h-3/4 object-cover rounded-lg transition-transform duration-500 hover:scale-105 shadow-md"
            src={pages[currentPage].photo}
            alt="Memory"
          />
          <p className="mt-4 text-lg font-semibold text-gray-800 text-center">
            {pages[currentPage].note}
          </p>
        </motion.div>
        <motion.div className="absolute w-full h-full backface-hidden flex flex-col justify-center items-center rounded-lg bg-yellow-300 p-4 transform rotate-y-180 shadow-lg">
          <p className="text-2xl font-bold text-gray-900">
            {pages[currentPage].memento}
          </p>
          <p className="mt-2 text-lg text-gray-700 text-center">
            ✨ Flip for a memory!
          </p>
        </motion.div>
      </motion.div>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-opacity-10 bg-white pointer-events-none" />
    </div>
  );
}
