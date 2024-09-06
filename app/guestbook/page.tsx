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
    message: `
      Dania, you're the kindest soul I've ever met. Your smile brightens everyone's day!
  
      As you head off on this amazing journey, I just wanted you to know that you are going to shine, just like you always do. While I'll miss you like crazy, I want you to know that no matter how far apart we are, I'm always right here for you, supporting you every step of the way.
  
      Stay safe, have the best adventures, and remember you’ve got someone back home who believes in you completely. If ever you need a reminder of how incredible you are, I’m only a call away.
  
      Good luck, Danz, you’ve got this ❤️
    `,
    relation: "The better half",
    voiceNote: "/voice-notes/monu.mp4", // Ensure the file path and format are correct
  },

  {
    id: "2",
    name: "Sharmu",
    avatar: "/guestbook/pranav.jpeg",
    message:
      "From study buddy to life-long friend, Dania, you've been an inspiration. Good luck in London!",
    relation: "Daaruin Master",
    voiceNote: "/pranav.mp4",
  },
  {
    id: "3",
    name: "Nikka",
    avatar: "/guestbook/niks.jpeg",
    message:
      "Hi Danzzzz, I’m so so so so afsoos that you’re leaving, and life’s going to actually feel so incomplete without you here in Bangalore :( It’s definitely a super tough pill to swallow, but I’m so proud of how far you’ve come and I can’t wait to see you kill it in the UK! I’ve known you for 6 years now, we’ve literally been through it all, making such amazing memories together and embarking on wild adventures, and these moments with you are the ones that I’ve most cherished! You’re my BFFFLLL, and no one can or will ever take your place, you’ll see ;) Adieu for now bestie, cheers to an amazing future!!!",
    relation: "House Wife",
    voiceNote: "/voice-notes/nikka.ogg",
  },

  {
    id: "4",
    name: "Akii",
    avatar: "/guestbook/akii.jpeg",
    message:
      "Hiii Dhaniyaa, you're probably one of the nicest, kindest, and most fun, demure, mindful people I've met. I'll miss the way you cuss at Sharmu in Hindi, I'll miss the way Monu is nicer to everyone when you're around, and the way you've been trying to set Sharmu up with someone for ages. But we'll meet soon—consider it a short hiatus from your cool cool friends in BLR. No matter how busy or overwhelming Sheffield gets, just know you'll have a home in all of your friends. Wherever life takes you, you'll never be far from home. Godspeed!",
    relation: "The Yapper",
    voiceNote: "/voice-notes/akii.ogg",
  },

  {
    id: "5",
    name: "Hrithik",
    avatar: "/guestbook/hrithik.jpg",
    message: "Don’t eat a pint of ice cream in one sitting.",
    relation: "WoW-MoMo",
    voiceNote: "/voice-notes/hrithik.ogg",
  },
  {
    id: "6",
    name: "Nikki",
    avatar: "/guestbook/nikki.jpg", // Changed text to 'N' to match the name
    message: `
      My dearest Danzzzz❤️
  
      I just want you to know how incredibly special you are to me. You’ve grown into such a beautiful, kind, and strong young woman, and I am so proud of everything you’ve achieved. As you head off to Sheffield, my heart is already missing you so much, but I know that this is just the beginning of an amazing journey for you. 
  
      I believe in you with all my heart and have no doubt that you’re going to do incredible things. Good luck, my love, and may your future be filled with endless opportunities, happiness, and success. 
      Never forget how deeply loved you are by your ever young, eternally glamorous aunt 😀❤️
  
      With all my love,  
      Nikki ❤️❤️
    `,
    relation: "Maasi (Maa-Jaisi)", // Corrected spacing
    voiceNote: "/voice-notes/voice-note-6.ogg", // Ensure the voice note path is correct and the file format is consistent
  },

  {
    id: "7",
    name: "Sahil",
    avatar: "/guestbook/sahil.jpg",
    message:
      "Hey Dania! Apart from being an absolute party starter, it is amazing to see the energy you bring in lives around you. I want this quality in me someday. You are going to kill it there. Lots of love and happiness.",
    relation: "The Cry Baby",
    voiceNote: "",
  },
  {
    id: "8",
    name: "Shruti",
    avatar: "/guestbook/shruti.jpg",
    message: `
      Hey Danzzzz!!!!
  
      We just met for like 5 or 6 times, and I can vouch that you are the most entertaining, enthusiastic, and energetic person in a room full of people. Always keep this aura of yours with you.
  
      All the best for your future ❤️
    `,
    relation: "Leader of Secondary Group",
    voiceNote: "/voice-notes/shruti.ogg", // Make sure the path and format are correct
  },
  {
    id: "9",
    name: "Sanya",
    avatar: "/guestbook/sanya.jpg",
    message:
      "Thanks for being my work wife!! You've been my go-to person for all the random rants, inside jokes, and coffee runs. From office hours to after-work hangouts, you've made every moment memorable. Can't wait to see what you'll achieve next! You’re not just my work buddy, but my real-life bestie. Love you!",
    relation: "Work Wife",
    voiceNote: "",
  },
  {
    id: "10",
    name: "Sera",
    avatar: "/guestbook/sera.jpg",
    message:
      "Dear Dania Didi, The first ever memory I have of you was when we wore matching pink Barbie t-shirts for an event and I felt like I was on top of the world, well firstly because I was wearing pink, cause obviously?! And also, because I got to match with you!!! You were only a baby yourself but to me you were DANIA DIDI, my bestie, my fav person, my support, everything. Even after all these years I still love and cherish you the same way I did when I was two. We've had so much fun together and get along soooooo well (except maybe for that one time when I threw your phone across the room hehe :)) And now, you're moving away from home, faaaaaaar away from me and I'm going to miss you so so so so so so much, but at the same time I'm so excited for everything that's awaiting you in the future because you deserve EACH.AND.EVERY.BIT.OF.IT. You've put in so much effort, from surviving primus to working for loooooong hours every day at your job, you've conquered everything and I trust and believe that you will only excel in life from here. I will forever support and love you unconditionally. I love you the most. XOXO (Gossip Girl Sera)",
    relation: "Lil Sister",
    voiceNote: "/voice-notes/sera.mp4",
  },
  {
    id: "10",
    name: "Pulkit",
    avatar: "/guestbook/thappar.jpg",
    message:
      "Hey Danny boi, “Tusi jaa rahe ho? Tusi na jao” (I hope you are desi enough to get the reference). Try not to butcher Hinglish with that British accent now, and we’ll remain friends. I know I’ll never come across anyone with the kind of aura you have. I wish we had more good times to look back on together. The HSR place will always be my goated spot for drunk conversations, and you’ll forever be a part of those memories. All the very best! Don’t worry about Monu, I’ll keep his bed warm. *wink wink*",
    relation: "The Gentleman",
    voiceNote: "/voice-notes/thappar.mp4",
  },

  {
    id: "11",
    name: "Tinku",
    avatar: "/guestbook/tinku.jpg",
    message:
      "Absolutely love that you were such a pleasant (and late) surprise in my life as a friend. Would definitely not have it any other way with you. Love you so incredibly much. Will miss you a lot. Please be back soon. Yours Lovingly, Tinkuu",
    relation: "Unhinged",
    voiceNote: "/voice-notes/tinku.ogg",
  },

  {
    id: "12",
    name: "Harsh",
    avatar: "/guestbook/harsh.jpg",
    message:
      "Daniaaaa!! Best of luck!!!!! Honestly, Sheffield doesn’t even know what’s coming—it just got blessed with you 🤭",
    relation: "Influenza Friend",
    voiceNote: "/voice-notes/harsh.ogg",
  },

  {
    id: "13",
    name: "Simran",
    avatar: "/guestbook/simi.jpg",
    message:
      "I can’t believe you’re actually off to start this new adventure abroad! Honestly, you’ve always been the kind of person who faces whatever life throws at you with a smile (and maybe a little sass). You've seen and done so much already, and now it's time to show the world what you’re made of on a bigger stage. Go live your best life out there, meet new people, make some wild memories, and don't forget that you have a big ass family here. We love you",
    relation: "The Infamous One",
    voiceNote: "/voice-notes/simi.ogg",
  },

  {
    id: "14",
    name: "Anmol",
    avatar: "/guestbook/anmol.jpeg",
    message:
      "Hey Dania, All the best for your time in Sheffield, hopefully you have the best time and meet lots of great people. Love you & see you soon! -Anmol",
    relation: "The SPY",
    voiceNote: "/voice-notes/anmol.ogg",
  },

  {
    id: "15",
    name: "Satvik",
    avatar: "/guestbook/satvik.jpeg",
    message: "You were the summer to my winter heart. 🌻",
    relation: "Sant",
    voiceNote: "",
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
          <X size={24} />
        </button>
        <div className="flex items-center mb-4">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-24 h-24 rounded-full border-4 border-pink-300 mr-4"
          />
          <div>
            <h3 className="text-2xl font-bold text-pink-600">{review.name}</h3>
            <p className="text-sm text-pink-400">{review.relation}</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{review.message}</p>
        {review.voiceNote && (
          <div className="flex items-center justify-between bg-pink-100 rounded-full p-2">
            <button
              onClick={togglePlay}
              className="bg-pink-500 text-white rounded-full p-2 hover:bg-pink-600 transition-colors"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <span className="text-pink-600 font-medium">Play Voice Note</span>
          </div>
        )}
        {review.voiceNote && (
          <audio
            ref={audioRef}
            src={review.voiceNote}
            onEnded={() => setIsPlaying(false)}
          />
        )}
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
          "Click and drag the floating avatars to read messages and listen to
          heartfelt voice notes from Dania's friends and family!"
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
