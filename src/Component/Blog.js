import React from 'react';
import {Row, Col, Typography, Carousel, Card, Button } from 'antd';


const { Title, Text } = Typography;

const carouselResponsiveSettings = [
    {
      breakpoint: 1258,
      settings: {
        slidesToShow: 3
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      },
    }

  ];

const settings ={ 
  

    nextArrow: <i class='fa-solid fa-chevron-left'></i>,
    prevArrow: <i class='fa-solid fa-chevron-left'></i>
}


function BlogComponent () {
    return ( 
        <>
            <div className='BlogSection'>
                    <div className='container'>
                        <Row>
                            <Col span={24}>
                        
                                <div className='blogLabelBlock'>
                                    <Title level={5} className='blogTitle'>latest blog</Title>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Carousel draggable adaptiveHeight={true} autoplay dots={false}  arrows={true} slidesToShow={3} slidesToScroll={1}  infinite={true} responsive={carouselResponsiveSettings} {...settings}>
                                        
                                            <Card  cover={<img src='/Images/Blog1.png' alt=''/>}>
                                                <div className='blogContent'>
                                                        <Title level={5} className='blogHeading'>Consectetur adipiscing</Title>
                                                        <Title level={5} className="blogDate"><i class="fa-regular fa-calendar"></i>13 February 2021</Title>
                                                        <Text className='blogPara'> Lorem Ipsum is simply dummy text of the printing and typesetting industry </Text>
                                                        <div className='BlogBtn'>
                                                            <Button className='blogBtn'>view more</Button>
                                                        </div>
                                                </div>
                                            </Card>
                                        
                                        
                                            <Card  cover={<img src='/Images/Blog3.png' alt=''/>}>
                                                <div className='blogContent'>
                                                        <Title level={5} className='blogHeading'>Consectetur adipiscing</Title>
                                                        <Title level={5} className="blogDate"><i class="fa-regular fa-calendar"></i>13 February 2021</Title>
                                                        <Text className='blogPara'> Lorem Ipsum is simply dummy text of the printing and typesetting industry </Text>
                                                        <div className='BlogBtn'>
                                                            <Button className='blogBtn'>view more</Button>
                                                        </div>
                                                </div>

                                            </Card>
                                        
                                        
                                            <Card  cover={<img src='/Images/Blog3.png' alt=''/>}>
                                                <div className='blogContent'>
                                                        <Title level={5} className='blogHeading'>Consectetur adipiscing</Title>
                                                        <Title level={5} className="blogDate"><i class="fa-regular fa-calendar"></i>13 February 2021</Title>
                                                        <Text className='blogPara'> Lorem Ipsum is simply dummy text of the printing and typesetting industry </Text>
                                                        <div className='BlogBtn'>
                                                            <Button className='blogBtn'>view more</Button>
                                                        </div>
                                                </div>

                                            </Card>
                                        
                                            <Card  cover={<img src='/Images/Blog1.png' alt=''/>}>
                                                <div className='blogContent'>
                                                        <Title level={5} className='blogHeading'>Consectetur adipiscing</Title>
                                                        <Title level={5} className="blogDate"><i class="fa-regular fa-calendar"></i>13 February 2021</Title>
                                                        <Text className='blogPara'> Lorem Ipsum is simply dummy text of the printing and typesetting industry </Text>
                                                        <div className='BlogBtn'>
                                                            <Button className='blogBtn'>view more</Button>
                                                        </div>
                                                </div>

                                            </Card>
                                        
                                            <Card cover={<img src='/Images/Blog3.png' alt=''/>}>
                                                <div className='blogContent'>
                                                        <Title level={5} className='blogHeading'>Consectetur adipiscing</Title>
                                                        <Title level={5} className="blogDate"><i class="fa-regular fa-calendar"></i>13 February 2021</Title>
                                                        <Text className='blogPara'> Lorem Ipsum is simply dummy text of the printing and typesetting industry </Text>
                                                        <div className='BlogBtn'>
                                                            <Button className='blogBtn'>view more</Button>
                                                        </div>
                                                </div>

                                            </Card>
                                       
                                            <Card cover={<img src='/Images/Blog3.png' alt=''/>}>
                                                <div className='blogContent'>
                                                        <Title level={5} className='blogHeading'>Consectetur adipiscing</Title>
                                                        <Title level={5} className="blogDate"><i class="fa-regular fa-calendar"></i>13 February 2021</Title>
                                                        <Text className='blogPara'> Lorem Ipsum is simply dummy text of the printing and typesetting industry </Text>
                                                        <div className='BlogBtn'>
                                                            <Button className='blogBtn'>view more</Button>
                                                        </div>
                                                </div>
                                            </Card>
                                    
                                </Carousel>
                            </Col>
                        </Row>
                    </div> 
            </div>
        </>
     );
}

export default BlogComponent ;
