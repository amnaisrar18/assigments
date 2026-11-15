let count = Number(localStorage.getItem('tasbihCount')) || 0;

const display = document.getElementById('count-display');
const countBtn = document.getElementById('count-btn');
const resetBtn = document.getElementById('reset-btn');
const statusText = document.getElementById('status-text');

display.textContent = count;
countBtn.addEventListener('click', () => {
    count++;
    display.textContent = count;
});
setInterval(() => {
    localStorage.setItem('tasbihCount', count);
    statusText.textContent = `Saved at ${new Date().toLocaleTimeString()}`;
}, 3000);

resetBtn.addEventListener('click', () => {
    count = 0;
    display.textContent = count;
    localStorage.setItem('tasbihCount', 0);
    statusText.textContent = 'Counter reset';
});
