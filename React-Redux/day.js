import dayjs from 'dayjs';
// import chalk from 'chalk';

// const now = dayjs();
// console.log(now.toString());

// console.log(now.format());
// console.log(now.format('YYYY-MM-DD'));
// console.log(now.format('YYYY년 MM월 DD일'));

const date1 = dayjs('1998-06-12');
const date2 = dayjs('2024-10-08');

console.log(date2.diff(date1, 'day'));
console.log(date2.diff(date1, 'month'));

// console.log(chalk.green('npm install chalk'));
