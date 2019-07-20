import React, { Component } from "react";
import RecorderJS from "recorder-js";

import { getAudioStream, exportBuffer } from "../../../util/audio";
import { Card, Button, Row, Col, Icon } from "antd";

class Recorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stream: null,
      recording: false,
      recorder: null,
      persisted: false
    };
    this.startRecord = this.startRecord.bind(this);
    this.stopRecord = this.stopRecord.bind(this);
  }

  async componentDidMount() {
    let stream;

    try {
      stream = await getAudioStream();
    } catch (error) {
      // Users browser doesn't support audio.
      // Add your handler here.
      console.log(error);
    }

    this.setState({ stream });
  }

  startRecord() {
    const { stream } = this.state;

    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const recorder = new RecorderJS(audioContext);
    recorder.init(stream);

    this.setState(
      {
        recorder,
        recording: true
      },
      () => {
        recorder.start();
      }
    );
  }

  async stopRecord() {
    const { recorder } = this.state;

    const { buffer } = await recorder.stop();
    const audio = exportBuffer(buffer[0]);

    // Process the audio here.
    //console.log(audio);
    const reader = new window.FileReader();
    reader.readAsDataURL(audio);
    const fileName = this.props.title + "_File";
    reader.onloadend = function() {
      const base64data = reader.result;
      localStorage.setItem(fileName, base64data);
    };
    localStorage.setItem(this.props.title, URL.createObjectURL(audio));

    this.setState({
      recording: false,
      persisted: true
    });
  }

  render() {
    const { recording, stream } = this.state;

    // Don't show record button if their browser doesn't support it.
    if (!stream) {
      return null;
    }

    return (
      <Card title={this.props.title} bordered={false}>
        {!this.state.recording ? (
          <Button onClick={this.startRecord}>Record</Button>
        ) : (
          <Button onClick={this.stopRecord}>Stop Record</Button>
        )}
        {this.state.persisted ? (
          <Button
            onClick={() => {
              this.props.handlePlay(this.props.title);
            }}
          >
            Play
          </Button>
        ) : null}
      </Card>
    );
  }
}

export default Recorder;
