import React, { Component } from "react";
import Header from "parts/HeaderDetail";
import Footer from "parts/Footer";
import styled from "styled-components";
import Cardsimple from "parts/Cardsimple";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Notifikasi extends Component {
  render() {

    const Containerr = styled.div`
    // width: 100vw;
    // height: 100vh;
    // // margin-left: 120px;
    // // margin-right: 120px;
    margin-top: 50px;
    `;

    const Text1 = styled.div`
        text-align: center;
        color: #6589AB;
        margin: 5px 0;
        font-weight: bold;
    `;
    const Paragraf = styled.div`
        margin-left: 120px;
        margin-right: 120px;
        margin-top: 50px;
        text-align: justify;
    `;


    return (
      <>
        <Header {...this.props}></Header>
        <Containerr fluid>
            <Text1> 
            <h2>Notifikasi</h2>
            </Text1>
            <Paragraf >
            <Row lg={true}>
                  <Col lg={true} sm>
                    <Cardsimple
                      title='Pemesanan anda telah berhasil di booking'
                      body='Anda telah memesan paket Nikah Kalo Mau pada tanggal 27 Januari 2021 untuk pelaksanaan MakeUp pada tanggal 15 Februari 2021.' />
                  </Col>
            </Row>
            <Row lg={true}>
                  <Col lg={true} sm>
                    <Cardsimple
                      title='Pemesanan anda telah berhasil di booking'
                      body='Anda telah memesan paket Nikah Kalo Mau pada tanggal 27 Januari 2021 untuk pelaksanaan MakeUp pada tanggal 15 Februari 2021.' />
                  </Col>
            </Row>
            <Row lg={true}>
                  <Col lg={true} sm>
                    <Cardsimple
                      title='Pemesanan anda telah berhasil di booking'
                      body='Anda telah memesan paket Nikah Kalo Mau pada tanggal 27 Januari 2021 untuk pelaksanaan MakeUp pada tanggal 15 Februari 2021.' />
                  </Col>
            </Row>
            </Paragraf>
            <Footer/>
        </Containerr> 
      </>
    );
  }
}

export default Notifikasi;