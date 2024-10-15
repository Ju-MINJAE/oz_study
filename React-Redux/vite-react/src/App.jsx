import { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 0, content: '감자 캐기' },
    { id: 1, content: '츄르 주기' },
    { id: 2, content: '사료 주기' },
  ]);

  return (
    <>
      <h2>To Do List</h2>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <hr />
      <TodoInput todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

function TodoInput({ todoList, setTodoList }) {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <h2>Add To Do</h2>
      <input
        value={inputValue}
        onChange={(evnet) => setInputValue(evnet.target.value)}
      />
      <button
        onClick={() => {
          const newTodo = { id: Number(new Date()), content: inputValue };

          const newTodoList = [...todoList, newTodo];
          setTodoList(newTodoList);
          setInputValue('');
        }}
      >
        추가하기
      </button>
    </>
  );
}

function TodoList({ todoList, setTodoList }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} setTodoList={setTodoList} />
      ))}
    </ul>
  );
}

function Todo({ todo, setTodoList }) {
  const [inputValue, setInputValue] = useState('');
  const [isInputShow, setIsInputShow] = useState(false);

  const inputShowHandler = () => {
    setIsInputShow(!isInputShow);
  };

  return (
    <li>
      <input type="checkbox" />
      {todo.content}
      {!isInputShow && <button onClick={inputShowHandler}>수정하기</button>}
      {isInputShow && (
        <div>
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button
            onClick={() => {
              setTodoList((prev) =>
                prev.map((el) =>
                  el.id === todo.id ? { ...el, content: inputValue } : el
                )
              );
              setInputValue('');
              setIsInputShow(!isInputShow);
            }}
          >
            수정
          </button>
        </div>
      )}
      <button
        onClick={() => {
          setTodoList((prev) => {
            return prev.filter((el) => el.id !== todo.id);
          });
        }}
      >
        삭제
      </button>
    </li>
  );
}

export default App;
