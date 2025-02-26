import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EditContact = ({ updateContactHandler }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { id, name: initialName, email: initialEmail } = location.state.contact;

    const [name, setName] = useState(initialName);
    const [email, setEmail] = useState(initialEmail);

    const edit = (e) => {
        e.preventDefault();
        if (name === "" || email === "") {
            alert("All fields are mandatory!");
            return;
        }

        // Update the contact
        updateContactHandler({ id, name, email });

        // Navigate back to home
        navigate("/");
    };

    return (
        <div>
            <h2>Edit Contact</h2>
            <form className='ui form' onSubmit={edit}>
                <div className='field'>
                    <label>Name</label>
                    <input
                        type='text'
                        value={name}
                        name='name'
                        placeholder='Name'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className='field'>
                    <label>Email</label>
                    <input
                        type='text'
                        name='email'
                        value={email}
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button className="ui button blue">Edit</button>
            </form>
        </div>
    );
};

export default EditContact;
