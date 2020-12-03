import React, { Component } from 'react'
import { Layout, Menu, Button, Row, Col, Image } from 'antd';
import logo from './../img/logo.png';
import iot from './../img/iot.png';
import panah from './../img/Vector.png';
import line from './../img/Line.png';
import './../../src/index.css';
import './../../src/App.css';
import Footer from '../component/Footer';
import HeaderComponent from '../component/HeaderComponent';
//import { ArrowRightOutlined } from 'antd';
const { Header } = Layout;

export class ProductPage extends Component {
    render() {
        return (
            <div>
                <div className="layout-cover">
                    <div className="heightCover">
                        <HeaderComponent/>

                        <div className="isi" >
                            <Row>
                                <Col xs={24} md={12} style={{ overflow: 'hidden' }}>
                                    <Image className="imgCover"
                                        src={iot}
                                    />
                                </Col>
                                <Col xs={0} md={12} style={{ paddingTop: "50px" }}>
                                    <div style={{ fontSize: "40px", fontWeight: 700, lineHeight: "0px" }}>
                                        Product AvesBox
                                    </div>
                                    <div style={{ fontSize: "18px", marginTop: "35px", color: "#000", textAlign: "justify" }}>
                                    Product dari <strong>Avesbox</strong> adalah IoT, Avesbox mampu memberikan data kepada peternak mengenai kondisi kandang ayam secara up-to-date. Avesbox juga menawarkan aplikasi manajemen kandang berbasis Cloud untuk mengelola data peternakan, mulai dari DOC masuk hingga masa panen. Peternak akan dibantu dalam kegiatan pengelolaan ternak, pakan dan lingkungan. Peternak juga dapat meremote alat yang ada di kandang melalui aplikasi Avesbox yang dapat diakses melalui smartphone maupun komputer dari manapun dan kapanpun.
                                </div>
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
                <Footer/>
            </div>
        )
    }
}

export default ProductPage
