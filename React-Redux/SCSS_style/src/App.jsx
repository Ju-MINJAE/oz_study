import { contents } from './assets/data/contents';
import Content from './components/Content';
import Header from './components/Header';
import Nav from './components/Nav';
import Tab from './components/Tab';
import './AppCopy.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <Nav />
      <Tab />
      <main>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </main>
    </div>
  );
}

export default App;
