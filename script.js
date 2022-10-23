function getColor(value) {
  document.body.style.backgroundColor = value;
}
function registrate() {
  let phone = document.getElementById("phone").value;
  let surname = document.getElementById("surname").value;
  let login = document.getElementById("login").value;
  let password = document.getElementById("password").value;
  let password_check = document.getElementById("password_check").value;
  let name = document.getElementById("name").value;
  if (
    name == "" ||
    surname == "" ||
    login == "" ||
    password == "" ||
    password_check == "" ||
    phone == ""
  ) {
    alert(`Упс, тут чего-то не хватает`);
  }
}
function error() {
  document.getElementById("name").value == ""
    ? document.getElementById("name").classList.add("error")
    : document.getElementById("name").classList.remove("error");

  document.getElementById("surname").value == ""
    ? document.getElementById("surname").classList.add("error")
    : document.getElementById("surname").classList.remove("error");
}
function passwordCheck() {
  let password = document.getElementById("password").value;
  let password_check = document.getElementById("password_check").value;
  password !== password_check
    ? document.getElementById("password_check").classList.add("pass_error")
    : document.getElementById("password_check").classList.remove("pass_error");
}

function checkNumber() {
  let phone = document.getElementById("phone").value;
  var phoeno = /^\+?([0-9]{11})$/;
  if (phone.match(phoeno)) {
    document.getElementById("registrate").innerHTML =
      "";
  } else {
    document.getElementById("registrate").innerHTML =
      "Введите корректный номер";
  }
}
