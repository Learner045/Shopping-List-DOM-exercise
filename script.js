var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  var btn = addSingleButton();
  li.appendChild(btn);
  btn.addEventListener("click", deleteEl);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//DELETE LI ITEM
function deleteEl(event){

  var tg = event.target; //buttn child which was clicked
  var parent = tg.parentElement;//li 
  //console.log("del "+parent);

  parent.remove();
}


//ADD BUTTON
function addSingleButton(){
  var btn = document.createElement("button");
  btn.appendChild(document.createTextNode("delete"));
  return btn;
}

function addButton(){
  for(var i =0; i<li.length; i++){

    var btn = addSingleButton();
    li[i].appendChild(btn);
    btn.addEventListener("click",deleteEl);
  }
}

addButton();

//ADD .done 
function toggle(event){
	 //if list item has class done, then remove it..else give it that class
   var li = event.target;
   
   var c = li.classList;
 
	 if(c.length>0 ){

     li.classList.remove("done");
     console.log("remove");
	 } else{
     li.classList.add("done");
     console.log("add");
	 }

}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggle);


