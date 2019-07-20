import React, { Component } from "react";
import Recorder from "./Recorder";
import { Modal, Row, Col } from "antd";
import Sound from "react-sound";

const words = [
  "bag",
  "cot",
  "gang",
  "past",
  "spa",
  "band",
  "deck",
  "house",
  "pasta",
  "test",
  "boat",
  "duck",
  "how",
  "pool",
  "tie",
  "boot",
  "face",
  "kiss",
  "seat",
  "tight",
  "caught",
  "far",
  "pack",
  "sharp",
  "too"
];
class WordsRecording extends Component {
  state = {
    playSound: false,
    data: null
  };
  handlePlay = word => {
    console.log(word);
    console.log(localStorage.getItem(word));
    this.setState({ data: localStorage.getItem(word) });
  };
  handleSongFinishedPlaying = () => {
    console.log("Done playing");
  };

  render() {
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
