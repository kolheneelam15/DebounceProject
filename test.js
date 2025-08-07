const debounce = require('./debounce');

function log(message) {
  console.log(`${new Date().toLocaleTimeString()}: ${message}`);
}

// Trailing example
console.log("=== Trailing Test ===");
const trailing = debounce(() => log("Trailing executed"), 1000);
trailing();
setTimeout(trailing, 300);
setTimeout(trailing, 700);

// Leading example
setTimeout(() => {
  console.log("\n=== Leading Test ===");
  const leading = debounce(() => log("Leading executed"), 1000, true);
  leading();
  setTimeout(leading, 300); // Ignored
  setTimeout(leading, 800); // Ignored
  setTimeout(leading, 1500); // Executed again
}, 3000);
