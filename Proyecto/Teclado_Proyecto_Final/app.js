const keyboard = document.getElementById("keyboard");
const outputText = document.getElementById("outputText");
const statusEl = document.getElementById("status");
const offsetInfo = document.getElementById("offsetInfo");

let isTracking = false;
let currentKey = null;
let timer = null;
let offsetX = 0;
let offsetY = 0;

// === Generar teclado ===
const letters = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");
letters.forEach(letter => {
  const key = document.createElement("div");
  key.className = "key";
  key.textContent = letter;
  keyboard.appendChild(key);
});

// === Iniciar WebGazer ===
webgazer
  .setGazeListener((data) => {
    if (!data || !isTracking) return;

    const x = data.x - offsetX;
    const y = data.y - offsetY;

    const keys = document.querySelectorAll(".key");
    let found = false;

    keys.forEach((key) => {
      const rect = key.getBoundingClientRect();
      if (x > rect.left && x < rect.right && y > rect.top && y < rect.bottom) {
        found = true;
        key.classList.add("active");

        if (currentKey !== key) {
          currentKey = key;
          clearTimeout(timer);
          timer = setTimeout(() => {
            outputText.textContent += key.textContent;
            key.classList.remove("active");
          }, 1000);
        }
      } else {
        key.classList.remove("active");
      }
    });

    if (!found) {
      clearTimeout(timer);
      currentKey = null;
    }
  })
  .begin();

webgazer.showVideo(false).showFaceOverlay(false).showFaceFeedbackBox(false);

// === Botones ===
document.getElementById("btn-toggle").onclick = () => {
  isTracking = !isTracking;
  statusEl.textContent = isTracking ? "Activo" : "Pausado";
};

document.getElementById("btn-reset").onclick = () => {
  offsetX = 0;
  offsetY = 0;
  offsetInfo.textContent = "0, 0";
  alert("Calibración reiniciada.");
};

// === Calibración simple ===
document.getElementById("btn-calib").onclick = async () => {
  alert("Mira los puntos que aparecerán y haz clic en cada uno.");

  const positions = [
    [100, 100],
    [window.innerWidth - 100, 100],
    [window.innerWidth / 2, window.innerHeight / 2],
    [100, window.innerHeight - 100],
    [window.innerWidth - 100, window.innerHeight - 100],
  ];

  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.background = "rgba(0,0,0,0.3)";
  document.body.appendChild(overlay);

  let sumX = 0, sumY = 0, count = 0;

  for (const [x, y] of positions) {
    const point = document.createElement("div");
    point.style.position = "absolute";
    point.style.left = `${x - 10}px`;
    point.style.top = `${y - 10}px`;
    point.style.width = "20px";
    point.style.height = "20px";
    point.style.borderRadius = "50%";
    point.style.background = "#00e5ff";
    overlay.appendChild(point);

    await new Promise((resolve) => {
      point.onclick = async () => {
        for (let i = 0; i < 10; i++) {
          const data = await webgazer.getCurrentPrediction();
          if (data) {
            sumX += data.x - x;
            sumY += data.y - y;
            count++;
          }
          await new Promise(r => setTimeout(r, 100));
        }
        point.remove();
        resolve();
      };
    });
  }

  offsetX = sumX / count;
  offsetY = sumY / count;
  offsetInfo.textContent = `${offsetX.toFixed(1)}, ${offsetY.toFixed(1)}`;
  overlay.remove();

  alert("✅ Calibración completada");
};
