import React from "react";

import "./Home.scss";
import Button from "../commons/Button";

class Home extends React.Component {
  render() {
    return (
      <div className="home__container">
        <h1 className="home__title">PRUEBA NEXT</h1>
        <div className="home__button-container">
          <Button>Aceptar</Button>
        </div>
      </div>
    );
  }
}

export default Home;
