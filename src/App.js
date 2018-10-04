import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';

class App extends Component {
  render() {
    let particleOptions = {
      particles:{
        number : {
          value:100,
          density:{
            enable:"true",
            value_area:800
          }
        }
      },
      size: {
        value: 80,
        random: true,
        anim: {
          enable: true,
          speed: 80,
          size_min: 0.1,
          sync: false,
        }
      },
      shape : {
        type: "circle",

      },
      opacity: {
          value: 0.5,
          random: false,
          anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      // line_linked: {
      //   enable: true,
      //   distance: 300,
      //   color: "#ffffff",
      //   opacity: 0.4,
      //   width: 2
      // },
      //   move: {
      //   enable: true,
      //   speed: 12,
      //   direction: "none",
      //   random: false,
      //   straight: false,
      //   out_mode: "out",
      //   bounce: false,
      //   attract: {
      //   enable: false,
      //   rotateX: 600,
      //   rotateY: 1200
        
        
      //      }
      //  }, 
        // "polygon": {
        //   "nb_sides": 5,
        // },
        // bubble: {
        //   distance: 800,
        //   size: 80,
        //   duration: 2,
        //   opacity: 0.8,
        //   speed: 3
        // },
        // repulse: {
        //   distance: 400,
        //   duration: 0.4
        // },

    
  }
    return (
      <div className = "particlebg ">
        <Particles className = "particleclass" params = {particleOptions} />
        <div>
          <h1 style = {{color :"white", textAlign:" center", fontSize:"35 px", padding: "50px"}}> Particle js is running </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nostrum eum ex enim fuga at optio error tempora dolorum id dolores ipsa, dicta veritatis, corporis labore blanditiis excepturi ab architecto!</p>
        </div>
      </div>
    );
  }
}

export default App;
