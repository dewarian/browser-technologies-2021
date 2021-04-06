/**
 * @title Check if localStorage is available
 * @description Check if storage is available in the navigator if so add item
 */
if ("storage" in navigator) {
  console.log("storage is available");
  localStorage.setItem(500778928, JSON.stringify({ name: "nathan" }));
  // console.log("data:", JSON.parse(localStorage.getItem(500778928)));
}

/**
 * formData is an object that you can use to send HTML form data over http req
 */
// let myForm = document.querySelector("form");
// // console.log("test", myForm);
// let result = new FormData(myForm);
// console.log(result.get("userId"));

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("intro");
  form.addEventListener("submit", handleForm);
});

function handleForm(ev) {
  ev.preventDefault();
  console.log("test: ", ev.target);
  let myForm = ev.target();
  let fd = new FormData(myForm);
  console.log(fd);
}
