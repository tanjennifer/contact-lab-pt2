import { useState } from "react";
import Contact from "../models/Contact";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import "./Home.css";

const Home = () => {
  //define initial contacts using UseState
  const [contacts, setContacts] = useState<Contact[]>([
    {
      firstName: "Billy",
      lastName: "Koppel",
      phoneNumber: 1231231233,
      isFavorite: true,
    },
    {
      firstName: "Oscar",
      lastName: "Cat",
      phoneNumber: 1122334455,
      isFavorite: false,
    },
    {
      firstName: "Bo",
      lastName: "Dog",
      phoneNumber: 1234567890,
      isFavorite: false,
    },
  ]);

const addContact = (newCon: Contact): void => {
    setContacts((prev)=>{
        //make a deep copy
        const copyOfList: Contact[] = [...prev.slice(0)];
        //modify the copy
        copyOfList.push(newCon);
        //return that copy
        return copyOfList;
    })
}

const deleteContact = (index: number): void =>{
    //make a copy and modify copy
    setContacts((prev)=>{
        //make a copy
        const copyOfPrev = [...prev.slice(0)];
        //modify copy
        copyOfPrev.splice(index, 1);
        //return that copy
        return copyOfPrev;
    })
}

const flipIcon = (location: number) =>{
    setContacts((prev)=>{
        const copyOfContacts = prev.slice(0)
        const copyOfCon = {...prev[location]}
        copyOfCon.isFavorite == !copyOfCon.isFavorite
        copyOfContacts[location] = copyOfCon
        return copyOfContacts
    })

}

  return (
    <main className="Home">
      <ContactForm onAdd={addContact} />
      <ContactList
        allContacts={contacts}
        onDelete={deleteContact}
        onUpdate={flipIcon}
      />
    </main>
  );
};

export default Home;
