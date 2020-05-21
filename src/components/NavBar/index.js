import React from 'react';
import { Link, Nav } from './styles';
import { FcLikePlaceholder, FcReading, FcHome } from 'react-icons/fc';

const SIZE = '32px';

export const NavBar = () => {
  return (
    <Nav>
      <Link to="/">
        <FcHome size={SIZE} />
      </Link>
      <Link to="/favs">
        <FcLikePlaceholder size={SIZE} />
      </Link>
      <Link to="/user">
        <FcReading size={SIZE} />
      </Link>
    </Nav>
  );
};

//TiHomeOutline
//RiHeartsLine
//FaUser
