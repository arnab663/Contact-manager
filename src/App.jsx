

import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';

const Layout = ({ contacts, setContacts, removeContactHandler }) => {
  return (
    <div className="ui container margin-top-60">
      <Header />
      <Outlet context={{ contacts, setContacts, removeContactHandler }} />
    </div>
  );
};

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Layout contacts={contacts} setContacts={setContacts} removeContactHandler={removeContactHandler} />,
      children: [
        {
          path: '/',
          element: <Body />
        },
        {
          path: '/contacts',
          element: <ContactList />
        },
        {
          path: 'add',
          element: <AddContact />
        }
      ]
    }
  ]);

  return <RouterProvider router={appRouter} />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
