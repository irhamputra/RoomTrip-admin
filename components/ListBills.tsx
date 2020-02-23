import React from 'react';
import { ListGroup, ListGroupItem, Button, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheck, faCheck } from '@fortawesome/free-solid-svg-icons';
import uuid from 'uuid/v4';

const uid = uuid();

const DATA = [
    {
        id: uid,
        paymentLabel: 'Payment in Leipzg',
        hostRoom: `/room/${uid}`,
        amount: 10,
        isPaid: true
    },
    {
        id: uid,
        paymentLabel: 'Payment in Halle',
        hostRoom: `/room/${uid}`,
        amount: 10,
        isPaid: true
    },
    {
        id: uid,
        paymentLabel: 'Payment in Leipzig',
        hostRoom: `/room/${uid}`,
        amount: 10,
        isPaid: true
    },
    {
        id: uid,
        paymentLabel: 'Payment in Berlin',
        hostRoom: `/room/${uid}`,
        amount: 10,
        isPaid: true
    },
    {
        id: uid,
        paymentLabel: 'Payment in Hamburg',
        hostRoom: `/room/${uid}`,
        amount: 10,
        isPaid: true
    },
    {
        id: uid,
        paymentLabel: 'Payment in Dresden',
        hostRoom: `/room/${uid}`,
        amount: 10,
        isPaid: true
    }
];

const ListBills: React.FC = () => {
    return (
        <div>
            <div className='d-flex justify-content-between mb-2'>
                <h4>List all Payments</h4>
                <Button outline color='dark'>
                    <FontAwesomeIcon icon={faMoneyCheck} /> See all payments
                </Button>
            </div>
            <ListGroup>
                {DATA.map((v,i) => {
                    return (
                        <ListGroupItem
                            onClick={() => {
                                console.log(v.hostRoom);
                            }}
                            key={i}
                        >
                            <div className='d-flex align-items-center justify-content-between'>
                                {v.paymentLabel}{' '}
                                {v.isPaid && (
                                    <Badge pill>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </Badge>
                                )}
                            </div>
                            <div>amount: {v.amount}</div>
                        </ListGroupItem>
                    );
                })}
            </ListGroup>
        </div>
    );
};

export default ListBills;
