import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import Navbar from "./navbar/Navbar";

export default class Details extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <ProductConsumer>
          {value => {
            const {
              id,
              image,
              info,
              price,
              title,
              inCart
            } = value.detailProduct;
            return (
              <div className="container py-4 ">
                {/* product info */}
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={image} className="img-fluid" alt="a laptop" />
                  </div>
                  {/* product text */}
                  <div className="col-10 mx-auto col-md-6 my-3">
                    <h2 className="text-capitalize font-weight-bold">{title}</h2>
                    <p className="pt-2">
                      {info} <br />
                    </p>
                    <h4 className="text-black font-weight-bold">
                      Price: <span>$</span>
                      {price}
                    </h4>
                    {/* buttons */}
                    <div className="pt-4">
                      <Link to="/">
                        <ButtonContainer>back to Laptops</ButtonContainer>
                      </Link>
                      <ButtonContainer
                        disabled={inCart}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        {inCart ? "in Cart" : "add-to-cart"}
                      </ButtonContainer>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </ProductConsumer>
      </React.Fragment>
    );
  }
}
