import React from 'react'
import styles from './gallery.module.css'
import Image from 'next/image'
import Galleryimg from '../image/galleryimg.jpeg'
import ImageGallery from '../component/imagegallery'
import Footer1 from "../component/footer";
import Navbar from "../component/navbar";

const Gallery = () => {
  return (
    <>
    <Navbar />
    
       <div className={styles.divaboutimg}>
        <Image src={Galleryimg} alt="About Us" layout="fill" className={styles.aboutimg} />
        <div className={styles.overlay}>
        <h1>Gallery</h1>
          <p>Home <strong> &gt; </strong> Gallery</p>
        </div>
      </div>


      <div className={styles.abouttxt}>
        <h3 className={styles.h3dark}>Our Gallery</h3>
        <h3 className={styles.h3light}>IMAGES</h3>
        <p> Discover the unforgettable moments captured in our Umrah group gallery. <br />
            Experience the essence of our spiritual journeys with Al Rayyan Travel</p>
      </div>


      <div className={styles.videodiv}>
    <video src='../image/gallery/video1.mp4' className={styles.galleryvideo1} type="video/MP4" controls controlsList="noplaybackrate nodownload nofullscreen" disablePictureInPicture />

    <video src='../image/gallery/video2.mp4' className={styles.galleryvideo2} type="video/MP4" controls controlsList="noplaybackrate nodownload nofullscreen" disablePictureInPicture />

    <video src='../image/gallery/video3.mp4' className={styles.galleryvideo3} type="video/MP4" controls controlsList="noplaybackrate nodownload nofullscreen" disablePictureInPicture />
        
      </div>


      <ImageGallery />

      <div className={styles.divaboutimg2}>
        <Image src={Galleryimg} alt="About Us" layout="fill" className={styles.aboutimg2} />
        <div className={styles.overlay2}>
        <h1>Get Ready to Start Your</h1>
        <h1>Journey With Us</h1>
        <button className={styles.button12}> SEE PACKAGES</button>
        </div>
      </div>

      <Footer1 />

    </>
  )
}

export default Gallery
