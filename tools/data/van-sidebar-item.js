exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-sidebar-item": "@vant/weapp/sidebar-item/index"'],
    detail: "Sidebar 侧边导航Item",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ["<van-sidebar-item${1} />"],
    detail: "Sidebar 侧边导航Item",
    documentation: `垂直展示的导航栏，用于在不同的内容区域之间进行切换。`,
    attrs: [
      {
        kind: "Field",
        body: ["title="],
        detail: "title",
        documentation: "内容",
        vals: null,
      },
      {
        kind: "Field",
        body: ["dot="],
        detail: "dot",
        documentation: "是否显示右上角小红点",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["badge ="],
        detail: "badge ",
        documentation: "图标右上角徽标的内容",
        vals: null,
      },
      {
        kind: "Field",
        body: ["disabled="],
        detail: "disabled",
        documentation: "是否禁用该项",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Event",
        body: ["bind:click="],
        detail: "bind:click",
        documentation: "点击徽章时触发",
        vals: null,
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
