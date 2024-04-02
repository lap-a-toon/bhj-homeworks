document.addEventListener('DOMContentLoaded',()=>{
    let form = document.querySelector('#tasks__form');
    let taskList = document.querySelector('#tasks__list');
    let tasksKeeped = window.localStorage.getItem('tasks');
    let tasksArray = (tasksKeeped) ? JSON.parse(tasksKeeped) : [];
    if(tasksKeeped){
        tasksArray.forEach(task=>addTask(task));
    }

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        let input = e.target.querySelector('#task__input');
        if(input.value !== ''){
            if(tasksArray.indexOf(input.value) === -1){
                tasksArray.push(input.value);
                addTask(input.value);
                refreshLocalStorage();
            }
            form.reset();
        }
    })

    taskList.addEventListener('click',(e)=>{
        if(e.target.classList.contains('task__remove')){
            e.preventDefault();
            let task = e.target.closest('.task')
            tasksArray.pop(tasksArray.indexOf(task.querySelector('.task__title').textContent));
            refreshLocalStorage();
            task.remove();
        }
    })

    function addTask(taskText){
        let task = document.createElement('div');
        task.setAttribute('class','task');
        let taskTitle = document.createElement('div')
        taskTitle.setAttribute('class','task__title');
        taskTitle.textContent = taskText;
        task.appendChild(taskTitle);
        let taskDeleteBtn = document.createElement('a');
        taskDeleteBtn.setAttribute('href','#');
        taskDeleteBtn.setAttribute('class','task__remove');
        taskDeleteBtn.innerHTML = '&times;';
        task.appendChild(taskDeleteBtn);
        taskList.appendChild(task);
    }

    function refreshLocalStorage(){
        window.localStorage.setItem('tasks',JSON.stringify(tasksArray));
    }
})