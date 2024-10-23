import styled from 'styled-components';
import Icon from './Icon';
import { flexMixin, gap_padding_radius } from '../styled/styled';

const tabs = [
  '전체',
  '게임',
  '음악',
  '뉴스',
  '라이브',
  '최근에 업로드된 동영상',
  '새로운 맞춤 동영상',
];

const StyledTab = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: ${gap_padding_radius};
  padding-right: ${gap_padding_radius};

  ul {
    list-style: none;
    ${flexMixin(undefined, undefined, undefined, '10px')};
    overflow: hidden;

    li {
      background-color: rgb(245, 245, 245);
      padding: 8px;
      border-radius: 8px;
      font-size: 0.8rem;
      white-space: nowrap;

      &:first-child {
        background-color: black;
        color: white;
        padding: 8px;
        border-radius: 8px;
      }
    }
  }
`;

const Tab = () => {
  return (
    <StyledTab>
      <Icon type="arrow-left" />
      <ul>
        {tabs.map((el, idx) => (
          <List key={'tab' + idx} text={el} />
        ))}
      </ul>
      <Icon type="arrow-right" />
    </StyledTab>
  );
};

const List = ({ text }) => {
  return <li>{text}</li>;
};

export default Tab;
