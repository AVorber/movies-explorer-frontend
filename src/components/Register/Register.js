import React from 'react';
import CredentialsForm from '../CredentialsForm/CredentialsForm';

function Register({ onRegister }) {
  return (
    <CredentialsForm
      type={'register'}
      onRegister={onRegister}
    />
  );
}

export default Register;
