const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don’t let yesterday take up too much of today.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "If you are working on something exciting, it will keep you motivated."
];

// Pick a random quote
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

console.log(randomQuote);

