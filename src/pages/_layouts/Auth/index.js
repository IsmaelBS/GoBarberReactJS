import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

export default function _layouts({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

_layouts.propTypes = {
  children: PropTypes.element.isRequired,
};
