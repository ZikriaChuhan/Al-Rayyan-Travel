"use client"

import { useRouter } from "next/navigation";
import styles from "../app/admin/dashbroad/dashbroad.module.css"

export default function Deletepackage({id}){
  const router = useRouter();
   const deleteRecord=async() =>{
    let response = await fetch("http://localhost:3000/api/packages/" + id, {
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