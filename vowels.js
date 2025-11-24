// Function to count vowels in a string
function countVowels(str) {
    // Define vowels
    let vowels = "aeiouAEIOU";
    let count = 0;

    // Loop through each character
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Example usage:
let text = "Hello World";
console.log("Number of vowels:", countVowels(text));
