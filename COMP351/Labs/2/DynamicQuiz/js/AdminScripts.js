let quizQuestion = {
    // created an array quizQuestion 
    question: "",
    A: "",
    B: "",
    C: "",
    D: "",
    solution: "",
};
// created a fill function 
function fill(qq,q,a,b,c,d,s){
    qq.question = q;
    qq.A = a;
    qq.B = b;
    qq.C = c;
    qq.D = d;
    qq.solution = s
}
if (localStorage.getItem("quiz") === null) {
    localStorage.setItem("quiz", "[]");
}
// here i checked which radio button was displayed
function getSolution() {
    if (document.getElementById("radio1").checked) {
        return 1;
    } else if (document.getElementById("radio2").checked) {
        return 2;
    } else if (document.getElementById("radio3").checked) {
        return 3;
    } else if (document.getElementById("radio4").checked) {
        return 4;
    }
}

function updateQuestionNum(){
    if (JSON.parse(localStorage.getItem("quiz")).length > 0) {
        document.getElementById("num").innerHTML = "Question " + JSON.parse(localStorage.getItem("quiz")).length
    }
}
