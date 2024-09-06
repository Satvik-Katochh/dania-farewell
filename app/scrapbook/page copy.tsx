"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      note: "Eid Mubarak :)!!",
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
