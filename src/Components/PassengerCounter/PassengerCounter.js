import React, { useContext } from 'react';
const passengerText = {
    fontSize: '20px',
    weight: 'semiBold',
}

const passengerCount = {
    backgroundColor: '#F6F8FC',
    border: 'none',
    padding: '5px 20px',
}

const passengerCountItems = {
    margin: '0 10px',
    fontSize: '24px',
    

}
const passengerCountButtons = {
    margin: '0 10px',
    border: 0,
    background:'none',
    fontSize: '28px',


}
const PassengerCounter = (props) => {

    const {pTitle,pText,increment,decrement,childCount,youngCount,adultCount,infantCount} = props;

    //const countContext = useContext(counterContext);
    return (
        <div>
            
                        <div className='d-flex justify-content-between mb-3'>
                            <div>
                                <p style={passengerText}>{pTitle}</p>
                                <p>{pText}</p>
                            </div>
                            <div className='d-flex justify-content-around align-items-center' style ={passengerCount}>
                                <button style={passengerCountButtons} onClick={decrement} >-</button>
                                {pTitle === "Adult" &&
                                <p style={passengerCountItems}>{adultCount} </p>}
                                {pTitle === "Young Adult" &&
                                <p style={passengerCountItems}>{youngCount} </p>}
                                {pTitle === "Child" &&
                                <p style={passengerCountItems}>{childCount} </p>}
                                {pTitle === "Infant" &&
                                <p style={passengerCountItems}>{infantCount} </p>}
                              
                                <button style={passengerCountButtons} onClick={increment}>+</button>
                            </div>
                        </div>
        </div>
    );
};

export default PassengerCounter;