exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-loading": "@vant/weapp/loading/index"'],
    detail: "Loading 加载",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ["<van-loading${1} />"],
    detail: "Loading 加载",
    documentation: `加载图标，用于表示加载中的过渡状态。`,
    attrs: [
      {
        kind: "Field",
        body: ["color="],
        detail: "color",
        documentation: "颜色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["type="],
        detail: "type",
        documentation: "类型，可选值为circular spinner",
        vals: {
          kind: "Value",
          body: ["circular", "spinner"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["size="],
        detail: "size",
        documentation: "加载图标大小，默认单位为 px",
        vals: null,
      },
      {
        kind: "Field",
        body: ["text-size="],
        detail: "text-size",
        documentation: "文字大小，默认单位为为 px",
        vals: null,
      },
      {
        kind: "Field",
        body: ["vertical ="],
        detail: "vertical ",
        documentation: "是否垂直排列图标和文字内容",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
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
