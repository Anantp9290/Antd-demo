import React from 'react';
import { Row, Col, Typography,Divider } from "antd";

const {Title, Text} = Typography;

function Partners () {
    return ( 
        <>
            <div className='PartnerSection'>
                <div className='container'>
                     <Row gutter={[50,15]}>
                        <Col  xl={13} lg={16} md={24} sm={24}>
                            <div className='partnersImgBlock'>
                                <div className='imagebox1'>
                                    <img src='/Images/partnerImage1.png' className='sideImage' alt=''/>
                                </div>
                                <div className='imagebox2'>
                                    <img src='/Images/partnerImage2.png' className='sideImage' alt=''/>
                                    <div className='playImage'>
                                        <img src='/Images/Play.png' alt=''/>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col  xl={11} lg={8} md={24} sm={24}>
                            <div className='partnersContent'>
                                <Title level={4} className='partnersTitle'>Jewelry As Unique As You</Title>
                                <Text className='partnersPara'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volup.</Text>
                                <Title level={5} className='partnersLabel'>Our Partners</Title>
                                <Divider/>
                                <div className='logoBlock'>
                                    <img src='/Images/partnerLogo.png' alt=''/>
                                    <img src='/Images/partnerLogo.png' alt=''/>
                                    <img src='/Images/partnerLogo.png' alt=''/>
                                </div>
                            </div>
                        </Col>  
                     </Row>
                </div>
            </div>
        </>
     );
}

export default Partners ;