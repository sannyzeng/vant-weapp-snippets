exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-icon": "@vant/weapp/icon/index"'],
    detail: "Icon 图标",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ["<van-icon${1} />"],
    detail: "Icon 图标",
    documentation: `基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 icon 属性引用。`,
    attrs: [
      /**
       * Props
        参数	说明	类型	默认值
        name	图标名称或图片链接	string	-
        dot	是否显示图标右上角小红点	boolean	false
        info	图标右上角文字提示	string | number	-
        color	图标颜色	string	inherit
        size v1.10.20	图标大小，如 20px，2em，默认单位为px	string | number	inherit
        custom-style	自定义样式	string	-
        class-prefix	类名前缀	string	van-icon
       */
      {
        kind: "Field",
        body: ["name="],
        detail: "name",
        documentation: "图标名称或图片链接",
        vals: null,
      },
      {
        kind: "Field",
        body: ["dot="],
        detail: "dot",
        documentation: "是否显示图标右上角小红点",
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
        documentation: "图标右上角文字提示",
        vals: null,
      },
      {
        kind: "Field",
        body: ["color="],
        detail: "color",
        documentation: "图标颜色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["size="],
        detail: "size",
        documentation: "图标大小，如 20px，2em，默认单位为px",
        vals: null,
      },
      {
        kind: "Field",
        body: ["custom-style="],
        detail: "custom-style",
        documentation: "自定义样式",
        vals: null,
      },
      {
        kind: "Field",
        body: ["class-prefix="],
        detail: "class-prefix",
        documentation: "类名前缀",
        vals: { kind: "Value", body: ["van-icon"], detail: "" },
      },

      /**
       * Events
        事件名	说明	参数
        bind:click	点击图标时触发	-
       */
      {
        kind: "Event",
        body: ["bind:click"],
        detail: "bind:click",
        documentation: "点击图标时触发",
        vals: null,
      },

      /**
       * 外部样式类
        类名	说明
        custom-class	根节点样式类
        info-class	图标右上角文字样式类
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
        body: ["info-class="],
        detail: "info-class",
        documentation: "图标右上角文字样式类",
        vals: null,
      },
    ],
  },
};
