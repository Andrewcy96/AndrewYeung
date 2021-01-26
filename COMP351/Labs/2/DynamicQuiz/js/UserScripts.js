let quiz = JSON.parse(localStorage.getItem("quiz"))

function isEqual(x,y)
{
    if(x===y) 
    return true
}

function getSolution(quiz)
{
    let answers = [];
    for(i=0; i < quiz.length; i++)
    {
        answers.push(quiz[i].solution)
    }
    return answers;
}
function getSelection(div) 
{
    for (i = 0; i < 4; i++)
     {
        if (div[i].checked) 
        {
            return i + 1;
        }
    }
}
// here i made the function show the error message if the quiz length was 0 ie the quiz is empty
function getQuestions(){
    if(quiz.length == 0)
    {
        let div = document.createElement("div")
        let h1 = document.createElement("h1");
        h1.innerHTML = "quiz is empty"
        div.appendChild(h1)
        document.body.appendChild(div)
    }
    // the only way i knew how to dynamically create divs was to use a for loop and append the child into each div then append the div into the body
    for(i =0; i < quiz.length; i++)
    {
        let div = document.createElement("div")
        div.id = i
        let question = document.createElement("p")   

        let radio1 = document.createElement("input")
        let radio2 = document.createElement("input")
        let radio3 = document.createElement("input")
        let radio4 = document.createElement("input")

        let A = document.createElement("label")
        let B = document.createElement("label")
        let C = document.createElement("label")
        let D = document.createElement("label")

        question.textContent = quiz[i].question
        div.appendChild(question);

        radio1.type = "radio"
        radio1.id = "radio1"

        radio2.type = "radio"
        radio2.id = "radio2"

        radio3.type = "radio"
        radio3.id = "radio3"

        radio4.type = "radio"
        radio4.id = "radio4"

        radio1.setAttribute("name" , i);
        radio2.setAttribute("name" , i);
        radio3.setAttribute("name" , i);
        radio4.setAttribute("name" , i);

        A.setAttribute("for" , i);
        B.setAttribute("for" , i);
        C.setAttribute("for" , i);
        D.setAttribute("for" , i);
 
        div.appendChild(radio1)
        A.innerHTML = quiz[i].A
        div.appendChild(A);
        div.appendChild(document.createElement("br"))
       
        div.appendChild(radio2)
        B.innerHTML = quiz[i].B
        div.appendChild(B);
        div.appendChild(document.createElement("br"))

        div.appendChild(radio3)
        C.innerHTML = quiz[i].C
        div.appendChild(C);
        div.appendChild(document.createElement("br"))

        div.appendChild(radio4)
        D.innerHTML = quiz[i].D
        div.appendChild(D);
        div.appendChild(document.createElement("br"))

        document.body.appendChild(div)
    }
}


