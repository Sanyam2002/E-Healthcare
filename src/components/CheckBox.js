import React, { useState } from 'react'

import { useLocation } from 'react-router';
const delivery = [
    {
        "_id": 1,
        "name": "New Products"
    },
    {
        "_id": 2,
        "name": "Free Shipping"
    },
    {
        "_id": 3,
        "name": "One Day Delivery"
    },
    {
        "_id": 4,
        "name": "Two Day Delivery"
    }
]
const category = [
    { "_id": "1", "name": "Baby Care" },
    { "_id": '2', "name": "Personal Care" },
    { "_id": "3", "name": "Sports & Nutrition" },
    { "_id": "4", "name": "Generic Medicine" },
    { "_id": "5", "name": "Covid Prevention" },
    { "_id": "6", "name": "Diabetes" }
]
export const CheckBox = (props) => {
    // console.log('in checkbox')
    let location = useLocation();
    const [Checked, setChecked] = useState([])
    const handlToggle = (value) => {
        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];
        if (currentIndex === -1) {
            newChecked.push(value)
        }
        else {
            newChecked.splice(currentIndex, 1)
        }
        setChecked(newChecked)
        props.handledelivery(newChecked)
    }

    return (
        <>{
            location.pathname === '/cart' ?
                <div>
                    {
                        category.map((value, index) => (
                            <div >
                                <div key={index} >
                                    <label className="checkbox-wrap checkbox-primary mb-0" style={{ float: 'left', position: 'absolute' }}>{value.name}</label>
                                    <label className="checkbox-wrap checkbox-primary mb-0" style={{ float: 'right' }}>
                                        <input type="checkbox" onChange={() => handlToggle(value._id)} checked={Checked.indexOf(value._id) === -1 ? false : true} />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <br />
                            </div>
                        ))
                    }
                </div> :
                <div>
                    {
                        delivery.map((value, index) => (
                            <div >
                                <div key={index} >
                                    <label className="checkbox-wrap checkbox-primary mb-0" style={{ float: 'left', position: 'absolute' }}>{value.name}</label>
                                    <label className="checkbox-wrap checkbox-primary mb-0" style={{ float: 'right' }}>
                                        <input type="checkbox" onChange={() => handlToggle(value._id)} checked={Checked.indexOf(value._id) === -1 ? false : true} />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <br />
                            </div>
                        ))
                    }
                </div>
        }
        </>
    )
}