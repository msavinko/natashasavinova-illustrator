import React from 'react';
import {NavLink} from "react-router-dom";


const Illustration = (props)=>{
    let pictures = props.getPictures();
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-4 p-2 mx-auto">
                    <div className="img-wrap">
                        <NavLink to={"travel_sketchbook"}>
                            <img src={pictures[0].img} width="100%" alt={pictures[0].name} />
                            <p className="hidden-text">{pictures[0].name}</p>
                        </NavLink>
                    </div>
                </div>
                <div className="col-sm-4 p-2 mx-auto">
                    <div className="img-wrap">
                        <NavLink to="editorial_for_wonderzine">
                            <img src={pictures[1].img} width="100%" alt={pictures[1].name} />
                            <p className="hidden-text">{pictures[1].name}</p>
                        </NavLink>
                    </div>
                </div>
                <div className="col-sm-4 p-2 mx-auto">
                    <div className="img-wrap">
                        <NavLink to="postcards_vietnam">
                            <img src={pictures[2].img} width="100%" alt={pictures[2].name} />
                            <p className="hidden-text">{pictures[2].name}</p>
                        </NavLink>
                    </div>
                </div>
                <div className="col-sm-4 p-2 mx-auto">
                    <div className="img-wrap">
                        <NavLink to="editorial_for_postnauka">
                            <img src={pictures[3].img} width="100%" alt={pictures[3].name} />
                            <p className="hidden-text">{pictures[3].name}</p>
                        </NavLink>
                    </div>
                </div>
                <div className="col-sm-4 p-2 mx-auto">
                    <div className="img-wrap">
                        <NavLink to="maze">
                            <img src={pictures[4].img} width="100%" alt={pictures[4].name} />
                            <p className="hidden-text">{pictures[4].name}</p>
                        </NavLink>
                    </div>
                </div>
                <div className="col-sm-4 p-2 mx-auto">
                    <div className="img-wrap">
                        <NavLink to="home">
                            <img src={pictures[5].img} width="100%" alt={pictures[5].name} />
                            <p className="hidden-text">{pictures[5].name}</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Illustration;