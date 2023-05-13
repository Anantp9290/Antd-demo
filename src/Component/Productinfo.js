import React from 'react';
import { Row, Col, Typography, Button} from 'antd';

const { Text, Title } = Typography;

function Productinfo () {
    return ( 
        <>
            <div className='ProductInfoSection'>
                <div className='container-fluid'>
                    <Row>
                        <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                            <div className='Block1'>
                                <img src='/Images/Service1.png' className='ProductImg' alt=''/>
                            </div>
                        </Col>
                        <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                            <div className='ProductBox'>
                                <img src='/Images/diamondIcon.png' alt=''/>
                                <Title level={5} className='ImageTitle'>THE FINEST DIAMOND</Title>
                                <Text className='ImageSubTitle'>Donec sapien eros, porttitor vehicula dapibus sollicitudin at orci Proin ne eros, porttitor vehicula dapibus sollicitudin at orci Proin.</Text>
                                <div className='Img-Btn'>
                                    <Button type="primary"  shape="round" className=''>Read more</Button>
                                </div>
                            </div>
                        </Col>
                        <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                            <div className='Block1'>
                                <img src='/Images/Service2.png' className='ProductImg' alt=''/>
                            </div>
                        </Col>
                        <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                            <div className='ProductBox'>
                                <img src='/Images/diamondIcon.png' alt=''/>
                                <Title level={5} className='ImageTitle'>ALL TYPES OF JEWELS</Title>
                                <Text className='ImageSubTitle'>Donec sapien eros, porttitor vehicula dapibus sollicitudin at orci Proin ne eros, porttitor vehicula dapibus sollicitudin at orci Proin.</Text>
                                <div className='Img-Btn'>
                                    <Button type="primary"  shape="round" className=''>Read more</Button>
                                </div>
                            </div>
                        </Col>
                        <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                            <div className='Block1'>
                                <img src='/Images/Service3.png' className='ProductImg' alt=''/>
                            </div>
                        </Col>
                        <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                            <div className='ProductBox'>
                                <img src='/Images/diamondIcon.png' alt=''/>
                                <Title level={5} className='ImageTitle'>THE BEST PLATINUM</Title>
                                <Text className='ImageSubTitle'>Donec sapien eros, porttitor vehicula dapibus sollicitudin at orci Proin ne eros, porttitor vehicula dapibus sollicitudin at orci Proin.</Text>
                                <div className='Img-Btn'>
                                    <Button type="primary"  shape="round" className=''>Read more</Button>
                                </div>
                            </div>
                        </Col>
                        <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                            <div className='Block1'>
                                <img src='/Images/Service4.png' className='ProductImg' alt=''/>
                            </div>
                        </Col>
                        <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                            <div className='ProductBox'>
                                <img src='/Images/diamondIcon.png' alt=''/>
                                <Title level={5} className='ImageTitle'>THE FINEST DIAMOND</Title>
                                <Text className='ImageSubTitle'>Donec sapien eros, porttitor vehicula dapibus sollicitudin at orci Proin ne eros, porttitor vehicula dapibus sollicitudin at orci Proin.</Text>
                                <div className='Img-Btn'>
                                    <Button type="primary"  shape="round" className=''>Read more</Button>
                                </div>
                            </div>
                        </Col>
                        <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                            <div className='Block1'>
                                <img src='/Images/Service5.png' className='ProductImg' alt=''/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
     );
}

export default Productinfo ;