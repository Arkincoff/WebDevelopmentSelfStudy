import React from 'react';
import { Navbar } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navbarStyle = {
  backgroundColor: 'lightblue',
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Logo style={{ maxWidth: '10rem', maxHeight: '2rem' }} />
    </Navbar>
  );
};

export default Header;
