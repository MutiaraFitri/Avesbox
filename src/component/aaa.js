import React, { Component } from 'react'
import { Avatar, Layout, Menu, Icon, Button, Row, Col, Collapse, Input } from 'antd';
import logo from './../img/logo.png';
import cover from './../img/cover-img.png';
import panah from './../img/Vector.png';
import './../../src/index.css';
//import { ArrowRightOutlined } from 'antd';
const { Header, Footer } = Layout;
const { Panel } = Collapse;
const { Search } = Input;

export class Cover extends Component {
    render() {
        return (
            <div tyle={{ backgroundColor: "#fff" }}>
                <Header style={{
                    backgroundColor: "rgba(192,192,192,0.0)",
                    height: "80px",
                    width: "100%",
                    position: "absolute",
                    zIndex: 2
                }}>
                    <div className="logo" style={{ lineHeight: '40px', float: "left", color: "black", fontSize: "30px", marginTop: "30px" }}>
                        <div style={{ fontSize: "28px", float: "left", marginRight: "10px" }}>
                            <img src={logo} alt="Logo Avesbox" />
                        </div>
                        <div className="tulisan-logo" style={{ width: "600px" }}>
                            <div style={{
                                float: "left", fontSize: '39px', fontWeight: 800, margin: "0px",
                            }}>
                                AVESBOX
                            </div>
                            <div style={{ float: "left", fontSize: "22px", fontWeight: "normal", lineHeight: "36px", margin: "0px" }}>
                                Layanan Otomatisati Kandang Unggas
                            </div>
                        </div>
                    </div>
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
                        <Menu.Item key="1" style={{ fontSize: "18px", color: "#FFF", fontWeight: 500 }}>Home</Menu.Item>
                        <Menu.Item key="2" style={{ fontSize: "18px", color: "#FFF", fontWeight: 500 }}>Produk</Menu.Item>
                        <Menu.Item key="3" style={{ fontSize: "18px", color: "#FFF", fontWeight: 500 }}>Harga</Menu.Item>
                        <Menu.Item key="4" style={{ fontSize: "18px", color: "#FFF", fontWeight: 500 }}>Blog</Menu.Item>
                        <Menu.Item key="5" style={{ fontSize: "18px", color: "#FFF", fontWeight: 500 }}>Kontak Kami</Menu.Item>
                        <Button size='large'
                            style={{
                                display: "absolute",
                                top: "5px",
                                borderRadius: "13px",
                                height: "auto",
                                backgroundColor: "#DB162F",
                                color: "rgba(255,255,255,1)",
                                border: "none",
                                fontWeight: "bold",
                                fontSize: "20px"
                            }}>
                            DAFTAR
                        </Button>
                    </Menu>
                </Header>
                <div className="isi" style={{ fontSize: "50px", background: "linear-gradient(180deg, #F7DD5B 0%, #F1B347 114.44%)", height: 800, backgroundSize: "cover" }}>
                    <div style={{ width: "100%", height: "100%", }}>
                    </div>
                    <div style={{ position: "absolute", zIndex: "2", top: "200px", width: "100%" }}>
                        <Row>
                            <Col xs={2} sm={4} md={6} lg={8} xl={10} style={{ backgroundColor: "red" }}>
                                <div style={{ float: "left", width: "400px", height: "350px", marginLeft: "62px", backgroundColor: "red" }}>
                                    <img src={cover} alt="Mitra Kandang Unggas Avesbox" />
                                </div>
                            </Col>
                            <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                                <div style={{
                                    width: "500px",
                                    height: "173px",
                                    position: "absolute",
                                    top: "67px",
                                    marginLeft: "250px",
                                    backgroundColor: "red"
                                }}>
                                    <div style={{ fontSize: "64px", fontWeight: 700, lineHeight: "70px" }}>
                                        Mitra Kandang Unggas
                                    </div>
                                    <div style={{ fontSize: "29px", marginTop: "35px", fontWeight: 700, color: "#DB162F" }}>
                                        Pelajari disini
                                        <img src={panah} alt="panah" style={{ marginLeft: "20px" }} />
                                        { /* <ArrowRightOutlined /> */}
                                    </div>
                                    {/* <Button shape="round" icon="download" size="large" style={{ fontWeight: 700, color: "blue", textTransform: "uppercase", letterSpacing: "3px", fontSize: "14px" }}>
                                        Download App
                                    </Button> */}
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div >
        )
    }
}

export default Cover
