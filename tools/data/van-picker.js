exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-picker": "@vant/weapp/picker/index"'],
    detail: "Picker 选择器",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ['<van-picker columns="{{ ${1:columns} }}"${2} />'],
    detail: "Picker 选择器",
    documentation: `提供多个选项集合供用户选择，支持单列选择和多列级联，通常与 弹出层 组件配合使用。`,
    attrs: [
      /**
       * Props
        参数	说明	类型	默认值
        columns	对象数组，配置每一列显示的数据	Array	[]
        show-toolbar	是否显示顶部栏	boolean	false
        toolbar-position	顶部栏位置，可选值为bottom	string	top
        title	顶部栏标题	string	''
        loading	是否显示加载状态	boolean	false
        value-key	选项对象中，文字对应的 key	string	text
        item-height	选项高度	number	44
        confirm-button-text	确认按钮文字	string	确认
        cancel-button-text	取消按钮文字	string	取消
        visible-item-count	可见的选项个数	number	6
        default-index	单列选择器的默认选中项索引，
        多列选择器请参考下方的 Columns 配置	number	0
       */
      {
        kind: "Field",
        body: ["columns="],
        detail: "columns",
        documentation: "对象数组，配置每一列显示的数据",
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
      {
        kind: "Field",
        body: ["toolbar-position="],
        detail: "toolbar-position",
        documentation: "顶部栏位置，可选值为bottom",
        vals: {
          kind: "Value",
          body: ["top", "bottom"],
          detail: "",
          documentation: "",
        },
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
        body: ["value-key="],
        detail: "value-key",
        documentation: "选项对象中，文字对应的 key",
        vals: null,
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
        body: ["visible-item-count="],
        detail: "visible-item-count",
        documentation: "可见的选项个数",
        vals: null,
      },
      {
        kind: "Field",
        body: ["default-index="],
        detail: "default-index",
        documentation:
          "单列选择器的默认选中项索引，多列选择器请参考下方的 Columns 配置",
        vals: null,
      },

      /**
       * Events
        Picker 组件的事件会根据 columns 是单列或多列返回不同的参数。

        事件名	说明	参数
        bind:confirm	点击完成按钮时触发	单列：选中值，选中值对应的索引
        多列：所有列选中值，所有列选中值对应的索引
        bind:cancel	点击取消按钮时触发	单列：选中值，选中值对应的索引
        多列：所有列选中值，所有列选中值对应的索引
        bind:change	选项改变时触发	单列：Picker 实例，选中值，选中值对应的索引
        多列：Picker 实例，所有列选中值，当前列对应的索引
       */
      {
        kind: "Event",
        body: ["bind:confirm="],
        detail: "bind:confirm",
        documentation: "点击完成按钮时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:cancel="],
        detail: "bind:cancel",
        documentation: "点击取消按钮时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:change="],
        detail: "bind:change",
        documentation: "选项改变时触发",
        vals: null,
      },

      /**
       * 外部样式类
        类名	说明
        custom-class	根节点样式类
        active-class	选中项样式类
        toolbar-class	顶部栏样式类
        column-class	列样式类
       */
      {
        kind: "Field",
        body: ["custom-class="],
        detail: "custom-class",
        documentation: "根节点样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["active-class="],
        detail: "active-class",
        documentation: "选中项样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["toolbar-class="],
        detail: "toolbar-class",
        documentation: "顶部栏样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["column-class="],
        detail: "column-class",
        documentation: "列样式类",
        vals: null,
      },
    ],
  },
};
