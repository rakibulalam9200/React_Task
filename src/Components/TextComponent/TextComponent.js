import { isVisible } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

const fromControlStyle ={
    backgroundColor: '#F6F8FC',
    border: 'none',
    borderBottom: '1px solid #959595',
    borderRadius: 0,
    padding: '14px 50px',
}

const iconStyle ={
    backgroundColor: '#F6F8FC',
    border: 'none',
    position: 'absolute',
    left: '2px',
    top: '14px',
    zIndex: '9999',
}

const TitleSTyle = {
    fontSize:'24px',

}

const TextComponent = ({title,placeholder,iconVisible}) => {
    return (
        <div>
            <p style={TitleSTyle} className='my-3'>{title}</p>
            <InputGroup size="lg">
                {iconVisible && <InputGroup.Text style={iconStyle}><i className="fas fa-map-marker-alt"></i> </InputGroup.Text>}
               
                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" 
                placeholder= {placeholder} style={fromControlStyle}/>
                
            </InputGroup>
        </div>
    );
};

export default TextComponent;