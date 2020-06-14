const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNum = document.querySelector('h1 span');
const ListItems = document.getElementsByClassName('task');
const input = document.querySelector('input');



const removeTask = (e) => {
    e.target.parentNode.remove();
    taskNum.textContent = ListItems.length;
}


const addTask = (e) => {
    e.preventDefault();
    const taskText = input.value;
    if(taskText === '' || taskText.charAt(0) === ' '){
        alert('please, enter anything')
        return;
    }
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = taskText + '<button>remove</button>';
    ul.appendChild(task);
    input.value = '';
    taskNum.textContent = ListItems.length;

    task.querySelector('button').addEventListener('click', removeTask);
    

}

form.addEventListener('submit', addTask);