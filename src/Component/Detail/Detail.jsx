import React from 'react';
import './Detail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Detail = (props) => {
    const{img, name,profile, date,read,title,description}= props.product;

    // Read:
    const handleToAddRead= props.handleToAddRead;

    // Mark As:
    const handleToAddMarks= props.handleToAddMarks;

    

    // Toast
    const notify = () => {
      if(handleToAddRead<=0){
        toast.error("none")

      }
      else{
        toast("Already Added");
      }
    
    }


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
                <h6 className='read'>{read} min read

                <button onClick={notify} className='toast'>
                <button className='iconB' onClick={()=>handleToAddRead(props.product)}> 
                          <FontAwesomeIcon icon={faBookmark} />
               
                </button>
                </button>
                <ToastContainer />

                </h6>
               
            </div>   
            </div>
            {/* Title */}
            <div>
            <h3  className='title'>{title}</h3>
            </div>
            <p>{description}</p>
            
            {/* Button */}
            <button className='markAs' onClick={()=>handleToAddMarks(props.product)}>Mark as read</button>
            </div>
            

            </div>
        
    );
};

export default Detail;