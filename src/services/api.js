function fetchImage(query, page) {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=31875092-4ca87b45adc611ce19a4a031b&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Here is not...${query}`));
  });
}

const api = { fetchImage };
export default api;
