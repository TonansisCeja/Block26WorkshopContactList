import {useEffect} from 'react'
import {useState} from "react"; 

export default function SelectedContact({contactId})
{
  const [contact, setContact] = useState({});

    useEffect(()=>{
       
        async function getContact()
    {
          try{
              const response = await fetch
              (`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${contactId}`);
              const res = await response.json();
              setContact(res);
              console.log(res);
             }
             catch (error) 
        {
            console.error(error);
          }
    }
    getContact();
},[contactId]);

return(
<>
    <br></br>
        <span>
                 <div className="SelConFont"> <p>Selected Contact :</p> {contact.name} , {contact.email} , {contact.phone} </div>
        </span>
</>

);
}