import React, { Component } from "react";
import HeaderDark from "parts/HeaderDark";
import Footer from "parts/Footer";
import styled from "styled-components";
import Card from "parts/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Tentang extends Component {
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
const Image = styled.img`
    width: 80%;
`;
const Title = styled.h4`
    font-size: 24px;
    font-weight: 1200;
    // text-align: left;
    font-weight: 500;
    margin-bottom: 45px;
`;
const TitleCabang = styled.h1`
    font-size: 24px;
    font-weight: 1200;
    // text-align: left;
    font-weight: 500;
    margin-top: 240px;
    margin-bottom: 30px;
`;
const Detail = styled.span`
    font-style: normal;
    font-weight: 400;
    text-align: justify;
    position:absolute;
    margin-right: 120px;
`;

    return (
      <>
        <HeaderDark {...this.props}></HeaderDark>
        <Container>
            <Wrapper>
            <Title>Tentang Kami</Title>
            <Detail>Gypsophila adalah sistem pemesanan jasa makeup artist berbasis website. Kami merupakan satu komunitas dengan sekumpulan MUA Profesional. Anda dapat memesan melalui aplikasi kami setelah melakukan registrasi akun. Pemesanan dapat menentukkan berapa orang yang akan melakukan MakeUp dan juga menentukkan untuk hari apa saja. Anda dapat memesan dalam waktu minimal 3 hari sebelum acara dan dapat membatalkan pemesanan 2 hari sebelum acara terlaksana.
                <br></br>Daerah Pemesanan              : Jakarta
                <br></br>Lokasi Kantor             : Jl. Puri Casablanca, Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12870
            </Detail>
            <TitleCabang>Pengembang Aplikasi</TitleCabang>
                <Row xs="auto" className="g-4">
                  <Col lg={true}>
                    <Card className="m-5 d-block"
                      title='Sharashena C'
                      imageUrl='https://pbs.twimg.com/media/FCm9SFjUYAA85Kt?format=jpg&name=small'
                      subtitle='140810180022'
                      body='Project Manager' />
                  </Col>
                  <Col lg={true}>
                    <Card className="m-5 d-block"
                      title='Hana Meilina F'
                      imageUrl='https://pbs.twimg.com/media/FCm9SFmVkAU1vrf?format=jpg&name=small'
                      subtitle='140810180012'
                      body='Front End Developer' />
                  </Col>
                  <Col lg={true}>
                    <Card className="m-5 d-block"
                      title='Salma Alifia Shafira'
                      imageUrl='https://pbs.twimg.com/media/FCm9SFiVgAMwj2B?format=jpg&name=900x900'
                      subtitle='140810180058'
                      body='Back End Developer' />
                  </Col>
              </Row>

            </Wrapper>
            
        </Container>
        <Footer />
      </>
    );
  }
}

export default Tentang;