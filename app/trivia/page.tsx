"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Lock, Unlock, ArrowDown, Star, Check } from "lucide-react";
import confetti from "canvas-confetti";

interface TriviaQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface LetterSection {
  id: number;
  title: string;
  content: string;
  unlockDate: string;
  emoji: string;
}

const triviaQuestions: TriviaQuestion[] = [
  {
    question: "What's my favourite soft drink ?",
    options: ["Thumbs Up", "Fanta", "Coke", "Pepsi"],
    correctAnswer: "Coke",
  },
  {
    question: "What's my go-to alcohol? ",
    options: ["Magic Moments", "KingFisher", "OldMonk", "Fireball"],
    correctAnswer: "Fireball",
  },
  {
    question: "What's my petname?",
    options: ["Danu", "Gudu", "Danz", "Babli"],
    correctAnswer: "Gudu",
  },
];

const letterSections: LetterSection[] = [
  {
    id: 1,
    title: "A New Beginning",
    content:
      "Dear Dania, as you embark on this new journey, remember that every ending is just a new beginning in disguise. Your adventure in London is going to be filled with amazing experiences and growth. I'm so proud of you for taking this bold step!",
    unlockDate: "2023-06-15",
    emoji: "🌟",
  },
  {
    id: 2,
    title: "Birthday 2025",
    content:
      "Happy Birthday, my dearest friend! It's your special day, and even though we're miles apart, I hope you feel the warmth of my wishes. May this year bring you success in your studies and joy in your new home.",
    unlockDate: "2025-04-13",
    emoji: "🎂",
  },
  {
    id: 3,
    title: "Birthday 2026",
    content:
      "Can you believe it's been a year since you moved to London? I'm so impressed by how you've adapted and thrived in your new environment. Your strength and resilience continue to inspire me.",
    unlockDate: "2026-04-13",
    emoji: "🎉",
  },
  // {
  //   id: 4,
  //   title: "Birtday",
  //   content:
  //     "No matter where life takes us, our friendship will always be a constant. I'm grateful for every moment we've shared and excited for all the adventures yet to come. You're not just my friend, you're family.",
  //   unlockDate: "2025-12-25",
  //   emoji: "💖",
  // },
];

const FloatingStars = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-300"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0,
          }}
          animate={{
            y: [null, Math.random() * -100 - 50],
            scale: [0, Math.random() * 0.5 + 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <Star size={Math.random() * 8 + 4} />
        </motion.div>
      ))}
    </div>
  );
};

export default function EnchantedLetters() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [firstSectionUnlocked, setFirstSectionUnlocked] = useState(false);
  const [shakeWrong, setShakeWrong] = useState(false);
  const [showCorrectMark, setShowCorrectMark] = useState(false);

  const handleAnswerClick = (selectedAnswer: string) => {
    if (selectedAnswer === triviaQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      setShowCorrectMark(true);
      setTimeout(() => {
        setShowCorrectMark(false);
        if (currentQuestion < triviaQuestions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setFirstSectionUnlocked(true);
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
        }
      }, 1000);
    } else {
      setShakeWrong(true);
      setTimeout(() => setShakeWrong(false), 500);
    }
  };

  const isLetterUnlocked = (unlockDate: string) => {
    return new Date() >= new Date(unlockDate);
  };

  const getTimeUntilUnlock = (unlockDate: string) => {
    const now = new Date();
    const unlock = new Date(unlockDate);
    const diff = unlock.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${days}d ${hours}h ${minutes}m`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 to-purple-300 p-8 overflow-x-hidden font-sans relative">
      <FloatingStars />
      <motion.div
        className="max-w-4xl mx-auto bg-white bg-opacity-90 rounded-3xl shadow-2xl overflow-hidden p-8 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <motion.h1
          className="text-5xl font-extrabold text-center mb-8 text-pink-600 font-serif"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Dania's Magical Time Capsule 💖✨
        </motion.h1>

        {!firstSectionUnlocked && (
          <div className="mb-8 relative">
            <h2 className="text-3xl font-bold text-pink-500 mb-4 font-serif">
              Friendship Trivia Challenge
            </h2>
            <p className="text-xl mb-4 text-gray-700">
              Answer all questions correctly to unlock the first letter!
            </p>
            <motion.div
              className="bg-pink-100 p-6 rounded-lg shadow-md"
              animate={shakeWrong ? { x: [-10, 10, -10, 10, 0] } : {}}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-pink-600">
                {triviaQuestions[currentQuestion].question}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {triviaQuestions[currentQuestion].options.map(
                  (option, index) => (
                    <motion.button
                      key={index}
                      className="bg-white text-pink-600 border-2 border-pink-300 py-3 px-6 rounded-full hover:bg-pink-50 transition-colors text-lg font-medium relative"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAnswerClick(option)}
                    >
                      {option}
                      {showCorrectMark &&
                        option ===
                          triviaQuestions[currentQuestion].correctAnswer && (
                          <motion.div
                            className="absolute right-2 top-1/2 transform -translate-y-1/2"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                          >
                            <Check className="text-green-500 w-6 h-6" />
                          </motion.div>
                        )}
                    </motion.button>
                  )
                )}
              </div>
            </motion.div>
          </div>
        )}

        <div className="space-y-8 mt-8">
          <h2 className="text-3xl font-bold text-pink-500 mb-4 font-serif">
            Dania's Enchanted Letters
          </h2>
          <p className="text-xl text-gray-700">
            Scroll down to reveal your magical letters as they unlock over time!
          </p>
          <motion.div
            className="relative"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-10 h-10 text-pink-500 mx-auto" />
          </motion.div>
          {letterSections.map((section) => (
            <motion.div
              key={section.id}
              className="bg-white border-2 border-pink-300 rounded-lg overflow-hidden p-6 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: section.id * 0.2 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold text-pink-600 font-serif">
                  {section.title} {section.emoji}
                </h3>
                {section.id === 1 ? (
                  firstSectionUnlocked ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Unlock className="text-green-500 w-8 h-8" />
                    </motion.div>
                  ) : (
                    <Lock className="text-gray-400 w-8 h-8" />
                  )
                ) : isLetterUnlocked(section.unlockDate) ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Unlock className="text-green-500 w-8 h-8" />
                  </motion.div>
                ) : (
                  <Lock className="text-gray-400 w-8 h-8" />
                )}
              </div>
              {(section.id === 1 && firstSectionUnlocked) ||
              (section.id !== 1 && isLetterUnlocked(section.unlockDate)) ? (
                <motion.p
                  className="text-gray-700 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {section.content}
                </motion.p>
              ) : (
                <motion.div
                  className="bg-pink-50 p-4 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-pink-600 text-lg font-medium">
                    {section.id === 1
                      ? "Complete the trivia to unlock this letter!"
                      : `This letter will unlock in:`}
                  </p>
                  {section.id !== 1 && (
                    <motion.p
                      className="text-3xl font-bold text-pink-500 mt-2"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      {getTimeUntilUnlock(section.unlockDate)}
                    </motion.p>
                  )}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {firstSectionUnlocked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-center"
          >
            <h2 className="text-3xl font-bold text-pink-600 mb-4 font-serif">
              <Sparkles className="inline-block mr-2" />
              Congratulations, Dania!
              <Sparkles className="inline-block ml-2" />
            </h2>
            <p className="text-xl text-pink-500">
              You've unlocked the first letter! Keep checking back for more
              letters as time goes by.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
