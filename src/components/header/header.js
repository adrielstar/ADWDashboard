import React, {Component} from "react";
import "./header.scss";
import { Container, Nav } from "../styled-components";

import UserImg from "./images/personIcon.png";

export default class header extends Component {
    render() {
      return <React.Fragment> <Nav className="navbar navbar-expand-lg fixed-top is-white is-dark-text">
      <Container className="navbar-brand h1 mb-0 text-large font-medium">
        ADW Dashboard
      </Container>
      <Container className="navbar-nav ml-auto">
        <Container className="user-detail-section">
          <span className="pr-2">Adriel</span>
          <span className="img-container">
            <img src={UserImg} className="rounded-circle" alt="user" />
          </span>
        </Container>
      </Container>
    </Nav></React.Fragment>;
    }
  }