let todoList = [
    'wash dishes',
    'make dinner',
    'clean toilet'
]
function todoAction() {
    todoValue = document.querySelector('.input-field');
    todoList.push(todoValue.value);
    console.log(todoList);
    todoValue.value = ' ';
    // document.querySelector('.listOfTodo').innerHTML = todoList;
    let todoListHTML = '';
    for (let i = 0; i < todoList.length ; i ++) {
        // document.querySelector('.listOfTodo').innerHTML = todoList[i];
        const todo = todoList[i];
        console.log(todo);
        const HTML = `<p>${todo}</p>`
        todoListHTML += HTML;
        console.log(todoListHTML);
    }
    
    document.querySelector('.listOfTodo').innerHTML = todoListHTML;
}


const nums = [1, 1, 3];
const numsDoubled = [];

for (let i = 0; i < nums.length; i++) {
    let preResult = 0;
    preResult = nums[i] * 2;
    numsDoubled.push(preResult);
    
    
}

console.log(numsDoubled);
