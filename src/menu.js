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

function createFieldSet(legendName, children) {
  const legend = elementFactory("legend", [], legendName, []);
  children.push(legend);
  const fieldset = elementFactory("fieldset", ["flex-col"], "", children);
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
    createFieldSet("Pizza", [
      createCard(
        "Pepperoni",
        69,
        "Tomato sauce, mozarella, pork pepperoni, parmesan"
      ),
      createCard(
        "Margherita",
        69,
        "Tomato sauce, mozarella, cheddar, parmesan, basil"
      ),
      createCard(
        "Pesto Besto",
        69,
        "Basil pesto, mozarella, cherry tomatoes, courgette, mushrooms, caramelized onions, parmesan, fresh basil"
      ),
      createCard(
        "Chicken Chilli Freak",
        69,
        "Chilli freak sauce, mozarella, cheddar, pulled chicken, chillies, jalapeño, minty yoghurt, lime"
      ),
    ]),
    createFieldSet("Pizza", [
      createCard(
        "Brocolli Caesar",
        69,
        "Romaine lettuce, brocolli, croutons, red onions, toasted hazelnuts, parmesan, caesar dressing"
      ),
      createCard("Caprese", 69, "Mixed tomatoes, baby mozarella, basil"),
      createCard(
        "Jamie's Waldorf",
        69,
        "Romaine and radicchio lettuce, rocket grapes, apples, celery, walnuts, feta dressing"
      ),
    ]),
    createFieldSet("Pizza", [
      createCard("Garlic Bread", 69, "Sundried tomatoes & olive tapenade"),
      createCard(
        "Tomato Bruschetta",
        69,
        "Slow roasted cherry tomatoes, whipped ricotta, basil, garlic"
      ),
      createCard(
        "Pizza Puffs",
        69,
        "Fried pizza dough with Tomato dipping sauce"
      ),
    ]),
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
