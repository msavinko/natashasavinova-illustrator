import React from 'react';
import {NavLink} from "react-router-dom";

const Ceramics = (props)=>{
    let ceramics = props.getCeramics();
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-4 p-2 mx-auto">
                    <div className="img-wrap">
                        <img src={ceramics[0].img} width="100%" alt={ceramics[0].name} />
                        <p className="hidden-text">{ceramics[0].name}</p>
                    </div>
                </div>
                <div className="col-sm-4 p-2 mx-auto">
                    <div className="img-wrap">
                        <img src={ceramics[1].img} width="100%" alt={ceramics[1].name} />
                        <p className="hidden-text">{ceramics[1].name}</p>
                    </div>
                </div>
                <div className="col-sm-4 p-2 mx-auto">
                    <div className="img-wrap">
                        <img src={ceramics[2].img} width="100%" alt={ceramics[2].name} />
                        <p className="hidden-text">{ceramics[2].name}</p>
                    </div>
                </div>
                <div className="col-sm-4 p-2 mx-auto">
                    <div className="img-wrap">
                        <img src={ceramics[3].img} width="100%" alt={ceramics[3].name} />
                        <p className="hidden-text">{ceramics[3].name}</p>
                    </div>
                </div>
                <div className="col-sm-4 p-2 mx-auto">
                    <div className="img-wrap">
                        <img src={ceramics[4].img} width="100%" alt={ceramics[4].name} />
                        <p className="hidden-text">{ceramics[4].name}</p>
                    </div>
                </div>
                <div className="col-sm-4 p-2 mx-auto">
                    <div className="img-wrap">
                        <img src={ceramics[5].img} width="100%" alt={ceramics[5].name} />
                        <p className="hidden-text">{ceramics[5].name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ceramics;