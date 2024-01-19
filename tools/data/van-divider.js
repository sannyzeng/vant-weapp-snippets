exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-divider": "@vant/weapp/divider/index"'],
    detail: "Divider 分割线",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ["<van-divider${1} />"],
    detail: "Divider 分割线",
    documentation: `用于将内容分隔为多个区域。`,
    attts: [
      /**
       * Props
        参数	说明	类型	默认值
        dashed	虚线	boolean	false
        hairline	细线	boolean	false
        content-position	文本位置，left center right	string	-
        custom-style	自定义样式	string	-
       */
      {
        kind: "Field",
        body: ["dashed="],
        detail: "dashed",
        documentation: "虚线",
        vals: null,
      },
      {
        kind: "Field",
        body: ["hairline="],
        detail: "hairline",
        documentation: "细线",
        vals: null,
      },
      {
        kind: "Field",
        body: ["content-position="],
        detail: "content-position",
        documentation: "文本位置，left center right",
        vals: {
          kind: "Value",
          body: ["left", "center", "right"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["custom-style="],
        detail: "custom-style",
        documentation: "自定义样式",
        vals: null,
      },
    ],
  },
};
