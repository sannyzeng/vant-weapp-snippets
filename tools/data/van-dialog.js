exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-dialog": "@vant/weapp/dialog/index"'],
    detail: "Dialog 弹出框",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ['<van-dialog id="van-dialog">${1}</van-dialog>'],
    detail: "Dialog 弹出框",
    documentation: `弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作，支持函数调用和组件调用两种方式。`,
    slot: {
      kind: "Value",
      body: ["title"],
      detail: "Dialog 弹出框 Slot",
      documentation: `
      title	自定义title显示内容，如果设置了title属性则不生效
      `,
      vals: null,
    },
    attrs: [
      {
        kind: "Field",
        body: ["custom-class="],
        detail: "custom-class",
        documentation: "根节点样式类",
        vals: null,
      },
    ],
  },
  js: {
    kind: "Snippet",
    body: ['import Dialog from "@vant/weapp/dialog/dialog";'],
    detail: "Dialog 弹出框",
    documentation: `import Dialog`,
  },
  functions: [
    {
      kind: "Function",
      body: ["Dialog({title: '${1:标题}',message: '${2:弹窗内容}'});"],
      detail: "Dialog",
      documentation: "Dialog({title: '${1:标题}',message: '${2:弹窗内容}'});",
    },
    {
      kind: "Function",
      body: [
        "Dialog.confirm({",
        "title: '${1:标题}',",
        "message: '${2:弹窗内容}',",
        "})",
        ".then(() => {",
        "// on confirm",
        "${3}",
        "})",
        ".catch(() => {",
        "// on cancel",
        "${4}",
        "});",
      ],
      detail: "Dialog.confirm",
      documentation: "Dialog.confirm",
    },
    {
      kind: "Function",
      body: [
        "Dialog.alert({",
        "title: '${1:标题}',",
        "message: '${2:弹窗内容}',",
        "})",
        ".then(() => {",
        "// on confirm",
        "${3}",
        "})",
      ],
      detail: "Dialog.alert",
      documentation: "Dialog.alert",
    },
    {
      kind: "Function",
      body: ["Dialog.close();"],
      detail: "Dialog.close",
      documentation: "Dialog.close",
    },
    {
      kind: "Function",
      body: ["Dialog.setDefaultOptions({${1}});"],
      detail: "Dialog.setDefaultOptions",
      documentation: "Dialog.setDefaultOptions",
    },
    {
      kind: "Function",
      body: ["Dialog.resetDefaultOptions();"],
      detail: "Dialog.resetDefaultOptions",
      documentation: "Dialog.resetDefaultOptions",
    },
    {
      kind: "Function",
      body: ["Dialog.stopLoading();"],
      detail: "Dialog.stopLoading",
      documentation: "Dialog.stopLoading",
    },
  ],
};
