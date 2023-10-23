import React, { useEffect } from "react";
import axios from "axios";
import { useAtom } from "jotai";
import { registeredPlayersAtom } from '../../atoms';
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Row,
  Col
} from "shards-react";

function PlayerPool() {
  const [data, setData] = useAtom(registeredPlayersAtom);

  useEffect(() => {
      const fetchData = async () => {
      try {
        const response = await axios.get("https://casual-kiosk-api.au-s1.cloudhub.io/api/bookings/1/registrations/main");
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, [setData]);

  return (
      <Card small className="blog-comments">
        <CardHeader className="border-bottom">
          <h6 className="m-0">{data.title}</h6>
        </CardHeader>

        <CardBody className="p-0">
          {data.players && data.players.map((player, idx) => (
            <div key={idx} className="blog-comments__item d-flex p-3">
             {/* Sequence */}
              <div className="blog-comments__avatar mr-3">
                 <a className="text-primary">
                    {player.regNumber}
                  </a>{" "}
              </div>
              {/* Avatar */}
              <div className="blog-comments__avatar mr-3">
                <img src={player.photo} alt="1" />
              </div>

              {/* Content */}
              <div className="blog-comments__content">
                {/* Content :: Title */}
                <div className="blog-comments__meta text-mutes">
                  <a className="text-secondary" href="#">
                    {player.name}
                  </a>{" "}
                </div>

                {/* Content :: Actions */}
                <div className="blog-comments__actions">
                  <ButtonGroup size="sm">
                    <Button theme="white">
                      <span className="text-success">
                        <i className="material-icons">check</i>
                      </span>{" "}
                      Check-In
                    </Button>
                    <Button theme="white">
                      <span className="text-danger">
                        <i className="material-icons">clear</i>
                      </span>{" "}
                      Remove
                    </Button>
                    <Button theme="white">
                      <span className="text-edit">
                        <i className="material-icons">more_vert</i>
                      </span>{" "}
                      Edit
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            </div>
          ))}
        </CardBody>

        <CardFooter className="border-top">
          <Row>
            <Col className="text-center view-report">
              <Button theme="white" type="submit">
                More Players
              </Button>
            </Col>
          </Row>
        </CardFooter>
      </Card>
    );
}

export default PlayerPool;
