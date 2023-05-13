import React  from 'react';
import { Row, Col, Typography, Button} from 'antd'

const { Title, Paragraph } = Typography;

function About () {
    return ( 
        <>
            <div className='AboutSection'>
                <div className='container'>
                    <Row gutter={[50,15]}>
                        <Col xl={11} lg={11} md={24} sm={24} xs={24}>
                            <div className='InfoSection'>
                                <Title level={5} className='aboutSubtitle'>BEHIND THE FINE</Title>
                                <Title level={3} className='aboutTitle'>On Sale Products</Title>
                                <Paragraph className='aboutpara'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</Paragraph>
                                <Paragraph className='aboutpara'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</Paragraph>
                                <Button type='Primary' className='Viewmorebtn'>view more</Button>
                            </div>
                        </Col>
                        <Col xl={7} lg={7} md={12} sm={12} xs={24}>
                            <div className='imgBlock'>
                                <div className='ImgBox'>
                                    <img src='/Images/Sale-Product1.png' alt='' className='aboutImg'/>
                                    <div className='Bg-Overlay'>
                                        <Title level={5} className='imgLabel'>Special Wedding Sets</Title>
                                    </div>
                                </div>
                            </div> 
                        </Col>
                        <Col  xl={6} lg={6} md={12} sm={12} xs={24}>
                            <div className='imgBlock'>
                                <div className='ImgBox'>
                                    <img src='/Images/saleProduct2.png' alt='' className='aboutImg'/>
                                    <div className='Bg-Overlay'>
                                        <Title level={5} className='imgLabel'>Special Wedding Sets</Title>
                                    </div>
                                </div>
                                <div className='ImgBox'>
                                    <img src='/Images/Sale-Product3.png' alt='' className='aboutImg'/>
                                    <div className='Bg-Overlay'>
                                        <Title level={5} className='imgLabel'>Special Wedding Sets</Title>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>  
            </div>
        </>
     );
}

export default About ;
