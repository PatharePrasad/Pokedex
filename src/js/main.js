// First target the input
// === DOM Selection ===
const inputE1 = document.querySelector('input');
// Log the input element
document.addEventListener('keypress', function (event) {
  if (event.key === '/') {
    event.preventDefault(); // exclude (/) - don't write it
    inputE1.focus();
  }
});
