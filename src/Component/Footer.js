import React from 'react';
import {Row,Col,Typography} from 'antd';

const {Text,Title} = Typography;

function FooterSection () {
    return ( 
        <>
            <div className='footerSection'>
                <div className='container'>
                    <Row>
                        <Col xl={8} lg={12} md={12} sm={24}>
                            <div className='footerBlock1'>
                                <div>
                                    <a href='Home'>
                                        <img src="/Images/Logo.png" alt=''/>
                                    </a>
                                </div>
                                <Text className='footerPara'>Ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</Text>
                                <div className='socialIcons'>
                                    <div className='icon'>
                                        <i class="fa-brands fa-instagram"></i>
                                    </div>
                                    <div className='icon'>
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </div>
                                    <div className='icon'>
                                        <i class="fa-brands fa-twitter"></i>
                                    </div>
                                    <div className='icon'>
                                        <i class="fa-brands fa-whatsapp"></i>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} lg={12} md={12} sm={24}>
                            <div className='footerBlock2'>
                                <Title level={5} className='footerLabel'>useful links</Title>
                                <ul class="footerLinks">
                                    <li> <a href='About' className='footer-Link'>about us</a> </li>
                                    <li> <a href='Order' className='footer-Link'>my orders</a> </li>
                                    <li> <a href='Information' className='footer-Link'>delivery information</a> </li>
                                    <li> <a href='Shipping-Policy' className='footer-Link'>shipping policy</a> </li>
                                    <li> <a href='Policy' className='footer-Link'>privacy policy</a> </li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl={6} lg={12} md={12} sm={24}>
                            <div className='footerBlock2'>
                                <Title level={5} className='footerLabel'>gallery</Title> 
                                <div className='gallery'>
                                    <div className='galleryRow'>
                                        <img src='/Images/Gallery-Image1.png' alt='' className='Gallery-Img'/>
                                        <img src='/Images/Gallery-Image2.png' alt='' className='Gallery-Img'/>
                                        <img src='/Images/Gallery-Image3.png' alt='' className='Gallery-Img'/>
                                    </div>
                                    <div className='galleryRow'>
                                        <img src='/Images/Gallery-Image3.png' alt='' className='Gallery-Img'/>
                                        <img src='/Images/Gallery-Image1.png' alt='' className='Gallery-Img'/>
                                        <img src='/Images/Gallery-Image2.png' alt='' className='Gallery-Img'/>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col  xl={6} lg={12} md={12} sm={24}>
                            <div className='footerBlock2'>
                                <Title level={5} className='footerLabel'>contact us</Title>
                                <div className='contactInfoBlock'>
                                     <Text className='Info'><i class="fa-solid fa-location-dot"></i>
                                        <div className='contactInfo1'>
                                            <Text className='Info'>1011Santa Monica 1st Floor, Shubham 124 oulevard New York, USA</Text>
                                        </div>  
                                    </Text>
                                    <Text className='Info'><i class="fa-solid fa-envelope"></i>
                                        <div className='contactInfo'>
                                            <Text className='Info'>example@xyz.com</Text>
                                            <Text className='Info'>example@xyz.com</Text>
                                        </div>  
                                    </Text>
                                    <Text className='Info'><i class="fa-solid fa-phone"></i>
                                        <div className='contactInfo'>
                                            <Text className='Info'>example@xyz.com</Text>
                                            <Text className='Info'>example@xyz.com</Text>
                                        </div>  
                                    </Text>
                                </div> 
                            </div>
                        </Col>
                        <Col span={24}>
                            <div className='copyrightSection'>
                                <Title level={5} className='copyrightLabel'>© Copyright 2021 Your Company. All rights reserved</Title>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
     );
}

export default FooterSection ;
