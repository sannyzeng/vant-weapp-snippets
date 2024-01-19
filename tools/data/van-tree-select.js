exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-tree-select": "@vant/weapp/tree-select/index"'],
    detail: "TreeSelect 分类选择",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: [
      '<van-tree-select items="{{ ${1:items} }}" main-active-index="{{ ${2:mainActiveIndex} }}" active-id="{{ ${3:activeId} }}"${4} />',
    ],
    detail: "TreeSelect 分类选择",
    documentation: `用于从一组相关联的数据集合中进行选择。`,
    attrs: [
      /**
       * Props
        参数	说明	类型	默认值
        items	分类显示所需的数据	Array	[]
        height	高度，默认单位为px	number | string	300
        main-active-index	左侧选中项的索引	number	0
        active-id	右侧选中项的 id，支持传入数组	string | number | Array	0
        max	右侧项最大选中个数	number	Infinity
        selected-icon v1.5.0	自定义右侧栏选中状态的图标	string	success
       */
      {
        kind: "Field",
        body: ["items="],
        detail: "items",
        documentation: "分类显示所需的数据",
        vals: null,
      },
      {
        kind: "Field",
        body: ["height="],
        detail: "height",
        documentation: "高度，默认单位为px",
        vals: null,
      },
      {
        kind: "Field",
        body: ["main-active-index="],
        detail: "main-active-index",
        documentation: "左侧选中项的索引",
        vals: null,
      },
      {
        kind: "Field",
        body: ["active-id="],
        detail: "active-id",
        documentation: "右侧选中项的 id，支持传入数组",
        vals: null,
      },
      {
        kind: "Field",
        body: ["max="],
        detail: "max",
        documentation: "右侧项最大选中个数",
        vals: null,
      },
      {
        kind: "Field",
        body: ["selected-icon="],
        detail: "selected-icon",
        documentation: "自定义右侧栏选中状态的图标",
        vals: null,
      },
      /**
       * Events
        事件名	说明	回调参数
        bind:click-nav	左侧导航点击时，触发的事件	event.detail.index：被点击的导航的索引
        bind:click-item	右侧选择项被点击时，会触发的事件	event.detail: 该点击项的数据
       */
      {
        kind: "Event",
        body: ["bind:click-nav="],
        detail: "bind:click-nav",
        documentation: "左侧导航点击时，触发的事件",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:click-item="],
        detail: "bind:click-item",
        documentation: "右侧选择项被点击时，会触发的事件",
        vals: null,
      },
      /**
       * 外部样式类
        类名	说明
        main-item-class	左侧选项样式类
        content-item-class	右侧选项样式类
        main-active-class	左侧选项选中样式类
        content-active-class	右侧选项选中样式类
        main-disabled-class	左侧选项禁用样式类
        content-disabled-class	右侧选项禁用样式类
       */
      {
        kind: "Field",
        body: ["main-item-class="],
        detail: "main-item-class",
        documentation: "左侧选项样式类",
        vals: null,
      },
      // content-item-class
      {
        kind: "Field",
        body: ["content-item-class="],
        detail: "content-item-class",
        documentation: "右侧选项样式类",
        vals: null,
      },
      // main-active-class
      {
        kind: "Field",
        body: ["main-active-class="],
        detail: "main-active-class",
        documentation: "左侧选项选中样式类",
        vals: null,
      },
      // content-active-class
      {
        kind: "Field",
        body: ["content-active-class="],
        detail: "content-active-class",
        documentation: "右侧选项选中样式类",
        vals: null,
      },
      // main-disabled-class
      {
        kind: "Field",
        body: ["main-disabled-class="],
        detail: "main-disabled-class",
        documentation: "左侧选项禁用样式类",
        vals: null,
      },
      // content-disabled-class
      {
        kind: "Field",
        body: ["content-disabled-class="],
        detail: "content-disabled-class",
        documentation: "右侧选项禁用样式类",
        vals: null,
      },
    ],
    /**
     * Slots
      名称	说明
      content	自定义右侧区域内容，如果存在 items，则插入在顶部
     */
    slot: {
      kind: "Value",
      body: ["content"],
      detail: "TreeSelect 分类选择 Slot",
      documentation: `
      content	自定义右侧区域内容，如果存在 items，则插入在顶部
      `,
      vals: null,
    },
  },
};
