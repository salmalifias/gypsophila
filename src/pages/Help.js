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
                      body='Akun kamu bermasalah? Cek masalahnya disini' 
                      />
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


        {/* <img src="https://pbs.twimg.com/media/FCJ0w0EUcAUgCrM?format=png&name=360x360" style={{marginLeft:"360px"}}></img>
          <Text3>
            <h2>How to Register</h2>
          </Text3>
          <ol>
            <li>Masuk ke halaman register</li>
            <li>Masukkan nama, alamat, nomor WhatsApp, email, dan kata sandi</li>
            <li>Selanjutnya akan otomatis masuk ke halaman homepage</li>
            <li>Jika tidak bisa melakukan register silahkan hubungi info@gypsophila.com</li>
        </ol>
        <br></br><br></br><br></br> */}

        <img src="https://pbs.twimg.com/media/FCJ0y7pUcAkJPLj?format=png&name=360x360" style={{marginLeft:"360px"}}></img>
          <Text3>
            <h2>How to Book</h2>
          </Text3>
          <ol>
            <li>Pilih paket yang kamu inginkan</li>
            <li>Masukkan jumlah orang dan tanggal pemesanan pada formulir di bawah kanan. Lalu klik Lanjutkan Pesanan</li>
            <li>Lalu cek kembali data diri yang terdapat pada halaman selanjutnya</li>
            <li>Pada halaman pembayaran, silahkan pilih bank atau e-wallet yang dituju. Kemudian silahkan upload bukti pembayaran, asal bank, beserta nama pengirim. Lalu klik Lanjutkan pesanan</li>
            <li>Setelah itu akan muncul pembayaran berhasil. Silahkan cek WhatsApp anda untuk detail pesanan. (Jika tidak menerima WhatsApp dalam 24 jam silahkan hubungi info@gypsophila.com</li>
        </ol>

        <br></br><br></br><br></br>
        <img src="https://pbs.twimg.com/media/FCJ00tTUcAsjF6h?format=png&name=360x360" style={{marginLeft:"360px"}}></img>
          <Text3>
            <h2>How to Cancel Book</h2>
          </Text3>
          <ol>
            <li>Pembatalan hanya bisa dilakukan melalui email info@gypsophila.com </li>
            <li>Untuk pembatalan maksimal 3 hari dari hari pemesanan</li>
            <li>Jika sudah sesuai dengan kebijakan yang tersedia maka uang akan segera dikembalikan dalam 5 hari kerja</li>
        </ol>
        <br></br><br></br><br></br>

        </Containerr> 
        <Footer/>
      </>
    );
  }
}

export default Help;