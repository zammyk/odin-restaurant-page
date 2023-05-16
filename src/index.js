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

deleteAllChildren(contentContainer);
loadMenu(contentContainer);
