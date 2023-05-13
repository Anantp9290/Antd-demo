import React from 'react';
import {Row,Col,Typography,Button} from 'antd';

const {Title,Text} = Typography;

function Shopnow () {
    return ( 
        <>
            <div className='shopNowSection'>
                <div className='container'>
                    <Row>
                        <Col span={24}>
                            <div className='shopNowBlock'>
                                <Title level={5} className='shopNowTitle'>Designer Jewellery Necklaces-Earings</Title>
                                <Text className='shopNowPara'>Lorem Ipsum is simply dummy text of the printing and typesetting industry ad minim veniam, quis nostrud exercitation ullamco laboris</Text>
                                <div className='Shopnow-Btn'>
                                    <Button type="primary"  shape="round" className=''>shop now</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
     );
}

export default Shopnow ;