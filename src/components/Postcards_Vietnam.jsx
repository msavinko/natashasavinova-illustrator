import React from 'react';
import {NavLink} from "react-router-dom";

const PostcardItem = (props)=>{
    return <div className="col-sm p-2 mx-auto">
        <div>
            <img src={props.img} width="100%" alt={props.name} />
        </div>
    </div>
}

const Postcards_Vietnam = (props)=>{
    let postcards = props.getVietnam();
    let postcardCount = Object.keys(postcards).length;
    let postcardItems = [];
    for (let i = 0; i < postcardCount; i++) {
        postcardItems.push(<PostcardItem
            key={i}
            name={postcards[i].name}
            img={postcards[i].img}
        />)
    }
    return (
        <div className="container-fluid">
            <NavLink to="illustration">BACK</NavLink>
            <div className="row">
                <div className="col-sm">
                    {postcardItems}
                </div>
            </div>
        </div>
    )
}
export default Postcards_Vietnam;