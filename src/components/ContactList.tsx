import Contact from '../models/Contact';
import ContactCard from './ContactCard';
import './ContactList.css'

interface Props {
allContacts: Contact[];
onDelete: (indexDelete: number) => void
}


const ContactList = ({allContacts, onDelete}: Props) =>{
    return (
      <ul className="ContactList">
        {allContacts.map((contact, index) => (
          <ContactCard key={contact.phoneNumber} contactObj={contact} 
          
          onDelete={()=>onDelete(index)}
          />

          
        ))}
      </ul>
    );
  };






export default ContactList;
