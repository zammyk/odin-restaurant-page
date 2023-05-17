import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";

function deleteAllChildren(node) {
  while (node.firstChild != null) node.removeChild(node.firstChild);
}

const contentContainer = document.getElementById("content").children[0];
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");

let currPage = home;
loadHome(contentContainer);
home.addEventListener("click", (event) => {
  if (currPage === home) return;
  currPage = home;
  deleteAllChildren(contentContainer);
  loadHome(contentContainer);
});
menu.addEventListener("click", (event) => {
  if (currPage === menu) return;
  currPage = menu;
  deleteAllChildren(contentContainer);
  loadMenu(contentContainer);
});
contact.addEventListener("click", (event) => {
  if (currPage === contact) return;
  currPage = contact;
  deleteAllChildren(contentContainer);
  loadContact(contentContainer);
});
