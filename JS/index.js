const windowEl = document.querySelector(".window");

windowEl.addEventListener("click", () => {
  windowEl.classList.toggle("active");
});

function updateDigitalClock() {
  // 1. Fetch current system time
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // 2. Determine AM or PM format
  const ampm = hours >= 12 ? "PM" : "AM";

  // 3. Convert 24-hour time to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // If hour is 0, make it 12

  // 4. Pad values with a leading zero if they are less than 10
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  // 5. Inject strings directly into the DOM
  document.getElementById("Clock").textContent =
    `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
}

// Execute the clock immediately on page load
updateDigitalClock();

// Re-run the function every 1000ms (1 second) to keep it live
setInterval(updateDigitalClock, 1000);
