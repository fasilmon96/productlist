import { useState } from "react";
import "./App.css";
import Products from "./Component/Products/Products";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className=" App">
      <Container>
        <Products />
      
      </Container>
    </div>
  );
}

export default App;
