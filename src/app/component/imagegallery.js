'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './imagegallery.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import img1 from '../image/gallery/1.jpeg';
import img2 from '../image/gallery/2.jpeg';
import img3 from '../image/gallery/3.jpeg';
import img4 from '../image/gallery/4.jpeg';
import img5 from '../image/gallery/5.jpeg';
import img6 from '../image/gallery/6.jpeg';
import img7 from '../image/gallery/7.jpeg';
import img8 from '../image/gallery/8.jpeg';
import img9 from '../image/gallery/9.jpeg';
import img10 from '../image/gallery/10.jpeg';
import img11 from '../image/gallery/1.jpeg';
import img12 from '../image/gallery/12.jpeg';
import img13 from '../image/gallery/13.jpeg';
import img14 from '../image/gallery/14.jpeg';
import img15 from '../image/gallery/15.jpeg';
import img16 from '../image/gallery/16.jpeg';
import img17 from '../image/gallery/17.jpeg';

const Gallery = () => {
  const data = [
    { id: 1, imgSrc: img1 },
    { id: 2, imgSrc: img2 },
    { id: 3, imgSrc: img3 },
    { id: 4, imgSrc: img4 },
    { id: 5, imgSrc: img5 },
    { id: 6, imgSrc: img6 },
    { id: 7, imgSrc: img7 },
    { id: 8, imgSrc: img8 },
    { id: 9, imgSrc: img9 },
    { id: 10, imgSrc: img10 },
    { id: 11, imgSrc: img11 },
    { id: 12, imgSrc: img12 },
    { id: 13, imgSrc: img13 },
    { id: 14, imgSrc: img14 },
    { id: 15, imgSrc: img15 },
    { id: 16, imgSrc: img16 },
    { id: 17, imgSrc: img17 },
  ];

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? `${styles.model} ${styles.open}` : styles.model}>
        <Image src={tempImgSrc} alt="Selected" layout="fill" objectFit="contain" />
        <FontAwesomeIcon icon={faCircleXmark} onClick={() => setModel(false)} />
      </div>
      <div className={styles.container}>
      <div className={styles.gallery}>
        {data.map((item, index) => (
          <div className={styles.pics} key={index} onClick={() => getImg(item.imgSrc)}>
            <Image src={item.imgSrc} alt={`Gallery Image ${item.id}`} width={300}  objectFit="cover" />
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Gallery;
