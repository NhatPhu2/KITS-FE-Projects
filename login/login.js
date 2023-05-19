const showAndHidePassword = () => {
  const inputPassword = document.getElementById("ip-password");
  inputPassword.getAttribute("type") == "password"
    ? inputPassword.setAttribute("type", "text")
    : inputPassword.setAttribute("type", "password");
};

const login = () => {
  const loginForm = document.getElementById("login_form");
  let username = loginForm["user-name"].value;
  let password = loginForm["password"].value;

  fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: username,
      password: password,
      // expiresInMins: 60, // optional
    })
  })
  .then(res => {
    if(res.status === 200)
    return res.json()
    return Promise.reject(res);
  })
  
  .then(data => {
    localStorage.setItem("token",data.token)
    localStorage.setItem("userInfo",data.id)
    window.location.replace("profile.html")
  })
.catch(error => {
  loginForm["user-name"].style.border = "1px solid red"
  loginForm["password"].style.border = "1px solid red"
});
  return false;
};
