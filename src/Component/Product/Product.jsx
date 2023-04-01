import React, { useEffect, useState } from 'react';
import './Product.css'
import Detail from '../Detail/Detail';
const Product = () => {
    const[products, setProduct]= useState([]);
    const[marks, setMarks]= useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=>setProduct(data))
    }, [])

    // Marks As 
    const handleToAddMarks = (product)=>{
        // console.log(product);
        const newMark = [...marks, product];
        setMarks(newMark)
    }
    
    return (
        <div className='product-container'>
            <div className='data-container'>  
                {
                    products.map(product=><Detail product={product}
                    key={product.id}
                    handleToAddMarks={handleToAddMarks}
                    >                   
                    </Detail>)
                }
                
            </div>
           
            <div className='blogs-container'>
            <div>
              <h3 className='spent'>
                Spent time on read:
              </h3> 
            </div>  
            <div>
                <h3 className='mark'>Bookmarked Blogs: {marks.length}</h3>
            </div>         
            </div>
        </div>
    );
};

export default Product;