import React, {useState } from 'react';
import { Form } from 'react-bootstrap';
import Modal from 'react-modal';
import dropdownImage from '../../res/images/dropdown.png';
import PassengerCounter from '../PassengerCounter/PassengerCounter';

Modal.setAppElement('#root');

const buttonControlStyle ={
    backgroundColor: '#F6F8FC',
    border: 'none',
    borderBottom: '1px solid #959595',
    borderRadius: 0,
    padding: '11px',
    minWidth:'100%',
    fontSize:'24px',
    display: 'flex',
    justifyContent: 'space-between',
}

const iconStyle ={
    left: '50px',
}

const TitleStyle = {
    fontSize:'24px',

}

const fromControlStyle ={
    backgroundColor: '#F6F8FC',
    border: 'none',
    borderBottom: '1px solid #959595',
    borderRadius: 0,
    padding: '14px 5px',
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
        width: '427.5px',
        top: '52.2%',
        left: '12.7%',
      }
  
};

const modalDiv = {
    color: '#a9a9a9',
    display: 'block',
}

const travelDiv = {
    fontSize:'24px !important',

}




const TravelButton = ({title,iconVisible}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [flightClass, setFlightClass] = useState('Economy');
    const [adultCount,setAdultCount] = useState(1);
    const [youngCount,setYountCount] = useState(0);
    const [childCount,setChildCount] = useState(0);
    const [infantCount,setInfantCount] = useState(0);
   
    const passengerCount = adultCount + youngCount + childCount + infantCount;
   
    return (
        <div>
            
             <p style={TitleStyle} className='my-3'>{title}</p>
             <button onClick={()=>setModalIsOpen(true)} style ={buttonControlStyle}><span>
                  { passengerCount > 1 && <span>{passengerCount} Passengers</span>}
                  { passengerCount === 1 && <span>{passengerCount} Passenger</span>}         
             , {flightClass}</span> <span><img  src={dropdownImage} alt="" /></span></button>
             <div style ={modalDiv} tabIndex={-1}>
                <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)} style={customStyles}>
                   <div>
                       <p style={{fontSize:'24px'}}>Travel Class</p>
                       <Form.Select size="lg" style ={fromControlStyle} value={flightClass} onChange={e => setFlightClass(e.target.value)} >
                            <option>Economy</option>
                            <option>Premium</option>
                            <option>Upper Class</option>
                        </Form.Select>                                                                                                                      
                   </div>
                    <br />
                   <hr />
                   <br />
                   <div>
                        <p style={{fontSize:'24px'}}>PASSENGERS</p>
                            <PassengerCounter 
                            pTitle="Adult"
                            pText="Age 16 and over"
                            adultCount ={adultCount}
                            increment = {() => passengerCount < 9 ? setAdultCount(adultCount + 1):setAdultCount(adultCount)}
                            decrement = {() => adultCount > 1 ? (infantCount<adultCount?setAdultCount(adultCount - 1):setAdultCount(adultCount)):setAdultCount(adultCount)}
                            />
                            <PassengerCounter
                            pTitle="Young Adult"
                            pText="Age 12-16"
                            youngCount ={youngCount}
                            increment = {() => passengerCount < 9 ? setYountCount(youngCount + 1):setYountCount(youngCount)}
                            decrement = {() => youngCount > 0 ? setYountCount(youngCount - 1):setYountCount(youngCount)}
                            />
                            <PassengerCounter
                            pTitle="Child"
                            pText="Age 2-11"
                            childCount ={childCount}
                            increment = {() => passengerCount < 9 ? setChildCount(childCount + 1):setChildCount(childCount)}
                            decrement = {() => childCount > 0 ? setChildCount(childCount - 1):setChildCount(childCount)}
                            />
                            <PassengerCounter
                            pTitle="Infant"
                            pText="Age up to 2"
                            infantCount ={infantCount}
                            increment = {() => passengerCount < 9 ? (adultCount>infantCount?setInfantCount(infantCount + 1):setInfantCount(infantCount)):setInfantCount(infantCount)}
                            decrement = {() => infantCount > 0 ? setInfantCount(infantCount - 1):setInfantCount(infantCount)}
                            />                       
                   </div>
                </Modal>
             </div>
        </div>
    );   
};

export default TravelButton;