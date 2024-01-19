exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-dropdown-menu": "@vant/weapp/dropdown-menu/index"'],
    detail: "DropdownMenu 下拉菜单",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ["<van-dropdown-menu${1}>${2}</van-dropdown-menu>"],
    detail: "DropdownMenu 下拉菜单",
    documentation: `向下弹出的菜单列表。`,
    attrs: [
      /**
       * DropdownMenu Props
        参数	说明	类型	默认值
        active-color	菜单标题和选项的选中态颜色	string	#ee0a24
        z-index	菜单栏 z-index 层级	number	10
        duration	动画时长，单位毫秒	number	200
        direction	菜单展开方向，可选值为 up	string	down
        overlay	是否显示遮罩层	boolean	true
        safe-area-tab-bar v1.10.14	是否留出底部 tabbar 安全距离	boolean	false
        close-on-click-overlay	是否在点击遮罩层后关闭菜单	boolean	true
        close-on-click-outside	是否在点击外部 menu 后关闭菜单	boolean	true
       */
      {
        kind: "Field",
        body: ["active-color="],
        detail: "active-color",
        documentation: "菜单标题和选项的选中态颜色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["z-index="],
        detail: "z-index",
        documentation: "菜单栏 z-index 层级",
        vals: null,
      },
      {
        kind: "Field",
        body: ["duration="],
        detail: "duration",
        documentation: "动画时长，单位毫秒",
        vals: null,
      },
      {
        kind: "Field",
        body: ["direction="],
        detail: "direction",
        documentation: "菜单展开方向，可选值为 up",
        vals: { kind: "Value", body: ["down", "up"], detail: "" },
      },
      {
        kind: "Field",
        body: ["overlay="],
        detail: "overlay",
        documentation: "是否显示遮罩层",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["safe-area-tab-bar="],
        detail: "safe-area-tab-bar",
        documentation: "是否留出底部 tabbar 安全距离",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["close-on-click-overlay="],
        detail: "close-on-click-overlay",
        documentation: "是否在点击遮罩层后关闭菜单",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["close-on-click-outside="],
        detail: "close-on-click-outside",
        documentation: "是否在点击外部 menu 后关闭菜单",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },

      /**
       * DropdownMenu 外部样式类
        类名	说明
        custom-class	根节点样式类
        title-class v1.10.7	选中项样式类
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
        documentation: "选中项样式类",
        vals: null,
      },
    ],
  },
};
