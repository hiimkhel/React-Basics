import React from "react";
import { useLocation, useNavigate} from "react-router-dom";

const DeleteContact = ({deleteHandler}) => {
    //declartion of variables
    const location = useLocation();
    const contact = location.state?.contact;
    const navigate = useNavigate();

    //variable confirmation of delete
    const confirmDelete = () =>{
        deleteHandler(contact.id);
        navigate("/");
    }
    return (
        <div className="ui container" style={{ marginTop: "2rem" }}>
        <div className="ui negative message">
            <div className="header">Confirm Deletion</div>
            <p>Are you sure you want to delete <strong>{contact.name}</strong>?</p>
        </div>
        <div className="ui buttons">
            <button className="ui red button" onClick={confirmDelete}>Yes, Delete</button>
            <div className="or"></div>
            <button className="ui button" onClick={() => navigate(-1)}>Cancel</button>
        </div>
    </div>
        
    )
};


export default DeleteContact;