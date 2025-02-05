// Example of an interaction to personalize the experience

document.addEventListener("DOMContentLoaded", () => {
  const messageElement = document.querySelector('.message p');
  
  // Example of changing the message dynamically
  messageElement.innerText = `"You're my heart, my world, my everything." - Naman`;

  // Adding a simple romantic popup after a few seconds
  setTimeout(() => {
    alert("You're my forever, Muskan. 💖");
  }, 5000);
});
