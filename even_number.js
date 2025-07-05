// Even Number Check - JavaScript mein sabse simple way

// Method 1: Single number check karna
function isEven(number) {
    return number % 2 === 0;
}

// Test karte hain
console.log("=== Single Number Check ===");
console.log("4 is even:", isEven(4));     // true
console.log("7 is even:", isEven(7));     // false
console.log("10 is even:", isEven(10));   // true

// Method 2: Array mein se even numbers find karna
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("\n=== Array se Even Numbers ===");
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Original array:", numbers);
console.log("Even numbers:", evenNumbers);

// Method 3: 1 se 20 tak ke even numbers print karna
console.log("\n=== 1 se 20 tak Even Numbers ===");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    }
}

// Method 4: User input ke liye (Node.js mein)
function checkUserNumber(userInput) {
    if (userInput % 2 === 0) {
        return `${userInput} ek even number hai!`;
    } else {
        return `${userInput} ek odd number hai!`;
    }
}

console.log("\n=== User Input Example ===");
console.log(checkUserNumber(12));
console.log(checkUserNumber(15));