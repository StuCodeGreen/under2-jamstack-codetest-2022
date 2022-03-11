import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../../atoms/Link';
import { TextBlock } from '../../atoms/TextBlock';
import moment from 'moment';

ArticleCard.propTypes = {
  href: PropTypes.string,
  heading: PropTypes.string,
  publishDate: PropTypes.string,
  coverImage: PropTypes.string,
};

export function ArticleCard({ href, heading, publishDate, coverImage }) {
  // Moment.js to help handle yy-mm-dd
  let date = moment(publishDate, 'YY MM DD').format('YYYY MM DD');
  const currentDate = moment().format('YYYY MM DD');
  // Check publishDate differnce with current date
  const dateDiff = moment(date).diff(currentDate, 'days');

  //Date difference output
  if (dateDiff === -1) {
    date = 'Yesterday';
  } else if (dateDiff === 0) {
    date = 'Today';
  } else {
    date = moment(date).format('ddd DD MMM YYYY');
  }

  return (
    <Link
      href={href}
      className='grid grid-cols-2 items-center md:flex md:flex-col md:gap-2 md:items-start'
    >
      <img
        src={coverImage}
        alt='Latest article cover image'
        width='509px'
        height='395px'
      />
      <div className='ml-4 md:ml-0'>
        <TextBlock theme='subtle' className='mb-2 text-xs md:text-sm'>
          {date}
        </TextBlock>
        <h2 className='text-xs md:text-sm'>{heading}</h2>
      </div>
    </Link>
  );
}
