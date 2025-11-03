// src/data/riddles.js
// Timeline is now scrambled - players must solve and reorder!
export const riddles = [
  {
    id: 7,
    clue: "A king was crowned after his father's death in Wakanda.",
    answer: "Black Panther",
    year: 2016,
    image: "/blackpanther-removebg-preview.png"
  },
  {
    id: 3,
    clue: "The trickster escaped his destiny — only to meet the Time Variance Authority.",
    answer: "Loki",
    year: 2012,
    image: "/Loki-removebg-preview.png"
  },
  {
    id: 10,
    clue: "A soul bound to an ancient god became justice in the moonlight.",
    answer: "Moon Knight",
    year: 2025,
    image: "/moonKnight-removebg-preview.png"
  },
  {
    id: 1,
    clue: "A new god-like race watched silently as mankind evolved, until one of them finally defied the code.",
    answer: "Eternals",
    year: -5000,
    image: "/eternals-removebg-preview.png"
  },
  {
    id: 9,
    clue: "The Ten Rings awakened again — not to conquer, but to protect.",
    answer: "ShangChi",
    year: 2023,
    image: "/shangChi-removebg-preview.png"
  },
  {
    id: 4,
    clue: "He may be small, wooden, and says only three words — but his roots reach across the stars.",
    answer: "Groot",
    year: 2014,
    image: "/groot-removebg-preview.png"
  },
  {
    id: 8,
    clue: "She bent reality to feel love again, building a perfect town of ghosts and grief.",
    answer: "Wanda Maximoff",
    year: 2023,
    image: "/wandaMaximoff-removebg-preview.png"
  },
  {
    id: 2,
    clue: "A forgotten prince wielded a hammer only he was worthy of, proving himself amidst a mortal realm.",
    answer: "Thor",
    year: 2010,
    image: "/thor-removebg-preview.png"
  },
  {
    id: 6,
    clue: "She was trained in shadows, always paying for her red ledger — until she chose family over orders.",
    answer: "Black Widow",
    year: 2016,
    image: "/blackwidow-removebg-preview.png"
  },
  {
    id: 5,
    clue: "A sorcerer rewound time to heal a broken world.",
    answer: "Doctor Strange",
    year: 2016,
    image: "/doctorStrange-removebg-preview.png"
  }
];

// MCU timeline order validation (by ascending story year)
export const correctOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//7,3,10,9,4,8,2,6,5