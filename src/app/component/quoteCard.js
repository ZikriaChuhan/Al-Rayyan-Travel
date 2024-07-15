
"use client"; 

import styles from './quote.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {ScrollShadow} from "@nextui-org/scroll-shadow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const quotes = [
    {
      quote: "Absolutely recommend. Uzair treats all his clients like family and he stands behind every thing. During the travel to Saudi with our entire family he was in touch and on top of everything. Even after our return he was in touch and wanted to know how could he have made our accommodations better but there were no complaints at all. 100 percent A1 gentleman and great services. Thank you on behalf of our family for such accommodations.❤️",
      author: "Aslam Jivani",
      image: "../image/review/rev01.jpg"
    },
    {
      quote: "We recently took umarah package with uzair bhai on Shawn bai recommendation I have no words how to say we really enjoyed the whole trip uzair bhai is very experience within few days he become our family member he was explaining everything during umarah and best thing is that his package is very reasonable and top of it the way he give us dua we get goosebumps Shukar Mowla we finished umarah without any huddles the whole trip went so smoothly  I will definitely recommend for uzair bhai Al rayan travel to every one for successful trip",
      author: "Karima Rayani",
      image: "../image/review/rev02.jpg"
    },
    {
      quote: "Uzair Bhai, Thank you for all of your assistance in finding for us the right flights, great accommodations and on time and very comfortable transportation services for our Umrah.  Our experience with Al-Rayyan was absolutely amazing, pleasant and cheerful. I also wanted to take a moment to sing the praises of your team every encounter with them was wonderful and professional. May Allah gives you great success. Jazakallah",
      author: "Rushna Shah",
      image: "../image/review/rev03.jpg"
    },
    {
      quote: "completed my Umrah trip Last week, Really like to Thanks Uzair bhai and his team from Al Rayyan Travel for arranging this trip. loved the feeling that Uzair bhai is just a call or text away if needed. Highly Recommend Al Rayyan Travel.",
      author: "Bilal Syed",
      image: "../image/review/rev04.jpg"
    }
  ];
  

const QuoteCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // Below this width, show one slide at a time
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.superdiv}>
    <div className={styles.container12}>
   <Slider {...settings}>
      {quotes.map((q, index) => (
        <figure className={styles.snip1157} key={index}>
          <blockquote  >
          <ScrollShadow  className={styles.ScrollShadow} >
            {q.quote}
            </ScrollShadow>
            <div className={styles.arrow}></div>
          </blockquote>
          <img src={q.image} alt={q.author} />
          <div className={styles.author}>
            <h5>{q.author}</h5>
            <span>
              <FontAwesomeIcon icon={faStar} className={styles.staricon} size="xs" />
              <FontAwesomeIcon icon={faStar} className={styles.staricon} size="xs" />
              <FontAwesomeIcon icon={faStar} className={styles.staricon} size="xs" />
              <FontAwesomeIcon icon={faStar} className={styles.staricon} size="xs" />
              <FontAwesomeIcon icon={faStar} className={styles.staricon} size="xs" />
            </span>
          </div>
        </figure>
      ))}
      </Slider>
    </div>
    </div>
  );
};

export default QuoteCard;
