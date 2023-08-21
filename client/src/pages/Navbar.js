import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import "./Navbar.css"
import Dropdown from 'react-bootstrap/Dropdown';
// import  Badge  from '@material-ui/Badge';


import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaSearch } from 'react-icons/fa';

import './Navbar.css'; // Create this CSS file for styling

const Navbar = () => {
  // const navigate=useNavigate()
  const isMobile = useMediaQuery('(max-width: 768px)'); // Define the breakpoint
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [dropdownAnchor, setDropdownAnchor] = useState(null);
  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const toggleDropdown = (event) => {
    setDropdownAnchor(event.currentTarget);
  };

  const closeDropdown = () => {
    setDropdownAnchor(null);
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
    <nav className="navbar">
      <div className="navbar-left">
      {isMobile && (
            <IconButton
              edge="start"
              style={{color:"white"}}
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          ) }
      
      </div>
      <div className="navbar-middle" style={{width: "400px"}}>
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <FaSearch className="search-icon" />
        </div>
      </div>
      <div style={{display:"flex",justifyContent:"space-around"}} className='shoppohine'> 
      <div className="navbar-right" style={{marginTop:"10px"}}>
        <div className="cart-icon">
          <FaShoppingCart />
        </div>
      </div>

      <Button component={Link} to="/login" style={{color:"white"}}>Connexion</Button>

      {!isMobile && (
            <div>
            <Button
               aria-controls="dropdown-menu"
               aria-haspopup="true"
               variant="text"
               style={{ color: "#000000" }}
               endIcon={<PersonIcon style={{color:"white",fontSize:"35px"}}/>}
               onClick={toggleDropdown}
            >
            </Button>
            <Menu
            style={{width:'200px'}}
              id="dropdown-menu"
              anchorEl={dropdownAnchor}
              keepMounted
              open={Boolean(dropdownAnchor)}
              onClose={closeDropdown}
            >
              <MenuItem onClick={closeDropdown} component={Link} to="/products">Product List</MenuItem>
              <MenuItem onClick={closeDropdown} component={Link} to="/profile">Profile</MenuItem>
              <MenuItem onClick={closeDropdown} component={Link} to="/contact">Contact</MenuItem>
              <MenuItem onClick={closeDropdown} component={Link} to="/about">About</MenuItem>
              {/* <MenuItem onClick={closeDropdown}>Item 5</MenuItem> */}
            </Menu>
          </div>
          )}
          </div>
             {isMobile && ( /* Show drawer only on mobile */
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          {renderDrawer()}
        </Drawer>
      )}
    </nav>
  );
};

export default Navbar;
