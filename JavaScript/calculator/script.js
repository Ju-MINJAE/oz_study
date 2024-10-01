const p = document.querySelector('p');
const buttons = document.querySelectorAll('.button');

let curNum = '0';
let firstOperand = null;
let secondOperand = null;
let operator = null;

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const clickedNum = e.target.textContent;
    // console.log(`Clicked: ${clickedNum}`);

    if (btn.classList.contains('number')) {
      if (curNum === '0') curNum = clickedNum;
      else curNum += clickedNum;

      p.textContent = curNum;
    }

    if (clickedNum === '.') {
      if (!curNum.includes('.')) curNum += '.';
    }

    if (clickedNum === 'C') {
      curNum = '0';
      firstOperand = null;
      secondOperand = null;
      operator = null;
      p.textContent = curNum;
      return;
    }

    if (btn.classList.contains('operator')) {
      if (operator && firstOperand !== null) {
        secondOperand = curNum;
        console.log(secondOperand);
        const result = calculate(firstOperand, operator, secondOperand);
        console.log(result);
        p.textContent = result;
        firstOperand = result;
        curNum = '0';
      } else {
        firstOperand = curNum;
        curNum = '0';
      }

      operator = clickedNum;
      // console.log(`First Operand: ${firstOperand}, Operator: ${operator}`);
      return;
    }

    if (clickedNum === '=') {
      if (operator && firstOperand !== null) {
        secondOperand = curNum;
        const result = calculate(firstOperand, operator, secondOperand);

        p.textContent = result;
        firstOperand = result;
        secondOperand = null;
        operator = null;
        curNum = result;
      }
      return;
    }

    if (clickedNum === '+/-' && curNum !== '0') {
      curNum = curNum * -1;
      p.textContent = curNum;
      return;
    }

    if (clickedNum === '%' && curNum !== '0') {
      curNum = String(Number(curNum) / 100);
      p.textContent = curNum;
      return;
    }
  });
});

function calculate(num1, op, num2) {
  num1 = Number(num1);
  num2 = Number(num2);

  switch (op) {
    case '+':
      return String(num1 + num2);
    case '-':
      return String(num1 - num2);
    case 'X':
      return String(num1 * num2);
    case '/':
      return String(num1 / num2);
    default:
      console.log('ERROR');
  }
}
