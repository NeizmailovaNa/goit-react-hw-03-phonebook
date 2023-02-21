import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/Filter/Filter.module.css'

const Filter = props => {
  return (
    <form className={css.form}>
      <label className={css.text} for='filter'>
        Find contacts by name:
      </label>
      <input 
            className={css.input}
            id='filter'
            name="filter" 
            onChange={props.onInputHendler}
        >
        </input>
    </form>
  );
};

Filter.propTypes = {
  onInputHendler: PropTypes.func.isRequired,
};

export default Filter;