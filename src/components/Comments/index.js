import React from 'react';
import propTypes from 'prop-types';
import ReactDisqusComments from 'react-disqus-comments';

import { CommentsWrapper, CommentsTitle } from './styles';

const Comments = ({ url, title }) => {
  const completeUrl = `https://blog.victorbrugnolo.dev${url}`;

  return (
    <CommentsWrapper>
      <CommentsTitle>Comentários</CommentsTitle>
      <ReactDisqusComments
        shortname="victorbrugnolo"
        identifier={completeUrl}
        title={title}
        url={completeUrl}
      />
    </CommentsWrapper>
  );
};

Comments.propTypes = {
  url: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

export default Comments;
