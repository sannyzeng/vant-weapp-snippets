exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-index-bar": "@vant/weapp/index-bar/index"'],
    detail: "IndexBar 索引栏",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ["<van-index-bar${1}>${2}</van-index-bar>"],
    detail: "IndexBar 索引栏",
    documentation: `用于列表的索引分类显示和快速定位。`,
    attrs: [
      {
        kind: "Field",
        body: ["index-list="],
        detail: "index-list",
        documentation: "索引字符列表",
        vals: {
          kind: "Value",
          body: ["A-Z"],
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
        body: ["sticky="],
        detail: "sticky",
        documentation: "是否开启锚点自动吸顶",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["sticky-offset-top="],
        detail: "sticky-offset-top",
        documentation: "锚点自动吸顶时与顶部的距离",
        vals: null,
      },
      {
        kind: "Field",
        body: ["highlight-color="],
        detail: "highlight-color",
        documentation: "索引字符高亮颜色",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:select="],
        detail: "bind:select",
        documentation: "选中字符时触发",
        vals: null,
      },
    ],
  },
};
