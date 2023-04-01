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
            

            <p className='qsn3'>
                <h3>What to do useEffect without data load?</h3>
                Ans: useEffect hook in React is used to perform side effects in function components. Also useEffect do to perform actions such as tracking changes in state variables, running cleanup code or performing actions once when the component is mounted.
            </p>

            <p className='qsn4'>
                <h3>How does React work?</h3>
                Ans: React is a JavaScript library that is used to build user interfaces. If a React application is loaded in web browser at the first thing that happens is that the root component is rendered into the DOM. The root component is responsible for rendering all of the child components that make up the application.
            </p>
        </div>
    );
};

export default Footer;