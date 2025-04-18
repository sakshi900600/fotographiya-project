import React, { useState } from 'react';
import styles from './Popup.module.css';
import { ArrowRight } from 'lucide-react';

const Popup = ({ onClose }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageClick = (index) => {
    if (selectedImages.includes(index)) {
      setSelectedImages(selectedImages.filter((i) => i !== index));
    } else {
      setSelectedImages([...selectedImages, index]);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.galleryContainer}>
        {/* Top Section */}
        <div className={styles.categories}>

          <div className={styles.categoryLeft}>
            <div className={styles.category}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm6lBuw0i_FKto5a7FFLGOCtLfmVw_soUAOw&s" alt="Smile Face" />
              <p>Smile Face</p>
            </div>
            <div className={styles.category}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm6lBuw0i_FKto5a7FFLGOCtLfmVw_soUAOw&s" alt="Bride & Groom" />
              <p>Bride & Groom</p>
            </div>
            <div className={styles.category}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm6lBuw0i_FKto5a7FFLGOCtLfmVw_soUAOw&s" alt="Male Invite" />
              <p>Male Invite</p>
            </div>
          </div>

          <div className={styles.categoryRight}>
            <div className={styles.category}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm6lBuw0i_FKto5a7FFLGOCtLfmVw_soUAOw&s" alt="Smile Face" />
              <p>Smile Face</p>
            </div>
            
            <button className={styles.btn}>WishList <ArrowRight size={18}/></button>
          </div>
        </div>

        {/* Scrollable Image Grid */}
        <div className={styles.scrollableContainer}>
          <div className={styles.imageGrid}>
            {Array(30).fill(0).map((_, index) => (
              <div
                key={index}
                className={`${styles.imageItem} ${
                  selectedImages.includes(index) ? styles.selected : ''
                }`}
                onClick={() => handleImageClick(index)}
              >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHxuPLt9Tl22nT6ftc67n56CfpEse65zuU3Q&s" alt={`Image ${index + 1}`} />
                {selectedImages.includes(index) && (
                  <span className={styles.checkmark}>✔</span>
                )}
              </div>
            ))}
          </div>
        </div>
        
      </div>
      <button className={styles.closeButton} onClick={onClose}>×</button>
    </div>
  );
};

export default Popup;