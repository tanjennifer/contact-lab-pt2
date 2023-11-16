import { FormEvent, useState } from "react";
import "./ContactForm.css";
import Contact from "../models/Contact";

interface Props {
  onAdd: (contact: Contact) => void;
}

const ContactForm = ({ onAdd }: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState(0);
  const [favorite, setFavorite] = useState(false);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault(); //prevent form from reloading; slide 96
   
    onAdd({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: number,
      isFavorite: favorite,
    });
  };

  return (
    <div className="ContactForm">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="lastName">Last Name:</label>
        <input id="lastName" type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input id="phoneNumber" type="tel" value={number} onChange={(e)=>setNumber(e.target.valueAsNumber)}/>

        <div className="checkbox-submit-container">
          <div>
            <label>Set as favorite?</label>
            <input type="checkbox" checked={favorite} onChange={(event)=>setFavorite(event.target.checked)}/>
          </div>
          <button type="submit">Add Contact</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
