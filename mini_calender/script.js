const dayNum = document.getElementById("day-number");
const monthName = document.getElementById("month-name");
const yearNum = document.getElementById("year");
const dayName = document.getElementById("day-name");

const today = new Date();

monthName.innerText = today.toLocaleString("en", { month: "long" });
dayName.innerText = today.toLocaleString('en', { weekday: 'long' });
dayNum.innerText = today.getDate();
yearNum.innerText = today.getFullYear();
