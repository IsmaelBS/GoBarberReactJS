import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './styles';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOutRequest } from '~/store/modules/auth/actions';
import AvatarInput from './AvatarInput';

export default function Profile() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOutRequest());
  }

  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="E-mail" />
        <hr />
        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha antiga"
        />
        <Input name="password" type="password" placeholder="Sua senha nova" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmar senha"
        />
        <button type="submit">Atualizar Perfil</button>
      </Form>
      <button onClick={() => handleSignOut()} type="button">
        Sair do GoBarber
      </button>
    </Container>
  );
}
