const form = document.querySelector('form')
const idInput = document.querySelector('#user_id')
const passwordInput = document.querySelector('#user_password')
const loginButton = document.querySelector('#login_button')

const main = document.querySelector('main')
const userName = document.querySelector('#user_name')
const userInfo = document.querySelector('#user_info')
const logoutButton = document.querySelector('#logout_button')


axios.defaults.withCredentials = true;
let accessToken = ''

form.addEventListener('submit', (e) => e.preventDefault())

function login() {
  const userId = idInput.value
  const userPassword = passwordInput.value

  return axios.post('http://localhost:3000', { userId, userPassword })
  .then(res => accessToken = res.data)
}

function logout() {
  accessToken = ''
}

function getUserInfo() {
  return axios.get('http://localhost:3000', {
    headers: { 'Authorization' : `Bearer ${accessToken}`}
  })
}

function renderUserInfo(user) {
  main.style.display = 'block'
  form.style.display = 'none'
  userName.textContent = user.user_name
  userInfo.textContent = user.user_info
}

function renderLoginForm() {
  main.style.display = 'none'
  form.style.display = 'grid'
  userName.textContent = ''
  userInfo.textContent = ''
}

loginButton.onclick = () => {
  login()
    .then(() => getUserInfo())
    .then(res => renderUserInfo(res.data))
}

logoutButton.onclick = () => {
  logout()
  renderLoginForm()
}