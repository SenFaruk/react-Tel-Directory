# react-Tel-Directory
telefon rehberi uygulaması
github ta repomuzu oluşturduk
    # react-Tel-Directory
 Id CommandLine
  -- -----------
   1 git clone https://github.com/SenFaruk/react-Tel-Directory.git
   2 cd .\react-Tel-Directory\
   3 npx create-react-app contact-app
   4 cd contact-app
   5 npm start

# components/index.js

import React from 'react';
import List from "./List";
import Form from "./Form"

function Contacts() {
  return (
    <div>
        <List/>
        <Form/>
    </div>
  )
}

export default Contacts

# components/List/index.js

import React from 'react'

function List() {
  return (
    <div>contact List</div>
  )
}

export default List

# components/Form/index.js

import React from 'react'

function Form() {
  return (
    <div>Form</div>
  )
}

export default Form

# App.js
import './App.css';

import Contacts from "./components/Contacts/index";


function App() {
  return (
    <div className="App">
      <Contacts/>
      
    </div>
  );
}

export default App;
