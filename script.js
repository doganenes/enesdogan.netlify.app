let icon = document.getElementById(".icon");

function handUp() {
  icon.style.transform = transLateY(10);
}

setInterval(handUp, 1000);
