import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Contents = () => {
  const [contents, _] = useState([
    { id: 1, content: '1. Content' },
    { id: 2, content: '2. Content' },
    { id: 3, content: '3. Content' },
  ]);

  return (
    <>
      <ul>
        {contents.map((item) => (
          <li>
            <NavLink to={`${item.id}?content=${item.content}`}>
              {item.content}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Contents;
