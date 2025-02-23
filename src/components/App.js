import React from 'react';
import Header from "./Header";
import AddContact from "./AddContact"; 
import ContactList from "./ContactList";
import './App.css';


function App() {

  const contacts = [
    {
      id: "1",
      name: "Ydrhan",
      email: "ydrhan@gmail.com"
    },
    {
      id: "2",
      name: "john",
      email: "john@gmail.com"
    }
  ];

  return (          //jsx response
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
