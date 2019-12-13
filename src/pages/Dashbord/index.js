import React from 'react';
import api from '~/Services/api';

// import { Container } from './styles';

export default function Dashbord() {
  api.get('/schedule');
  return <h1>Dashbord</h1>;
}
