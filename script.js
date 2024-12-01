function addTask(){
    var taskInput= document.getElementById("taskInput");
    var tasklist = document.getElementById("tasklist");
    var taskvalue=taskInput.value.trim();
    if(taskvalue){
        var listItem=document.createElement('li');
        listItem.className='task';
        var tasktext=document.createTextNode(taskvalue);
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            tasklist.removeChild(listItem);
        };
        listItem.appendChild(tasktext);
        listItem.appendChild(deleteButton);
        tasklist.appendChild(listItem);
        taskInput.value = '';
    }
    else {
        alert('Please enter a task');
    }
}