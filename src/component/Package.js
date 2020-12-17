import React, { Component } from "react";
import { List, Col, Image, Layout, Row } from "antd";
import Axios from 'axios';
import pitik from './../img/pitik.jpeg'

const { Content } = Layout;

export class Package extends Component {
  
  state = {
    persons: []
  }

  componentDidMount() {
    Axios.get(`http://cms.avesbox.com/product`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
  render() {
    const data = [
      { title: "PAKET A",gambar:pitik },
      { title: "PAKET B",gambar:pitik },
      { title: "PAKET C",gambar:pitik },
    ];
    const dataList = this.state.persons;
    return (
      <Layout
        style={{
          fontFamily: "montserrat",
          padding: "70px 20px",
          background: "linear-gradient(180deg, #F7DD5B 0%, #F1B347 114.44%)",
        }}
      >
        <Content 
        className="layout-footer">
          <h2 style={{ textAlign: "center", marginBottom: 50, fontWeight:700, letterSpacing:2,fontSize:"24px" }}>
            PAKET LAYANAN
          </h2>
          <Row gutter={64}>
            {dataList.map((x) => (
              <Col xs={24} md={8} style={{marginTop:"50px"}}>
                <div
                  style={{ background: "white", borderRadius: 10, padding: 10 }}
                >
                  <div
                    style={{
                      background: "red",
                      color: "white",
                      margin: "-35px 20px 0px 20px",
                      padding: 15,
                      borderRadius: 10,
                      textAlign: "center",
                      fontWeight:700,
                      letterSpacing:2
                    }}
                  >
                    {x.title}
                  </div>
                  <Image
                    style={{
                      objectFit: "cover",
                      margin: "20px auto",
                      display: "block",
                    }}
                    alt="Unggas"
                    src={'http://cms.avesbox.com/assets/'+x.gambar}
                  />
                  <List
                    itemLayout="horizontal"
                    dataSource={[{
                      deskripsi:x.deskripsi
                    }]}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={
                            <div
                              style={{
                                width: "20px",
                                height: "20px",
                                backgroundColor: "#F2C03A",
                                borderRadius: "50%",
                                marginTop: "5px",
                              }}
                            ></div>
                          }
                          title={<div>Deskripsi</div>}
                          description={<div style={{ fontSize: "14px" }}>{item.deskripsi}</div>}
                        />
                      </List.Item>
                    )}
                  />
                  <List
                    itemLayout="horizontal"
                    dataSource={[{
                      harga:x.harga
                    }]}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={
                            <div
                              style={{
                                width: "20px",
                                height: "20px",
                                backgroundColor: "#F2C03A",
                                borderRadius: "50%",
                                marginTop: "5px",
                              }}
                            ></div>
                          }
                          title={<div>Harga</div>}
                          description={<div style={{ fontSize: "14px" }}>{item.harga}</div>}
                        />
                      </List.Item>
                    )}
                  />
                  <List
                    itemLayout="horizontal"
                    dataSource={[{
                      stock:x.stock
                    }]}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={
                            <div
                              style={{
                                width: "20px",
                                height: "20px",
                                backgroundColor: "#F2C03A",
                                borderRadius: "50%",
                                marginTop: "5px",
                              }}
                            ></div>
                          }
                          title={<div>Stock</div>}
                          description={<div style={{ fontSize: "14px" }}>{item.stock}</div>}
                        />
                      </List.Item>
                    )}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    );
  }
}

export default Package;
