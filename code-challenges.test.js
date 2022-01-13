// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// Pseudo code:
// Create a function takes an array and remove the first item from the array and shuffles remaining content
// Use the following mutators:
//    .shift - to remove the zeroth index ot the array
//    .shuffle() method - to shuffle array


describe("hue", () => {
    var colors1 = ["purple", "blue", "green", "yellow", "pink"]
    var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]

    it("removes the first item from the array and shuffles the remaining content", () => {
        expect(hue(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]));

        expect(hue(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre",]));
    })
})

// b) Create the function that makes the test pass.

const hue = (arr) => {
    arr.shift()
    return arr.sort((a, b) => 0.5 - Math.random())
}


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

// var nums1 = [3, 56, 90, -8, 0, 23, 6]
// // Expected output: [-8, 90]
// var nums2 = [109, 5, 9, 67, 8, 24]
// // Expected output: [5, 109]



describe("cat", () => {
    var nums1 = [3, 56, 90, -8, 0, 23, 6]
    var nums2 = [109, 5, 9, 67, 8, 24]

    it("takes an array of numbers.", () => {
        expect(cat(nums1)).toEqual([-8, 90]);
        expect(cat(nums2)).toEqual([5, 109]);
    })
})

// Pseudo code:
// create an array that takes in numbers


// b) Create the function that makes the test pass.
const cat = (arr) => {
    return (sum(...numbers))
}
// This fuction is returing an error, not sure what I am doing wrong. Please advise.


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]


describe("scream", () => {
    var testArray1 = [3, 7, 10, 5, 4, 3, 3]
    var testArray2 = [7, 8, 2, 3, 1, 5, 4]

    it("take in two array arguments", () => {
        expect(scream(testArray1)).toEqua[3, 7, 10, 5, 4, 8, 2, 1];
    })
})

// b) Create the function that makes the test pass.

let scream1 = [3, 7, 10, 5, 4, 3, 3]
let scream2 = [7, 8, 2, 3, 1, 5, 4]
let scream3 = scream1.concat(scream2);

const holler = (arr) => {
    return scream3 = [...new Set([...scream1, ...scream2])];
}
// Please advise on this set up.