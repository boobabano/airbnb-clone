import React from "react";
import './flat.css';

        /*const flat = {

            name:"Great flat",
            price: 100,
            
            }

        <Flat flat = {flat} />
        */

class Flat extends React.Component{

    
    render(){

        
        const title = this.props.flat.price 
        + this.props.flat.priceCurrency  +
        " - " + this.props.flat.name;

        

        const style = {
            //template literals ES6
            backgroundImage : `url('${this.props.flat.imageUrl}')`

        };
        return(
            
            <div className = "flat">
                <div className ="flat-picture" style = {style}></div>
                <div className = "flat-title">{title}</div>

            </div>
        ); 
    }

    
}

export default Flat;
