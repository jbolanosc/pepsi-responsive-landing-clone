function imgSlider(img) {
  document.querySelector(".pepsi").src = img;
}

function changeBgColor(color) {
  const wrapper = document.querySelector(".wrapper");
  wrapper.style.backgroundColor = color;
}

function toggleMenu() {
  const menu = document.querySelector(".toggle-menu");
  const navigation = document.querySelector(".navigation");
  const wrapper = document.querySelector(".wrapper");
  document.body.classList.toggle("fixed");
  menu.classList.toggle("active");
  navigation.classList.toggle("active");
  wrapper.classList.toggle("active");
}
