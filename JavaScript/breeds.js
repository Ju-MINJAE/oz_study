const apiRandomDogs = 'https://dog.ceo/api/breeds/image/random/42';
const apiAllBreeds = 'https://dog.ceo/api/breeds/list/all';

const request1 = new XMLHttpRequest();
const request2 = new XMLHttpRequest();

const header = document.querySelector('.header');
const main = document.querySelector('.main');
const input = document.querySelector('#filter-text');
const button = document.querySelector('#filter');
const select = document.querySelector('#filter-select');
const more = document.getElementById('more');
const tothetop = document.getElementById('tothetop');
const reset = document.getElementById('reset');

const currentDogs = [];

function disPlayDogs(item) {
  const dogImgDiv = document.createElement('div');
  dogImgDiv.classList.add('flex-item');
  dogImgDiv.innerHTML = `<img src=${item} />`;
  main.appendChild(dogImgDiv);
}

window.addEventListener('load', () => {
  request1.open('GET', apiRandomDogs);
  request1.addEventListener('load', () => {
    const response = JSON.parse(request1.response);
    response.message.forEach((item) => {
      currentDogs.push(item);
      disPlayDogs(item);
    });
  });
  request1.send();

  request2.open('GET', apiAllBreeds);
  request2.addEventListener('load', () => {
    const response = JSON.parse(request2.response);
    Object.keys(response.message).forEach((item) => {
      const option = document.createElement('option');
      option.textContent = item;
      option.value = item;
      select.appendChild(option);
    });
  });

  request2.send();
});

button.addEventListener('click', () => {
  main.innerHTML = '';
  let filteredDogs = currentDogs.filter((item) => {
    return item.indexOf(input.value) !== -1;
  });
  input.value = '';

  filteredDogs.forEach((item) => {
    disPlayDogs(item);
  });
});

select.addEventListener('change', () => {
  main.innerHTML = '';
  let filteredDogs = currentDogs.filter((item) => {
    return item.indexOf(select.value) !== -1;
  });

  filteredDogs.forEach((item) => {
    disPlayDogs(item);
  });
});

more.addEventListener('click', () => {
  request1.open('GET', apiRandomDogs);
  request1.addEventListener('load', () => {
    currentDogs.push(item);
    disPlayDogs(item);
  });

  request1.send();
});

tothetop.addEventListener('click', () => {
  window.scrollTo({ top: 0 });
});

reset.addEventListener('click', () => {
  main.innerHTML = '';
  currentDogs.length = 0;
  request1.open('GET', apiRandomDogs);
  request1.addEventListener('load', () => {
    const response = JSON.parse(request1.response);
    response.message.forEach((item) => {
      currentDogs.push(item);
      disPlayDogs(item);
    });
  });
  request1.send();
});
