import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container, Time } from './styles';

export default function Dashbord() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft color="#FFF" size={36} />
        </button>
        <strong>31 de maio</strong>
        <button type="button">
          <MdChevronRight color="#FFF" size={36} />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Ismael Barboza</span>
        </Time>
        <Time>
          <strong>09:00</strong>
          <span>Ismael Barboza</span>
        </Time>
        <Time available>
          <strong>11:00</strong>
          <span>Ismael Barboza</span>
        </Time>
        <Time>
          <strong>12:00</strong>
          <span>Ismael Barboza</span>
        </Time>
      </ul>
    </Container>
  );
}
