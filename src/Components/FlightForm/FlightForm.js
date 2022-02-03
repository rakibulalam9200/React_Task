import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import DatePickerComponent from '../DatePickerComponent/DatePickerComponent';
import TextComponent from '../TextComponent/TextComponent';
import TravelButton from '../TravelButton/TravelButton';
import './FlightForm.css'

const FlightForm = () => {

    const [active, setActive] = useState(true);
    



    return (
        <div className='container my-5'>
            <h1>Flight deals with Virgin Atlantic</h1>
            <div className='d-flex'>
                <div className='me-4 flight-check'>
                <input 
                className="flight-type-input"
                type="radio" 
                name="oneWay" 
                id="flexRadioDefault1"
                checked={active===false}
                onClick={() =>setActive(!active)}
            
                />
                <label className="flight-type-label" for="flexRadioDefault1">
                    One way
                </label>
                </div>

                <div className='flight-check'>
                <input className="
                flight-type-input"
                type="radio"
                name="flexRadioDefault" 
                id="flexRadioDefault2" 
                checked={active===true}
                onClick={() =>setActive(!active)}
                />
                <label className="flight-type-label" for="flexRadioDefault2">
                    Round trip
                </label>
                </div>
            </div>
            <Row xs={1} md={2} lg={3} className="g-2">
                <Col>
                    <TextComponent title="From" placeholder="Select departure" iconVisible={true}/>
                </Col>
                <Col>
                    <TextComponent title="To" placeholder="Select destination" iconVisible={true}/>
                </Col>
                <Col>
                    <Row className="g-1">
                        <Col>
                            <DatePickerComponent title="Departure" placeholder="Select dates" iconVisible={true} />
                        </Col>
                        <Col>
                            <DatePickerComponent title="Return" placeholder="Select dates" iconVisible={true} active ={active}/>
                        </Col>
                    </Row>
                            
                </Col>

                <Col>
                    <TravelButton title="Passengers/travel class"  iconVisible={false}/>
                </Col>
                <Col>
                    <TextComponent title="Voucher or event code" placeholder="Enter Code" iconVisible={false}/>
                </Col>
                <Col>
                    <ButtonComponent/>
                </Col>
                
            </Row>
            
            
           
        </div>
    );
};

export default FlightForm;