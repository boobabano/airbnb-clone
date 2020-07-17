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
      flats:[],
      selectedFlat: null
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
  selectFlat = (flat) => {
    console.log(flat);
    this.setState ({
      selectFlat:flat
    })
  }
  render() {
    let center = {
      lat: 48.8566,
      lng: 2.3522
    }

    if (this.state.selectedFlat){
      center = {
        lat: this.state.selectedFlat.lat,
        lng: this.state.selectedFlat.lng
      }
    }
    
    return (
      /*
      <div>
        <Flat flat={flat}/>
        <Flat flat={flat}/>
      </div>

      {this.state.flats.map((flat) =>{
              return <Flat flat={flat}/>
            })}
      */
     <div className ="app">
       <div className="main">
          <div className="search">
          </div>
          <div className="flats">
            {this.state.flats.map((flat) =>{
              return <Flat 
              key={flat.name} 
              flat={flat}
              selectFlat={this.selectFlat}/>
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
            return <Marker key={flat.name} lat={flat.lat} lng={flat.lng} text={flat.price}/>
          })}
        </GoogleMapReact>
        </div>
     </div>
    );
  }
}

export default App;
