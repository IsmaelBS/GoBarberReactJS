import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';

import { Container } from './styles';
import api from '~/Services/api';

export default function AvatarInput() {
  const { defaultValue, registerField } = useField('avatar');
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const ref = useRef();

  async function handleChange(e) {
    const formdata = new FormData();
    formdata.append('file', e.target.files[0]);
    const response = await api.post('files', formdata);
    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  useEffect(() => {
    if (ref.current) {
      registerField({
        path: 'dataset.file',
        ref: ref.current,
        name: 'avatar_id',
      });
    }
  }, []);

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            preview || 'https://api.adorable.io/avatars/50/abott@adorable.png'
          }
          alt="Teste"
        />
        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
