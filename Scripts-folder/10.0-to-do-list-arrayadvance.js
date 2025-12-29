/*const todolist=[];//empty array


looptodisplay(todolist);
function addtodo()
{
  const inputElement=document.querySelector('.js-name-input1');

  const name=inputElement.value;

  console.log(name);

  todolist.push(name);

  console.log(todolist);

  inputElement.value='';//after enter input label to free
  looptodisplay(todolist);//display enter data
}


function looptodisplay(list)
{
  let todolistHTML='';

  for(let i=0;i<list.length;i++)
  {
    const todo=list[i];
    const html=`<p>
                  ${todo}
                  <button onclick=" 
                    deleteTodo(${i},list);
                    looptodisplay(list);
                  ">Delete</button>
                </p>`; //generating html uing javascript
    todolistHTML+=html;
  }
  console.log(todolistHTML);

 document.querySelector('.js-display-output').innerHTML=todolistHTML;

  
}

const list=[];//econd todolist
function addpractice()
{
  const input=document.querySelector('.js-name-input2');
  list.push(input.value);
  console.log(list);

  input.value='';
  looptodisplay(list);
}
*/
const list1=[];//empty list of practice3
//list1.name='';
//list1.date='';
function addtodoList()
{
  const inputname=document.querySelector('.js-name-input3');
  const inputdate=document.querySelector('.js-date-input3');

  if (!inputname.value || !inputdate.value) return;

  list1.push({
    name:inputname.value,
    date:inputdate.value
  });
  console.log(list1);
  inputname.value='';
  inputdate.value='';
  looptodisplay1(list1);
} 


function deleteTodo(index,list)
{
  list.splice(index,1);
  if(list===list1)
  {
    looptodisplay1(list);
  }
  else{
    //looptodisplay(list);
  }
  console.log("deleted");
}
function looptodisplay1(list)
{
  let todolistHTML='';

  for(let i=0;i<list.length;i++)
  {
    const name=list[i].name;
    const duedate=list[i].date;
    const html=`
                  <div>${name}</div>
                  <div>${duedate}</div>
                  <button onclick=" 
                    deleteTodo(${i},list1);
                  " class="deletebutton">Delete</button>
                `; //generating html uing javascript
    todolistHTML+=html;
    
  }
  //console.log(todolistHTML);

  document.querySelector('.js-display-output1').innerHTML=todolistHTML;
}

