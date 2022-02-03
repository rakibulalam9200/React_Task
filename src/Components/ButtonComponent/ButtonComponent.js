import React from 'react';

const ButtonComponent = () => {

    const buttonStyle ={
        backgroundColor: '#EB143A',
        border: 'none',
        borderRadius: 0,
        padding: '12px 50px',
        color: '#FFFFFF',
        marginTop: '50px',
        minWidth:'100%',
        fontSize: '24px'
    }
    
  
    
    
    return (
        <div className='my-3'>
            <button style={buttonStyle}>Book now</button>
        </div>
    );
};

export default ButtonComponent;