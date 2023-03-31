import React from 'react';
import './Detail.css'
const Detail = (props) => {
    console.log(props)
    const{img, name,profile, date,read}= props.product;
    return (
        <div className='data'>
            <img src={img} alt="" />
            
            <div className='middle'>
            <div className='ndate'>
                <p className='profile'><img src={profile} alt="" /></p>
                <div className='r'>
                <h5 className='name'>{name}</h5> 
                <h6 className='date'>{date}</h6>
            </div>
            </div>
                <h6>{read}</h6>
                <button>ioo</button>
            </div>
           
        </div>
    );
};

export default Detail;