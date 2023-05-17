import { elementFactory, createImage } from "./helper";

export function loadContact(node) {
  node.removeAttribute("class");
  ["container", "flex-col"].forEach(function (className) {
    node.classList.add(className);
  });
  node.appendChild(elementFactory("div", ["phone"], "☎️ +91 123 456 7890", []));
  node.appendChild(elementFactory("div", ["address"], "🏠 4 Privet Drive", []));
  node.appendChild(
    createImage("./../assets/restaurant-location.png", "Restaurant Location")
  );
}
