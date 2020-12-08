import React, { Component } from 'react'
import { Layout, Menu, Button, Row, Col, Image } from 'antd';
import logo from './../img/logo.png';
import cover from './../img/cover-img.png';
import panah from './../img/Vector.png';
import line from './../img/Line.png';
import './../../src/index.css';
import './../../src/App.css';
import Footer from '../component/Footer';
import HeaderComponent from '../component/HeaderComponent';
//import { ArrowRightOutlined } from 'antd';
export class AboutPage extends Component {
    render() {
        return (
            <div>
                <div className="layout-cover">
                    <div className="heightCover">
                        <HeaderComponent/>

                        <div className="isi" >
                            <Row>
                                <Col xs={24} md={12} style={{ overflow: 'hidden ' }}>
                                    <Image className="imgCover"
                                        src={cover}
                                    />
                                </Col>
                                <Col xs={0} md={12} style={{ paddingTop: "50px" }}>
                                    <div style={{ fontSize: "40px", fontWeight: 700, lineHeight: "0px" }}>
                                        Mitra Kandang Unggas
                                    </div>
                                    <div style={{ fontSize: "18px", marginTop: "35px", color: "#000", textAlign: "justify" }}>
                                        <strong>Avesbox</strong> adalah Layanan Otomasisasi Kandang Unggas Anda. Unggas peliharaan terutama ayam broiler merupakan salah satu spesies ayam yang cukup sensitif dengan lingkungan tempat tinggalnya. Lingkungan kandang ayam perlu dipantau oleh peternak untuk memastikan agar lingkungan kandang tetap stabil dan nyaman bagi ayam sejak awal masuk hingga panen. Suhu, amonia dan kelembaban memiliki peran signifikan terhadap pertumbuhan ayam broiler. Suhu dalam kandang perlu dijaga pada kisaran 23 hingga 35 derajat celcius sesuai dengan usia ayam broiler.
                                </div>
                                </Col>


                                <div style={{ marginTop: "-50px", clear: "both", marginBottom: "-20px" }}>
                                    <Col xs={24} md={0} style={{ marginTop: "2px", backgroundColor: "#f0f2f5", height: "50px", borderRadius: "50px 50px 0px 0px" }}>
                                    </Col>
                                    <Col xs={24} md={0} style={{ clear: "both", backgroundColor: "#f0f2f5", marginTop: "-2px" }}>
                                        <div style={{ fontSize: "38px", fontWeight: 700, lineHeight: "50px", padding: "0px 43px" }}>
                                            Mitra Kandang Unggas
                                    </div>
                                        <div style={{ padding: "0px 43px" }}>
                                            <img src={line} alt="line" style={{}} />
                                            <p style={{ fontSize: "16px", textAlign: "justify", paddingBottom: "40px" }}>
                                            <strong>Avesbox</strong> adalah Layanan Otomasisasi Kandang Unggas Anda. Unggas peliharaan terutama ayam broiler merupakan salah satu spesies ayam yang cukup sensitif dengan lingkungan tempat tinggalnya. Lingkungan kandang ayam perlu dipantau oleh peternak untuk memastikan agar lingkungan kandang tetap stabil dan nyaman bagi ayam sejak awal masuk hingga panen. Suhu, amonia dan kelembaban memiliki peran signifikan terhadap pertumbuhan ayam broiler. Suhu dalam kandang perlu dijaga pada kisaran 23 hingga 35 derajat celcius sesuai dengan usia ayam broiler.
                                            </p>
                                        </div>
                                    </Col>
                                </div>
                            </Row>

                        </div>
                    </div >
                </div >
                <Footer/>
            </div>
        )
    }
}

export default AboutPage
