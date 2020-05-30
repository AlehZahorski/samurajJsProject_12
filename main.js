const input = document.querySelector('input');
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');



//FILTER
const arr = [23,12,1232,4234,545,567,987];

const oddNumbers = arr.filter((number)=> number%2==1);
const evenNumbers = arr.filter(number => number%2==0);
const numbersBiggerThen100 = arr.filter(number => number>100)

//MAP
const double = arr.map(number => number * 2);
const people = arr.map(number => number + " osob");

// foreach

arr.forEach((number, index) => {
    arr[index] = number * 2;
})
//SEARCH

const removeTask = (e) => {
    const index = e.target.dataset.key;
    document.querySelector(`li[data-key="${index}"]`).remove();
}

document.querySelectorAll('button').forEach((item) => {
    item.addEventListener('click', removeTask)
})


//search

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasks = [...li];
    tasks = tasks.filter(li => li.textContent.toLowerCase().toLowerCase().includes(searchText));
    console.log(tasks)
    ul.textContent = '';
    tasks.forEach(li => ul.appendChild(li));
}

input.addEventListener('input', searchTask)
