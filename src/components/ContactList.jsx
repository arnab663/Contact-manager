
import React from 'react';
import ContactCard from './ContactCard';
import { useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../App.css'

const ContactList = () => {
  const { contacts, removeContactHandler } = useOutletContext();

  const deleteContactHandler = (id) => {
    removeContactHandler(id);
  };

  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id}
        deleteHandler={deleteContactHandler}
      />
    );
  });

  return (
    <>
      <div className='flex-container-justify-even'>
        <h2>Contacts</h2>
        <Link to="/add"><button className='ui button blue'>add more...</button></Link>
      </div>
      {contacts.length ? (
        <div className="ui celled list">{renderContactList}</div>
      ) : (
        <p className="grey">( no contact to show )</p>
      )}
      <Link to="/" className="ui button orange">Back to Home</Link>
    </>
  );
};

export default ContactList;
