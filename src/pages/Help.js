import React, { Component } from "react";
import Header from "parts/HeaderDark";
import Footer from "parts/Footer";
import styled from "styled-components";
import Card from "parts/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Help extends Component {
  render() {
    const Containerr = styled.div`
        // width: 100vw;
        // height: 100vh;
        margin-left: 120px;
        margin-right: 120px;
        margin-top: 50px;
    `;

    const Text3 = styled.div`
        text-align: Center;
        color: #6589AB;
        margin: 5px 0;
        font-weight: bold;
        margin-bottom: 50px;
    `;

<<<<<<< Updated upstream
=======
    // const Image = styled.img`
    //     width: 80%;
    // `;


>>>>>>> Stashed changes
    return (
      <>
        <Header {...this.props}></Header>
        <Containerr>
          <Text3>
            <h2>Apa yang bisa kami bantu?</h2>
          </Text3>
          <Row xs="auto" className="g-4">
                  <Col lg={true}>
                    <Card className="m-5 d-block"
                      title='Akun'
                      imageUrl='https://pbs.twimg.com/media/FCJ0w0EUcAUgCrM?format=png&name=360x360'
                      body='Akun kamu bermasalah? Cek masalahnya disini' />
                  </Col>
                  <Col lg={true}>
                    <Card className="m-5 d-block"
                      title='Booking'
                      imageUrl='https://pbs.twimg.com/media/FCJ0y7pUcAkJPLj?format=png&name=360x360'
                      body='Proses booking kamu bermasalah? Cek masalahnya disini' />
                  </Col>
                  <Col lg={true}>
                    <Card className="m-5 d-block"
                      title='Lainnya'
                      imageUrl='https://pbs.twimg.com/media/FCJ00tTUcAsjF6h?format=png&name=360x360'
                      body='Fitur lain bermasalah? Cek masalahnya disini' />
                  </Col>
              </Row>
        
              
        </Containerr> 
        <Footer/>
      </>
    );
  }
}

export default Help;