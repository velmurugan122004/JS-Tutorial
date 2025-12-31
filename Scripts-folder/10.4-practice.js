const userDataArray=JSON.parse(localStorage.getItem('to-do-list'))||[];
looptodisplay();
function createData()
{
  const inputName=document.querySelector('.js-input-data');
  const inputDate=document.querySelector('.js-input-date');
  const inputTime=document.querySelector('.js-input-time');
  if(!inputName.value || !inputDate.value || !inputTime.value)
  {
    return;
  }
  userDataArray.push({
    name:inputName.value,
    date:inputDate.value,
    time:inputTime.value,
    alertShown: false
  });
  inputName.value='';
  inputDate.value='';
  inputTime.value='';
  console.log(userDataArray);
  saveToStorage();
  looptodisplay();
}
function looptodisplay()
{
  let todolistHTML='';
  for(let i=0;i<userDataArray.length;i++)
  {
    /*const name=userDataArray[i].name;
    const duedate=userDataArray[i].date;
    const dueTime=userDataArray[i].time;*/

    const {name,date,time}=userDataArray[i]; //same name of object and get data
    todolistHTML+=`<div>${name}</div>
                  <div>${date}</div>
                  <div>${time}</div>
                  <button class="js-delete" onclick="remove(${i});">Delete</button>
      
                  `;
  }
  document.querySelector('.js-result').innerHTML=todolistHTML;

}
function remove(index)
{
    userDataArray.splice(index,1);
    saveToStorage();
    looptodisplay();
}
function saveToStorage()
{
  localStorage.setItem('to-do-list',JSON.stringify(userDataArray));
}

function checkReminder()
{
  const now=new Date();

  /*const currentDate=now.toDateString().split('T')[0];//yy t use means 2025-12-30T 10:15:20.000Z split that word of T before all date yy (0) mean index 
  /*[
  "2025-12-30",   // index 0 (DATE)
  "10:15:20.000Z" // index 1 (TIME)
  ]*/
  const currentTime=now.toTimeString().slice(0,5);//slice remain content 10:15:20.000Z 10.15 only get to Store that's yy we can used */

  for(let i=0;i<userDataArray.length;i++)
  {
    const todo=userDataArray[i];
    const todoTime = new Date(`${todo.date}T${todo.time}`);
    if(now >= todoTime && !todo.alertShown)
    {
      alert(`⏰ Reminder: ${todo.name}`);
      todo.alertShown = true;
      saveToStorage();//means after alert not shown again  
    }
  }

}
checkReminder();
setInterval(checkReminder, 60000);
