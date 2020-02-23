import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';

interface Props {
    city: string;
    imageUrl: string;
}

const Box: React.FC<Props> = ({ city, imageUrl }) => {
    return (
        <Card>
            <CardImg top width='100%' src={imageUrl} alt='Card image cap' />
            <CardBody>
                <CardTitle tag='h4'>{city}</CardTitle>
            </CardBody>
        </Card>
    );
};

export default Box;
