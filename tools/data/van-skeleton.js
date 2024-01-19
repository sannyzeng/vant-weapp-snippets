exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-skeleton": "@vant/weapp/skeleton/index"'],
    detail: "Skeleton 骨架屏",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ['<van-skeleton row="${1:3}"${2} />'],
    detail: "Skeleton 骨架屏",
    documentation: `用于在内容加载过程中展示一组占位图形。`,
    attrs: [
      /**
       * Props
        参数	说明	类型	默认值
        row	段落占位图行数	number	0
        row-width	段落占位图宽度，可传数组来设置每一行的宽度	string | string[]	100%
        title	是否显示标题占位图	boolean	false
        title-width	标题占位图宽度	string | number	40%
        avatar	是否显示头像占位图	boolean	false
        avatar-size	头像占位图大小	string | number	32px
        avatar-shape	头像占位图形状，可选值为square	string	round
        loading	是否显示占位图，传false时会展示子组件内容	boolean	true
        animate	是否开启动画	boolean	true
       */
      {
        kind: "Field",
        body: ["row="],
        detail: "row",
        documentation: "段落占位图行数",
        vals: null,
      },
      {
        kind: "Field",
        body: ["row-width="],
        detail: "row-width",
        documentation: "段落占位图宽度，可传数组来设置每一行的宽度",
        vals: null,
      },
      {
        kind: "Field",
        body: ["title="],
        detail: "title",
        documentation: "是否显示标题占位图",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["title-width="],
        detail: "title-width",
        documentation: "标题占位图宽度",
        vals: null,
      },
      {
        kind: "Field",
        body: ["avatar="],
        detail: "avatar",
        documentation: "是否显示头像占位图",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["avatar-size="],
        detail: "avatar-size",
        documentation: "头像占位图大小",
        vals: null,
      },
      {
        kind: "Field",
        body: ["avatar-shape="],
        detail: "avatar-shape",
        documentation: "头像占位图形状，可选值为square",
        vals: null,
      },
      {
        kind: "Field",
        body: ["loading="],
        detail: "loading",
        documentation: "是否显示占位图，传false时会展示子组件内容",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["animate="],
        detail: "animate",
        documentation: "是否开启动画",
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
        row-class	段落占位样式类
        avatar-class	头像占位样式类
        title-class	标题占位样式类
       */
      {
        kind: "Field",
        body: ["custom-class="],
        detail: "custom-class",
        documentation: "根节点样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["row-class="],
        detail: "row-class",
        documentation: "段落占位样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["avatar-class="],
        detail: "avatar-class",
        documentation: "头像占位样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["title-class="],
        detail: "title-class",
        documentation: "标题占位样式类",
        vals: null,
      },
    ],
  },
};
