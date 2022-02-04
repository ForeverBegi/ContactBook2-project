import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Paper, TextField } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { contactContext } from '../Context/ContactContext';


// berem is useContext

const EditContact = () => {
    const params = useParams()
    const {getContactToEdit, contactToEdit, saveEditedContact} = useContext(contactContext)
    const [form, setForm] = useState({
        name: '',
        number: '',
        email: '',
        photo: ''
    })

    const navigate = useNavigate()
    //peredacha dannyh filma dlya redaktirovaniya pri klike na edit

    useEffect(() => {
        if(contactToEdit){
            setForm(contactToEdit)
        }
    }, [contactToEdit])

    useEffect(() => {
        getContactToEdit(params.id)
    }, [])

    // styagivanie dannyh s inputov

    function handleSubmit(e) {
        let editedContact = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(editedContact)
    }

    // sohranenie vseh izmenennyh dannyh i perebros na glavnuyu stranicu
    function handleSave() {
        saveEditedContact(form)
        navigate ('/')
    }

    // Verstka
    return (
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: '40px auto',
          maxWidth: 1000,
          height: 'auto',
          p: '10px'
        },
      }}
    >
        <Paper elevation={3}>
            <h1 style={{textAlign: 'center'}}>Update contact</h1>
            <div style={{display: 'flex', justifyContent: 'space-around', color: 'black'}}>
                <div>
                    <img width='300px' src={form.photo} alt={form.name} />
                </div>
                <div style={{
                    width: '450px',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <form noValidate autoComplete='off' style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>

                        <TextField style={{padding: '10px'}} name='name' onChange={handleSubmit} value={form.name} variant='outlined' label='Name'/>
                        <TextField style={{padding: '10px'}} name='number' onChange={handleSubmit} value={form.number} variant='outlined' label='Number'/>
                        <TextField style={{padding: '10px'}} name='email' onChange={handleSubmit} value={form.email} variant='outlined' label='Email'/>
                        <TextField style={{padding: '10px'}} name='photo' onChange={handleSubmit} value={form.photo} variant='outlined' label='Photo'/>
                        <Button onClick={handleSave} variant='contained' color='warning'>Save</Button>

                    </form>
                </div>
            </div>
        </Paper>
    </Box>
    );
};

export default EditContact;