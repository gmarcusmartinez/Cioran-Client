import React from 'react';
import Router from 'next/router';
import { signupInputs } from './inputs';
import { Text } from '../../CustomInputs/Text';
import useRequest from '../../../hooks/use-request';
import { useActions } from '../../../hooks/use-actions';

export const Signup = () => {
  const defaultForm = { name: '', email: '', password: '' };
  const [formData, setFormData] = React.useState(defaultForm);
  const { toggleModal } = useActions();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { doRequest, errors } = useRequest({
    url: '/api/auth/signup',
    method: 'post',
    body: formData,
    onSuccess: () => {
      Router.push('/dashboard/projects');
      toggleModal(false, '');
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await doRequest();
  };

  const setError = (field) =>
    errors ? errors.find((err) => err.field === field) : null;

  return (
    <form className='signup-form' onSubmit={handleSubmit}>
      <h3>Create Your Account</h3>
      {signupInputs.map((i, idx) => (
        <Text
          key={idx}
          label={i.label}
          type={i.type}
          name={i.name}
          required={i.required}
          value={formData[i.formData]}
          onChange={handleChange}
          error={setError(`${i.errorField}`)}
        />
      ))}
      <button className='btn-primary'>Signup</button>
    </form>
  );
};
