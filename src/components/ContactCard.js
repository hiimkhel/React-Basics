import React from "react";
import {Link} from "react-router-dom";
import user from "../images/user.png";
const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    return (
        
        <div className='item' >
            <img className="ui avatar image" src={user} alt="user"/>
           
            <div className="content">
                <Link to={`/contacts/${id}`} state={{ contact: props.contact}}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>
            </div>
            <Link to={`/delete/${id}`} state={{contact: props.contact}}>
                <i className="trash alternate outline icon right floated" style={{ color: "red", cursor: "pointer" , marginTop: "7px"}}></i>
            </Link>
            <Link to={`/edit`} state={{contact: props.contact}}>
                <i className="edit alternate outline icon right floated" style={{ color: "blue", cursor: "pointer" , marginTop: "7px"}}></i>
            </Link>
            
         </div>
    )
};


export default ContactCard;