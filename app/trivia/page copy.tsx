"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Lock, Unlock, ArrowDown } from "lucide-react";

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
}

const triviaQuestions: TriviaQuestion[] = [
  {
    question: "What's the name of our favorite café where we used to study?",
    options: [
      "The Cozy Corner",
      "Brew & Books",
      "Caffeine Dreams",
      "Study Grounds",
    ],
    correctAnswer: "Brew & Books",
  },
  {
    question: "Which movie did we watch on repeat during our last sleepover?",
    options: [
      "The Notebook",
      "Mean Girls",
      "Clueless",
      "Bridget Jones's Diary",
    ],
    correctAnswer: "Mean Girls",
  },
  {
    question: "What's the nickname I gave you on our first day of university?",
    options: ["Sunshine", "Brainiac", "Giggles", "Dani-bear"],
    correctAnswer: "Sunshine",
  },
];

const letterSections: LetterSection[] = [
  {
    id: 1,
    title: "A New Beginning",
    content:
      "Dear Dania, as you embark on this new journey, remember that every ending is just a new beginning in disguise. Your adventure in London is going to be filled with amazing experiences and growth. I'm so proud of you for taking this bold step!",
    unlockDate: "2023-06-15", // Assuming today's date
  },
  {
    id: 2,
    title: "Birthday Wishes",
    content:
      "Happy Birthday, my dearest friend! It's your special day, and even though we're miles apart, I hope you feel the warmth of my wishes. May this year bring you success in your studies and joy in your new home.",
    unlockDate: "2025-04-13",
  },
  {
    id: 3,
    title: "One Year Anniversary",
    content:
      "Can you believe it's been a year since you moved to London? I'm so impressed by how you've adapted and thrived in your new environment. Your strength and resilience continue to inspire me.",
    unlockDate: "2024-06-15",
  },
  {
    id: 4,
    title: "Forever Friends",
    content:
      "No matter where life takes us, our friendship will always be a constant. I'm grateful for every moment we've shared and excited for all the adventures yet to come. You're not just my friend, you're family.",
    unlockDate: "2025-12-25",
  },
];

export default function EnchantedLetters() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [firstSectionUnlocked, setFirstSectionUnlocked] = useState(false);
  const [shakeWrong, setShakeWrong] = useState(false);

  const handleAnswerClick = (selectedAnswer: string) => {
    if (selectedAnswer === triviaQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      if (currentQuestion < triviaQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setFirstSectionUnlocked(true);
      }
    } else {
      setShakeWrong(true);
      setTimeout(() => setShakeWrong(false), 500);
    }
  };

  const isLetterUnlocked = (unlockDate: string) => {
    return new Date() >= new Date(unlockDate);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 to-purple-300 p-8 overflow-x-hidden">
      <motion.div
        className="max-w-4xl mx-auto bg-white bg-opacity-90 rounded-3xl shadow-2xl overflow-hidden p-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <motion.h1
          className="text-4xl font-extrabold text-center mb-8 text-pink-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Dania's Magical Time Capsule 💖✨
        </motion.h1>

        {!firstSectionUnlocked && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-pink-500 mb-4">
              Friendship Trivia Challenge
            </h2>
            <p className="text-lg mb-4">
              Answer all questions correctly to unlock the first letter!
            </p>
            <motion.div
              className="bg-pink-100 p-6 rounded-lg"
              animate={shakeWrong ? { x: [-10, 10, -10, 10, 0] } : {}}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4">
                {triviaQuestions[currentQuestion].question}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {triviaQuestions[currentQuestion].options.map(
                  (option, index) => (
                    <motion.button
                      key={index}
                      className="bg-white text-pink-600 border-2 border-pink-300 py-2 px-4 rounded-full hover:bg-pink-50 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAnswerClick(option)}
                    >
                      {option}
                    </motion.button>
                  )
                )}
              </div>
            </motion.div>
          </div>
        )}

        <div className="space-y-8 mt-8">
          <h2 className="text-2xl font-bold text-pink-500 mb-4">
            Dania's Enchanted Letters
          </h2>
          <p className="text-lg text-gray-600">
            Scroll down to reveal your magical letters as they unlock over time!
          </p>
          <motion.div
            className="relative"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-8 h-8 text-pink-500 mx-auto" />
          </motion.div>
          {letterSections.map((section) => (
            <motion.div
              key={section.id}
              className="bg-white border-2 border-pink-300 rounded-lg overflow-hidden p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: section.id * 0.2 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-pink-600">
                  {section.title}
                </h3>
                {section.id === 1 ? (
                  firstSectionUnlocked ? (
                    <Unlock className="text-green-500" />
                  ) : (
                    <Lock className="text-gray-400" />
                  )
                ) : isLetterUnlocked(section.unlockDate) ? (
                  <Unlock className="text-green-500" />
                ) : (
                  <Lock className="text-gray-400" />
                )}
              </div>
              {(section.id === 1 && firstSectionUnlocked) ||
              (section.id !== 1 && isLetterUnlocked(section.unlockDate)) ? (
                <p className="text-gray-700">{section.content}</p>
              ) : (
                <div className="bg-pink-50 p-4 rounded-lg">
                  <p className="text-gray-500">
                    {section.id === 1
                      ? "Complete the trivia to unlock this letter!"
                      : `This letter will unlock on ${new Date(
                          section.unlockDate
                        ).toLocaleDateString()}`}
                  </p>
                </div>
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
            <h2 className="text-2xl font-bold text-pink-600 mb-4">
              <Sparkles className="inline-block mr-2" />
              Congratulations, Dania!
              <Sparkles className="inline-block ml-2" />
            </h2>
            <p className="text-lg text-pink-500">
              You've unlocked the first letter! Keep checking back for more
              letters as time goes by.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
