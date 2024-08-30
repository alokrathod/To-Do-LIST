const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');
const addBtn = document.querySelector('button');


const addTask = () => {
    if(inputBox.value === '') {
        alert("You must write something.");
    }
    else {
        let list = document.createElement('li');
        list.innerHTML = inputBox.value;
        listContainer.appendChild(list);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        list.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', (event) => {
    if(event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
        saveData();
    }
    else if(event.target.tagName === 'SPAN') {
        event.target.parentElement.remove();
        saveData();
    }
});


const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}

const showTasks = () => {
    listContainer.innerHTML = localStorage.getItem('data');
}

addBtn.addEventListener('click', addTask);
inputBox.addEventListener('keydown', (event) => {
    if(event.key == 'Enter') {
        addTask();
    }
});

showTasks();
