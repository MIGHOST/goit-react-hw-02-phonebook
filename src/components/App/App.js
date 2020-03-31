import React, { Component} from 'react';
import ContactForm from '../ContactForm/ContactForm';
import shortid from 'shortid';
import ContactList from '../ContactList/ContactList';
import ContactFilter from '../ContactFilter/ContactFilter';
import findContact from '../helpers/findContact';
import filterContact from '../helpers/filterContact';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  addContact = contact => {
    const { contacts } = this.state;
    const id = shortid.generate();
    const savingContact = {
      id,
      ...contact,
    };
    const oldContacts = this.state.contacts;
    const foundContact = findContact(contacts, contact);

    if (foundContact) {
      alert(`${contact.name} is already in contacts!`);
      return;
    }
    if (contact.name.length > 1 && contact.number.length > 1) {
      this.setState(state => ({ contacts: [...oldContacts, savingContact] }));
    } else if (contact.name.length <= 1) {
      alert('Contact name is too small!');
    } else if (contact.number.length <= 1) {
      alert('Contact number is too small!');
    }
  };

  deleteContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = filterContact(contacts, filter);
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onHandleSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ContactFilter value={filter} onChangeFilter={this.changeFilter} />
        {contacts.length >= 2 && (
          <ContactList
            items={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        )}
      </>
    );
  }
}
