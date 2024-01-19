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
      /**
       * Props
        参数	说明	类型	默认值
        color	颜色	string	#c9c9c9
        type	类型，可选值为 spinner	string	circular
        size	加载图标大小，默认单位为 px	string | number	30px
        text-size v1.0.0	文字大小，默认单位为为 px	string | number	14px
        vertical v1.0.0	是否垂直排列图标和文字内容	boolean	false

       */
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
        documentation: "类型，可选值为 spinner",
        vals: { kind: "Value", body: ["circular", "spinner"], detail: "" },
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
        body: ["vertical="],
        detail: "vertical",
        documentation: "是否垂直排列图标和文字内容",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
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
