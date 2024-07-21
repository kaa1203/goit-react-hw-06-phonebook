import { Layout } from "./Layout/Layout";
import { Section } from "./Section/Section";
import { ContactForm } from "./ContactForm/ContactForm";
import { Search } from "./Search/Search";
import { ContactList } from "./ContactList/ContactList";

export const App = () => {
  return (
    <Layout> 
      <Section title="Phonebook">
        <ContactForm/>
      </Section>

      <Section title="Contacts">
        <Search/>
        <ContactList/>
      </Section>
    </Layout>
  );
};
