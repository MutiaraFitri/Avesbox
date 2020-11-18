import React, { Component } from "react";
import { List, Col, Image, Layout, Row } from "antd";

const { Content } = Layout;

export class Package extends Component {
  render() {
    const data = [
      { title: "PAKET A" },
      { title: "PAKET B" },
      { title: "PAKET C" },
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
        className="layout"
        style={{
          fontFamily: "montserrat",
          padding: "20px 20px",
          background: "linear-gradient(180deg, #F7DD5B 0%, #F1B347 114.44%)",
        }}
      >
        <Content style={{ padding: "0 50px" }}>
          <h2 style={{ textAlign: "center", marginBottom: 50 }}>
            PAKET LAYANAN
          </h2>
          <Row gutter={64}>
            {data.map((x) => (
              <Col span={8}>
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
                    }}
                  >
                    {x.title}
                  </div>
                  <img
                    width={260}
                    height={140}
                    style={{
                      objectFit: "cover",
                      margin: "20px auto",
                      display: "block",
                    }}
                    alt="gambar"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
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
