exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-row": "@vant/weapp/row/index"'],
    detail: "Layout 布局",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ["<van-row${1}></van-row>"],
    detail: "Layout 布局",
    documentation: `Layout 提供了van-row和van-col两个组件来进行行列布局。`,
    attrs: [
      {
        kind: "Field",
        body: ["gutter="],
        detail: "gutter",
        documentation: "列元素之间的间距（单位为 px）",
        vals: null,
      },
    ],
  },
};
