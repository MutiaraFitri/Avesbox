import React, { Component } from 'react'
import {  Layout, Menu, Button, Row, Col} from 'antd';
import logo from './../img/logo.png';
import { Link } from 'react-router-dom';
const { Header, Footer } = Layout;

export class HeaderComponent extends Component {
    render() {
        return (
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
                            <Menu.Item key="1"><Link style={{ fontSize: "18px", color: "#000", fontWeight: 700, }} to="/">Home</Link></Menu.Item>
                            <Menu.Item key="2"><Link style={{ fontSize: "18px", color: "#000", fontWeight: 700, }} to="/product">Produk</Link></Menu.Item>
                            <Menu.Item key="3"><Link style={{ fontSize: "18px", color: "#000", fontWeight: 700, }} to="/about">Tentang</Link></Menu.Item>
                            <Menu.Item key="4"><Link style={{ fontSize: "18px", color: "#000", fontWeight: 700, }} to="/news">Blog</Link></Menu.Item>
                            <Menu.Item key="5"><Link style={{ fontSize: "18px", color: "#000", fontWeight: 700, }} to="/contact">Kontak</Link></Menu.Item>
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
        )
    }
}

export default HeaderComponent
