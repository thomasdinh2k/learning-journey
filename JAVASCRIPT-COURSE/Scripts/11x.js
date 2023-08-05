// let todoList = [
//     'wash dishes',
//     'make dinner',
//     'clean toilet'
// ];

let todoList = JSON.parse(localStorage.getItem("todoList"));

function renderHTML(list) {
    let todoListHTML = '';
    for (let i = 0; i < list.length ; i ++) {
        const todo = list[i];
        console.log(todo);
        const HTML = `<p>${todo}</p>`
        todoListHTML += HTML;
        console.log(todoListHTML);
        document.querySelector('.listOfTodo').innerHTML = todoListHTML;
    }
}

function todoAction() {
    todoValue = document.querySelector('.input-field');
    todoList.push(todoValue.value);
    console.log(todoList);
    todoValue.value = ' ';
    // Retrieve data and display on the web 
    console.log('Retrieving DATA');
    // const todoList = JSON.parse(localStorage.getItem("todoList"));
    renderHTML(todoList);    
    localStorage.setItem("todoList", JSON.stringify(todoList));
}

function viewALL(){
    renderHTML(todoList);
}

function handleKeyDown(event) {
    console.log(event.key)
    if(event.key === 'Enter'){
        todoAction();
    } else if (event.key === 'Meta') {
        viewALL();
    }
}

