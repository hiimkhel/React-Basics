import React, {useState, useEffect} from 'react';
import Header from "./Header";
import AddContact from "./AddContact"; 
import {v4 as uuidv4} from "uuid";
import EditContact from "./EditContact"
import api from "../api/contacts";
import ContactList from "./ContactList";
import DeleteContact from './DeleteContact';
import './App.css';
import ContactDetail from "./ContactDetails";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  /* const LOCAL_STORAGE_KEY = "contacts"; */
  //Keeps value of contacts 
  const [contacts, setContacts] = useState([]);
  const retrieveContacts = async() =>{
    try {
      const response = await api.get("/contacts"); // Fetch data from API
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching contacts:", error);
      return [];
    }

  }
  //Handler for delete Contact
  const deleteHandler = async (id) =>{
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contacts) =>{
      return contacts.id !== id;
    }) 
    //updates the contacts list to the updated one where the id to remove is filtered out
    setContacts(newContactList);
  }
   //Handler for adding contact
  const addContactHandler = async (contact) =>{
    const request = {
      id: uuidv4(),
      ...contact,
    };
    //routing (POST) Method
    const response = await api.post("/contacts", request);
    //(...) operation is to copy existing value in the array, and the second value is the current
    setContacts([...contacts, response.data]); 
    console.log(contact);
  }

  const updateContactHandler = async (contact) => {
    try {
        const response = await api.put(`/contacts/${contact.id}`, contact);
        setContacts(contacts.map((c) => (c.id === contact.id ? response.data : c)));
    } catch (error) {
        console.error("Error updating contact:", error);
    }
    };
  
  useEffect(() =>{
    const getAllContacts = async () =>{
      const allContacts = await retrieveContacts();
      if(allContacts) setContacts(allContacts);
    }
    getAllContacts();
  }, [])

  

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
          <Route path="/edit" element={<EditContact updateContactHandler={updateContactHandler}></EditContact>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
