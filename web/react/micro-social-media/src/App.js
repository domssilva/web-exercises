import React, { Component } from "react";

import Navbar from "./components/Navbar";
import NavSubMenu from "./components/NavSubMenu";
import Backdrop from "./components/Backdrop";
import CardContainer from "./components/CardContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subMenuActive: false
    };
  }

  toggleSubMenu = () => {
    this.setState(prevState => {
      return {
        subMenuActive: !prevState.subMenuActive
      };
    });
  };

  closeSubMenu = () => {
    this.setState({ subMenuActive: false });
  };

  render() {
    let backdrop;

    if (this.state.subMenuActive) {
      backdrop = <Backdrop click={this.closeSubMenu} />;
    }
    return (
      <main className="App" onWheel={this.closeSubMenu}>
        <Navbar navButtonHandler={this.toggleSubMenu} />
        <NavSubMenu show={this.state.subMenuActive} />
        {backdrop}
        <CardContainer />
      </main>
    );
  }
}

export default App;
