import './App.css'
import { useState } from 'react'

import ContactList from './components/ContactList';

//creates a component that is exported by default 
//so it can be imported  else where

export default function App() {
 

  const [selectedContactId, setSelectedContactId] = useState(null);
 
//with in return statement you can write pure html
// react components can only return a single element

  return (
    <>
     {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (

        // adds component ContactList 
        // can either write <ContatList></ContactList>
        // or <ContactList/>

        <ContactList />
      )}
     
      
    </>
  );
}

//export default App
