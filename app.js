/*
// Example quiz object might look like:
var QUIZ = [
    {
        title: "Question 1",
        questionText: "What is the 3rd letter in the alphabet?",
        answers: [
            {text: "a", correct: false},
            {text: "b", correct: false},
            {text: "c", correct: true},
            {text: "d", correct: false}
        ],
        userAnswer: ""
    },
    {
        title: "Question 2",
        questionText: "How many licks to the center of a tootsie pop?",
        answers: [
            {text: "3", correct: true},
            {text: "682", correct: false},
            {text: "841", correct: false},
            {text: "1000", correct: false},
        ],
        userAnswer: ""
    }
]
*/
var QUIZ = [
    {
        title: "Question 1",
        questionText: "What is the 3rd letter in the alphabet?",
        answers: [
            {text: "B", correct: false},
            {text: "C", correct: true},
            {text: "D", correct: false},
            {text: "A", correct: false}
        ],
        userAnswer: ""
    },
    {
        title: "Question 2",
        questionText: "How many licks to the center of a tootsie pop?",
        answers: [
            {text: "Barrack Obama", correct: true},
            {text: "Benjamin Franklin", correct: false},
            {text: "Joe Biden", correct: false},
            {text: "John Adams", correct: false},
        ],
        userAnswer: ""
    },
    {
        title: "Question 3",
        questionText: "How many licks to the center of a tootsie pop?",
        answers: [
            {text: "3", correct: true},
            {text: "682", correct: false},
            {text: "841", correct: false},
            {text: "July 4th", correct: false},
        ],
        userAnswer: ""
    },
    {
        title: "Question 4",
        questionText: "How many licks to the center of a tootsie pop?",
        answers: [
            {text: "3", correct: true},
            {text: "682", correct: false},
            {text: "841", correct: false},
            {text: "1000", correct: false},
        ],
        userAnswer: ""

    },
    {
        title: "Question 5",
        questionText: "How many licks to the center of a tootsie pop?",
        answers: [
            {text: "3", correct: true},
            {text: "682", correct: false},
            {text: "841", correct: false},
            {text: "1000", correct: false},
        ],
        userAnswer: ""

    }
]



var app = new Vue({
    el: "#app",
    data:{
        // to attach your global quiz variable to a data variable:
        // myQuiz: QUIZ,
        myquiz: QUIZ,
        page: "welcome_page",
        questionOne: '',
        questionTwo: '',
        questionThree:'',
        score: 0
    },
    methods:{
        // used for showing questions individually
        nextQuestion : function () {},

        // used for showing questions individually
        previousQuestion : function () {},

        setPage: function (page) {
            this.page = page;
        },
        checkAnswer: function() {
            if (this.questionOne == QUIZ[0].answers[1].text) {
            console.log('correct');
            this.score ++;
            console.log("score", this.score);
            };
            if (this.questionTwo == QUIZ[1].answers[3].text){
                console.log('correct');
                this.score ++;
                console.log("score", this.score);
            };
            if (this.questionThree = QUIZ[0].answers[3].text) {
                console.log('correct');
                this.score ++;
                console.log('score', this.score);
            }
        },
        
        calculateScore: function () {
        }
    },
    computed: {
        // a function that returns true if 0 userAnswer fields are blank ("")
        // IF there is still 1 or more blank ("") userAnswer field, return false
        areAllQuestionsAnswered: function () {}
    }
});