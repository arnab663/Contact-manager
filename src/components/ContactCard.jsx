import React from "react";
import '../App.css'

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="padding-10 border-orange margin-bottom-15">
      {/* <img className="ui avatar image" src={user} alt="user" /> */}
      <div className="content padding-top-bottom-10">
        <div className="header bold-text">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", cursor: "pointer"}}
        onClick={()=>props.deleteHandler(id)}
      ></i>
    </div>
  );
};

export default ContactCard;