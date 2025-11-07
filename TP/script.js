const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const response = document.querySelector("p");
const questionContainer = document.querySelector(".click-event");
questionContainer.addEventListener("click", () => {
questionContainer.classList.toggle("question-clicked");
});
btn2.addEventListener("click", () => {
response.classList.add("show-response");
response.style.color = "green";
});
btn1.addEventListener("click", () => {
response.classList.add("show-response");
response.style.color = "red";
});