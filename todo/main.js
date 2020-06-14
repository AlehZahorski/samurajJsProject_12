const todoList = [];

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNum = document.querySelector('h1 span');
const ListItems = document.getElementsByClassName('task');
const input = document.querySelector('input');



const removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.id; //or e.target.parenNode.dataset.key;
    todoList.splice(index, 1);
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
    todoList.push(task);
    ul.textContent = '';
    todoList.forEach((todoElement, index)=> {
        todoElement.id = `${index}`; //or dataset.key;
        ul.appendChild(todoElement);
    })
    ul.appendChild(task);
    input.value = '';
    taskNum.textContent = ListItems.length;
    task.querySelector('button').addEventListener('click', removeTask);

}

form.addEventListener('submit', addTask);