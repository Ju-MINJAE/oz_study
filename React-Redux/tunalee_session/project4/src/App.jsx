import React, { useEffect, useMemo, useRef, useState } from 'react';

const App = () => {
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    console.log('useEffect 사용중...');
    let effectResult = 0;
    for (let i = 0; i < 10; i++) {
      effectResult += 1;
    }
    setValue(effectResult);
  }, []);

  const handleMemo = useMemo(() => {
    console.log('useMemo 사용중...');
    let memoResult = 0;
    for (let i = 0; i < 10; i++) {
      memoResult += 1;
    }
    return memoResult;
  }, []);

  useEffect(() => {
    if (!hasRun.current) {
      console.log('useRef 사용중...');
      let refResult = 0;
      for (let i = 0; i < 10; i++) {
        refResult += 1;
      }
      setResult(refResult);
      hasRun.current = true;
    }
  }, []);

  return (
    <div>
      <h1>useEffect Value : {value}</h1>
      <h1>useMemo Value : {handleMemo}</h1>
      <h1>useRef Value : {result}</h1>
    </div>
  );
};

export default App;
