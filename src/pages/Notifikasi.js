import React, { Component } from "react";
import Header from "parts/HeaderDetail";
import Footer from "parts/Footer";
import styled from "styled-components";
import Cardsimple from "parts/Cardsimple";

class Notifikasi extends Component {
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
        <Header {...this.props}></Header>
        {/* <Container> */}
            <Text1> 
            <h2>Notifikasi</h2>
            </Text1>
            <Paragraf>
                <Cardsimple
                    title='Pemesanan anda telah berhasil di booking'
                    body='Anda telah memesan paket Nikah Kalo Mau pada tanggal 27 Januari 2021 untuk pelaksanaan MakeUp pada tanggal 15 Februari 2021.' />
                    <Cardsimple 
                    title='Pemesanan anda telah berhasil di booking'
                    body='Anda telah memesan paket Nikah Kalo Mau pada tanggal 27 Januari 2021 untuk pelaksanaan MakeUp pada tanggal 15 Februari 2021.' />
                    <Cardsimple
                    title='Pemesanan anda telah berhasil di booking'
                    body='Anda telah memesan paket Nikah Kalo Mau pada tanggal 27 Januari 2021 untuk pelaksanaan MakeUp pada tanggal 15 Februari 2021.' />
                    <Cardsimple
                    title='Pemesanan anda telah berhasil di booking'
                    body='Anda telah memesan paket Nikah Kalo Mau pada tanggal 27 Januari 2021 untuk pelaksanaan MakeUp pada tanggal 15 Februari 2021.' />
            </Paragraf>
            <Footer/>
        {/* </Container>  */}
      </>
    );
  }
}

export default Notifikasi;