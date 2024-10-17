import { useParams } from 'react-router-dom';
import { data } from '../assets/data/data';

const Detail = () => {
  const params = useParams();
  const animalData = data.find((el) => el.id === Number(params.id));

  if (!animalData) {
    return <div className="error">해당 동물을 찾을 수 없습니다.</div>;
  }

  return (
    <section className="detail">
      <img
        src={animalData.img}
        alt={animalData.name}
        className="detail-image"
      />
      <h2 className="detail-name">{animalData.name}</h2>
      <p className="detail-description">{animalData.description}</p>
    </section>
  );
};

export default Detail;
