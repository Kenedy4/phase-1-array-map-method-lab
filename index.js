const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  return tutorials.map((tutorial) => {
    // Split each tutorial title into an array of words
    return tutorial
      .split(" ")
      .map((word) => {
        //Capitalize the first letter for each word and contactnates with the rest of the string
        return word.charAt(0).toUpperCase() + word.slice(1);
        // Join the array of with the first words uppercased to a single string.
      })
      .join(" ");
  });
};
// call the function to test it
console.log(titleCased());
