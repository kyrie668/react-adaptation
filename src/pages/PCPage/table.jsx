import React, { useState, useEffect, useMemo } from "react";
import { Button, Form, Card, Input, message, Select, Spin } from "antd";
import { EditableProTable, ProCard, ProFormField } from "@ant-design/pro-components";
import { useSyncExternalStore } from "react";
const { Item: FormItem } = Form;
const { Option } = Select;

const ProductplanAddOrEditFormView = () => {
  const [loading, setLoading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);

  let type = "edit";

  // 新增提交
  const onOk = () => {
    setSaveLoading(true);
    // 接口参数
    let params = {};
    params["road_sign"] = wayPointDataSource;
    params["input_into"] = inputDataSource;
    params["output"] = outputDataSource;
    console.log("params", params);
    setTimeout(() => {
      setSaveLoading(false);
    }, 2000);
    // history.goBack();
  };

  // 编辑提交
  const onEdit = () => {
    setSaveLoading(true);
    // 接口参数
    let params = {};
    params["road_sign"] = wayPointDataSource;
    params["input_into"] = inputDataSource;
    params["output"] = outputDataSource;
    console.log("params", params);
    // history.goBack();
    setTimeout(() => {
      setSaveLoading(false);
    }, 2000);
  };
  const onCancel = () => {
    // history.goBack();
  };
  const footer = (
    <>
      <Button key="ok" type="primary" loading={saveLoading} onClick={type === "add" ? onOk : onEdit}>
        保存
      </Button>
      ,
      <Button key="cancel" onClick={onCancel}>
        取消
      </Button>
    </>
  );

  useEffect(() => {
    setLoading(true);
    // 判断为新增还是编辑
    if (type === "add") {
      const obj1 = { qua: "第一季度", id: (Math.random() * 1000000).toFixed(0) };
      const obj2 = { qua: "第二季度", id: (Math.random() * 1000000).toFixed(0) };
      const obj3 = { qua: "第三季度", id: (Math.random() * 1000000).toFixed(0) };
      const obj4 = { qua: "第四季度", id: (Math.random() * 1000000).toFixed(0) };
      let fakeData = [];
      fakeData.push(obj1, obj2, obj3, obj4);
      setWayPointDataSource(fakeData);
    } else {
      // 编辑请求接口返回数据...
      // 把数据分配下去
      setWayPointDataSource([
        {
          id: 624748504,
          qua: "第一季度",
          ver: "1.0.1",
          feature: "特征1",
        },
        {
          id: 624691229,
          qua: "第二季度",
          ver: "1.0.2",
          feature: "特征2",
        },
        {
          id: 624799504,
          qua: "第三季度",
          ver: "1.0.3",
          feature: "特征3",
        },
        {
          id: 626691229,
          qua: "第四季度",
          ver: "1.0.4",
          feature: "特征4",
        },
      ]);
      setInputDataSource([
        {
          id: 64748504,
          rgtr: 12,
          hzkff: 15.1,
          wn: 20,
        },
      ]);
      setOutputDataSource([
        {
          id: 6247504,
          narr: 18,
          wide: 22,
          all: 30,
        },
        {
          id: 6241229,
          narr: 18,
          wide: 22,
          all: 30,
        },
      ]);
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const [editableWayKeys, setEditableRowWayKeys] = useState([]);
  const [wayPointDataSource, setWayPointDataSource] = useState([]);
  const [editableInputKeys, setEditableRowInputKeys] = useState([]);
  const [inputDataSource, setInputDataSource] = useState([]);
  const [editableOutputKeys, setEditableRowOutputKeys] = useState([]);
  const [outputDataSource, setOutputDataSource] = useState([]);

  // 计算总投入，实时更新表格值
  const inputColumns = useMemo(() => {
    let colums = [
      {
        title: "人工投入（人·月）",
        dataIndex: "rgtr",
        valueType: "digit",
        width: "15%",
      },
      {
        title: "合作开发费（元·含税）",
        dataIndex: "hzkff",
        valueType: "digit",
        width: "15%",
      },
      {
        title: "委内（元·含税）",
        dataIndex: "wn",
        valueType: "digit",
        width: "15%",
      },
      {
        title: "总投入（元·含税）",
        // dataIndex: "ztr",
        editable: false,
        width: "15%",
        render: (text, record, _, action) => {
          // 人工投入/12 *年费+合作开发费+委内费用=总投入
          let { rgtr, hzkff, wn } = record;
          rgtr = Number(rgtr);
          hzkff = Number(hzkff);
          wn = Number(wn);
          let total = +(rgtr / 12 + hzkff + wn).toFixed(2);
          return <span>{total.toString() === "NaN" ? "" : total}</span>;
        },
      },
      {
        title: "操作",
        valueType: "option",
        width: "15%",
        render: (text, record, _, action) => [
          <a
            key={`${record.id}-edit`}
            onClick={() => {
              action?.startEditable?.(record.id);
            }}
          >
            编辑
          </a>,
          <a
            key={`${record.id}-delete`}
            onClick={() => {
              setInputDataSource(inputDataSource.filter((item) => item.id !== record.id));
            }}
          >
            删除
          </a>,
        ],
      },
    ];
    return colums;
  }, [inputDataSource]);
  const wayPointColumns = [
    {
      title: "时间",
      dataIndex: "qua",
      // 第一行不允许编辑
      editable: false,
      width: "15%",
    },
    {
      title: "版本号",
      dataIndex: "ver",
      width: "30%",
    },
    {
      title: "技术特征",
      dataIndex: "feature",
      width: "30%",
    },

    {
      title: "操作",
      valueType: "option",
      width: "15%",
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </a>,
        <a
          key="delete"
          onClick={() => {
            let newData = JSON.parse(JSON.stringify(wayPointDataSource));
            let h = newData.findIndex((item) => item.id === record.id);
            const { qua, id } = newData[h];
            newData[h] = { qua, id };
            setWayPointDataSource(newData);
          }}
        >
          删除
        </a>,
      ],
    },
  ];
  const outputColumns = [
    {
      title: "窄口径",
      dataIndex: "narr",
      width: "15%",
    },
    {
      title: "宽口径收入（拉动收入）",
      dataIndex: "wide",
      width: "15%",
    },
    {
      title: "全口径（赋能价值）",
      dataIndex: "all",
      width: "15%",
    },
    {
      title: "操作",
      valueType: "option",
      width: "15%",
      render: (text, record, _, action) => [
        <a
          key={`${record.id}-edit`}
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </a>,
        <a
          key={`${record.id}-delete`}
          onClick={() => {
            setOutputDataSource(outputDataSource.filter((item) => item.id !== record.id));
          }}
        >
          删除
        </a>,
      ],
    },
  ];

  return (
    <div
    // loading={loading}
    // footer={footer}
    >
      <Card className="table-card" title="路标" style={{ marginTop: "20px", marginBottom: "20px" }}>
        <EditableProTable
          rowKey="id"
          key="wayPoint-key"
          loading={loading}
          columns={wayPointColumns}
          recordCreatorProps={false}
          value={wayPointDataSource}
          onChange={setWayPointDataSource}
          editable={{
            type: "multiple",
            editableWayKeys,
            onSave: async (rowKey, data, row) => {
              console.log(rowKey, data, row);
              return new Promise((resolve, reject) => {
                const newData = JSON.parse(JSON.stringify(wayPointDataSource));
                let h = newData.findIndex((item) => item.id === rowKey);
                // 若能匹配id，则为修改数据项
                if (h > -1) {
                  newData[h] = data;
                  setWayPointDataSource(newData);
                  resolve(true);
                }
                // 否则为新增数据项
                else {
                  setWayPointDataSource([...newData, data]);
                  resolve(true);
                }
              });
            },
            onChange: setEditableRowWayKeys,
            // 去掉删除按钮
            actionRender: (row, config, defaultDom) => {
              return [defaultDom.save, defaultDom.cancel];
            },
          }}
        />
      </Card>
      <Card className="table-card" title="投入" style={{ marginTop: "20px", marginBottom: "20px" }}>
        <EditableProTable
          rowKey="id"
          key="input-key"
          maxLength={1}
          loading={loading}
          recordCreatorProps={{ record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),creatorButtonText:'添加投入' }}
          columns={inputColumns}
          value={inputDataSource}
          onChange={setInputDataSource}
          editable={{
            type: "multiple",
            editableInputKeys,
            onSave: async (rowKey, data, row) => {
              console.log(rowKey, data, row);
              return new Promise((resolve, reject) => {
                const newData = JSON.parse(JSON.stringify(inputDataSource));
                let h = newData.findIndex((item) => item.id === rowKey);
                if (h > -1) {
                  newData[h] = data;
                  setInputDataSource(newData);
                  resolve(true);
                } else {
                  setInputDataSource([...newData, data]);
                  resolve(true);
                }
              });
            },
            onChange: setEditableRowInputKeys,
          }}
        />
      </Card>
      <Card className="table-card" title="产出" style={{ marginTop: "20px", marginBottom: "20px" }}>
        <EditableProTable
          rowKey="id"
          key="output-key"
          loading={loading}
          columns={outputColumns}
          recordCreatorProps={{ record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),creatorButtonText:'添加产出' }}
          value={outputDataSource}
          onChange={setOutputDataSource}
          editable={{
            type: "multiple",
            editableOutputKeys,
            onSave: async (rowKey, data, row) => {
              console.log(rowKey, data, row);
              return new Promise((resolve, reject) => {
                const newData = JSON.parse(JSON.stringify(outputDataSource));
                let h = newData.findIndex((item) => item.id === rowKey);
                if (h > -1) {
                  newData[h] = data;
                  setOutputDataSource(newData);
                  resolve(true);
                } else {
                  setOutputDataSource([...newData, data]);
                  resolve(true);
                }
              });
            },
            onChange: setEditableRowOutputKeys,
          }}
        />
      </Card>
      <Button type="primary" onClick={onOk} loading={saveLoading}>
        保存
      </Button>
    </div>
  );
};

export default ProductplanAddOrEditFormView;
