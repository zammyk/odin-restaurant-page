import { elementFactory, createImage } from "./helper";

function createCard(name, price, description) {
  const nameEle = elementFactory("div", ["item-name"], name, []);
  const priceEle = elementFactory("div", ["item-price"], price, []);
  const descriptionEle = elementFactory(
    "div",
    ["item-description"],
    description,
    []
  );

  const card = elementFactory("div", ["card"], "", [
    nameEle,
    priceEle,
    descriptionEle,
  ]);
  return card;
}

function createFieldSet(legendName) {
  const legend = elementFactory("legend", [], legendName, []);
  const fieldset = elementFactory("fieldset", ["flex-col"], "", [
    legend,
    createCard("pep", 69, "oausfeugoa"),
  ]);
  return fieldset;
}

function createImageContainer(src, alt, name) {
  const img = createImage(src, alt);
  const title = elementFactory("div", ["name"], name, []);
  const imgContainer = elementFactory("div", ["image-container"], "", [
    img,
    title,
  ]);
  return imgContainer;
}

export function loadMenu(node) {
  node.removeAttribute("class");
  ["container", "grid", "remove-top-padding", "no-gap"].forEach(function (
    className
  ) {
    node.classList.add(className);
  });
  const items = elementFactory("div", ["items", "flex-col"], "", [
    createFieldSet("Pizza"),
    createFieldSet("Pizza"),
    createFieldSet("Pizza"),
  ]);
  const images = elementFactory("div", ["images", "flex-col"], "", [
    createImageContainer("./../assets/pizza-pepperoni.jpg", "ALT", "some name"),
    createImageContainer("./../assets/pizza-pepperoni.jpg", "ALT", "some name"),
    createImageContainer("./../assets/pizza-pepperoni.jpg", "ALT", "some name"),
    createImageContainer("./../assets/pizza-pepperoni.jpg", "ALT", "some name"),
  ]);
  node.appendChild(items);
  node.appendChild(images);
}
