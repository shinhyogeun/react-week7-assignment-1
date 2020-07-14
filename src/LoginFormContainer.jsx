import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { changeLoginFields } from './actions';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { loginFields } = useSelector((state) => ({
    loginFields: state.loginFields,
  }));

  function handleChange({ name, value }) {
    dispatch(changeLoginFields({ name, value }));
  }

  return (
    <LoginForm
      loginFields={loginFields}
      onChange={handleChange}
    />
  );
}
