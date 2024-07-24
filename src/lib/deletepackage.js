"use client"

import { useRouter } from "next/navigation";
import styles from "../app/admin/dashbroad/dashbroad.module.css"

export default function Deletepackage({id}){
  const router = useRouter();
   const deleteRecord=async() =>{
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/packages/${id}`, {
        method: "DELETE",
    });
    response = await response.json();
    if(response.success){
        alert("Product deleted")
        router.refresh();
    }
   }
    return(
    <>
    <button onClick={deleteRecord} className={styles.deleteButton} >Delete</button>

  
</>

)
}