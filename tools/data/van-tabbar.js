exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-tabbar": "@vant/weapp/tabbar/index"'],
    detail: "Tabbar 标签栏",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ['<van-tabbar active="{{ ${1:active} }}"${2}>${3}</van-tabbar>'],
    detail: "Tabbar 标签栏",
    documentation: `底部导航栏，用于在不同页面之间进行切换。`,
    attrs: [
      /**
       * Tabbar Props
        参数	说明	类型	默认值
        active	当前选中标签的索引	number	-
        fixed	是否固定在底部	boolean	true
        placeholder	固定在底部时，是否在标签位置生成一个等高的占位元素	boolean	false
        border	是否展示外边框	boolean	true
        z-index	元素 z-index	number	1
        active-color	选中标签的颜色	string	#1989fa
        inactive-color	未选中标签的颜色	string	#7d7e80
        safe-area-inset-bottom	是否为 iPhoneX 留出底部安全距离	boolean	true
       */
      {
        kind: "Field",
        body: ["active="],
        detail: "active",
        documentation: "当前选中标签的索引",
        vals: null,
      },
      {
        kind: "Field",
        body: ["fixed="],
        detail: "fixed",
        documentation: "是否固定在底部",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["placeholder="],
        detail: "placeholder",
        documentation: "固定在底部时，是否在标签位置生成一个等高的占位元素",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["border="],
        detail: "border",
        documentation: "是否展示外边框",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["z-index="],
        detail: "z-index",
        documentation: "元素 z-index",
        vals: null,
      },
      {
        kind: "Field",
        body: ["active-color="],
        detail: "active-color",
        documentation: "选中标签的颜色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["inactive-color="],
        detail: "inactive-color",
        documentation: "未选中标签的颜色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["safe-area-inset-bottom="],
        detail: "safe-area-inset-bottom",
        documentation: "是否为 iPhoneX 留出底部安全距离",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      /**
       * Tabbar Event
        事件名	说明	参数
        bind:change	切换标签时触发	event.detail: 当前选中标签的名称或索引值
       */
      {
        kind: "Event",
        body: ["bind:change="],
        detail: "bind:change",
        documentation: "切换标签时触发",
        vals: null,
      },
    ],
  },
};
