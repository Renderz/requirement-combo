---
title: 表单卡片
order: 2
---

## 表单卡片

使用卡片对页面进行拆分的结构始终是有效的，卡片容器用于承载同一种功能。而表单卡片用于独立划分一块属于表单的区域。

### 查询表单卡片

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
