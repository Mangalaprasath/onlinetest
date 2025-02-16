const questions = [
    { question: "What is the output of `print(2 ** 3)`?", options: ["6", "8", "9"], answer: "8" },
    { question: "Which keyword is used to define a function?", options: ["def", "func", "define"], answer: "def" },
    { question: "Which data type is mutable?", options: ["Tuple", "List", "String"], answer: "List" },
    { question: "Which keyword defines a class?", options: ["class", "Class", "define"], answer: "class" },
    { question: "How do you check string length?", options: ["length(s)", "size(s)", "len(s)"], answer: "len(s)" },
    { question: "How do you declare a dictionary?", options: ["dict = {}", "dict[]", "dictionary()"], answer: "dict = {}" },
    { question: "Which of these is not a Python keyword?", options: ["elif", "switch", "yield"], answer: "switch" },
    { question: "What is the output of `bool([])`?", options: ["True", "False", "Error"], answer: "False" },
    { question: "What will `print(10 // 3)` output?", options: ["3.33", "3", "4"], answer: "3" },
    { question: "Which method adds an element to a list?", options: ["append()", "add()", "insert()"], answer: "append()" },
    { question: "What is the default function return value?", options: ["0", "None", "False"], answer: "None" },
    { question: "How do you open a file?", options: ["open()", "file()", "read()"], answer: "open()" },
    { question: "How do you create a tuple?", options: ["tuple()", "{}", "[]"], answer: "tuple()" },
    { question: "What does `print(5 % 2)` output?", options: ["2", "1", "5"], answer: "1" },
    { question: "What does `range(5)` return?", options: ["[0,1,2,3,4]", "[1,2,3,4,5]", "[0,1,2,3,4,5]"], answer: "[0,1,2,3,4]" },
    { question: "Which function converts to an integer?", options: ["int()", "str()", "float()"], answer: "int()" },
    { question: "Which operator is used for exponentiation?", options: ["^", "**", "*"], answer: "**" },
    { question: "What does `max([1,2,3])` return?", options: ["1", "2", "3"], answer: "3" },
    { question: "How do you write comments?", options: ["#comment", "//comment", "/*comment*/"], answer: "#comment" },
    { question: "What is an `iterable`?", options: ["A function", "An object that can be looped over", "A variable"], answer: "An object that can be looped over" },
    { question: "Which function returns the absolute value?", options: ["abs()", "absolute()", "fabs()"], answer: "abs()" },
    { question: "What does `list(set([1,2,2,3]))` return?", options: ["[1,2,3]", "[1,2,2,3]", "[1,1,2,3]"], answer: "[1,2,3]" },
    { question: "Which function converts a string to lowercase?", options: ["lower()", "low()", "tolower()"], answer: "lower()" },
    { question: "How do you handle exceptions in Python?", options: ["try-except", "catch-try", "error handling"], answer: "try-except" },
    { question: "Which Python module is used for working with random numbers?", options: ["random", "math", "numbers"], answer: "random" },
    { question: "How do you remove the last element from a list?", options: ["pop()", "remove()", "del"], answer: "pop()" },
    { question: "Which function is used to sort a list?", options: ["sort()", "sorted()", "order()"], answer: "sort()" },
    { question: "Which keyword is used for defining an infinite loop?", options: ["while True", "for forever", "loop()"], answer: "while True" },
    { question: "How do you check if a key exists in a dictionary?", options: ["in", "exists", "has_key()"], answer: "in" },
    { question: "Which keyword is used to exit a loop early?", options: ["continue", "exit", "break"], answer: "break" },
    { question: "What does `map()` function do?", options: ["Applies a function to an iterable", "Joins lists", "Sorts lists"], answer: "Applies a function to an iterable" },
    { question: "What is the purpose of `self` in a class?", options: ["It refers to the instance of the class", "It is a built-in function", "It is used for inheritance"], answer: "It refers to the instance of the class" },
    { question: "Which data type is immutable?", options: ["List", "Dictionary", "Tuple"], answer: "Tuple" },
    { question: "Which module is used for working with dates?", options: ["datetime", "time", "calendar"], answer: "datetime" },
    { question: "Which method removes a specific element from a list?", options: ["pop()", "delete()", "remove()"], answer: "remove()" },
    { question: "How do you write a multi-line comment in Python?", options: ["'''comment'''", "// comment", "/* comment */"], answer: "'''comment'''" },
    { question: "Which function returns the smallest value from a list?", options: ["min()", "smallest()", "least()"], answer: "min()" },
    { question: "What will `print(10 > 5 and 5 < 2)` return?", options: ["True", "False", "Error"], answer: "False" },
    { question: "Which function is used to generate a sequence of numbers?", options: ["range()", "seq()", "numbers()"], answer: "range()" },
    { question: "Which built-in function returns the type of an object?", options: ["typeof()", "type()", "instanceof()"], answer: "type()" },
    { question: "Which symbol is used for single-line comments in Python?", options: ["#", "//", "--"], answer: "#" },
    { question: "How do you read user input in Python?", options: ["input()", "read()", "scan()"], answer: "input()" },
    { question: "What is the default value of an uninitialized variable in Python?", options: ["None", "0", "Undefined"], answer: "None" },
    { question: "Which method is used to split a string into a list?", options: ["split()", "divide()", "partition()"], answer: "split()" },
    { question: "Which of these is used for iteration?", options: ["for", "foreach", "loop"], answer: "for" },
    { question: "Which function returns the length of a list?", options: ["count()", "length()", "len()"], answer: "len()" },
    { question: "What will `print(10 == '10')` output?", options: ["True", "False", "Error"], answer: "False" }
];


const questionContainer = document.getElementById("questions");

// Display questions dynamically
questions.forEach((q, index) => {
    let div = document.createElement("div");
    div.classList.add("question");
    div.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
    q.options.forEach(opt => {
        div.innerHTML += `<label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label><br>`;
    });
    questionContainer.appendChild(div);
});

// Timer (60 minutes)
let timeLeft = 1600;
function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById("timer").innerText = `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    if (timeLeft === 0) submitQuiz();
    timeLeft--;
}
setInterval(updateTimer, 1000);

// Submit quiz & calculate score
function submitQuiz() {
    let score = 0;

    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });

    localStorage.setItem("quizScore", score);
    window.location.href = "result.html";
}