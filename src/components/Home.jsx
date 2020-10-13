import React from 'react';
import {NavLink} from "react-router-dom";

const HomeItem = (props)=>{
    return <div className="col-sm p-2 mx-auto">
        <div>
            <img src={props.img} width="100%" alt={props.name} />
        </div>
    </div>
}

const Home = (props)=>{
    let homes = props.getHome();
    let homeCount = Object.keys(homes).length;
    let homeItems = [];
    for (let i = 0; i < homeCount; i++) {
        homeItems.push(<HomeItem
            key={i}
            name={homes[i].name}
            img={homes[i].img}
        />)
    }
    return (
        <div className="container-fluid">
            <NavLink to="illustration">BACK</NavLink>
            <div className="row">
                <div className="col-sm">
                    {homeItems}
                </div>
            </div>
        </div>
    )
}
export default Home;