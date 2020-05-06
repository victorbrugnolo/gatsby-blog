import React from 'react';
import propTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import getThemeColor from '../../utils/getThemeColor';

import { PaginationWrapper } from './styles';

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <PaginationWrapper>
    {!isFirst && (
      <AniLink cover direction="left" bg="#16202c" duration={0.6} to={prevPage}>
        ← página anterior
      </AniLink>
    )}
    <p>
      {currentPage} de {numPages} de páginas
    </p>
    {!isLast && (
      <AniLink
        cover
        direction="right"
        bg={getThemeColor()}
        duration={0.6}
        to={nextPage}
      >
        proxima página →
      </AniLink>
    )}
  </PaginationWrapper>
);

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
};

export default Pagination;
