const ReactDOM = {
  render(elementObject, container) {
    if (
      typeof elementObject === 'string' ||
      typeof elementObject === 'number'
    ) {
      const domElement = document.createTextNode(String(elementObject));

      container.appendChild(domElement);

      return;
    }

    const domElement = document.createElement(elementObject.tag);

    if (elementObject.props) {
      Object.keys(elementObject.props)
        .filter((prop) => prop !== 'children')
        .forEach((prop) => (domElement[prop] = elementObject.props[prop]));
    }

    if (elementObject.props.children) {
      elementObject.props.children.forEach((child) =>
        ReactDOM.render(child, domElement)
      );
    }

    container.appendChild(domElement);
  },
};

// export default ReactDOM;
