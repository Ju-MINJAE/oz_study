const todoList = document.getElementById('todo-list');
const todoForm = document.getElementById('todo-form');
let todoArr = [];

const saveTodos = () => {
  const todoString = JSON.stringify(todoArr);
  localStorage.setItem('todos', todoString);
};

const loadTodos = () => {
  const myTodos = localStorage.getItem('todos');
  if (myTodos !== null) {
    todoArr = JSON.parse(myTodos);
    displayTodos();
  }
};
loadTodos();

const handleTodoDelBtnClick = (clickedId) => {
  todoArr = todoArr.filter((todo) => {
    return todo.todoId !== clickedId;
  });
  saveTodos();
  displayTodos();
};

const handleTodoItemClick = (clickedId) => {
  todoArr = todoArr.map((todo) => {
    if (todo.todoId === clickedId) {
      return {
        ...todo,
        todoDone: !todo.todoDone,
      };
    } else {
      return todo;
    }
  });
  // console.log(todoArr);
  saveTodos();
  displayTodos();
};

function displayTodos() {
  todoList.innerHTML = '';
  todoArr.forEach((todo) => {
    const todoItem = document.createElement('li');
    const todoDelBtn = document.createElement('span');

    todoDelBtn.textContent = 'x';
    todoItem.textContent = todo.todoText;
    todoItem.title = '완료상태';
    todoDelBtn.title = '삭제버튼';

    if (todo.todoDone) todoItem.classList.add('done');
    else todoItem.classList.add('yet');

    todoItem.addEventListener('click', () => {
      handleTodoItemClick(todo.todoId);
    });
    todoDelBtn.addEventListener('click', () => {
      handleTodoDelBtnClick(todo.todoId);
    });

    todoItem.appendChild(todoDelBtn);
    todoList.appendChild(todoItem);
  });
}

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const toBeAdded = {
    todoText: todoForm.todo.value,
    todoId: new Date(),
    todoDone: false,
  };
  todoForm.todo.value = '';
  todoArr.push(toBeAdded);
  // console.log(todoArr);
  saveTodos();
  displayTodos();
});
