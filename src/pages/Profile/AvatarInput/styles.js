import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;
    img {
      height: 120px;
      width: 120px;
      background: #ccc;
      border: 5px solid rgba(255, 255, 255, 0.7);
      border-radius: 50%;
    }

    input {
      display: none;
    }
  }
`;
