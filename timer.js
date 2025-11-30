function countdown(n) {
  let time = n;
  const interval = setInterval(() => {
    console.log(time);
    time--;
    if (time < 0) {
      clearInterval(interval);
      console.log("Time's up!");
    }
  }, 1000);
}

// Example: countdown from 5 seconds
countdown(5);

