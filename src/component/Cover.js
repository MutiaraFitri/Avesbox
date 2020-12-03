import React, { Component } from 'react'
import { Avatar, Layout, Menu, Icon, Button, Row, Col, Collapse, Input, Image } from 'antd';
import logo from './../img/logo.png';
import cover from './../img/cover-img.png';
import panah from './../img/Vector.png';
import line from './../img/Line.png';
import './../../src/index.css';
import './../../src/App.css';
import HeaderComponent from './HeaderComponent';
const { Content } = Layout;
//import { ArrowRightOutlined } from 'antd';
const { Header, Footer } = Layout;
const { Panel } = Collapse;
const { Search } = Input;

export class Cover extends Component {
    render() {
        return (
            <div className="layout-cover">
                <div className="heightCover">
                    <HeaderComponent/>

                    <div className="isi" >
                        <Row>
                            <Col xs={24} md={14} style={{ overflow: 'hidden ' }}>
                                <Image className="imgCover"
                                    src={cover}
                                />
                            </Col>
                            <Col xs={0} md={10} style={{ paddingTop: "50px" }}>
                                <div style={{ fontSize: "64px", fontWeight: 700, lineHeight: "70px" }}>
                                    Mitra Kandang Unggas
                                    </div>
                                <div style={{ fontSize: "29px", marginTop: "35px", fontWeight: 700, color: "#DB162F" }}>
                                    Pelajari disini
                                        <img src={panah} alt="panah" style={{ marginLeft: "20px" }} />
                                    { /* <ArrowRightOutlined /> */}
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
        )
    }
}

export default Cover
