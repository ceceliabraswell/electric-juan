function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const hideSidebar = document.querySelector(".sidebar");
  hideSidebar.style.display = "none";
}

function sendEmail() {
  alert("Email sent!");
  document.getElementById('reset').reset();
}