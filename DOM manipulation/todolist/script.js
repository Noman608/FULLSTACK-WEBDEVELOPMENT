window.onload = function () {
  let newtask = document.getElementById("newtask");
  let addtask = document.getElementById("addtask");
  let todolist = document.getElementById("todolist");
  addtask.onclick = function () {
    let li = document.createElement("li");
    //add the x utton
    let xbtn = document.createElement("button");
    xbtn.innerText = '❌';
    xbtn.onclick = function (event) {
      event.target.parentElement.remove();
    };
    let upBtn = document.createElement('button');
    upBtn.innerText = '⬆️';
     upBtn.onclick = function(event){
    //      event.target =  the up button
    //      event.target.parentElement = the <li>Item
    //      event.target.parentElement.parentElement is the todolist;
        event.target.parentElement.parentElement.insertBefore(
            event.target.parentElement,//insert this element
            event.target.parentElement.previousElementSibling //before its previous element 
        );
    }

    let dnBtn = document.createElement('button');
    dnBtn.innerText = '⬇️';
    dnBtn.onclick = function(event){
    //      event.target =  the up button
    //      event.target.parentElement = the <li>Item
    //      event.target.parentElement.parentElement is the todolist;
        event.target.parentElement.parentElement.insertBefore(
            event.target.parentElement.nextElementSibling,//before its previous element 
            event.target.parentElement//insert this element
        
        );
    }
   // add the task text
   let taskSpan = document.createElement('span');
   taskSpan.innerText = newtask.value;

   li.appendChild(xbtn);
   li.appendChild(upBtn);
   li.appendChild(dnBtn);
   li.appendChild(taskSpan);
   
   todolist.appendChild(li)

  };
};

// window.onload = function () {
//     let newtask = document.getElementById('newtask');
//     let addtask = document.getElementById('addtask');
//     let todolist = document.getElementById('todolist');
//     addtask.onclick = function () {
//       let li = document.createElement('li');
//       li.innerText = newtask.value;
//       let xbtn = document.createElement('button');
//       xbtn.innerText = "❌"
//       li.appendChild(xbtn);
//       xbtn.onclick = function(event){
//           event.target.parentElement.remove();
//       }
//       todolist.appendChild(li);

//     };
//   };
