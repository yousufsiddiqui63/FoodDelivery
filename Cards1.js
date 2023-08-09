import React from "react";

export default function Cards1(props) {
  let options = props.options;
  let priceOptions = Object.keys(options)

  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHight: "360 px" }}>
        <img src={props.imgSrc} className="=card-img-top" alt="......." style={{height:"120px", objectFit: "fill"}} />
        // "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1599&q=80" className="card-img-top" alt="..."
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          /* <p className="card-text">This is some Important Text.</p> */
          <div className="container w-100">
            <select className="m-2 h-100 w-100 bg-success">
              {Array.from(Array(6), (i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {" "}
                    {i + 1} {" "}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded">
              {priceOptions.map ((data) =>{
                return (
                  <option key={i+ 1} value={i+1}> {i+1} </option>
                )
              })}
            </select>

            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
}
