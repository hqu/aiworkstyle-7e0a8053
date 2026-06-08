const form = document.getElementById("notify-form");
const message = document.getElementById("thanks-message");
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear().toString();
}

if (form && message) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.classList.add("hidden");
    message.classList.remove("hidden");
  });
}
