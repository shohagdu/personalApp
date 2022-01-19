import React from "react";
import userImg from '../images/User_Circle.png';

const ContactCard = (props) =>{
    const  {name,email,address  } =props.contact;
    return (
        <div className="item" >
            <hr/>
            <div className="content">
                <img className="ui avatar image" src={userImg} alt=""/>
                <div className="header">{ name}</div>
                <div >{ email}</div>
                <div >{ address}</div>
            </div>
            <i className="trash alternate outline icon" style={{color:"red",fontSize:"16px"}}></i>
        </div>
    );
}
export default ContactCard;