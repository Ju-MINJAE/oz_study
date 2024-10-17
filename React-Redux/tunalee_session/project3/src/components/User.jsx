import React from 'react';
import { useLocation, useParams } from 'react-router';

const User = () => {
  const { userId } = useParams();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const userName = queryParams.get('name');

  return (
    <>
      <p>User ID : {userId}</p>
      <p>User Name : {userName}</p>
    </>
  );
};

export default User;
