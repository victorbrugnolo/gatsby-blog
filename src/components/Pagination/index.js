import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'gatsby';

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
    {!isFirst && <Link to={prevPage}>← página anterior</Link>}
    <p>
      {currentPage} de {numPages} de páginas
    </p>
    {!isLast && <Link to={nextPage}>proxima página →</Link>}
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
