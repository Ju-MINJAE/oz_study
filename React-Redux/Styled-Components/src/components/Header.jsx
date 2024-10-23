import styled from 'styled-components';
import Icon from './Icon';
import { flexMixin, gap_padding_radius } from '../styled/styled';

const StyledHeader = styled.header`
  display: grid;
  grid-column: 1 / 3;
  grid-template-columns: auto auto 3fr auto auto auto;
  justify-items: center;
  align-items: center;
  gap: ${gap_padding_radius};
  padding: ${gap_padding_radius};

  form {
    ${flexMixin};
    padding: 0 10%;
    width: 100%;

    button {
      width: 60px;
      height: 40px;
      border-radius: 0 ${gap_padding_radius} ${gap_padding_radius} 0;
      border: 1px solid lightgray;
      background-color: rgb(245, 245, 245);
      border-left: transparent;
      display: grid;
      place-items: center;
    }

    input {
      width: 100%;
      height: 40px;
      border-radius: ${gap_padding_radius} 0 0 ${gap_padding_radius};
      padding-left: ${gap_padding_radius};
      border: 1px solid lightgray;
      font-size: 1.1rem;
      color: lightgray;
      font-weight: 200;
    }
  }
`;

const Header = ({ setDarkMode }) => {
  return (
    <StyledHeader>
      <Icon type="hamburger" />
      <Icon type="logo" />
      <form>
        <input placeholder="검색" />
        <button>
          <Icon type="search" />
        </button>
      </form>
      <Icon type="cam" />
      <Icon type="bell" />
      <button onClick={() => setDarkMode((prev) => !prev)}>다크모드</button>
    </StyledHeader>
  );
};

export default Header;
