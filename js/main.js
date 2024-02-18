// Sidebar Toggle 
let sidebarToggleClose = document.querySelector(".sidebar-toggle-close");
let sidebar = document.querySelector(".sidebar");
sidebarToggleClose.addEventListener("click", () => {
  if (localStorage.getItem("sidebarSmall") == "true") {
    localStorage.setItem("sidebarSmall", "false");
    sidebar.classList.remove("sidebar-small");
  } else {
    localStorage.setItem("sidebarSmall", "true");
    sidebar.classList.add("sidebar-small");
  }
});

if (localStorage.getItem("sidebarSmall") == "true") {
  sidebar.classList.add("sidebar-small");
} else {
  sidebar.classList.remove("sidebar-small");
}
