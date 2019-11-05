import React from "react";
import { Router, Link } from "@reach/router";
import Thanks from './pages/Thanks';
import Shop from './pages/Shop';
import styled from "styled-components";

const Body = styled.div`
  padding: 0px;
  margin: 0px;
  min-height: 100%;
  height: 100%;
  width:100%;
  background-color: #f6f8fa;
  position:absolute;
  min-width:100%;
`;

const StyledRouter = styled(Router)`
  display:flex;
  width:100%;
  height:100%;
`;

function App() {
  return (
    <Body>
      <StyledRouter>
        <Shop path="/" />
        <Thanks path="/ordenProcesada/:nOrden"/>
      </StyledRouter>
    </Body>
  );
}

export default App;
