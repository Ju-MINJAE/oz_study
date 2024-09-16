const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const userId = e.target.id.value;
  const userPw1 = e.target.pw1.value;
  const userPw2 = e.target.pw2.value;
  const userName = e.target.name.value;
  const userPhone = e.target.phone.value;
  const userPosition = e.target.position.value;
  const userGender = e.target.gender.value;
  const userEmail = e.target.email.value;
  const userIntro = e.target.intro.value;

  if (userId.length < 6) {
    alert('아이디가 너무 짧습니다. 6자 이상 입력해주세요.');
    return;
  }

  if (userPw1 !== userPw2) {
    alert('비밀번호가 일치하지 않습니다.');
    return;
  }

  document.body.innerHTML = '';
  document.write(`<p>${userId}님 환영합니다.</p>`);
  document.write(`<p>회원 가입 시 입력하신 내역은 다음과 같습니다.</p>`);
  document.write(`<p>아이디 : ${userId}</p>`);
  document.write(`<p>이름 : ${userName}</p>`);
  document.write(`<p>전화번호 : ${userPhone}</p>`);
  document.write(`<p>원하는 직무 : ${userPosition}</p>`);
});
