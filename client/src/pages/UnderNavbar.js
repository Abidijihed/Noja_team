import { Drawer, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';

export default function UnderNavbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setIsDrawerOpen(open);
      };
      const renderDrawer = () => (
        <div style={{width:"200px"}}>
          <List>
          <Typography variant="h6" align="center" style={{textDecoration:"underline",marginLeft:"20px"}} component={Link} to="/" onClick={()=>setIsDrawerOpen(false)}>
              NOJA
            </Typography>
          <Dropdown.Divider 
     style={{backgroundColor:"black" ,marginTop:"10px"}}/>
            <ListItem button component={Link} to="/products" onClick={()=>setIsDrawerOpen(false)} style={{marginLeft:"20px"}}>
              <ListItemText primary="Product List" />
            </ListItem>
         <ListItem button component={Link} to="/login"onClick={()=>setIsDrawerOpen(false)}  style={{marginLeft:"20px"}} >
              <ListItemText primary="Connexion" />
            </ListItem>
            <ListItem button  component={Link} to="/profile" onClick={()=>setIsDrawerOpen(false)}  style={{marginLeft:"20px"}}>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button component={Link} to="/contact" onClick={()=>setIsDrawerOpen(false)}  style={{marginLeft:"20px"}}>
              <ListItemText primary="Contact" />
            </ListItem>
            <ListItem button component={Link} to="/about" onClick={()=>setIsDrawerOpen(false)}  style={{marginLeft:"20px"}}>
              <ListItemText primary="About Us"  />
            </ListItem>
          </List>
        </div>
      );
  return (
    <div className='undernav'>
          
            <IconButton
              edge="start"
              style={{color:"white"}}
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Button className='test1'>test1</Button>
            <Button className='test1'>test1</Button>
            <Button className='test1'>test1</Button>
            <Button className='test1'>test1</Button>
            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          {renderDrawer()}
        </Drawer>
    </div>
  )
}
