const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let setInt;
    stopBtn.setAttribute('disabled', 'disabled');
startBtn.addEventListener('click', changeColor);



function change(event) {
    bodyEl.style.backgroundColor = getRandomHexColor();
}

stopBtn.addEventListener('click', clearInterval(change));

function changeColor() {
    setInt = setInterval(change, 1000)
    startBtn.setAttribute('disabled', 'disabled');
    stopBtn.removeAttribute('disabled'); 
}

function stopik() {
    clearInterval(setInt);
    stopBtn.setAttribute('disabled', 'disabled');
    startBtn.removeAttribute('disabled');
} 


stopBtn.addEventListener('click', stopik);

