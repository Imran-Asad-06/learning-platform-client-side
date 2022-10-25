import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header';
import Leftnav from '../Pages/Shared/Leftnav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
            <Row>
                <Col lg='4'>
                    <Leftnav></Leftnav>
                </Col>
                <Col lg='8'>
                    <Outlet></Outlet>
                </Col>
            </Row>
        </Container>
        <Footer></Footer>

        </div>
    );
};

export default Main;