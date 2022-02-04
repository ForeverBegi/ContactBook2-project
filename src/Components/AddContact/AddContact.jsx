import React from 'react';
import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import './AddContact.css'
import { contactContext } from '../Context/ContactContext';
import {useNavigate} from 'react-router-dom';




export default function AddContact() {
    const [form, setForm] = React.useState ({
        name: '',
        number: '',
        email: '',
        photo: ''
    })

    const navigate = useNavigate()
    const { addContact } = React.useContext(contactContext)

    const handleChange = (e) => {
        const values = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(values)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!form.name || !form.number || !form.email || !form.photo){
            alert ('Fill in the fields!')
            return
        }
        addContact(form)
        navigate('/')
    }

    // verstka
    return (
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div className='form-block'>
            <h2>Add Contact</h2>
            <TextField onChange={handleChange} name='name' value={form.name} className="filled-basic" label="Name" variant="filled"/>
            <TextField onChange={handleChange} name='number' value={form.number} className="filled-basic" label="Number" variant="filled"/>
            <TextField onChange={handleChange} name='email' value={form.email} className="filled-basic" label="Email" variant="filled"/>
            <TextField onChange={handleChange} name='photo' value={form.photo} className="filled-basic" label="Photo" variant="filled"/>
            <Button onClick={handleSubmit} variant='outlined'>Add</Button>
          </div>
        </Box>
      );
    }


