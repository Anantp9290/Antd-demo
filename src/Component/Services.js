import React from 'react';
import { Row, Col, Typography } from 'antd';

const { Text } = Typography;

function Service () {
    return ( 
        <>
        <div className='Services'>
            <div className='container'>
                    <Row>
                        <Col xxl={8} xl={8} lg={8} md={12} sm={12} xs={24}>
                            <div className='ServiceBox'>
                                <div className='Services-Img'>
                                    <img src='/Images/shippingImg.png' alt=''/>
                                </div>
                                <div className='ServiceDetail'>
                                    <Text className='ServiceTitle'>Free Shipping</Text>
                                    <Text className='ServiceSubTitle'>Capped at $39 per order</Text>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={12} sm={12} xs={24}>
                            <div className='ServiceBox'>
                                <div className='Services-Img'>
                                    <img src='/Images/paymentImg.png' alt=''/>
                                </div>
                                <div className='ServiceDetail'>
                                    <Text className='ServiceTitle'>Card Payments</Text>
                                    <Text className='ServiceSubTitle'>12 Months Installments</Text>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={12} sm={12} xs={24}>
                            <div className='ServiceBox'>
                                <div className='Services-Img'>
                                    <img src='/Images/returnImg.png' alt=''/>
                                </div>
                                <div className='ServiceDetail'>
                                    <Text className='ServiceTitle'>Easy Returns</Text>
                                    <Text className='ServiceSubTitle'>Shop Wwith Confidence</Text>
                                </div>
                            </div>
                        </Col>
                    </Row>
            </div>
        </div>
        </>
     );
}

export default Service ;