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
    // let read=0;
    // for(const reads of read){
    //  read=read+ read.read;
    // }
    
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



           {/* Another */}
            <div className='blogs-container'>
            
            <div>
              <h3 className='spent'>
                Spent time on read: 
                {
                    reads.map(read=><p>{read.read} min read</p>)
                }
              </h3> 
            </div>  
            <div  className='mark'>
                <h3>Bookmarked Blogs: {marks.length}</h3>
                
                {
                    marks.map(mark=><h4 className='titleStyle'>{mark.title}</h4>)
                }
            </div>         
            </div>
        </div>
    );
};

export default Product;