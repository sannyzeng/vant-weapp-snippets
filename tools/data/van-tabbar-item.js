exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-tabbar-item": "@vant/weapp/tabbar-item/index"'],
    detail: "Tabbar 标签栏Item",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ["<van-tabbar-item${1}>${2:标签}</van-tabbar-item>"],
    detail: "Tabbar 标签栏Item",
    documentation: `底部导航栏，用于在不同页面之间进行切换。`,
    attrs: [
      {
        kind: "Field",
        body: ["name="],
        detail: "name",
        documentation: "标签名称，作为匹配的标识符",
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
        body: ["icon-prefix="],
        detail: "icon-prefix",
        documentation: "图标类名前缀，同 Icon 组件的 class-prefix 属性",
        vals: {
          kind: "Value",
          body: ["van-icon"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["dot="],
        detail: "dot",
        documentation: "是否显示小红点",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["info="],
        detail: "info",
        documentation: "图标右上角提示信息",
        vals: null,
      },
    ],
  },
};
