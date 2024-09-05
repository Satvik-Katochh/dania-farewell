// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Calendar, GraduationCap, Plane, Music, Camera } from "lucide-react";

// const timelineEvents = [
//   {
//     date: "September 2015",
//     title: "First Day of College",
//     description: "Met Dania and shared snacks during orientation",
//     icon: Calendar,
//   },
//   {
//     date: "July 2017",
//     title: "Epic Mountain Road Trip",
//     description: "Sang our hearts out and got lost in the wilderness",
//     icon: Plane,
//   },
//   {
//     date: "June 2019",
//     title: "Graduation Day",
//     description: "Tossed our caps and made promises to stay in touch",
//     icon: GraduationCap,
//   },
//   {
//     date: "December 2021",
//     title: "First Job Celebration",
//     description: "Toasted to adulting at our favorite café",
//     icon: Music,
//   },
//   {
//     date: "March 2023",
//     title: "London Acceptance News",
//     description: "Screamed with joy at Dania's dream coming true",
//     icon: Camera,
//   },
// ];

// export default function Timeline() {
//   return (
//     <div className="min-h-screen bg-pink-200 p-8 relative overflow-hidden">
//       <motion.div
//         className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden relative z-10"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, type: "spring" }}
//       >
//         <div className="h-32 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 relative">
//           <motion.h1
//             className="absolute bottom-4 left-4 text-4xl font-bold text-white drop-shadow-lg"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//           >
//             Dania's Magical Timeline ✨
//           </motion.h1>
//           <Image
//             src="/placeholder.svg?height=128&width=128"
//             alt="Unicorn"
//             width={128}
//             height={128}
//             className="absolute bottom-0 right-0 w-24 h-24 transform rotate-12"
//           />
//         </div>

//         <div className="p-8">
//           {timelineEvents.map((event, index) => (
//             <motion.div
//               key={index}
//               className="flex mb-8 items-start"
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: index * 0.2, duration: 0.5 }}
//             >
//               <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mr-4">
//                 <event.icon className="w-6 h-6 text-pink-500" />
//               </div>
//               <div>
//                 <motion.h2
//                   className="text-xl font-semibold text-gray-800 mb-1"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   {event.title}
//                 </motion.h2>
//                 <p className="text-sm text-gray-500 mb-2">{event.date}</p>
//                 <p className="text-gray-600">{event.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           className="absolute left-1/2 top-32 bottom-8 w-0.5 bg-pink-200"
//           initial={{ height: 0 }}
//           animate={{ height: "100%" }}
//           transition={{ delay: 0.5, duration: 1 }}
//         />
//       </motion.div>

//       <div className="fixed bottom-8 right-8">
//         <motion.button
//           className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Add Memory 💖
//         </motion.button>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Calendar,
  GraduationCap,
  Plane,
  Music,
  Camera,
  Car,
  IndianRupee,
} from "lucide-react";

// Define the type for a timeline event
type TimelineEvent = {
  date: string;
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>; // Update this type as needed based on your icons
};

const timelineEvents: TimelineEvent[] = [
  {
    date: "September 2018",
    title: "Beginning of BMSCE",
    description: "Journey of a life-time!!",
    icon: Calendar,
  },
  {
    date: "October 2019",
    title: "Goa Trip",
    description: "Where it all started....",
    icon: Car,
  },
  {
    date: " Dec 2022",
    title: "Graduation",
    description: "Best Dressed Graduate. ",
    icon: GraduationCap,
  },
  {
    date: "Jun 2023",
    title: "First Job",
    description: "Connected to the HUB",
    icon: IndianRupee,
  },
  {
    date: "Aug 2024",
    title: "Sheffield Calling",
    description: "Beginning of the end.",
    icon: Plane,
  },
];

const FloatingStars = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-300"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1, 0.5],
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          ✨
        </motion.div>
      ))}
    </>
  );
};

export default function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(
    null
  ); // Updated type
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 to-purple-300 p-8 relative overflow-hidden">
      <FloatingStars />

      <motion.div
        className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <div className="h-32 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 relative">
          <motion.h1
            className="absolute bottom-4 left-4 text-4xl font-bold text-white drop-shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Dania's Magical Timeline ✨
          </motion.h1>
          <Image
            src="/unicorn-flat-icon.png" // Make sure to replace with your actual unicorn image
            alt="Unicorn"
            width={128}
            height={128}
            className="absolute bottom-0 right-0 w-24 h-24 transform rotate-12"
          />
        </div>

        <div className="p-8 relative">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className="flex mb-8 items-start relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <motion.div
                className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mr-4 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedEvent(event)}
              >
                <event.icon className="w-6 h-6 text-pink-500" />
              </motion.div>
              <div>
                <motion.h2
                  className="text-xl font-semibold text-gray-800 mb-1"
                  whileHover={{ scale: 1.05 }}
                >
                  {event.title}
                </motion.h2>
                <p className="text-sm text-gray-500 mb-2">{event.date}</p>
                <p className="text-gray-600">{event.description}</p>
              </div>
              {index < timelineEvents.length - 1 && (
                <motion.div
                  className="absolute left-6 top-12 bottom-0 w-0.5 bg-pink-200"
                  initial={{ height: 0 }}
                  animate={{ height: "100%" }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              className="bg-white p-8 rounded-lg max-w-md"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">{selectedEvent.title}</h2>
              <p className="text-gray-600 mb-4">{selectedEvent.description}</p>
              <p className="text-sm text-gray-500">{selectedEvent.date}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="fixed bottom-8 right-8"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, type: "spring" }}
      >
        {/* <motion.button
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Add Memory 💖
        </motion.button> */}
      </motion.div>
    </div>
  );
}
