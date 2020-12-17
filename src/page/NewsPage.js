import React, { Component } from 'react'
import { Row, Col, Image, Card, Input } from 'antd';
import cover from './../img/cover-img.png';
import panah from './../img/Vector.png';
import line from './../img/Line.png';
import './../../src/index.css';
import './../../src/App.css';
import Footer from '../component/Footer';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import HeaderComponent from '../component/HeaderComponent';
import Axios from 'axios';
import _ from "lodash";

const { Meta } = Card;
const { Search } = Input;
export class NewsPage extends Component {
    state = {
        persons: [],
        dataToShow: [],
        search: ''
    }

    componentDidMount() {
        Axios.get(`http://cms.avesbox.com/news`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            search: e.target.value
        })
    }

    renderData() {
        const toDos = _.map(this.state.persons, (values, key) => {
            if (this.state.search) {
                if (values.judul.toLowerCase().search(this.state.search) > -1)
                    return <Col key={key} md={8}>
                        <Card
                            hoverable
                            style={{ width: "90%", padding: "30px", margin: "10px auto", borderRadius: "20px" }}
                            cover={<img alt="Kandang Unggas Otomatis" src={"http://cms.avesbox.com/assets/" + values.gambar} />}
                        >
                            <Meta title={values.judul} description={values.deskripsi} />
                        </Card>
                    </Col>
            }
            else {
                return <Col key={key} md={8}>
                    <Card
                        hoverable
                        style={{ width: "90%", padding: "30px", margin: "10px auto", borderRadius: "20px" }}
                        cover={<img alt="Kandang Unggas Otomatis" src={"http://cms.avesbox.com/assets/" + values.gambar} />}
                    >
                        <Meta title={values.judul} description={values.deskripsi} />
                    </Card>
                </Col>
            }
        }
        )
        if (!_.isEmpty(toDos)) {
            return toDos;
        }
    }

    render() {
        return (
            <div style={{ backgroundColor: "#E5E5E5" }}>
                <div className="layout-cover">
                    <div className="heightCover" style={{ height: "auto", paddingBottom: "50px" }}>
                        <HeaderComponent />

                        <div className="isi" style={{ marginTop: "50px" }}>
                            <Row>
                                <Col xs={0} md={12} style={{ paddingTop: "50px" }}>
                                    <div style={{ fontSize: "40px", fontWeight: 700, lineHeight: "0px" }}>
                                        Ada Kabar apa di Avesbox?
                                    </div>
                                    <div style={{ fontSize: "18px", marginTop: "35px", color: "#000" }}>
                                        Cerita mitra, berita seru. Baca semua artikel soal Avesbox di sini.
                                        <Search placeholder="Cari berita ..."
                                            allowClear
                                            enterButton
                                            size="large"
                                            style={{ marginTop: "20px" }}
                                            onChange={this.handleChange}
                                        />
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
                <div className="layout-footer" style={{ paddingTop: "50px", paddingBottom: "50px" }}>
                    <Row>
                        {this.renderData()}
                    </Row>
                    {/* <div className="pagination">
                        <button className="btn-pagination"><LeftOutlined /></button>
                        <button className="btn-pagination active">1</button>
                        <button className="btn-pagination">2</button>
                        <button className="btn-pagination">3</button>
                        <button className="btn-pagination">4</button>
                        <button className="btn-pagination"><RightOutlined /></button>
                    </div> */}
                </div>
                <Footer />
            </div>
        )
    }
}

export default NewsPage
