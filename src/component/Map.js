import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import makerimg from "./Hnet.com-image (1).png";

const AnyReactComponent = ({ text }) => (
  <div>
    <img src={text} alt="name"></img>
  </div>
);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 16.912861,
      lng: 97.370132,
    },
    zoom: 9,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="MapStyle" style={{ height: "100vh", width: "100vh" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyBvV-MgmkrAJmo9HAvUyf3NzY-mnt1QCoU",
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={{ mapId: "3915600c23865a96" }}
        >
          {/* <AnyReactComponent lat={16.91358} lng={97.369741} text={makerimg} /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
