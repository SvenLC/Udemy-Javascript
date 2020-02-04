const intervalId = setInterval(() => {
  console.log('Sendings analytics data...');
}, 2000);

document.getElementById('stop-analytics-btn').addEventListener('click', () => {
  clearInterval(intervalId);
});
