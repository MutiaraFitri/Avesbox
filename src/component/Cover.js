import React, { Component } from 'react'
import { Avatar, Layout, Menu, Icon, Button, Row, Col, Collapse, Input, Image } from 'antd';
import logo from './../img/logo.png';
import cover from './../img/cover-img.png';
import panah from './../img/Vector.png';
import line from './../img/Line.png';
import './../../src/index.css';
import './../../src/App.css';
import HeaderComponent from './HeaderComponent';
import { ArrowRightOutlined  } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Content } = Layout;
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
                                    alt="Mitra kandang Unggas Avesbox"
                                />
                            </Col>
                            <Col xs={0} md={10} style={{ paddingTop: "50px" }}>
                                <div style={{ fontSize: "64px", fontWeight: 700, lineHeight: "70px" }}>
                                    Mitra Kandang Unggas
                                    </div>
                                <Link to="/about" className="pelajari" style={{ fontSize: "29px", marginTop: "35px", fontWeight: 700, color: "#DB162F" }}>
                                    Pelajari disini
                                    {<ArrowRightOutlined className="arrow" />}
                                </Link>
                            </Col>


                            <div style={{ marginTop: "-50px", clear: "both", marginBottom: "-20px" }}>
                                <Col xs={24} md={0} style={{ marginTop: "2px", backgroundColor: "#f0f2f5", height: "50px", borderRadius: "50px 50px 0px 0px" }}>
                                </Col>
                                <Col xs={24} md={0} style={{ clear: "both", backgroundColor: "#f0f2f5", marginTop: "-2px" }}>
                                    <div className="title-cover">
                                        Mitra Kandang Unggas
                                    </div>
                                    <Link to="/about" className="title-pelajari">
                                        Pelajari disini
                                        {<ArrowRightOutlined className="arrow" />}
                                    </Link>
                                    <div className="title-description">
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
