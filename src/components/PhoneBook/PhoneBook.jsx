import styles from './phoneBook.module.css';

import ContactForm from './ContactsForm';
import ContactList from './ContactList';
import Filter from './SearchBox';

const PhoneBook = () => {
  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default PhoneBook;
