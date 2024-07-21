import { useDispatch } from "react-redux";
import css from "./ContactItem.module.css";
import { deleteContact } from "../../redux/contactsSlice";

export const ContactItem = ({contact}) => {
   const dispatch = useDispatch();

   const handleOnClick = () => {
      dispatch(deleteContact(contact.id));
   }

   return (
      <li className={css.contactItem}>
         <p>{contact.name}</p>
         <p>{contact.number}</p>
         <button onClick={handleOnClick}>Delete</button>
      </li>
   );
}