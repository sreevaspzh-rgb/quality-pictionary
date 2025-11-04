window.QP_CONFIG = {
// Use your published site URL
baseUrl: "https://sreevaspzh-rgb.github.io/quality-pictionary",

// Timer and passcode
perClueSeconds: 45,
passcode: "1234", // change this

// Clue image lists (adjust counts to match the files you actually have)
const data = {
  sets: {
    A: Array.from({ length: 20 }, (_, i) => `assets/sets/A/${String(i + 1).padStart(2, "0")}.png`),
    B: Array.from({ length: 20 }, (_, i) => `assets/sets/B/${String(i + 1).padStart(2, "0")}.png`),
    C: Array.from({ length: 20 }, (_, i) => `assets/sets/C/${String(i + 1).padStart(2, "0")}.png`),
  },

answers: {
A: ["Answer 1", "Answer 2", "Answer 3" /* ... add more answers to match your images /],
B: ["Answer 1", "Answer 2", "Answer 3" / ... /],
C: ["Answer 1", "Answer 2", "Answer 3" / ... */],
},
};