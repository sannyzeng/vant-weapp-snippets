exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-circle": "@vant/weapp/circle/index"'],
    detail: "Circle 环形进度条",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ['<van-circle value="{{ ${1:30} }}"${2} />'],
    detail: "Circle 环形进度条",
    documentation: `圆环形的进度条组件，支持进度渐变动画。`,
    attrs: [
      /**
       * Props
        参数	说明	类型	默认值
        value	目标进度	number	0
        type	指定 canvas 类型，可选值为 2d	string	-
        size	圆环直径，默认单位为 px	number	100
        color	进度条颜色，传入对象格式可以定义渐变色	string | object	#1989fa
        layer-color	轨道颜色	string	#fff
        fill	填充颜色	string	-
        speed	动画速度（单位为 value/s）	number	50
        text	文字	string	-
        stroke-width	进度条宽度	number	4
        clockwise	是否顺时针增加	boolean	true
       */
      {
        kind: "Field",
        body: ["value="],
        detail: "value",
        documentation: "目标进度",
        vals: null,
      },
      {
        kind: "Field",
        body: ["type="],
        detail: "type",
        documentation: "指定 canvas 类型，可选值为 2d",
        vals: null,
      },
      {
        kind: "Field",
        body: ["size="],
        detail: "size",
        documentation: "圆环直径，默认单位为 px",
        vals: null,
      },
      {
        kind: "Field",
        body: ["color="],
        detail: "color",
        documentation: "进度条颜色，传入对象格式可以定义渐变色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["layer-color="],
        detail: "layer-color",
        documentation: "轨道颜色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["fill="],
        detail: "fill",
        documentation: "填充颜色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["speed="],
        detail: "speed",
        documentation: "动画速度（单位为 value/s）",
        vals: null,
      },
      {
        kind: "Field",
        body: ["text="],
        detail: "text",
        documentation: "文字",
        vals: null,
      },
      {
        kind: "Field",
        body: ["stroke-width="],
        detail: "stroke-width",
        documentation: "进度条宽度",
        vals: null,
      },
      {
        kind: "Field",
        body: ["clockwise="],
        detail: "clockwise",
        documentation: "是否顺时针增加",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
    ],
  },
};
