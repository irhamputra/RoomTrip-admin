import React from 'react';
import { connect } from 'react-redux';
import { NextPage, NextPageContext } from 'next';
import { Store } from 'redux';
import { Container, Row, Col, Card, CardBody, CardGroup, Button } from 'reactstrap';

import Form from '../components/Form';
import Buttons from '../components/Buttons';

interface Context extends NextPageContext {
    store: Store;
}

const Register: NextPage = () => {
    return (
        <div className="app flex-row align-items-center">
            <Container>
                <Row className="justify-content-center text-center ">
                    <Col md="4">
                        <Card className="p-4">
                            <CardBody>
                                <h2 className="mb-4">Register</h2>
                                <Form register />
                                <hr className="mt-3 mb-0" />
                                <small className="d-block mt-2 mb-1">already have account?</small>
                                <Buttons/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

Register.getInitialProps = async (ctx: Context) => {
    return {};
};

export default connect(state => state)(Register);
