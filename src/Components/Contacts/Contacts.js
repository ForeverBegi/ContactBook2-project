
import React from 'react';
import { Link } from 'react-router-dom';
import ContactList from '../ContactList/ContactList';

const Contacts = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: 'pink'
        }}>
            <h1>My Contact Book</h1>
            <Link to='/add'>
            <button style={{backgroundColor: 'skyBlue', fontSize: '20px', borderRadius: '10%', borderColor: 'violet'}}>Add new contact</button>
            </Link>
            <div style={{marginTop: '5vh'}}>
                 <ContactList/>
            </div>
        </div>
    );
};

export default Contacts;