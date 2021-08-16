import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import * as contactsOperations from '../../redux/phonebook/phonebook-operations';

import s from './Phonebook.module.css';

const PhonebookItem = ({ name, number, id}) => {
  const dispatch = useDispatch();
  const onDelete = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <>
      <span>
        {name} : {number}
      </span>
      <button type="button" className={s.close} onClick={() => onDelete(id)}>
        +
      </button>
    </>
  );
};

PhonebookItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

// const mapDispatchToProps = dispatch => ({
//   onDelete: id => dispatch(contactsOperations.deleteContact(id)),
// });

export default PhonebookItem;
