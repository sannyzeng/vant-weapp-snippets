exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-notify": "@vant/weapp/notify/index"'],
    detail: "Notify 消息提示",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ['<van-notify id="van-notify" />'],
    detail: "Notify 消息提示",
    documentation: `在页面顶部展示消息提示，支持函数调用和组件调用两种方式。`,
  },
  js: {
    kind: "Snippet",
    body: ['import Notify from "@vant/weapp/notify/notify";'],
    detail: "Notify 消息提示",
    documentation: `import Notify`,
  },
  functions: [
    {
      kind: "Function",
      body: ["Notify('${1:通知内容}');"],
      detail: "Notify",
      documentation: "Notify('${1:通知内容}');",
    },
    {
      kind: "Function",
      body: [
        "Notify({ type: '${1|primary,success,danger,warning|}', message: '${2:通知内容}' });",
      ],
      detail: "Notify.type",
      documentation: "Notify({ type: 'primary', message: '通知内容' });",
    },
    {
      kind: "Function",
      body: [
        "Notify({message: '${1:自定义颜色}',color: '${2:#ad0000}',background:'${3:#ffe1e1}',duration: ${4:1000},selector: '${5:selector: '#custom-selector'}'});",
      ],
      detail: "Notify.custom",
      documentation:
        "Notify({message: '自定义颜色',color: '#ad0000',background:'#ffe1e1',duration: 1000,selector: '#custom-selector'});",
    },
  ],
};
