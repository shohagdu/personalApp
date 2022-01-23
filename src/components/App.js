// import logo from '../logo.svg';
import React, {useEffect, useState} from "react";
import {uuid} from 'uuidv4';
import './App.css';
import Header from  './Header'
import AddContact  from "./AddContact";
import ContactList  from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContractHander=(contact)=>{
      console.log(contact);
      setContacts([...contacts, {id:uuid(),...contacts}]);
  }
    useEffect(()=>{
       const retriveContract= JSON.parse( localStorage.getItem(LOCAL_STORAGE_KEY))
       if(retriveContract)setContacts(retriveContract);
    },[])

  useEffect(()=>{
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])
  return (
    <div className="ui container">
      <Header/>
      <AddContact addContractHander={addContractHander}/>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
