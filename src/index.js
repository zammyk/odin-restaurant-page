import { loadHome } from "./home";

function deleteAllChildren(node) {
  while (node.firstChild != null) node.removeChild(node.firstChild);
}

const contentContainer = document.getElementById("content").children[0];
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");
console.log(contentContainer);

setTimeout(() => {
  deleteAllChildren(contentContainer);
  contentContainer.classList.remove("grid");
  contentContainer.classList.add("flex-col");
  loadHome(contentContainer);
}, 5000);
