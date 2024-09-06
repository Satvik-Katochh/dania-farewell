"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const scrapbookPages = [
  {
    leftPage: {
      photo: "/scrapbook/1.jpg",
      note: "Favorite Couple",
      date: "Jun 2024",
    },
    rightPage: {
      photo: "/scrapbook/2.jpg",
      note: "Baby Kong!!",
      date: "April 2024",
    },
  },
  {
    leftPage: {
      photo: "/scrapbook/3.jpg",
      note: "Sharmu's Melons",
      date: "Dec 2023",
    },
    rightPage: {
      photo: "/scrapbook/4.jpg",
      note: "Gokarna!!",
      date: "Dec 2023",
    },
  },
  {
    leftPage: {
      photo: "/scrapbook/5.jpg",
      note: "X-mas the trio!!",
      date: "Dec 2022",
    },
    rightPage: {
      photo: "/scrapbook/6.jpg",
      note: "X-mas the trio!!",
      date: "Dec 2021",
    },
  },
  {
    leftPage: {
      photo: "/scrapbook/7.jpg",
      note: "One With Tinku!!",
      date: "Mar 2024",
    },
    rightPage: {
      photo: "/scrapbook/8.jpg",
      note: "One With the real BESTIE!!",
      date: "July 2022",
    },
  },
  {
    leftPage: {
      photo: "/scrapbook/9.jpg",
      note: "One with the house wife!!",
      date: "Mar 2024",
    },
    rightPage: {
      photo: "/scrapbook/10.jpg",
      note: "One with the work wife!!",
      date: "Apr 2024",
    },
  },
  {
    leftPage: {
      photo: "/scrapbook/11.jpg",
      note: "X-mas..Fuck we look rich!!",
      date: "Dec 2023",
    },
    rightPage: {
      photo: "/scrapbook/12.jpg",
      note: "Happier Than Ever",
      date: "Sept 2022",
    },
  },
  {
    leftPage: {
      photo: "/scrapbook/13.jpg",
      note: "Bangalore ke Gunde!!",
      date: "Nov 2023",
    },
    rightPage: {
      photo: "/scrapbook/14.jpg",
      note: "Unicorn x Unicorn",
      date: "Eternal",
    },
  },
  {
    leftPage: {
      photo: "/scrapbook/15.jpg",
      note: "One with Sharmu",
      date: "Nov 2023",
    },
    rightPage: {
      photo: "/scrapbook/16.jpg",
      note: "Oh shieeeeet, Monu ka bacha kiske kok mein hai?",
      date: "Eternal",
    },
  },
  {
    leftPage: {
      photo: "/scrapbook/17.jpg",
      note: "Borderline Alcoholic",
      date: "Dec 2023",
    },
    rightPage: {
      photo: "/scrapbook/18.jpg",
      note: "Desi Santa!!",
      date: "hohohhoho!!",
    },
  },
  {
    leftPage: {
      photo: "/scrapbook/19.jpg",
      note: "Look at this kiddo!!",
      date: "^__^",
    },
    rightPage: {
      photo: "/scrapbook/20.jpg",
      note: "OOpiseee!!",
      date: ":)",
    },
  },
];

const Page = ({
  page,
  isLeft,
}: {
  page: (typeof scrapbookPages)[0]["leftPage"];
  isLeft: boolean;
}) => (
  <motion.div
    className={`w-full h-full bg-pink-50 p-4 ${
      isLeft ? "rounded-l-3xl" : "rounded-r-3xl"
    } shadow-inner flex flex-col items-center justify-center`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="relative w-full h-4/5 mb-4"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Image
        src={page.photo}
        alt={page.note}
        layout="fill"
        objectFit="cover"
        className="rounded-2xl border-4 border-white shadow-lg"
      />
    </motion.div>
    <motion.p
      className="text-gray-700 mb-2 font-handwriting text-center text-xl"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      {page.note}
    </motion.p>
    <motion.span
      className="text-sm text-gray-500 font-handwriting"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      {page.date}
    </motion.span>
  </motion.div>
);

export default function EnhancedScrapbook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const flipPage = (direction: "next" | "prev") => {
    setFlipping(true);
    setTimeout(() => {
      if (direction === "next" && currentPage < scrapbookPages.length - 1) {
        setCurrentPage(currentPage + 1);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      } else if (direction === "prev" && currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
      setFlipping(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-purple-300 p-4 sm:p-8 flex items-center justify-center overflow-hidden">
      <Confetti
        width={width}
        height={height}
        recycle={false}
        numberOfPieces={showConfetti ? 200 : 0}
      />
      <motion.div
        className="w-full max-w-6xl bg-pink-300 rounded-3xl shadow-2xl overflow-hidden relative p-4 sm:p-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 drop-shadow-lg"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
        >
          Dania&apos;s Magical Scrapbook ✨📖
        </motion.h1>

        <div className="flex justify-center items-center">
          <motion.button
            onClick={() => flipPage("prev")}
            disabled={currentPage === 0}
            className="text-white disabled:text-pink-200 mr-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous page"
          >
            <ChevronLeft size={36} />
          </motion.button>

          <div className="w-full max-w-4xl aspect-[3/2] bg-pink-100 rounded-3xl shadow-2xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                className="absolute inset-0 flex"
                initial={{ rotateY: flipping ? -90 : 0, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: flipping ? 90 : 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Page
                  page={scrapbookPages[currentPage].leftPage}
                  isLeft={true}
                />
                <Page
                  page={scrapbookPages[currentPage].rightPage}
                  isLeft={false}
                />
              </motion.div>
            </AnimatePresence>
            <motion.div
              className="absolute inset-y-0 left-1/2 w-1 bg-pink-300 shadow-lg"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ delay: 0.2, duration: 0.5 }}
            ></motion.div>
          </div>

          <motion.button
            onClick={() => flipPage("next")}
            disabled={currentPage === scrapbookPages.length - 1}
            className="text-white disabled:text-pink-200 ml-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next page"
          >
            <ChevronRight size={36} />
          </motion.button>
        </div>

        <motion.div
          className="text-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-white text-lg">
            Page {currentPage + 1} of {scrapbookPages.length}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
