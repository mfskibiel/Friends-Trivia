$("#start").on("click", function () {
    game.start();
})

$(document).on("click", "#end", function () {
    game.done();
})

var questionsArray = [{
    question: "Which two characters are brother and sister?",
    answers: ["Joey and Rachel", "Ross and Phoebe", "Ross and Monica", "Joey and Monica"],
    correctAnswer: "Ross and Monica"
}, {
    question: "What is Joey's favorite food that is often mentioned through the show?",
    answers: ["sandwiches", "pizza", "chicken wings", "all of the above, Joey loves all foods."],
    correctAnswer: "all of the above, Joey loves all foods."
}, {
    question: "What is the name of the coffee shop where the 'friends' often hang out?",
    answers: ["Central Perk", "New York Coffee Company", "World's Best Coffee", "Park Coffee Shop"],
    correctAnswer: "Central Perk"
}, {
    question: "Which of the following is not a song written by Phoebe?",
    answers: ["Ode to a Pubic Hair", "Smelly Cat", "Grandma's Jingle", "Sticky Shoes"],
    correctAnswer: "Grandma's Jingle"
}, {
    question: "What is Ross Geller's Job?",
    answers: ["Paleontologist", "Anthroplogist", "Biologist", "Chemist"],
    correctAnswer: "Paleontologist"
}, {
    question: "Chandler Bing's crazy annoying ex girlfriend is named:",
    answers: ["Janice", "Katie", "Monica", "Kathy"],
    correctAnswer: "Janice",
}, {
    question: "Where has Rachel worked?",
    answers: ["Bloomingdales", "the coffee shop", "Ralph Lauren", "all the above"],
    correctAnswer: "all the above"
}, {
    question: "Which character is infamously known for being fat throughout childhood and high school?",
    answers: ["Chandler", "Joey", "Monica", "Phoebe"],
    correctAnswer: "Monica"
}]

var game = {
    correct: 0,
    incorrect: 0,
    counter: 20,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter); //need to create this
        if (game.counter <= 0) {
            console.log("Time is up!!");
            game.done();
        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $("#subwrapper").prepend("<h2>Time Remaining: <span id='counter'>120</span> Seconds </h2>")
        $("#start").remove();
        for (let i = 0; i < questionsArray.length; i++) {
            $("#subwrapper").append("<h2>" + questionsArray[i].question + "</h2>");
            for (let y = 0; y < questionsArray[i].answers.length; y++) {
                $("#subwrapper").append("<input type='radio' name='question-" + i + "' value='" + questionsArray[i].answers[y] + "'>" + questionsArray[i].answers[y])
            }
        }
        $("#subwrapper").append("<br><button id='end'>DONE</button>")
    },
    done: function () {
        $.each($("input[name='question-0]':checked"), function () {
            if ($(this).val() == questionsArray[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1]':checked"), function () {
            if ($(this).val() == questionsArray[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2]':checked"), function () {
            if ($(this).val() == questionsArray[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3]':checked"), function () {
            if ($(this).val() == questionsArray[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4]':checked"), function () {
            if ($(this).val() == questionsArray[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5]':checked"), function () {
            if ($(this).val() == questionsArray[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6]':checked"), function () {
            if ($(this).val() == questionsArray[6].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-7]':checked"), function () {
            if ($(this).val() == questionsArray[7].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
    },
    result: function () {
        clearInterval(timer);
        $("#subwrapper h2").remove();

        $("#subwrapper").html("<h2>All done!</h2>")
        $("#subwrapper").append("<h3>Correct Answers: " + this.correct + "</h3>");
        $("#subwrapper").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        $("#subwrapper").append("<h3>Unanswered: " + (questionsArray.length - (this.incorrect + this.correct)) + "</h3>");
    }
}