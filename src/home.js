const heading = document.createElement("div");
heading.classList.add("heading");
heading.textContent = "Cantinae's Pizzaria";

const about = document.createElement("div");
about.classList.add("about");
about.textContent =
  "We serve pizza's like you've never had before.\nEat it like you mean it!";

const img = document.createElement("img");
img.src = "./../assets/chef.jpg";
img.alt = "Chef Image";

const imgContainer = document.createElement("div");
imgContainer.classList.add("image-container");
imgContainer.appendChild(img);

const link = document.createElement("a");
link.href = "https://bit.ly/3dV6cFr";
link.textContent = "Order Now!";

const linkDiv = document.createElement("div");
linkDiv.classList.add("link");
linkDiv.appendChild(link);

export function loadHome(node) {
  node.classList.add("flex-col");
  node.appendChild(heading);
  node.appendChild(about);
  node.appendChild(imgContainer);
  node.appendChild(linkDiv);
}
