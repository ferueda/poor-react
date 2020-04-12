const React = {
  states: [],
  stateIndex: 0,
  createElement(tag, props, ...children) {
    return {
      tag,
      props: { ...props, children },
    };
  },
  render() {
    this.stateIndex = 0;

    // build the render function
  },
  useState(initialState) {
    const currentIndex = this.stateIndex;

    states[currentIndex] = initialState;

    const setState = (newState) => {
      this.states[currentIndex] = newState;
      render();
    };

    this.stateIndex++;

    return [this.states[currentIndex], setState];
  },
};

export default React;
