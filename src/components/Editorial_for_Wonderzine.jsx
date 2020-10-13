import React from 'react';
import {NavLink} from "react-router-dom";

const WonderItem = (props)=>{
    return <div className="col-sm p-2 mx-auto">
        <div>
            <img src={props.img} width="100%" alt={props.name} />
        </div>
    </div>
}

const Editorial_for_Wonderzine = (props)=>{
    let wonders = props.getWonder();
    let wonderCount = Object.keys(wonders).length;
    let wonderItems = [];
    for (let i = 0; i < wonderCount; i++) {
        wonderItems.push(<WonderItem
            key={i}
            name={wonders[i].name}
            img={wonders[i].img}
        />)
    }
    return (
        <div className="container-fluid">
            <NavLink to="illustration">BACK</NavLink>
            <div className="row">
                <div className="col-sm">
                    {wonderItems}
                </div>
            </div>
        </div>
    )
}
export default Editorial_for_Wonderzine;