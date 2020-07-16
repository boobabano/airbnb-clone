import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Flat from './components/flat'
import GoogleMapReact from 'google-map-react';
//import './components/hello';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      flats:[]
    };
  }

componentDidMount(){
  const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
  fetch(url)// AJAX
    .then(response => response.json())
    .then((data) =>{
      this.setState({
        flats : data
      });
  })
}
  
  render() {
    const center = {
      lat: 45.5017,
      lng: 73.5673
    }
    
    return (
      /*
      <div>
        <Flat flat={flat}/>
        <Flat flat={flat}/>
      </div>
      */
     <div className ="app">
       <div className="main">
          <div className="search">
          </div>
          <div className="flats">
            {this.state.flats.map((flat) =>{
              return <Flat flat={flat}/>
            })}
          </div>
       </div>
       <div className="map">
       <GoogleMapReact
              //bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
              center={center}
              zoom ={6}
        ></GoogleMapReact>
        </div>
     </div>
    );
  }
}

export default App;
