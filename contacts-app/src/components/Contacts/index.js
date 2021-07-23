import {useState, useEffect} from 'react'
import List from './List'
import Form from './Form'
import './style.css'

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: "Aza",
            phone_number: "12345"
        },
        {
            fullname: "Braza",
            phone_number: "4321"
        }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts])
    return (
        <div id="container">
        <h2>Contact</h2>
        <List contacts={contacts} />
        <Form addContact={setContacts} contacts={contacts} />
            
        </div>
    )
}

export default Contacts
