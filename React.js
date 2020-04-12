const React = {
  createElement(tag, props, ...children) {
    return {
      tag,
      props: { ...props, children },
    };
  },
  useState(initialState) {
    let state = initialState;
    const setState = (newState) => {
      state = newState;
    };

    return [state, newState];
  },
};

export default React;
