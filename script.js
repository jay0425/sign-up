const existingUsernames = ['JaeHee', 'abc', 'user']; // 이미 존재하는 아이디 목록 (데모용)

document.getElementById('check-username').addEventListener('click', () => {
  const username = document.getElementById('username').value;
  const feedback = document.getElementById('username-feedback');

  if (existingUsernames.includes(username)) {
    feedback.textContent = '* 이미 사용 중인 아이디입니다.';
  } else if (username === '') {
    feedback.textContent = '* 아이디를 입력하세요.';
  } else {
    feedback.textContent = '* 사용 가능한 아이디입니다.';
  }
});

document.getElementById('password').addEventListener('input', () => {
  const password = document.getElementById('password').value;
  const feedback = document.getElementById('password-feedback');
  const regex = /^(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  if (!regex.test(password)) {
    feedback.textContent = '* 비밀번호는 최소 8자, 소문자, 숫자, 특수문자를 포함해야 합니다.';
  } else {
    feedback.textContent = '';
  }
});

document.getElementById('confirm-password').addEventListener('input', () => {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const feedback = document.getElementById('confirm-password-feedback');

  if (password !== confirmPassword) {
    feedback.textContent = '* 비밀번호가 일치하지 않습니다.';
  } else {
    feedback.textContent = '';
  }
});

document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (existingUsernames.includes(username)) {
    alert('이미 사용 중인 아이디입니다.');
    return;
  }

  if (password !== confirmPassword) {
    alert('비밀번호가 일치하지 않습니다.');
    return;
  }

  alert('회원가입이 완료되었습니다!');
  // 서버로 폼 데이터 전송 등 추가 작업을 여기서 수행할 수 있습니다.
});
