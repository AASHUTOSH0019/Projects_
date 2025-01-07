const Inputs = document.getElementById("inputs");
const Addlist = document.getElementById("lists");

function AddTask(){
    if(Inputs.value === ""){
        alert("You Need To Write Something!")
    }
    else 
    {
        let Todo = document.createElement("li");
Todo.innerHTML = Inputs.value;
Addlist.appendChild(Todo);
let span = document.createElement("span");
span.innerHTML = "\u00d7";
Todo.appendChild(span);
    }
    Inputs.value = "";
    SaveData();
}
Addlist.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        SaveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        SaveData();
    }
   
}, false)
function SaveData(){
    localStorage.setItems("data", Addlist.innerHTML);
}
function showdata(){
    Addlist.innerHTML =  localStorage.getItems("data");
} 
showdata();