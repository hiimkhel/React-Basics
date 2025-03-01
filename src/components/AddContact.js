import React from 'react';
import withRouter from './middleware';

class AddContact extends React.Component{       

    state ={
        name: "",
        email: ""
    }
    //Method for add button
    add = (e) =>{
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All fields are mandatory!");
            return;
        }
        //Passing the value of user input
        this.props.addContactHandler(this.state);
        //Resets value of forms
        this.setState({name: "", email: ""});  

        this.props.navigate("/");

        
    }
    render() {
        return(
            <div>
                <h2>Add Contact</h2>
                <form className='ui form' onSubmit={this.add}> {/* forms action */}
                    {/* @Input with value and anonoymouse function to set user input to current value of name */}
                    <div className='field'>
                        <label>Name</label>
                        {/*Set value of variable to users input*/}
                        <input type='text' value={this.state.name} 
                        name='name' placeholder='Name' 
                        onChange={(e) => this.setState({name: e.target.value})}/>  {/*anonymous function that set user input */}
                    </div>
                    {/* @Input with value and anonoymouse function to set user input to current value of email */}
                    <div className='field'>
                        <label>Email</label>
                        {/*Set value of variable to users input*/}
                        <input type='text' name='email' value={this.state.email} 
                        placeholder='Email' onChange={(e) => this.setState({email: e.target.value})}/>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            
            </div>
        )
    }
};
//injecting HOC to class component
export default withRouter(AddContact);