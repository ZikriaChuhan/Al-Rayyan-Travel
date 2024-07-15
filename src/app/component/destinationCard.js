import React from 'react';
import styles from './destinationCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faStarHalf } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const DestinationCard = () => {
  return (
   
        <div className={styles.art}>
      <div className={styles.populardest}>
        <h2>Popular Destination</h2>
        <p>Unravel the World’s Beauty with Al Rayyan Travel! <br />
          From the Holiest Pilgrimages to the Most Captivating Cruises, We’ve Got <br /> You Covered!</p>
      </div>
      <section className={styles.articles}>
        <article className={styles.article} >
          <div className={styles.articlewrapper}>
            <figure className={styles.figure} >
              <img src="image/Package images/package-06.jpg" alt="package-06" />
            </figure>
            <div className={styles.articlebody}>
              <p>Rating</p>
              <FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStarHalf} className={styles.staricon} />
            </div>
          </div>
        </article>
        
        <article className={styles.article} >
          <div className={styles.articlewrapper}>
            <figure className={styles.figure} >
              <img src="image/Package images/package-02.jpg" alt="" />
            </figure>
            <div className={styles.articlebody}>
              <p>Rating</p>
              <FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStarHalf} className={styles.staricon} />
            </div>
          </div>
        </article>

        <article className={styles.article} >
          <div className={styles.articlewrapper}>
            <figure className={styles.figure} >
              <img src="image/Package images/package-03.jpg" alt="" />
            </figure>
            <div className={styles.articlebody}>
              <p>Rating</p>
              <FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStarHalf} className={styles.staricon} />
            </div>
          </div>
        </article>

        <article className={styles.article} >
          <div className={styles.articlewrapper}>
            <figure className={styles.figure} >
              <img src="image/Package images/package-04.jpg" alt="" />
            </figure>
            <div className={styles.articlebody}>
              <p>Rating</p>
              <FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStarHalf} className={styles.staricon} />
            </div>
          </div>
        </article>

        <article className={styles.article} >
          <div className={styles.articlewrapper}>
            <figure className={styles.figure} >
              <img src="image/Package images/package-05.jpg" alt="" />
            </figure>
            <div className={styles.articlebody}>
              <p>Rating</p>
              <FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStarHalf} className={styles.staricon} />
            </div>
          </div>
        </article>

        <article className={styles.article} >
          <div className={styles.articlewrapper}>
            <figure className={styles.figure} >
              <img src="image/Package images/package-01.jpg" alt="" />
            </figure>
            <div className={styles.articlebody}>
              <p>Rating</p>
              <FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStarHalf} className={styles.staricon} />
            </div>
          </div>
        </article>

        <article className={styles.article} >
          <div className={styles.articlewrapper}>
            <figure className={styles.figure} >
              <img src="image/Package images/package-07.jpg" alt="" />
            </figure>
            <div className={styles.articlebody}>
              <p>Rating</p>
              <FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStarHalf} className={styles.staricon} />
            </div>
          </div>
        </article>
        
        <article className={styles.article} >
          <div className={styles.articlewrapper}>
            <figure className={styles.figure} >
              <img src="image/Package images/package-08.jpg" alt="" />
            </figure>
            <div className={styles.articlebody}>
              <p>Rating</p>
              <FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStarHalf} className={styles.staricon} />
            </div>
          </div>
        </article>

        <article className={styles.article} >
          <div className={styles.articlewrapper}>
            <figure className={styles.figure} >
              <img src="image/Package images/package-09.jpg" alt="" />
            </figure>
            <div className={styles.articlebody}>
              <p>Rating</p>
              <FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStar} className={styles.staricon} /><FontAwesomeIcon icon={faStarHalf} className={styles.staricon} />
            </div>
          </div>
        </article>
      </section>
    </div>

    
  )
}

export default DestinationCard
