import React, { Component } from "react";
import HeaderMember from "parts/HeaderMember";
import Footer from "parts/Footer";
import styled from "styled-components";
import Card from "parts/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class GaleriMember extends Component {
  render() {
    const Containerr = styled.div`
        // width: 100vw;
        // height: 100vh;
        margin-left: 120px;
        margin-right: 120px;
        margin-top: 50px;
    `;

    const Text2 = styled.div`
        font-size: 24px;
        font-weight: 1200;
        text-align: left;
        font-weight: 500;
        margin-bottom: 45px;
`;

    return (
      <>
        <HeaderMember {...this.props}></HeaderMember>
        <Containerr>
          <Text2>
            <h2>Galeri</h2>
          </Text2>
          <Row xs="auto" className="g-4">
                  <Col lg={true}>
                    <Card className="m-5 d-block"
                      title=''
                      imageUrl='https://6.viki.io/image/89f81a8c5ca14803a73345e8397c21b7.jpeg?s=900x600&e=t'
                      body='Korean Look' />
                  </Col>
                  <Col lg={true}>
                    <Card className="m-5 d-block"
                      title=''
                      imageUrl='https://i.ytimg.com/vi/b5uTEXCkDq8/maxresdefault.jpg'
                      body='Simple Look' />
                  </Col>
                  <Col lg={true}>
                    <Card className="m-5 d-block"
                      title=''
                      imageUrl='https://i.ytimg.com/vi/ZWmBvDIr7H0/maxresdefault.jpg'
                      body='Soft Glam Look' />
                  </Col>
                  <Col lg={true}>
                    <Card className="m-5 d-block"
                      title=''
                      imageUrl='https://www.specialarabia.com/uploads/articles_uploads/kimkardashian1.jpg'
                      body='Nude Makeup Look' />
                  </Col>
                  <Col lg={true}>
                    <Card className="m-5 d-block"
                      title=''
                      imageUrl='https://images.f2fcdn.net/files/dwinta/agaaa/yuiiu.jpg'
                      body='No Makeup Look' />
                  </Col>
                  <Col lg={true}>
                    <Card className="m-5 d-block"
                      title=''
                      imageUrl='data:image/jpeg;base64,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'
                      body='Smokey Makeup Look' />
                  </Col>
                  <Col lg={true}>
                    <Card className="m-5 d-block"
                      title=''
                      imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtt9QlBAkwomEH9_bBr5yDotkQqRf8_r-jA&usqp=CAU'
                      body='Rose Gold Look' />
                  </Col>
                  <Col lg={true}>
                    <Card className="m-5 d-block"
                      title=''
                      imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ4cq20_KdvxeUbfCmN-sR4HiNybMkU4hpCA&usqp=CAU'
                      body='Office Makeup Look' />
                  </Col>
                  <Col lg={true}>
                    <Card className="m-5 d-block"
                      title=''
                      imageUrl='data:image/jpeg;base64,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'
                      body='Candy Makeup Look' />
                  </Col>
              </Row>
        
              
        </Containerr> 
        <Footer/>
      </>
    );
  }
}

export default GaleriMember;