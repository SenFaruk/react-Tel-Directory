import React from "react";
import Form from "./Form";
import List from "./List";
import { useState, useEffect} from "react";

function Contacts() {
  const [contacts, setContacts]= useState([]);

  useEffect(()=>{
    console.log(contacts);
  },[contacts])

  return (
    <div>
      <List />
      <Form addContact={setContacts} contacts={contacts}/>
    </div>
  );
}

export default Contacts;
