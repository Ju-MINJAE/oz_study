import { contents } from './assets/data/contents';
import Content from './components/Content';
import Header from './components/Header';
import Nav from './components/Nav';
import Tab from './components/Tab';

import styled, { createGlobalStyle, css } from 'styled-components';
import { flexMixin, gap_padding_radius } from './styled/styled';
import { useState } from 'react';

const Container = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 80px 40px 1fr;
  width: 100vw;
  height: 100vh;
`;

const Main = styled.main`
  width: 100%;
  padding: ${gap_padding_radius};
  ${flexMixin('row', 'flex-start', 'wrap')};

  section {
    width: 50%;
    height: auto;
    padding: 10px;

    & > img {
      width: 100%;
      border-radius: 10px;
    }
    & > div {
      ${flexMixin('row', 'stretch', 'flex-start', '10px')};
      padding-top: 10px;
    }

    div {
      img {
        width: 30px;
        border-radius: 100%;
      }

      p:first-child {
        font-weight: 600;
      }
      p:last-child {
        font-size: 0.9rem;
        color: gray;
      }
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  ${(props) =>
    props.darkMode === true
      ? css`
          * {
            background-color: black;
            color: white;
            transition: 0.2s ease-in;
          }
          svg {
            fill: white;
          }
          form button {
            background-color: darkgray !important;
          }
          form div svg {
            background-color: darkgray;
          }
          section ul li {
            background-color: darkgray !important;
            &:first-child {
              background-color: lightgray !important;
            }
          }
        `
      : ''}
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <GlobalStyle darkMode={darkMode} />
      <Container>
        <Header setDarkMode={setDarkMode} />
        <Nav />
        <Tab />
        <Main>
          {contents.map((el) => (
            <Content key={el.id} content={el} />
          ))}
        </Main>
      </Container>
    </>
  );
}

export default App;
