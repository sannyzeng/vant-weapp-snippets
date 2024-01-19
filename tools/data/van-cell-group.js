exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-cell-group": "@vant/weapp/cell-group/index"'],
    detail: "Cell 分组",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ["<van-cell-group${1}>${2}</van-cell-group>"],
    detail: "Cell 分组",
    documentation: `Cell 分组。`,
    attrs: [
      /**
       * CellGroup Props
        参数	说明	类型	默认值
        title	分组标题	string	-
        inset v1.7.2	是否展示为圆角卡片风格	boolean	false
        border	是否显示外边框	boolean	true
       */
      {
        kind: "Field",
        body: ["title="],
        detail: "title",
        documentation: "分组标题",
        vals: null,
      },
      {
        kind: "Field",
        body: ["inset="],
        detail: "inset",
        documentation: "是否展示为圆角卡片风格",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["border="],
        detail: "border",
        documentation: "是否显示外边框",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      /**
       * CellGroup 外部样式类
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
