import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Flat from './components/flat';
import Marker from './components/marker';
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
      lat: 48.8566,
      lng: 2.3522
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
              bootstrapURLKeys={{ key:'AIzaSyCltvL197zUxyAq1Qwe9Zm311mE5ceLC7I' }}
              center={center}
              zoom ={14}
        >
          {this.state.flats.map((flat)=> {
            return <Marker lat={flat.lat} lng={flat.lng} text={flat.price}/>
          })}
        </GoogleMapReact>
        </div>
     </div>
    );
  }
}

export default App;
