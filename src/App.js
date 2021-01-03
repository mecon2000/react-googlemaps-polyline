import React, { Component } from "react";
import { Map, GoogleApiWrapper, Polyline } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};



export class MapContainer extends Component {
  render() {

    let json1 = require('./chicago to st louis.json');
    let json2 = require('./St Louise to Joplin.json');
    console.log(`FUCKING JSON1:  ${JSON.stringify(json1)}`);
    console.log(`FUCKING JSON2:  ${JSON.stringify(json2)}`);
    
    const triangleCoords = json1.concat(json2);

    return (
      <Map
        google={this.props.google}
        zoom={7}
        style={mapStyles}
        initialCenter={ json1[0] }
      >
        <Polyline
          path={triangleCoords}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapContainer);

