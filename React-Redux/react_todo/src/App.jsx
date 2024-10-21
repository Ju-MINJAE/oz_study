import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [isLoading, data] = useFetch('http://localhost:3000/todo');
  const [todo, setTodo] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [time, setTime] = useState(0);
  const [isTimer, setIsTimer] = useState(false);

  useEffect(() => {
    if (currentTodo) {
      fetch(`http://localhost:3000/todo/${currentTodo}`, {
        method: 'PATCH',
        body: JSON.stringify({
          time: todo.find((el) => el.id === currentTodo).time + 1,
        }),
      })
        .then((res) => res.json())
        .then((res) =>
          setTodo((prev) =>
            prev.map((el) => (el.id === currentTodo ? res : el))
          )
        );
    }
  }, [time]);

  useEffect(() => {
    setTime(0);
  }, [isTimer]);

  useEffect(() => {
    if (data) setTodo(data);
  }, [isLoading]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">TODO LIST</h1>
      <Clock />
      <Advice />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
        onClick={() => setIsTimer((prev) => !prev)}
      >
        {isTimer ? '스톱워치로 변경' : '타이머로 변경'}
      </button>
      {isTimer ? (
        <Timer time={time} setTime={setTime} />
      ) : (
        <StopWatch time={time} setTime={setTime} />
      )}

      <TodoInput setTodo={setTodo} />
      <TodoList
        todo={todo}
        setTodo={setTodo}
        setCurrentTodo={setCurrentTodo}
        currentTodo={currentTodo}
      />
    </div>
  );
}

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setIsLoading(false);
      });
  }, [url]);

  return [isLoading, data];
};

const Advice = () => {
  const [isLoading, data] = useFetch(
    'https://korean-advice-open-api.vercel.app/api/advice'
  );

  return (
    <>
      {!isLoading && (
        <>
          <div className="bg-yellow-100 text-gray-800 p-4 rounded-lg mt-4">
            {data.message}
          </div>
          <div className="text-right text-sm text-gray-600 mt-2">
            -{data.author}-
          </div>
        </>
      )}
    </>
  );
};

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div className="text-2xl text-center mt-4">{time.toLocaleTimeString()}</div>
  );
};

const formatTime = (seconds) => {
  const timeString = `${String(Math.floor(seconds / 3600)).padStart(
    2,
    '0'
  )}:${String(Math.floor((seconds % 3600) / 60)).padStart(2, '0')}:${String(
    seconds % 60
  ).padStart(2, '0')}`;

  return timeString;
};

const StopWatch = ({ time, setTime }) => {
  const [isOn, setIsOn] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isOn === true) {
      const timerId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      timerRef.current = timerId;
    } else {
      clearInterval(timerRef.current);
    }
  }, [isOn]);

  return (
    <div className="text-center mt-4">
      <div className="text-3xl font-mono">{formatTime(time)}</div>
      <div className="space-x-2 mt-2">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
          onClick={() => setIsOn((prev) => !prev)}
        >
          {isOn ? '끄기' : '켜기'}
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-lg"
          onClick={() => {
            setTime(0);
            setIsOn(false);
          }}
        >
          리셋
        </button>
      </div>
    </div>
  );
};

const Timer = ({ time, setTime }) => {
  const [startTime, setStartTime] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const timerRef = useRef(null);

  useEffect(() => {
    if (isOn && time > 0) {
      const timerId = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
      timerRef.current = timerId;
    } else if (!isOn || time == 0) {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isOn, time]);

  return (
    <div className="text-center mt-4">
      <div className="text-3xl font-mono">
        {time ? formatTime(time) : formatTime(startTime)}
        <div className="space-x-2 mt-2">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            onClick={() => {
              setIsOn(true);
              setTime(time ? time : startTime);
              setStartTime(0);
            }}
          >
            시작
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
            onClick={() => setIsOn(false)}
          >
            멈춤
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            onClick={() => {
              setTime(0);
              setIsOn(false);
            }}
          >
            리셋
          </button>
        </div>
      </div>

      <input
        type="range"
        value={startTime}
        max="3600"
        min="0"
        step="30"
        className="mt-4 w-full"
        onChange={(e) => setStartTime(e.target.value)}
      />
    </div>
  );
};

const TodoInput = ({ setTodo }) => {
  const inputRef = useRef(null);

  const addTodo = () => {
    const newTodo = {
      content: inputRef.current.value,
      time: 0,
    };
    fetch('http://localhost:3000/todo', {
      method: 'POST',
      body: JSON.stringify(newTodo),
    })
      .then((res) => res.json())
      .then((res) => setTodo((prev) => [...prev, res]));
  };

  return (
    <div className="mt-6">
      <input
        ref={inputRef}
        className="border border-gray-300 rounded-lg px-3 py-2 w-full"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 w-full"
        onClick={addTodo}
      >
        추가
      </button>
    </div>
  );
};

const TodoList = ({ todo, setTodo, setCurrentTodo, currentTodo }) => {
  return (
    <ul className="mt-4 space-y-4">
      {todo.map((el) => (
        <Todo
          key={el.id}
          todo={el}
          setTodo={setTodo}
          currentTodo={currentTodo}
          setCurrentTodo={setCurrentTodo}
        />
      ))}
    </ul>
  );
};

const Todo = ({ todo, setTodo, setCurrentTodo, currentTodo }) => {
  return (
    <li
      key={todo.id}
      className="flex justify-between items-center bg-white border border-gray-300 rounded-lg px-4 py-2"
    >
      <div className={`flex-1 ${currentTodo === todo.id ? 'font-bold' : ''}`}>
        {todo.content}
        <br />
        {formatTime(todo.time)}
      </div>
      <div className="space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={() => setCurrentTodo(todo.id)}
        >
          시작하기
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
          onClick={() => {
            fetch(`http://localhost:3000/todo/${todo.id}`, {
              method: 'DELETE',
            }).then((res) => {
              if (res.ok) {
                setTodo((prev) => prev.filter((el) => el.id !== todo.id));
              }
            });
          }}
        >
          삭제
        </button>
      </div>
    </li>
  );
};

export default App;
