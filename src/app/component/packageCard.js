'use client';

import React, { useEffect, useState } from 'react';
import Packimg2 from '../image/product image/02.jpg';
import Packimg3 from '../image/product image/03.jpg';
import styles from './packageCard.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const getPackage = async () => {
  let data = await fetch("/api/packages", { cache: "no-cache" });
  data = await data.json();
  if (data.success) {
    return data.result;
  } else {
    return [];
  }
}

const PackageCard = () => {
  const [packages, setPackages] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const packageData = await getPackage();
      setPackages(packageData);
    };

    fetchData();
  }, []);

  const handleCardClick = (id) => {
    router.push(`/packages/${id}`);
  };

  return (
    <div className={styles.productcontiner}>
      <h2 className={styles.title}>Umrah Packages 2024</h2>
      <div className={styles.container}>
        {packages.map((pkg) => (
          <div key={pkg._id} className={styles.card} onClick={() => handleCardClick(pkg._id)}>
            <div className={styles.cardimgdiv}>
              <Image
                src={pkg.image}
                alt="Package Image"
                className={styles.cardimg}
                layout="responsive"
                width={1080}
                height={1080}
              />
            </div>
            <div className={styles.cardContent}>
              <h4><b>{pkg.name}</b></h4>
              <p>{pkg.price}</p>
            </div>
          </div>
        ))}
        
       
      </div>
    </div>
  );
};

export default PackageCard;
