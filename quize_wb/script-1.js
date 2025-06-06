const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    answer: "Delhi",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "What is the largest planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Jupiter",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Shakespeare", "Hemingway", "Tolstoy", "Dickens"],
    answer: "Shakespeare",
  },
  {
    question: "What color do you get mixing red and white?",
    options: ["Pink", "Purple", "Orange", "Brown"],
    answer: "Pink",
  },
  // Add more questions as needed, 10 total recommended
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreBox = document.getElementById("scoreBox");
const quizBox = document.getElementById("quizBox");
const scoreResult = document.getElementById("scoreResult");

function loadQuestion() {
  nextBtn.disabled = true;
  const q = questions[currentQuestionIndex];
  questionEl.textContent = q.question;

  optionsEl.innerHTML = "";
  q.options.forEach((option) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.addEventListener("click", () => selectAnswer(li, option));
    optionsEl.appendChild(li);
  });
}

function selectAnswer(selectedLi, selectedOption) {
  // Disable all options after answer selection
  Array.from(optionsEl.children).forEach((li) => {
    li.style.pointerEvents = "none"; // Disable further clicks
    if (li.textContent === questions[currentQuestionIndex].answer) {
      li.classList.add("correct");
    }
  });

  if (selectedOption === questions[currentQuestionIndex].answer) {
    score++;
    selectedLi.classList.add("correct");
  } else {
    selectedLi.classList.add("wrong");
  }

  nextBtn.disabled = false; // Enable Next button
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions.length) {
    showScore();
  } else {
    loadQuestion();
  }
}

function showScore() {
  quizBox.style.display = "none";
  scoreBox.style.display = "block";
  scoreResult.textContent = score;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreBox.style.display = "none";
  quizBox.style.display = "block";
  loadQuestion();
}

// Load the first question on page load
loadQuestion();
