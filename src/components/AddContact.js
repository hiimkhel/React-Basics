import React from 'react';

class AddContact extends React.Component{
    render() {
        return(
            <div className='ui form'>
                <h2>Add Contact</h2>
                <form>
                    <div className='field'>
                        <label>Name</label>
                        <input type='text' name='name' placeholder='Name'/>
                    </div>

                    <div className='field'>
                        <label>Email</label>
                        <input type='text' name='email' placeholder='Email'/>
                    </div>
                </form>
            <button className="ui button blue">Add</button>
            </div>
        )
    }
};

export default AddContact;