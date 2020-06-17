import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container, MenuItem } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {

  return (
    <Container>
      <Link to="/">
        <img src={ logo } alt="Stocks" />
      </Link>

      <MenuItem to="/">
        <div>
          <strong>Home</strong>
        </div>
        <MdShoppingBasket size={36} color="#000" />
      </MenuItem>

      <MenuItem to="/fundos">
        <div>
          <strong>Fundos</strong>
        </div>
        <MdShoppingBasket size={36} color="#000" />
      </MenuItem>

      <MenuItem to="/acoes">
        <div>
          <strong>Ações</strong>
        </div>
        <MdShoppingBasket size={36} color="#000" />
      </MenuItem>

      <MenuItem to="/tesouro">
        <div>
          <strong>Tesouro</strong>
        </div>
        <MdShoppingBasket size={36} color="#000" />
      </MenuItem>


      <MenuItem to="/cdb">
        <div>
          <strong>CDB</strong>
        </div>
        <MdShoppingBasket size={36} color="#000" />
      </MenuItem>
    </Container>
  );
}
