import React from "react";

import Component from "./Component";
import withStore from "./withStore";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
      counter: 0
    };
  }

  render() {
    return (
      <Component
        counter={this.state.counter}
        onClick={() => {
          this.setState(prevState => ({
            counter: prevState.counter + 1,
            toggled: !prevState.toggled
          }));
        }}
        toggled={this.state.toggled}
      />
    );
  }
}

export default withStore(Container);

