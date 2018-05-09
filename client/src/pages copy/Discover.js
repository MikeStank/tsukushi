import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";

//
class Discover extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadNextDog();
  }

  handleBtnClick = event => {
    // Get the data-value of the clicked button
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    const newState = { ...this.state };

    if (btnType === "pick") {
      // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
      newState.match = 1 === Math.floor(Math.random() * 5) + 1;

      // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
      newState.matchCount = newState.match
        ? newState.matchCount + 1
        : newState.matchCount;
    } else {
      // If we thumbs down'ed the dog, we haven't matched with it
      newState.match = false;
    }
    // Replace our component's state with newState, load the next dog image
    this.setState(newState);
    this.loadNextDog();
  };

  loadNextDog = () => {
    API.getRandomDog()
      .then(res =>
        this.setState({
          image: res.data.message
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
//       <div>
//         <h1 className="site-heading d-none d-lg-block">
//           <div>
//           <span className="site-heading-upper">美 Utsukushi</span>
//           </div>
//         </h1>
//       </div>
//       <div>
//        <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
//         <div className="container">
//
//           <div className="collapse navbar-collapse px-lg-4 animated fadeInDown" id="navbarResponsive">
//             <div className="navbar-nav mx-auto px-lg-4">
//               <div className="cta-inner text-center rounded">
//
//                   <span className="section-heading-lowersection-heading mb-4">your beauty recommendations</span>
//
//               </div>
//             </div>
//           </div>
//         </div>
//      </nav>
// </div>
//
//       <section className="page-section cta">
//         <div className="container">
//
//     </div>
//
//     <div className="container-fluid animated bounceInLeft">
//     <div className="row">
//       <div className="col-xl-9 mx-auto">
//         <div className="cta-inner text-center rounded">
//
//           <ul className="gallery row">
//             <li className="col-sm">
//               FOUNDATION
//             </li>
//             <li className="col-sm">
//               BLUSH
//             </li>
//             <li className="col-sm">
//               EYE SHADOW
//             </li>
//             <li className="col-sm">
//               LIPSTICK
//             </li>
//           </ul>
//
//     </div>
//     </div>
//       </div>
//         </div>
//
//         <div className="container-fluid animated bounceInRight">
//           <div className="row">
//             <div className="col-xl-9 mx-auto">
//               <div className="cta-inner text-center rounded">
//
//                 <div className="row">
//           <div className="col">col</div>
//           <div className="col">col</div>
//           <div className="col">col</div>
//           <div className="col">col</div>
//         </div>
//
//         </div>
//           </div>
//             </div>
//               </div>
//       </section>


      <div>
        <h1 className="text-center">Choose What You Like</h1>
        <h3 className="text-center">
          Thumbs up will send it to your Profile
        </h3>
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
        <h1 className="text-center">
          You have {this.state.matchCount} items in your drawer so far!
        </h1>
        <Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
          product added to your drawer
        </Alert>
      </div>
    );
  }
}

export default Discover;
