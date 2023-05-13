import React from 'react';
import { Row, Col, Typography, Button} from 'antd';

const { Text, Title } = Typography;


function Banner () {
    return ( 
        <>
            <div className='Bannersection'>
                <div className='container'>
                    <Row>
                        <Col xl={12} lg={12} md={24} sm={24}>
                            <div className='BannerContent'>
                                <Title className='SubTitle' level={5} >Exclusive offer -10% off </Title>
                                <Title className='Title' level={3} >Variety Royal Edition Just For A Queens</Title>
                                <Text className='Content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt tggfgf the of jwellery.</Text>
                                <div className='Banner-Btn'>
                                    <Button type="primary"  shape="round" className=''>Read more</Button>
                                </div>
                            </div>
                        </Col>
                        <Col xl={12} lg={12} md={24} sm={24}>
                            <div className='Banner-Img'>
                                <img src='/Images/bannerimg.png' alt='' className='SideImg'/>
                            </div>
                        </Col>
                    </Row>  
                </div>
            </div>
        </>
     );
}

export default Banner;