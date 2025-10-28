import React from "react";
import './styles/Details.css'

export default function Details(props) {
  return (
      <div className="cards">
        <div className="first-content">
          <div className="img">
            <img src={props.src} className="cards-img-top" alt="img" />
          </div>
          <div className="base">
            <p className="card-text">ITEM: {props.name}</p>
          </div>
        </div>
        <div className="second-content">
          <div className="card-bodys">
            <p className="card-text">DESCRIPTION: {props.discription}</p>
            <p className="card-text">ADDRESS: {props.address}</p>
            <p className="card-text">PHONE_NO: {props.phone}</p>
          </div>
        </div>
      </div>
  );
};
