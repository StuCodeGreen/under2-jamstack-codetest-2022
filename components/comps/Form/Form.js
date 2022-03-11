import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../atoms/Button';

Form.propTypes = {
  handleSubmit: PropTypes.func,
};

export function Form({ handleSubmit }) {
  const inputStyle = 'h-10 border-solid border-2 rounded';

  return (
    <form onSubmit={handleSubmit} className='gap-5 grid lg:grid-cols-2'>
      <div className='grid'>
        <label htmlFor='firstName' className='text-sm pb-1'>
          First Name
        </label>
        <input
          id='firstName'
          name='firstName'
          type='text'
          autoComplete='firstName'
          required
          className={inputStyle}
        />
      </div>
      <div className='grid'>
        <label htmlFor='lastName' className='text-sm pb-1'>
          Last Name
        </label>
        <input
          id='lastName'
          name='lastName'
          type='text'
          autoComplete='lastName'
          required
          className={inputStyle}
        />
      </div>
      <div className='grid'>
        <label htmlFor='email' className='text-sm pb-1'>
          Email
        </label>
        <input
          id='email'
          name='email'
          type='email'
          autoComplete='email'
          required
          className={inputStyle}
        />
      </div>
      <div className='grid'>
        <label htmlFor='company' className='text-sm pb-1'>
          Company
        </label>
        <input
          id='company'
          name='company'
          type='text'
          autoComplete='company'
          required
          className={inputStyle}
        />
      </div>

      <Button type='submit' className='w-1/2 lg:w-2/3 py-3'>
        Subscribe
      </Button>
    </form>
  );
}
