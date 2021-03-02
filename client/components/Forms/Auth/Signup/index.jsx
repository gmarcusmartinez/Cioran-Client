import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../../../hooks/use-request';
import Text from '../../../CustomInputs/Text';

export const Signup = ({ setFormDisplay }) => {
  const defaultForm = { name: '', email: '', password: '' };
  const [formData, setFormData] = useState(defaultForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { doRequest, errors } = useRequest({
    url: '/api/auth/signup',
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

  const handleSetFormDisplay = () => setFormDisplay('RENDER_SIGNIN');

  return (
    <div className='auth-form'>
      <form className='signup-form' onSubmit={handleSubmit}>
        <h3>Create Your Account</h3>
        <Text
          label='Name'
          name='name'
          required={true}
          value={formData.name}
          onChange={handleChange}
          // error={setError("title")}
        />
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
        <button className='btn-primary'>Signup</button>
        <div className='set-form-display'>
          <span>Already have an account? </span>
          <span onClick={handleSetFormDisplay}>Signin</span>
        </div>
      </form>
    </div>
  );
};
