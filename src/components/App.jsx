import { useState, useEffect } from 'react';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Button from './Button';
import Modal from './Modal';
import API from '../services/api';

import { AppCss, Block } from './App.styled';
import { scrollToTop, scrollToBottom } from '../services/scroll';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [largeImageUrl, setLargeImageUrl] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('null');

  useEffect(() => {
    if (!query) {
      return;
    }
    setStatus('pending');

    API.fetchImage(query, page)
      .then(data => {
        const { hits } = data;
        setImages(prevImages => {
          return [...prevImages, ...hits];
        });
        setStatus('resolved');
        scrollToBottom();
      })
      .catch(error => {
        setStatus('rejected');
        setError(error.message);
      });
  }, [query, page]);

  const handleFormSubmit = ({ query }) => {
    setQuery(query);
    setPage(1);
    setImages([]);
    scrollToTop();
  };

  const onSelectImg = link => {
    setLargeImageUrl(link);
  };

  const onCloseModal = () => {
    setLargeImageUrl('');
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <AppCss>
      <Searchbar onSubmit={handleFormSubmit} />
      {status === 'idle' && (
        <Block>
          <h2>Please, enter query</h2>
        </Block>
      )}
      {status === 'rejected' && (
        <Block>
          <h2>{error.message}</h2>
        </Block>
      )}
      {status === 'pending' && (
        <Block>
          <Loader />
        </Block>
      )}
      {images.length > 0 && (
        <ImageGallery items={images} onSelect={onSelectImg} />
      )}
      {largeImageUrl.length > 0 && (
        <Modal url={largeImageUrl} onClose={onCloseModal} />
      )}
      {images.length > 11 && <Button onClick={loadMore}>Lore more</Button>}
    </AppCss>
  );
};

export default App;
