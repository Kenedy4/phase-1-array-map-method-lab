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

function toTitleCase(str) {
  const specialCases = {
    oo: "OO",
    api: "API",
    nan: "NaN",
    stoppropagation: "stopPropagation",
    preventdefault: "preventDefault",
    jsonp: "JSONP",
  };

  return str
    .split(" ")
    .map(function (word) {
      const lowerCaseWord = word.toLowerCase();
      if (specialCases[lowerCaseWord]) {
        return specialCases[lowerCaseWord];
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

const titleCased = () => {
  return tutorials.map(toTitleCase);
};

console.log(titleCased());
