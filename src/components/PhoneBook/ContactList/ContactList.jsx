import styles from './contactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../../redux/selectors';
import { Contact } from '../Contact/Contact';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
