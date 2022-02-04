import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { contactContext } from '../Context/ContactContext';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

// poluchaem props i otrisovyvaem kartochku contacta
export default function ContactCard({item}) {
    const { deleteContact } = React.useContext(contactContext)
    
    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={item.photo}
            alt={item.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography>
                number: {item.number}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => deleteContact(item.id)} size="small"><DeleteOutlineIcon/></Button>
            <Link to={`/edit/${item.name}/${item.id}`}>
                <Button size="small"><EditIcon/></Button>
            </Link>
          </CardActions>
        </Card>
      );
    }



