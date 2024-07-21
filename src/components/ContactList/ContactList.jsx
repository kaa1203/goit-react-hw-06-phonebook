import { useSelector } from "react-redux";
import { getContacts, getSearch } from "../../redux/selector";
import { ContactItem } from "../ContactItem/ContactItem";

const fetchContacts = (search, contacts) => {
   return contacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase()));
}

export const ContactList = () => {
   const search = useSelector(getSearch);
   const contacts = useSelector(getContacts);
   const filteredContacts = fetchContacts(search, contacts);
   
   return (
      <ul>
         {
            filteredContacts.map(contact => (
               <ContactItem
                  key={contact.id}
                  contact={contact}
               />
            ))
         }
      </ul>
   );
}