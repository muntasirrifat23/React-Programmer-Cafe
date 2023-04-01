import React, { useEffect, useState } from 'react';
import './Product.css'
import Detail from '../Detail/Detail';
const Product = () => {
    const[products, setProduct]= useState([]);

    // Mark
    const[marks, setMarks]= useState([]);

    // Read
    const[reads, setReads]= useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=>setProduct(data))
    }, [])

    // Marks As 
    const handleToAddMarks = (product)=>{
        // console.log(product);
        const newMark = [...marks, product];
        setMarks(newMark);
    }

    // Read
    const handleToAddRead = (product)=>{
        // console.log(product);
        const newRead = [...reads, product];
        setReads(newRead);
        
    }
//    let read=0;
//    for(const product of marks){
//     read=read+ product.read
//    }
    return (
        <div className='product-container'>
            <div className='data-container'>  
                {
                    products.map(product=><Detail product={product}
                    key={product.id}
                    handleToAddMarks={handleToAddMarks}
                    handleToAddRead={handleToAddRead}
                    >                   
                    </Detail>)
                }
                
            </div>
           
            <div className='blogs-container'>
                {/* let reads=0;
                for(const product of mark){
                    reads = reads + products.read
                } */}
            <div>
              <h3 className='spent'>
                Spent time on read: {reads.length}
              </h3> 
            </div>  
            <div>
                <h3 className='mark'>Bookmarked Blogs: {marks.title}</h3>
                {/* <h5>{marks.title}</h5> */}
            </div>         
            </div>
        </div>
    );
};

export default Product;