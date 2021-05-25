import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import MiniDrawer from "../Menu/index"

class App extends Component {
  render() {
    return (
      <MiniDrawer/>
    )
    }
}

export default withRouter(App);