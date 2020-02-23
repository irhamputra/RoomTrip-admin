import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardGroup,
    Button
} from 'reactstrap';
import { signInWithGoogle } from '../redux/actions/user';
import { useCookie } from 'react-use';

const Index: NextPage = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [value] = useCookie('userCookies');

    const dispatch = useDispatch();
    const dispatchSignInWithGoogle = async () =>
        await dispatch(signInWithGoogle());

    useEffect(() => {
        if (value) {
            setLoading(true);
            router.push('/dashboard').finally(() => setLoading(false));
        }
    }, []);

    if (loading) return <h1>Loading....</h1>;

    return (
        <div className='app flex-row align-items-center'>
            <Container>
                <Row className='justify-content-center'>
                    <Col>
                        <CardGroup className='mb-4'>
                            <Card className='p-4'>
                                <CardBody>
                                    <div>
                                        <h2 className='text-center mb-4'>
                                            Welcome to RoomTrip Dashboard
                                        </h2>

                                        <Button
                                            color='danger'
                                            className='btn btn-block text-white'
                                            onClick={() => {
                                                setLoading(true);
                                                dispatchSignInWithGoogle().then(
                                                    () => {
                                                        router
                                                            .push('/dashboard')
                                                            .then(() =>
                                                                setLoading(
                                                                    false
                                                                )
                                                            );
                                                    }
                                                );
                                            }}
                                        >
                                            Sign in with Google
                                        </Button>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card
                                className='text-white bg-primary py-5 d-md-down-none'
                                style={{ width: 44 + '%' }}
                            >
                                <CardBody className='text-center'>
                                    RoomTrip Dashboard Image
                                </CardBody>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Index
