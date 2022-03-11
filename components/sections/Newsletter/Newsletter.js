import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../../atoms/Container';
import { Heading } from '../../atoms/Heading';
import { TextBlock } from '../../atoms/TextBlock';
import { Form } from '../../comps/Form';

Newsletter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export function Newsletter({ className = '' }) {
  const subscribe = async (event) => {
    event.preventDefault();
    const formInputs = {
      firstname: event.target.firstName.value,
      lastname: event.target.lastName.value,
      email: event.target.email.value,
      company: event.target.company.value,
    };
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formInputs),
    };
    const res = await fetch('https://under2.free.beeceptor.com/submit', {
      ...options,
    }).catch((err) => {
      console.error(err);
    });
    if (res.status === 200) {
      alert('Successfully Subscribed');
      event.target.reset();
    }
  };
  return (
    <header className={`bg-gray-100 ${className}`}>
      <Container className='md:grid md:grid-cols-2 md:gap-x-20'>
        <div>
          <Heading>Financial Tech trends, straight to your inbox</Heading>
          <TextBlock theme='subtle'>
            Sign up for trends, reports and papers on everything finance, and
            tech in the banking world.
          </TextBlock>
        </div>
        <div>
          <Form handleSubmit={subscribe} />
        </div>
      </Container>
    </header>
  );
}
