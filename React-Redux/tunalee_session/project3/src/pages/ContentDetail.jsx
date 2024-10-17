import React from 'react';
import { useLocation, useParams } from 'react-router';

const ContentDetail = () => {
  const { contentId } = useParams();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const content = queryParams.get('content');

  return (
    <>
      <p>Content Detail Page {contentId}</p>
      <p>Content : {content}</p>
    </>
  );
};

export default ContentDetail;
