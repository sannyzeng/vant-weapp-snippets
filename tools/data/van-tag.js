exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-tag": "@vant/weapp/tag/index"'],
    detail: "Tag 标签",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ["<van-tag${1}>${2:标签}</van-tag>"],
    detail: "Tag 标签",
    documentation: `用于标记关键词和概括主要内容。`,
    attrs: [
      /**
       * Props
        参数	说明	类型	默认值
        type	类型，可选值为 primary success danger warning	string	-
        size	大小, 可选值为 large medium	string	-
        color	标签颜色	string	-
        plain	是否为空心样式	boolean	false
        round	是否为圆角样式	boolean	false
        mark	是否为标记样式	boolean	false
        text-color	文本颜色，优先级高于 color 属性	string	white
        closeable	是否为可关闭标签	boolean	false
       */
      {
        kind: "Field",
        body: ["type="],
        detail: "type",
        documentation: "类型，可选值为 primary success danger warning",
        vals: {
          kind: "Value",
          body: ["primary", "success", "danger", "warning"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["size="],
        detail: "size",
        documentation: "大小, 可选值为 large medium",
        vals: {
          kind: "Value",
          body: ["large", "medium"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["color="],
        detail: "color",
        documentation: "标签颜色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["plain="],
        detail: "plain",
        documentation: "是否为空心样式",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["round="],
        detail: "round",
        documentation: "是否为圆角样式",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["mark="],
        detail: "mark",
        documentation: "是否为标记样式",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["text-color="],
        detail: "text-color",
        documentation: "文本颜色，优先级高于 color 属性",
        vals: null,
      },
      {
        kind: "Field",
        body: ["closeable="],
        detail: "closeable",
        documentation: "是否为可关闭标签",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },

      /**
       * Events
        事件名	说明	回调参数
        bind:close	关闭标签时触发	-
       */
      {
        kind: "Event",
        body: ["bind:close"],
        detail: "关闭标签时触发",
        documentation: "-",
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
