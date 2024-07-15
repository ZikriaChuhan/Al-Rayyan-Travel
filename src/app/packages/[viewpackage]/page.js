import React from 'react';
import Image from 'next/image';
import Navbar from '../../component/navbar';
import Footer1 from "../../component/footer";
import "./styles.css"

async function fetchPackageData(viewpackage) {
    const response = await fetch(`http://localhost:3000/api/package/${viewpackage}`, { cache: "no-cache" });
    const packageData = await response.json();
    return packageData;
  }
  
  const PackageDetail = async ({ params }) => {
    const packageData = await fetchPackageData(params.viewpackage);
  
    if (!packageData.success) {
      return <div>Error loading package details</div>;
    }

    const { name, image, price, shortdes, longdes } = packageData.result;
    
  return (

    <>
    <Navbar />
    <div className="package-detail-container">
      <div className="package-image">
        <img src={image} alt='fdf' layout="fill" objectFit="cover"  />
      </div>
      <div className="package-info">
        <h1 className="package-title">{name}</h1>
        <div className="package-price">
          <h2>{price}</h2>
        </div>
        <div className="package-includes">
          <h2>Packages Includes:</h2>
          <p className="package-shortdes">{shortdes}</p>
        </div>
        
         
      </div>
    </div>
    <div className='longdes'>
        <h1>Description:</h1>
    <p className="package-longdes">{longdes}</p>
    </div>

<Footer1 />
    </>
  );
};

export default PackageDetail;
