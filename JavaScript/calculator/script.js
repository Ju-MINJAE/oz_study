const p = document.querySelector('p');
const buttons = document.querySelectorAll('.button');

let curNum = '0';

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    console.log(e.target.textContent);

    if (btn.classList.contains('number')) {
      const clickedNum = e.target.textContent;

      if (curNum === '0') curNum = clickedNum;
      else curNum += clickedNum;
    }

    if (btn.classList.contains('dot')) {
      if (!curNum.includes('.')) curNum += '.';
    }

    if (btn.classList.contains('clear')) curNum = '0';
    p.textContent = curNum;
  });
});
