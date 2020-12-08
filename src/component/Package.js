import React, { Component } from "react";
import { List, Col, Image, Layout, Row } from "antd";
import pitik from './../img/pitik.jpeg'

const { Content } = Layout;

export class Package extends Component {
  render() {
    const data = [
      { title: "PAKET A",gambar:pitik },
      { title: "PAKET B",gambar:pitik },
      { title: "PAKET C",gambar:pitik },
    ];
    const dataList = [
        {
            title: 'Terintegrasi dengan semua jenis kandang ayam broiler',
            description:'Baik itu bertipe open, closed house, dan tipe semi closed house.'
        },
        {
            title: 'Device dikembangkan sesuai kebutuhan kandang',
            description:'Dapat disesuaikan secara mandiri dengan kebutuhan kandang peternak.'
        },
        {
            title: 'Avesbox dapat diakses melalui mobile dan website',
            description:'Kemudahan dalam mobilitas pemantauan dan mengendalikan kebutuhan kandang.'
        }
    ];
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
            {data.map((x) => (
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
                    src={x.gambar}
                  />
                  <List
                    itemLayout="horizontal"
                    dataSource={dataList}
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
                          title={
                            <div
                              
                            >
                              {item.title}
                            </div>
                          }
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
