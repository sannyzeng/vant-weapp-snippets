exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-tab": "@vant/weapp/tab/index"'],
    detail: "Tab 标签页 Tab",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ["<van-tab${1}>${2:内容 1}</van-tab>"],
    detail: "Tab 标签页 Tab",
    documentation: `选项卡组件，用于在不同的内容区域之间进行切换。`,
    attrs: [
      /**
       * Tab Props
        参数	说明	类型	默认值
        name	标签名称，作为匹配的标识符	string | number	标签的索引值
        title	标题	string	-
        disabled	是否禁用标签	boolean	false
        dot	是否显示小红点	boolean	-
        info	图标右上角提示信息	string | number	-
        title-style	自定义标题样式	string	-
       */
      {
        kind: "Field",
        body: ["name="],
        detail: "name",
        documentation: "标签名称，作为匹配的标识符",
        vals: null,
      },
      {
        kind: "Field",
        body: ["title="],
        detail: "title",
        documentation: "标题",
        vals: null,
      },
      {
        kind: "Field",
        body: ["disabled="],
        detail: "disabled",
        documentation: "是否禁用标签",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["dot="],
        detail: "dot",
        documentation: "是否显示小红点",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["info="],
        detail: "info",
        documentation: "图标右上角提示信息",
        vals: null,
      },
      {
        kind: "Field",
        body: ["title-style="],
        detail: "title-style",
        documentation: "自定义标题样式",
        vals: null,
      },
    ],
  },
};
