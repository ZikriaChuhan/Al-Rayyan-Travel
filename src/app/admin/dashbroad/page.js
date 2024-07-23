"use client"

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import styles from './dashbroad.module.css';
import Deletepackage from '@/lib/deletepackage';
import AuthWrapper from "../../component/AuthWrapper";
import { signOut } from "next-auth/react";

const getPackage = async () => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  let data = await fetch(`${apiBaseUrl}/api/packages`, { cache: "no-cache" });
  data = await data.json();
  if (data.success) {
    return data.result;
  } else {
    return [];
  }
}

export default function Dashbroad() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPackage();
      setPackages(data);
    };

    fetchData();
  }, []);

  return (
    <AuthWrapper>
      <div className={styles.headdiv}>
        <h1>Welcome to Dashboard</h1>
      </div>
      <div className={styles.logoutdiv}>
        <button className={styles.btnlogout} onClick={() => signOut()}>LogOut</button>
      </div>

      <Link href='./addpackage' className={styles.btn13}>Add New Package</Link>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Permissions</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg) => (
              <tr key={pkg._id}>
                <td><img src={pkg.image} className={styles.productImage} alt={pkg.name} /></td>
                <td>{pkg.name}</td>
                <td>{pkg.price}</td>
                <td>
                  <label className={styles.switch}>
                    <input type="checkbox" />
                    <span className={styles.slider}></span>
                  </label>
                </td>
                <td>
                  <span className={styles.permission}>
                    {pkg.shortdes}
                  </span>
                </td>
                <td>
                  <Link href={"../admin/" + pkg._id} className={styles.editButton}>Edit</Link>
                  <Deletepackage id={pkg._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AuthWrapper>
  );
}
