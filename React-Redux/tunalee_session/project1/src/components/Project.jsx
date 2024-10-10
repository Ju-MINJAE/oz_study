import { useState } from 'react';

import myCat from '../../public/image/mycat.jpeg';

const Project = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [users, setUsers] = useState([]);

  const addUser = () => {
    if (name.trim() === '' || age.trim() === '') {
      alert('이름과 나이를 모두 입력해주세요.');
      return;
    }

    const newUser = {
      name: name.trim(),
      age: Number(age),
    };

    setUsers((prev) => [...prev, newUser]);
    setName('');
    setAge('');
  };

  return (
    <>
      <img src={myCat} alt="My Cat" width={200} />
      <h2>사용자 정보 입력</h2>
      <div>
        <p>이름</p>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <p>나이</p>
        <input
          type="number"
          placeholder="나이을 입력하세요"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={addUser}>사용자 추가</button>
      </div>

      {users.length > 0 && (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name} - {user.age}세
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Project;
