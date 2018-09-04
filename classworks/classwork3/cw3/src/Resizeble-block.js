import React, { Component } from 'react';

import './App.css';

const blockStyle = {
    height: '600px',
    width: '600px',
    backgroundColor: 'yellow',  
}
const resizeStyle = {
    height: '300px',
    width: '300px',
    backgroundColor: 'blue',
}
export class ResizeableBlock extends Component {
    constructor() {
        super();
        this.state ={
            style: blockStyle,
        }
    }
componentDidMount(){
    window.addEventListener('resize', (event) => {
        // console.log('height', window.innerHeight);
        // console.log('width', window.innerWidth);
        if (window.innerHeight <= 400){
            console.log('wewewe')
           this.setState({
               style : resizeStyle,          
           });
           return;
        }
        this.setState({
            style: blockStyle,
        })
    })
}
    render() {
      return (
        <div style={this.state.style}></div>
      );
      
    }
  }
  
