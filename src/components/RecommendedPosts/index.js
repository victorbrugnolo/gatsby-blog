import React from 'react';
import propTypes from 'prop-types';

import { RecommendedWrapper, RecommendedLink } from './styles';

const RecommendedPosts = ({ next, previous }) => (
  <RecommendedWrapper>
    {previous && (
      <RecommendedLink
        cover
        direction="left"
        bg="#16202c"
        duration={0.6}
        to={previous.fields.slug}
        className="previous"
      >
        {previous.frontmatter.title}
      </RecommendedLink>
    )}
    {next && (
      <RecommendedLink
        cover
        direction="right"
        bg="#16202c"
        duration={0.6}
        to={next.fields.slug}
        className="next"
      >
        {next.frontmatter.title}
      </RecommendedLink>
    )}
  </RecommendedWrapper>
);

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
};

export default RecommendedPosts;
