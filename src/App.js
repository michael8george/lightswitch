import React, { useState } from "react";
import CeilingLight from "./components/CeilingLight";
import LightOn from "./components/LightOn";
import LightOff from "./components/LightOff";
import './App.css';

// you can create this using many different beginnings
// this was starting using create-react-app
// for advanced designs I usually use material-ui layouts
// however in this case a simple example is all that is required.
export default function App() {
  const [light, setLight] = useState(true);

  // when the light switch is clicked we want to toggle it 
  // to the opposite of what we started with at state
  const toggleLight=() => {
    setLight(!light);
  }
  return (
    <div className="container">
      <div className={ light ? 'myoverlay myoverlayOn' : 'myoverlay myoverlayOff' }></div>
      <CeilingLight/>
      <main>   
        <section className="mycontainer">
          <div className="myroom">
            <figure className="n">
              <div onClick={toggleLight}>  
                { light ? <LightOn /> : <LightOff /> } 
              </div>
            </figure>
            <figure className="e"></figure>
            <figure className="s"></figure>
            <figure className="w"></figure>
            <figure className="t"></figure>
            <figure className="b"></figure>
          </div>
        </section>
      </main>

    </div>
  )
}
