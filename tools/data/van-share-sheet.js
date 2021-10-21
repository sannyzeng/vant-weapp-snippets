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
