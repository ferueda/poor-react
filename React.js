const React = {
  createElement(type, props, ...children) {
    return {
      type,
      props: { ...props, children },
    };
  },
};

export default React;
