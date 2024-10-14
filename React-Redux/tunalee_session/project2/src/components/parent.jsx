import { useState } from 'react';
import Child from './child';

const Parent = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [isMarried, setIsMarried] = useState(false);

  const [form, setForm] = useState([]);

  const handleAdd = () => {
    setForm([
      ...form,
      {
        name: name,
        age: Number(age),
        isMarried: isMarried,
      },
    ]);
    setName('');
    setAge('');
    setIsMarried(false);
  };

  return (
    <div style={{ border: '1px solid green', padding: '10px' }}>
      <h3>Parent Component</h3>

      <p>이름</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>나이</p>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <p>결혼 여부</p>
      <input
        type="checkbox"
        checked={isMarried}
        onChange={() => setIsMarried(!isMarried)}
      />
      <button onClick={handleAdd}>추가</button>

      {form.map((user) => (
        <Child
          key={user.name}
          name={user.name}
          age={user.age}
          isMarried={user.isMarried}
        />
      ))}
    </div>
  );
};

export default Parent;
