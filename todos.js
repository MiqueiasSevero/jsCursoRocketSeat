
let ulElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');


let todos = JSON.parse(localStorage.getItem('list_todos')) || [];


function renderTodos(){

   ulElement.innerHTML = '';
  for(todo of todos){


    let todoElement = document.createElement('li');
    let todoText = document.createTextNode(todo);

    //LINK
    var linkElement = document.createElement('a');

    linkElement.setAttribute('href','#');

    //garda cria um index para item conforme a posião dele no array 
    let pos  = todos.indexOf(todo); 
    linkElement.setAttribute('onclick','deletarTodos('+ pos +')');
    //

    var linkText = document.createTextNode('Excluir');

    linkElement.appendChild(linkText);
    //
    

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    ulElement.appendChild(todoElement);
  }
}


renderTodos();

function addTodo() {
  let todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = '';
  renderTodos();
  saveToStorage();
}


buttonElement.onclick = addTodo;


function deletarTodos(pos){
   todos.splice(pos, 1);
   renderTodos();
   saveToStorage();



}

function saveToStorage(){


  localStorage.setItem('list_todos',JSON.stringify(todos)); 
}