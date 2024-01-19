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
      /**
       * Row Props
        参数	说明	类型	默认值
        gutter	列元素之间的间距（单位为 px）	string | number	-
       */
      {
        kind: "Field",
        body: ["gutter="],
        detail: "gutter",
        documentation: "列元素之间的间距（单位为 px）",
        vals: null,
      },
      /**
       * 外部样式类
        类名	说明
        custom-class	根节点样式类
       */
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
