"use client"

import "./styles.css"
import { useState } from "react";
import AuthWrapper from "../../component/AuthWrapper";


export default function AddPackage() {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [shortdes, setShortdes] = useState('');
    const [longdes, setLongdes] = useState('');
    const [image, setImage] = useState(null);

    const publishPackage = async () => {
        
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('price', price);
            formData.append('shortdes', shortdes);
            formData.append('longdes', longdes);
            formData.append('image', image);

            const response = await fetch("../../api/packages", {
                method: "POST",
                body: formData
            });

            if (!response.ok) {
                throw new Error('Failed to publish package');
            }

            alert("Package published successfully");
            console.log(name, price, shortdes, longdes, image);
            setName('');
            setPrice('');
            setShortdes('');
            setLongdes('');
            setImage(null);
            window.location.href = "/admin/dashbroad";
        } catch (error) {
            console.error("Error publishing package:", error.message);
            alert("Failed to publish package. Please try again.");
        }
    }

    return (
        <AuthWrapper>
            <div>
                <h1 className="h1">Add Package</h1>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Package Name" className="input" required />
                <textarea value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter your Price list" className="txtarea" required />
                <textarea value={shortdes} onChange={(e) => setShortdes(e.target.value)} placeholder="Short Description" className="txtarea" required />
                <textarea value={longdes} onChange={(e) => setLongdes(e.target.value)} placeholder="Long Description" className="txtarea" required />
                <input type="file" onChange={(e) => setImage(e.target.files[0])} className="input" required />
                <button className="btn12" onClick={publishPackage}>Publish</button>
            </div>
        </AuthWrapper>
    )
}

