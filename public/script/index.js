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
 * formData is an object that you can use to send HTML form data over http requests
 */
let myForm = document.getElementById("intro");
// console.log("test", myForm);

myForm.addEventListener("submit", () => {
  let fd = new FormData();
  fd.append("userId", "111");
  fd.getAll("userId");
});
