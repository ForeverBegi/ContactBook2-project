import { Grid } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import ContactCard from '../ContactCard/ContactCard';
import { contactContext } from '../Context/ContactContext';



//Hranenie contacts posle dobavleniya
const ContactList = () => {
    const { contacts, getContacts} = useContext(contactContext)
    console.log(contacts);

    useEffect(() => {
        getContacts()
    }, [])


    return (
        <Grid container spacing={{s: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}} sx={{display:'flex', justifyContent: 'center', backgroundColor: 'pink'}}>
            {
                contacts ? (
                    contacts.map((item, index) => (
                        <Grid key={index} style={{margin:'20px'}}>
                            <ContactCard item={item} key={index}/>
                        </Grid>
                    ))
                ) : (<h1>Loading...</h1>)
            }
        </Grid>
    );
    };

export default ContactList;