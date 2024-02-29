import React, { useEffect, useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import SearchImages from '../api/PixabayApi';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import { Notify } from 'notiflix';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isVisibleBtn, setIsVisibleBtn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const getImage = async () => {
      setLoading(true);

      try {
        const dataImages = await SearchImages(query, page);
        setPhotos(prevPhotos => [...prevPhotos, ...dataImages.hits]);
        setIsVisibleBtn(page < Math.ceil(dataImages.totalHits / 12));
      } catch (error) {
        Notify.failure(
          'An error occurred while searching for images. Please try again.'
        );
      } finally {
        setLoading(false);
      }
    };

    if (query) getImage();
  }, [query, page]);

  const handleSubmit = newQuery => {
    setQuery(newQuery);
    setPhotos([]);
    setPage(1);
    setIsVisibleBtn(false);
  };

  const onBtnLoadMoreClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  const toggleModal = image => {
    setShowModal(!showModal);
    setSelectedImage(image);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Searchbar onSubmit={handleSubmit} />
      {photos.length > 0 && (
        <ImageGallery images={photos} onClick={toggleModal} />
      )}
      {loading && <Loader />}
      {isVisibleBtn && <Button onClick={onBtnLoadMoreClick} />}
      {showModal && <Modal onClose={toggleModal} ImageUrl={selectedImage} />}
    </div>
  );
};

export default App;
