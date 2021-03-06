import React from "react";
import "./FriendCard.css";

const FriendCard = props => (

  <div className="card" onClick={() => props.clickCount(props.id)}>
    <div className="card-body">
      <img alt={props.name} src={props.image} />
    </div>
  </div>

);

export default FriendCard;
