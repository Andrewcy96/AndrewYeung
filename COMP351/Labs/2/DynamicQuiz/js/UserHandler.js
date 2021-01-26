
function submit()
{
    // created an empty array and added the anwers 
    let correctAnswers = []
    for(i =0; i < quiz.length; i++)
    {
        correctAnswers.push(getSelection(document.getElementById(i).getElementsByTagName("input")))
    }
    // created an array with the students answers inside 
    studAnswers = getSolution(quiz)
    if(isEqual(studAnswers,correctAnswers)){
       alert("you got 100%")
    }
    else{// wasnt sure how to compare and highlight the right and wrong answers
       document.getElementById("div").innerHTML
    }
}
document.getElementById("Submit").onclick = submit;
