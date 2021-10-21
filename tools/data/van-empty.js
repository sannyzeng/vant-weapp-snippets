exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-empty": "@vant/weapp/empty/index"'],
    detail: "Empty 空状态",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ["<van-empty${1} />"],
    detail: "Empty 空状态",
    documentation: `空状态时的占位提示。`,
    attrs: [
      {
        kind: "Field",
        body: ["image="],
        detail: "image",
        documentation:
          "图片类型，可选值为default error network search，支持传入图片 URL",
        vals: {
          kind: "Value",
          body: ["default", "error", "network", "search"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["description="],
        detail: "description",
        documentation: "图片下方的描述文字",
        vals: null,
      },
    ],
    slot: {
      kind: "Value",
      body: ["image", "description"],
      detail: "Empty 空状态 Slot",
      documentation: `
      -	自定义底部内容
      image	自定义图标
      description	自定义描述文字
      `,
      vals: null,
    },
  },
};
