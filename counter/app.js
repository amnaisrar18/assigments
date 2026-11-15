let count = 0;

const display = document.getElementById('count-display');
const countBtn = document.getElementById('count-btn');
const resetBtn = document.getElementById('reset-btn');

countBtn.addEventListener('click', () => {
  count++;
  display.textContent = count;
});

resetBtn.addEventListener('click', () => {
  count = 0;
  display.textContent = count;
});
