import React, { Component } from "react";
import HeaderMember from "parts/HeaderMember";
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

    return (
      <>
        <HeaderMember {...this.props}></HeaderMember>
        {/* <Container> */}
            <Text1> 
            <h2>Profile</h2>
            </Text1>
            <Paragraf>
                
                <Row lg={true}>
                <Col lg={true} xs lg="4">
                <img style={{width:'100px', height:'100px', marginLeft:'140px', marginBottom:'20px', marginTop:'10px', marginRight:'140px'}} src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png" rounded fluid />
                    <Cardp 
                        title='Salma Alifia Safira'/>
                    <Cardp 
                        body1='Profil' body2='Pemesanan' body3='Keluar'/>
                </Col>
                <Col lg={true} md="auto">
                    <Cardprofile 
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