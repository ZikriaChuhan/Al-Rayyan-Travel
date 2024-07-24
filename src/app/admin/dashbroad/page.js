"use client"

import React from 'react';
import Link from "next/link";
import styles from './dashbroad.module.css'
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
    return { success: false }
  }
}


export default async function Dashbroad() {

  const packages = await getPackage();

  return (
    <AuthWrapper>

      <div className={styles.headdiv}>
        <h1>Welcom to Dashbroad</h1>
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

            {
              packages.map((i) => (
                <tr key={i._id} >
                  <td><img src={i.image} className={styles.productImage} /></td>
                  <td>{i.name}</td>
                  <td>{i.price}</td>
                  <td>
                    <label className={styles.switch}>
                      <input type="checkbox" />
                      <span className={styles.slider}></span>
                    </label>
                  </td>
                  <td>

                    <span className={styles.permission} >
                      {i.shortdes}
                    </span>

                  </td>
                  <td>
                    <a href={"../admin/" + i._id} className={styles.editButton}>Edit</a>
                    <Deletepackage id={i._id} />
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>

   </AuthWrapper>
  )
}
