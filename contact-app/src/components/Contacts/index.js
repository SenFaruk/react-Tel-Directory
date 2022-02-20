import React from "react";
import Form from "./Form";
import List from "./List";
import { useState, useEffect} from "react";
import "./styles.css";

function Contacts() {
  const [contacts, setContacts]= useState([
    {
    fullname:"mehmet",
    phone_number: "123",
    },{
    fullname:"ayşe",
    phone_number: "456",
    },{
    fullname:"nazlı",
    phone_number: "789",
    }
  ]);


  useEffect(()=>{
    console.log(contacts);
  },[contacts])

  return (
    <div id="container">
      <List contacts={contacts}/>
      <Form addContact={setContacts} contacts={contacts}/>
    </div>
  );
}

export default Contacts;
