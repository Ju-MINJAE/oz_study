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

    p.textContent = curNum;

    if (btn.classList.contains('operator')) {
      firstOperand = curNum;
      console.log(`firstOperand: ${firstOperand}`);

      curNum = '0';
      operator = clickedNum;
      console.log(`First Operand: ${firstOperand}, Operator: ${operator}`);
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
  }
}
