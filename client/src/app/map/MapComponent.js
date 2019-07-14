import React from "react";
import MapWrapper from "./Map";
import { Modal } from "antd";
import WrappedFilter from "./WrappedFilter";

const confirm = Modal.confirm;

const MapComponent = props => {
  if (props.addAudio) {
    confirm({
      title: "Welcome",
      content:
        "To choose your location: If you lived in Canada as a child, select the location where you spent the majority of your time between ages five and eighteen. If you came to Canada as an adult, select the location where you have spent the majority of your time since arriving. Enter an address in the search box or zoom in to get as precise a location as possible.",
      onOk() {},
      onCancel() {
        props.onRedirectoHome();
      }
    });
  }
  return (
    <div>
      {!props.addAudio && <WrappedFilter />}

      <MapWrapper
        addAudio={props.addAudio}
        isMarkerShown={!props.addAudio}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_MAP_KEY
        }`}
        loadingElement={<div style={{ height: `95vh`, width: "100vw" }} />}
        containerElement={<div style={{ height: `95vh`, width: "100vw" }} />}
        mapElement={<div style={{ height: `100%` }} />}
        zoom={4}
        center={{ lat: 59.3207266, lng: -105.2373684 }}
        markers={[
          {
            id: 1,
            lat: 59.3207266,
            lng: -105.2373684
          },
          {
            id: 2,
            lat: 59.3207266 + 10,
            lng: -105.2373684
          },
          {
            id: 3,
            lat: 59.3207266 - 10,
            lng: -105.2373684
          }
        ]}
      />
    </div>
  );
};
export default MapComponent;
