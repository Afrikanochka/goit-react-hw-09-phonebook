import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


import * as actions from '../../redux/phonebook/phonebook-actions';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';

import s from './Filter.module.css';

const Filter = () => {
const dispatch = useDispatch();
const filter = useSelector(getFilter);
const onChange = e => dispatch(actions.changeFilter(e.target.value));

return (
  <div className={s.wrapper}>
    <label className={s.label}>
      Find by Name
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={onChange}
        placeholder=" Find contacts by name"
      />
    </label>
  </div>
);
}

// Filter.defaultProps = {
//   filter: '',
// };

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => ({
//   filter: getFilter(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: event => dispatch(actions.changeFilter(event.target.value)),
// });

export default Filter;
