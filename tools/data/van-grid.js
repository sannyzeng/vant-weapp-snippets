exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-grid": "@vant/weapp/grid/index"'],
    detail: "Grid 宫格",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ["<van-grid${1}>${2}</van-grid>"],
    detail: "Grid 宫格",
    documentation: `宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。`,
    attrs: [
      /**
       * Grid Props
        参数	说明	类型	默认值
        column-num	列数	number	4
        icon-size v1.3.2	图标大小，默认单位为px	string	28px
        gutter	格子之间的间距，默认单位为px	string | number	0
        border	是否显示边框	boolean	true
        center	是否将格子内容居中显示	boolean	true
        square	是否将格子固定为正方形	boolean	false
        clickable	是否开启格子点击反馈	boolean	false
        direction	格子内容排列的方向，可选值为 horizontal	string	vertical
        reverse v1.7.0	是否调换图标和文本的位置	boolean	false
        use-slot	是否使用自定义内容的插槽	boolean	false
       */
      {
        kind: "Field",
        body: ["column-num="],
        detail: "column-num",
        documentation: "列数",
        vals: null,
      },
      {
        kind: "Field",
        body: ["icon-size="],
        detail: "icon-size",
        documentation: "图标大小，默认单位为px",
        vals: null,
      },
      {
        kind: "Field",
        body: ["gutter="],
        detail: "gutter",
        documentation: "格子之间的间距，默认单位为px",
        vals: null,
      },
      {
        kind: "Field",
        body: ["border="],
        detail: "border",
        documentation: "是否显示边框",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["center="],
        detail: "center",
        documentation: "是否将格子内容居中显示",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["square="],
        detail: "square",
        documentation: "是否将格子固定为正方形",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["clickable="],
        detail: "clickable",
        documentation: "是否开启格子点击反馈",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["direction="],
        detail: "direction",
        documentation: "格子内容排列的方向，可选值为 horizontal",
        vals: null,
      },
      {
        kind: "Field",
        body: ["reverse="],
        detail: "reverse",
        documentation: "是否调换图标和文本的位置",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["use-slot="],
        detail: "use-slot",
        documentation: "是否使用自定义内容的插槽",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },

      /**
       * Grid 外部样式类
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
