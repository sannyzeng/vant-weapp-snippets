exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-config-provider": "@vant/weapp/config-provider/index"'],
    detail: "ConfigProvider 全局配置",
    documentation: `在app.json或index.json中引入组件，用于配置 Vant Weapp 组件的主题样式`,
  },
  wxml: {
    kind: "Snippet",
    body: [
      '<van-config-provider theme-vars="{{ ${1:themeVars} }}">${2}</van-config-provider>',
    ],
    detail: "ConfigProvider 全局配置",
    documentation:
      "在app.json或index.json中引入组件，用于配置 Vant Weapp 组件的主题样式",
    attrs: [
      {
        kind: "Field",
        body: ["theme-vars="],
        detail: "theme-vars",
        documentation: "自定义主题变量",
        vals: null,
      },
    ],
  },
};
