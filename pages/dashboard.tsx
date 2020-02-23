import React from 'react';
import { NextPage } from 'next';
import { Container, Row, Col } from 'reactstrap';
import Cities from '../components/Cities';
import SearchBar from '../components/SearchBar';
import ListBills from '../components/ListBills';
import UserLists from '../components/UserLists';

const Dashboard: NextPage = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col>
                    <Cities />
                    <Row>
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
