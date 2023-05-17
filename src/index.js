import { loadHome } from "./home";
import { loadMenu } from "./menu";

function deleteAllChildren(node) {
  while (node.firstChild != null) node.removeChild(node.firstChild);
}

const contentContainer = document.getElementById("content").children[0];
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");
console.log(contentContainer);

// loadHome(contentContainer);
home.addEventListener("click", (event) => {
  deleteAllChildren(contentContainer);
  loadHome(contentContainer);
});
menu.addEventListener("click", (event) => {
  deleteAllChildren(contentContainer);
  loadMenu(contentContainer);
});
contact.addEventListener("click", (event) => {
  deleteAllChildren(contentContainer);
});
