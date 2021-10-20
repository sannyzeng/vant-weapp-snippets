exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-sidebar": "@vant/weapp/sidebar/index"'],
    detail: "Sidebar 侧边导航",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: [
      '<van-sidebar active-key="{{ ${1:activeKey} }}"${2}>${3}</van-sidebar>',
    ],
    detail: "Sidebar 侧边导航",
    documentation: `垂直展示的导航栏，用于在不同的内容区域之间进行切换。`,
    attrs: [
      {
        kind: "Field",
        body: ["activeKey="],
        detail: "activeKey",
        documentation: "选中项的索引",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:change="],
        detail: "bind:change",
        documentation: "切换徽章时触发",
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
