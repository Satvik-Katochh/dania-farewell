// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { Heart, Star, Clock, Book, Camera } from "lucide-react";
// import { useRouter } from "next/navigation";

// const FloatingUnicorns = () => (
//   <>
//     {[...Array(5)].map((_, i) => (
//       <motion.div
//         key={i}
//         className="absolute"
//         initial={{ x: -100, y: Math.random() * window.innerHeight }}
//         animate={{
//           x: window.innerWidth + 100,
//           y: Math.random() * window.innerHeight,
//           rotate: 360,
//         }}
//         transition={{
//           duration: Math.random() * 10 + 10,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       >
//         <Image
//           src="/unicorn-flat-icon.png"
//           alt="Floating unicorn"
//           width={50}
//           height={50}
//         />
//       </motion.div>
//     ))}
//   </>
// );

// export default function DaniaFarewell() {
//   const [isHovered, setIsHovered] = useState(false);
//   const router = useRouter();

//   const handleTimelineClick = () => {
//     router.push("/timeline");
//   };

//   return (
//     <div className="min-h-screen bg-pink-200 p-8 relative overflow-hidden">
//       <FloatingUnicorns />

//       <motion.div
//         className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden relative z-10"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, type: "spring" }}
//       >
//         <motion.div
//           className="h-64 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 relative"
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.3 }}
//         >
//           <motion.div
//             className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 opacity-0"
//             animate={{ opacity: isHovered ? 0.7 : 0 }}
//             transition={{ duration: 0.5 }}
//           />
//           <Image
//             src="/unicorn-flat-icon.png"
//             alt="Unicorn"
//             width={256}
//             height={256}
//             className="absolute bottom-0 right-0 w-48 h-48 transform rotate-12"
//           />
//           <motion.h1
//             className="absolute bottom-4 left-4 text-5xl font-bold text-white drop-shadow-lg"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//           >
//             Farewell, Dania! 🦄✨
//           </motion.h1>
//         </motion.div>

//         <div className="p-8">
//           <motion.p
//             className="text-xl text-gray-700 mb-6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.5 }}
//           >
//             Our magical friend Dania is embarking on an enchanted journey to
//             London for higher studies! Let&apos;s sprinkle some pixie dust and create
//             unforgettable memories before she rides over the rainbow!
//           </motion.p>

//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             <button
//               className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//               Start the Magic! ✨
//             </button>
//           </motion.div>
//         </div>

//         <motion.div
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 p-8 bg-pink-100"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6, duration: 0.5 }}
//         >
//           {[
//             { icon: Heart, text: "Memories", color: "text-pink-500" },
//             { icon: Star, text: "London Dreams", color: "text-yellow-500" },
//             {
//               icon: Clock,
//               text: "Timeline",
//               color: "text-green-500",
//               onClick: handleTimelineClick,
//             },
//             { icon: Book, text: "Guest Book", color: "text-blue-500" },
//             { icon: Camera, text: "Photo Booth", color: "text-purple-500" },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-md"
//               whileHover={{
//                 y: -10,
//                 boxShadow:
//                   "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//               }}
//               transition={{ type: "spring", stiffness: 300 }}
//               onClick={item.onClick}
//             >
//               <motion.div
//                 whileHover={{ rotate: 360, scale: 1.2 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <item.icon className={`w-12 h-12 ${item.color} mb-2`} />
//               </motion.div>
//               <span className="text-sm font-medium text-gray-600">
//                 {item.text}
//               </span>
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Heart,
  Star,
  Clock,
  Book,
  Camera,
  HandHeart,
  MessageCircleHeart,
  HeartPulse,
  Gamepad,
} from "lucide-react";
import { useRouter } from "next/navigation";

const FloatingUnicorns = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Update dimensions when the component mounts
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Optional: Handle window resize
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ x: -100, y: Math.random() * windowDimensions.height }}
          animate={{
            x: windowDimensions.width + 100,
            y: Math.random() * windowDimensions.height,
            rotate: 360,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Image
            src="/unicorn-flat-icon.png"
            alt="Floating unicorn"
            width={50}
            height={50}
          />
        </motion.div>
      ))}
    </>
  );
};

export default function DaniaFarewell() {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleTimelineClick = () => {
    router.push("/timeline");
  };
  const handleMemoriesClick = () => {
    router.push("/memories");
  };
  const handleScrapBookClick = () => {
    router.push("/scrapbook");
  };
  const handleGuestBookClick = () => {
    router.push("/guestbook");
  };
  const handleTriviaClick = () => {
    router.push("/trivia");
  };

  return (
    <div className="min-h-screen bg-pink-200 p-8 relative overflow-hidden">
      <FloatingUnicorns />

      <motion.div
        className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <motion.div
          className="h-64 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 opacity-0"
            animate={{ opacity: isHovered ? 0.7 : 0 }}
            transition={{ duration: 0.5 }}
          />
          <Image
            src="/unicorn-flat-icon.png"
            alt="Unicorn"
            width={256}
            height={256}
            className="absolute bottom-0 right-0 w-48 h-48 transform rotate-12"
          />
          <motion.h1
            className="absolute bottom-4 left-4 text-5xl font-bold text-white drop-shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Farewell, Dania! 🦄✨
          </motion.h1>
        </motion.div>

        <div className="p-8">
          <motion.p
            className="text-xl text-gray-700 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Our magical friend Dania is embarking on an enchanted journey to
            London for higher studies! Let&apos;s sprinkle some pixie dust and
            create unforgettable memories before she rides over the rainbow!
          </motion.p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Start the Magic! ✨
            </button>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 p-8 bg-pink-100"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {[
            {
              icon: HeartPulse,
              text: "Memories",
              color: "text-red-500",
              onClick: handleMemoriesClick,
            },
            {
              icon: Gamepad,
              text: "Trivia",
              color: "text-green-500",
              onClick: handleTriviaClick,
            },

            {
              icon: MessageCircleHeart,
              text: "Notes",
              color: "text-pink-500",
              onClick: handleGuestBookClick,
            },
            {
              icon: Book,
              text: "Scrap Book",
              color: "text-purple-500",
              onClick: handleScrapBookClick,
            },
            {
              icon: Clock,
              text: "Timeline",
              color: "text-yellow-500",
              onClick: handleTimelineClick,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-md"
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={item.onClick}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                <item.icon className={`w-12 h-12 ${item.color} mb-2`} />
              </motion.div>
              <span className="text-sm font-medium text-gray-600">
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
