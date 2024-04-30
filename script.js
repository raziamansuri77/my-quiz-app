const htmlQuestions = [
  {
    question: "1. HTML stands for - ",

    options: [
      " HighText Machine Language",
      "HyperText and links Markup Language",
      "HyperText Markup Language",
      "None of these",
    ],
    answer: "HyperText Markup Language",
  },
  {
    question:
      "2. The correct sequence of HTML tags for starting a webpage is -",

    options: [
      "Head, Title, HTML, body",
      "HTML, Body, Title, Head",
      "HTML, Head, Title, Body",
      "HTML, Head, Title, Body",
    ],
    answer: "HTML, Head, Title, Body",
  },
  {
    question:
      "3. Which of the following element is responsible for making the text bold in HTML? ",
    options: ["<pre>", "<a>", " <b>", "  <br>"],
    answer: "<b>",
  },

  {
    question:
      "4. Which of the following tag is used for inserting the largest heading in HTML?   ",
    options: ["<h3>", "<h1>", "<h5>", "<h6>"],
    answer: "<h1>",
  },
  {
    question:
      "5. Which of the following tag is used to insert a line-break in HTML?  ",
    options: [" <br>", "<a>", "<pre>", "<b>"],
    answer: " <br>",
  },
  {
    question:
      "6. How to create an unordered list (a list with the list items in bullets) in HTML? ",
    options: ["<ul>", "  <ol>", "  <li>", "<i>"],
    answer: "<ul>",
  },
  {
    question:
      "7. How to create an ordered list (a list with the list items in numbers) in HTML?",
    options: ["<ul>", " <ol>", " <li>", "<i>"],
    answer: "<ol>",
  },
  {
    question: "8. <input> is -  ",
    options: [
      "a format tag.",
      " an empty tag.",
      "    All of the above",
      "None of the above",
    ],
    answer: " an empty tag.",
  },
  {
    question:
      "9. Which of the following tag is used to make the underlined text?  ",
    options: ["<i>", "  <ul>", " <u>", " <pre>"],
    answer: "<ul>",
  },
  {
    question:
      "10. Which of the following tag is used to define options in a drop-down selection list? ",
    options: ["<select>", " <list>", "     <dropdown>", "  <option>"],
    answer: "<option>",
  },
];
const cssQuestions = [
  {
    question: "1. CSS stands for -",

    options: [
      " Cascade style sheets",
      "  Color and style sheets",
      "Cascading style sheets",
      "None of the above",
    ],
    answer: "Cascading style sheets",
  },
  {
    question:
      "2. The property in CSS used to change the background color of an element is -",

    options: [" bgcolor", " color", "background-color", "All of the above"],
    answer: "background-color",
  },
  {
    question:
      "3. The property in CSS used to change the text color of an element is - ",
    options: [
      "   bgcolor",
      " color",
      "  background-color",
      "  All of the above",
    ],
    answer: "color ",
  },

  {
    question:
      "4. The CSS property used to control the element's font-size is -   ",
    options: ["text-style", "text-size ", " font-size", " None of the above "],
    answer: " font-size",
  },
  {
    question: "5. The HTML attribute used to define the inline styles is -",
    options: ["  style", "  styles  ", "   class", "  None of the above "],
    answer: "  style",
  },
  {
    question:
      "6. Which of the following CSS property is used to set the background image of an element? ",
    options: [
      "background-attachment",
      "background-image  ",
      " background-color",
      "None of the above  ",
    ],
    answer: "background-image",
  },
  {
    question:
      "7. Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow? ",
    options: [
      "p {background-color : yellow;}",
      " p {background-color : #yellow;} ",
      "all {background-color : yellow;} ",
      "all p {background-color : #yellow;}  ",
    ],
    answer: "p {background-color : yellow;}",
  },

  {
    question:
      "8. Which of the following CSS property is used to specify the space between every letter inside an element? ",
    options: [
      "alpha-spacing",
      " character-spacing ",
      " letter-spacing",
      " alphabet-spacing ",
    ],
    answer: "letter-spacing",
  },
  {
    question:
      "9.The CSS property used to specify whether the text is written in the horizontal or vertical direction? ",
    options: [
      "writing-mode",
      "text-indent  ",
      "word-break ",
      "None of the above  ",
    ],
    answer: "writing-mode",
  },
  {
    question: " 10.How to select the elements with the class name example ",
    options: [
      "    example",
      "    #example ",
      "   .example ",
      "    Class example ",
    ],
    answer: "   .example",
  },
];
const jsQuestions = [
  {
    question: "1.Which type of JavaScript language is ___ ",

    options: [
      " Object-Oriented",
      "  Object-Based",
      "Assembly-language",
      "High-level ",
    ],
    answer: "Object-Based",
  },
  {
    question:
      "2.Which one of the following also known as Conditional Expression:",

    options: [
      " Alternative to if-else",
      "Switch statement",
      "If-then-else statement",
      "immediate if",
    ],
    answer: "immediate if",
  },
  {
    question: "3     In JavaScript, what is a block of statement? ",
    options: [
      "Conditional block",
      "block that combines a number of statements into a single compound statement ",
      " both conditional block and a single statement",
      "block that contains a single statement",
    ],
    answer:
      "block that combines a number of statements into a single compound statement ",
  },

  {
    question:
      "4 When interpreter encounters an empty statements, what it will do:   ",
    options: [
      " Shows a warning",
      "    Prompts to complete the statement",
      " Throws an error",
      "   Ignores the statements ",
    ],
    answer: "  Ignores the statements",
  },
  {
    question: "5.The function and var are known as:  ",
    options: [
      " Keywords",
      " Data types",
      "  Declaration statements",
      "     Prototypess ",
    ],
    answer: " Declaration statements ",
  },
  {
    question:
      "6.) Choose the correct snippet from the following to check if the variable a is not equal the NULL-",
    options: [
      "  if(a!==null)",
      "   if (a!)",
      "  if(a!null) ",
      "    if(a!=null)  ",
    ],
    answer: "if(a!==null) ",
  },
  {
    question:
      "7. Suppose we have a text human that we want to convert into string without using the new operator. Which is the correct way from the following to do so:  ",
    options: [
      "toString()",
      "  String(human)",
      "  String newvariable=human ",
      " Both human.toString() and String(human)  ",
    ],
    answer: "Both human.toString() and String(human)  ",
  },
  {
    question:
      "8.In JavaScript, what will be used for calling the function definition expression:  ",
    options: [
      " Function prototype",
      " Function literal",
      " Function calling",
      " Function declaration ",
    ],
    answer: "Function literal ",
  },
  {
    question:
      "9.Which of the following one is the property of the primary expression:  ",
    options: [
      "Contains only keywords",
      "basic expressions containing all necessary functions",
      "contains variable references alone ",
      " stand-alone expressions ",
    ],

    answer: " stand-alone expressions ",
  },
  {
    question:
      "10.Which one of the following is used for the calling a function or a method in the JavaScript:  ",
    options: [
      " Property Access Expression",
      "Functional expression",
      "Invocation expression ",
      "  Primary expression  ",
    ],
    answer: "Invocation expression ",
  },
];
const pythonQuestions = [
  {
    question: "1. Is Python code compiled or interpreted?",

    options: [
      " Python code is both compiled and interpreted",
      " Python code is neither compiled nor interpreted",
      "Python code is only compiled",
      "Python code is only interpretedAns ",
    ],
    answer: " Python code is both compiled and interpreted",
  },
  {
    question: "2. What does pip stand for python?",

    options: [
      " Pip Installs Python",
      "Pip Installs Packages",
      " Preferred Installer Programd",
      "All of the mentioned",
    ],
    answer: "immediate if",
  },
  {
    question:
      "3. What will be the output of the following Python function?min(max(False,-3,-4), 2,7) ",
    options: [" -4", "-3", " 2", "False"],
    answer: "False",
  },

  {
    question: "4. What are the two main types of functions in Python?",
    options: [
      " System function",
      "    Custom function",
      " Built-in function & User defined function",
      "   User function ",
    ],
    answer: " Built-in function & User defined function",
  },
  {
    question: " 5. Is Python case sensitive when dealing with identifiers? ",
    options: ["No", " Yes", " Machine dependent", "    None of these"],
    answer: " Declaration statements ",
  },
  {
    question:
      " 6. Which of the following functions can help us to find the version of python that we are currently workingon?",
    options: [
      "   sys.version(1)",
      "  sys.version(0)",
      "  sys.version() ",
      "   sys.version ",
    ],
    answer: "if(a!==null) ",
  },
  {
    question:
      " 7. Python supports the creation of anonymous functions at runtime, using construct called  ",
    options: ["pi", "  anonymous", "   lambda ", " none of these "],
    answer: "   lambda ",
  },
  {
    question: " 8. What is the order of precedence in python? ",
    options: [
      " Exponential, Parentheses, Multiplication, Division, Addition, Subtraction",
      "Exponential, Parentheses, Division, Multiplication, Addition, Subtraction",
      " Parentheses, Exponential, Multiplication, Division, Subtraction, Addition",
      " Parentheses, Exponential, Multiplication, Division, Addition, Subtraction",
    ],
    answer:
      " Parentheses, Exponential, Multiplication, Division, Addition, Subtraction",
  },
  {
    question:
      "9. Which of the following is true for variable names in Python? ",
    options: [
      "underscore and ampersand are the only two special characters allowed",
      " unlimited length",
      "all private members must have leading and trailing underscores",
      " none of the mentioned ",
    ],

    answer: " unlimited length",
  },
  {
    question:
      " 10. Which of the following is the use of id() function in python? ",
    options: [
      " Every object doesn’t have a unique id",
      "Id returns the identity of the object",
      "All of the mentioned",
      " None of the mentioned ",
    ],
    answer: "Id returns the identity of the object",
  },
];

const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login_btn");
const userResultName = document.getElementById("user-result-name");
const categoryOptions = document.querySelectorAll(".category_options");
const categoryOption = document.querySelectorAll(".category_option");
const startQuizBtn = document.getElementById("start-quiz");
const quizContainer = document.getElementById("quiz");
const options = document.getElementById("options");
const questionAttempt = document.getElementById("question-attempt");
const percetage = document.getElementById("percetage");
const wrongAnswer = document.getElementById("wrong-answer");
const categoryName = document.getElementById("category-name");
let userNameDisplay = document.getElementById("user-name-display");

let currentQuestionIndex = 0;
let score = 0;
let timer;
let startTime;
let questions = [];
let selectedCategory = "";
let correctAnswer = 0;
let questionAttemptValue = 0;
let currentQuestion = 0;
let correctAnswerScore = 0;
let scoreIncrease = 0;
let questionAttemptScore = 0;
let wrongnAnswerScore = 0;
let percentageCalculate = 0;
// ------------------------------ startTimer--------------------------------------
function startTimer() {
  clearInterval(timer);
  let time = 10;
  let timerDisplay = document.getElementById("timer-display");
  timerDisplay.textContent = time;

  timer = setInterval(() => {
    time--;
    timerDisplay.textContent = time;
    if (time === 0) {
      clearInterval(timer);

      nextQuestion();
    }
  }, 1000);
}

// -------------------------------nextQuestion-----------------------------------------

function nextQuestion() {
  currentQuestionIndex++;

  if (
    currentQuestionIndex < htmlQuestions.length ||
    currentQuestionIndex < cssQuestions.length ||
    currentQuestionIndex < jsQuestions.length ||
    currentQuestionIndex < pythonQuestions.length
  ) {
    loadQuestion();
    startTimer();
  } else {
    showResult();
  }
}

// -------------------------------selectCategory------------------------------------

// ----------------------------------chapterQuiz1-------------------------------------

function chapterQuiz1() {
  document.getElementById("login_main").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  categoryName.textContent = "HTML Questions";
  questions = htmlQuestions;
  loadQuestion();
  startTimer();
}

// ----------------------------------chapterQuiz1-------------------------------------

function chapterQuiz2() {
  document.getElementById("login_main").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  categoryName.textContent = "CSS Questions";

  questions = cssQuestions;
  loadQuestion();
  startTimer();
}

// ----------------------------------chapterQuiz1-------------------------------------

function chapterQuiz3() {
  document.getElementById("login_main").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  categoryName.textContent = "JS Questions";

  questions = jsQuestions;
  loadQuestion();
  startTimer();
}

// ----------------------------------chapterQuiz1-------------------------------------

function chapterQuiz4() {
  document.getElementById("login_main").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  categoryName.textContent = "Python Questions";

  questions = pythonQuestions;
  loadQuestion();
  startTimer();
}
// ----------------------------------chapterQuiz1-------------------------------------
// ---------------------------------- loadQuestion-------------------------------------

function loadQuestion() {
  const questionDiv = document.getElementById("question");
  const optionsDiv = document.getElementById("options");
  const currentQuestionDisplay = document.getElementById("current-question");
  currentQuestionDisplay.textContent = currentQuestionIndex + 1;
  questionAttemptScore++;
  percentageCalculate = (score / questions.length) * 100;
  const currentQuestion = questions[currentQuestionIndex];
  questionDiv.textContent = currentQuestion.question;
  optionsDiv.innerHTML = "";
  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(button);
  });
}

// ----------------------------------checkAnswer-------------------------------------

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
    score++;
    correctAnswerScore++;
  } else {
    wrongnAnswerScore++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    clearInterval(timer);

    startTimer();
  } else {
    clearInterval(timer);
    showResult();
  }
}

// function userNameDisplayBtn() {
//   let userdata = username.value.trim();
//   userNameDisplay = userdata;
// }
// ----------------------------------showResult-------------------------------------

function showResult() {
  const resultDiv = document.getElementById("result");
  const scoreDisplay = document.getElementById("score");
  const correctAnswer = document.getElementById("correct-answer");
  scoreDisplay.textContent = `You scored ${score} out of ${questions.length}`;
  document.getElementById("quiz").classList.add("hidden");
  resultDiv.classList.remove("hidden");
  correctAnswer.textContent = `correct answers ${correctAnswerScore}`;
  questionAttempt.textContent = ` Total Attampt Questions: ${questionAttemptScore}`;
  wrongAnswer.textContent = `Wrong Answers: ${wrongnAnswerScore}`;
  percetage.textContent = `Percentage:${percentageCalculate.toFixed(2)}%`;
  // function login() {
  //   let userData = username.value.trim();
  //   userResultName.textContent = `Hello ${userData}`;
  // }
}

function calculatePercentage() {
  let percetageCalculate = (correctAnswer / 10) * 100;
  percetage.textContent = percetageCalculate;
}
function restart() {
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 10;
  clearInterval(timer);
  document.getElementById("result").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  startTimer();
  loadQuestion();
}
function home() {
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 10;
  clearInterval(timer);
  document.getElementById("result").classList.add("hidden");
  document.getElementById("login_main").classList.remove("hidden");
  startTimer();
  loadQuestion();
}
function login() {
  let userData = username.value.trim();
  userNameDisplay.textContent = `Hello ${userData}`;

  userResultName.textContent = ` ${userData} your result is`;
  username.value = "";
}
