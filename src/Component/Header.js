import React from 'react';
import { Row, Col, Input, Typography, Menu } from 'antd';


const { Text } = Typography;
const { Search } = Input;

const items1: MenuProps['items'] = ['Home', 'About', 'Products','Diamond','Blog','Contact'].map((key) => ({
    key,
    label: `${key}`,
  }));
  

const onSearch = (value: string) => console.log(value);

function HeaderComponent () {
    return (
        <>
            <div className='main-Banner'>
                <div className='container'>
                    <Row>
                        <Col xxl={8} xl={8} lg={8}>
                            <div className='call'>
                                <img src="/Images/CallIcon.png" alt=''/>
                                <div className='call-content'>
                                    <Text>Call us</Text>
                                    <Text>Free Support: 1–234–5678901</Text>
                                </div>
                            </div>
                        </Col>
                        <Col  xxl={8} xl={8} lg={8} md={24} xs={24}>
                            <div className='Logo'>
                                <a href='Home'>
                                    <img src="/Images/Logo.png" alt=''/>
                                </a>
                            </div>  
                        </Col>
                        <Col  xxl={8} xl={8} lg={8}>
                            <div className='SearchBox'>
                                <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
                            </div>
                        </Col>
                    </Row>
                </div>     
            </div>  
            <Row>
                <Col span={24}>
                    <div className='Nav'>
                        <Menu  mode="horizontal" defaultSelectedKeys={['Home']} items={items1} />
                    </div>
                </Col>
            </Row>
            
        </>
      );
}

export default HeaderComponent ;