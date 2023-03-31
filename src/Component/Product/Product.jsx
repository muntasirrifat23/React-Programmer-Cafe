import React, { useEffect, useState } from 'react';
import './Product.css'
import Detail from '../Detail/Detail';
const Product = () => {
    const[products, setProduct]= useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=>setProduct(data))
    }, [])
    // fetch('products.json')

    return (
        <div className='product-container'>
            <div className='data-container'>  
                {
                    products.map(product=><Detail product={product}></Detail>)
                }
                
            </div>
           
            <div>
                <p>another</p>
            </div>
        </div>
    );
};

export default Product;