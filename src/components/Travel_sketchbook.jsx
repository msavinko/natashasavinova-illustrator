import React from 'react';
import {NavLink} from "react-router-dom";


const TravelItem = (props)=>{
    return <div className="col-sm p-2 mx-auto">
        <div>
            <img src={props.img} width="100%" alt={props.name} />
        </div>
    </div>
}

const Travel_sketchbook = (props)=>{
    let travels = props.getTravel();
    let travelCount = Object.keys(travels).length;
    let travelItems = [];
    for (let i = 0; i < travelCount; i++) {
        travelItems.push(<TravelItem
            key={i}
            name={travels[i].name}
            img={travels[i].img}
        />)
    }
    return (
        <div className="container-fluid">
            <NavLink to="illustration" name="top">BACK</NavLink>
            <div className="row">
                <div className="col-sm">
                    {travelItems}
                </div>
            </div>
        </div>
    )

}
export default Travel_sketchbook;