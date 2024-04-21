import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contacts/contactsSlice';
import styles from './Contact.module.css';
import PropTypes from 'prop-types';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const removeContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <li className={styles.item} key={id}>
      {name}: {number}
      <button className={styles.btn} onClick={() => removeContact(id)}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
