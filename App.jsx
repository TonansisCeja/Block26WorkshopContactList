import './App.css'
import { useState } from 'react'

import ContactList from './components/ContactList';
import SelectedContact from './components/SelectedContact'

//creates a component that is exported by default 
//so it can be imported  else where


export default function App()
 {

      //creates a show variable and sets it to false

       const [show,toggleShow]=useState(false);

      //creates a state variable and assigns setSelectedContactID=null

       const [selectedContactId, setSelectedContactId] = useState(null);

      //with in return statement you can write pure html
      // react components can only return a single element

      // adds ContactList component  
      // can either write <ContactList></ContactList>
      // or <ContactList/>

return (

            // I modified the following line to replace the div with the SelectedContact component
            //  {selectedContactId ? (<div>Selected Contact View</div>) :( 
            // <ContactList setSelectedContactId={setSelectedContactId}  />)}

            //line45 if there's a contact id then run component SelectedContact else run 
            //ContactList and pass setSelectedContactId

             <>

                  <hr></hr>

                  {
                     show && <button  onClick={() =>{ setSelectedContactId(null); toggleShow(false)}}>View List</button> 
                  }

                  {selectedContactId ? (<SelectedContact contactId={selectedContactId} />) : (
                    <ContactList setSelectedContactId={setSelectedContactId} toggleShow={toggleShow} />)
                  }

                  <hr></hr>

              </>

         );
   }

//export default App
