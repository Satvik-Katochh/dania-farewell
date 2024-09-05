"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Play, Pause, X } from "lucide-react";
import confetti from "canvas-confetti";
import ReactConfetti from "react-confetti";

interface Review {
  id: string;
  name: string;
  avatar: string;
  message: string;
  relation: string;
  voiceNote: string;
}

const reviews: Review[] = [
  {
    id: "1",
    name: "Monu",
    avatar: "/guestbook/monu.jpeg",
    message:
      "Dania, you're the kindest soul I've ever met. Your smile brightens everyone's day!",
    relation: "Partner in Crime",
    voiceNote: "/path-to-voice-note-1.mp3",
  },
  {
    id: "2",
    name: "Sharmu",
    avatar: "/guestbook/pranav.jpeg",
    message:
      "From study buddy to life-long friend, Dania, you've been an inspiration. Good luck in London!",
    relation: "Bestie",
    voiceNote: "/path-to-voice-note-2.mp3",
  },
  {
    id: "3",
    name: "Nikka",
    avatar: "/guestbook/niks.jpeg",
    message:
      "Dania's dedication and creativity never cease to amaze me. She'll go far in her studies abroad.",
    relation: "Bestie",
    voiceNote: "/path-to-voice-note-3.mp3",
  },
  {
    id: "4",
    name: "Akii",
    avatar: "/guestbook/akii.jpeg",
    message:
      "Dania, your friendship has been a gift. I'll miss our coffee dates and long chats!",
    relation: "Idiot",
    voiceNote: "/path-to-voice-note-4.mp3",
  },
  {
    id: "5",
    name: "Michael",
    avatar: "/placeholder.svg?height=100&width=100&text=M",
    message:
      "Your passion for learning is contagious, Dania. You've inspired me to pursue my own dreams!",
    relation: "Study Group Member",
    voiceNote: "/path-to-voice-note-5.mp3",
  },
  {
    id: "6",
    name: "Olivia",
    avatar: "/placeholder.svg?height=100&width=100&text=O",
    message:
      "Dania, your kindness and intelligence make you truly special. London is lucky to have you!",
    relation: "Childhood Friend",
    voiceNote: "/path-to-voice-note-6.mp3",
  },
  {
    id: "7",
    name: "David",
    avatar: "/placeholder.svg?height=100&width=100&text=D",
    message:
      "Your determination is inspiring, Dania. Can't wait to see what you achieve in London!",
    relation: "Lab Partner",
    voiceNote: "/path-to-voice-note-7.mp3",
  },
  {
    id: "8",
    name: "Sophie",
    avatar: "/placeholder.svg?height=100&width=100&text=S",
    message:
      "Dania, you've been the best mentor I could ask for. Thank you for everything!",
    relation: "Mentee",
    voiceNote: "/path-to-voice-note-8.mp3",
  },
  {
    id: "9",
    name: "Dr. Williams",
    avatar: "/placeholder.svg?height=100&width=100&text=DW",
    message:
      "Dania's research skills are exceptional. She has a bright future in academia ahead.",
    relation: "Research Advisor",
    voiceNote: "/path-to-voice-note-9.mp3",
  },
  {
    id: "10",
    name: "Raj",
    avatar: "/placeholder.svg?height=100&width=100&text=R",
    message:
      "Dania's cultural sensitivity and global perspective will serve her well in London. Bon voyage!",
    relation: "International Student Buddy",
    voiceNote: "/path-to-voice-note-10.mp3",
  },
];

const FloatingAvatar = ({
  review,
  onClick,
}: {
  review: Review;
  onClick: () => void;
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -20, 0],
      x: [0, 10, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    });
  }, [controls]);

  return (
    <motion.div
      className="absolute cursor-pointer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      style={{
        left: `${Math.random() * 70 + 15}%`,
        top: `${Math.random() * 70 + 15}%`,
      }}
      onClick={() => {
        onClick();
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#FFC0CB", "#FFB6C1", "#FF69B4", "#FF1493", "#DB7093"],
        });
      }}
    >
      <motion.div animate={controls}>
        <img
          src={review.avatar}
          alt={review.name}
          className="w-20 h-20 rounded-full border-4 border-pink-300 shadow-lg"
        />
      </motion.div>
    </motion.div>
  );
};

const ReviewPopup = ({
  review,
  onClose,
}: {
  review: Review;
  onClose: () => void;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-lg p-8 max-w-md w-full relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 15 }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>
        <div className="flex items-center mb-4">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-20 h-20 rounded-full border-4 border-pink-300 mr-4"
          />
          <div>
            <h3 className="text-2xl font-bold text-pink-600">{review.name}</h3>
            <p className="text-sm text-pink-400">{review.relation}</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{review.message}</p>
        <div className="flex items-center justify-between bg-pink-100 rounded-full p-2">
          <button
            onClick={togglePlay}
            className="bg-pink-500 text-white rounded-full p-2 hover:bg-pink-600 transition-colors"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <span className="text-pink-600 font-medium">Play Voice Note</span>
        </div>
        <audio
          ref={audioRef}
          src={review.voiceNote}
          onEnded={() => setIsPlaying(false)}
        />
      </motion.div>
    </motion.div>
  );
};

export default function EnchantedVoiceBook() {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 to-purple-300 p-8 relative overflow-hidden">
      <ReactConfetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={false}
        numberOfPieces={200}
        gravity={0.05}
        colors={["#FFC0CB", "#FFB6C1", "#FF69B4", "#FF1493", "#DB7093"]}
      />
      <motion.div
        className="max-w-6xl mx-auto bg-white bg-opacity-90 rounded-3xl shadow-2xl overflow-hidden relative z-10 p-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-pink-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Dania's Enchanted Voice Book ✨🎙️
        </motion.h1>

        <p className="text-center text-lg text-gray-600 mb-12">
          Click and drag the floating avatars to read messages and listen to
          heartfelt voice notes from Dania's friends and mentors!
        </p>

        <div className="relative h-[600px] bg-gradient-to-b from-pink-50 to-purple-100 rounded-2xl overflow-hidden">
          {reviews.map((review) => (
            <FloatingAvatar
              key={review.id}
              review={review}
              onClick={() => setSelectedReview(review)}
            />
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedReview && (
          <ReviewPopup
            review={selectedReview}
            onClose={() => setSelectedReview(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
