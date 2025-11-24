function isPrime(num) {
    // Handle edge cases
    if (num <= 1) return false;
    if (num === 2) return true;

    // Check divisibility up to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Example usage:
console.log(isPrime(2));   // true
console.log(isPrime(15));  // false
console.log(isPrime(17));  // true
