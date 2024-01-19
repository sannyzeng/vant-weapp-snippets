exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-index-anchor": "@vant/weapp/index-anchor/index"'],
    detail: "IndexBar 索引栏 anchor",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ["<van-index-anchor${1} />"],
    detail: "IndexBar 索引栏 anchor",
    documentation: `用于列表的索引分类显示和快速定位。`,
    attrs: [
      /**
       * IndexAnchor Props
        参数	说明	类型	默认值	版本
        use-slot	是否使用自定义内容的插槽	boolean	false	-
        index	索引字符	string | number	-	-
       */
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
      {
        kind: "Field",
        body: ["index="],
        detail: "index",
        documentation: "索引字符",
        vals: null,
      },
    ],
  },
};
