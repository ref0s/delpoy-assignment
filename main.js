// sum an array of numbers
const sumArray = (arr) => {
    return arr.reduce((sum, num) => sum + num, 0)
}
console.log("a function to sum an arry of numbers:")
console.log("sum of (1,2,3,4): ", sumArray([1, 2, 3, 4]));
console.log("sum of (10, 12, 67, -12, 6): ", sumArray([10, 12, 67, -12, 6]));

// print names > 4
const longNames = (names) => {
    return names.filter((name) => typeof name === "string" && name.length > 4); // make sure it is string
}
console.log("a function to print names more than 4 characters:")
console.log(["Ali", "Sarah", "Omar", "Mohammed"], longNames(["Ali", "Sarah", "Omar", "Mohammed"]));



function countWords(str) {

    let trimmed = str.trim();
    if (trimmed === "") return;

    let words = trimmed.split(/\s+/); // to split based on one space, 2, 3, tabs, spaces, mix, whatever 
    let counts = {};

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (counts[word]) {
            counts[word] += 1;
        } else {
            counts[word] = 1;
        }
    }

    return counts;
}
console.log('printing word count:')
console.log("word count for (hello world hello)", countWords("hello world hello"));
console.log("word count for (   hi   hi   test   )", countWords("   hi   hi   test   "));

