const screens = [...document.querySelectorAll(".card")];
const typedEl = document.getElementById("typed");

const MESSAGE = "I'm blessed that you come into my life daddy, i love you!";
let step = 1;
let timer = null;

function showStep(n){
  step = n;
  screens.forEach(s => s.classList.toggle("is-active", s.dataset.step == n));
  if (n === 3) typeMessage();
}

function typeMessage(){
  if (timer) clearTimeout(timer);
  typedEl.textContent = "";
  let i = 0;

  const run = () => {
    typedEl.textContent = MESSAGE.slice(0, i);
    i++;
    if (i <= MESSAGE.length) timer = setTimeout(run, 26);
  };
  run();
}

document.addEventListener("click", (e) => {
  if (e.target.closest("[data-next]")){
    showStep(Math.min(step + 1, 3));
  }

  if (e.target.closest("[data-bouquet]")){
    document.body.classList.add("bloom");
  }

  if (e.target.closest("[data-replay]")){
    document.body.classList.remove("bloom");
    showStep(1);
  }
});

showStep(1);
