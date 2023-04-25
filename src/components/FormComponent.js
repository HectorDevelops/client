import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function CreateNewManager(props) {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(null);
    const [description, setDescription] = useState("");
    
    // being used to store a list of product managers
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/managers')
            .then(response => {
                setProducts(response.data)
            })
            .catch(error => {
                console.log(error);
            })

    }, [])

    // will be handling the form submission
    const onSubmitHandler = (event) => {
        // prevents the page to re-fresh once the form is submitted
        event.preventDefault();
        // helps push the following data of objects within our MongoDB
        axios.post('http://localhost:8000/api/manager', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <>
            {/* form for user to submit */}
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title:</label>
                    <input type="text" onChange={(event) => setTitle(event.target.value)} />
                </p>
                <p>
                    <label>Price:</label>
                    <input type="number" onChange={(event) => setPrice(event.target.value)} />
                </p>
                <p>
                    <label>Description:</label>
                    <input type="text" onChange={(event) => setDescription(event.target.value)} />
                </p>
                <input type="submit" />
            </form>
            <hr />

            <h2>All Products:</h2>
            {/* napping all of the products returned from the Promise */}
            {products.map((product) => {
                return (
                    <div key={product._id}>
                        {/* Utilizing Link to select each unique Id and re-direct to that given Id and pull data from DB */}
                        <Link to={`/manager/${product._id}`}>
                            <p>{product.title}</p>
                        </Link>
                    </div>
                )
            })}
        </>

    )
};

