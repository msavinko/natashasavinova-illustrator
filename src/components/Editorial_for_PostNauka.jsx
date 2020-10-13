import React from 'react';
import {NavLink} from "react-router-dom";

const PostnaukaItem = (props)=>{
    return <div className="col-sm p-2 mx-auto">
        <div>
            <img src={props.img} width="100%" alt={props.name} />
        </div>
    </div>
}

const Editorial_for_PostNauka = (props)=>{
    let postnaukas = props.getNauka();
    let postnaukaCount = Object.keys(postnaukas).length;
    let postnaukaItems = [];
    for (let i = 0; i < postnaukaCount; i++) {
        postnaukaItems.push(<PostnaukaItem
            key={i}
            name={postnaukas[i].name}
            img={postnaukas[i].img}
        />)
    }
    return (
        <div className="container-fluid">
            <NavLink to="illustration">BACK</NavLink>
            <div className="row">
                <div className="col-sm">
                    {postnaukaItems}
                </div>
            </div>
        </div>
    )
}
export default Editorial_for_PostNauka;