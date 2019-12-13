import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo-purple.svg';
import Notifications from '../Notifications';

import { Container, Content, Profile } from './styles';

export default function header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber Logo" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Ismael Barboza</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Ismael Barboza"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
