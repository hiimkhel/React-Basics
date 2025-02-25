import React, {useState, useEffect} from 'react';
import Header from "./Header";
import AddContact from "./AddContact"; 
import {v4 as uuidv4} from "uuid";
import ContactList from "./ContactList";
import DeleteContact from './DeleteContact';
import './App.css';
import ContactDetail from "./ContactDetails";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  //Keeps value of contacts 
  const [contacts, setContacts] = useState(() =>{
    const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedContacts ? JSON.parse(savedContacts) : [];
  });
  //Handler for delete Contact
  const deleteHandler = (id) =>{
    const newContactList = contacts.filter((contacts) =>{
      return contacts.id !== id;
    }) 
    //updates the contacts list to the updated one where the id to remove is filtered out
    setContacts(newContactList);
  }
   //Handler for adding contact
  const addContactHandler = (contact) =>{
    
    //(...) operation is to copy existing value in the array, and the second value is the current
    setContacts([...contacts,{id: uuidv4(), ...contact}]); 
    console.log(contact);
  }
  
  useEffect(() =>{})
  //updates local storage when contacts changes
  useEffect(()=>{
    if(contacts.length === 0){
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]));
    }
    else{
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
    }
    //adds contacts to local storage after converting the array to string
    
  }, [contacts]);


  return (          //jsx response
    <div className="ui container">
      <Router>
        <Header />
        {/*Props*/ }
        <Routes>   {/*Header tag for All routes */}
          {/* Route for route /add */}
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>}></Route>
          {/* Route for initial webpage*/ }
          <Route path="/" element={<ContactList contacts={contacts}/>}></Route>
          {/* Route for individual contact*/ }
          <Route path="/contacts/:id" element={<ContactDetail></ContactDetail>}></Route>
          <Route path="/delete/:id" element={<DeleteContact deleteHandler={deleteHandler}></DeleteContact>}></Route>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
