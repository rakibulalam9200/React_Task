
import React, { useState } from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import CalendarModal from 'react-modal';
import Calendar from './Calendar';


const fromControlStyle ={
    backgroundColor: '#F6F8FC',
    border: 'none',
    borderBottom: '1px solid #959595',
    borderRadius: 0,
    padding: '14px 5px',
}
const fromControlDisabledStyle ={
    backgroundColor: '#959595',
    border: 'none',
    borderBottom: '1px solid #959595',
    borderRadius: 0,
    padding: '14px 5px',
}

const iconStyle ={
    backgroundColor: '#F6F8FC',
    border: 'none',
    position: 'absolute',
    right: '2px',
    top: '14px',
    zIndex: '9999',
}

const TitleSTyle = {
    fontSize:'24px'
}

const customStyles = {
    
    overlay: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'transparent'
      },
      content: {
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        outline: '2px solid skyblue',
        width: '700px',
        height: '300px',
        top: '37%',
        left: '50%',
        right: '10%',
      }
  
};

const disabledStyle = {
    backgroundColor: '#959595',
}
//import DateRangePicker from 'react-bootstrap-daterangepicker';
//import "bootstrap-daterangepicker/daterangepicker.css";
const DatePickerComponent = (props) => {
    const {title,placeholder,iconVisible,active} = props;
    console.log(active);
    const [calendarModalIsOpen, setCalendarModalIsOpen] = useState(false);
    const [startDate, setStartDate] = useState('');
    
    return (
        <div> 
                <p style={TitleSTyle} className='my-3'>{title}</p>
                {
                    active === false ? 
                    <Form.Control size="lg"
                    type="text"
                    placeholder={placeholder}
                    aria-label="select dates"
                    disabled = {active === false} 
                    onClick={() =>setCalendarModalIsOpen(true)}
                    style = {fromControlDisabledStyle}
                    
                    />:
                    <Form.Control size="lg"
                    type="text"
                    placeholder={placeholder}
                    aria-label="select dates"
                    disabled = {active === false} 
                    onClick={() =>setCalendarModalIsOpen(true)}
                    style = {fromControlStyle}
                    value = {()=>setStartDate(startDate)}
                   
                    />
                
                }
                    
                    {iconVisible && <Form.Text style={iconStyle}><i class="far fa-calendar-minus"></i> </Form.Text>}
                
                 {/* <InputGroup size="lg">
                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" 
                    type="text"
                    onClick={() =>setCalendarModalIsOpen(true)}
                    placeholder= {placeholder} 
                    style={fromControlStyle}/> 
                    {iconVisible && <InputGroup.Text style={iconStyle}><i class="far fa-calendar-minus"></i> </InputGroup.Text>}
                </InputGroup> */}
                
                
                <CalendarModal isOpen={calendarModalIsOpen} onRequestClose={()=>setCalendarModalIsOpen(false)} style={customStyles}>
                   <Calendar startDate={startDate}/>
                </CalendarModal>
            
        </div>
    );
};

export default DatePickerComponent;