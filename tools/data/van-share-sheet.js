exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-share-sheet": "@vant/weapp/share-sheet/index"'],
    detail: "ShareSheet 分享面板",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ['<van-share-sheet show="{{ ${1:showShare} }}${2}" />'],
    detail: "ShareSheet 分享面板",
    documentation: `底部弹起的分享面板，用于展示各分享渠道对应的操作按钮，不含具体的分享逻辑。`,
    attrs: [
      /**
       * Props
        参数	说明	类型	默认值
        show	是否显示分享面板	boolean	false
        options	分享选项	Option[]	[]
        title	顶部标题	string	-
        cancel-text	取消按钮文字	string	'取消'
        description	标题下方的辅助描述文字	string	-
        duration	动画时长，单位毫秒	number | string	300
        overlay	是否显示遮罩层	boolean	true
        close-on-click-overlay	是否在点击遮罩层后关闭	boolean	true
        safe-area-inset-bottom	是否开启底部安全区适配	boolean	true
        root-portal v1.11.3	是否从页面子树中脱离出来，用于解决各种 fixed 失效问题，微信基础库 >= 2.25.2 	boolean	false
       */
      {
        kind: "Field",
        body: ["show="],
        detail: "show",
        documentation: "是否显示分享面板",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["options="],
        detail: "options",
        documentation: "分享选项",
        vals: null,
      },
      {
        kind: "Field",
        body: ["title="],
        detail: "title",
        documentation: "顶部标题",
        vals: null,
      },
      {
        kind: "Field",
        body: ["cancel-text="],
        detail: "cancel-text",
        documentation: "取消按钮文字",
        vals: null,
      },
      {
        kind: "Field",
        body: ["description="],
        detail: "description",
        documentation: "标题下方的辅助描述文字",
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
        body: ["safe-area-inset-bottom="],
        detail: "safe-area-inset-bottom",
        documentation: "是否开启底部安全区适配",
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
          "是否从页面子树中脱离出来，用于解决各种 fixed 失效问题，微信基础库 >= 2.25.2 ",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },

      /**
       * Events
        事件名	说明	回调参数
        bind:select	点击分享选项时触发	option: Option, index: number
        bind:close	关闭时触发	-
        bind:cancel	点击取消按钮时触发	-
        bind:click-overlay	点击遮罩层时触发
       */
      {
        kind: "Event",
        body: ["bind:select="],
        detail: "bind:select",
        documentation: "点击分享选项时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:close="],
        detail: "bind:close",
        documentation: "关闭时触发",
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
        body: ["bind:click-overlay="],
        detail: "bind:click-overlay",
        documentation: "点击遮罩层时触发",
        vals: null,
      },
    ],
    /**
     * Slots
      名称	说明
      title	自定义顶部标题
      description	自定义描述文字
     */
    slot: {
      kind: "Value",
      body: ["title", "description"],
      detail: "ShareSheet 分享面板 Slot",
      documentation: `
      title	自定义顶部标题
      description	自定义描述文字
      `,
      vals: null,
    },
  },
};
