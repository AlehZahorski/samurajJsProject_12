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