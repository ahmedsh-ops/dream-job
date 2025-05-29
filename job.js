window.addEventListener('load', function () {
  setTimeout(function () {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  }, 4000);
});

function changeWelcome() {
  document.getElementById("welcome-text").innerText = "You can be a great developer too! 💻🚀";
}

const observerr = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-img");
    }
  });
});

const cars = document.querySelectorAll('.welcome');
cars.forEach(car => {
  observerr.observe(car);
});

let menuList = document.getElementById("menu")
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "300px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

const observerrr = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-img");
    }
  });
});

const imgs = document.querySelectorAll('.about-img');
imgs.forEach(imgg => {
  observerr.observe(imgg);
});