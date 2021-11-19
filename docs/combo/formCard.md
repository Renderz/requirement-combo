---
title: 表单卡片
order: 2
---

# 查询表单卡片

使用卡片对页面进行拆分的结构始终是有效的，卡片容器用于承载同一种功能。而表单卡片用于独立划分一块属于表单的区域。

查询表单卡片一般由**卡片标题**、**操作按钮区域**、**控件区域**构成。

```tsx
import React from 'react';
import { Card, Form, Input } from 'antd';

const { Search } = Input;

export default () => {
  return (
    <React.Fragment>
      <Card size="small">
        <Form name="searchForm" layout="inline">
          <Form.Item name="custno" label="客户号">
            <Search enterButton="查询"></Search>
          </Form.Item>
        </Form>
      </Card>
      <br />
      <Card>其他区域</Card>
    </React.Fragment>
  );
};
```

当查询条件控件能够在一行内展示的时候，建议表单卡片不显示标题栏，并且表单`Form`使用`inline`模式。

## 显示卡片标题

当查询条件无法在一行内展示完全的时候，建议表单卡片显示标题栏。并且表单`Form`使用`horizontal`模式，查询条件分栏显示。查询按钮放置在`Card`的`extra`内。

使用分栏显示时，需要考虑响应式显示。一般不使用 `ant-mobile` 的后管系统不需要考虑特别小屏的显示，其他屏幕尺寸可能需要根据实际业务员配置的电脑屏幕类型定制化合理的响应式配置。

以下配置仅做参考，一般考虑中屏的笔记本电脑与大屏的外接显示器。

```tsx
import React from 'react';
import { Card, Form, Input, Row, Col, Button, Space } from 'antd';

const colConfig = {
  sm: 24,
  lg: 12,
  xl: 8,
  xxl: 6,
};

export default () => {
  return (
    <Card
      title="查询表单"
      size="small"
      extra={
        <Space>
          <Button type="primary">查询</Button>
          <Button>重置</Button>
        </Space>
      }
    >
      <Form name="searchForm">
        <Row gutter={16} justify="start">
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
        </Row>
      </Form>
    </Card>
  );
};
```

## 显示展开、收起

当查询条件较多时，建议只始终显示一些常用的查询条件，其他查询条件通过`展开`、`收起`的方式显示，这样可以保证页面的可用性与清洁度。

<code src="./formCardDemo/formWithExpand.tsx"></code>

## 显示文字提示

一般我们不希望查询文案内容特别长，因为这样会破坏布局结构。但当内容无法控制时，我们可以通过鼠标悬停文字提示的方式去展示。

```tsx
import React from 'react';
import { Card, Form, Input, Row, Col, Button, Space, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const colConfig = {
  sm: 24,
  lg: 12,
  xl: 8,
  xxl: 6,
};

const genTooltip = (text: string, threshold?: number = 5, title?: string) => {
  if (text.length > threshold || title) {
    return (
      <Tooltip title={title || text}>
        {text.slice(0, threshold)}
        <QuestionCircleOutlined />
      </Tooltip>
    );
  }

  return <span>{text}</span>;
};

export default () => {
  return (
    <Card
      title="查询表单"
      size="small"
      extra={
        <Space>
          <Button type="primary">查询</Button>
          <Button>重置</Button>
        </Space>
      }
    >
      <Form name="searchForm">
        <Row gutter={16} justify="start">
          <Col {...colConfig}>
            <Form.Item name="param1" label="客户名">
              <Input />
            </Form.Item>
          </Col>
          <Col {...colConfig}>
            <Form.Item name="param2" label="身份证号">
              <Input />
            </Form.Item>
          </Col>
          <Col {...colConfig}>
            <Form.Item name="param3" label="性别">
              <Input />
            </Form.Item>
          </Col>
          <Col {...colConfig}>
            <Form.Item
              name="param4"
              label={genTooltip('现可用地址', 5, '表示用于现在正在居住的地址')}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col {...colConfig}>
            <Form.Item
              name="param5"
              label={genTooltip('一个非常长的文本文本文本文本文本文本')}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};
```
