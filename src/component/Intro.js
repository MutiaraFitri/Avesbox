import React, { Component } from 'react';
import { Avatar, Layout, Menu, Icon, Button, Row, Col, Collapse, Input } from 'antd';
import ayam from './../img/ayam.png';
import './../../src/index.css';
//import { ArrowRightOutlined } from 'antd';

const { Content } = Layout;
const { Panel } = Collapse;
const { Search } = Input;

export class Intro extends Component {
    render() {
        return (

            <Layout className="layout" style={{ fontFamily: "montserrat", backgroundColor: "#edebe5" }}>
                <Content >
                    <Row>
                        <Col span={24}>
                            <div style={{ float: "left", zIndex: "1", }}>
                                <img src={ayam} alt="cover" style={{ bottom: "0px", position: "absolute", width: "400px " }} />
                            </div>
                            <div style={{

                                textAlign: "center",
                                margin: "0px auto",
                                padding: "150px 0",
                                fontFamily: "montserrat",
                                float: "none", zIndex: "3",
                                width: "70%"
                            }}>
                                <div style={{ fontSize: "34px", lineHeight: "70px" }}>
                                    Apa itu <span style={{ fontWeight: 700 }}>AVES</span>Box ?
                                    </div>
                                <div style={{ fontSize: "29px", marginTop: "35px", color: "black" }}>
                                    <p><span style={{ fontWeight: 700 }}>AVESBOX</span> adalah Layanan Otomasisasi Kandang Unggas yang dapat mengatasi masalah manajemen peternakan dengan menggunakan teknologi Internet of Things.</p>
                                </div>
                                {/* <Button shape="round" icon="download" size="large" style={{ fontWeight: 700, color: "blue", textTransform: "uppercase", letterSpacing: "3px", fontSize: "14px" }}>
                                        Download App
                                    </Button> */}
                            </div>
                        </Col>
                    </Row>
                </Content>
            </Layout>



            // <div style={{ fontFamily: "montserrat", backgroundColor: "#fff" }}>
            //     <div className="isi" style={{ fontSize: "50px", background: "#F4EFEF", height: 800, backgroundSize: "cover" }}>
            //         <div style={{ width: "100%" }}>
            //             <Row>
            //                 <Col xs={2} sm={4} md={6} lg={8} xl={10}>
            //                     <div style={{ float: "left", position: "absolute", zIndex: "1", }}>
            //                         <img src={ayam} alt="cover" style={{ marginTop: "470px" }} />
            //                     </div>
            //                 </Col>
            //                 <Col xs={2} sm={4} md={6} lg={8} xl={24}>
            // <div style={{

            //     textAlign: "center",
            //     margin: "0px auto",
            //     marginTop: "250px", fontFamily: "montserrat",
            //     float: "none", zIndex: "3",
            //     width: "70%"
            // }}>
            //     <div style={{ fontSize: "34px", lineHeight: "70px" }}>
            //         Apa itu <span style={{ fontWeight: 700 }}>AVES</span>Box ?
            //     </div>
            //     <div style={{ fontSize: "29px", marginTop: "35px", color: "black" }}>
            //         <p><span style={{ fontWeight: 700 }}>AVESBOX</span> adalah Layanan Otomasisasi Kandang Unggas yang dapat mengatasi masalah manajemen peternakan dengan menggunakan teknologi Internet of Things.</p>
            //     </div>
            //     {/* <Button shape="round" icon="download" size="large" style={{ fontWeight: 700, color: "blue", textTransform: "uppercase", letterSpacing: "3px", fontSize: "14px" }}>
            //         Download App
            //     </Button> */}
            // </div>
            //                 </Col>
            //             </Row>
            //         </div>
            //     </div>
            // </div >
        )
    }
}


export default Intro
