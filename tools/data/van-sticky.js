exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-sticky": "@vant/weapp/sticky/index"'],
    detail: "Sticky 粘性布局",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ["<van-sticky${1}>${2}</van-sticky>"],
    detail: "Sticky 粘性布局",
    documentation: `Sticky 组件与 CSS 中position: sticky属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。`,
    attrs: [
      {
        kind: "Field",
        body: ["offset-top="],
        detail: "offset-top",
        documentation: "吸顶时与顶部的距离，单位px",
        vals: null,
      },
      {
        kind: "Field",
        body: ["z-index="],
        detail: "z-index",
        documentation: "吸顶时的 z-index",
        vals: null,
      },
      {
        kind: "Field",
        body: ["container="],
        detail: "container",
        documentation: "一个函数，返回容器对应的 NodesRef 节点",
        vals: null,
      },
      {
        kind: "Field",
        body: ["scroll-top="],
        detail: "scroll-top",
        documentation:
          "当前滚动区域的滚动位置，非 null 时会禁用页面滚动事件的监听",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:scroll="],
        detail: "bind:scroll",
        documentation:
          "滚动时触发 { scrollTop: 距离顶部位置, isFixed: 是否吸顶 }",
        vals: null,
      },
    ],
  },
};
