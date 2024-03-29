exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-nav-bar": "@vant/weapp/nav-bar/index"'],
    detail: "NavBar 导航栏",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ["<van-nav-bar${1} />"],
    detail: "NavBar 导航栏",
    documentation: `为页面提供导航功能，常用于页面顶部。`,
    attrs: [
      /**
       * Props
        参数	说明	类型	默认值
        title	标题	string	''
        left-text	左侧文案	string	''
        right-text	右侧文案	string	''
        left-arrow	是否显示左侧箭头	boolean	false
        fixed	是否固定在顶部	boolean	false
        placeholder	固定在顶部时是否开启占位	boolean	false
        border	是否显示下边框	boolean	true
        z-index	元素 z-index	number	1
        custom-style	根节点自定义样式	string	-
        safe-area-inset-top	是否留出顶部安全距离（状态栏高度）	boolean	true
       */
      {
        kind: "Field",
        body: ["title="],
        detail: "title",
        documentation: "标题",
        vals: null,
      },
      {
        kind: "Field",
        body: ["left-text="],
        detail: "left-text",
        documentation: "左侧文案",
        vals: null,
      },
      {
        kind: "Field",
        body: ["right-text="],
        detail: "right-text",
        documentation: "右侧文案",
        vals: null,
      },
      {
        kind: "Field",
        body: ["left-arrow="],
        detail: "left-arrow",
        documentation: "是否显示左侧箭头",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["fixed="],
        detail: "fixed",
        documentation: "是否固定在顶部",
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
        documentation: "固定在顶部时是否开启占位",
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
        documentation: "是否显示下边框",
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
        body: ["custom-style="],
        detail: "custom-style",
        documentation: "根节点自定义样式",
        vals: null,
      },
      {
        kind: "Field",
        body: ["safe-area-inset-top="],
        detail: "safe-area-inset-top",
        documentation: "是否留出顶部安全距离（状态栏高度）",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },

      /**
       * Events
        事件名	说明	参数
        bind:click-left	点击左侧按钮时触发	-
        bind:click-right	点击右侧按钮时触发	-
       */
      {
        kind: "Event",
        body: ["bind:click-left="],
        detail: "bind:click-left",
        documentation: "点击左侧按钮时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:click-right="],
        detail: "bind:click-right",
        documentation: "点击右侧按钮时触发",
        vals: null,
      },
      /**
       * 外部样式类
        类名	说明
        custom-class	根节点样式类
        title-class	标题样式类
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
        body: ["title-class="],
        detail: "title-class",
        documentation: "标题样式类",
        vals: null,
      },
    ],
    /**
     * Slot
      名称	说明
      title	自定义标题
      left	自定义左侧区域内容
      right	自定义右侧区域内容
     */
    slot: {
      kind: "Value",
      body: ["title", "left", "right"],
      detail: "NavBar 导航栏 Slot",
      documentation: `
      title	自定义标题
      left	自定义左侧区域内容
      right	自定义右侧区域内容
      `,
      vals: null,
    },
  },
};
