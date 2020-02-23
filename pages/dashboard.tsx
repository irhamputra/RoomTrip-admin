import React from 'react';
import { NextPage } from 'next';
import { Container, Row, Col } from 'reactstrap';

const Dashboard: NextPage = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col>
                    <div className='d-flex justify-content-between my-2'>
                        <h2>Dashboard</h2>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
