const ReactDOM = {
  render(elementObject, container) {
    const element = document.createElement(elementObject.type);
    element.classList.add(elementObject.className);
    element.innerHTML = elementObject.children;

    container.appendChild(element);
  },
};

export default ReactDOM;
