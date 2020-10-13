import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = ()=>{
    return (
        <div className="container-fluid mx-0">
            <div className="row justify-content-center mt-5 mx-0">
                <div className="col-sm-5">
                    <div className="justify-content-center">
                    <img src="/images/logo_ILLUSTRATION.jpg" width="100%"/>
                    </div>
                    <div className="row justify-content-center mx-0">
                        <h2>NATASHA SAVINOVA</h2>
                    </div>
                </div>
            </div>

            <div className="row menu justify-content-center mx-0">
                    <nav className="navbar navbar-expand-sm navbar-light bg-white">
                        <a className="navbar-brand" ></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <NavLink className="nav-link" to="about">ABOUT<span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item active">
                                    <NavLink className="nav-link" to="illustration">ILLUSTRATION<span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item active">
                                    <NavLink className="nav-link" to="ceramics">CERAMICS<span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" target="_blank" href="https://www.instagram.com/natalia_savinova/">INSTAGRAM<span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" target="_blank" href="https://www.etsy.com/shop/NatashaSavinova">SHOP<span className="sr-only">(current)</span></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
            </div>
        </div>
    )
}

export default Menu;