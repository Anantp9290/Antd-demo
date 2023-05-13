import React from 'react';
import './App.css';

import { Layout } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import HeaderComponent from './Component/Header';
import Banner from './Component/Banner'
import Service from './Component/Services'
import Productinfo from './Component/Productinfo'
import Product from './Component/Product';
import About from './Component/About';
import BlogComponent from './Component/Blog';
import Partners from './Component/Partners';
import Featureproduct from './Component/Featureproduct';
import Shopnow from './Component/shopnow';
import FooterSection from './Component/Footer'


const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
        <Header>
          <HeaderComponent/>
        </Header>
        <Content>
          <Banner/>
          <Service/>
          <Productinfo/>
          <Product/>
          <About/>
          <BlogComponent/>
          <Partners/>
          <Featureproduct/>
          <Shopnow/>
        </Content>
        <Footer>
          <FooterSection/>
        </Footer>
       
    </Layout>
  );
}

export default App;