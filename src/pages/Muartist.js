import React, { Component } from "react";
import HeaderDark from "parts/HeaderDark";
import Footer from "parts/Footer";
import styled from "styled-components";
import CardMuartist from "parts/CardMuartist";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import { GrLocation } from "react-icons/gi";

class Muartist extends Component {
  render() {
const Container = styled.div`
    // width: 90vw;
    // height: 100vh;
    // margin-left: 120px;
    margin-right: 120px;
    margin-top: 50px;
`;
const Wrapper = styled.div`
    padding-left: 100px;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 1200;
    text-align: left;
    font-weight: 500;
    margin-bottom: 45px;
`;

    return (
      <>
        <HeaderDark {...this.props}></HeaderDark>
        <Container>
            <Wrapper>
            <Title>Makeup Artist</Title>
                <Row xs="auto" className="g-4">
                  <Col lg={true}>
                    <CardMuartist className="m-5 d-block text-center"
                      title='By Jessica'
                      imageUrl='https://www.hellobeauty.id/storage/images/cache/user/5679/b71985397688d6f1820685dde534981b-350-200.jpg'
                      body='Jakarta Pusat'
                      />
                  </Col>
                  <Col lg={true}>
                    <CardMuartist className="m-5 d-block"
                      title='Lyn.MUA'
                      imageUrl='https://www.hellobeauty.id/storage/images/cache//user/16410/63f5b021c36fcedfcb08c3de302b90f8-350-200.jpeg'
                      body='Jakarta Selatan' />
                  </Col>
                  <Col lg={true}>
                    <CardMuartist className="m-5 d-block"
                      title='Clara Kim'
                      imageUrl='https://www.hellobeauty.id/storage/images/cache/user/1153/d30217d1cbf2559a9894e09a56ad8d44-350-200.jpeg'
                      body='Jakarta Utara' />
                  </Col>
                  <Col lg={true}>
                    <CardMuartist className="m-5 d-block"
                      title='Ririn Makeup Artist'
                      imageUrl='https://www.hellobeauty.id/storage/images/cache/user/4041/2bd02dead545292f2daa41870a6b601f-350-200.jpeg'
                      body='Jakarta Utara' />
                  </Col>
                  <Col lg={true}>
                    <CardMuartist className="m-5 d-block"
                      title='Salma Bridal MUA'
                      imageUrl='https://www.hellobeauty.id/storage/images/cache/user/8795/70e3fbbb11dd5e37f1dbfd6a3c16bdec-350-200.jpg'
                      body='Jakarta Barat' />
                  </Col>
                  <Col lg={true}>
                    <CardMuartist className="m-5 d-block"
                      title='Glow Like Lady'
                      imageUrl='https://www.hellobeauty.id/storage/images/cache//user/17386/6f0507da6ab25264398d14a0ba7e35f2-350-200.jpeg'
                      body='Jakarta Timur' />
                  </Col>
                  <Col lg={true}>
                    <CardMuartist className="m-5 d-block"
                      title='Levina.Muart'
                      imageUrl='https://www.hellobeauty.id/storage/images/cache//user/15674/b1764ab4b800ec43aa0934ff5b360bd7-350-200.jpeg'
                      body='Jakarta Selatan' />
                  </Col>
                  <Col lg={true}>
                    <CardMuartist className="m-5 d-block"
                      title='Say Lalisa'
                      imageUrl='https://www.hellobeauty.id/storage/images/cache//user/14123/1898012a21048f8fbeff602ed63d98d0-350-200.jpeg'
                      body='Jakarta Timur' />
                  </Col>
                  <Col lg={true}>
                    <CardMuartist className="m-5 d-block"
                      title='Beauty by Rose'
                      imageUrl='https://www.hellobeauty.id/storage/images/cache/user/6861/71e8b5091eb9c4b3702c3961a1580d4f-350-200.jpeg'
                      body='Jakarta Selatan' />
                  </Col>
              </Row>
            </Wrapper>
        </Container>
        <Footer />
      </>
    );
  }
}

export default Muartist;