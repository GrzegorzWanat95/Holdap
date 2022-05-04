const targetDiv = document.getElementById("chat");
const btnOpen = document.getElementById("close");
const btnClose = document.getElementById("open");
btnOpen.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "flex";
  }
};
btnClose.onclick = function () {
  if (targetDiv.style.display !== "flex") {
    targetDiv.style.display = "flex";
  } else {
    targetDiv.style.display = "flex";
  }
};     

