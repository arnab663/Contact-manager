
import "../App.css"
import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

const AddContact = () => {

    const navigate = useNavigate()

    const { contacts, setContacts } = useOutletContext(); 

    const [contact,setContact] = useState({
        name:"",
        email:""
    })
    
    const add = (e) => {
        e.preventDefault();
        if (contact.name === "" || contact.email === "") {
        alert("All the fields are mandatory!");
        return;
        }
        setContacts([...contacts,{id:uuid(), ...contact}]);
        setContact({ name: "", email: "" });
        navigate('/contacts')
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact(prevContact => ({
            ...prevContact,
            [name]: value
        }));
    };

    return(
        <div className="ui main margin-bottom-60">
            <h2>Add Contact</h2>
            <form className="ui form">
            <div className="field">
                <label>Name*</label>
                <input
                type="text"
                name="name"
                placeholder="Name"
                value={contact.name}
                onChange={handleChange}
                />
            </div>
            <div className="field">
                <label>Email*</label>
                <input
                type="text"
                name="email"
                placeholder="Email"                
                value={contact.email}
                onChange={handleChange}
                />
            </div>
            <button className="ui button blue" onClick={add}>Add</button>
            </form>
            <br></br>
            <div className="ui container center margin-auto">
                <Link to="/" className="ui button orange">Back to Home</Link>
            </div>
      </div>
    )
}

export default AddContact;