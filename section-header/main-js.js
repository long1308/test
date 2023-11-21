function openNav() {
  document.querySelector(".header-navigation").classList.add("show");
  document.querySelector(".overlay").style.display = "block";
}

function closeNav() {
  document.querySelector(".header-navigation").classList.remove("show");
  document.querySelector(".overlay").style.display = "none";
}

function openCart() {
  document.querySelector(".cart-navigation").classList.add("show");
  document.querySelector(".overlay").style.display = "block";
}
function closeLogin() {
  document.querySelector(".login-navigation").classList.remove("show");
  document.querySelector(".overlay").style.display = "none";
}
function openLogin(event) {
  event.preventDefault();
  document.querySelector(".login-navigation").classList.add("show");
  // document.querySelector(".overlay").style.display = "block";
}
function closeCart() {
  document.querySelector(".cart-navigation").classList.remove("show");
  document.querySelector(".overlay").style.display = "none";
}
function openSearch() {
  var searchNavigation = document.querySelector(".search-navigation");
  var overlay = document.querySelector(".overlay");
  var searchIcon = document.querySelector(
    ".container-right__icon.header-top__search i"
  );

  // Thêm lớp "show-search" để hiển thị bảng search
  searchNavigation.classList.add("show-search");

  // Hiển thị overlay
  overlay.style.display = "block";

  // Thay đổi icon search thành icon close
  searchIcon.classList.remove("fa-solid", "fa-magnifying-glass");
  searchIcon.classList.add("fas", "fa-times");
}

function closeSearch() {
  var searchNavigation = document.querySelector(".search-navigation");
  var overlay = document.querySelector(".overlay");
  var searchIcon = document.querySelector(
    ".container-right__icon.header-top__search i"
  );

  // Loại bỏ lớp "show-search" để ẩn bảng search
  searchNavigation.classList.remove("show-search");

  // Ẩn overlay
  overlay.style.display = "none";

  // Thay đổi icon close thành icon search
  searchIcon.classList.remove("fas", "fa-times");
  searchIcon.classList.add("fa-solid", "fa-magnifying-glass");
}

function showTab(tabId, event) {
  event.preventDefault();

  // Hide all tabs
  var tabs = document.querySelectorAll(".tab-content");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  // Remove active-tab class from all li elements
  var tabNavigationItems = document.querySelectorAll(".tab-navigation li");
  tabNavigationItems.forEach((item) => {
    item.classList.remove("active-tab");
  });

  // Show the selected tab
  var selectedTab = document.getElementById(tabId);
  selectedTab.classList.add("active");

  // Add active-tab class to the clicked li element
  event.target.closest("li").classList.add("active-tab");
}
