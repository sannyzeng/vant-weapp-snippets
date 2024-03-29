exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-popup": "@vant/weapp/popup/index"'],
    detail: "Popup 弹出层",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ['<van-popup show="{{ ${1:show} }}"${2}>${3:内容}</van-popup>'],
    detail: "Popup 弹出层",
    documentation: `弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。`,
    attrs: [
      /**
       * Props
        参数	说明	类型	默认值
        show	是否显示弹出层	boolean	false
        z-index	z-index 层级	number	100
        overlay	是否显示遮罩层	boolean	true
        position	弹出位置，可选值为 top bottom right left	string	center
        duration	动画时长，单位为毫秒	number | object	300
        round	是否显示圆角	boolean	false
        custom-style	自定义弹出层样式	string	''
        overlay-style	自定义遮罩层样式	string	''
        close-on-click-overlay	是否在点击遮罩层后关闭	boolean	true
        closeable	是否显示关闭图标	boolean	false
        close-icon	关闭图标名称或图片链接	string	cross
        close-icon-position	关闭图标位置，可选值为 top-left
        bottom-left bottom-right	string	top-right
        safe-area-inset-bottom	是否为 iPhoneX 留出底部安全距离	boolean	true
        safe-area-inset-top	是否留出顶部安全距离（状态栏高度）	boolean	false
        safe-area-tab-bar	是否留出底部 tabbar 安全距离（在使用 tabbar 组件 & 小程序自定义 tabbar 时，popup 组件层级无法盖住 tabbar）	boolean	false
        lock-scroll v1.7.3	是否锁定背景滚动	boolean	true
        root-portal v1.10.14	是否从页面中脱离出来，用于解决各种 fixed 失效问题，微信基础库 >= 2.25.2 	boolean	false
       */
      {
        kind: "Field",
        body: ["show="],
        detail: "show",
        documentation: "是否显示弹出层",
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
        documentation: "z-index 层级",
        vals: null,
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
        body: ["position="],
        detail: "position",
        documentation: "弹出位置，可选值为 top bottom right left",
        vals: {
          kind: "Value",
          body: ["top", "bottom", "right", "left"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["duration="],
        detail: "duration",
        documentation: "动画时长，单位为毫秒",
        vals: null,
      },
      {
        kind: "Field",
        body: ["round="],
        detail: "round",
        documentation: "是否显示圆角",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["custom-style="],
        detail: "custom-style",
        documentation: "自定义弹出层样式",
        vals: null,
      },
      {
        kind: "Field",
        body: ["overlay-style="],
        detail: "overlay-style",
        documentation: "自定义遮罩层样式",
        vals: null,
      },
      {
        kind: "Field",
        body: ["close-on-click-overlay="],
        detail: "close-on-click-overlay",
        documentation: "是否在点击遮罩层后关闭",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["closeable="],
        detail: "closeable",
        documentation: "是否显示关闭图标",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["close-icon="],
        detail: "close-icon",
        documentation: "关闭图标名称或图片链接",
        vals: null,
      },
      {
        kind: "Field",
        body: ["close-icon-position="],
        detail: "close-icon-position",
        documentation:
          "关闭图标位置，可选值为 top-left bottom-left bottom-right top-right",
        vals: {
          kind: "Value",
          body: ["top-left", "bottom-left", "bottom-right", "top-right"],
          detail: "",
          documentation: "",
        },
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
      {
        kind: "Field",
        body: ["safe-area-tab-bar="],
        detail: "safe-area-tab-bar",
        documentation:
          "是否留出底部 tabbar 安全距离（在使用 tabbar 组件 & 小程序自定义 tabbar 时，popup 组件层级无法盖住 tabbar）",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["lock-scroll="],
        detail: "lock-scroll",
        documentation: "是否锁定背景滚动",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["root-portal="],
        detail: "root-portal",
        documentation:
          "是否从页面中脱离出来，用于解决各种 fixed 失效问题，微信基础库 >= 2.25.2 ",
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
        bind:close	关闭弹出层时触发	-
        bind:click-overlay	点击遮罩层时触发	-
        bind:before-enter	进入前触发	-
        bind:enter	进入中触发	-
        bind:after-enter	进入后触发	-
        bind:before-leave	离开前触发	-
        bind:leave	离开中触发	-
        bind:after-leave	离开后触发	-
       */
      {
        kind: "Event",
        body: ["bind:close"],
        detail: "bind:close",
        documentation: "关闭弹出层时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:click-overlay"],
        detail: "bind:click-overlay",
        documentation: "点击遮罩层时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:before-enter"],
        detail: "bind:before-enter",
        documentation: "进入前触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:enter"],
        detail: "bind:enter",
        documentation: "进入中触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:after-enter"],
        detail: "bind:after-enter",
        documentation: "进入后触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:before-leave"],
        detail: "bind:before-leave",
        documentation: "离开前触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:leave"],
        detail: "bind:leave",
        documentation: "离开中触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:after-leave"],
        detail: "bind:after-leave",
        documentation: "离开后触发",
        vals: null,
      },

      /**
       * 外部样式类
        类名	说明
        custom-class	根节点样式类
       */
      {
        kind: "Field",
        body: ["custom-class="],
        detail: "custom-class",
        documentation: "根节点样式类",
        vals: null,
      },
    ],
  },
};
