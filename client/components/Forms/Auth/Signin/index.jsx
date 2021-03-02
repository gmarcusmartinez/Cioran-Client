import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../../../hooks/use-request';
import Text from '../../../CustomInputs/Text';

export const Signin = ({ setFormDisplay }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const handleSetFormDisplay = () => setFormDisplay('RENDER_SIGNUP');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { doRequest, errors } = useRequest({
    url: '/api/auth/signin',
    method: 'post',
    body: formData,
    onSuccess: () => Router.push('/dashboard/projects'),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await doRequest();
  };

  const setError = (field) =>
    errors ? errors.find((err) => err.field === field) : null;

  return (
    <div className='auth-form'>
      <form className='signin-form' onSubmit={handleSubmit}>
        <h3>Signin To Your Account</h3>
        <Text
          label='Email'
          name='email'
          required={true}
          value={formData.email}
          onChange={handleChange}
          // error={setError("title")}
        />
        <Text
          label='Password'
          name='password'
          required={true}
          value={formData.password}
          onChange={handleChange}
          // error={setError("slug")}
        />
        <button className='btn-primary'>Signin</button>
        <div className='set-form-display'>
          <span>Dont have an account? </span>
          <span onClick={handleSetFormDisplay}>Signup</span>
        </div>
      </form>
    </div>
  );
};
