import { memo } from 'react';
import PropTypes from 'prop-types';
import { Item, ItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, tags, onSelect, largeImageURL }) => {
  return (
    <Item>
      <ItemImage
        src={webformatURL}
        alt={tags}
        onClick={() => onSelect(largeImageURL)}
      />
    </Item>
  );
};

export default memo(ImageGalleryItem);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};
