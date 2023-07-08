function store() {
  var name = document.getElementById("name");
  var pw = document.getElementById("pw");
  console.log(name);
  console.log(pw);
  if (name.value.length == 0) {
    alert("Pease fill the email");
  } else if (pw.value.length == 0) {
    alert("Please fill the password");
  } else if (pw.value.length == 0 && name.value.length == 0) {
    alert("Please fill the email and password");
  } else {
    localStorage.setItem("name", name.value);
    localStorage.setItem("pw", pw.value);
    window.location.href = "index.html";
    alert("Your account has been created");
  }
}

function check() {
  var storedName = localStorage.getItem("name");
  var storedPw = localStorage.getItem("pw");

  var userName = document.getElementById("userName");
  var userPw = document.getElementById("userPw");
  console.log(userName);
  console.log(userPw);
  var userRemember = document.getElementById("rememberMe");

  if (userName.value == storedName && userPw.value == storedPw) {
    localStorage.clear();
    window.location.href = "login.html";
    alert("You have logged out successfully.");
  } else {
    alert("Error during logout");
  }
}

const $bigBall = document.querySelector(".cursor__ball--big");
const $smallBall = document.querySelector(".cursor__ball--small");
const $hoverables = document.querySelectorAll(".hoverable");

// Listeners
document.body.addEventListener("mousemove", onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener("mouseenter", onMouseHover);
  $hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, 0.4, {
    x: e.pageX - 15,
    y: e.pageY - 15,
  });
  TweenMax.to($smallBall, 0.1, {
    x: e.pageX - 5,
    y: e.pageY - 7,
  });
}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, 0.3, {
    scale: 4,
  });
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, 0.3, {
    scale: 1,
  });
}
