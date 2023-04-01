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
                    products.map(product=><Detail product={product}
                    key={product.id}
                    >                   
                    </Detail>)
                }
                
            </div>
           
            <div>
            <h3 className='spent'>
                Spent time on read:
            </h3>   
            <div className='bookmarked'>
                <h3>Bookmarked Blogs: 0</h3>
                </div>         
            </div>
        </div>
    );
};

export default Product;