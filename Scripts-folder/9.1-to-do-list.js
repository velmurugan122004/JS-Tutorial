const todolist=[];//empty array

function addtodo()
{
  const inputElement=document.querySelector('.js-name-input1');

  const name=inputElement.value;

  console.log(name);

  todolist.push(name);

  console.log(todolist);

  inputElement.value='';
}