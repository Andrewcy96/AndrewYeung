function save()
{
    fill(quizQuestion, 
        document.getElementById("question").value,
        document.getElementById("A").value,
        document.getElementById("B").value,
        document.getElementById("C").value,
        document.getElementById("D").value,
        getSolution());

document.getElementById("save").innerHTML = "Saved";
setTimeout(function()
{
    document.getElementById("save").innerHTML = "Changes Saved";
},1000);

}
document.getElementById("save").onclick = save;


function add() {
    let stack = JSON.parse(localStorage.getItem("quiz"));
    stack.push(quizQuestion);

    stack = JSON.stringify(stack);

    localStorage.setItem("quiz", stack);
    
    updateQuestionNum()

    document.getElementById("add").innerHTML = "Added";
    setTimeout(function() {
        document.getElementById("add").innerHTML = "Add";
    }, 1000);
}
document.getElementById("add").onclick = add;

function deleteButtonHandler() 
{
    let stack = JSON.parse(localStorage.getItem("quiz"));
    stack.pop();
    stack = JSON.stringify(stack);
    localStorage.setItem("quiz", stack);
    updateQuestionNum()

    document.getElementById("delete").innerHTML = "Deleted";
    setTimeout(function() {
        document.getElementById("delete").innerHTML = "Delete";
    }, 1000);
}
document.getElementById("delete").onclick = deleteButtonHandler;

