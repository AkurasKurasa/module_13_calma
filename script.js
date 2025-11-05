// script.js

// === Eye-catching animation on load ===
function randomizeBackground() {
  const colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#C77DFF'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = `linear-gradient(135deg, ${randomColor}, #ffffff)`;
  console.log("🎉 Background color changed to:", randomColor);
}

window.addEventListener('load', randomizeBackground);

// === Example function for Jest test ===
function addNumbers(a, b) {
  return a + b;
}

// Export for testing
module.exports = { addNumbers, randomizeBackground };
