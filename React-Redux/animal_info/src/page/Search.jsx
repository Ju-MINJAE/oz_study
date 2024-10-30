import { Link, useSearchParams } from 'react-router-dom';
import { data } from '../assets/data/data';
import { getRegExp } from 'korean-regexp';
import { useEffect, useRef, useState } from 'react';

// const Search = () => {
//   const [searchParams] = useSearchParams();
//   const param = searchParams.get('animal') || '';
//   const reg = getRegExp(param);

//   const filteredData = data.filter((el) => el.name.match(reg));

//   return (
//     <div className="search-container">
//       {filteredData.length > 0 ? (
//         <ul className="animal-list">
//           {filteredData.map((el) => (
//             <li key={el.id} className="animal-item">
//               <Link to={`detail/${el.id}`} className="animal-link">
//                 <img src={el.img} alt={el.name} className="animal-image" />
//                 <div className="animal-name">{el.name}</div>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <div className="no-results">검색 결과가 없습니다.</div>
//       )}
//     </div>
//   );
// };

// // debounce
// const Search = () => {
//   const [searchParams] = useSearchParams();
//   const [filteredData, setFilteredData] = useState(data);
//   const param = searchParams.get('animal') || '';
//   const reg = getRegExp(param);

//   useEffect(() => {
//     const debounceTimer = setTimeout(() => {
//       const newFilteredData = data.filter((el) => el.name.match(reg));
//       setFilteredData(newFilteredData);
//     }, 1000);

//     return () => clearTimeout(debounceTimer);
//   }, [param]);

//   return (
//     <div className="search-container">
//       {filteredData.length > 0 ? (
//         <ul className="animal-list">
//           {filteredData.map((el) => (
//             <li key={el.id} className="animal-item">
//               <Link to={`detail/${el.id}`} className="animal-link">
//                 <img src={el.img} alt={el.name} className="animal-image" />
//                 <div className="animal-name">{el.name}</div>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <div className="no-results">검색 결과가 없습니다.</div>
//       )}
//     </div>
//   );
// };

// throttle
const Search = () => {
  const [searchParams] = useSearchParams();
  const [filteredData, setFilteredData] = useState(data);
  const param = searchParams.get('animal') || '';
  const reg = getRegExp(param);
  const time = useRef(new Date());

  useEffect(() => {
    const newTime = new Date();
    const thorttleTime = setTimeout(() => {
      const newFilteredData = data.filter((el) => el.name.match(reg));
      setFilteredData(newFilteredData);
      time.current = new Date();
    }, 3000 - (newTime - time.current));

    return () => clearTimeout(thorttleTime);
  }, [param]);

  return (
    <div className="search-container">
      {filteredData.length > 0 ? (
        <ul className="animal-list">
          {filteredData.map((el) => (
            <li key={el.id} className="animal-item">
              <Link to={`detail/${el.id}`} className="animal-link">
                <img src={el.img} alt={el.name} className="animal-image" />
                <div className="animal-name">{el.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="no-results">검색 결과가 없습니다.</div>
      )}
    </div>
  );
};

export default Search;
