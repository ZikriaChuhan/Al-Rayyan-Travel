"use client"

import "../addpackage/styles.css"
import { useState, useEffect } from "react";
import AuthWrapper from "../../component/AuthWrapper";

export default function Editpackage(props) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [shortdes, setShortdes] = useState('');
    const [longdes, setLongdes] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        getPackageDetail()
    }, []);

    const getPackageDetail = async () => {
        try {
            let packageId = props.params.editpackage;
            let response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/packages/${packageId}`);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            let packageData = await response.json();

            if (packageData.success) {
                let result = packageData.result;
                setName(result.name);
                setPrice(result.price);
                setShortdes(result.shortdes);
                setLongdes(result.longdes);
            } else {
                setError('Failed to fetch package details.');
            }
        } catch (error) {
            console.error('Error fetching package data:', error);
            setError('Error fetching package data.');
        }
    };


    const updatePackage = async () => {
        try {
            let packageId = props.params.editpackage;
            let response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/packages/${packageId}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, price, shortdes, longdes })
            });

            let data = await response.json();

            if (data.success) {
                alert("Package updated successfully!");
                window.location.href = "/admin/dashbroad"; 
            } else {
                setError('Failed to update package.');
            }
        } catch (error) {
            console.error('Error updating package data:', error);
            setError('Error updating package data.');
        }
    };

    return (

        <AuthWrapper>

{error ? (
                <p className="error">{error}</p>
            ) : (
                <div>
                    <h1 className="h1">Update Package</h1>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Package Name"
                        className="input"
                        required
                    />
                    <textarea
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter your Price list"
                        className="txtarea"
                        required
                    />
                    <textarea
                        value={shortdes}
                        onChange={(e) => setShortdes(e.target.value)}
                        placeholder="Short Description"
                        className="txtarea"
                        required
                    />
                    <textarea
                        value={longdes}
                        onChange={(e) => setLongdes(e.target.value)}
                        placeholder="Long Description"
                        className="txtarea"
                        required
                    />
                    <button className="btn12" onClick={updatePackage}>Update</button>
                </div>
            )}

        </AuthWrapper>

    )
}
