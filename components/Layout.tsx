import React from 'react';
import Meta from './Meta';
import { Container, Row, Col } from 'reactstrap';
import SideMenu from './SideMenu';
import { useRouter } from 'next/router';
import Avatar from './Avatar';
import Copyright from './Copyright';
import SearchBar from './SearchBar';

const Layout = props => {
    const router = useRouter();
    return (
        <div>
            <Meta />
            <Container fluid={true}>
                <Row>
                    {router.pathname !== '/' && (
                        <>
                            <Col className='bg-dark' xs={2}>
                                <SideMenu />
                            </Col>
                        </>
                    )}
                    <Col
                        className='pt-3'
                        style={{ backgroundColor: '#f7f7f7' }}
                    >
                        {router.pathname !== '/' && (
                            <Col>
                                <Row className='align-items-center'>
                                    <Col>
                                        <SearchBar />
                                    </Col>
                                    <Col>
                                        <Avatar />
                                    </Col>
                                </Row>
                            </Col>
                        )}
                        {props.children}
                        <Copyright />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Layout;
