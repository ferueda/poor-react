const React = {
  createElement(tag, props, ...children) {
    return {
      tag,
      props: { ...props, children },
    };
  },
};

// export default React;
