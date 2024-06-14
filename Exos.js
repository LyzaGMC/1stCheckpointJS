// I. String manipulation function
// I.1.Reverse a string 
function reverseString(str) {
    let reversedStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    return reversedStr;
}

//For Example:
console.log(reverseString("Lyza"));
console.log(reverseString("Bouabib"));

//I.2.Count Characters 
function countCharacters(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        count++;
    }

    return count;
}

// For Example :
console.log(countCharacters("Lyza")); 
console.log(countCharacters("Bouabib")); 

//I.3. Capitalize Words
function capitalizeWords(sentence) {
    let words = sentence.split(" ");
    let capitalizedSentence = "";

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let firstLetterCapitalized = word[0].toUpperCase();
        let restOfWord = word.slice(1);
        capitalizedSentence += firstLetterCapitalized + restOfWord + " ";
    }

    return capitalizedSentence.trim();
}

// For Example:
console.log(capitalizeWords("lyza bouabib")); 

//-----------------------------------------------------------------------------------------------------------------------//

//II.Array Functions
//II.1.Find Maximum and Minimum
function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

// For Example:
let numbers = [40, 25, 7, 8, 5];
console.log(sumArray(numbers));  


// II.2. Sum of Array
function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

// For Example:
console.log(sumArray([3, 8, 40, 2, 90]));


//II.3.Filter Array
function filterArray(arr, condition) {
    var filteredArray = [];

    for (var i = 0; i < arr.length; i++) {
        if (condition(arr[i])) {
            filteredArray.push(arr[i]);
        }
    }

    return filteredArray;
}

// Example usage:
var numbers = [4, 10, 9, 7, 8];
var filteredNumbers = filterArray(numbers, function(num) {
    return num % 2 === 0; // Filters out even numbers
});
console.log(filteredNumbers);  

//-------------------------------------------------------------------------------------------------------------------//

//III. Mathematical Functions
//III.1.Factorial
function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}

//For Example:
console.log(factorial(8)); // Output: 120 (8! = 8*7*6*5*4*3*2*1 = 120)
console.log(factorial(0)); // Output: 1 (0! is defined as 1)
console.log(factorial(1)); // Output: 1 (1! is defined as 1)


//III.2.Prime Number Check
function Prime(number) {
    if (number <= 1) {
        return false; // 
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false; // Found a factor, so the number is not prime
        }
    }

    return true; // No factors found, so the number is prime
}

// For Example:
console.log(Prime(7)); // Output: true (7 is a prime number)
console.log(Prime(12)); // Output: false (12 is not a prime number)


//III.3. Fibonacci Sequence
function fibonacciSequence(terms) {
    let sequence = [];

    if (terms >= 1) {
        sequence[0] = 0;
    }
    if (terms >= 2) {
        sequence[1] = 1;
    }

    for (let i = 2; i < terms; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }

    return sequence;
}

//For Example :
console.log(fibonacciSequence(5)); // Output: [0, 1, 1, 2, 3]
console.log(fibonacciSequence(30)); // Output: [0, 1, 1, 2,3 ,5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229]