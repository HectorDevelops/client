import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// creating this function to retrieve data from the Promise
export default function GetById(props) {

    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/manager/${id}`)
            .then(response => {
                console.log(response.data);
                setProduct(response.data)
                console.log(product);
            })
            .catch(error => {
                console.log(error);
            })

    }, [id])

        return (
            
            <div>
                <h3> Product Information:</h3>
                {/* printing the object's attributes */}
                <p>{product.title}</p>
                <p>{product.price}</p>
                <p>{product.description}</p>
            </div>
            
        )

}