import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { Store } from 'redux';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardGroup,
    Button
} from 'reactstrap';
import Form from '../components/Form';
import Buttons from '../components/Buttons';
import { parseCookies } from '../lib/parseCookies';
import { signInWithGoogle } from '../redux/actions/user';

interface Context extends NextPageContext {
    store: Store;
}

const Index: NextPage<{ userCookies: string }> = ({ userCookies }) => {
    const [loading, setLoading] = useState(false);
    const [cookies, _] = useState(() =>
        userCookies ? JSON.parse(userCookies) : null
    );
    const router = useRouter();

    const dispatch = useDispatch();
    const dispatchSignInWithGoogle = async () =>
        await dispatch(signInWithGoogle());

    useEffect(() => {
        setLoading(true);
        if (cookies) {
            router.push('/dashboard').finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, [cookies]);

    return (
        <div className='app flex-row align-items-center'>
            <Container>
                <Row className='justify-content-center'>
                    <Col md='8'>
                        <CardGroup className='mb-4'>
                            <Card className='p-4'>
                                <CardBody>
                                    {loading ? (
                                        <h2>Loading...</h2>
                                    ) : (
                                        <div>
                                            <h2 className='text-center mb-4'>
                                                Login
                                            </h2>
                                            <Form />
                                            <hr className='mt-4 mb-2' />
                                            <div className='text-center mb-1'>
                                                <small>
                                                    You can use the Google
                                                    service to sign in
                                                </small>
                                            </div>
                                            <Button
                                                color='danger'
                                                className='btn btn-block text-white'
                                                onClick={() => {
                                                    setLoading(true);
                                                    dispatchSignInWithGoogle().then(
                                                        () => {
                                                            router
                                                                .push(
                                                                    '/dashboard'
                                                                )
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
                                    )}
                                </CardBody>
                            </Card>
                            <Card
                                className='text-white bg-primary py-5 d-md-down-none'
                                style={{ width: 44 + '%' }}
                            >
                                <CardBody className='text-center'>
                                    <div>
                                        <h2>Sign up</h2>
                                        <p className='mt-3'>
                                            don't have account?
                                        </p>
                                        <Buttons />
                                    </div>
                                </CardBody>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

Index.getInitialProps = async (ctx: Context) => {
    const cookies = parseCookies(ctx.req);
    return {
        userCookies: cookies.userCookies
    };
};

export default connect(state => state)(Index);
