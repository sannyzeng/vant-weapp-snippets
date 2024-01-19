exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-area": "@vant/weapp/area/index"'],
    detail: "Area 省市区选择",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ['<van-area area-list="{{ ${1:areaList} }}"${2} />'],
    detail: "Area 省市区选择",
    documentation: `省市区选择组件通常与 弹出层 组件配合使用。`,
    attrs: [
      /**
       * Props
        参数	说明	类型	默认值
        value	当前选中的省市区code	string	-
        title	顶部栏标题	string	-
        area-list	省市区数据，格式见下方	object	-
        columns-num	省市区显示列数，3-省市区，2-省市，1-省	number	3
        columns-placeholder	列占位提示文字	string[]	[]
        loading	是否显示加载状态	boolean	false
        item-height	选项高度	number	44
        visible-item-count	可见的选项个数	number	6
        confirm-button-text	确认按钮文字	string	确认
        cancel-button-text	取消按钮文字	string	取消
        show-toolbar 1.10.3	是否显示顶部栏	boolean	true
       */
      {
        kind: "Field",
        body: ["value="],
        detail: "value",
        documentation: "当前选中的省市区code",
        vals: null,
      },
      {
        kind: "Field",
        body: ["title="],
        detail: "title",
        documentation: "顶部栏标题",
        vals: null,
      },
      {
        kind: "Field",
        body: ["area-list="],
        detail: "area-list",
        documentation: "省市区数据，格式见下方",
        vals: null,
      },
      {
        kind: "Field",
        body: ["columns-num="],
        detail: "columns-num",
        documentation: "省市区显示列数，3-省市区，2-省市，1-省",
        vals: null,
      },
      {
        kind: "Field",
        body: ["columns-placeholder="],
        detail: "columns-placeholder",
        documentation: "列占位提示文字",
        vals: {
          kind: "Value",
          body: ["[]"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["loading="],
        detail: "loading",
        documentation: "是否显示加载状态",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["item-height="],
        detail: "item-height",
        documentation: "选项高度",
        vals: null,
      },
      {
        kind: "Field",
        body: ["visible-item-count="],
        detail: "visible-item-count",
        documentation: "可见的选项个数",
        vals: null,
      },
      {
        kind: "Field",
        body: ["confirm-button-text="],
        detail: "confirm-button-text",
        documentation: "确认按钮文字",
        vals: null,
      },
      {
        kind: "Field",
        body: ["cancel-button-text="],
        detail: "cancel-button-text",
        documentation: "取消按钮文字",
        vals: null,
      },
      {
        kind: "Field",
        body: ["show-toolbar="],
        detail: "show-toolbar",
        documentation: "是否显示顶部栏",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      /**
       * Events
        事件	说明	回调参数
        bind:confirm	点击右上方完成按钮	一个数组参数，具体格式看下方数据格式章节
        bind:cancel	点击取消按钮时	-
        bind:change	选项改变时触发	Picker 实例，所有列选中值，当前列对应的索引
       */
      {
        kind: "Event",
        body: ["bind:confirm="],
        detail: "bind:confirm",
        documentation: "点击右上方完成按钮",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:cancel="],
        detail: "bind:cancel",
        documentation: "点击取消按钮时",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:change="],
        detail: "bind:change",
        documentation: "选项改变时触发",
        vals: null,
      },
    ],
  },
};
