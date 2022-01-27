import React from 'react';
import CardData from "./cardData"
import { Row, Col, Card } from 'antd'
import { Link } from 'react-router-dom'
function Dashboard(props) {
    const { Meta } = Card;
    

    return (
        <>
            <Row>
                <Col span={24}>
                    <Card>
                        <Row>
                            <h1> Student Management System</h1>
                            <Col>
                                <Link to="/"> Login </Link>
                                <Link to="/dashboard"> Dashboard </Link>
                                <Link to="/list"> List </Link>
                                <Link to="/form"> Form </Link>
                            </Col>
                        </Row>
                    </Card>

                </Col>

            </Row>



            <Row>
            
                <Col span={24}>
                <Row>
                    {CardData.map((item, i) =>{
                        return(
                            <Col span={8} key={i}>
                                <Link to="/list">
                                    
                                   
                                <Card 
                                    hoverable
                                    style={{ width: 340 }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta title={item.title} description={[
                                        <div>
                                            <p> {item.description} </p>
                                            <p> {item.price} </p>
                                            <p> Created by Mashwani React Js expert </p>
                                        </div>
                                    ]} />
                                </Card>
                                </Link>
                            </Col>
                        );    
                    })}
                </Row>
                </Col>
            
            </Row>
        </>
    );
}

export default Dashboard;
