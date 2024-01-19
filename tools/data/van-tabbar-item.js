exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-tabbar-item": "@vant/weapp/tabbar-item/index"'],
    detail: "Tabbar 标签栏Item",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ["<van-tabbar-item${1}>${2:标签}</van-tabbar-item>"],
    detail: "Tabbar 标签栏Item",
    documentation: `底部导航栏，用于在不同页面之间进行切换。`,
    attrs: [
      /**
       * TabbarItem Props
        参数	说明	类型	默认值
        name	标签名称，作为匹配的标识符	string | number	当前标签的索引值
        icon	图标名称或图片链接，可选值见 Icon 组件	string	-
        icon-prefix	图标类名前缀，同 Icon 组件的 class-prefix 属性	string	van-icon
        dot	是否显示小红点	boolean	-
        info	图标右上角提示信息	string | number	-
        url v1.10.13	点击后跳转的链接地址, 需要以 / 开头	string	-
        link-type v1.10.13	链接跳转类型，可选值为 redirectTo、switchTab、reLaunch	string	redirectTo
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
        body: ["icon="],
        detail: "icon",
        documentation: "图标名称或图片链接，可选值见 Icon 组件",
        vals: null,
      },
      {
        kind: "Field",
        body: ["icon-prefix="],
        detail: "icon-prefix",
        documentation: "图标类名前缀，同 Icon 组件的 class-prefix 属性",
        vals: null,
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
        body: ["url="],
        detail: "url",
        documentation: "点击后跳转的链接地址, 需要以 / 开头",
        vals: null,
      },
      {
        kind: "Field",
        body: ["link-type="],
        detail: "link-type",
        documentation: "链接跳转类型，可选值为 redirectTo、switchTab、reLaunch",
        vals: {
          kind: "Value",
          body: ["redirectTo", "switchTab", "reLaunch"],
          detail: "",
          documentation: "",
        },
      },
    ],
    /**
     * TabbarItem Slot
      名称	说明
      icon	未选中时的图标
      icon-active	选中时的图标
     */
    slot: {
      kind: "Value",
      body: ["icon", "icon-active"],
      detail: "Tabbar 标签栏Item Slot",
      documentation: `
      icon	未选中时的图标
      icon-active	选中时的图标
      `,
      vals: null,
    },
  },
};
