import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactContext from './Components/Context/ContactContext';
import Contacts from './Components/Contacts/Contacts';
import AddContact from './Components/AddContact/AddContact'
import EditContact from './Components/EditContact/EditContact.jsx'

const MyRoutes = () => {
    return (
        <ContactContext>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Contacts/>}/>
                    <Route path='/add' element={<AddContact/>}/>
                    <Route path='/edit/:name/:id' element={<EditContact/>}/>
                </Routes>
            </BrowserRouter>
            
        </ContactContext>
    );
};

export default MyRoutes;