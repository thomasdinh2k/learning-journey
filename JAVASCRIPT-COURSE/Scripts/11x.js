const todoList = [{
    name: 'wash dishes',
    due: '2022-12-22'},
    {
        name : 'make dinner',
        due: '2023-25-10'
    }, {
        name: 'clean the toilet',
        due: '12-12-2012'
    }    
];

// let todoList = JSON.parse(localStorage.getItem("todoList"));

console.log(todoList)

function renderHTML(list) {
    let todoListHTML = '';
    for (let i = 0; i < list.length ; i ++) {
        const todoObject = list[i];
        if (todoObject !== '') {
            console.log(todoObject);
            const HTML = `<p>
                ${todoObject} 
                <button onclick="
                    deleteTodo(${i});
                ">DELETE</button>
            </p>`
            todoListHTML += HTML;
        }
        document.querySelector('.listOfTodo').innerHTML = todoListHTML;
    }
}

function deleteTodo(index) {
    if (index <= 1 && todoList.length <= 1) {
        document.querySelector('.listOfTodo').innerHTML = '';  // Make sure the last element is deleted
    } else {
        todoList.splice(index, 1);
        renderHTML(todoList);
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
    if(event.key === 'Enter'){
        todoAction();
    } else if (event.key === 'Meta') {
        viewALL();
    }
}

