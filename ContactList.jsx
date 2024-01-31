
import {useEffect} from 'react'
import {useState} from "react"; 
import ContactRow from "./ContactRow";

// conatact array to fill in the table
const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];

export default function ContactList({setSelectedContactId,toggleShow}) 
{ 
       // console.log("Contacts: ", contacts);
          const [contacts, setContacts] = useState(dummyContacts);

       //calls the hook. passes useEffecta callback funstin and an empty dependency array
       //so component will only run once
       //inside useEffect callback function defines a new asynchronous fuction called fetchContacts

    useEffect(()=>{
    async function fetchContacts() 
    {
        try {
              
            //fetches data from server assign results in contacts then shows results in console

            const response = await fetch
                 ( "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
                 const result = await response.json();
                 setContacts(result);

                 console.log(contacts);

            } 
             catch (error) 

           {
            console.error(error);
           }
    }
      fetchContacts()



   },[]);


  return ( 
  <>
   
    <span>
    
        <table>
          <thead>
            
            <tr>
            
              <th colSpan="3">Contact List <p> <center> Click on a contact to view that contact only</center> </p></th>
              
            </tr>
          </thead>
          <tbody>
         
            <tr>
              <td className="bold">Name</td>
              <td className="bold">Email</td>
              <td className="bold">Phone</td>
              
            </tr>

            {
               contacts.map((contact) => {
                return <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId} toggleShow={toggleShow}/>;
              })

             }
          </tbody>
        </table>
     </span> 
   </>

    ); 
}