window.onload = function() {
    let newtask = document.getElementById('newtask');
    let addtask = document.getElementById('addtask');
    let todolist = document.getElementById('todolist');

    addtask.onclick = function() {
        let li = document.createElement('li');

        todolist.appendChild(li);

        //add X button 
        let xbtn = document.createElement('button');
        xbtn.innerText = 'X';
        xbtn.onclick = function(event) {
            event.target.parentElement.remove();
        }
        li.appendChild(xbtn);

        //add up button
        let ubtn = document.createElement('button')
        ubtn.innerText = '^';
        li.appendChild(ubtn);
        ubtn.onclick = function(event) {
            //event.target = the up button
            //event.target.parentElement = the <li> item
            //event.target.parentElement.parentElement is the todolist
            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement, //insert this element 
                event.target.parentElement.previouselementsibling //befor the previous element
            )
        }

        let dubtn = document.createElement('button')
        dubtn.innerText = '*';
        li.appendChild(dubtn);
        dubtn.onclick = function(event) {
            //event.target = the up button
            //event.target.parentElement = the <li> item
            //event.target.parentElement.parentElement is the todolist
            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement.nextelementsibling, //insert next element
                event.target.parentElement //before current element

            )
        }

        //add the task text
        let taskSpan = document.createElement('span');
        taskSpan.innerText = newtask.value;
        li.appendChild(taskSpan);
    }

}