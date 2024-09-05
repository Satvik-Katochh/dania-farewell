"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const scrapbookPages = [
  {
    leftPage: {
      photo: "/placeholder.svg?height=300&width=200",
      note: "First day of college! Dania's smile brightened up the whole campus.",
      date: "Sept 2015",
    },
    rightPage: {
      photo: "/placeholder.svg?height=300&width=200",
      note: "Late night study sessions fueled by coffee and laughter.",
      date: "Nov 2015",
    },
  },
  {
    leftPage: {
      photo: "/placeholder.svg?height=300&width=200",
      note: "Road trip to the mountains. We got lost but found the best views!",
      date: "July 2017",
    },
    rightPage: {
      photo: "/placeholder.svg?height=300&width=200",
      note: "Graduation day! Tossing caps and making promises to stay in touch.",
      date: "June 2019",
    },
  },
  {
    leftPage: {
      photo: "/placeholder.svg?height=300&width=200",
      note: "Celebrating our first jobs at our favorite café. Adulting begins!",
      date: "Dec 2021",
    },
    rightPage: {
      photo: "/placeholder.svg?height=300&width=200",
      note: "The day Dania got her London acceptance letter. So proud!",
      date: "Mar 2023",
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
  <div
    className={`w-full h-full bg-pink-50 p-4 ${
      isLeft ? "rounded-l-lg" : "rounded-r-lg"
    } shadow-inner flex flex-col items-center`}
  >
    <div className="relative w-48 h-64 mb-4">
      <Image
        src={page.photo}
        alt={page.note}
        layout="fill"
        objectFit="cover"
        className="rounded border-2 border-white shadow-md transform rotate-1"
      />
    </div>
    <p className="text-gray-700 mb-2 font-handwriting text-center">
      {page.note}
    </p>
    <span className="text-sm text-gray-500 font-handwriting">{page.date}</span>
  </div>
);

export default function NotebookScrapbook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [flipping, setFlipping] = useState(false);

  const flipPage = (direction: "next" | "prev") => {
    setFlipping(true);
    setTimeout(() => {
      if (direction === "next" && currentPage < scrapbookPages.length - 1) {
        setCurrentPage(currentPage + 1);
      } else if (direction === "prev" && currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
      setFlipping(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-pink-200 p-8 flex items-center justify-center">
      <motion.div
        className="w-full max-w-4xl bg-pink-300 rounded-3xl shadow-xl overflow-hidden relative p-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <h1 className="text-3xl font-bold text-white text-center mb-8 drop-shadow-lg">
          Dania's Magical Scrapbook ✨📖
        </h1>

        <div className="flex justify-center items-center">
          <button
            onClick={() => flipPage("prev")}
            disabled={currentPage === 0}
            className="text-white disabled:text-pink-200 mr-4"
            aria-label="Previous page"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="w-[600px] h-[400px] bg-pink-100 rounded-lg shadow-2xl relative overflow-hidden">
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
            <div className="absolute inset-y-0 left-1/2 w-[2px] bg-pink-300 shadow-lg"></div>
          </div>

          <button
            onClick={() => flipPage("next")}
            disabled={currentPage === scrapbookPages.length - 1}
            className="text-white disabled:text-pink-200 ml-4"
            aria-label="Next page"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="text-white">
            Page {currentPage + 1} of {scrapbookPages.length}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
