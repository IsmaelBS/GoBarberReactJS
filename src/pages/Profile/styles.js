import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;

  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      height: 44px;
      padding: 0 20px;
      margin-bottom: 10px;
      color: #fff;
      border-radius: 4px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    span {
      align-self: flex-start;
      color: #f64c75;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      height: 44px;
      color: #fff;
      margin: 5px 0 0;
      background: #3b9eff;
      border: 0;
      border-radius: 4px;
      font-weight: bold;
      font-size: 16px;
      transition: background 0.7s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }
  }

  > button {
    width: 100%;
    height: 44px;
    color: #fff;
    margin: 10px 0 0;
    background: #f64c75;
    border: 0;
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
    transition: background 0.7s;

    &:hover {
      background: ${darken(0.08, '#f64c75')};
    }
  }
`;
