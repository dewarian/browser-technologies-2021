/**
 * @title Check: JavaScript is available
 * @description Checks if JavaScript is available, and hides the banner.
 */
const noJavascript = document.querySelector("label");

if (noJavascript.classList.contains("disabledJS")) {
  console.log("Javascript is enabled.");
  /* Remove Node from DOM if JS is available */
  // noJavascript.classList.add("visually-hidden");
  noJavascript.remove();
}
