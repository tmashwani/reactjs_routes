import React from 'react';
// import './App.css';
import {Row, Col, Card, List,Avatar,  Table, Tag, Space } from 'antd'
import {Link} from 'react-router-dom'
const { Column, ColumnGroup } = Table;
function ListData() {

  const dataTable = [
    {
      key: '1',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      firstName: 'Jim',
      lastName: 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      firstName: 'Joe',
      lastName: 'Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  


  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];
  return (
    <>
    <Row>
  
      <Col span={24}>
            <Card>
                <Row>
                    <h1> Student Management System</h1>
                    <Col span={6}>
                    <Link to="/"> Login </Link>
                        <Link to="/dashboard"> Dashboard </Link>
                        <Link to="/list"> List </Link>
                        <Link to="/form"> Form </Link>
                    </Col>
                </Row>
            </Card>
        </Col>
       
        <Col span={24}>
        <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
         </List.Item>
    )}
  />     
        </Col>


    </Row>

    <Row>
<Col span={24}>
<Table dataSource={dataTable}>
    <ColumnGroup title="Name">
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
    </ColumnGroup>
    <Column title="Age" dataIndex="age" key="age" />
    <Column title="Address" dataIndex="address" key="address" />
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={tags => (
        <>
          {tags.map(tag => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <Space size="middle">
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
  </Table>
</Col>
    </Row>
    </>
  );
} 

export default ListData;