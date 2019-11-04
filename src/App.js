import React from "react";
import { Router, Link } from "@reach/router";
import Thanks from './pages/Thanks';
import Shop from './pages/Shop';
import styled from "styled-components";

const Body = styled.div`
  padding: 0px;
  margin: 0px;
  min-height: 100%;
  background-color: #f6f8fa;
  position:absolute;
  min-width:100%;
`;

function App() {
  return (
    <Body>
      <h1>RIQRA</h1>
      <nav>
        <Link to="/">Compras</Link>
        <Link to="/ordenProcesada/2">Gracias</Link>
      </nav>

      <Router>
        <Shop path="/" />
        <Thanks path="/ordenProcesada/:nOrden"/>
      </Router>
    </Body>
  );
}

export default App;
