import { produce } from "immer";
import React, { useState } from "react";
import {
  Form,
  Container,
  Col,
  Row,
  Button,
  Card,
  Alert,
} from "react-bootstrap";
import "./Css/DeliveryForm.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createDelivery } from "./Helper/apiHelper";

const DeliveryForm = () => {
  const [values, setValues] = useState([
    {
      id: "",
      orderType: "",
      destinationIWName: "",
      destinationType: "",
      recipientName: "",
      recipientContact: "",
      partsRequirements: [
        { partNumber: "", brandName: "", partDescription: "", quantity: "" },
      ],
      destinationAddress: "",
      casePriority: "",
      orderValue: "",
      advanceStatus: "",
      comment: "",
      error: "",
      success: false,
    },
  ]);

  //on submit
  const onSubmit = (event) => {
    event.preventDefault();
    createDelivery({ values }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
        console.log(values);
      } else {
        console.log(values);
        setValues([
          {
            ...values,
            id: "",
            orderType: "",
            destinationIWName: "",
            destinationType: "",
            recipientName: "",
            recipientContact: "",
            partsRequirements: [
              {
                partNumber: "",
                brandName: "",
                partDescription: "",
                quantity: "",
              },
            ],
            destinationAddress: "",
            casePriority: "",
            orderValue: "",
            advanceStatus: "",
            comment: "",
            error: "",
            success: true,
          },
        ]);
      }
    });
  };

  const deliveryForm = () => {
    return (
      <div>
        {values?.map((valu, index) => {
          return (
            <div key={index}>
              <Container className="formContainer">
                <Form>
                  <Card>
                    <Card.Header>Door Step Delivery Request Form</Card.Header>
                    <Card.Body>
                      <Form.Group as={Row}>
                        <Form.Label column sm="3">
                          Demand ID
                        </Form.Label>
                        <Col sm="3">
                          <Form.Control
                            onChange={(e) => {
                              const id = e.target.value;
                              setValues((currentValue) =>
                                produce(currentValue, (v) => {
                                  v[index].id = id;
                                })
                              );
                            }}
                            value={valu.id}
                          />
                        </Col>
                        <Form.Label column sm="3">
                          Order Type
                        </Form.Label>
                        <Col sm="3">
                          <Form.Control
                            as="select"
                            onChange={(e) => {
                              const orderType = e.target.value;
                              setValues((currentValue) =>
                                produce(currentValue, (v) => {
                                  v[index].orderType = orderType;
                                })
                              );
                            }}
                            value={valu.orderType}
                          >
                            <option>Cx Demand</option>
                            <option>Missing item in RO</option>
                            <option>Range Building</option>
                            <option>Periodical Replenshiment</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row}>
                        <Form.Label column sm="3">
                          Destination Account Name
                        </Form.Label>
                        <Col sm="3">
                          <Form.Control
                            onChange={(e) => {
                              const destinationIWName = e.target.value;
                              setValues((currentValue) =>
                                produce(currentValue, (v) => {
                                  v[index].destinationIWName =
                                    destinationIWName;
                                })
                              );
                            }}
                            value={valu.destinationIWName}
                          />
                        </Col>
                        <Form.Label column sm="3">
                          Destination Type
                        </Form.Label>
                        <Col sm="3">
                          <Form.Control
                            as="select"
                            onChange={(e) => {
                              const destinationType = e.target.value;
                              setValues((currentValue) =>
                                produce(currentValue, (v) => {
                                  v[index].destinationType = destinationType;
                                })
                              );
                            }}
                            value={valu.destinationType}
                          >
                            <option>IW</option>
                            <option>RO</option>
                            <option>VO</option>
                            <option>WH</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row}>
                        <Form.Label column sm="3">
                          Recipient Name
                        </Form.Label>
                        <Col sm="3">
                          <Form.Control
                            onChange={(e) => {
                              const recipientName = e.target.value;
                              setValues((currentValue) =>
                                produce(currentValue, (v) => {
                                  v[index].recipientName = recipientName;
                                })
                              );
                            }}
                            value={valu.recipientName}
                          />
                        </Col>
                        <Form.Label column sm="3">
                          Recipient Contact
                        </Form.Label>
                        <Col sm="3">
                          <Form.Control
                            onChange={(e) => {
                              const recipientContact = e.target.value;
                              setValues((currentValue) =>
                                produce(currentValue, (v) => {
                                  v[index].recipientContact = recipientContact;
                                })
                              );
                            }}
                            value={valu.recipientContact}
                          />
                        </Col>
                      </Form.Group>
                    </Card.Body>
                  </Card>
                  {/* Card2 */}
                  <Card className="card2">
                    <Card.Header className="cardHeading">
                      PART BUNDLE INFORMATION
                    </Card.Header>
                    <Card.Body className="cardBody">
                      <Form.Group as={Row}>
                        <Form.Label column sm="3">
                          Part Numbers
                        </Form.Label>
                        <Col sm="3">
                          <Form.Control
                            onChange={(e) => {
                              const partNumber = e.target.value;
                              setValues((currentValue) =>
                                produce(currentValue, (v) => {
                                  v[index].partsRequirements[0].partNumber =
                                    partNumber;
                                })
                              );
                            }}
                            value={valu.partsRequirements[0].partNumber}
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row}>
                        <Form.Label column sm="3">
                          Brand
                        </Form.Label>
                        <Col sm="3">
                          <Form.Control
                            onChange={(e) => {
                              const brandName = e.target.value;
                              setValues((currentValue) =>
                                produce(currentValue, (v) => {
                                  v[index].partsRequirements[0].brandName =
                                    brandName;
                                })
                              );
                            }}
                            value={valu.partsRequirements[0].brandName}
                          />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row}>
                        <Form.Label column sm="3">
                          Part Description
                        </Form.Label>
                        <Col sm="3">
                          <Form.Control
                            onChange={(e) => {
                              const partDescription = e.target.value;
                              setValues((currentValue) =>
                                produce(currentValue, (v) => {
                                  v[
                                    index
                                  ].partsRequirements[0].partDescription = partDescription;
                                })
                              );
                            }}
                            value={valu.partsRequirements[0].partDescription}
                          />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row}>
                        <Form.Label column sm="3">
                          Quantity
                        </Form.Label>
                        <Col sm="3">
                          <Form.Control
                            onChange={(e) => {
                              const quantity = e.target.value;
                              setValues((currentValue) =>
                                produce(currentValue, (v) => {
                                  v[index].partsRequirements[0].quantity =
                                    quantity;
                                })
                              );
                            }}
                            value={valu.partsRequirements[0].quantity}
                          />
                        </Col>
                      </Form.Group>
                    </Card.Body>
                    <Card.Footer>
                      <Col sm="6">
                        <Button variant="secondary" className="partButton">
                          <i className="bi bi-plus"></i>ADD PART BUNDLE
                        </Button>
                      </Col>
                    </Card.Footer>
                  </Card>
                  {/* Card3 */}
                  <Card className="card3">
                    <Card.Body>
                      <Form.Group as={Row}>
                        <Form.Label column sm="3">
                          Destination Address
                        </Form.Label>
                        <Col sm="3">
                          <Form.Control
                            onChange={(e) => {
                              const destinationAddress = e.target.value;
                              setValues((currentValue) =>
                                produce(currentValue, (v) => {
                                  v[index].destinationAddress =
                                    destinationAddress;
                                })
                              );
                            }}
                            value={valu.destinationAddress}
                          />
                        </Col>
                        <Form.Label column sm="3">
                          Case Priority
                        </Form.Label>
                        <Col sm="3">
                          <Form.Control
                            as="select"
                            onChange={(e) => {
                              const casePriority = e.target.value;
                              setValues((currentValue) =>
                                produce(currentValue, (v) => {
                                  v[index].casePriority = casePriority;
                                })
                              );
                            }}
                            value={valu.casePriority}
                          >
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row}>
                        <Form.Label column sm="3">
                          Order Value (Rs.)
                        </Form.Label>
                        <Col sm="3">
                          <Form.Control
                            onChange={(e) => {
                              const orderValue = e.target.value;
                              setValues((currentValue) =>
                                produce(currentValue, (v) => {
                                  v[index].orderValue = orderValue;
                                })
                              );
                            }}
                            value={valu.orderValue}
                          />
                        </Col>
                        <Form.Label column sm="3">
                          Advance Status
                        </Form.Label>
                        <Col sm="3">
                          <Button
                            variant="outline-secondary"
                            className="btn1"
                            onClick={(e) => {
                              const orderType = "Yes";
                              setValues((currentValue) =>
                                produce(currentValue, (v) => {
                                  v[index].orderType = orderType;
                                })
                              );
                            }}
                          >
                            Yes
                          </Button>

                          <Button
                            variant="outline-secondary"
                            className="btn2"
                            onClick={(e) => {
                              const orderType = "No";
                              setValues((currentValue) =>
                                produce(currentValue, (v) => {
                                  v[index].orderType = orderType;
                                })
                              );
                            }}
                          >
                            No
                          </Button>
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row}>
                        <Form.Label column sm="3">
                          Add Comment
                        </Form.Label>
                        <Col sm="9">
                          <Form.Control
                            as="textarea"
                            rows={3}
                            onChange={(e) => {
                              const comment = e.target.value;
                              setValues((currentValue) =>
                                produce(currentValue, (v) => {
                                  v[index].comment = comment;
                                })
                              );
                            }}
                            value={valu.comment}
                          />
                        </Col>
                      </Form.Group>
                    </Card.Body>
                  </Card>
                  <Form.Group as={Row}>
                    <Col>
                      <Button
                        variant="secondary"
                        className="saveBtn"
                        type="submit"
                        onClick={onSubmit}
                      >
                        SAVE
                      </Button>
                    </Col>
                  </Form.Group>
                </Form>
                <Alert
                  variant="success"
                  style={{ display: valu.success ? "" : "none" }}
                >
                  DDR Created Successfully
                </Alert>
                <Alert
                  variant="danger"
                  style={{ display: valu.error ? "" : "none" }}
                >
                  Failed to save data
                </Alert>
              </Container>
            </div>
          );
        })}
      </div>
    );
  };

  return <div>{deliveryForm()}</div>;
};

export default DeliveryForm;
