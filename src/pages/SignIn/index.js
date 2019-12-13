import React from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/logo.svg';
import { signInRequest } from '~/store/modules/auth/actions';

// import { Container } from './styles';

export default function SignIn() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um e-mail valído!')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .min(6, 'A senha precisa ao menos 6 caracteres!')
      .required('O campo de senha é obrigatório!'),
  });

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="Go barber logo" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="text" placeholder="Seu e-mail:" />
        <Input name="password" type="password" placeholder="Sua senha:" />
        <button type="submit"> {loading ? 'Carregando...' : 'Acessar'} </button>
        <Link to="/register">Criar cadastro!</Link>
      </Form>
    </>
  );
}
