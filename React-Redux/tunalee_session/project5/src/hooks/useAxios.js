import axios from 'axios';

const customAxios = axios.create({
  baseURL: 'http://localhost:3000/',
});

customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // if (error.response.status === 401) {
    //     window.location.href = '/login';
    //} 에러 예외 처리
    return Promise.reject(error);
  }
);

const useAxios = () => {
  // axios 설정들을 할 수 있음
  // const [cookies] = useCookies(['token']);
  // customAxios.defaults.headers.common['Authorization'] = `Token ${cookies.token}`;
  return customAxios;
};

export default useAxios;
