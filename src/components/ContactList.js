import React from 'react';
import {Link} from"react-router-dom";
import ContactCard from "./ContactCard";    //importing ContactCard component
const ContactList = (props) => {
    console.log(props);
    const deleteContactHandler = (id) =>{
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact) =>{
        return(
            <ContactCard contact={contact} clickHander={deleteContactHandler} key={contact.id}></ContactCard>
        )
    })
    return (
        <div className='main'>
            <div className="ui celled list" style={{marginTop: "50px"}} >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h3 >Contact List</h3>
                    <Link to="/add">   {/*Route to:*/}
                        <button className='ui blue button right'>Add Contact</button>
                    </Link>
                    
                </div>
            
            {renderContactList}

            </div>
        </div>
        
    )
};



export default ContactList;