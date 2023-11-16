import Contact from "../models/Contact";
import "./ContactCard.css";

interface Props {
  contactObj: Contact;
  onDelete: () => void;
  onUpdate: () => void
}



const ContactCard = ({ contactObj, onDelete, onUpdate }: Props) => {
  return (
    <li className="name">
      <p>
        {contactObj.firstName} {contactObj.lastName}
      </p>

      <div className="details">
        <p className="number">{contactObj.phoneNumber}</p>
        {contactObj.isFavorite ? (
          <i className="fa-solid fa-heart" onClick={onUpdate}></i>
        ) : (
          <i className="fa-regular fa-heart" onClick={onUpdate}></i>
        )}
        <i className="fa-solid fa-trash" onClick={()=> onDelete()}></i>
      </div>
    </li>
  );
};

export default ContactCard;
