import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../../atoms/Container';
import { Heading } from '../../atoms/Heading';
import { ArticleCard } from '../../comps/ArticleCard';

LatestArticles.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export function LatestArticles({ className = '', articles }) {
  return (
    <section className={` ${className}`}>
      <Container className='pb-16 md:pb-32' padding=''>
        <div className='col-span-full'>
          <Heading className=''>The latest from Mula</Heading>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {articles.map((article) => (
              <ArticleCard
                key={article._id}
                href='#'
                coverImage={article.coverImage}
                heading={article.heading}
                publishDate={article.publishDate}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
