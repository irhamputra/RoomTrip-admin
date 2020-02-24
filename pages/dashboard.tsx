import React from 'react';
import { NextPage } from 'next';
import { Container, Row, Col } from 'reactstrap';
import Cities from '../components/Cities';
import ListBills from '../components/ListBills';
import UserLists from '../components/UserLists';

const Dashboard: NextPage = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col>
                    <Cities />
                    <Row className="my-5">
                        <Col>
                            <ListBills />
                        </Col>
                        <Col>
                            <UserLists />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
