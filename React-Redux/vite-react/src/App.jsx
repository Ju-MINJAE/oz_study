import { useState, Component } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    setCounter(counter - 1);
  };
  const setCounterNumber = () => {
    setCounter(inputValue);
  };

  return (
    <>
      <Count counter={counter} />
      <PlusButton incrementCounter={incrementCounter} />
      <MinusButton decrementCounter={decrementCounter} />
      <CounterInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        setCounterNumber={setCounterNumber}
      />
    </>
  );
}

function CounterInput({ inputValue, setInputValue, setCounterNumber }) {
  return (
    <>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={setCounterNumber}>입력</button>
    </>
  );
}

function PlusButton({ incrementCounter }) {
  return <button onClick={incrementCounter}>+</button>;
}
function MinusButton({ decrementCounter }) {
  return <button onClick={decrementCounter}>-</button>;
}

function Count({ counter }) {
  return <div>counter : {counter}</div>;
}

// class App extends Component {
//   state = { counter: 0 };

//   increamentCounter = () => {
//     this.setState({ counter: this.state.counter + 1 });
//   };
//   decrementCounter = () => {
//     this.setState({ counter: this.state.counter - 1 });
//   };

//   render() {
//     return (
//       <>
//         <Count counter={this.state.counter} />
//         <PlusButton increamentCounter={this.increamentCounter} />
//         <MinusButton decrementCounter={this.decrementCounter} />
//       </>
//     );
//   }
// }

// class PlusButton extends Component {
//   render() {
//     return <button onClick={this.props.increamentCounter}>+</button>;
//   }
// }

// class MinusButton extends Component {
//   render() {
//     return <button onClick={this.props.decrementCounter}>-</button>;
//   }
// }

// class Count extends Component {
//   render() {
//     console.log(this.props);
//     return <div>counter :{this.props.counter}</div>;
//   }
// }

export default App;
