import React, { Component } from 'react'
import { Avatar, Layout, Menu, Icon, Button, Row, Col, Collapse, Input, Image } from 'antd';
import logo from './../img/logo.png';
import cover from './../img/cover-img.png';
import panah from './../img/Vector.png';
import line from './../img/Line.png';
import './../../src/index.css';
import './../../src/App.css';
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
                    <Header style={{
                        backgroundColor: "rgba(192,192,192,0.0)",
                        height: "80px",
                        width: "100%",
                        zIndex: 2
                    }}>
                        <Row>
                            <Col xs={22} md={10} style={{ marginTop: "20px" }} >
                                <Row>
                                    <div>
                                        <Col xs={4} md={4} style={{ float: "left", marginTop: "10px" }}>
                                            <img src={logo} alt="logo" />
                                        </Col>
                                        <Col xs={20} md={20} className="fontHeader" >
                                            <div className="fontHeader1">
                                                AVESBOX
                                            </div>
                                            <div className="fontHeader2" >
                                                Layanan Otomatisati Kandang Unggas
                                            </div>
                                        </Col>
                                    </div>
                                </Row>
                            </Col>
                            <Col xs={2} md={14} >
                                <Menu
                                    theme="dark"
                                    mode="horizontal"
                                    style={{
                                        lineHeight: '74px',
                                        backgroundColor: "rgba(192,192,192,0.0)",
                                        float: "right",
                                        marginTop: "30px",

                                    }}
                                >
                                    <Menu.Item key="1" style={{ fontSize: "18px", color: "#000", fontWeight: 700, }}>Home</Menu.Item>
                                    <Menu.Item key="2" style={{ fontSize: "18px", color: "#000", fontWeight: 700, }}>Produk</Menu.Item>
                                    <Menu.Item key="3" style={{ fontSize: "18px", color: "#000", fontWeight: 700, }}>Harga</Menu.Item>
                                    <Menu.Item key="4" style={{ fontSize: "18px", color: "#000", fontWeight: 700, }}>Blog</Menu.Item>
                                    <Menu.Item key="5" style={{ fontSize: "18px", color: "#000", fontWeight: 700, }}>Kontak Kami</Menu.Item>
                                    <Button size='large'
                                        style={{
                                            display: "absolute",
                                            top: "5px",
                                            borderRadius: "10px",
                                            height: "auto",
                                            border: "2px solid #DB162F",
                                            backgroundColor: "transparent",
                                            color: "#000",
                                            fontWeight: "bold",
                                            fontSize: "20px"
                                        }}>
                                        DAFTAR
                        </Button>
                                </Menu>
                            </Col>
                        </Row>

                    </Header>

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
