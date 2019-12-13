import React from 'react';
import { useDispatch } from 'react-redux';
import { Input, Form } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';
import { signUpRequest } from '~/store/modules/auth/actions';

export default function SignUp() {
  const schema = Yup.object().shape({
    name: Yup.string().required('O campo nome é obrigatório!'),
    email: Yup.string()
      .email('Insira um e-mail valído!')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .min(6, 'A senha precisa ao menos 6 caracteres!')
      .required('O campo de senha é obrigatório!'),
  });

  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="Go barber logo" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome" />
        <Input name="email" type="email" placeholder="Seu e-mail:" />
        <Input name="password" type="password" placeholder="Sua senha:" />
        <button type="submit">Acessar</button>
        <Link to="/">Já possou cadastro!</Link>
      </Form>
    </>
  );
}
