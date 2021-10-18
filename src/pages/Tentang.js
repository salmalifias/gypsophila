import React, { Component } from "react";
import HeaderDetail from "parts/HeaderDetail";
import Footer from "parts/Footer";
import styled from "styled-components";

class Tentang extends Component {
  render() {
    const Container = styled.div`
    width: 90vw;
    height: 100vh;
`;
const Wrapper = styled.div`
    padding-left: 100px;
`;
const Image = styled.img`
    width: 80%;
`;
const Title = styled.h1`
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
`;
const Detail = styled.span`
    font-style: normal;
    font-weight: 400;
    text-align: justify;
    position:absolute;
`;

    return (
      <>
        <HeaderDetail {...this.props} />
        {/* <Header {...this.props}></Header> */}
        <Container>
            <Wrapper>
            <Title>Tentang Kami</Title>
            <Detail>Gypsophila adalah sistem pemesanan jasa makeup artist berbasis website. Kami merupakan satu komunitas dengan sekumpulan MUA Profesional. Anda dapat memesan melalui aplikasi kami setelah melakukan registrasi akun. Pemesanan dapat menentukkan berapa orang yang akan melakukan MakeUp dan juga menentukkan untuk hari apa saja. Anda dapat memesan dalam waktu minimal 3 hari sebelum acara dan dapat membatalkan pemesanan 2 hari sebelum acara terlaksana.
                <br></br>Daerah Pemesanan              : Jakarta
                <br></br>Lokasi Kantor             : Jl. Puri Casablanca, Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12870
            </Detail>
            <TitleCabang>Pengembang Aplikasi</TitleCabang>
            
            </Wrapper>
        </Container>
        <Footer />
      </>
    );
  }
}

export default Tentang;