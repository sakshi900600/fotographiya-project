import React, { useState } from 'react';
import styles from './Grid.module.css';
import GridHeader from '../GridHeader/GridHeader';
import lock from '../../assets/images/lock.png';
import Popup from '../Popup/Popup';

const Grid = ({ title, images = [] }) => { // received from homepage.jsx

  const [selectedImages, setSelectedImages] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleReplaceClick = () => {
    if(showPopup === true){
      setShowPopup(false);
    }
    else{
      setShowPopup(true);
    }
  };

  const toggleImageSelection = (id) => {
    if (selectedImages.includes(id)) {
      setSelectedImages(selectedImages.filter(imageId => imageId !== id));
    } else {
      setSelectedImages([...selectedImages, id]);
    }
  };

  return (
    <div className={`${styles.photo_grid_container} ${title === 'MEHNDI' ? styles.mehandi : title === 'WEDDING' ? styles.wedding : ''}`}>
      {title === 'WEDDING' && (
        <div className={styles.confirmation_box}>
          <p>Please Confirm this</p>
          <button className={styles.confirm_btn}>Hold</button>
          <button className={styles.confirm_btn}>Submit</button>
        </div>
      )}

      {title === 'MEHNDI' && (
          <div className={styles.lock_overlay}>
            <img 
              src={lock} 
              alt="Lock" 
              className={styles.lock_image} 
            />
          </div>
      )}

      {/* header */}
      <GridHeader title={title} onReplaceClick={handleReplaceClick} />
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}

      <div className={styles.grid_container}>
        {/* Image Grid with Scrollbar */}
        <div className={styles.container}>
          <div className={styles.image_grid}>
            {images.map((image, index) => (
              <div 
                key={index}
                className={`${styles.image_wrapper} ${selectedImages.includes(image.id) ? styles.selected : ''}`}
                onClick={() => toggleImageSelection(image.id)}
              >
                <img src={image.src} className={styles.image} />

                {selectedImages.includes(image.id) && (
                  <div className={styles.selected_indicator}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className={styles.check_icon}>
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;