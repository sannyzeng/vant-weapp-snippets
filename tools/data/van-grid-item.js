exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-grid-item": "@vant/weapp/grid-item/index"'],
    detail: "Grid 宫格Item",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ["<van-grid-item${1} />"],
    detail: "Grid 宫格Item",
    documentation: `宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。`,
    attrs: [
      {
        kind: "Field",
        body: ["text="],
        detail: "text",
        documentation: "文字",
        vals: null,
      },
      {
        kind: "Field",
        body: ["icon="],
        detail: "icon",
        documentation: "图标名称或图片链接，可选值见 Icon 组件",
        vals: null,
      },
      {
        kind: "Field",
        body: ["icon-color="],
        detail: "icon-color",
        documentation: "图标颜色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["icon-prefix="],
        detail: "icon-prefix",
        documentation: "第三方图标前缀",
        vals: null,
      },
      {
        kind: "Field",
        body: ["dot="],
        detail: "dot",
        documentation: "是否显示图标右上角小红点",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["badge="],
        detail: "badge",
        documentation: "图标右上角徽标的内容",
        vals: null,
      },
      {
        kind: "Field",
        body: ["url="],
        detail: "url",
        documentation: "点击后跳转的链接地址",
        vals: null,
      },
      {
        kind: "Field",
        body: ["link-type="],
        detail: "link-type",
        documentation:
          "链接跳转类型，可选值为 navigateTo redirectTo switchTab reLaunch",
        vals: {
          kind: "Value",
          body: ["navigateTo", "redirectTo", "switchTab", "reLaunch"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Event",
        body: ["bind:click="],
        detail: "bind:click",
        documentation: "点击格子时触发",
        vals: null,
      },
      {
        kind: "Field",
        body: ["custom-class="],
        detail: "custom-class",
        documentation: "根节点样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["content-class="],
        detail: "content-class",
        documentation: "内容样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["icon-class="],
        detail: "icon-class",
        documentation: "图标样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["text-class="],
        detail: "text-class",
        documentation: "文本样式类",
        vals: null,
      },
    ],
    slot: {
      kind: "Value",
      body: ["icon", "text"],
      detail: "Grid 宫格Item Slot",
      documentation: `
      -	自定义宫格的所有内容，需要设置use-slot属性
      icon	自定义图标，如果设置了use-slot或者icon属性则不生效
      text	自定义文字，如果设置了use-slot或者text属性则不生效
      `,
      vals: null,
    },
  },
};
