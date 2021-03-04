import { useState } from 'react';
import Router from 'next/router';
import { signinInputs } from './inputs';
import useRequest from '../../../hooks/use-request';
import { Text } from '../../CustomInputs/Text';
import { useActions } from '../../../hooks/use-actions';

export const Signin = () => {
  const defualtForm = { email: '', password: '' };
  const [formData, setFormData] = useState(defualtForm);
  const { toggleModal } = useActions();

  const { doRequest, errors } = useRequest({
    url: '/api/auth/signin',
    method: 'post',
    body: formData,
    onSuccess: () => {
      Router.push('/dashboard/projects');
      toggleModal(false, '');
    },
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await doRequest();
  };

  const setError = (field) =>
    errors ? errors.find((err) => err.field === field) : null;

  return (
    <form className='signin-form' onSubmit={handleSubmit}>
      <h3>Signin To Your Account</h3>
      {signinInputs.map((i, idx) => (
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
      <button className='btn-primary'>Signin</button>
    </form>
  );
};
