import React from 'react';
import {  useSelector } from 'react-redux';

import { getVisibleContacts } from '../../redux/phonebook/phonebook-selectors';

import s from './Phonebook.module.css';
import PhonebookItem from './PhonebookItem';

const Phonebook = () => {

 // TODO фильтруем, показываем только те что совпадают*/
const contacts = useSelector(getVisibleContacts);

  return (
    <>
      {contacts && (
        <ul className={s.list}>
          {contacts.map(contact => (
            <li className={s.item} key={contact.id}>
              <PhonebookItem {...contact} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

// const mapStateToProps = state => {
//   return {
//     contacts: getVisibleContacts(state),
//   };
// };

export default Phonebook;
