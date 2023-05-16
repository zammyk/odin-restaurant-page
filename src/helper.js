export function elementFactory(type, classes, text, children) {
  const ele = document.createElement(type);

  if (classes.length > 0) {
    classes.forEach((cls) => {
      ele.classList.add(cls);
    });
  }

  if (text != "") ele.textContent = text;

  if (children.length > 0) {
    children.forEach((child) => {
      ele.appendChild(child);
    });
  }

  return ele;
}
