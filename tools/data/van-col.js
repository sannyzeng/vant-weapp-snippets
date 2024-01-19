exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-col": "@vant/weapp/col/index"'],
    detail: "Button 按钮",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ["<van-col${1}>${2}</van-col>"],
    detail: "Layout 布局",
    documentation: `Layout 提供了van-row和van-col两个组件来进行行列布局。`,
    attrs: [
      /**
       * Col Props
        参数	说明	类型	默认值
        span	列元素宽度	string | number	-
        offset	列元素偏移距离	string | number	-
       */
      {
        kind: "Field",
        body: ["span="],
        detail: "span",
        documentation: "列元素宽度",
        vals: null,
      },
      {
        kind: "Field",
        body: ["offset="],
        detail: "offset",
        documentation: "列元素偏移距离",
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
