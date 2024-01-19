exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-count-down": "@vant/weapp/count-down/index"'],
    detail: "CountDown 倒计时",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ['<van-count-down time="{{ ${1:time} }}"${2} />'],
    detail: "CountDown 倒计时",
    documentation: `用于实时展示倒计时数值，支持毫秒精度。`,
    attrs: [
      /**
       * Props
        参数	说明	类型	默认值
        time	倒计时时长，单位毫秒	number	-
        format	时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒	string	HH:mm:ss
        auto-start	是否自动开始倒计时	boolean	true
        millisecond	是否开启毫秒级渲染	boolean	false
        use-slot	是否使用自定义样式插槽	boolean	false
       */
      {
        kind: "Field",
        body: ["time="],
        detail: "time",
        documentation: "倒计时时长，单位毫秒",
        vals: null,
      },
      {
        kind: "Field",
        body: ["format="],
        detail: "format",
        documentation: "时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒",
        vals: null,
      },
      {
        kind: "Field",
        body: ["auto-start="],
        detail: "auto-start",
        documentation: "是否自动开始倒计时",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["millisecond="],
        detail: "millisecond",
        documentation: "是否开启毫秒级渲染",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["use-slot="],
        detail: "use-slot",
        documentation: "是否使用自定义样式插槽",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },

      /**
       * Events
        事件名	说明	回调参数
        bind:finish	倒计时结束时触发	-
        bind:change	时间变化时触发，仅在开启use-slot后才会触发	timeData
       */
      {
        kind: "Event",
        body: ["bind:finish"],
        detail: "倒计时结束时触发",
        documentation: "-",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:change"],
        detail: "时间变化时触发，仅在开启use-slot后才会触发",
        documentation: "timeData",
        vals: null,
      },
    ],
  },
};
