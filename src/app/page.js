import styles from './page.module.css';
import Image from 'next/image';
import icon1 from './image/icon1.png';
import icon2 from './image/icon2.png';
import icon3 from './image/icon3.png';
import icon4 from './image/icon4.png';
import DestinationCard from './component/destinationCard';
import QuoteCard from './component/quoteCard';
import PackageCard from './component/packageCard';
import Travelpartnerlogo from './component/travelpartnerlogo'
import Navbar from "./component/navbar";
import Footer1 from "./component/footer";

export default function Home() {
  
  return (

    <main>
   
<Navbar />

    <div className={styles.slidervideo}>
    <video src="/slidervideo.mp4" type="video/MP4" autoPlay muted loop />
    </div>



    <div className={styles.traveldiv}>
      <div className={styles.trvlpatner}>
        <Image src={icon1}  width={80}   height='auto' alt="icon1" className={styles.img} /><br /><br />
        <h2>TRAVEL PARTNER</h2><br />
        <p>With our unwavering commitment, our travel concierge team is ready to support you throughout every stage of your journey before, during, and after your travels.</p>
      </div>
      <div className={styles.trvlpatner}>
        <Image src={icon2}  width={80}  height='auto'  alt="icon2" className={styles.img} /><br /><br />
        <h2>EXCLUSIVE HOTEL PERKS</h2><br />
        <p>Indulge in negotiated benefits at our partner hotels, including daily breakfast, resort credits, room upgrades, and other enticing amenities.</p>
      </div>

      <div className={styles.trvlpatnerimg}>
        <img src='./image/iconimg.png' alt="iconimg" />
      </div>

      <div className={styles.trvlpatner}>
        <Image src={icon3}  width={80}  height='auto'  alt="icon3" className={styles.img} /><br /><br />
        <h2>AIR DESK</h2><br />
        <p>Preferred airfare rates on business and premium economy, plus logistical and emergency assistance</p>
      </div>
      <div className={styles.trvlpatner}>
        <Image src={icon4}  width={80}  height='auto' alt="icon4" className={styles.img} /><br /><br />
        <h2>SIGHTSEEING</h2><br />
        <p>Customized private and small group touring options to maximize your experience.</p>
      </div>
    </div>




    <div className={styles.allservices}>
      <div className={styles.servicmain}>
        <div className={styles.servicemainchlid}>
          <h1 className={styles.ourserv}>Our services</h1>
          <div className={styles.maingreenline}></div>
          <br />
          <p>Embark on Your Ideal Journey with Us! Discover an Array of Tailored Travel Planning Services, Crafted by Our Expert Concierge Advisors.</p>
        </div>

        <div className={styles.servicechlid}>
          <h4 className={styles.hajjh4}>Hajj and Umrah Packages:</h4>
          <div className={styles.greenline}></div>
          <br />
          <p>We create special packages for both Hajj and Umrah that include religious rituals, cultural experiences, and comfortable places to stay. Whether you travel alone or with a group, our packages ensure a meaningful pilgrimage to Makkah and Madinah.</p>
        </div>

        <div className={styles.servicechlid}>
          <h4 className={styles.hajjh4}>Flight Tickets:</h4>
          <div className={styles.greenline}></div>
          <br />
          <p>We handle all your flight bookings, both for local and international travel. Our experienced team ensures you get the best flights with good schedules and affordable prices.</p>
        </div>
      </div>

      <div className={styles.servicmain2}>
        <div className={styles.servicechlid}>
          <h4>Visa Assistance:</h4>
          <div className={styles.greenline}></div>
          <br />
          <p>We provide help with visa applications to make your travel preparations smoother and more convenient.</p>
        </div>

        <div className={styles.servicechlid}>
          <h4>Hotel Reservations:</h4>
          <div className={styles.greenline}></div>
          <br />
          <p>We know how important a comfortable stay is, so we offer a variety of hotels to choose from. Whether you want luxury or simplicity, we have options that fit your budget and preferences.</p>
        </div>

        <div className={styles.servicechlid}>
          <h4>Customer Support:</h4>
          <div className={styles.greenline}></div>
          <br />
          <p>Our helpful customer support team is here for you at every step of your journey. From answering questions to providing help during your trip, we are dedicated to giving you the best service possible.</p>
        </div>
      </div>
    </div>


   <DestinationCard />
  <PackageCard />

    <div className={styles.widthwhyus}>
      <div className={styles.whyus}>
        <h2>Why Us</h2>
        <p>Why accept a generic journey when you can have a truly personalized travel experience? At our core, we believe in tailoring every aspect of your trip to suit your preferences. As avid travelers ourselves, we understand the thrill of embarking on a meticulously crafted adventure. Whether your dream is to savor the flavors of Italy, conquer the peaks of Patagonia, or commemorate a special milestone with your loved ones, our dedicated travel concierge team stands prepared to curate an unforgettable and bespoke experience just for you.</p>
      </div>
    </div>


  <Travelpartnerlogo />

   

   <div className={styles.populardestination}> 
      <div className={styles.popdest}> 
        <h1> POPULAR</h1>
        <h3>Take a Break & Checkout <br />
          Our Top Destinations</h3>
        <p>Embark on a divine journey with our exclusive Umrah packages. <br />
          Experience tranquility like never before. </p>
      </div>
      <div className={styles.destvideo}> 
      <video src="image/destvideo.mp4" poster="image/videothumbnail.jpg" controls controlsList="noplaybackrate nodownload nofullscreen" disablePictureInPicture></video>
      </div>
    </div>


    <QuoteCard />
<Footer1 />

    </main>
  );
}
