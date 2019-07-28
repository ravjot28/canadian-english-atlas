import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { SearchBox } from "react-google-maps/lib/components/places/SearchBox";
import pin from "../../assets/img/pin.png";
import _ from "lodash";
import AudioSubmissionForm from "../audioSubmissionForm/AudioSubmissionForm";
import SubmissionInfoWindow from "./SubmissionInfoWindow";
import { words } from "../../common/constants";
const refs = {};

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMarker: null,
      loading: false,
      visible: false
    };
    this.onMapClick = this.onMapClick.bind(this);
  }
  onBoundsChanged = () => {
    this.setState({
      bounds: refs.map.getBounds(),
      center: refs.map.getCenter()
    });
  };

  onSearchBoxMounted = ref => {
    refs.searchBox = ref;
  };
  onPlacesChanged = () => {
    const places = refs.searchBox.getPlaces();
    const bounds = new window.google.maps.LatLngBounds();

    places.forEach(place => {
      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    const nextMarkers = places.map(place => ({
      position: place.geometry.location
    }));
    const nextCenter = _.get(nextMarkers, "0.position", this.state.center);

    this.setState({
      center: nextCenter,
      markers: nextMarkers
    });
    // refs.map.fitBounds(bounds);
  };

  onMapClick() {
    if (this.props.addAudio) {
      for (let word of words) {
        localStorage.removeItem(word);
      }
      this.setState({
        visible: true
      });
    }
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleCancel = () => {
    for (let word of words) {
      localStorage.removeItem(word);
    }
    this.setState({ visible: false });
  };
  render() {
    let iconMarker = new window.google.maps.MarkerImage(
      pin,
      null /* size is determined at runtime */,
      null /* origin is 0,0 */,
      null /* anchor is bottom center of the scaled image */,
      new window.google.maps.Size(32, 32)
    );
    const { visible } = this.state;

    return (
      <GoogleMap
        onClick={this.onMapClick}
        onBoundsChanged={this.props.onBoundsChanged}
        options={{
          streetViewControl: false,
          fullscreenControl: false,
          mapTypeControl: false,
          scrollwheel: false
        }}
        defaultZoom={this.props.zoom}
        defaultCenter={{
          lat: this.props.center.lat,
          lng: this.props.center.lng
        }}
      >
        <AudioSubmissionForm
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          onClick={this.handleCancel}
          visible={visible}
          title="Add Audio"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          handleCancel={this.handleCancel}
        />
        <SearchBox
          ref={this.onSearchBoxMounted}
          bounds={this.state.bounds}
          controlPosition={window.google.maps.ControlPosition.TOP_LEFT}
          onPlacesChanged={this.onPlacesChanged}
        >
          <input
            type="text"
            placeholder="Enter Location"
            style={{
              marginLeft: "20px",
              zIndex: "0",
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `20%`,
              height: `40px`,
              marginTop: `27px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`
            }}
          />
        </SearchBox>
        {this.props.isMarkerShown &&
          this.props.markers &&
          this.props.markers.map(marker => (
            <Marker
              icon={iconMarker}
              key={marker.id}
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => {
                this.setState({ selectedMarker: marker });
              }}
            />
          ))}

        {this.state.selectedMarker && (
          <InfoWindow
            onCloseClick={() => {
              this.setState({ selectedMarker: null });
            }}
            position={{
              lat: this.state.selectedMarker.lat,
              lng: this.state.selectedMarker.lng
            }}
          >
            <SubmissionInfoWindow submissionId={this.state.selectedMarker.id} />
          </InfoWindow>
        )}
      </GoogleMap>
    );
  }
}

const MapWrapper = withScriptjs(withGoogleMap(Map));

export default MapWrapper;
