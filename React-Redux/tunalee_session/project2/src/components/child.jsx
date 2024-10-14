const Child = (props) => {
  return (
    <div style={{ border: '1px solid blue', padding: '5px', margin: '5px' }}>
      <h4>Child Component</h4>
      <p>이름: {props.name}</p>
      <p>나이: {props.age}</p>
      <p>결혼 여부: {props.isMarried ? '기혼' : '미혼'}</p>
    </div>
  );
};

export default Child;
