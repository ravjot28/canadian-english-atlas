import React, { Component } from "react";
import Recorder from "./Recorder";
import { Modal, Row, Col } from "antd";
import Sound from "react-sound";
import { words } from "../../../common/constants";

class WordsRecording extends Component {
  state = {
    playSound: false,
    data: null
  };
  handlePlay = word => {
    this.setState({ data: localStorage.getItem(word) });
  };
  handleSongFinishedPlaying = () => {
    console.log("Done playing");
  };

  componentDidMount() {
    Modal.info({
      title: "Ready to record?",
      content: (
        <div>
          <p>
            To record, click on the "Record" button and then say the word in a
            natural, casual manner. Press "Stop" when you are done. To re-record
            a word, simply do it again and the previous recording will be
            erased.
          </p>
        </div>
      ),
      onOk() {}
    });
  }

  render() {
    let index = 0;
    return (
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        {this.state.data != null ? (
          <Sound
            url={this.state.data}
            playStatus={Sound.status.PLAYING}
            playFromPosition={0}
            onFinishedPlaying={this.handleSongFinishedPlaying}
          />
        ) : null}
        <Row gutter={16}>
          <Col span={8}>
            <Recorder
              key={words[index]}
              title={words[index++]}
              handlePlay={this.handlePlay}
            />
          </Col>
          <Col span={8}>
            <Recorder
              key={words[index]}
              title={words[index++]}
              handlePlay={this.handlePlay}
            />
          </Col>
          <Col span={8}>
            <Recorder
              key={words[index]}
              title={words[index++]}
              handlePlay={this.handlePlay}
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Recorder
              key={words[index]}
              title={words[index++]}
              handlePlay={this.handlePlay}
            />
          </Col>
          <Col span={8}>
            <Recorder
              key={words[index]}
              title={words[index++]}
              handlePlay={this.handlePlay}
            />
          </Col>
          <Col span={8}>
            <Recorder
              key={words[index]}
              title={words[index++]}
              handlePlay={this.handlePlay}
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Recorder
              key={words[index]}
              title={words[index++]}
              handlePlay={this.handlePlay}
            />
          </Col>
          <Col span={8}>
            <Recorder
              key={words[index]}
              title={words[index++]}
              handlePlay={this.handlePlay}
            />
          </Col>
          <Col span={8}>
            <Recorder
              key={words[index]}
              title={words[index++]}
              handlePlay={this.handlePlay}
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Recorder
              key={words[index]}
              title={words[index++]}
              handlePlay={this.handlePlay}
            />
          </Col>
          <Col span={8}>
            <Recorder
              key={words[index]}
              title={words[index++]}
              handlePlay={this.handlePlay}
            />
          </Col>
          <Col span={8}>
            <Recorder
              key={words[index]}
              title={words[index++]}
              handlePlay={this.handlePlay}
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Recorder
              key={words[index]}
              title={words[index++]}
              handlePlay={this.handlePlay}
            />
          </Col>
          <Col span={8}>
            <Recorder
              key={words[index]}
              title={words[index++]}
              handlePlay={this.handlePlay}
            />
          </Col>
          <Col span={8}>
            <Recorder
              key={words[index]}
              title={words[index++]}
              handlePlay={this.handlePlay}
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Recorder
              key={words[index]}
              title={words[index++]}
              handlePlay={this.handlePlay}
            />
          </Col>
          <Col span={8}>
            <Recorder
              key={words[index]}
              title={words[index++]}
              handlePlay={this.handlePlay}
            />
          </Col>
          <Col span={8}>
            <Recorder
              key={words[index]}
              title={words[index++]}
              handlePlay={this.handlePlay}
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Recorder
              key={words[index]}
              title={words[index++]}
              handlePlay={this.handlePlay}
            />
          </Col>
          <Col span={8}>
            <Recorder
              key={words[index]}
              title={words[index++]}
              handlePlay={this.handlePlay}
            />
          </Col>
          <Col span={8}>
            <Recorder
              key={words[index]}
              title={words[index++]}
              handlePlay={this.handlePlay}
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Recorder
              key={words[index]}
              title={words[index++]}
              handlePlay={this.handlePlay}
            />
          </Col>
          <Col span={8}>
            <Recorder
              key={words[index]}
              title={words[index++]}
              handlePlay={this.handlePlay}
            />
          </Col>
          <Col span={8}>
            <Recorder
              key={words[index]}
              title={words[index++]}
              handlePlay={this.handlePlay}
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Recorder
              key={words[index]}
              title={words[index++]}
              handlePlay={this.handlePlay}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default WordsRecording;
