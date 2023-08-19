let todoList = JSON.parse(localStorage.getItem("todoList"));

function renderHTML(list) {
    let todoListHTML = '';
    list.forEach(function(value, index){
        
        if (!value.name == '' ) {
            const HTML = `
                <div>
                    ${value.name}
                </div>
                <div>
                    ${value.date}
                </div>
                <button onclick="deleteTodo(${index});">
                    <img src="https://img.icons8.com/?size=512&id=8112&format=png" class="icon" alt="">
                </button> 
            `;
            todoListHTML += HTML;
        }
    })
    document.querySelector('.listOfTodo').innerHTML = todoListHTML;
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
    const blankTODO = {};
    blankTODO.name = document.querySelector('.input-field').value;
    blankTODO.date = document.querySelector('.input-date').value;
    console.log(blankTODO.date);
    if (blankTODO.date === '') {
        // Get the date
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        currentDate = `${year}-${month}-${day}`;
        console.log(currentDate);
        blankTODO.date = currentDate;
    } else {
        console.log('No');
    }
    // blankTODO.date = () => {
    //     if (document.querySelector('.input-date').value === '') {
            
    //     } else {
    //         return document.querySelector('.input-date').value;
    //     }
    // };
    todoList.push(blankTODO);
    console.log(blankTODO)
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

function deleteALL(){
    console.log("Deleted")
    todoList = [];
    document.querySelector('.listOfTodo').innerHTML = '';
    localStorage.setItem("todoList", JSON.stringify(todoList))
}

// viewALL();