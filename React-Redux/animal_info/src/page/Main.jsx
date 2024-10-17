import { data } from '../assets/data/data';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="main-container">
      <ul className="animal-list">
        {data.map((el) => (
          <li key={el.id} className="animal-item">
            <Link to={`detail/${el.id}`} className="animal-link">
              <img src={el.img} alt={el.name} className="animal-image" />
              <div className="animal-name">{el.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
