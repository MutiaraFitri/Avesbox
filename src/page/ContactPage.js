import React, { Component } from 'react'
import { Layout, Menu, Button, Row, Col, Input,Radio  } from 'antd';
import logo from './../img/logo.png';
import cover from './../img/cover-img.png';
import panah from './../img/Vector.png';
import line from './../img/Line.png';
import './../../src/index.css';
import './../../src/App.css';
import Footer from '../component/Footer';
import { CaretRightFilled  } from '@ant-design/icons';
import HeaderComponent from '../component/HeaderComponent';
//import { ArrowRightOutlined } from 'antd';
const { Header } = Layout;
const { TextArea } = Input;
export class ContactPage extends Component {
    state = {
        size: 'large',
      };
    render() {
        const { size } = this.state;
        return (
            <div>
                <div className="layout-cover">
                    <div className="heightCover">
                        <HeaderComponent/>
                        <div className="isi" >
                            <Row>
                                <Col xs={24} md={12} style={{ overflow: 'hidden ', borderRadius: "30px", height: "400px" }}>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.1472666344484!2d110.37253361477806!3d-7.774204594397223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a584a6eaf7cbb%3A0x294cd98559dc9c8c!2sSekolah%20Vokasi%20UGM!5e0!3m2!1sid!2sid!4v1607003084932!5m2!1sid!2sid" height="400" frameborder="0" style={{ width: "100%" }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                </Col>
                                <Col xs={0} md={11} style={{ paddingTop: "50px", marginLeft: "30px" }}>
                                    <div style={{ fontSize: "35px", fontWeight: 700, lineHeight: "0px" }}>
                                        Kontak Kami
                                    </div>
                                    <div style={{marginTop:"20px"}}>
                                        <Input name="nama" placeholder="Nama Lengkap" style={{fontSize:"16px",borderRadius:"10px",padding:"10px"}}/>
                                    </div>
                                    <div>
                                        <TextArea rows={5} style={{fontSize:"16px",borderRadius:"10px",padding:"10px",marginTop:"10px"}} placeholder="Pesan Anda"/>
                                    </div>
                                    <Button type="primary" size={size} style={{backgroundColor:"#DB162F",padding:"0px 30px",borderRadius:"10px"}}>
                                        Kirim
                                    </Button>
                                </Col>


                                <div style={{ marginTop: "-50px", clear: "both", marginBottom: "-20px" }}>
                                    <Col xs={24} md={0} style={{ marginTop: "2px", backgroundColor: "#f0f2f5", height: "50px", borderRadius: "50px 50px 0px 0px" }}>
                                    </Col>
                                    <Col xs={24} md={0} style={{ clear: "both", backgroundColor: "#f0f2f5", marginTop: "-2px" }}>
                                        <div style={{ fontSize: "38px", fontWeight: 700, lineHeight: "50px", padding: "0px 43px" }}>
                                            Mitra Kandang Unggas
                                    </div>
                                        <div style={{ fontSize: "18px", fontWeight: 700, color: "#DB162F", padding: "20px 43px" }}>
                                            Pelajari disini
                                        <img src={panah} alt="panah" style={{ marginLeft: "20px", width: "25px" }} />
                                            { /* <ArrowRightOutlined /> */}
                                        </div>
                                        <div style={{ padding: "0px 43px" }}>
                                            <img src={line} alt="line" style={{}} />
                                            <p style={{ fontSize: "16px", textAlign: "justify", paddingBottom: "40px" }}><span style={{ fontWeight: "bold" }}>Avesbox</span> adalah Layanan Otomasisasi Kandang Unggas yang dapat mengatasi masalah manajemen peternakan dengan menggunakan teknologi Internet of Things.</p>
                                        </div>
                                    </Col>
                                </div>
                            </Row>

                        </div>
                    </div >
                </div >
                <Footer />
            </div>
        )
    }
}

export default ContactPage
