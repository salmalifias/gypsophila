import React, { Component } from "react";
import Header from "parts/HeaderDetail";
import Footer from "parts/Footer";
import styled from "styled-components";
import Cardp from "parts/Cardp";
import Cardprofile from "parts/Cardprofile";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Profile extends Component {
  render() {

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
    const ListGroup = styled.div`
        margin : 0;
    `;
    // const ListGroup.Item = styled.div`
    //     margin : 0;
    // `;

    return (
      <>
        <Header {...this.props}></Header>
        {/* <Container> */}
            <Text1> 
            <h2>Profile</h2>
            </Text1>
            <Paragraf>
                
                <Row xs="auto" className="g-4">
                <Col lg={true}>
                <img style={{width:'100px', height:'100px', marginLeft:'135px', marginBottom:'20px', marginTop:'10px', borderRadius:'100px'}} src="https://i.ytimg.com/vi/b5uTEXCkDq8/maxresdefault.jpg"/>
                    <Cardp 
                        body1='Salma Alifia Safira'/>
                    <Cardp className="m-5 d-block"
                        body1='Profil' body2='Pemesanan' body3='Keluar'/>
                </Col>
                <Col lg={true}>
                    <Cardprofile className="m-5 d-block"
                        title='Lengkapi Profil' body1='Nama Lengkap' body2='Alamat' body3='No WhatsApp' body4='Email'/>
                </Col>
                </Row>
            </Paragraf>
            <Footer/>
        {/* </Container>  */}
      </>
    );
  }
}

export default Profile;