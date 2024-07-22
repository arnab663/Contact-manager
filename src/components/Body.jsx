

import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Body = () => {
  return (
    <div className="ui vertical stripe segment">
      <div className="ui text container center aligned">
        <h1 className="ui header" style={{ color: 'orange'}}>Welcome to Contact Manager</h1>
        <p>Manage your contacts efficiently and effectively.</p>
        <div className="ui two column centered stackable grid">
          <div className="margin-top-60">
            <Link to="/add" className="ui primary button">Add Contact</Link>
          </div>
          <div className="margin-top-60">
            <Link to="/contacts" className="ui secondary button">View Contacts</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
