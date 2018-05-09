import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import ProdWrapper from "../components/ProdWrapper";
import Row from "../components/Row";
import Col from "../components/Col";
import Footer from "../components/Footer";
import { SliderPicker } from 'react-color';

const About = () => (
  <div>
    <Hero backgroundImage="https://i.imgur.com/WWfxzrF.jpg">
      <h1>美 Utsukushi</h1>
    </Hero>
    <Row style={{marginLeft: 340, marginTop: 20 }}>

        <h3>click the color buttons below that best describe your features</h3>

    </Row>


  <Container style={{ marginTop: 30 }}>
    <ProdWrapper>
      <Col size="md-3" style={{ marginLeft: 8 }}>
        <h4 style= {{ textAlign: 'center' }}>EYE COLOR</h4>
      </Col>

      <Col size="md-3" style={{ marginLeft: 10 }}>
        <h4 style= {{ textAlign: 'center' }}>HAIR COLOR</h4>
      </Col>

      <Col size="md-3" style={{ marginLeft: 10 }}>
        <h4 style= {{ textAlign: 'center' }}>SKIN COLOR</h4>
      </Col>
    </ProdWrapper>

  </Container>


<Footer />

  </div>

);

export default About;

{/* <footer>
  <div className="container">
    <p className="m-0 small">Copyright &copy; The Glam Squad 2018</p>
  </div>
</footer> */}
{/* <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
  <h1>Pupster</h1>
  <h2>They're the Good Boys and Girls</h2>
</Hero>
<Container style={{ marginTop: 30 }}>
  <Row>
    <Col size="md-12">
      <h1>Welcome To Pupster!</h1>
    </Col>
  </Row>
  <Row>
    <Col size="md-12">

    </Col>
  </Row>
</Container> */}
