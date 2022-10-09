const canvas = document.getElementById("art");
const ctx = canvas.getContext("2d");
const colors = ["red", "yellow", "green", "dodgerblue", "black"];

function generateColorPalet() {
  const colorPalet = document.getElementById("color-palet");
  colorPalet.style.display = "flex";

  for (let i = 0; i < colors.length; i++) {
    const colorCell = document.createElement("td");
    colorCell.classList.add(colors[i]);

    colorCell.addEventListener("click", () => {
      ctx.strokeStyle = colors[i];
    });

    colorPalet.appendChild(colorCell);
  }
}

function getMousePos(e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}

function mouseMove(e) {
  const mousePos = getMousePos(e);
  ctx.lineTo(mousePos.x, mousePos.y);
  ctx.stroke();
}

canvas.addEventListener("mousedown", (e) => {
  e.preventDefault();
  const mousePos = getMousePos(e);
  ctx.beginPath();
  ctx.moveTo(mousePos.x, mousePos.y);

  canvas.addEventListener("mousemove", mouseMove);
  canvas.addEventListener("mouseup", () => {
    canvas.removeEventListener("mousemove", mouseMove);
  });
});

resize.addEventListener("input", (e) => {
  ctx.lineWidth = e.target.value;
});

erase.addEventListener("click", (e) => {
  ctx.strokeStyle = "white";
});

reset.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

window.addEventListener("load", () => {
  generateColorPalet();
  ctx.lineWidth = resize.value;
});
