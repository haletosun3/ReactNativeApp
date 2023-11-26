import React from 'react';
import App from '../App';
import AuthProvider from '../src/context/AuthProvider/AuthProvider';

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
