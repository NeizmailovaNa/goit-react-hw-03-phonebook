import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/ContactList/ContactList.module.css'

class ContactList extends React.Component {
  render() {
    return (
      <>
        <ul>
          {this.props.filteredContacts.map(contact => {
            return (
              <li key={contact.id}>
                <p className={css.contact_information}>
                  {contact.name}: {contact.number}
                </p>
                <button
                  type="button"
                  onClick={() => this.props.deleteItem(contact.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

ContactList.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  filteredContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;