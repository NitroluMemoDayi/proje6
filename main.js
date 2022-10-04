let addToDoButton = document.getElementById('addToDo');
let clearToDoButton = document.getElementById("clearToDo");
let toDoContainer = document.getElementById('toDoContainer');
let inputText = document.getElementById('inputText');
let deletedİtems = document.getElementById('deleteditems');
addToDoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add("paragraph-style");
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";


    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration = "line-through";
    })
    

    paragraph.addEventListener("dblclick", function(){
        paragraph.style.display = "none";
    })


    clearToDoButton.addEventListener("click", function(){
        paragraph.remove();
    })
    

    deletedİtems.addEventListener("click", function(){
      
        paragraph.style.display = "block";
        paragraph.style.textDecoration = "none";
    })
});