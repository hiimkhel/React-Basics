import React from "react";
import {Link, useLocation} from "react-router-dom";
import user from "../images/images.png";
const ContactDetail = () => {
    const location = useLocation();
    const contact = location.state?.contact;
    console.log(contact);
    if (!contact) {
        return <h2>No contact details available</h2>;
    }
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="users-img"></img>
                </div>
                <div className="content">
                    <div className="header">{contact.name}</div>
                    <div className="description">{contact.email}</div>
                </div>
            </div> 
            <div className="center-div">
                <Link to={"/"}>
                <button className="ui button blue center" >Return to Contact List</button>
                </Link>
                
            </div>
        </div>
       
    )
};


export default ContactDetail;