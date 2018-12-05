import React from "react";

import Presenter from "./Presenter";
import withStore from "./withStore";

class LogicHolder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
      counter: 0
    };
  }

  render() {
    return (
      <Presenter
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

export default withStore(LogicHolder);
