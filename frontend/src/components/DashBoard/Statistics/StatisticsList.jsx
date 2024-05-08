import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./listStyles.css";
import { Scrollbar } from "react-scrollbars-custom";
import StatCards from "./StatCards/StatCards";
import Bar from "./BarChart/Bar";
import DoughnutComponent from "./Doughnut/Doughnut";
import LineChart from "./LineChart/LineChart";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const StatisticsList = () => {
  const history = useHistory();
  return (
    <Scrollbar style={{ width: "100%", height: 500 }}>
      <Container>
        <Row className="list-container">
          <StatCards />
        </Row>
        <Row>
          <Bar />
        </Row>
        <Row style={{ marginBottom: "50px" }}>
          <Col md={6}>
            <LineChart history={history} />
          </Col>
          <Col md={6}>
            <DoughnutComponent />
          </Col>
        </Row>
      </Container>
    </Scrollbar>
  );
};

export default StatisticsList;
