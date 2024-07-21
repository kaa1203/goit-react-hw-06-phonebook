import css from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { getContacts } from "../../redux/selector";

export const ContactForm = () => {
   const dispatch = useDispatch();
   const contacts = useSelector(getContacts);

   const handleOnSubmit = e => {
      e.preventDefault();
      
      const form = e.target;
      const newContact = {
         name: form.elements.name.value,
         number: form.elements.number.value
      }

      const contactExist = contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase());

      if (contactExist) return alert('Contact already exists!');
      alert('Contact added!')
      dispatch(addContact(newContact));
      form.reset();
   }
   
   return(
      <form className={css.contactForm} onSubmit={handleOnSubmit}>
         <div className={css.inputWrapper}>
            <label className={css.label}>
               Full Name
               <input 
                  type="text"
                  name="name"
                  className={css.formInput}
                  placeholder="Full Name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
                  autoComplete="off"
                  required
               />
            </label>
         </div>

         <div className={css.inputWrapper}>
            <label className={css.label}>
               Number
               <input 
                  type="tel"
                  name="number"
                  className={css.formInput}
                  placeholder="Contact Number"
                  pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  autoComplete="off"
                  required
               />
            </label>
         </div>
         <button className={css.formButton} type="submit">Submit</button>
      </form>
   );
}
