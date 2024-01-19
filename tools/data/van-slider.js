exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-slider": "@vant/weapp/slider/index"'],
    detail: "Slider 滑块",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ["<van-slider${1}>${2}</van-slider>"],
    detail: "Slider 滑块",
    documentation: `滑动输入条，用于在给定的范围内选择一个值。`,
    attrs: [
      /**
       * Props
        参数	说明	类型	默认值
        value	当前进度百分比，在双滑块模式下为数组格式	number | number[]	0
        disabled	是否禁用滑块	boolean	false
        max	最大值	number	100
        min	最小值	number	0
        step	步长	number	1
        bar-height	进度条高度，默认单位为 px	string | number	2px
        active-color	进度条激活态颜色	string	#1989fa
        inactive-color	进度条默认颜色	string	#e5e5e5
        use-button-slot	是否使用按钮插槽	boolean	false
        range v1.8.4	是否开启双滑块模式	boolean	false
        vertical v1.8.5	是否垂直展示	boolean	false

       */
      {
        kind: "Field",
        body: ["value="],
        detail: "value",
        documentation: "当前进度百分比，在双滑块模式下为数组格式",
        vals: null,
      },
      {
        kind: "Field",
        body: ["disabled="],
        detail: "disabled",
        documentation: "是否禁用滑块",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["max="],
        detail: "max",
        documentation: "最大值",
        vals: null,
      },
      {
        kind: "Field",
        body: ["min="],
        detail: "min",
        documentation: "最小值",
        vals: null,
      },
      {
        kind: "Field",
        body: ["step="],
        detail: "step",
        documentation: "步长",
        vals: null,
      },
      {
        kind: "Field",
        body: ["bar-height="],
        detail: "bar-height",
        documentation: "进度条高度，默认单位为 px",
        vals: null,
      },
      {
        kind: "Field",
        body: ["active-color="],
        detail: "active-color",
        documentation: "进度条激活态颜色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["inactive-color="],
        detail: "inactive-color",
        documentation: "进度条默认颜色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["use-button-slot="],
        detail: "use-button-slot",
        documentation: "是否使用按钮插槽",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["range="],
        detail: "range",
        documentation: "是否开启双滑块模式",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["vertical="],
        detail: "vertical",
        documentation: "是否垂直展示",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      /**
       * Events
        事件名	说明	参数
        bind:drag	拖动进度条时触发	event.detail.value: 当前进度
        bind:change	进度值改变后触发	event.detail: 当前进度
        bind:drag-start	开始拖动时触发	-
        bind:drag-end	结束拖动时触发	-
       */
      {
        kind: "Event",
        body: ["bind:drag="],
        detail: "bind:drag",
        documentation: "拖动进度条时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:change="],
        detail: "bind:change",
        documentation: "进度值改变后触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:drag-start="],
        detail: "bind:drag-start",
        documentation: "开始拖动时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:drag-end="],
        detail: "bind:drag-end",
        documentation: "结束拖动时触发",
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
    /**
     * Slots
      名称	说明	参数
      button	自定义滑块按钮	{ value: number }
      left-button v1.8.4	自定义左侧滑块按钮（双滑块模式下）	{ value: number }
      right-button v1.8.4	自定义右侧滑块按钮 （双滑块模式下）	{ value: number }
     */
    slot: {
      kind: "Value",
      body: ["button", "left-button", "right-button"],
      detail: "Slider 滑块 Slot",
      documentation: `
      button	自定义滑块按钮	{ value: number }
      left-button v1.8.4	自定义左侧滑块按钮（双滑块模式下）	{ value: number }
      right-button v1.8.4	自定义右侧滑块按钮 （双滑块模式下）	{ value: number }
      `,
      vals: null,
    },
  },
};
