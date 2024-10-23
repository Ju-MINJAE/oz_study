import styled from 'styled-components';
import Icon from './Icon';
import { flexMixin } from '../styled/styled';

const list = [
  {
    type: 'home',
    text: '홈',
  },
  {
    type: 'shorts',
    text: 'Shorts',
  },
  {
    type: 'subscribe',
    text: '구독',
  },
  {
    type: 'music',
    text: 'Youtube Music',
  },
  {
    type: 'playlist',
    text: '재생목록',
  },
  {
    type: 'saved',
    text: '오프라인 저장',
  },
];

const StyledNav = styled.nav`
  grid-row: 2 / 4;
  width: 80px;

  ul {
    list-style-type: none;
    ${flexMixin('column')};
    gap: 30px;

    li {
      ${flexMixin('column', ' center')};
      font-size: 0.6rem;
    }
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        {list.map((el, idx) => (
          <NavList key={'navlist' + idx} {...el} />
        ))}
      </ul>
    </StyledNav>
  );
};

const NavList = ({ type, text }) => {
  return (
    <li>
      <Icon type={type} />
      <div>{text}</div>
    </li>
  );
};

export default Nav;
