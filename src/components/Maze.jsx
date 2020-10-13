import React from 'react';
import {NavLink} from "react-router-dom";

const MazeItem = (props)=>{
    return <div className="col-sm p-2 mx-auto">
        <div>
            <img src={props.img} width="100%" alt={props.name} />
        </div>
    </div>
}

const Maze = (props)=>{
    let mazes = props.getMaze();
    let mazeCount = Object.keys(mazes).length;
    let mazeItems = [];
    for (let i = 0; i < mazeCount; i++) {
        mazeItems.push(<MazeItem
            key={i}
            name={mazes[i].name}
            img={mazes[i].img}
        />)
    }
    return (
        <div className="container-fluid">
            <NavLink to="illustration">BACK</NavLink>
            <div className="row">
                <div className="col-sm">
                    {mazeItems}
                </div>
            </div>
        </div>
    )
}
export default Maze;