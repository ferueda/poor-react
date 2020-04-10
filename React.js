const React = {
  createElement(type, props, ...children) {
    return {
      type: type,
      className: props.className,
      children: [props.children, ...children],
    };
  },
};

export default React;
