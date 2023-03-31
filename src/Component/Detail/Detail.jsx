import React from 'react';
import './Detail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Detail = (props) => {
    console.log(props)
    const{img, name,profile, date,read,title,description}= props.product;
    return (
        <div className='data'>
            <div className='position'>
            <img src={img} alt="" />
            
            <div className='middle'>
            <div className='ndate'>
                <p className='profile'><img src={profile} alt="" /></p>
              <div className='r'>
                <h5 className='name'>{name}</h5> 
                <h6 className='date'>{date}</h6>
              </div>
            </div>
            <div>
                <h6 className='read'>{read} read</h6>
                <button>iohuhjjo</button>
            </div>   
            </div>
            {/* Title */}
            <div>
            <h3  className='title'>{title}</h3>
            </div>
            <p>{description}</p>
            <button className='mark'>Mark as read</button>
            </div>
            </div>
        
    );
};

export default Detail;