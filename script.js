// Set the date we're counting down to
const countDownDate = new Date("Jan 31, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time
  const distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.querySelectorAll(".days").forEach(function(element) {
    element.innerHTML = formatTime(days);
  });
  document.querySelectorAll(".hours").forEach(function(element) {
    element.innerHTML = formatTime(hours);
  });
  document.querySelectorAll(".minutes").forEach(function(element) {
    element.innerHTML = formatTime(minutes);
  });
  document.querySelectorAll(".seconds").forEach(function(element) {
    element.innerHTML = formatTime(seconds);
  });

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    document.querySelectorAll(".days").forEach(function(element) {
      element.innerHTML = "00";
    });
    document.querySelectorAll(".hours").forEach(function(element) {
      element.innerHTML = "00";
    });
    document.querySelectorAll(".minutes").forEach(function(element) {
      element.innerHTML = "00";
    });
    document.querySelectorAll(".seconds").forEach(function(element) {
      element.innerHTML = "00";
    });
    // You can customize the message or take some other action here
    console.log("Countdown expired!");
  }
}, 1000);

// Helper function to format time with leading zeros
function formatTime(time) {
  return time < 10 ? "0" + time : time;
}