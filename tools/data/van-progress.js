exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-progress": "@vant/weapp/progress/index"'],
    detail: "Progress 进度条",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ['<van-progress percentage="${1:50}"${2} />'],
    detail: "Progress 进度条",
    documentation: `用于展示操作的当前进度。`,
    attrs: [
      /**
       * Props
        参数	说明	类型	默认值
        inactive	是否置灰	boolean	false
        percentage	进度百分比	number	0
        stroke-width	进度条粗细，默认单位为px	string | number	4px
        show-pivot	是否显示进度文字	boolean	true
        color	进度条颜色	string	#1989fa
        text-color	进度文字颜色	string	#fff
        track-color	轨道颜色	string	#e5e5e5
        pivot-text	文字显示	string	百分比文字
        pivot-color	文字背景色	string	与进度条颜色一致
       */
      {
        kind: "Field",
        body: ["inactive="],
        detail: "inactive",
        documentation: "是否置灰",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["percentage="],
        detail: "percentage",
        documentation: "进度百分比",
        vals: null,
      },
      {
        kind: "Field",
        body: ["stroke-width="],
        detail: "stroke-width",
        documentation: "进度条粗细，默认单位为px",
        vals: null,
      },
      {
        kind: "Field",
        body: ["show-pivot="],
        detail: "show-pivot",
        documentation: "是否显示进度文字",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["color="],
        detail: "color",
        documentation: "进度条颜色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["text-color="],
        detail: "text-color",
        documentation: "进度文字颜色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["track-color="],
        detail: "track-color",
        documentation: "轨道颜色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["pivot-text="],
        detail: "pivot-text",
        documentation: "文字显示",
        vals: null,
      },
      {
        kind: "Field",
        body: ["pivot-color="],
        detail: "pivot-color",
        documentation: "文字背景色",
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
