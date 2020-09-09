import React from "react";

export default function CartColunms() {
  return (
    // on small screen the cols do not appear
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize font-weight-bold"> Laptops </p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize font-weight-bold"> Laptop's name </p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize font-weight-bold"> price </p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize font-weight-bold"> Amount </p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize font-weight-bold"> remove </p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize font-weight-bold"> Total Price </p>
        </div>
      </div>
    </div>
  );
}
