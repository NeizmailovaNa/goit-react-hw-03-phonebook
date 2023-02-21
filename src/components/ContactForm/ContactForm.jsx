import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import css from 'components/ContactForm/ContactForm.module.css'

class ContactForm extends React.Component {
    state = {
        name: '',
        number: ''
      };
    
      inputChange = e => {
        const {name, value} = e.currentTarget
    
        this.setState ({
         [name]: value, });
      };
    
      formSubmit = e => {
        e.preventDefault();
        const newContact = {
            id: shortid.generate(),
            name: this.state.name,
            number: this.state.number,
          };
    
          this.props.onSubmit(newContact);
          this.setState({ name: '', number: '' });
      };
    
      reset = () => {
        this.setState ({name: '', number: ''})
      }

    render () {
        return (
            <form className={css.form} onSubmit={this.formSubmit}>
                <label 
                className={css.contact_name}
                for='name'>
                 Name
                </label>
                
                <input 
                    className={css.input_name}
                    value={this.state.name}
                    onChange={this.inputChange}
                    id="name"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />

                <label 
                className={css.contact_number}
                for='number'>
                    Number
                </label>

                <input
                    className={css.input_number}
                    value={this.state.number}
                    onChange={this.inputChange}
                    id="number"
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />

                <button 
                    type='submit'>
                    Add contact
                </button>
            </form>
       )
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

export default ContactForm;