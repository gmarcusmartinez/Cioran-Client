import React from 'react';
import { useRouter } from 'next/router';
import { useActions } from '../hooks/use-actions';
import { Modal } from '../components/Modal';
import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
  const router = useRouter();
  const { toggleModal } = useActions();
  const handleToggleModal = () => toggleModal(true, 'AUTH_FORM');

  React.useEffect(() => {
    if (currentUser) router.push('/dashboard/projects');
  }, []);

  return (
    <>
      <div className='landing-page'>
        <div className='landing-page__container'>
          <span>Cioran</span>
          <span>
            Plan, track, and manage your agile and software development projects
            with Cioran. Customize your workflow, collaborate, and release great
            software.
          </span>
          <button onClick={handleToggleModal}>Get Started</button>
        </div>
      </div>
      <Modal />
    </>
  );
};

LandingPage.getInitialProps = async (context) => {
  // const client = buildClient(context);
  // const { data } = await client.get('/api/auth/currentuser');
  // return data;
  return {};
};

export default LandingPage;
