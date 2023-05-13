import React from 'react';
import {Row, Col, Typography,Card,Rate} from 'antd';
import OwlCarousel from 'react-owl-carousel'; 
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import { useState } from 'react';

const {Title,Text} = Typography;
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const Option = {
    loop: true,
    autoplay: false,
    margin: 20,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 4,
        },
    },
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
}


function Featureproduct () { const [setValue] = useState(3);
    return ( 
        <>
            <div className='featureProductSection'>
                <div className='container'>
                    <Row>
                        <Col span={24}>
                            <div className='featureTitleBox'>
                                <Title level={4} className='featureTitle'>featured products</Title>
                            </div>
                        </Col> 
                        <Col span={24}>
                            <OwlCarousel {...Option} >
                                        <div>
                                            <Card>
                                                <div className='Wrapper'>
                                                    <div className='Img'>
                                                        {/* <Tooltip title={Text}> */}
                                                            <img src='/Images/Product1.png' alt=''/>
                                                        {/* </Tooltip> */}
                                                       
                                                    </div>
                                                </div>
                                                <div className='ContentBox'>
                                                    <Text className='TitleCard'>Diamond Necklace</Text>
                                                    <div className="ratingBox">
                                                        
                                                        <Rate tooltips={desc} onChange={setValue} allowHalf allowClear={false} defaultValue={3} />
                                                    </div>
                                                    <div className='PriceDetail'>
                                                        <Text className='Card-Price'>$29.00  </Text>
                                                        <Text className='Price-Final'>$19.00</Text>
                                                    </div>
                                                    <div className="saleLabelBg">
                                                        <Title level={5} className="saleLabel">sale</Title>
                                                    </div>
                                                </div>
                                            </Card>
                                            <Card className='Item-1'>
                                                <div className='Wrapper'>
                                                    <div className='ImgBox'>
                                                        <img src='/Images/Product2.png' alt=''/>
                                                    </div>
                                                </div>
                                                <div className='ContentBox'>
                                                    <Text className='TitleCard'>Diamond Necklace</Text>
                                                    <div className="ratingBox">
                                                        <Rate allowClear={false} defaultValue={3} />
                                                    </div>
                                                    <div className='PriceDetail'>
                                                        <Text className='Card-Price'>$29.00  </Text>
                                                        <Text className='Price-Final'>$19.00</Text>
                                                    </div>
                                                    <div className="saleLabelBg">
                                                        <Title level={5} className="saleLabel">sale</Title>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>
                                        <div>
                                            <Card>
                                                <div className='Wrapper'>
                                                    <div className='Img'>
                                                        <img src='/Images/Product1.png' alt=''/>
                                                    </div>
                                                </div>
                                                <div className='ContentBox'>
                                                    <Text className='TitleCard'>Diamond Necklace</Text>
                                                    <div className="ratingBox">
                                                        <Rate allowClear={false} defaultValue={3} />
                                                    </div>
                                                    <div className='PriceDetail'>
                                                        <Text className='Card-Price'>$29.00  </Text>
                                                        <Text className='Price-Final'>$19.00</Text>
                                                    </div>
                                                    <div className="saleLabelBg">
                                                        <Title level={5} className="saleLabel">sale</Title>
                                                    </div>
                                                </div>
                                            </Card>
                                            <Card className='Item-1'>
                                                <div className='Wrapper'>
                                                    <div className='ImgBox'>
                                                        <img src='/Images/Product2.png' alt=''/>
                                                    </div>
                                                </div>
                                                <div className='ContentBox'>
                                                    <Text className='TitleCard'>Diamond Necklace</Text>
                                                    <div className="ratingBox">
                                                        <Rate allowClear={false} defaultValue={3} />
                                                    </div>
                                                    <div className='PriceDetail'>
                                                        <Text className='Card-Price'>$29.00  </Text>
                                                        <Text className='Price-Final'>$19.00</Text>
                                                    </div>
                                                    <div className="saleLabelBg">
                                                        <Title level={5} className="saleLabel">sale</Title>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>
                                        <div>
                                            <Card>
                                                <div className='Wrapper'>
                                                    <div className='Img'>
                                                        <img src='/Images/Product1.png' alt=''/>
                                                    </div>
                                                </div>
                                                <div className='ContentBox'>
                                                    <Text className='TitleCard'>Diamond Necklace</Text>
                                                    <div className="ratingBox">
                                                        <Rate allowClear={false} defaultValue={3} />
                                                    </div>
                                                    <div className='PriceDetail'>
                                                        <Text className='Card-Price'>$29.00  </Text>
                                                        <Text className='Price-Final'>$19.00</Text>
                                                    </div>
                                                    <div className="saleLabelBg">
                                                        <Title level={5} className="saleLabel">sale</Title>
                                                    </div>
                                                </div>
                                            </Card>
                                            <Card className='Item-1'>
                                                <div className='Wrapper'>
                                                    <div className='ImgBox'>
                                                        <img src='/Images/Product2.png' alt=''/>
                                                    </div>
                                                </div>
                                                <div className='ContentBox'>
                                                    <Text className='TitleCard'>Diamond Necklace</Text>
                                                    <div className="ratingBox">
                                                        <Rate allowClear={false} defaultValue={3} />
                                                    </div>
                                                    <div className='PriceDetail'>
                                                        <Text className='Card-Price'>$29.00  </Text>
                                                        <Text className='Price-Final'>$19.00</Text>
                                                    </div>
                                                    <div className="saleLabelBg">
                                                        <Title level={5} className="saleLabel">sale</Title>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>
                                        <div>
                                            <Card>
                                                <div className='Wrapper'>
                                                    <div className='Img'>
                                                        <img src='/Images/Product1.png' alt=''/>
                                                    </div>
                                                </div>
                                                <div className='ContentBox'>
                                                    <Text className='TitleCard'>Diamond Necklace</Text>
                                                    <div className="ratingBox">
                                                        <Rate allowClear={false} defaultValue={3} />
                                                    </div>
                                                    <div className='PriceDetail'>
                                                        <Text className='Card-Price'>$29.00  </Text>
                                                        <Text className='Price-Final'>$19.00</Text>
                                                    </div>
                                                    <div className="saleLabelBg">
                                                        <Title level={5} className="saleLabel">sale</Title>
                                                    </div>
                                                </div>
                                            </Card>
                                            <Card className='Item-1'>
                                                <div className='Wrapper'>
                                                    <div className='ImgBox'>
                                                        <img src='/Images/Product2.png' alt=''/>
                                                    </div>
                                                </div>
                                                <div className='ContentBox'>
                                                    <Text className='TitleCard'>Diamond Necklace</Text>
                                                    <div className="ratingBox">
                                                        <Rate allowClear={false} defaultValue={3} />
                                                    </div>
                                                    <div className='PriceDetail'>
                                                        <Text className='Card-Price'>$29.00  </Text>
                                                        <Text className='Price-Final'>$19.00</Text>
                                                    </div>
                                                    <div className="saleLabelBg">
                                                        <Title level={5} className="saleLabel">sale</Title>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>
                            </OwlCarousel>
                        </Col> 
                    </Row>
                </div>
            </div>
        </>
     );
}

export default Featureproduct ;