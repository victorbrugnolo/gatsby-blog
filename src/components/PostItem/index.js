import React from 'react';

import {
  PostItemLink,
  PostItemWrapper,
  PostItemTag,
  PostItemInfo,
  PostItemDate,
  PostItemTitle,
  PostItemDescription,
} from './styles';

const PostItem = () => (
  <PostItemLink to="/foo/">
    <PostItemWrapper>
      <PostItemTag background="#47650b">Misc</PostItemTag>
      <PostItemInfo>
        <PostItemDate>25 de Abril de 2020 - 4 min de leitura</PostItemDate>
        <PostItemTitle>Um post qualquer</PostItemTitle>
        <PostItemDescription>
          Um post qualquer sobre qualquer coisa.
        </PostItemDescription>
      </PostItemInfo>
    </PostItemWrapper>
  </PostItemLink>
);

export default PostItem;
