import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '31875092-4ca87b45adc611ce19a4a031b',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

const fetchImage = async (q, page) => {
  const { data } = await instance.get('/', { params: { q, page } });
  return data;
};

const api = { fetchImage };
export default api;
