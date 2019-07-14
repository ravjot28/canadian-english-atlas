import React, { Component } from "react";
import Recorder from "./Recorder";
import { Modal } from "antd";
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

    const recordingCards = words.map(word => {
      return <Recorder key={word} title={word} />;
    });

    return (
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        {recordingCards}
        {/*<Row gutter={16}>
          <Col span={8}>
            <Card title="bag" bordered={false}>
              <ButtonGroup>
                <Button>Record</Button>
                <Button>Stop</Button>
                <Button>Play</Button>
              </ButtonGroup>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="cot" bordered={false}>
              <Button>Record</Button>
              <Button>Stop</Button>
              <Button>Play</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="gang" bordered={false}>
              <Button>Record</Button>
              <Button>Stop</Button>
              <Button>Play</Button>
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="past" bordered={false}>
              <ButtonGroup>
                <Button>Record</Button>
                <Button>Stop</Button>
                <Button>Play</Button>
              </ButtonGroup>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="spa" bordered={false}>
              <Button>Record</Button>
              <Button>Stop</Button>
              <Button>Play</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="band" bordered={false}>
              <Button>Record</Button>
              <Button>Stop</Button>
              <Button>Play</Button>
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="deck" bordered={false}>
              <ButtonGroup>
                <Button>Record</Button>
                <Button>Stop</Button>
                <Button>Play</Button>
              </ButtonGroup>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="house" bordered={false}>
              <Button>Record</Button>
              <Button>Stop</Button>
              <Button>Play</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="pasta" bordered={false}>
              <Button>Record</Button>
              <Button>Stop</Button>
              <Button>Play</Button>
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="test" bordered={false}>
              <ButtonGroup>
                <Button>Record</Button>
                <Button>Stop</Button>
                <Button>Play</Button>
              </ButtonGroup>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="boat" bordered={false}>
              <Button>Record</Button>
              <Button>Stop</Button>
              <Button>Play</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="duck" bordered={false}>
              <Button>Record</Button>
              <Button>Stop</Button>
              <Button>Play</Button>
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="how" bordered={false}>
              <ButtonGroup>
                <Button>Record</Button>
                <Button>Stop</Button>
                <Button>Play</Button>
              </ButtonGroup>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="pool" bordered={false}>
              <Button>Record</Button>
              <Button>Stop</Button>
              <Button>Play</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="tie" bordered={false}>
              <Button>Record</Button>
              <Button>Stop</Button>
              <Button>Play</Button>
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="boot" bordered={false}>
              <ButtonGroup>
                <Button>Record</Button>
                <Button>Stop</Button>
                <Button>Play</Button>
              </ButtonGroup>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="face" bordered={false}>
              <Button>Record</Button>
              <Button>Stop</Button>
              <Button>Play</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="kiss" bordered={false}>
              <Button>Record</Button>
              <Button>Stop</Button>
              <Button>Play</Button>
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="seat" bordered={false}>
              <ButtonGroup>
                <Button>Record</Button>
                <Button>Stop</Button>
                <Button>Play</Button>
              </ButtonGroup>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="tight" bordered={false}>
              <Button>Record</Button>
              <Button>Stop</Button>
              <Button>Play</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="caught" bordered={false}>
              <Button>Record</Button>
              <Button>Stop</Button>
              <Button>Play</Button>
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="far" bordered={false}>
              <ButtonGroup>
                <Button>Record</Button>
                <Button>Stop</Button>
                <Button>Play</Button>
              </ButtonGroup>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="pack" bordered={false}>
              <Button>Record</Button>
              <Button>Stop</Button>
              <Button>Play</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="sharp" bordered={false}>
              <Button>Record</Button>
              <Button>Stop</Button>
              <Button>Play</Button>
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="too" bordered={false}>
              <ButtonGroup>
                <Button>Record</Button>
                <Button>Stop</Button>
                <Button>Play</Button>
              </ButtonGroup>
            </Card>
          </Col>
    </Row>*/}
      </div>
    );
  }
}

export default WordsRecording;
