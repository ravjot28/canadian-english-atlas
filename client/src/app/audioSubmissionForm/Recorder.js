import React, { Component } from "react";
import { ReactMic } from "react-mic";

import { Card, Button } from "antd";
const ButtonGroup = Button.Group;

class Recorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blobObject: null,
      isRecording: false,
      isPaused: false,
      blobURL: null
    };
  }
  startRecording = () => {
    this.setState({
      record: true
    });
  };

  stopRecording = () => {
    this.setState({
      record: false
    });
  };

  onData(recordedBlob) {
    console.log("chunk of real-time data is: ", recordedBlob);
  }

  onStop = recordedBlob => {
    console.log("recordedBlob is: ", recordedBlob);
    this.setState({ blobURL: recordedBlob.blobURL });
  };

  startPlaying = () => {
    console.log(this.state);
    let audio = new Audio(this.state.blobURL);
    audio.play();
  };
  render() {
    return (
      <Card title={this.props.title} bordered={false}>
        <div>
          <ReactMic
            record={this.state.record}
            onStop={this.onStop}
            onData={this.onData}
          />
          <Button onClick={this.startRecording}>Start</Button>
          <Button onClick={this.stopRecording}>Stop</Button>
          <Button onClick={this.startPlaying}>Play</Button>
        </div>
      </Card>
    );
  }
}
export default Recorder;
