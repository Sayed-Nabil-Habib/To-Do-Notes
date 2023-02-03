const noteInput = document.querySelector("#note-input");
const addNote = document.querySelector("#add-note");
const removeNote = document.querySelector("#remove-note");
const notes = document.querySelector("#notes");



addNote.onclick = function(){
  notes.innerHTML += `<li>${noteInput.value}</li>`

  const listItem = document.querySelectorAll("li");

    listItem.forEach(function(li){
    li.onclick = function(event){
      event.target.classList.toggle("checked-off")
    }
      

})}
removeNote.onclick =function(){
  notes.innerHTML ="";
}