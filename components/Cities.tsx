import React from 'react';
import { Row, Col } from 'reactstrap';
import Box from './Box';

const Cities: React.FC = () => {
    return (
        <div className='my-4'>
            <h2>Cities</h2>
            <Row>
                <Col>
                    <Box
                        city='Leipzig'
                        imageUrl='https://upload.wikimedia.org/wikipedia/commons/1/1a/Old_city_hall_of_Leipzig_%2820%29.jpg'
                    />
                </Col>
                <Col>
                    <Box
                        city='Halle'
                        imageUrl='https://www.halle-messe.de/fileadmin/_processed_/a/5/csm_Marktplatz-Halle-Saale_6e44fd7834.jpg'
                    />
                </Col>
                <Col>
                    <Box
                        city='Berlin'
                        imageUrl='https://upload.wikimedia.org/wikipedia/commons/6/6c/Aerial_view_of_Berlin_%2832881394137%29.jpg'
                    />
                </Col>
                <Col>
                    <Box
                        city='Dresden'
                        imageUrl='https://tmgs-db.sachsen-tourismus.de/tmgs/api/image?id=5133_Frauenkirche_Dresden.jpeg'
                    />
                </Col>
                <Col>
                    <Box
                        city='Hamburg'
                        imageUrl='https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_863,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/ymqf03yki4wzqh5evf9n/HamburgCard.webp'
                    />
                </Col>
            </Row>
        </div>
    );
};

export default Cities;
