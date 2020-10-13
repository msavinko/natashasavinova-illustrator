import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import About from "./components/About";
import Illustration from "./components/Illustration";
import Ceramics from "./components/Ceramics";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Travel_sketchbook from "./components/Travel_sketchbook";
import Editorial_for_Wonderzine from "./components/Editorial_for_Wonderzine";
import Postcards_Vietnam from "./components/Postcards_Vietnam";
import Editorial_for_PostNauka from "./components/Editorial_for_PostNauka";
import Maze from "./components/Maze";
import Home from "./components/Home";

function App(props) {
  return ( <div>
        <BrowserRouter>
          <Menu/>
          <Route path="/about"  component={About}/>
          <Route exact path="/" render ={()=>{
            return <div><Illustration getPictures={props.getPictures}/></div>
          }}/>
          <Route path="/illustration" render ={()=>{
            return <div><Illustration getPictures={props.getPictures}/></div>
          }}/>
          <Route path="/ceramics" render ={()=>{
            return <div><Ceramics getCeramics={props.getCeramics}/></div>
          }}/>
          <Route path="/travel_sketchbook"  render ={()=>{
            return <div><Travel_sketchbook getTravel={props.getTravel}/></div>
          }}/>
          <Route path="/editorial_for_wonderzine"  render ={()=>{
            return <div><Editorial_for_Wonderzine getWonder={props.getWonder}/></div>
          }}/>
          <Route path="/postcards_vietnam" render={()=>{
            return <div><Postcards_Vietnam getVietnam={props.getVietnam}/></div>
          }}/>
          <Route path="/editorial_for_postnauka" render={()=>{
            return <div><Editorial_for_PostNauka getNauka={props.getNauka}/></div>
          }}/>
          <Route path="/maze" render={()=>{
            return <div><Maze getMaze={props.getMaze}/></div>
          }}/>
          <Route path="/home" render={()=>{
            return <div><Home getHome={props.getHome}/></div>
          }}/>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
