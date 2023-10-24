import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import NewRegistration from "./../components/registration/NewRegistration";
import PlayerPool from "./../components/registration/PlayerPool";
import ReservePool from "./../components/registration/ReservePool";

const Registration = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="Player Registration" subtitle="Monday, October 23, 2023" className="text-sm-left mb-3" />
    </Row>



    <Row>

      {/* Add New */}
      <Col lg="3" md="6" sm="12" className="mb-4">
        <NewRegistration />
      </Col>

      {/* Top 30 Players */}
      <Col lg="4" md="12" sm="12" className="mb-4">
        <PlayerPool />
      </Col>

      {/* Reserve Players */}
      <Col lg="4" md="12" sm="12" className="mb-4">
        <ReservePool />
      </Col>
    </Row>
  </Container>
);

export default Registration;
