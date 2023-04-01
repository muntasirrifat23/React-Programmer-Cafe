import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <p className='qsn1'>
                <h3>Difference Between props & state.</h3>
                Ans: Props are immutable, that means they cannot be changed by the child component. Another, state is mutable and can be changed by the component itself. Props are typically used to pass data and callbacks from a parent component to a child component, while state is used to manage the internal state of a component and trigger re-renders.
            </p>

            <p className='qsn2'>
                <h3>How to work useState?</h3>
                Ans: useState work as react hook. For example, first element returned by the hook is the current value of the state variable and the second element is a function that can be used to update the state variable. useState in a react is functional component. We can use this hook to manage any stateful behavior in your component.
            </p>
            

            <p><h3></h3></p>
            <p><h3></h3></p>
        </div>
    );
};

export default Footer;