document.addEventListener('DOMContentLoaded', () => {
  let counter = 0;

  function updateTimer() {
    counter++;
    document.getElementById('counter').innerText = counter;
  }

  setInterval(updateTimer, 1000);

  document.getElementById('minus').addEventListener('click', () => {
    counter--;
    document.getElementById('counter').innerText = counter;
  });
});