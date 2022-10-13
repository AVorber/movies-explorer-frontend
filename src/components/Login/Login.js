import React from 'react';
import CredentialsForm from '../CredentialsForm/CredentialsForm';

function Login({ onLogin }) {
  return (
    <CredentialsForm
      type={'login'}
      onLogin={onLogin}
    />
  );
}

export default Login;
