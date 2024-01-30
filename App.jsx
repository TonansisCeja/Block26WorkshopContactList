import './App.css'
import { useState } from 'react'

import ContactList from './components/ContactList';

//creates a component that is exported by default 
//so it can be imported  else where

export default function App() {
 
//createsa state variable and assigns setSelectedContactID=null

  const [selectedContactId, setSelectedContactId] = useState(null);
 
//with in return statement you can write pure html
// react components can only return a single element

    // adds component ContactList 
    // can either write <ContactList></ContactList>
    // or <ContactList/>

  return (
    <>
    
        <ContactList />
      
    </>
  );
}

//export default App
