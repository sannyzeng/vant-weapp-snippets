exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-toast": "@vant/weapp/toast/index"'],
    detail: "Toast 轻提示",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ['<van-toast id="van-toast" />'],
    detail: "Toast 轻提示",
    documentation: `在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。`,
  },
  js: {
    kind: "Snippet",
    body: ['import Toast from "@vant/weapp/toast/toast";'],
    detail: "Toast 轻提示",
    documentation: `import Toast`,
  },
  functions: [
    {
      kind: "Function",
      body: ["Toast('${1:我是提示文案，建议不超过十五字~}');"],
      detail: "Toast",
      documentation: "Toast('${1:我是提示文案，建议不超过十五字~}');",
    },
    {
      kind: "Function",
      body: [
        "Toast.loading({message: '${1:加载中...}',forbidClick: ${2:true},});",
      ],
      detail: "Toast.loading",
      documentation:
        "Toast.loading({message: '加载中...',forbidClick: true,});",
    },
    {
      kind: "Function",
      body: ["Toast.success('${1:成功文案}');"],
      detail: "Toast.success",
      documentation: "Toast.success('成功文案');",
    },
    {
      kind: "Function",
      body: ["Toast.fail('${1:失败文案}');"],
      detail: "Toast.fail",
      documentation: "Toast.fail('失败文案');",
    },
    {
      kind: "Function",
      body: ["Toast.clear();"],
      detail: "Toast.clear",
      documentation: "Toast.clear();",
    },
    {
      kind: "Function",
      body: ["Toast.setDefaultOptions(${1:options});"],
      detail: "Toast.setDefaultOptions",
      documentation: "Toast.setDefaultOptions(options);",
    },
    {
      kind: "Function",
      body: ["Toast.resetDefaultOptions();"],
      detail: "Toast.resetDefaultOptions",
      documentation: "Toast.resetDefaultOptions();",
    },
  ],
};
