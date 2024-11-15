const form = document.querySelector('form');
const idInput = document.querySelector('#user_id');
const passwordInput = document.querySelector('#user_pw');

const loginButton = document.querySelector('#login_btn');
const logoutButton = document.querySelector('#logout_btn');

const main = document.querySelector('main');
const userName = document.querySelector('#user_name');
const userDetail = document.querySelector('#user_info');

axios.defaults.withCredentials = true;

form.addEventListener('submit', (e) => e.preventDefault());

function login() {
  const userId = idInput.value;
  const userPassword = passwordInput.value;

  return axios.post('http://localhost:3000', { userId, userPassword });
}

function logout() {
  return axios.delete('http://localhost:3000');
}

function getUserInfo() {
  return axios.get('http://localhost:3000');
}

function renderUserInfo(userInfo) {
  main.style.display = 'block';
  form.style.display = 'none';
  userName.textContent = userInfo.user_name;
  userDetail.textContent = userInfo.user_info;
}

function renderLoginForm() {
  main.style.display = 'none';
  form.style.display = 'block';
  userName.textContent = '';
  userDetail.textContent = '';
}

loginButton.onclick = () => {
  login()
    .then(() => getUserInfo())
    .then((res) => renderUserInfo(res.data));
};

logoutButton.onclick = () => {
  logout().then((res) => {
    console.log(res);
    renderLoginForm();
  });
};
