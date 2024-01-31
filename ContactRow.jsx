

export default function ContactRow({ setSelectedContactId,contact,toggleShow} ) {
    return (
      <>
      
      <tr 

        onClick={()=>{
                       setSelectedContactId(contact.id);
                       toggleShow(true);
                      }}
      >
       
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>

 
      </>
    );
  }