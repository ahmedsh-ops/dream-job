window.addEventListener('load', function () {
  setTimeout(function () {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  }, 4000);
});

function changeWelcome() {
  document.getElementById("welcome-text").innerText = "You can be a great developer too! 💻🚀";
}

window.onload = function () {
  const el = document.getElementById("WWW");
  el.style.opacity = 1;
  el.style.transform = "translateX(0)";
};

let menuList = document.getElementById("menu")
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "300px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}
