// import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import ProdWrapper from "../components/ProdWrapper";
import Row from "../components/Row";
import Col from "../components/Col";
import Footer from "../components/Footer";
// import { SliderPicker } from 'react-color';

import React, { Component } from "react";
import ProdCard from "../components/ProdCard";

// import Title from "./components/Title";
import products from "../products.json";
// import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    products
  };

  removeProduct = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const products = this.state.products.filter(product => product.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ products });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <ProdWrapper>
        {/* <Title>Products</Title> */}
        {this.state.products.map(product => (
          <ProdCard
            removeProduct={this.removeProduct}
            id={products.id}
            key={products.id}
            name={products.name}
            image={products.image}
            colors={products.occupation}
          />
        ))}
      </ProdWrapper>
    );
  }
}

export default App;
