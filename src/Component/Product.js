import React from 'react';
import { Row, Col, Typography, Tabs, Card,Rate} from 'antd';
import OwlCarousel from 'react-owl-carousel'; 
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

const { Text, Title } = Typography;
const {TabPane} = Tabs.TabPane;

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

function Product () {
    return ( 
        <>
            <div className='ProductSection'>
                <div className='container'>
                    <Row>
                        <Col span={24}>
                            <div className='topProductBlock'>
                                <Title level={4} className='topProductLabel'>top product</Title>
                            </div>
                            <div className='TabsBlock'>
                                <Tabs defaultActiveKey="1">
                                    <TabPane tab="Latest" key="1">
                                        <OwlCarousel  {...Option} >
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
                                            <Card>
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
                                            <Card>
                                                <div className='Wrapper'>
                                                    <div className='ImgBox'>
                                                        <img src='/Images/Product3.png' alt=''/>
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
                                            <Card>
                                                <div className='Wrapper'>
                                                    <div className='Img'>
                                                        <img src='/Images/Product4.png' alt=''/>
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
                                        </OwlCarousel>
                                    </TabPane> 
                                    <TabPane tab="Best Seller" key="2">
                                        <OwlCarousel  {...Option} >
                                            <Card>
                                                <div className='Wrapper'>
                                                    <div className='Img'>
                                                        <img src='/Images/Product1.png' alt=''/>
                                                    </div>
                                                </div>
                                                <div className='ContentBox'>
                                                    <Text className='TitleCard'>Diamond Necklace</Text>
                                                    <div className="ratingBox">
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-regular fa-star"></i>
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
                                            <Card>
                                                <div className='Wrapper'>
                                                    <div className='ImgBox'>
                                                        <img src='/Images/Product2.png' alt=''/>
                                                    </div>
                                                </div>
                                                <div className='ContentBox'>
                                                    <Text className='TitleCard'>Diamond Necklace</Text>
                                                    <div className="ratingBox">
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-regular fa-star"></i>
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
                                            <Card>
                                                <div className='Wrapper'>
                                                    <div className='ImgBox'>
                                                        <img src='/Images/Product3.png' alt=''/>
                                                    </div>
                                                </div>
                                                <div className='ContentBox'>
                                                    <Text className='TitleCard'>Diamond Necklace</Text>
                                                    <div className="ratingBox">
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-regular fa-star"></i>
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
                                            <Card>
                                                <div className='Wrapper'>
                                                    <div className='Img'>
                                                        <img src='/Images/Product4.png' alt=''/>
                                                    </div>
                                                </div>
                                                <div className='ContentBox'>
                                                    <Text className='TitleCard'>Diamond Necklace</Text>
                                                    <div className="ratingBox">
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-regular fa-star"></i>
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
                                            <Card>
                                                <div className='Wrapper'>
                                                    <div className='Img'>
                                                        <img src='/Images/Product1.png' alt=''/>
                                                    </div>
                                                </div>
                                                <div className='ContentBox'>
                                                    <Text className='TitleCard'>Diamond Necklace</Text>
                                                    <div className="ratingBox">
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-regular fa-star"></i>
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
                                        </OwlCarousel>
                                    </TabPane> 
                                    <TabPane tab="Special" key="3">
                                        <OwlCarousel  {...Option} >
                                            <Card>
                                                <div className='Wrapper'>
                                                    <div className='Img'>
                                                        <img src='/Images/Product1.png' alt=''/>
                                                    </div>
                                                </div>
                                                <div className='ContentBox'>
                                                    <Text className='TitleCard'>Diamond Necklace</Text>
                                                    <div className="ratingBox">
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-regular fa-star"></i>
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
                                            <Card>
                                                <div className='Wrapper'>
                                                    <div className='ImgBox'>
                                                        <img src='/Images/Product2.png' alt=''/>
                                                    </div>
                                                </div>
                                                <div className='ContentBox'>
                                                    <Text className='TitleCard'>Diamond Necklace</Text>
                                                    <div className="ratingBox">
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-regular fa-star"></i>
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
                                            <Card>
                                                <div className='Wrapper'>
                                                    <div className='ImgBox'>
                                                        <img src='/Images/Product3.png' alt=''/>
                                                    </div>
                                                </div>
                                                <div className='ContentBox'>
                                                    <Text className='TitleCard'>Diamond Necklace</Text>
                                                    <div className="ratingBox">
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-regular fa-star"></i>
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
                                            <Card>
                                                <div className='Wrapper'>
                                                    <div className='Img'>
                                                        <img src='/Images/Product4.png' alt=''/>
                                                    </div>
                                                </div>
                                                <div className='ContentBox'>
                                                    <Text className='TitleCard'>Diamond Necklace</Text>
                                                    <div className="ratingBox">
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-regular fa-star"></i>
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
                                            <Card>
                                                <div className='Wrapper'>
                                                    <div className='Img'>
                                                        <img src='/Images/Product1.png' alt=''/>
                                                    </div>
                                                </div>
                                                <div className='ContentBox'>
                                                    <Text className='TitleCard'>Diamond Necklace</Text>
                                                    <div className="ratingBox">
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-regular fa-star"></i>
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
                                        </OwlCarousel>
                                    </TabPane> 
                                </Tabs>
                                
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
     );
     
}

export default Product ;
