const todolist=[];//empty array

const list=[];
looptodisplay();
function addtodo()
{
  const inputElement=document.querySelector('.js-name-input1');

  const name=inputElement.value;

  console.log(name);

  todolist.push(name);

  console.log(todolist);

  inputElement.value='';//after enter input label to free
}
function looptodisplay()
{
  let todolistHTML='';

  for(let i=0;i<list.length;i++)
  {
    const todo=list[i];
    const html=`<p>${todo}</p>`; //generating html uing javascript
    todolistHTML+=html;
  }
  console.log(todolistHTML);

  document.querySelector('.js-display-output').innerHTML=todolistHTML;
}
function addpractice()
{
  const input=document.querySelector('.js-name-input2');
  list.push(input.value);
  console.log(list);

  input.value='';
  looptodisplay();
}

