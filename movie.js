submit = document.getElementById("submit");
const xhr = new XMLHttpRequest();
const d = new Date();
var res = document.getElementById("res");
xhr.onload = function () {
  let data = this.response;
  data = JSON.parse(data);
  console.log(data);
  for (i = 0; i < data.length; i++) {
    img = document.createElement("img");
    img.className = "poster";
    img.src = data[i].show.image.medium;
    res.appendChild(img);
  }
};
xhr.onerror = function () {};
submit.addEventListener("click", function (e) {
  e.preventDefault();
  c_name = document.getElementById("takeinput").value;
  console.log(c_name);
  URL = "https://api.tvmaze.com/search/shows?q= " + c_name;
  xhr.open("GET", URL);
  xhr.send();
});
const themeColors = document.querySelectorAll('[name="theme"]');

const storeTheme = function (theme) {
  localStorage.setItem("theme", theme);
  console.log("themeset ho gyi");
};

const applyTheme = function () {
  const activeTheme = localStorage.getItem("theme");

  themeColors.forEach((themeOption) => {
    if (activeTheme == themeOption.id) {
      themeOption.checked = true;
    }
  });
};
themeColors.forEach((themeOption) => {
  themeOption.addEventListener("click", () => {
    storeTheme(themeOption.id);
  });
});

document.onload = applyTheme();
green = document.getElementById("Green");
green.addEventListener("click", function () {
  document.getElementById("title").style.color = "green";
});
document.onload = applyTheme();
grey = document.getElementById("grey");
grey.addEventListener("click", function () {
  document.getElementById("title").style.color = "grey";
});
document.onload = applyTheme();
Pink = document.getElementById("Pink");
Pink.addEventListener("click", function () {
  document.getElementById("title").style.color = "Pink";
});
Blue = document.getElementById("Blue");
Blue.addEventListener("click", function () {
  document.getElementById("title").style.color = "Blue";
});
Dark = document.getElementById("Dark");
Dark.addEventListener("click", function () {
  document.getElementById("title").style.color = "rgb(110, 110, 110)";
});
