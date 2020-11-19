import React, { Component } from 'react'
import { Avatar, Layout, Menu, Icon, Button, Row, Col, Collapse, Input, Image } from 'antd';
import logo from './../img/logo.png';
import cover from './../img/cover-img.png';
import panah from './../img/Vector.png';
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

            <div style={{ background: "linear-gradient(180deg, #F7DD5B 0%, #F1B347 114.44%)", height: "100vh" }}>
                <Header style={{
                    backgroundColor: "rgba(192,192,192,0.0)",
                    height: "80px",
                    width: "100%",
                    zIndex: 2
                }}>
                    <Row>
                        <Col span={10} style={{ marginTop: "20px" }} >
                            <Row>
                                <div>
                                    <Col span={4} style={{ float: "left", marginTop: "10px" }}>
                                        <img src={logo} alt="logo" />
                                    </Col>
                                    <Col span={20} style={{ float: "left", fontSize: '39px', fontWeight: 800, margin: "0px", }}>
                                        <div style={{
                                            float: "left"
                                        }}>
                                            AVESBOX
                                    </div>
                                        <div style={{ float: "left", fontSize: "22px", lineHeight: "normal", fontWeight: "normal" }}>
                                            Layanan Otomatisati Kandang Unggas
                                    </div>
                                    </Col>
                                </div>
                            </Row>
                        </Col>
                        <Col span={14} >
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

                <div className="isi" style={{ fontSize: "50px", marginTop: "90px", backgroundSize: "cover", padding: "0px 80px" }}>
                    <Row>
                        <Col span={14}>
                            <Image
                                width="90%"
                                src={cover}
                            />
                        </Col>
                        <Col span={10} style={{ paddingTop: "50px" }}>
                            <div style={{ fontSize: "64px", fontWeight: 700, lineHeight: "70px" }}>
                                Mitra Kandang Unggas
                                    </div>
                            <div style={{ fontSize: "29px", marginTop: "35px", fontWeight: 700, color: "#DB162F" }}>
                                Pelajari disini
                                        <img src={panah} alt="panah" style={{ marginLeft: "20px" }} />
                                { /* <ArrowRightOutlined /> */}
                            </div>
                        </Col>
                    </Row>

                </div>
            </div >
        )
    }
}

export default Cover
