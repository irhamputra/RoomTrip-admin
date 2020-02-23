import React from 'react';
import Meta from './Meta';
import { Container, Row, Col } from 'reactstrap';
import SideMenu from './SideMenu';
import { useRouter } from 'next/router';
import Avatar from './Avatar';

const Layout = props => {
    const router = useRouter();
    return (
        <div className="py-2">
            <Meta />
            <Container fluid={true}>
                <Row>
                    {router.pathname !== '/' && (
                        <>
                            <Col xs={2}>
                                <SideMenu />
                            </Col>
                        </>
                    )}
                    <Col>
                        {router.pathname !== '/' && <Avatar />}
                        {props.children}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Layout;
