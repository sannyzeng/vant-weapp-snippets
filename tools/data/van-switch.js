exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-switch": "@vant/weapp/switch/index"'],
    detail: "Switch 开关",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ['<van-switch checked="{{ ${1:checked} }}"${2} />'],
    detail: "Switch 开关",
    documentation: `用于在打开和关闭状态之间进行切换。`,
    attrs: [
      /**
       * Props
        参数	说明	类型	默认值
        name	在表单内提交时的标识符	string	-
        checked	开关选中状态	any	false
        loading	是否为加载状态	boolean	false
        disabled	是否为禁用状态	boolean	false
        size	开关尺寸	string	30px
        active-color	打开时的背景色	string	#1989fa
        inactive-color	关闭时的背景色	string	#fff
        active-value	打开时的值	any	true
        inactive-value	关闭时的值	any	false
       */
      {
        kind: "Field",
        body: ["name="],
        detail: "name",
        documentation: "在表单内提交时的标识符",
        vals: null,
      },
      {
        kind: "Field",
        body: ["checked="],
        detail: "checked",
        documentation: "开关选中状态",
        vals: null,
      },
      {
        kind: "Field",
        body: ["loading="],
        detail: "loading",
        documentation: "是否为加载状态",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["disabled="],
        detail: "disabled",
        documentation: "是否为禁用状态",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["size="],
        detail: "size",
        documentation: "开关尺寸",
        vals: null,
      },
      {
        kind: "Field",
        body: ["active-color="],
        detail: "active-color",
        documentation: "打开时的背景色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["inactive-color="],
        detail: "inactive-color",
        documentation: "关闭时的背景色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["active-value="],
        detail: "active-value",
        documentation: "打开时的值",
        vals: null,
      },
      {
        kind: "Field",
        body: ["inactive-value="],
        detail: "inactive-value",
        documentation: "关闭时的值",
        vals: null,
      },

      /**
       * Events
        事件名	说明	参数
        bind:change	开关状态切换回调	event.detail: 是否选中开关
       */
      {
        kind: "Event",
        body: ["bind:change="],
        detail: "bind:change",
        documentation: "开关状态切换回调",
        vals: null,
      },

      /**
       * 外部样式类
        类名	说明
        custom-class	根节点样式类
        node-class	圆点样式类
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
        body: ["node-class="],
        detail: "node-class",
        documentation: "圆点样式类",
        vals: null,
      },
    ],
  },
};
