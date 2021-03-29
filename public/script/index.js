if ("storage" in navigator) {
  console.log("storage is available");
  localStorage.setItem(500778928, JSON.stringify({ name: "nathan" }));
  console.log("data:", JSON.parse(localStorage.getItem(500778928)));
}
