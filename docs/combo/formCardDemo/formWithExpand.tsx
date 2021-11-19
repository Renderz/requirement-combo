import React, { useState } from 'react';
import { Form, Card, Button, Row, Col, Input, Space } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

const colConfig = {
  sm: 24,
  lg: 12,
  xl: 8,
  xxl: 6,
};

const useExpand = (
  dom1?: JSX.Element,
  dom2?: JSX.Element,
  defaultExpand?: boolean,
) => {
  const [expand, setExpand] = useState<boolean>(defaultExpand || false);

  const toggleExpand = () => {
    setExpand(!expand);
  };

  const expander = (
    <Button onClick={toggleExpand} type="dashed">
      {expand ? (
        <React.Fragment>
          <UpOutlined />
          收起
        </React.Fragment>
      ) : (
        <React.Fragment>
          <DownOutlined />
          展开
        </React.Fragment>
      )}
    </Button>
  );

  // const expanderRow = (
  //   <Col span={24} style={{ textAlign: 'right' }}>
  //     {expander}
  //   </Col>
  // );

  return {
    expand,
    expander,
    dom: (
      <React.Fragment>
        {expand ? (
          <React.Fragment>
            {dom1}
            {dom2}
          </React.Fragment>
        ) : (
          dom1
        )}
        {/* {expanderRow} */}
      </React.Fragment>
    ),
  };
};

export default () => {
  const dom1 = (
    <React.Fragment>
      <Col {...colConfig}>
        <Form.Item name="param1" label="条件1">
          <Input />
        </Form.Item>
      </Col>
      <Col {...colConfig}>
        <Form.Item name="param2" label="条件2">
          <Input />
        </Form.Item>
      </Col>
    </React.Fragment>
  );

  const dom2 = (
    <React.Fragment>
      <Col {...colConfig}>
        <Form.Item name="param3" label="条件3">
          <Input />
        </Form.Item>
      </Col>
      <Col {...colConfig}>
        <Form.Item name="param4" label="条件4">
          <Input />
        </Form.Item>
      </Col>
      <Col {...colConfig}>
        <Form.Item name="param5" label="条件5">
          <Input />
        </Form.Item>
      </Col>
      <Col {...colConfig}>
        <Form.Item name="param6" label="条件6">
          <Input />
        </Form.Item>
      </Col>
      <Col {...colConfig}>
        <Form.Item name="param7" label="条件7">
          <Input />
        </Form.Item>
      </Col>
      <Col {...colConfig}>
        <Form.Item name="param8" label="条件8">
          <Input />
        </Form.Item>
      </Col>
    </React.Fragment>
  );

  const { dom, expander } = useExpand(dom1, dom2, false);

  return (
    <Card
      title="查询表单"
      size="small"
      extra={
        <Space>
          <Button type="primary">查询</Button>
          <Button>重置</Button>
          {expander}
        </Space>
      }
    >
      <Form name="searchForm">
        <Row gutter={16} justify="start">
          {dom}
        </Row>
      </Form>
    </Card>
  );
};
