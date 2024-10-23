import styled from 'styled-components';
import { flexMixin, fontMixin, tagColor, gray } from '../styled/styled';

const StyledContent = styled.div`
  ${flexMixin('column', 'flex-start', 'stretch', '5px')};

  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
    min-height: 225px;
  }

  span {
    ${fontMixin('12px')};
    color: ${tagColor};
    border: 1px solid ${tagColor};
    padding: 4px 5px;
    border-radius: 3px;
  }

  div {
    ${fontMixin('18px', '600')};
  }

  p {
    ${fontMixin('12px')};
    color: ${gray};
  }
`;

export default function Content({ content }) {
  return (
    <StyledContent>
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </StyledContent>
  );
}
