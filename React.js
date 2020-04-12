const React = {
  hooks: [],
  hookCursor: 0,
  createElement(tag, props, ...children) {
    return {
      tag,
      props: { ...props, children },
    };
  },
  render() {
    this.hookCursor = 0;

    // TODO
  },
  useState(initialState) {
    const currentIndex = this.hookCursor;

    this.hooks[currentIndex] = this.hooks[currentIndex] || initialState;

    const setState = (newState) => {
      this.hooks[currentIndex] = newState;
      render();
    };

    this.hookCursor++;

    return [this.hooks[currentIndex], setState];
  },
};

export default React;
